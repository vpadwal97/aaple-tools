export function encodeURL(text: string): string {
  try {
    return encodeURIComponent(text);
  } catch {
    return "Encoding failed";
  }
}

export function decodeURL(text: string): string {
  try {
    return decodeURIComponent(text);
  } catch {
    return "Invalid URL encoded string";
  }
}
