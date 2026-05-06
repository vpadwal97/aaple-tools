export function minifyHTML(input: string) {
  return input
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim();
}

export function beautifyHTML(input: string) {
  let indent = 0;
  return input
    .replace(/>\s*</g, ">\n<")
    .split("\n")
    .map((line) => {
      if (line.match(/^<\/\w/)) indent--;
      const result = "  ".repeat(indent) + line;
      if (line.match(/^<\w[^>]*[^/]>/)) indent++;
      return result;
    })
    .join("\n");
}

// CSS
export function minifyCSS(input: string) {
  return input
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .trim();
}

export function beautifyCSS(input: string) {
  return input
    .replace(/{/g, "{\n  ")
    .replace(/;/g, ";\n  ")
    .replace(/}/g, "\n}\n")
    .trim();
}

// JS (basic)
export function minifyJS(input: string) {
  return input
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}();,:])\s*/g, "$1")
    .trim();
}

export function beautifyJS(input: string) {
  return input
    .replace(/{/g, "{\n  ")
    .replace(/;/g, ";\n  ")
    .replace(/}/g, "\n}\n")
    .trim();
}
