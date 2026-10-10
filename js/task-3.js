function getElementWidth(content, padding, border) {
  // робимо з 50рх і тд. числа - 50, 8.5, 4
  // console.log(Number("50px")) - не підходить тому що є букви, тому використаємо parseFloat
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);
  // множимо на 2 тому що padding і border з двох сторін, контент один
  return contentWidth + paddingWidth * 2 + borderWidth * 2;
  // return contentWidth + paddingWidth + paddingWidth + borderWidth + borderWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
