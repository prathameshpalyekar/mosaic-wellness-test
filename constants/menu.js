export const GUEST_MENU = [{
  id: 'faq',
  label: 'FAQs',
  link: '/faq',
}, {
  id: 'contact',
  label: 'Contact Us',
  link: '/contact',
}];

export const LOGGED_IN_USER_MENU = [{
  id: 'dashboard',
  label: 'Dashboard',
  link: '/user-dashboard'
}].concat(GUEST_MENU);

