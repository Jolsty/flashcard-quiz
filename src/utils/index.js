/* eslint-disable import/prefer-default-export */
export function decode(str) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
}
