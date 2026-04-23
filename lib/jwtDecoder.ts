export function decodeJWT(token: string) {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return { error: "Invalid JWT format" };
    }

    const decode = (str: string) => {
      return JSON.parse(atob(str.replace(/-/g, "+").replace(/_/g, "/")));
    };

    return {
      header: decode(parts[0]),
      payload: decode(parts[1]),
      error: "",
    };
  } catch {
    return { error: "Failed to decode token" };
  }
}
