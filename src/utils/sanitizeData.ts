// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitizeData = <T extends Record<string, any>>(data: T): T => {
  const sanitized = {} as T;

  (Object.keys(data) as Array<keyof T>).forEach((key) => {
    const value = data[key];

    if (typeof value === 'string') {
      // ✅ Trim spaces + prevent XSS
      sanitized[key] = value.trim().replace(/[<>]/g, '') as T[keyof T];
    } else if (Array.isArray(value)) {
      // ✅ Recursively sanitize array items
      sanitized[key] = value.map((item: unknown) =>
        typeof item === 'string' ? item.trim().replace(/[<>]/g, '') : item
      ) as T[keyof T];
    } else if (typeof value === 'object' && value !== null) {
      // ✅ Recursively sanitize nested objects
      sanitized[key] = sanitizeData(value) as T[keyof T];
    } else {
      sanitized[key] = value;
    }
  });

  return sanitized;
};
