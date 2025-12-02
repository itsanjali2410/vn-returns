import { UTMFields } from '../types/utm.type';
import { setStorage, getStorage } from './storage';
import { LAST_TOUCH_KEY, FIRST_TOUCH_KEY } from '../constant';

const UTM_KEYS: (keyof UTMFields)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_keyword',
  'utm_placement',
];

export function ensureNullableShape(input: Partial<UTMFields>): UTMFields {
  const output: UTMFields = {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_keyword: '',
    utm_placement: '',
    source: '',
  };
  UTM_KEYS.forEach((key) => {
    output[key] = input[key] ?? '';
  });
  return output;
}

// Extract UTMs from URL query
export function extractUTMFromURL(search: string): UTMFields {
  const params = new URLSearchParams(search);
  const utms: Partial<UTMFields> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) utms[key] = value;
  });

  // Map utm_term → utm_keyword if utm_keyword missing
  if (!utms.utm_keyword && params.get('utm_term')) {
    utms.utm_keyword = params.get('utm_term');
  }

  // const utmSource = utms.utm_source?.toLowerCase() || "";
  // utms.source = SOCIAL_MEDIA_SOURCES.some((social) => utmSource.includes(social))
  // ? "Social Media"
  // : "Website";

  
  return ensureNullableShape(utms);
}

// Capture UTMs, handle both first-touch & last-touch
export function captureUTMs(search: string) {
  const fresh = extractUTMFromURL(search);
  
  const hasAny = Object.values(fresh).some((v) => v !== null && v !== '');
  if (!hasAny) return;

  //   const utmSource = fresh.utm_source?.trim() || "";
  // const SOCIAL_MEDIA_REGEX = new RegExp(SOCIAL_MEDIA_SOURCES.join("|"), "i");
  // fresh.source = !utmSource
  //   ? "Direct"
  //   : SOCIAL_MEDIA_REGEX.test(utmSource)
  //   ? "Social Media"
  //   : "Website";
  // --- First-touch ---
  const firstTouch = getStorage<UTMFields>(FIRST_TOUCH_KEY);
  if (!firstTouch) {
    setStorage<UTMFields>(FIRST_TOUCH_KEY, { ...fresh });
  }

  // --- Last-touch ---
  setStorage<UTMFields>(LAST_TOUCH_KEY, { ...fresh });
}

// Public getters
export const getFirstTouchUTM = (): UTMFields | null => getStorage(FIRST_TOUCH_KEY);

export const getLastTouchUTM = (): UTMFields | null => getStorage(LAST_TOUCH_KEY);

export function addPrefixToUTM(data: UTMFields | null, prefix: string): Record<string, string> {
  const result: Record<string, string> = {};

  if (data) {
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof UTMFields];
      if (key !== 'source' && value) {
        result[`${prefix}${key}`] = value;
      }
    });
  }

  return result;
}
