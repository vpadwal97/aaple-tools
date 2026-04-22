export function getWordStats(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const characters = text.length;
  const sentences = text.split(/[.!?]+/).filter(Boolean);

  return {
    words: words.length,
    characters,
    sentences: sentences.length,
  };
}
