export function toRem(pixel, rootFontSize = 16) {
  return `${pixel / rootFontSize}rem`;
}
