export function truncateParagraph(paragraph: string, maxLength: number) {
  if (paragraph.length <= maxLength) {
    return paragraph;
  } else {
    const truncatedText = paragraph.substring(0, maxLength - 3);
    const ellipsisCount = maxLength - truncatedText.length;
    const ellipsis = ' '.repeat(ellipsisCount) + '...';
    return truncatedText + ellipsis;
  }
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
