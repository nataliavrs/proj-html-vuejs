var app = new Vue({
  el: '#app',
  data: {
    titles: ['About', 'Twitter', 'Important Links', 'Contact me'],
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
    links: ['About', 'About us', 'Language packs', 'Become a coach', 'Monthly events'],
    contact: [
      {
        address: '457 BigBlue Street, NY 10013',
        number: '(315) 5512-2579',
        email: 'everlead@mikado.com',
      },
    ]
  },
  mounted: function () {

  },
  methods: {

  }
});
