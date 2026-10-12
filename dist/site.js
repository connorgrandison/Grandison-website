document.documentElement.classList.add('js');
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));nav.classList.toggle('is-open',expanded)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.focus()}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=filter!=='All'&&card.dataset.category!==filter;if(!card.hidden)count++});document.querySelector('#filter-status').textContent=`Showing ${count} ${filter==='All'?'':filter.toLowerCase()+' '}projects.`}));
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-lightbox]').forEach(a=>a.addEventListener('click',e=>{if(!dialog?.showModal)return;e.preventDefault();dialog.querySelector('img').src=a.href;dialog.querySelector('img').alt=a.querySelector('img').alt;dialog.querySelector('p').textContent=a.dataset.caption;dialog.showModal()}));
dialog?.querySelector('button').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});

// Only recognised service links tailor the contact page; all other visits keep its useful default.
const contactIntro=document.querySelector('[data-contact-intro]');
const bathroomEnquiries=new Map([
  ['Bathrooms','Let’s talk about your bathroom.'],
  ['Full bathroom renovations','Plan your bathroom renovation.'],
  ['Shower rooms','Let’s talk about your shower room.']
]);
const enquiryHeading=bathroomEnquiries.get(new URLSearchParams(location.search).get('service'));
if(contactIntro&&enquiryHeading){
  contactIntro.querySelector('h1').textContent=enquiryHeading;
  contactIntro.querySelector('.page-intro > p:last-child').textContent='Call or text Connor about your project in Fife, or get in touch on Facebook. Start with your postcode and what you would like to change.';
  const guide=document.querySelector('.enquiry-guide');
  guide.querySelector('h2').textContent='Your bathroom project at a glance.';
  const details=[
    'Your postcode and whether this is a full renovation, a shower room or replacement fittings.',
    'What you want to change, including any changes to the layout.',
    'Photographs of the room and approximate dimensions, if available.',
    'Your preferred timing and whether this is your only bathroom.',
    'Whether you would like supply and fit or installation only, and any fittings already chosen or bought.'
  ];
  guide.querySelector('ul').replaceChildren(...details.map(text=>{const item=document.createElement('li');item.textContent=text;return item}));
}
