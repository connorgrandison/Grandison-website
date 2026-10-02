import fs from 'node:fs';
const data = JSON.parse(fs.readFileSync(new URL('./reviews.json', import.meta.url), 'utf8'));
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const stars = rating => `<div class="reviews-stars" role="img" aria-label="${rating} out of 5 stars"><span aria-hidden="true">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span></div>`;

export function reviewsSection() {
  return `<section class="section google-reviews" id="customer-reviews" aria-labelledby="reviews-heading">
    <div class="reviews-intro">
      <p class="eyebrow">CUSTOMER REVIEWS</p>
      <h2 id="reviews-heading">In our customers’ words.</h2>
      <p>Feedback from people who have chosen Grandison for their homes.</p>
      <div class="reviews-rating"><strong>${data.rating.toFixed(1)}</strong>${stars(data.rating)}<span>Based on ${data.count} Google reviews</span><div class="reviews-attribution"><img class="reviews-google-logo" src="/assets/google-maps-logo.svg" alt="Google Maps" height="18" loading="lazy"></div></div>
      <div class="reviews-actions"><a class="text-link" href="${esc(data.profileUrl)}">Read reviews on Google ↗</a></div>
    </div>
    <div class="reviews-content">
      <div class="reviews-cards">${data.reviews.map(review => `<article class="review-card"><header><div>${review.authorUrl?`<a class="review-author" href="${esc(review.authorUrl)}">${esc(review.author)}</a>`:`<span class="review-author">${esc(review.author)}</span>`}<span class="review-date">${esc(review.date)}</span></div></header>${stars(review.rating)}<blockquote><p>${esc(review.text)}</p></blockquote><a class="review-source" href="${esc(data.profileUrl)}">Read reviews on Google ↗</a></article>`).join('')}</div>
      <p class="reviews-notice">Rating and review count checked on <time datetime="${data.checkedOn}">${data.checkedLabel}</time>. Visit Google for the latest reviews.</p>
    </div>
  </section>`;
}
