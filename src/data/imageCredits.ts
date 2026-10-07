export type ImageCredit = {
  /** Name shown after "Photo:" */
  label: string;
  /** Link to the original article / source */
  href: string;
};

/**
 * Photo credits keyed by the public image path used in <Image src=...>.
 * Add an entry here and <PhotoCredit src=... /> will render the credit
 * wherever that image is displayed.
 */
export const imageCredits: Record<string, ImageCredit> = {
  '/popular_cities/Phu Quoc.webp': {
    label: 'LillaGreen Travel Magazine',
    href: 'https://lillagreen.com/the-complete-phu-quoc-travel-guide-discover-vietnams-tropical-gem/',
  },
};

export function getImageCredit(src: string): ImageCredit | undefined {
  return imageCredits[src];
}
