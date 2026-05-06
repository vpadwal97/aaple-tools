export type SlugOptions = {
  lowercase?: boolean;
  separator?: "-" | "_";
  removeStopWords?: boolean;
};

const stopWords = [
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
];

export function generateSlug(text: string, options?: SlugOptions) {
  if (!text) return "";

  let result = text.trim();

  if (options?.lowercase !== false) {
    result = result.toLowerCase();
  }

  // Remove special characters
  result = result.replace(/[^\w\s-]/g, "");

  // Remove stop words
  if (options?.removeStopWords) {
    result = result
      .split(" ")
      .filter((word) => !stopWords.includes(word))
      .join(" ");
  }

  const separator = options?.separator || "-";

  // Replace spaces with separator
  result = result.replace(/\s+/g, separator);

  // Remove duplicate separators
  const regex = new RegExp(`${separator}+`, "g");
  result = result.replace(regex, separator);

  return result;
}
