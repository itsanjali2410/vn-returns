import { getImageCredit } from '@/data/imageCredits';

type Props = {
  /** The same src passed to the image */
  src: string;
  className?: string;
};

/**
 * Renders "Photo: <source>" linked to the original article for images that
 * have an entry in src/data/imageCredits.ts. Renders nothing otherwise.
 */
export default function PhotoCredit({ src, className = '' }: Props) {
  const credit = getImageCredit(src);
  if (!credit) return null;

  return (
    <p className={`text-[11px] leading-tight text-gray-500 ${className}`}>
      Photo:{' '}
      <a
        href={credit.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-800"
      >
        {credit.label}
      </a>
    </p>
  );
}
