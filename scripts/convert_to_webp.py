"""
Convert all images in /public to .webp format.
- Converts .jpg, .jpeg, .png, .gif to .webp
- Updates all references in /src to use the new .webp paths
- Deletes the original files after conversion
- Skips files that are already .webp
- Skips .ico and .svg files

Usage: python scripts/convert_to_webp.py
"""

import os
import sys
import re
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system(f"{sys.executable} -m pip install Pillow")
    from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = PROJECT_ROOT / "public"
SRC_DIR = PROJECT_ROOT / "src"

CONVERTIBLE = {'.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG', '.GIF'}
SKIP_DIRS = {'.git', 'node_modules', '.next'}

converted = []
failed = []
references_updated = 0


def convert_image(filepath: Path) -> Path | None:
    """Convert a single image to webp. Returns new path or None on failure."""
    new_path = filepath.with_suffix('.webp')

    if new_path.exists():
        # Already has a .webp version, just delete original
        print(f"  [skip] {filepath.name} -> .webp already exists, deleting original")
        filepath.unlink()
        return new_path

    try:
        img = Image.open(filepath)
        # Handle RGBA for PNGs
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGBA')
            img.save(new_path, 'WEBP', quality=85, method=4)
        else:
            img = img.convert('RGB')
            img.save(new_path, 'WEBP', quality=85, method=4)

        original_size = filepath.stat().st_size
        new_size = new_path.stat().st_size
        savings = ((original_size - new_size) / original_size) * 100

        print(f"  [ok] {filepath.name} -> {new_path.name} ({savings:.0f}% smaller)")

        # Delete original
        filepath.unlink()
        return new_path

    except Exception as e:
        print(f"  [fail] {filepath.name}: {e}")
        failed.append(str(filepath))
        return None


def find_images(directory: Path) -> list:
    """Find all convertible images recursively."""
    images = []
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for f in files:
            filepath = Path(root) / f
            if filepath.suffix.lower() in {s.lower() for s in CONVERTIBLE}:
                images.append(filepath)
    return images


def update_references(old_path: str, new_path: str):
    """Update all references in src/ files."""
    global references_updated

    for root, dirs, files in os.walk(SRC_DIR):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for f in files:
            if not f.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.css')):
                continue

            filepath = Path(root) / f
            try:
                content = filepath.read_text(encoding='utf-8')
                if old_path in content:
                    new_content = content.replace(old_path, new_path)
                    filepath.write_text(new_content, encoding='utf-8')
                    count = content.count(old_path)
                    references_updated += count
                    print(f"    Updated {count} ref(s) in {filepath.relative_to(PROJECT_ROOT)}")
            except (UnicodeDecodeError, PermissionError):
                pass


def get_web_path(filepath: Path) -> str:
    """Get the web-accessible path relative to /public."""
    rel = filepath.relative_to(PUBLIC_DIR)
    return '/' + str(rel).replace('\\', '/')


def main():
    print("=" * 60)
    print("IMAGE TO WEBP CONVERTER")
    print("=" * 60)

    images = find_images(PUBLIC_DIR)
    print(f"\nFound {len(images)} images to convert\n")

    if not images:
        print("Nothing to convert!")
        return

    for img_path in sorted(images):
        old_web_path = get_web_path(img_path)
        new_path = convert_image(img_path)

        if new_path:
            new_web_path = get_web_path(new_path)

            # Update references: both with and without extension
            old_name = img_path.name
            new_name = new_path.name

            # Update exact path references in src/
            update_references(old_web_path, new_web_path)

            converted.append({
                'old': old_web_path,
                'new': new_web_path,
            })

    print(f"\n{'=' * 60}")
    print(f"CONVERSION COMPLETE")
    print(f"  Converted: {len(converted)} images")
    print(f"  Failed: {len(failed)}")
    print(f"  References updated: {references_updated}")
    print(f"{'=' * 60}")

    if failed:
        print("\nFailed files:")
        for f in failed:
            print(f"  - {f}")


if __name__ == "__main__":
    main()
