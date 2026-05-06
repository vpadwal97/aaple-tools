export type RegexFlags = {
  global?: boolean;
  ignoreCase?: boolean;
  multiline?: boolean;
};

export function runRegex(pattern: string, text: string, flags: RegexFlags) {
  try {
    let flagStr = "";
    if (flags.global) flagStr += "g";
    if (flags.ignoreCase) flagStr += "i";
    if (flags.multiline) flagStr += "m";

    const regex = new RegExp(pattern, flagStr);

    const matches = [...text.matchAll(regex)];

    return {
      matches,
      error: null,
    };
  } catch (err: any) {
    return {
      matches: [],
      error: err.message,
    };
  }
}
