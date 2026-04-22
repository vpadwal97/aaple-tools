// export function encodeBase64(text: string): string {
//   try {
//     return btoa(text);
//   } catch {
//     return "Encoding failed";
//   }
// }

// export function decodeBase64(text: string): string {
//   try {
//     return atob(text);
//   } catch {
//     return "Invalid Base64";
//   }
// }

export function encodeBase64(text: string): string {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    return "Encoding failed";
  }
}

export function decodeBase64(text: string): string {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch {
    return "Invalid Base64";
  }
}
