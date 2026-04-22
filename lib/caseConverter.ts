export function convertCase(text: string) {
  return {
    upper: text.toUpperCase(),
    lower: text.toLowerCase(),
    title: text.replace(
      /\w\S*/g,
      (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    ),
    camel: text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()),
    snake: text.toLowerCase().replace(/\s+/g, "_").replace(/[^\w]/g, ""),
  };
}
