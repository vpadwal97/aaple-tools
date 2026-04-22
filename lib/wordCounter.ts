export function getWordStats(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const readingTime = Math.ceil(words.length / 200);
  return {
    words: words.length,
    characters,
    charactersNoSpaces,
    sentences: sentences.length,
    readingTime,
  };
}
