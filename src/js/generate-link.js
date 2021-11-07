export function generateLink(brand) {
  let link;
  if (brand === 'facebook') link = 'facebook.com/';
  if (brand === 'youtube') link = 'www.youtube.com/';
  if (brand === 'twitter') link = 'twitter.com/';
  if (brand === 'instagram') link = 'instagram.com/';
  return link;
}
