export function convertTimestamp(input: string) {
  if (!input) return { error: "Empty input" };

  // Detect if number (Unix timestamp)
  if (/^\d+$/.test(input)) {
    try {
      const num = parseInt(input);

      // Handle seconds vs milliseconds
      const date = input.length === 13 ? new Date(num) : new Date(num * 1000);

      return {
        type: "unix",
        date: date.toString(),
        iso: date.toISOString(),
      };
    } catch {
      return { error: "Invalid timestamp" };
    }
  }

  // Otherwise treat as date
  try {
    const date = new Date(input);

    if (isNaN(date.getTime())) {
      return { error: "Invalid date format" };
    }

    return {
      type: "date",
      unixSeconds: Math.floor(date.getTime() / 1000),
      unixMilliseconds: date.getTime(),
    };
  } catch {
    return { error: "Conversion failed" };
  }
}
