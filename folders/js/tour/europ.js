axios.defaults.headers.common['Client-Token'] = 'dev-api.grschannel.com-$2y$10$Py.Y9/LKrLsukvxtTADfQuS'
axios.defaults.headers.common['Api-Key'] = 'service.22f09fbb39b64ab4b7ae8ad110da40ef'
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

new Vue({
  el: '#tour',
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
    isLoading: true,
    loginStep: 1,
    showAlert: false,
    isLoadingAxios: false,
    loginDialog: false,
    isLogin: false,
    activePage: false,
    showMenuSmall: false,
    loginType: 'login',
    UserType: 1,
    loginForm: {
      name: '',
      family: '',
      companeyName: '',
      companeyWork: '',
      code: '',
      phone: '',
      mail: '',
      password: '',
      otp: ''
    },
    resendSeconds: 0,
    phoneRules: [
      v => !!v || 'پر کردن فیلد تلفن اجباریست.',
      v => (v.length == 11) || 'شماره تلفن صحیح نیست.',
    ],
    nameRules: [
      v => !!v || 'پر کردن فیلد نام اجباریست.',
      v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
    ],
    familyRules: [
      v => !!v || 'پر کردن فیلد نام خانوادگی اجباریست.',
      v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
      v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
    ],
    emailRules: [
      v => /.+@.+\..+/.test(v) || 'ایمیل نادرست میباشد.',
    ],
    emailRules2: [
      v => !v || /.+@.+\..+/.test(v) || 'ایمیل نادرست میباشد.',
    ],
    emptyRules: [
      v => !!v || 'پر کردن این فیلد اجباریست.'
    ],
    emptyRules2: [
      v => !!v || ''
    ],
    companeyWorkItems: ['آژانس مسافرتی', 'علمی و دانشگاهی', 'بانکی', 'صنعتی', 'تولیدی', 'سایر'],
    tab: 0,
    priceHeaders: [
      {
        text: 'درجه هتل ها',
        align: 'center',
        sortable: false,
        value: 'name',
      },
      { text: '5 ستاره', sortable: false, value: 'calories', align: 'center', },

    ],
    prices01: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '1,790 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '2,490 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,290 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '690 یورو + 34,990,000 تومان',
      },
    ],
    prices02: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,390 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,290 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,790 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '990 یورو + 34,990,000 تومان',
      },
    ],
    prices03: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,290 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,290 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,690 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '990 یورو + 34,990,000 تومان',
      },
    ],
    prices04: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,490 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,490 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,890 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '990 یورو + 34,990,000 تومان',
      },
    ],
    prices05: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '3,190 یورو + 39,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '4,390 یورو + 39,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '2,390 یورو + 36,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,290 یورو + 36,990,000 تومان',
      },
    ],
    prices06: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,190 یورو + 34,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,290 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,690 یورو + 31,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '790 یورو + 31,990,000 تومان',
      },
    ],
    prices07: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,190 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,290 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,690 یورو + 29,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '790 یورو + 29,990,000 تومان',
      },
    ],
    prices08: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,990 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '4,290 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '2,190 یورو + 29,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,390 یورو + 29,990,000 تومان',
      },
    ],
    prices09: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,390 یورو + 38,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,490 یورو + 38,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,790 یورو + 31,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '990 یورو + 31,990,000 تومان',
      },
    ],
    prices010: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '1,590 یورو + 37,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '2,390 یورو + 37,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,290 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '790 یورو + 34,990,000 تومان',
      },
    ],
    flights01: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به پاریس',
        time1: '08:20',
        time2: '13:30',
        text1: 'EK073',
        text2: 'DXBCDG'
      },
      {
        from: 'پرواز از پاریس به دبی',
        time1: '15:35',
        time2: '00:20',
        text1: 'EK074',
        text2: 'CDGDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '01:20',
        time2: '04:00',
        text1: 'EK979',
        text2: 'DXBIKA'
      },
    ],
    flights02: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به پاریس',
        time1: '08:20',
        time2: '13:30',
        text1: 'EK073',
        text2: 'DXBCDG'
      },
      {
        from: 'پرواز از بارسلون به دبی',
        time1: '15:30',
        time2: '00:15',
        text1: 'EK256',
        text2: 'BCNDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '15:00',
        time2: '17:40',
        text1: 'EK979',
        text2: 'DXBIKA'
      },
    ],
    flights03: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به زوریخ',
        time1: '08:40',
        time2: '13:20',
        text1: 'EK087',
        text2: 'DXBZRH'
      },
      {
        from: 'پرواز از پاریس به دبی',
        time1: '15:35',
        time2: '00:20',
        text1: 'EK074',
        text2: 'CDGDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '15:00',
        time2: '17:40',
        text1: 'EK979',
        text2: 'DXBIKA'
      },
    ],
    flights04: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به پاریس',
        time1: '08:20',
        time2: '13:30',
        text1: 'EK073',
        text2: 'DXBCDG'
      },
      {
        from: 'پرواز از آمستردام به دبی',
        time1: '15:20',
        time2: '23:59',
        text1: 'EK148',
        text2: 'AMSDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '15:00',
        time2: '17:40',
        text1: 'EK979',
        text2: 'DXBIKA'
      },
    ],
    flights05: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به پاریس',
        time1: '08:20',
        time2: '13:30',
        text1: 'EK073',
        text2: 'DXBCDG'
      },
      {
        from: 'پرواز از بارسلون به دبی',
        time1: '15:30',
        time2: '00:15',
        text1: 'EK256',
        text2: 'BCNDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '01:20',
        time2: '04:00',
        text1: 'EK977',
        text2: 'DXBIKA'
      },
    ],
    flights06: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به زوری',
        time1: '08:40',
        time2: '13:20',
        text1: 'EK087',
        text2: 'DXBZRH'
      },
      {
        from: 'پرواز از میلان به دبی',
        time1: '15:05',
        time2: '22:10',
        text1: 'EK206',
        text2: 'MXPDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '15:00',
        time2: '17:40',
        text1: 'EK979',
        text2: 'DXBIKA'
      },
    ],
    flights07: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '01:40',
        time2: '04:35',
        text1: 'IKAIST',
        text2: 'TK875'
      },
      {
        from: 'پرواز از استانبول به مادرید',
        time1: '07:10',
        time2: '10:30',
        text1: 'ISTMAD',
        text2: 'TK1857'
      },
      {
        from: 'پرواز از بارسلون به استانبول',
        time1: '13:25',
        time2: '17:50',
        text1: 'BCNIST',
        text2: 'TK1468'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '21:45',
        time2: '01:20',
        text1: 'ISTIKA',
        text2: 'TK872'
      },
    ],
    flights08: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '01:40',
        time2: '04:35',
        text1: 'IKAIST',
        text2: 'TK875'
      },
      {
        from: 'پرواز از استانبول به بارسلون',
        time1: '07:40',
        time2: '10:15',
        text1: 'ISTBCN',
        text2: 'TK1853'
      },
      {
        from: 'پرواز از ونیز به استانبول',
        time1: '14:05',
        time2: '17:35',
        text1: 'VCEIST',
        text2: 'TK1872'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '21:45',
        time2: '01:20',
        text1: 'ISTIKA',
        text2: 'TK872'
      },
    ],
    flights09: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '09:00',
        time2: '11:55',
        text1: 'IKAIST',
        text2: 'TK871'
      },
      {
        from: 'پرواز از استانبول به زوریخ',
        time1: '15:50',
        time2: '17:45',
        text1: 'ISTZRH',
        text2: 'TK1909'
      },
      {
        from: 'پرواز از زوریخ به استانبول',
        time1: '15:00',
        time2: '18:50',
        text1: 'ZRHIST',
        text2: 'TK1914'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '21:45',
        time2: '01:20',
        text1: 'ISTIKA',
        text2: 'TK872'
      },
    ],
    flights010: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '06:00',
        time2: '08:55',
        text1: 'IKAIST',
        text2: 'TK879'
      },
      {
        from: 'پرواز از استانبول به زوریخ',
        time1: '12:15',
        time2: '14:10',
        text1: 'ISTZRH',
        text2: 'TK1913'
      },
      {
        from: 'پرواز از پاریس به استانبول',
        time1: '15:00',
        time2: '18:50',
        text1: 'ZRHIST',
        text2: 'TK1914'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '19:40',
        time2: '23:15',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    prices: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '1,690 یورو + 24,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '2,490 یورو + 24,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,190 یورو + 20,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,190 یورو + 20,990,000 تومان',
      },
    ],
    prices2: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '99.000.000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '129.000.000 تومان',
      },
      {
        name: 'کودک 6-12 ساله با تخت',
        calories: '89.000.000 تومان',
      },
      {
        name: 'کودک 6-2 ساله بدون تخت',
        calories: '78.000.000 تومان',
      },
    ],
    prices3: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,890 یورو + 25,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,890 یورو + 25,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '2,090 یورو + 21,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,290 یورو + 21,990,000 تومان',
      },
    ],
    prices4: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '3,890 یورو + 23,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '5,590 یورو + 23,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '2,890 یورو + 19,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,690 یورو + 19,990,000 تومان',
      },
    ],
    prices5: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '1,890 یورو + 28,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '2,890 یورو + 28,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,490 یورو + 22,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '890 یورو + 22,990,000 تومان',
      },
    ],
    prices6: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,990 یورو + 23,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '4,090 یورو + 28,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '2,190 یورو + 19,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,190 یورو + 19,990,000 تومان',
      },
    ],
    prices6: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,490 یورو + 27,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,590 یورو + 27,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,890 یورو + 24,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '990 یورو + 24,990,000 تومان',
      },
    ],
    prices7: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,390 یورو + 23,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,390 یورو + 23,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,790 یورو + 19,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '890 یورو + 19,990,000 تومان',
      },
    ],
    prices8: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,790 یورو + 25,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,990 یورو + 25,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,990 یورو + 21,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '1,190 یورو + 21,990,000 تومان',
      },
    ],
    prices9: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '1,690 یورو + 24,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '2,490 یورو + 24,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,190 یورو + 20,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '690 یورو + 20,990,000 تومان',
      },
    ],
    prices10: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '3,690 یورو + 29,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '5,990 یورو + 29,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '2,890 یورو + 26,990,000 تومان',
      },
    ],
    flightHeaders: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: '', align: 'center', sortable: false, value: 'from' },
      { text: '', sortable: false, value: 'time1', align: 'center', },
      { text: '', sortable: false, value: 'time2', align: 'center', },
      { text: '', sortable: false, value: 'text1', align: 'center', },
      { text: '', sortable: false, value: 'text2', align: 'center', },

    ],
    moscowFlightHeaders: [
      { text: 'ردیف', sortable: true, value: 'id', align: 'center', width: 10 },
      { text: 'مسیر', align: 'center', sortable: false, value: 'from' },
      { text: 'شنبه', sortable: false, value: 'time1', align: 'center', },
      { text: 'یکشنبه', sortable: false, value: 'time2', align: 'center', },
      { text: 'دوشنبه', sortable: false, value: 'time3', align: 'center', },
      { text: 'سه‌شنبه', sortable: false, value: 'time4', align: 'center', },
      { text: 'چهارشنبه', sortable: false, value: 'time5', align: 'center', },
      { text: 'پنجشنبه', sortable: false, value: 'time6', align: 'center', },
      { text: 'جمعه', sortable: false, value: 'time7', align: 'center', },
    ],
    dubai1FlightHeaders: [
      { text: 'ردیف', sortable: true, value: 'id', align: 'center', width: 10 },
      { text: 'مسیر', align: 'center', sortable: false, value: 'from' },
      { text: 'هواپیمایی', align: 'center', sortable: false, value: 'airline' },
      { text: 'شنبه', sortable: false, value: 'time1', align: 'center', },
      { text: 'یکشنبه', sortable: false, value: 'time2', align: 'center', },
      { text: 'دوشنبه', sortable: false, value: 'time3', align: 'center', },
      { text: 'سه‌شنبه', sortable: false, value: 'time4', align: 'center', },
      { text: 'چهارشنبه', sortable: false, value: 'time5', align: 'center', },
      { text: 'پنجشنبه', sortable: false, value: 'time6', align: 'center', },
      { text: 'جمعه', sortable: false, value: 'time7', align: 'center', },
    ],
    moscowFlights: [
      {
        id: 1,
        from: 'پرواز از تهران به ونوکوا',
        time1: '--',
        time2: '--',
        time3: '--',
        time4: '5:30',
        time5: '--',
        time6: '5:30',
        time7: '--',
      },
      {
        id: 2,
        from: 'پرواز از ونوکوا به تهران ',
        time1: '--',
        time2: '--',
        time3: '--',
        time4: '11:45',
        time5: '--',
        time6: '11:45',
        time7: '--',
      },
      {
        id: 3,
        from: 'پرواز از تهران به شرمیتوا',
        time1: '--',
        time2: '5:30',
        time3: '17:00',
        time4: '--',
        time5: '5:30',
        time6: '--',
        time7: '5:30',
      },
      {
        id: 4,
        from: 'پرواز از شرمیتوا به تهران',
        time1: '--',
        time2: '11:15',
        time3: '22:45',
        time4: '--',
        time5: '11:00',
        time6: '--',
        time7: '11:15',
      },
    ],
    istanbulFlights: [
      {
        id: 1,
        from: 'پرواز از تهران به ونوکوا',
        time1: '--',
        time2: '--',
        time3: '--',
        time4: '5:30',
        time5: '--',
        time6: '5:30',
        time7: '--',
      },
      {
        id: 2,
        from: 'پرواز از ونوکوا به تهران ',
        time1: '--',
        time2: '--',
        time3: '--',
        time4: '11:45',
        time5: '--',
        time6: '11:45',
        time7: '--',
      },
      {
        id: 3,
        from: 'پرواز از تهران به شرمیتوا',
        time1: '--',
        time2: '5:30',
        time3: '18:00',
        time4: '--',
        time5: '18:00',
        time6: '--',
        time7: '5:30',
      },
      {
        id: 4,
        from: 'پرواز از شرمیتوا به تهران',
        time1: '--',
        time2: '11:15',
        time3: '23:35',
        time4: '--',
        time5: '23:35',
        time6: '--',
        time7: '11:15',
      },
    ],
    istanbul1Flights: [
      {
        id: 1,
        from: 'پرواز از تهران به استانبول',
        airline: 'ماهان',
        time1: '06:40',
        time2: '08:00',
        time3: '06:40',
        time4: '06:40',
        time5: '06:40',
        time6: '06:40',
        time7: '06:40',
      },
      {
        id: 2,
        from: 'پرواز از تهران به استانبول',
        airline: 'ماهان',
        time1: '08:50',
        time2: '11:15',
        time3: '08:50',
        time4: '08:50',
        time5: '08:50',
        time6: '08:50',
        time7: '08:50',
      },
      {
        id: 3,
        from: 'پرواز از تهران به استانبول',
        airline: 'ماهان',
        time1: '17:10',
        time2: '18:15',
        time3: '17:10',
        time4: '17:10',
        time5: '17:10',
        time6: '17:10',
        time7: '17:10',
      },
      {
        id: 4,
        from: 'پرواز از تهران به استانبول',
        airline: 'ماهان',
        time1: '19:00',
        time2: '--',
        time3: '19:00',
        time4: '19:00',
        time5: '19:00',
        time6: '19:00',
        time7: '19:00',
      },
      {
        id: 5,
        from: 'پرواز از استانبول به تهران',
        airline: 'ماهان',
        time1: '11:35',
        time2: '11:35',
        time3: '11:35',
        time4: '11:35',
        time5: '11:35',
        time6: '11:35',
        time7: '11:35',
      },
      {
        id: 6,
        from: 'پرواز از استانبول به تهران',
        airline: 'ماهان',
        time1: '13:15',
        time2: '13:15',
        time3: '13:15',
        time4: '13:15',
        time5: '13:15',
        time6: '13:15',
        time7: '13:15',
      },
      {
        id: 7,
        from: 'پرواز از استانبول به تهران',
        airline: 'ماهان',
        time1: '21:15',
        time2: '21:15',
        time3: '21:15',
        time4: '21:15',
        time5: '21:15',
        time6: '21:15',
        time7: '21:15',
      },
      {
        id: 8,
        from: 'پرواز از استانبول به تهران',
        airline: 'ماهان',
        time1: '23:15',
        time2: '23:15',
        time3: '23:15',
        time4: '23:15',
        time5: '23:15',
        time6: '23:15',
        time7: '23:15',
      },
      {
        id: 9,
        from: 'پرواز از تهران به استانبول',
        airline: 'آسمان',
        time1: '15:00',
        time2: '15:00',
        time3: '15:00',
        time4: '15:00',
        time5: '15:00',
        time6: '15:00',
        time7: '15:00',
      },
      {
        id: 10,
        from: 'پرواز از استانبول به تهران',
        airline: 'آسمان',
        time1: '13:30',
        time2: '13:30',
        time3: '13:30',
        time4: '13:30',
        time5: '13:30',
        time6: '13:30',
        time7: '13:30',
      },
      {
        id: 11,
        from: 'پرواز از تهران به استانبول',
        airline: 'قشم‌ایر',
        time1: '09:30',
        time2: '09:30',
        time3: '09:30',
        time4: '09:30',
        time5: '09:30',
        time6: '09:30',
        time7: '09:30',
      },
      {
        id: 12,
        from: 'پرواز از تهران به استانبول',
        airline: 'قشم‌ایر',
        time1: '18:45',
        time2: '18:45',
        time3: '18:45',
        time4: '18:45',
        time5: '18:45',
        time6: '18:45',
        time7: '18:45',
      },
      {
        id: 13,
        from: 'پرواز از استانبول به تهران',
        airline: 'قشم‌ایر',
        time1: '13:30',
        time2: '13:30',
        time3: '13:30',
        time4: '13:30',
        time5: '13:30',
        time6: '13:30',
        time7: '13:30',
      },
      {
        id: 14,
        from: 'پرواز از استانبول به تهران',
        airline: 'قشم‌ایر',
        time1: '23:55',
        time2: '23:55',
        time3: '23:55',
        time4: '23:55',
        time5: '23:55',
        time6: '23:55',
        time7: '23:55',
      },
    ],
    dubai1Flights: [
      {
        id: 1,
        from: 'پرواز از تهران به دبی',
        airline: 'ماهان',
        time1: '08:00',
        time2: '08:00',
        time3: '08:00',
        time4: '08:00',
        time5: '08:00',
        time6: '08:00',
        time7: '08:00',
      },
      {
        id: 2,
        from: 'پرواز از تهران به دبی',
        airline: 'ماهان',
        time1: '11:15',
        time2: '11:15',
        time3: '11:15',
        time4: '11:15',
        time5: '11:15',
        time6: '11:15',
        time7: '11:15',
      },
      {
        id: 3,
        from: 'پرواز از تهران به دبی',
        airline: 'ماهان',
        time1: '18:15',
        time2: '18:15',
        time3: '18:15',
        time4: '18:15',
        time5: '18:15',
        time6: '18:15',
        time7: '18:15',
      },
      {
        id: 4,
        from: 'پرواز از دبی به تهران',
        airline: 'ماهان',
        time1: '12:00',
        time2: '12:00',
        time3: '12:00',
        time4: '12:00',
        time5: '12:00',
        time6: '12:00',
        time7: '12:00',
      },
      {
        id: 5,
        from: 'پرواز از دبی به تهران',
        airline: 'ماهان',
        time1: '15:15',
        time2: '15:15',
        time3: '15:15',
        time4: '15:15',
        time5: '15:15',
        time6: '15:15',
        time7: '15:15',
      },
      {
        id: 6,
        from: 'پرواز از دبی به تهران',
        airline: 'ماهان',
        time1: '22:00',
        time2: '22:00',
        time3: '22:00',
        time4: '22:00',
        time5: '22:00',
        time6: '22:00',
        time7: '22:00',
      },
      {
        id: 7,
        from: 'پرواز از تهران به دبی',
        airline: 'ایران‌ایرتور',
        time1: '09:45',
        time2: '06:30',
        time3: '06:30',
        time4: '09:00',
        time5: '09:00',
        time6: '08:45',
        time7: '06:30',
      },
      {
        id: 8,
        from: 'پرواز از تهران به دبی',
        airline: 'ایران‌ایرتور',
        time1: '06:30',
        time2: '--',
        time3: '--',
        time4: '--',
        time5: '--',
        time6: '--',
        time7: '--',
      },
      {
        id: 9,
        from: 'پرواز از دبی به تهران',
        airline: 'ایران‌ایرتور',
        time1: '18:10',
        time2: '22:10',
        time3: '19:25',
        time4: '13:15',
        time5: '13:25',
        time6: '13:00',
        time7: '18:15',
      },
      {
        id: 10,
        from: 'پرواز از دبی به تهران',
        airline: 'ایران‌ایرتور',
        time1: '19:30',
        time2: '--',
        time3: '20:55',
        time4: '20:35',
        time5: '12:30',
        time6: '19:15',
        time7: '18:50',
      },
      {
        id: 11,
        from: 'پرواز از تهران به دبی',
        airline: 'قشم‌ایر',
        time1: '--',
        time2: '07:15',
        time3: '--',
        time4: '07:15',
        time5: '07:15',
        time6: '--',
        time7: '07:15',
      },
      {
        id: 12,
        from: 'پرواز از دبی به تهران',
        airline: 'قشم‌ایر',
        time1: '--',
        time2: '15:35',
        time3: '--',
        time4: '15:15',
        time5: '15:35',
        time6: '--',
        time7: '15:05',
      },
    ],
    flights: [
      {
        from: 'پرواز از تهران به دوحه',
        time1: '22:55',
        time2: '00:30',
        // text1: 'ISTGVA',
        // text2: 'TK1913'
      },
      {
        from: 'پرواز از دوحه به هوشی مین',
        time1: '01:55',
        time2: '13:10',
        // text1: 'IKAIST',
        // text2: 'TK879'
      },
      {
        from: 'پرواز از هوشی مین به هانوی(چارتری)',
        time1: '-',
        time2: '-',
        // text1: 'ZRHIST',
        // text2: 'TK1914'
      },
      {
        from: 'پرواز از هانوی به دوحه',
        time1: '14:20',
        time2: '23:30',
        // text1: 'ISTIKA',
        // text2: 'TK874'
      },
      {
        from: 'پرواز از دوحه به تهران',
        time1: '00:55',
        time2: '03:35',
        // text1: 'ISTIKA',
        // text2: 'TK874'
      },
    ],
    flights2: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '10:30',
        time2: '07:30',
        text1: 'IKAIST',
        text2: 'TK879'
      },
      {
        from: 'پرواز از استانبول به بارسلون',
        time1: '14:10',
        time2: '12:30',
        text1: 'ISTBCN',
        text2: 'TK1467'
      },
      {
        from: 'پرواز از زوریخ به استانبول)',
        time1: '18:50',
        time2: '15:00',
        text1: 'ZRHIST',
        text2: 'TK1914'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '23:55',
        time2: '19:20',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    flights3: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '01:55',
        time2: '04:55',
        text1: 'IKAIST',
        text2: 'TK875'
      },
      {
        from: 'پرواز از استانبول به پاریس',
        time1: '08:25',
        time2: '10:05',
        text1: 'ISTCDG',
        text2: 'TK1821'
      },
      {
        from: 'پرواز از رم به استانبول',
        time1: '15:30',
        time2: '19:05',
        text1: 'FCOIST',
        text2: 'TK1866'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '19:20',
        time2: '23:55',
        text1: 'ISTIKA',
        text2: 'TK872'
      },
    ],
    flights4: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '01:55',
        time2: '04:55',
        text1: 'IKAIST',
        text2: 'TK875'
      },
      {
        from: 'پرواز از استانبول به پاریس',
        time1: '08:25',
        time2: '10:05',
        text1: 'ISTCDG',
        text2: 'TK1821'
      },
      {
        from: 'پرواز از پاریس به استانبول',
        time1: '13:15',
        time2: '18:45',
        text1: 'CDGIST',
        text2: 'TK1824'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '19:20',
        time2: '23:55',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    flights5: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '04:55',
        time2: '01:55',
        text1: 'IKAIST',
        text2: 'TK875'
      },
      {
        from: 'پرواز از استانبول به ژنو',
        time1: '10:35',
        time2: '09:20',
        text1: 'ISTGVA',
        text2: 'TK1917'
      },
      {
        from: 'پرواز از زوریخ به استانبول',
        time1: '18:50',
        time2: '15:00',
        text1: 'CDGIST',
        text2: 'TK1824'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '23:55',
        time2: '19:20',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    flights6: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '01:55',
        time2: '04:55',
        text1: 'IKAIST',
        text2: 'TK875'
      },
      {
        from: 'پرواز از استانبول به مادرید',
        time1: '07:55',
        time2: '10:25',
        text1: 'ISTAMAD',
        text2: 'TK1857'
      },
      {
        from: 'پرواز از بارسلون به استانبول',
        time1: '19:10',
        time2: '23:35',
        text1: 'BCNIST',
        text2: 'TK1856'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '19:20',
        time2: '23:55',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    flights7: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '08:30',
        time2: '10:30',
        text1: 'IKAIST',
        text2: 'TK879'
      },
      {
        from: 'پرواز از استانبول به بارسلون',
        time1: '12:30',
        time2: '14:10',
        text1: 'ISTBCN',
        text2: 'TK1467'
      },
      {
        from: 'پرواز از پاریس به استانبول',
        time1: '14:10',
        time2: '18:45',
        text1: 'CDGIST',
        text2: 'TK1824'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '19:20',
        time2: '23:55',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    flights8: [
      {
        from: 'پرواز از تهران به استانبول',
        time1: '08:35',
        time2: '10:25',
        text1: 'IKAIST',
        text2: 'TK879'
      },
      {
        from: 'پرواز از استانبول به زوریخ',
        time1: '12:15',
        time2: '14:10',
        text1: 'ISTZRH',
        text2: 'TK1913'
      },
      {
        from: 'پرواز از پاریس به استانبول',
        time1: '15:00',
        time2: '18:50',
        text1: 'ZRHIST',
        text2: 'TK1914'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1: '19:20',
        time2: '23:55',
        text1: 'ISTIKA',
        text2: 'TK874'
      },
    ],
    flights9: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '18:40',
        time2: '21:20',
        text1: 'IKADXB',
        text2: 'EK980'
      },
      {
        from: 'پرواز از دبی به پاریس',
        time1: '03:20',
        time2: '08:00',
        text1: 'DXBCDG',
        text2: 'EK71'
      },
      {
        from: 'پرواز از رم به دبی',
        time1: '22:05',
        time2: '05:45',
        text1: 'FCODXB',
        text2: 'EK96'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '15:00',
        time2: '17:40',
        text1: 'DXBIKA',
        text2: 'EK979'
      },
    ],
    flights10: [
      {
        from: 'پرواز از تهران به کویت',
        time1: '03:00',
        time2: '03:30',
        text1: 'IKA-KU',
        text2: 'KU 516'
      },
      {
        from: 'پرواز از کویت به بانکوک',
        time1: '02:10',
        time2: '15:30',
        text1: 'KU-BKK',
        text2: 'KU 413'
      },
      {
        from: 'پرواز از بانکوک به کویت',
        time1: '14:40',
        time2: '11:40',
        text1: 'BKK-KU',
        text2: 'KU 412'
      },
      {
        from: 'پرواز از کویت به تهران',
        time1: '02:15',
        time2: '22:50',
        text1: 'KU-TKA',
        text2: 'KU413'
      },
    ],
    flights11: [
      {
        from: 'پرواز از تهران به ونوکوا',
        time1: '05:30',
        time2: '03:30',
        text1: 'IKA-KU',
        text2: 'KU 516'
      },
      {
        from: 'پرواز از کویت به بانکوک',
        time1: '02:10',
        time2: '15:30',
        text1: 'KU-BKK',
        text2: 'KU 413'
      },
      {
        from: 'پرواز از بانکوک به کویت',
        time1: '14:40',
        time2: '11:40',
        text1: 'BKK-KU',
        text2: 'KU 412'
      },
      {
        from: 'پرواز از کویت به تهران',
        time1: '02:15',
        time2: '22:50',
        text1: 'KU-TKA',
        text2: 'KU413'
      },
    ],
    flights12: [
      {
        from: 'پرواز از تهران به کویت',
        time1: '03:30',
        time2: '02:00',
        text1: 'IKA-KU',
        text2: 'KU 516'
      },
      {
        from: 'پرواز از کویت به کوالالامپور',
        time1: '22:40',
        time2: '09:25',
        text1: 'KU-KUL',
        text2: 'KU 409'
      },
      {
        from: 'پرواز از بانکوک به کویت',
        time1: '07:10',
        time2: '04:10',
        text1: 'BKK-KU',
        text2: 'KU 414'
      },
      {
        from: 'پرواز از کویت به تهران',
        time1: '02:15',
        time2: '22:50',
        text1: 'KU-IKA',
        text2: 'KU 515'
      },
    ],
    pricesHeaderIstanbul: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'موقعیت', sortable: true, value: 'place', align: 'center', },
      { text: 'دو تخته', sortable: true, value: 'duble', align: 'center', },
      { text: 'یک تخته', sortable: true, value: 'single', align: 'center', },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },
      { text: 'کودک بدون تخت', sortable: false, value: 'baby2', align: 'center', },

    ],
    pricesHeaderMoskow: [
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'دو تخته', sortable: true, value: 'duble', align: 'center', },
      { text: 'یک تخته', sortable: true, value: 'single', align: 'center', },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },
      { text: 'کودک بدون تخت', sortable: false, value: 'baby2', align: 'center', },
      { text: 'کمیسیون', sortable: true, value: 'coosion', align: 'center', },

    ],
    pricesHeaderThailand: [
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'دو‌تخته', filterable: true, align: 'center', sortable: true, value: 'duble' },
      { text: 'یک تخته', filterable: true, align: 'center', sortable: true, value: 'single' },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },
      { text: 'کودک بدون تخت', sortable: false, value: 'baby2', align: 'center', },
    ],
    pricesHeaderDubai: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'موقعیت', sortable: true, value: 'place', align: 'center', },
      { text: 'دو تخته', sortable: true, value: 'duble', align: 'center', },
      { text: 'یک تخته', sortable: true, value: 'single', align: 'center', },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },

    ],
    pricesItemsIstanbul: [],
    pricesItemsIstanbul2: [],
    pricesItemsIstanbul3: [],
    pricesItemsIstanbul4: [],
    pricesItemsIstanbul5: [],
    pricesItemsIstanbul6: [],
    pricesItemsDubai: [],
    pricesItemsDubai2: [],
    pricesItemsDubai3: [],
    pricesItemsDubai4: [],
    pricesItemsMoskow: [],
    pricesItemsMoskow2: [],
    pricesItemsThailand: [
      {
        id: 1,
        name: 'MOVENPICK SUKHVMVIT',
        star: 5,
        duble: '96.000.000',
        single: '118.000.000',
        baby: '88.000.000',
        baby2: '76.000.000'
      },
      {
        id: 2,
        name: 'AVINI RESORT PATTAYA',
        star: '5LUX',
        duble: '96.000.000',
        single: '118.000.000',
        baby: '88.000.000',
        baby2: '76.000.000'
      },
      {
        id: 3,
        name: 'KALIMA RESOIT',
        star: '5LUX',
        duble: '96.000.000',
        single: '118.000.000',
        baby: '88.000.000',
        baby2: '76.000.000'
      },
    ],
    pricesItemsThailandMalaysia: [
      {
        id: 1,
        name: 'SHANGRILA',
        star: 'TOP 5',
        duble: '109.000.000',
        single: '129.000.000',
        baby: '99.000.000',
        baby2: '89.000.000'
      },
      {
        id: 2,
        name: 'MOVENPICK SUKHUMVIT',
        star: '5',
        duble: '109.000.000',
        single: '129.000.000',
        baby: '99.000.000',
        baby2: '89.000.000'
      },
      {
        id: 3,
        name: 'KALIMA RESOIT',
        star: '5',
        duble: '109.000.000',
        single: '129.000.000',
        baby: '99.000.000',
        baby2: '89.000.000'
      },
    ],
    page_text: {
      pageStart: 'number',
      pageStop: 'number',
      itemsLength: 'number'
    },
    imageDialog: false,
    imageNumber: 0,
    istanbulImages: [
      '/folders/image/tour/استانبول-1.jpg',
      '/folders/image/tour/استانبول-2.jpg',
      '/folders/image/tour/استانبول-3.jpg',
      '/folders/image/tour/استانبول-4.jpg',
      '/folders/image/tour/استانبول-5.jpg',
      '/folders/image/tour/استانبول-6.jpg',
      // '/folders/image/tour/استانبول-7.jpg',
    ],
    moscowImages: [
      {
        src: '/folders/image/tour/moscow-001.jpg',
        title: 'کاخ کرملین مسکو'
      },
      {
        src: '/folders/image/tour/moscow-002.jpg',
        title: 'کلیسای معراج کولومنسکویه'
      },
      {
        src: '/folders/image/tour/moscow-003.jpg',
        title: 'مرکز خرید ماننایا پلوشاد'
      },
      {
        src: '/folders/image/tour/moscow-004.jpg',
        title: 'میدان سرخ'
      },
      {
        src: '/folders/image/tour/moscow-005.jpg',
        title: 'آسمن خراش های هفت خواهران مسکو'
      },
    ],
    moscowImages2: [
      {
        src: '/folders/image/tour/moscow-001.jpg',
        title: 'کاخ کرملین مسکو'
      },
      {
        src: '/folders/image/tour/moscow-002.jpg',
        title: 'کلیسای معراج کولومنسکویه'
      },
      {
        src: '/folders/image/tour/moscow-003.jpg',
        title: 'مرکز خرید ماننایا پلوشاد'
      },
      {
        src: '/folders/image/tour/moscow-004.jpg',
        title: 'میدان سرخ'
      },
      {
        src: '/folders/image/tour/moscow-005.jpg',
        title: 'آسمن خراش های هفت خواهران مسکو'
      },
      {
        src: '/folders/image/پکیج مسکو.jpg',
        title: 'پکیج مسکو'
      },
    ],
    thilandImages: [
      {
        src: '/folders/image/tour/تایلند-1.jpg',
        title: 'پارک پادشاهی ببر ها'
      },
      {
        src: '/folders/image/tour/تایلند-2.jpg',
        title: 'پناهگاه حقیقت'
      },
      {
        src: '/folders/image/tour/تایلند-3.jpg',
        title: 'جزیره پوکت'
      },
      {
        src: '/folders/image/tour/تایلند-4.jpg',
        title: 'گرند پالاس تایلند'
      },
      {
        src: '/folders/image/tour/تایلند-5.jpg',
        title: 'معبد بودای بزرگ'
      },
      {
        src: '/folders/image/tour/تایلند-6.jpg',
        title: 'معبد سپیده دم'
      },
    ],
    thilandMlaysiaImages: [
      {
        src: '/folders/image/tour/تایلند-مالزی000-1.jpg',
        title: 'Phra Nang Beach'
      },
      {
        src: '/folders/image/tour/تایلند-مالزی000-2.jpg',
        title: 'Wiang kum kam'
      },
      {
        src: '/folders/image/tour/تایلند-مالزی000-3.jpg',
        title: 'Khao Sok National Park'
      },
      {
        src: '/folders/image/tour/تایلند-مالزی000-4.jpg',
        title: 'Cameron Highlands'
      },
      {
        src: '/folders/image/tour/تایلند-مالزی000-5.jpg',
        title: 'Kuala lampur'
      },
      {
        src: '/folders/image/tour/تایلند-مالزی000-6.jpg',
        title: 'Kuala lampur'
      },
    ],
    srilankaImages: [
      {
        src: '/folders/image/tour/سریلانکا-1.jpg',
        title: 'پارک ویهارامادوی کلمبیا سریلانکا'
      },
      {
        src: '/folders/image/tour/سریلانکا-2.jpg',
        title: 'شهر ساحلی هیکادوآ'
      },
      {
        src: '/folders/image/tour/سریلانکا-3.jpg',
        title: 'باغ گیاه شناسی سلطنتی پرادنیا'
      },
      {
        src: '/folders/image/tour/سریلانکا-4.jpg',
        title: 'مزرعه چای درنووارا الیا'
      },
      {
        src: '/folders/image/tour/سریلانکا-5.jpg',
        title: 'قلعه سیگیریا'
      },
    ],
    dubaiImages: [
      {
        src: '/folders/image/tour/دبی-1.jpg',
        title: 'اوت لت مال دبی'
      },
      {
        src: '/folders/image/tour/دبی-2.jpg',
        title: 'برج خلیفه'
      },
      {
        src: '/folders/image/tour/دبی-3.jpg',
        title: 'دهکده جهانی دبی'
      },
      {
        src: '/folders/image/tour/دبی-4.jpg',
        title: 'مرکز خرید مرکاتو'
      },
    ],
    urope001Images: [
      {
        src: '/folders/image/tour/اروپا001-1.jpg',
        title: 'موزه لوور فرانسه'
      },
      {
        src: '/folders/image/tour/اروپا001-2.jpg',
        title: 'کاخ ورسای'
      },
      {
        src: '/folders/image/tour/اروپا001-3.jpg',
        title: 'قصر پاپال'
      },
      {
        src: '/folders/image/tour/اروپا001-4.jpg',
        title: 'صومعه مون سن میشل'
      },
      {
        src: '/folders/image/tour/اروپا001-5.jpg',
        title: 'پل سن بنزت'
      },
      {
        src: '/folders/image/tour/استانبول-1.jpg',
        title: 'قصر توپ کاپی'
      },
      {
        src: '/folders/image/tour/استانبول-2.jpg',
        title: 'قصر توکاپی'
      },
      {
        src: '/folders/image/tour/استانبول-3.jpg',
        title: 'کاخ دلما باغچه استانبول'
      },
      {
        src: '/folders/image/tour/استانبول-4.jpg',
        title: 'آب انبار باسیلاکا'
      },
      {
        src: '/folders/image/tour/استانبول-5.jpg',
        title: 'جزایر پرنس'
      },
      {
        src: '/folders/image/tour/استانبول-6.jpg',
        title: 'روملی حصار'
      },
    ],
    urope002Images: [
      {
        src: '/folders/image/tour/اروپا002-1.jpg',
        title: 'کاخ ریولی'
      },
      {
        src: '/folders/image/tour/اروپا002-2.jpg',
        title: 'برج پیتزا'
      },
      {
        src: '/folders/image/tour/اروپا002-3.jpg',
        title: 'دولومیت ایتالیا'
      },
      {
        src: '/folders/image/tour/اروپا002-4.jpg',
        title: 'سینکو تره'
      },
      {
        src: '/folders/image/tour/اروپا002-5.jpg',
        title: 'فواره تروی ایتالیا'
      },
      {
        src: '/folders/image/tour/استانبول-1.jpg',
        title: 'قصر توپ کاپی'
      },
      {
        src: '/folders/image/tour/استانبول-2.jpg',
        title: 'قصر توکاپی'
      },
      {
        src: '/folders/image/tour/استانبول-3.jpg',
        title: 'کاخ دلما باغچه استانبول'
      },
      {
        src: '/folders/image/tour/استانبول-4.jpg',
        title: 'آب انبار باسیلاکا'
      },
      {
        src: '/folders/image/tour/استانبول-5.jpg',
        title: 'جزایر پرنس'
      },
      {
        src: '/folders/image/tour/استانبول-6.jpg',
        title: 'روملی حصار'
      },
    ],
    urope003Images: [
      {
        src: '/folders/image/tour/اروپا003-1.jpg',
        title: 'ونیز'
      },
      {
        src: '/folders/image/tour/اروپا003-2.jpg',
        title: 'ورونا'
      },
      {
        src: '/folders/image/tour/اروپا003-3.jpg',
        title: 'میلان'
      },
      {
        src: '/folders/image/tour/اروپا003-4.jpg',
        title: 'میدان سالاملنکا'
      },
      {
        src: '/folders/image/tour/اروپا003-5.jpg',
        title: 'موزه لوور'
      },
      {
        src: '/folders/image/tour/اروپا003-6.jpg',
        title: 'معبد پانتئون پاریس'
      },
      {
        src: '/folders/image/tour/اروپا003-7.jpg',
        title: 'کلیسای نوتردام پاریس'
      },
      {
        src: '/folders/image/tour/اروپا003-8.jpg',
        title: 'سن سباستین'
      },
      {
        src: '/folders/image/tour/اروپا003-9.jpg',
        title: 'فلورانس'
      },
      {
        src: '/folders/image/tour/اروپا003-10.jpg',
        title: 'تم پارک های اسپانیا'
      },
      {
        src: '/folders/image/tour/اروپا003-11.jpg',
        title: 'باغ های لوگزامبورگ'
      },
    ],
    urope004Images: [
      {
        src: '/folders/image/tour/اروپا004-1.jpg',
        title: 'شهر های سفید اندلس'
      },
      {
        src: '/folders/image/tour/اروپا004-2.jpg',
        title: 'کلیسای جامع سانتیاگو ده کامپوستلا'
      },
      {
        src: '/folders/image/tour/اروپا004-3.jpg',
        title: 'پارک گوئل'
      },
      {
        src: '/folders/image/tour/اروپا004-4.jpg',
        title: 'ایبیزا'
      },
      {
        src: '/folders/image/tour/اروپا004-5.jpg',
        title: 'موزه گوگنهایم'
      },
      {
        src: '/folders/image/tour/استانبول-1.jpg',
        title: 'قصر توپ کاپی'
      },
      {
        src: '/folders/image/tour/استانبول-2.jpg',
        title: 'قصر توکاپی'
      },
      {
        src: '/folders/image/tour/استانبول-3.jpg',
        title: 'کاخ دلما باغچه استانبول'
      },
      {
        src: '/folders/image/tour/استانبول-4.jpg',
        title: 'آب انبار باسیلاکا'
      },
      {
        src: '/folders/image/tour/استانبول-5.jpg',
        title: 'جزایر پرنس'
      },
      {
        src: '/folders/image/tour/استانبول-6.jpg',
        title: 'روملی حصار'
      },
    ],
    urope005Images: [
      {
        src: '/folders/image/tour/اروپا005-1.jpg',
        title: 'جزایر پرنس'
      },
      {
        src: '/folders/image/tour/اروپا005-2.jpg',
        title: 'کاخ دلماباغچه استانبول'
      },
      {
        src: '/folders/image/tour/اروپا005-3.jpg',
        title: 'قصر توپ کتپی'
      },
      {
        src: '/folders/image/tour/اروپا005-4.jpg',
        title: 'موزه گوگنهایم بیلبائو'
      },
      {
        src: '/folders/image/tour/اروپا005-5.jpg',
        title: 'موزه پیکاسو'
      },
      {
        src: '/folders/image/tour/اروپا005-6.jpg',
        title: 'شهر قدیمی خیرونا اسپانیا'
      },
    ],
    urope006Images: [
      {
        src: '/folders/image/tour/اروپا006-1.jpg',
        title: 'زرمات'
      },
      {
        src: '/folders/image/tour/اروپا006-2.jpg',
        title: 'لوسرن'
      },
      {
        src: '/folders/image/tour/اروپا006-3.jpg',
        title: 'آپنزل'
      },
      {
        src: '/folders/image/tour/اروپا006-4.jpg',
        title: 'Interlaken'
      },
      {
        src: '/folders/image/tour/اروپا006-5.jpg',
        title: 'ژنو'
      },
      {
        src: '/folders/image/tour/اروپا006-6.jpg',
        title: 'تیچینو'
      },
      {
        src: '/folders/image/tour/استانبول-1.jpg',
        title: 'قصر توپ کاپی'
      },
      {
        src: '/folders/image/tour/استانبول-2.jpg',
        title: 'قصر توکاپی'
      },
      {
        src: '/folders/image/tour/استانبول-3.jpg',
        title: 'کاخ دلما باغچه استانبول'
      },
      {
        src: '/folders/image/tour/استانبول-4.jpg',
        title: 'آب انبار باسیلاکا'
      },
      {
        src: '/folders/image/tour/استانبول-5.jpg',
        title: 'جزایر پرنس'
      },
      {
        src: '/folders/image/tour/استانبول-6.jpg',
        title: 'روملی حصار'
      },
    ],
    urope007Images: [
      {
        src: '/folders/image/tour/اروپا007-1.jpg',
        title: 'باغ گیاهان پاریس'
      },
      {
        src: '/folders/image/tour/اروپا007-2.jpg',
        title: 'شهر سویا'
      },
      {
        src: '/folders/image/tour/اروپا007-3.jpg',
        title: 'کاخ اوپرا گارنیه'
      },
      {
        src: '/folders/image/tour/اروپا007-4.jpg',
        title: 'کلیسای نوتردام پاریس'
      },
      {
        src: '/folders/image/tour/اروپا007-5.jpg',
        title: 'معماری آنتونی گائودی'
      },
      {
        src: '/folders/image/tour/اروپا007-6.jpg',
        title: 'میدان کنکورد پاریس'
      },
    ],
    urope008Images: [
      {
        src: '/folders/image/tour/اروپا008-1.jpg',
        title: 'آبشار راین'
      },
      {
        src: '/folders/image/tour/اروپا008-2.jpg',
        title: 'باغ وحش زوریخ'
      },
      {
        src: '/folders/image/tour/اروپا008-3.jpg',
        title: 'قلعه شیلون'
      },
      {
        src: '/folders/image/tour/اروپا008-4.jpg',
        title: 'کوه ماترهورن'
      },
      {
        src: '/folders/image/tour/اروپا008-5.jpg',
        title: 'مرکز پل کله'
      },
    ],
    urope009Images: [
      {
        src: '/folders/image/tour/اروپا009-1.jpg',
        title: 'باغ کوکنهاف'
      },
      {
        src: '/folders/image/tour/اروپا009-2.jpg',
        title: 'بروکسل'
      },
      {
        src: '/folders/image/tour/اروپا009-3.jpg',
        title: 'دره‌ی سنوا'
      },
      {
        src: '/folders/image/tour/اروپا009-4.jpg',
        title: 'روتنبرگ و جاده رمانتیک'
      },
      {
        src: '/folders/image/tour/اروپا009-5.jpg',
        title: 'قلعه ویتنبرگ'
      },
      {
        src: '/folders/image/tour/اروپا009-6.jpg',
        title: 'کانال های آمستردام'
      },
    ],
    showMore1: false,
    showMore2: false,
    showMore3: false,
    search: '',
    theUser: {
      name: '',
      phone: '',
      mail: '',
      about: {
        first: false,
        twice: false,
        Third: false,
        Fourth: false,
      },
      title: {
        first: false,
        twice: false,
        Third: false,
        Fourth: false,
        fifth: false,
        sixth: false,
        seventh: false,
        Eighth: false,
      },
      contractNumber: '',
      text: ''
    },
    sendTextDialog: false
  },
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
  },
  methods: {
    loginOrRegisterValidate() {
      var self = this
      if (self.loginStep == 1) {
        if (self.$refs.loginForm.validate()) {
          self.isLoadingAxios = true
          // login section_________________________________________________
          if (self.loginType == 'login') {
            // user login__________________________________________________
            if (self.UserType == 1) {
              axios.post('https://ahuan.ir/api/login?mobile=' + self.loginForm.phone)
                .then(function (response) {
                  // handle success
                  if (response.data.sussecc) {
                    localStorage.setItem('user-name', response.data.result)
                    axios.get('https://ahuan.ir/api/login?mobile=' + self.loginForm.phone)
                      .then(function (response) {
                        // handle success
                        codeSend = response.data
                        self.resendSeconds = 60
                        self.alertText = 'کد تایید برای شما ارسال شد.'
                        self.alertType = 'success'
                        self.showAlert = true
                        self.loginStep = 2
                      })
                      .catch(function (error) {
                        // handle error
                        console.log(error);
                      })

                  } else {
                    self.alertText = response.data.error
                    self.alertType = 'error'
                    self.showAlert = true
                  }
                  self.isLoadingAxios = false
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                  self.isLoadingAxios = false
                })
            }
            // companey login______________________________________________
            else {
              let userInfo = {
                email: self.loginForm.mail,
                mobile: self.loginForm.phone,
                password: self.loginForm.password,
                rememberMe: true
              }

              axios.post('https://ahuan.ir/api/login', userInfo)
                .then(function (response) {
                  // handle success
                  if (response.data.sussecc) {
                    localStorage.setItem('user-name', response.data.result)
                    localStorage.setItem('isLoginAhuan', true)
                    self.userName = response.data.result
                    self.alertText = 'عملیات ورود با موفقیت انجام شد.'
                    self.alertType = 'success'
                    self.showAlert = true
                    self.loginStep = 2
                  } else {
                    self.alertText = response.data.error
                    self.alertType = 'error'
                    self.showAlert = true
                  }
                  self.isLoadingAxios = false
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                  self.isLoadingAxios = false
                })
            }
          }
          // register section_________________________________________________
          else {
            // user register__________________________________________________
            if (self.UserType == 1) {
              axios.get('https://ahuan.ir/api/register?mobile=' + self.loginForm.phone)
                .then(function (response) {
                  // handle success
                  codeSend = response.data
                  self.resendSeconds = 60
                  self.alertText = 'کد تایید برای شما ارسال شد.'
                  self.alertType = 'success'
                  self.showAlert = true
                  self.loginStep = 2
                  self.isLoadingAxios = false
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                  self.isLoadingAxios = false
                })
              console.log(options);
              // axios.post('https://ahuan.ir/api/register' , options)
              //         .then(function (response) {
              //           // handle success
              //           // codeSend = response.data
              //           // self.resendSeconds = 60
              //           self.alertText = 'ثبت نام با موفقیت انجام شد.'
              //           self.alertType = 'success'
              //           self.showAlert = true
              //           // self.loginStep = 2
              //         })
              //         .catch(function (error) {
              //           // handle error
              //           console.log(error);
              //         })
            }
            // companey register______________________________________________
            else {
              self.isLoadingAxios = false
            }
          }
          //     if ((self.loginForm.phone == '09054791374' && self.loginType == 'login') || self.loginType == 'register') {
          //       if (self.UserType == 1) {
          //         self.resendSeconds = 60
          //         self.showAlert = true
          //         self.alertText = 'کد تایید برای شما ارسال شد.'
          //         self.alertType = 'success'
          //         self.loginStep = 2
          //       }
          //       self.loginStep = 2
          // }
          //     else {

          //       self.loginType = 'register'
          //       self.showAlert = true
          //       self.alertText = 'برای ورود به سایت باید ابتدا ثبت نام کنید.'
          //       self.alertType = 'error'
          //       self.loginForm.password = ''
          //     }
          //     this.$refs.loginForm.resetValidation()
        }
        else {
          self.showAlert = true
          self.alertText = 'لطفا فیلدها را بدرستی تکمیل کنید.'
          self.alertType = 'error'
        }
      }
      else if (self.loginStep == 2) {
        if (self.loginForm.otp == codeSend) {
          if (self.loginType == 'login') {
            self.isLogin = true
            self.userName = localStorage.getItem('user-name');
            self.loginStep = 3
          } else {
            var options = {
              displayname: self.loginForm.name + ' ' + self.loginForm.family,
              email: self.loginForm.mail,
              mobile: self.loginForm.phone,
              password: "Test@123"
            }
            axios.post('https://ahuan.ir/api/register', options)
              .then(function (response) {
                // handle success
                // codeSend = response.data
                // self.resendSeconds = 60
                if (response.data.sussecc) {
                  self.alertText = 'ثبت نام با موفقیت انجام شد.'
                  self.alertType = 'success'
                  self.showAlert = true
                  self.isLogin = true
                  self.userName = options.displayname
                  localStorage.setItem('user-name', options.displayname);
                  localStorage.setItem('isLoginAhuan', true);
                  self.loginStep = 3
                } else {
                  console.log(response.data.error);
                  self.alertText = response.data.error
                  self.alertType = 'error'
                  self.showAlert = true
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
          }

        } else {
          self.loginForm.otp == ''
          self.showAlert = true
          self.alertText = 'کد وارد شده صحیح نیست.'
          self.alertType = 'error'
        }
      }
    },
    logOut() {
      window.location.href = 'https://ahuan.ir/profile'
      // var self = this
      // axios.put('https://ahuan.ir/api/login')
      //   .then(function (response) {
      //     // handle success
      //     self.alertText = 'عملیات خروج از سایت انجام شد.'
      //     self.alertType = 'success'
      //     self.showAlert = true
      //     localStorage.setItem('isLoginAhuan', false)
      //     localStorage.removeItem('user-name')
      //     self.isLogin = false
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
    },
    resetLoginForm() {
      this.loginForm = {
        name: '',
        family: '',
        companeyName: '',
        companeyWork: '',
        code: '',
        phone: '',
        mail: '',
        password: '',
        otp: ''
      }
    },
    sendFormOpinion() {
      this.showAlert = false
      let self = this
      this.$refs.sendTextForm.validate()
      if (
        (this.theUser.about.first == false && this.theUser.about.twice == false && this.theUser.about.Third == false && this.theUser.about.Fourth == false) ||
        (self.theUser.title.first == false && self.theUser.title.twice == false && self.theUser.title.Third == false && self.theUser.title.Fourth == false && self.theUser.title.fifth == false && self.theUser.title.sixth == false && self.theUser.title.seventh == false && self.theUser.title.Eighth == false) ||
        (!self.$refs.sendTextForm.validate())
      ) {
        self.alertType = 'error'
        self.alertText = 'لطفا فیلدهای اجباری را بدرستی تکمیل کنید.'
        self.showAlert = true
      } else {
        self.isLoadingAxios = true
        setTimeout(() => {
          self.isLoadingAxios = false
          self.theUser = {
            name: '',
            phone: '',
            mail: '',
            about: {
              first: false,
              twice: false,
              Third: false,
              Fourth: false,
            },
            title: {
              first: false,
              twice: false,
              Third: false,
              Fourth: false,
              fifth: false,
              sixth: false,
              seventh: false,
              Eighth: false,
            },
            contractNumber: '',
            text: ''
          }
          self.sendTextDialog = true
          self.$refs.sendTextForm.resetValidation()
          setTimeout(() => {
            self.sendTextDialog = false
          }, 3000);
        }, 500);
      }

    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = false
    }, 200);

    let newObjectDate = [
      {
        نام: 'Fideh hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '5.550.000',
        تکنفره: '7.200.000',
        کودک: '5.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Oriella taksim',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '5.970.000',
        تکنفره: '7.900.000',
        کودک: '5.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'All in ',
        درجه: '3',
        موقعیت: 'Dolapedere',
        دوتخته: '6.700.000',
        تکنفره: '8.950.000',
        کودک: '5.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'White monarch',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '6.700.000',
        تکنفره: '8.950.000',
        کودک: '5.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cuento hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '7.200.000',
        تکنفره: '9.900.000',
        کودک: '6.100.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Atro hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '7.200.000',
        تکنفره: '9.900.000',
        کودک: '6.100.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Dora hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '7.200.000',
        تکنفره: '10.600.000',
        کودک: '6.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim town',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Inntel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango sisli',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.500.000',
        تکنفره: '12.500.000',
        کودک: '7.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.500.000',
        تکنفره: '12.500.000',
        کودک: '7.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cartoon',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Buke hotel',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Riva hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Metropolitan',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.900.000',
        تکنفره: '16.100.000',
        کودک: '7.700.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Mercure bomonti',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '9.900.000',
        تکنفره: '16.100.000',
        کودک: '7.700.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The peak hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '10.200.000',
        تکنفره: '15.200.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Palazzo Donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '10.200.000',
        تکنفره: '15.200.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cher hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '10.500.000',
        تکنفره: '16.500.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Surmeli',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '10.500.000',
        تکنفره: '16.500.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '11.200.000',
        تکنفره: '17.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The craton',
        درجه: '5',
        موقعیت: 'mecidiyekoy',
        دوتخته: '11.200.000',
        تکنفره: '17.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '11.400.000',
        تکنفره: '17.500.000',
        کودک: '7.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Golden age',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '11.400.000',
        تکنفره: '17.500.000',
        کودک: '7.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim gonen',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '11.400.000',
        تکنفره: '17.500.000',
        کودک: '7.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Holiday inn',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '11.900.000',
        تکنفره: '18.500.000',
        کودک: '7.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Titanic city',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.500.000',
        تکنفره: '20.000.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Crowne plaza  ',
        درجه: '5',
        موقعیت: 'Harbiye',
        دوتخته: '12.500.000',
        تکنفره: '20.000.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Point taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '13.100.000',
        تکنفره: '20.500.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Wish more',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '14.500.000',
        تکنفره: '21.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Radison blu',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '15.500.000',
        تکنفره: '26.200.000',
        کودک: '6.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Hilton bosphoros',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Divan',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Conrad',
        درجه: '5',
        موقعیت: 'Besiktas',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Park hotel (CVK)',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Rixos pera ',
        درجه: '5',
        موقعیت: 'Tarlabasi',
        دوتخته: '21.000.000',
        تکنفره: '35.000.000',
        کودک: '9.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The marmara',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '28.000.000',
        تکنفره: '47.500.000',
        کودک: '8.400.000',
        کودک2: '4.100.000',
      },
    ]
    var pricesItemsIstanbul = []
    for (let i = 0; i < newObjectDate.length; i++) {
      pricesItemsIstanbul.push({
        id: i + 1,
        name: newObjectDate[i].نام,
        star: newObjectDate[i].درجه,
        place: newObjectDate[i].موقعیت,
        duble: newObjectDate[i].دوتخته,
        single: newObjectDate[i].تکنفره,
        baby: newObjectDate[i].کودک,
        baby2: newObjectDate[i].کودک2,
      })
    }
    this.pricesItemsIstanbul = pricesItemsIstanbul;
    // __________________________________________
    let newObjectDate2 = [
      {
        نام: 'Fideh hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '6.100.000',
        تکنفره: '8.300.000',
        کودک: '5.950.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Oriella taksim',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '6.700.000',
        تکنفره: '8.950.000',
        کودک: '6.100.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'All in ',
        درجه: '3',
        موقعیت: 'Dolapedere',
        دوتخته: '7.800.000',
        تکنفره: '11.000.000',
        کودک: '6.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'White monarch',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '7.800.000',
        تکنفره: '11.000.000',
        کودک: '6.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cuento hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '8.200.000',
        تکنفره: '11.900.000',
        کودک: '6.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Atro hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.900.000',
        کودک: '6.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Dora hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.500.000',
        تکنفره: '10.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim town',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.100.000',
        تکنفره: '13.500.000',
        کودک: '8.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Inntel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.100.000',
        تکنفره: '13.500.000',
        کودک: '8.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '9.100.000',
        تکنفره: '13.500.000',
        کودک: '8.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '9.100.000',
        تکنفره: '13.500.000',
        کودک: '8.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango sisli',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '9.100.000',
        تکنفره: '13.500.000',
        کودک: '8.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.900.000',
        تکنفره: '12.500.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.900.000',
        تکنفره: '12.500.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Buke hotel',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '10.950.000',
        تکنفره: '16.900.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cartoon',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.950.000',
        تکنفره: '16.900.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Riva hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.950.000',
        تکنفره: '16.900.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.950.000',
        تکنفره: '16.900.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Metropolitan',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.500.000',
        تکنفره: '19.500.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Mercure bomonti',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '12.500.000',
        تکنفره: '19.500.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.900.000',
        تکنفره: '21.500.000',
        کودک: '9.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Golden age',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.900.000',
        تکنفره: '21.500.000',
        کودک: '9.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim gonen',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.900.000',
        تکنفره: '21.500.000',
        کودک: '9.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The peak hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '11.900.000',
        تکنفره: '18.900.000',
        کودک: '8.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Palazzo Donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '11.900.000',
        تکنفره: '18.900.000',
        کودک: '8.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cher hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '12.600.000',
        تکنفره: '19.800.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Surmeli',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '12.600.000',
        تکنفره: '19.800.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '13.200.000',
        تکنفره: '21.500.000',
        کودک: '7.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The craton',
        درجه: '5',
        موقعیت: 'mecidiyekoy',
        دوتخته: '13.200.000',
        تکنفره: '21.500.000',
        کودک: '7.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Holiday inn',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '14.200.000',
        تکنفره: '22.700.000',
        کودک: '9.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Titanic city',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '15.500.000',
        تکنفره: '25.000.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Crowne plaza  ',
        درجه: '5',
        موقعیت: 'Harbiye',
        دوتخته: '15.500.000',
        تکنفره: '25.000.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Point taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '15.900.000',
        تکنفره: '25.600.000',
        کودک: '8.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Wish more',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '18.100.000',
        تکنفره: '27.000.000',
        کودک: '7.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Radison blu',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '21.100.000',
        تکنفره: '35.500.000',
        کودک: '7.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Hilton bosphoros',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '23.300.000',
        تکنفره: '43.000.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Divan',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '',
        تکنفره: '',
        کودک: '',
        کودک2: '',
      },
      {
        نام: 'Conrad',
        درجه: '5',
        موقعیت: 'Besiktas',
        دوتخته: '',
        تکنفره: '',
        کودک: '',
        کودک2: '',
      },
      {
        نام: 'Park hotel (CVK)',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '',
        تکنفره: '',
        کودک: '',
        کودک2: '',
      },
      {
        نام: 'Rixos pera ',
        درجه: '5',
        موقعیت: 'Tarlabasi',
        دوتخته: '26.000.000',
        تکنفره: '45.500.000',
        کودک: '12.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The marmara',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '35.500.000',
        تکنفره: '61.500.000',
        کودک: '9.900.000',
        کودک2: '4.100.000',
      },
    ]
    var pricesItemsIstanbul2 = []
    for (let i = 0; i < newObjectDate2.length; i++) {
      pricesItemsIstanbul2.push({
        id: i + 1,
        name: newObjectDate2[i].نام,
        star: newObjectDate2[i].درجه,
        place: newObjectDate2[i].موقعیت,
        duble: newObjectDate2[i].دوتخته,
        single: newObjectDate2[i].تکنفره,
        baby: newObjectDate2[i].کودک,
        baby2: newObjectDate2[i].کودک2,
      })
      this.pricesItemsIstanbul2 = pricesItemsIstanbul2;
    }
    // __________________________________________
    let newObjectDate3 = [
      {
        نام: 'Fideh hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '6.790.000',
        تکنفره: '9.400.000',
        کودک: '6.100.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Oriella taksim',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '7.300.000',
        تکنفره: '10.000.000',
        کودک: '6.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'All in ',
        درجه: '3',
        موقعیت: 'Dolapedere',
        دوتخته: '8.600.000',
        تکنفره: '12.700.000',
        کودک: '6.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'White monarch',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '8.600.000',
        تکنفره: '12.700.000',
        کودک: '6.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cuento hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '8.900.000',
        تکنفره: '13.500.000',
        کودک: '6.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Atro hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.900.000',
        تکنفره: '13.500.000',
        کودک: '6.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Dora hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '9.400.000',
        تکنفره: '14.300.000',
        کودک: '6.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim town',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.200.000',
        تکنفره: '15.600.000',
        کودک: '8.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Inntel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.200.000',
        تکنفره: '15.600.000',
        کودک: '8.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '10.200.000',
        تکنفره: '15.600.000',
        کودک: '8.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '10.200.000',
        تکنفره: '15.600.000',
        کودک: '8.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango sisli',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '10.200.000',
        تکنفره: '15.600.000',
        کودک: '8.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.900.000',
        تکنفره: '17.200.000',
        کودک: '9.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '10.900.000',
        تکنفره: '17.200.000',
        کودک: '9.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Buke hotel',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '12.600.000',
        تکنفره: '20.200.000',
        کودک: '10.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cartoon',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.600.000',
        تکنفره: '20.200.000',
        کودک: '10.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Riva hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.600.000',
        تکنفره: '20.200.000',
        کودک: '10.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.600.000',
        تکنفره: '20.200.000',
        کودک: '10.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Metropolitan',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '14.500.000',
        تکنفره: '23.300.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Mercure bomonti',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '14.500.000',
        تکنفره: '23.300.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '15.800.000',
        تکنفره: '25.500.000',
        کودک: '9.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Golden age',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '15.800.000',
        تکنفره: '25.500.000',
        کودک: '9.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim gonen',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '15.800.000',
        تکنفره: '25.500.000',
        کودک: '9.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The peak hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '13.800.000',
        تکنفره: '22.200.000',
        کودک: '9.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Palazzo Donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '13.800.000',
        تکنفره: '22.200.000',
        کودک: '9.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cher hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '14.800.000',
        تکنفره: '23.900.000',
        کودک: '9.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Surmeli',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '14.800.000',
        تکنفره: '23.900.000',
        کودک: '9.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '15.800.000',
        تکنفره: '26.000.000',
        کودک: '9.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The craton',
        درجه: '5',
        موقعیت: 'mecidiyekoy',
        دوتخته: '15.800.000',
        تکنفره: '26.000.000',
        کودک: '9.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Holiday inn',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '16.800.000',
        تکنفره: '26.700.000',
        کودک: '10.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Titanic city',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '18.200.000',
        تکنفره: '30.000.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Crowne plaza  ',
        درجه: '5',
        موقعیت: 'Harbiye',
        دوتخته: '18.200.000',
        تکنفره: '30.000.000',
        کودک: '9.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Point taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '18.800.000',
        تکنفره: '30.900.000',
        کودک: '9.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Wish more',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '21.700.000',
        تکنفره: '32.000.000',
        کودک: '8.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Radison blu',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '23.900.000',
        تکنفره: '40.800.000',
        کودک: '8.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Hilton bosphoros',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '28.900.000',
        تکنفره: '51.500.000',
        کودک: '10.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Divan',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '28.900.000',
        تکنفره: '51.500.000',
        کودک: '10.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Conrad',
        درجه: '5',
        موقعیت: 'Besiktas',
        دوتخته: '28.900.000',
        تکنفره: '51.500.000',
        کودک: '10.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Park hotel (CVK)',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '28.900.000',
        تکنفره: '51.500.000',
        کودک: '10.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Rixos pera ',
        درجه: '5',
        موقعیت: 'Tarlabasi',
        دوتخته: '31.000.000',
        تکنفره: '54.900.000',
        کودک: '14.000.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The marmara',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '42.800.000',
        تکنفره: '7.600.000',
        کودک: '10.800.000',
        کودک2: '4.100.000',
      },
    ]
    var pricesItemsIstanbul3 = []
    for (let i = 0; i < newObjectDate3.length; i++) {
      pricesItemsIstanbul3.push({
        id: i + 1,
        name: newObjectDate3[i].نام,
        star: newObjectDate3[i].درجه,
        place: newObjectDate3[i].موقعیت,
        duble: newObjectDate3[i].دوتخته,
        single: newObjectDate3[i].تکنفره,
        baby: newObjectDate3[i].کودک,
        baby2: newObjectDate3[i].کودک2,
      })
      this.pricesItemsIstanbul3 = pricesItemsIstanbul3;
    }
    // __________________________________________
    let newObjectDate4_1 = [
      {
        نام: 'Taksim doorway',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '17.900.000',
        تکنفره: '21.900.000',
        کودک: '16.000.000',
      },
      {
        نام: 'Cumbali plaza',
        درجه: '3',
        موقعیت: 'Dolapdere',
        دوتخته: '19.800.000',
        تکنفره: '24.800.000',
        کودک: '16.500.000',
      },
      {
        نام: 'Arsima hotel',
        درجه: '3',
        موقعیت: 'Osmanbey',
        دوتخته: '21.500.000',
        تکنفره: '28.500.000',
        کودک: '16.900.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '23.900.000',
        تکنفره: '31.500.000',
        کودک: '16.000.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Pera',
        دوتخته: '25.000.000',
        تکنفره: '33.500.000',
        کودک: '21.900.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '33.900.000',
        تکنفره: '37.000.000',
        کودک: '16.500.000',
      },
      {
        نام: 'Taxim express',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '25.800.000',
        تکنفره: '37.900.000',
        کودک: '17.000.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '27.900.000',
        تکنفره: '38.300.000',
        کودک: '21.900.000',
      },
      {
        نام: 'The marmara sisli',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '25.800.000',
        تکنفره: '38.300.000',
        کودک: '19.000.000',
      },
      {
        نام: 'The Elysium taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '29.800.000',
        تکنفره: '46.000.000',
        کودک: '17.700.000',
      },
      {
        نام: 'Golden age hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '30.800.000',
        تکنفره: '47.000.000',
        کودک: '19.500.000',
      },

      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '32.500.000',
        تکنفره: '49.900.000',
        کودک: '19.900.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '32.900.000',
        تکنفره: '47.000.000',
        کودک: '17.900.000',
      },
      {
        نام: 'Palazzo donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '33.300.000',
        تکنفره: '47.500.000',
        کودک: '17.500.000',
      },
      {
        نام: 'Elite world hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '35.900.000',
        تکنفره: '57.000.000',
        کودک: '19.500.000',
      },
      {
        نام: 'point hotel taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '36.800.000',
        تکنفره: '58.900.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Hilton bosphorus',
        درجه: '5',
        موقعیت: 'SISLI',
        دوتخته: '47.500.000',
        تکنفره: '80.000.000',
        کودک: '21.000.000',
      },

    ]
    var pricesItemsIstanbul4 = []
    for (let i = 0; i < newObjectDate4_1.length; i++) {
      pricesItemsIstanbul4.push({
        id: i + 1,
        name: newObjectDate4_1[i].نام,
        star: newObjectDate4_1[i].درجه,
        place: newObjectDate4_1[i].موقعیت,
        duble: newObjectDate4_1[i].دوتخته,
        single: newObjectDate4_1[i].تکنفره,
        baby: newObjectDate4_1[i].کودک,
        baby2: newObjectDate4_1[i].کودک2,
      })
      this.pricesItemsIstanbul4 = pricesItemsIstanbul4;
    }
    // __________________________________________
    let newObjectDate5_1 = [
      {
        نام: 'Taksim doorway',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '18.900.000',
        تکنفره: '27.00.000',
        کودک: '18.000.000',
      },
      {
        نام: 'Cumbali plaza',
        درجه: '3',
        موقعیت: 'Dolapdere',
        دوتخته: '21.800.000',
        تکنفره: '29.500000.',
        کودک: '17.500.000',
      },
      {
        نام: 'Arsima hotel',
        درجه: '3',
        موقعیت: 'Osmanbey',
        دوتخته: '22.600.000',
        تکنفره: '31.400.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '25.900.000',
        تکنفره: '38.000.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Pera',
        دوتخته: '27.400.000',
        تکنفره: '41.000.000',
        کودک: '24.800.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '28.000.000',
        تکنفره: '42.000.000',
        کودک: '18.500.000',
      },
      {
        نام: 'Taxim express',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '27.300.000',
        تکنفره: '41.500.000',
        کودک: '18.500.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '30.000.000',
        تکنفره: '47.500.000',
        کودک: '24.900.000',
      },
      {
        نام: 'The marmara sisli',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '28.500.000',
        تکنفره: '43.000.000',
        کودک: '17.800.000',
      },
      {
        نام: 'The Elysium taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '33.500.000',
        تکنفره: '53.000.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Golden age hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '34.000.000',
        تکنفره: '47.000.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '36.000.000',
        تکنفره: '58.500.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'sisli',
        دوتخته: '35.900.000',
        تکنفره: '54.000.000',
        کودک: '18.500.000',
      },
      {
        نام: 'Palazzo donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '35.900.000',
        تکنفره: '55.000.000',
        کودک: '21.000.000',
      },
      {
        نام: 'Elite world hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '40.000.000',
        تکنفره: '66.900.000',
        کودک: '20.800.000',
      },
      {
        نام: 'Point hotel taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '38.500.000',
        تکنفره: '60.700.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Hilton bosphorus',
        درجه: '5',
        موقعیت: 'SISLI',
        دوتخته: '49.800.000',
        تکنفره: '87.000.000',
        کودک: '21.000.000',
      },

    ]
    var pricesItemsIstanbul5 = []
    for (let i = 0; i < newObjectDate5_1.length; i++) {
      pricesItemsIstanbul5.push({
        id: i + 1,
        name: newObjectDate5_1[i].نام,
        star: newObjectDate5_1[i].درجه,
        place: newObjectDate5_1[i].موقعیت,
        duble: newObjectDate5_1[i].دوتخته,
        single: newObjectDate5_1[i].تکنفره,
        baby: newObjectDate5_1[i].کودک,
        baby2: newObjectDate5_1[i].کودک2,
      })
      this.pricesItemsIstanbul5 = pricesItemsIstanbul5;
    }
    // __________________________________________
    let newObjectDate6_1 = [
      {
        نام: 'Taksim doorway',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '21.500.000',
        تکنفره: '27.000.000',
        کودک: '18.500.000',
      },
      {
        نام: 'Cumbali plaza',
        درجه: '3',
        موقعیت: 'Dolapdere',
        دوتخته: '19.900.000',
        تکنفره: '32.500000.',
        کودک: '18.500.000',
      },
      {
        نام: 'Arsima hotel',
        درجه: '3',
        موقعیت: 'Osmanbey',
        دوتخته: '24.000.000',
        تکنفره: '33.500.000',
        کودک: '17.900.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '22.900.000',
        تکنفره: '38.500.000',
        کودک: '19.800.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Pera',
        دوتخته: '27.900.000',
        تکنفره: '43.000.000',
        کودک: '26.500.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '29.900.000',
        تکنفره: '48.000.000',
        کودک: '18.900.000',
      },
      {
        نام: 'Taxim express',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '31.900.000',
        تکنفره: '49.800.000',
        کودک: '18.700.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '32.800.000',
        تکنفره: '49.400.000',
        کودک: '25.500.000',
      },
      {
        نام: 'The marmara sisli',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '32.900.000',
        تکنفره: '52.000.000',
        کودک: '18.500.000',
      },
      {
        نام: 'The Elysium taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '35.700.000',
        تکنفره: '58.000.000',
        کودک: '19.500.000',
      },
      {
        نام: 'Golden age hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '35.900.000',
        تکنفره: '52.000.000',
        کودک: '18.500.000',
      },
      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '37.500.000',
        تکنفره: '62.000.000',
        کودک: '19.700.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'sisli',
        دوتخته: '37.900.000',
        تکنفره: '55.500.000',
        کودک: '18.900.000',
      },
      {
        نام: 'Palazzo donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '38.500.000',
        تکنفره: '56.900.000',
        کودک: '21.700.000',
      },
      {
        نام: 'Elite world hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '42.000.000',
        تکنفره: '68.500.000',
        کودک: '22.800.000',
      },
      {
        نام: 'Point hotel taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '44.500.000',
        تکنفره: '71.800.000',
        کودک: '22.500.000',
      },
      {
        نام: 'Hilton bosphorus',
        درجه: '5',
        موقعیت: 'SISLI',
        دوتخته: '61.500.000',
        تکنفره: '150.000.000',
        کودک: '23.700.000',
      },

    ]
    var pricesItemsIstanbul6 = []
    for (let i = 0; i < newObjectDate6_1.length; i++) {
      pricesItemsIstanbul6.push({
        id: i + 1,
        name: newObjectDate6_1[i].نام,
        star: newObjectDate6_1[i].درجه,
        place: newObjectDate6_1[i].موقعیت,
        duble: newObjectDate6_1[i].دوتخته,
        single: newObjectDate6_1[i].تکنفره,
        baby: newObjectDate6_1[i].کودک,
        baby2: newObjectDate6_1[i].کودک2,
      })
      this.pricesItemsIstanbul6 = pricesItemsIstanbul6;
    }
    // __________________________________________
    let newObjectDate4 = [
      {
        نام: ' ROYAL TULIP ',
        درجه: 3,
        موقعیت: ' دیره',
        دوتخته: 12200000,
        تکنفره: 15300000,
        کودک: 8200000,
      },
      {
        نام: ' SUN & SAND',
        درجه: 3,
        موقعیت: ' دیره',
        دوتخته: 12900000,
        تکنفره: 16600000,
        کودک: 8300000,
      },
      {
        نام: ' FURTUNE PEARL',
        درجه: 3,
        موقعیت: ' دیره',
        دوتخته: 13100000,
        تکنفره: 16800000,
        کودک: 8400000,
      },
      {
        نام: 'IBIS STYLES DEIRA',
        درجه: 3,
        موقعیت: ' دیره',
        دوتخته: 13300000,
        تکنفره: 17500000,
        کودک: 8600000,
      },
      {
        نام: ' CITY AVENU ',
        درجه: 3,
        موقعیت: ' دیره',
        دوتخته: 13600000,
        تکنفره: 18200000,
        کودک: 8800000,
      },
      {
        نام: ' CITY SEASON ',
        درجه: 4,
        موقعیت: ' دیره',
        دوتخته: 14700000,
        تکنفره: 20100000,
        کودک: 9200000,
      },
      {
        نام: ' SIGNUTER ALBARSHA ',
        درجه: 4,
        موقعیت: ' البرشا',
        دوتخته: 15300000,
        تکنفره: 21400000,
        کودک: 9500000,
      },

      {
        نام: ' EMIRATE GRAND',
        درجه: 4,
        موقعیت: ' شیخ زاید',
        دوتخته: 16600000,
        تکنفره: 23900000,
        کودک: 10200000,
      },
      {
        نام: ' METROPOLITAN',
        درجه: 4,
        موقعیت: ' شیخ زاید',
        دوتخته: 16700000,
        تکنفره: 24200000,
        کودک: 10200000,
      },
      {
        نام: ' NOVOTEL DEIRA',
        درجه: 4,
        موقعیت: ' دیره',
        دوتخته: 17700000,
        تکنفره: 26200000,
        کودک: 10700000,
      },
      {
        نام: ' ROSE REYHAN',
        درجه: 4,
        موقعیت: ' شیخ زاید',
        دوتخته: 18800000,
        تکنفره: 28300000,
        کودک: 11300000,
      },
      {
        نام: ' PULLMAN DEIRA',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: 19200000,
        تکنفره: 28900000,
        کودک: 14000000,
      },
      {

        نام: ' FAIRMONT',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: 20600000,
        تکنفره: 32000000,
        کودک: 12200000,
      },
      {
        نام: ' CENTARA MIRAGE',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: 21000000,
        تکنفره: 32200000,
        کودک: 12500000,
      },
      {
        نام: ' HYDE HOTEL',
        درجه: 5,
        موقعیت: 'بیزنس بی',
        دوتخته: 21500000,
        تکنفره: 33900000,
        کودک: 12800000,
      },
      {
        نام: ' SHERATON DUBAI MALL',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: 24000000,
        تکنفره: 38700000,
        کودک: 13900000,
      },
      {
        نام: ' MOVENPICK JUMEIRAH',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: 24800000,
        تکنفره: 40400000,
        کودک: 13500000,
      },
      {
        نام: ' HILTON HABTOOR',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: 25000000,
        تکنفره: 40200000,
        کودک: 14500000,
      },
      {
        نام: ' GRAND HYATT',
        درجه: 5,
        موقعیت: 'بردبی',
        دوتخته: 27800000,
        تکنفره: 46400000,
        کودک: 15800000,
      },
      {
        نام: ' RIXOS BAB AL BAHR',
        درجه: 5,
        موقعیت: 'راس الخیمه',
        دوتخته: 30400000,
        تکنفره: 51600000,
        کودک: 17200000,
      },
      {
        نام: ' HILTON JUMEIRA',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: 35800000,
        تکنفره: 62500000,
        کودک: 20000000,
      },
      {
        نام: ' ATLANTIS THE PALM',
        درجه: 5,
        موقعیت: 'پالم',
        دوتخته: 46000000,
        تکنفره: 77300000,
        کودک: 23500000,
      },
    ]
    var pricesItemsDubai = []
    for (let i = 0; i < newObjectDate4.length; i++) {
      pricesItemsDubai.push({
        id: i + 1,
        name: newObjectDate4[i].نام,
        star: newObjectDate4[i].درجه,
        place: newObjectDate4[i].موقعیت,
        duble: newObjectDate4[i].دوتخته,
        single: newObjectDate4[i].تکنفره,
        baby: newObjectDate4[i].کودک,
        baby2: newObjectDate4[i].کودک2,
      })
      this.pricesItemsDubai = pricesItemsDubai;
    }
    // __________________________________________
    let newObjectDate5 = [
      {
        نام: 'Sun & sand (downtown)',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '13900000',
        تکنفره: '18700000',
        کودک: '8900000',
      },
      {
        نام: 'Furtune pearl',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '14300000',
        تکنفره: '19300000',
        کودک: '9000000',
      },
      {
        نام: 'phoencia',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '14500000',
        تکنفره: '19700000',
        کودک: '9200000',
      },
      {
        نام: 'Golden tulip',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '15000000',
        تکنفره: '20900000',
        کودک: '9500000',
      },
      {
        نام: 'avenue',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '16300000',
        تکنفره: '23400000',
        کودک: '10000000',
      },
      {
        نام: 'City season',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '16500000',
        تکنفره: '23780000',
        کودک: '10200000',
      },
      {
        نام: 'Signature albarsha',
        درجه: 4,
        موقعیت: 'البرشا',
        دوتخته: '17300000',
        تکنفره: '25400000',
        کودک: '10500000',
      },
      {
        نام: 'Metropolitan',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '18900000',
        تکنفره: '28600000',
        کودک: '11400000',
      },
      {
        نام: 'Emirate grand',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '19200000',
        تکنفره: '28900000',
        کودک: '11500000',
      },
      {
        نام: 'Novotel deira',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '20100000',
        تکنفره: '31900000',
        کودک: '12200000',
      },
      {
        نام: 'Hyatt regency',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: '21300000',
        تکنفره: '33400000',
        کودک: '12600000',
      },
      {
        نام: 'Crown plaza jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '21600000',
        تکنفره: '33900000',
        کودک: '12700000',
        کودک2: '',
      },
      {
        نام: 'Sheraton grand',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '24500000',
        تکنفره: '39600000',
        کودک: '14200000',
      },
      {
        نام: 'fairmont',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '25800000',
        تکنفره: '42400000',
        کودک: '14300000',
      },
      {
        نام: 'Sheraton Dubai mall',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '28900000',
        تکنفره: '49000000',
        کودک: '16400000',
      },
      {
        نام: 'Movenpick jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '30000000',
        تکنفره: '50200000',
        کودک: '16900000',
      },
      {
        نام: 'Hilton al habtoor',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '30300000',
        تکنفره: '51500000',
        کودک: '17000000',
        کودک2: '',
      },
      {
        نام: 'Grand hyatt',
        درجه: 5,
        موقعیت: 'بردبی',
        دوتخته: '33900000',
        تکنفره: '58500000',
        کودک: '21500000',
      },
      {
        نام: 'Hilton jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '44700000',
        تکنفره: '80300000',
        کودک: '24400000',
      },
      {
        نام: 'conrad',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '45300000',
        تکنفره: '81500000',
        کودک: '24700000',
      },
    ]
    var pricesItemsDubai2 = []
    for (let i = 0; i < newObjectDate5.length; i++) {
      pricesItemsDubai2.push({
        id: i + 1,
        name: newObjectDate5[i].نام,
        star: newObjectDate5[i].درجه,
        place: newObjectDate5[i].موقعیت,
        duble: newObjectDate5[i].دوتخته,
        single: newObjectDate5[i].تکنفره,
        baby: newObjectDate5[i].کودک,
        baby2: newObjectDate5[i].کودک2,
      })
      this.pricesItemsDubai2 = pricesItemsDubai2;
    }
    // __________________________________________
    let newObjectDate6 = [
      {
        نام: 'Sun & sand (downtown)',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '15200000',
        تکنفره: '21000000',
        کودک: '9500000',
      },
      {
        نام: 'Furtune pearl',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '15600000',
        تکنفره: '22000000',
        کودک: '9800000',
      },
      {
        نام: 'phoencia',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '15900000',
        تکنفره: '22300000',
        کودک: '9900000',
      },
      {
        نام: 'Golden tulip',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '16200000',
        تکنفره: '23200000',
        کودک: '10200000',
      },
      {
        نام: 'avenue',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '18000000',
        تکنفره: '26900000',
        کودک: '10900000',
      },
      {
        نام: 'City season',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '18300000',
        تکنفره: '27300000',
        کودک: '11200000',
      },
      {
        نام: 'Signature albarsha',
        درجه: 4,
        موقعیت: 'البرشا',
        دوتخته: '19300000',
        تکنفره: '29400000',
        کودک: '11600000',
      },
      {
        نام: 'Metropolitan',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '21300000',
        تکنفره: '33400000',
        کودک: '12600000',
      },
      {
        نام: 'Emirate grand',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '20200000',
        تکنفره: '32500000',
        کودک: '12400000',
      },
      {
        نام: 'Novotel deira',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '23300000',
        تکنفره: '37500000',
        کودک: '13600000',
      },
      {
        نام: 'Hyatt regency',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: '23900000',
        تکنفره: '38600000',
        کودک: '13900000',
      },
      {
        نام: 'Crown plaza jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '24600000',
        تکنفره: '39900000',
        کودک: '14200000',
      },
      {
        نام: 'Sheraton grand',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '28200000',
        تکنفره: '47200000',
        کودک: '16000000',
      },
      {
        نام: 'fairmont',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '29900000',
        تکنفره: '50200000',
        کودک: '16900000',
      },
      {
        نام: 'Sheraton Dubai mall',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '33800000',
        تکنفره: '58400000',
        کودک: '18900000',
      },
      {
        نام: 'Movenpick jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '35200000',
        تکنفره: '61200000',
        کودک: '19500000',
      },
      {
        نام: 'Hilton al habtoor',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '35600000',
        تکنفره: '62200000',
        کودک: '19800000',
        کودک2: '',
      },
      {
        نام: 'Grand hyatt',
        درجه: 5,
        موقعیت: 'بردبی',
        دوتخته: '39500000',
        تکنفره: '69900000',
        کودک: '21700000',
      },
      {
        نام: 'Hilton jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '53600000',
        تکنفره: '98200000',
        کودک: '28800000',
      },
      {
        نام: 'conrad',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '54500000',
        تکنفره: '99600000',
        کودک: '29200000',
      },
    ]
    var pricesItemsDubai3 = []
    for (let i = 0; i < newObjectDate6.length; i++) {
      pricesItemsDubai3.push({
        id: i + 1,
        name: newObjectDate6[i].نام,
        star: newObjectDate6[i].درجه,
        place: newObjectDate6[i].موقعیت,
        duble: newObjectDate6[i].دوتخته,
        single: newObjectDate6[i].تکنفره,
        baby: newObjectDate6[i].کودک,
        baby2: newObjectDate6[i].کودک2,
      })
      this.pricesItemsDubai3 = pricesItemsDubai3;
    }
    // __________________________________________
    let newObjectDate6_2 = [
      {
        نام: 'ORCHID',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: 25900000,
        تکنفره: '35400000',
        کودک: '22000000',
      },

      {
        نام: 'RAMADA PLAZA',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: 30300000,
        تکنفره: '39700000',
        کودک: '22300000',
      },
      {
        نام: 'AVENUE',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: 32000000,
        تکنفره: '41600000',
        کودک: '26400000',
      },
      {
        نام: 'NOVOTEL ALBARSHA',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: 35300000,
        تکنفره: '49400000',
        کودک: '27900000',
      },
      {
        نام: 'TWO SEASON',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: 35900000,
        تکنفره: '50500000',
        کودک: '30600000',
      },
      {
        نام: 'GEVORA',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: 38300000,
        تکنفره: '55500000',
        کودک: '32900000',
      },
      {
        نام: 'TOWER ROTANA',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: 39500000,
        تکنفره: '57400000',
        کودک: '33000000',
      },
      {
        نام: 'PULLMAN DUBAI',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: 45500000,
        تکنفره: '69900000',
        کودک: '27300000',
      },

      {
        نام: 'RADISSON BEACH',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: 48200000,
        تکنفره: '75500000',
        کودک: '30300000',
      },
      {
        نام: 'GRAND HYATT',
        درجه: 5,
        موقعیت: 'بردبی',
        دوتخته: 49300000,
        تکنفره: '76000000',
        کودک: '31500000',
      },
      {
        نام: 'SHERATON DUBAI',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: 52300000,
        تکنفره: '83600000',
        کودک: '31900000',
      },
      {
        نام: 'W BUBAI THE PALM',
        درجه: 5,
        موقعیت: 'پالم جمیرا',
        دوتخته: 69600000,
        تکنفره: '118000000',
        کودک: '32700000',
      },
      {
        نام: 'MOVENPICK RESORT',
        درجه: 5,
        موقعیت: 'راس الخیمه',
        دوتخته: 78700000,
        تکنفره: '137000000',
        کودک: '34000000',
      },
      {
        نام: 'ATLANTIS THE PALM',
        درجه: 5,
        موقعیت: 'پالم جمیرا',
        دوتخته: 88200000,
        تکنفره: '155500000',
        کودک: '35800000',
      },
    ]
    var pricesItemsDubai4 = []
    for (let i = 0; i < newObjectDate6_2.length; i++) {
      pricesItemsDubai4.push({
        id: i + 1,
        name: newObjectDate6_2[i].نام,
        star: newObjectDate6_2[i].درجه,
        place: newObjectDate6_2[i].موقعیت,
        duble: newObjectDate6_2[i].دوتخته,
        single: newObjectDate6_2[i].تکنفره,
        baby: newObjectDate6_2[i].کودک,
        baby2: newObjectDate6_2[i].کودک2,
      })
      this.pricesItemsDubai4 = pricesItemsDubai4;
    }
    // __________________________________________
    let newObjectDate7 = [
      {
        نام: 'HOLIDAY INN SELIGERSKAYA',
        درجه: 4,
        دوتخته: '22.700.000',
        تکنفره: '27.990.000',
        کودک: '18.000.000',
        کودک2: '12.000.000',
        کمیسیون: 800000
      },
      {
        نام: 'HOLIDAY INN SOKOLNIKI',
        درجه: 4,
        دوتخته: '24.850.000',
        تکنفره: '32.400.000',
        کودک: '20.200.000',
        کودک2: '12.000.000',
        کمیسیون: 1200000
      },
      {
        نام: 'GOLDEN RING HOTEL MOSCOW',
        درجه: 5,
        دوتخته: '34.000.000',
        تکنفره: '50.800.000',
        کودک: '23.500.000',
        کودک2: 12000000,
        کمیسیون: 1500000
      },
    ]
    var pricesItemsMoskow = []
    for (let i = 0; i < newObjectDate7.length; i++) {
      pricesItemsMoskow.push({
        id: i + 1,
        name: newObjectDate7[i].نام,
        star: newObjectDate7[i].درجه,
        coosion: newObjectDate7[i].کمیسیون,
        duble: newObjectDate7[i].دوتخته,
        single: newObjectDate7[i].تکنفره,
        baby: newObjectDate7[i].کودک,
        baby2: newObjectDate7[i].کودک2,
      })
      this.pricesItemsMoskow = pricesItemsMoskow;
    }
    // __________________________________________
    let newObjectDate7_2 = [
      {
        نام: 'Vega Hotel',
        درجه: 4,
        دوتخته: 48900000,
        تکنفره: 68000000,
        کودک: 43700000,
        کودک2: 28500000,
        کمیسیون: 1600000
      },
      {
        نام: 'Holiday inn Vorota',
        درجه: 4,
        دوتخته: 48900000,
        تکنفره: 68000000,
        کودک: 43700000,
        کودک2: 28500000,
        کمیسیون: 1600000
      },
    ]
    var pricesItemsMoskow2 = []
    for (let i = 0; i < newObjectDate7_2.length; i++) {
      pricesItemsMoskow2.push({
        id: i + 1,
        name: newObjectDate7_2[i].نام,
        star: newObjectDate7_2[i].درجه,
        coosion: newObjectDate7_2[i].کمیسیون,
        duble: newObjectDate7_2[i].دوتخته,
        single: newObjectDate7_2[i].تکنفره,
        baby: newObjectDate7_2[i].کودک,
        baby2: newObjectDate7_2[i].کودک2,
      })
      this.pricesItemsMoskow2 = pricesItemsMoskow2;
    }
    // __________________________________________
  },
  mounted() { },
  beforeDestroy() { }
})


