export function generateLink(brand) {
  let link;
  if (brand === 'facebook') link = 'https://facebook.com/';
  if (brand === 'youtube') link = 'https://www.youtube.com/';
  if (brand === 'twitter') link = 'https://twitter.com/';
  if (brand === 'instagram') link = 'https://instagram.com/';
  return link;
}
