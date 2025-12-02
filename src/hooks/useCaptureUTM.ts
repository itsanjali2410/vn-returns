'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  captureUTMs,
  getFirstTouchUTM,
  getLastTouchUTM,
  ensureNullableShape,
  addPrefixToUTM,
} from '@/utils/utm';
import { UTMFields } from '@/types/utm.type';

export function useCaptureUTM() {
  const searchParams = useSearchParams();
  const [firstUTM, setFirstUTM] = useState<UTMFields | null>(getFirstTouchUTM());
  const [lastUTM, setLastUTM] = useState<UTMFields | null>(getLastTouchUTM());

  useEffect(() => {
    if (!searchParams) return;

    // Convert URLSearchParams → query string
    const queryString = searchParams.toString();
    if (queryString) {
      captureUTMs('?' + queryString);
    }

    // After storing, update state immediately
    setFirstUTM(getFirstTouchUTM());
    setLastUTM(getLastTouchUTM());
  }, [searchParams]);

  return {
    firstUTM: addPrefixToUTM(ensureNullableShape(firstUTM || {}), 'first_'),
    lastUTM: addPrefixToUTM(ensureNullableShape(lastUTM || {}), 'last_'),
  };
}
