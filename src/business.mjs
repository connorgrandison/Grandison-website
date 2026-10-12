import fs from 'node:fs';
const contact = JSON.parse(fs.readFileSync(new URL('./contact.json', import.meta.url), 'utf8'));
export const business = {
  name: 'Grandison Plumbing & Heating', operator: 'Connor Grandison', formerName: 'Grandison Gas',
  origin: 'https://grandisonplumbingandheating.co.uk', base: 'Fife, Scotland',
  googleProfile: 'https://www.google.com/maps?cid=11737845119236094780',
  ...contact,
  gasSafeNumber: '', gasSafeConfirmed: false,
  googleVerification: '', bingVerification: '',
};
