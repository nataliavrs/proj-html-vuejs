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
    icons: 
      {
      linkedin: 'fab fa-linkedin-in',
      facebook: 'fab fa-facebook-f',
      twitter: 'fab fa-twitter',
      map: 'fas fa-map-marker-alt',
      clock: 'far fa-clock',
      tag: 'fas fa-tag',
      avatar: 'far fa-user',
      phone: 'fas fa-phone-alt',
      email: 'far fa-envelope',
      search: 'fas fa-search',
      list: 'fas fa-list',
      }
    ,
    // CONTACT US
    // hover changes logo image
    hoverLogo: false,
    // open video on click
    show: "hide-video"
  },
  methods: {
    // FUNCTIONS TO SWIPE LOGO IMAGES ON HOVER
    mouseover: function () {
      this.hoverLogo = true;
    },
    mouseleave: function () {
      this.hoverLogo = false;
    },
    // FUNCTION TO SHOW VIDEO ON CLICK
    openVideo: function () {
      this.show = "show-video";
    }
  },
});
