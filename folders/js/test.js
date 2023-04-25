
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#d1d1d1',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
      },
    },
  },
})

// import image1 from '../image/'

new Vue({
  el: '#test-page',
  vuetify: new Vuetify(),
  data: {
    links: [
      {
        text: 'تور',
        subLinks: [
          {
            text: 'اروپا',
            active: false,
            sub2: [
              {
                text: 'فرانسه و ترکیه(9 روز)',
                link: '/tour/Europe/تور-ترکیه-فرانسه/'
              },
              {
                text: 'فرانسه-ایتالیا-ترکیه(11روز)',
                link: '/tour/Europe/تور-فرانسه-ایتالیا-ترکیه/'
              },
              {
                text: 'فرانسه - اسپانیا - ایتالیا - ترکیه(16روز)',
                link: '/tour/Europe/تور-فرانسه-اسپانیا-ایتالیا-ترکیه/'
              },
              {
                text: 'اسپانیا - سوئیس - ترکیه(12روز)',
                link: '/tour/Europe/تور-اسپانیا-سوئیس-ترکیه/'
              },
              {
                text: 'اسپانیا - ترکیه(13روز)',
                link: '/tour/Europe/تور-اسپانیا-ترکیه/'
              },
              {
                text: 'سوئیس - ترکیه(11 روز)',
                link: '/tour/Europe/تور-سوئیس-ترکیه/'
              },
              {
                text: 'اسپانیا - فرانسه - ترکیه(13روز)',
                link: '/tour/Europe/تور-اسپانیا-فرانسه-ترکیه/'
              },
              {
                text: 'سوئیس - ترکیه(8روز)',
                link: '/tour/Europe/تور-سوئیس/'
              },
              {
                text: 'دور اروپا(23 روز)',
                link: '/tour/Europe/تور-دور-اروپا/'
              },
            ]
          },
          {
            text: 'سریلانکا',
            active: false,
            sub2: [
              {
                text: '14 شب و 15 روز',
                link: '/tour/Srilanka/تور-سریلانکا-15روز/'
              },
            ]
          },
          {
            text: 'روسیه',
            active: false,
            sub2: [
              {
                text: '4 شب و 5 روز',
                link: '/tour/Moscow/RUS-1401-Z-017/'
              },
            ]
          },
          {
            text: 'تایلند',
            active: false,
            sub2: [
              {
                text: '4 شب و 5 روز',
                link: '/tour/Thailand/thai-1401-n19/'
              },
            ]
          },
          {
            text: 'تایلند-مالزی',
            active: false,
            sub2: [
              {
                text: '11 شب',
                link: ''
              },
            ]
          },
          {
            text: 'استانبول',
            active: false,
            sub2: [
              {
                text: '3 شب و 4 روز',
                link: '/tour/Istanbul/003-4/',
              },
              {
                text: '4 شب و 5 روز',
                link: '/tour/Istanbul/004-5/',
              },
              {
                text: '5 شب و 6 روز',
                link: '/tour/Istanbul/005-6/',
              },
            ]
          },
          {
            text: 'دبی',
            active: false,
            sub2: [
              
              {
                text: '3 شب و 4 روز',
                link: '/tour/Dubai/تور-3-شب-دبی/'
              },
              {
                text: '4 شب و 5 روز',
                link: '/tour/Dubai/تور-4-شب-دبی/'
              },
              {
                text: '5 شب و 6 روز',
                link: '/tour/Dubai/تور-5-شب-دبی/'
              },
            ]
          },
        ],
      },
    ],
    activeLinkMenuHeader: '',
    isEditing: true,
    model: null,
    states: [
      'Alabama', 'Alaska', 'American Samoa', 'Arizona',
      'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'District of Columbia', 'Federated States of Micronesia',
      'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
      'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada',
      'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
      'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
      'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ]
  },
  watch: {

  },
  methods: {

  },
  created() {

  },

})


