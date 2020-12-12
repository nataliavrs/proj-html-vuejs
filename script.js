var app = new Vue({
  el: '#app',
  data: {
    // NAVIGATION BAR
    navLinks: ['homes', 'pages','blog','shop','events','elements'],
    // FOOTER
    // footer sections titles
    titles: ['about', 'twitter', 'important links', 'contact me'],
    // tweets section
    tweets: [
      {
        username: '@aliasadm',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing. '
      },
      {
        username: '@HenrySefaBoaky',
        message: 'Hi, can you please submit a ticket at https'
      }
    ],
    // links section
    footerLinks: ['about', 'about us', 'language packs', 'become a coach', 'monthly events'],
    // contact me section 
    contact: [
      {
        address: '457 BigBlue Street, NY 10013',
        number: '(315) 5512-2579',
        email: 'everlead@mikado.com',
      },
    ],
    // icons classes
    icons: ['fab fa-linkedin-in','fab fa-facebook-f','fab fa-twitter','fas fa-map-marker-alt','far fa-clock','fas fa-tag','far fa-user'],
    // CONTACT US
    // hover changes logo image
    hoverLogo: false,
  },
  methods: {
    mouseover: function () {
      this.hoverLogo = true;
    },
    mouseleave: function () {
      this.hoverLogo = false;
    }
  },
});
