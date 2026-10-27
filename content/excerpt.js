// Returns the opening sentence of an original paragraph, unchanged, for compact displays.
export function firstSentence(text) {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : text;
}
