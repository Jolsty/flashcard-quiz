/* eslint-disable import/prefer-default-export */
export function decode(str) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
}

export function outerHeight(el) {
  const height = el.offsetHeight;
  const style = getComputedStyle(el);
  const computedHeight = height + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  console.log('Log: outerHeight -> el', el, height, computedHeight);

  return computedHeight;
}
