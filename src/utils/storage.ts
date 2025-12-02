import { safeJSONParse } from './safeParser';

/**
 * Save data to both localStorage and cookies.
 * @param key - The storage key.
 * @param value - The data to store.
 * @param expiryDays - Optional cookie expiry in days (default: 7).
 */
export function setStorage<T>(key: string, value: T, expiryDays = 7): void {
  const json = JSON.stringify(value);

  // Save to localStorage
  localStorage.setItem(key, json);

  // Save to cookies
  document.cookie = `${key}=${encodeURIComponent(json)}; path=/; max-age=${expiryDays * 86400}`;
}

/**
 * Retrieve data from localStorage or cookies.
 * @param key - The storage key.
 */
export function getStorage<T>(key: string): T | null {
  if (typeof window === 'undefined') {
    return null; // On server, return null
  }
  const local = localStorage.getItem(key);

  if (local) {
    return safeJSONParse<T>(local);
  }

  // Fallback from cookies
  const cookieMatch = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  if (cookieMatch) {
    return safeJSONParse<T>(decodeURIComponent(cookieMatch[2]));
  }

  return null;
}

/**
 * Remove data from both localStorage and cookies.
 * @param key - The storage key.
 */
export function removeStorage(key: string): void {
  // Remove from localStorage
  localStorage.removeItem(key);

  // Remove from cookies
  document.cookie = `${key}=; path=/; max-age=0`;
}

// function setStorage(key: string, value: UTMFields) {
//   const json = JSON.stringify(value);
//   localStorage.setItem(key, json);
//   document.cookie = `${key}=${encodeURIComponent(json)}; path=/; max-age=${
//     7 * 86400
//   }`;
// }

// function getStorage(key: string): UTMFields | null {
//   const local = localStorage.getItem(key);

//   if (local) {
//     return safeJSONParse<UTMFields>(local);
//   }

//   // fallback from cookies
//   const cookieMatch = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
//   if (cookieMatch) {
//     return safeJSONParse<UTMFields>(decodeURIComponent(cookieMatch[2]));
//   }

//   return null;
// }
