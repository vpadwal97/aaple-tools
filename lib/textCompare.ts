export function compareText(text1: string, text2: string) {
  const words1 = text1.split(/\s+/);
  const words2 = text2.split(/\s+/);

  const maxLength = Math.max(words1.length, words2.length);

  const result = [];

  for (let i = 0; i < maxLength; i++) {
    if (words1[i] === words2[i]) {
      result.push({ type: "same", value: words1[i] || "" });
    } else {
      if (words1[i]) {
        result.push({ type: "removed", value: words1[i] });
      }
      if (words2[i]) {
        result.push({ type: "added", value: words2[i] });
      }
    }
  }

  return result;
}
