axios.defaults.headers.common['Client-Token'] = 'dev-api.grschannel.com-$2y$10$Py.Y9/LKrLsukvxtTADfQuS'
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
    flightHeaders: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: '', align: 'center', sortable: false, value: 'from' },
      { text: '', sortable: false, value: 'time1', align: 'center', },
      { text: '', sortable: false, value: 'time2', align: 'center', },
      { text: '', sortable: false, value: 'text1', align: 'center', },
      { text: '', sortable: false, value: 'text2', align: 'center', },

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
    pricesItemsDubai: [],
    pricesItemsDubai2: [],
    pricesItemsDubai3: [],
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
    dubaiImages: [
      '/folders/image/tour/دبی-1.jpg',
      '/folders/image/tour/دبی-2.jpg',
      '/folders/image/tour/دبی-3.jpg',
      '/folders/image/tour/دبی-4.jpg',
      // '/folders/image/tour/دبی-5.jpg',
      // '/folders/image/tour/دبی-6.jpg',
      // '/folders/image/tour/دبی-7.jpg',
    ],
    urope001Images: [
      '/folders/image/tour/اروپا001-1.jpg',
      '/folders/image/tour/اروپا001-2.jpg',
      '/folders/image/tour/اروپا001-3.jpg',
      '/folders/image/tour/اروپا001-4.jpg',
      '/folders/image/tour/اروپا001-5.jpg',
      '/folders/image/tour/استانبول-1.jpg',
      '/folders/image/tour/استانبول-2.jpg',
      '/folders/image/tour/استانبول-3.jpg',
      '/folders/image/tour/استانبول-4.jpg',
      '/folders/image/tour/استانبول-5.jpg',
      '/folders/image/tour/استانبول-6.jpg',
    ],
    urope002Images: [
      '/folders/image/tour/اروپا002-1.jpg',
      '/folders/image/tour/اروپا002-2.jpg',
      '/folders/image/tour/اروپا002-3.jpg',
      '/folders/image/tour/اروپا002-4.jpg',
      '/folders/image/tour/اروپا002-5.jpg',
      '/folders/image/tour/استانبول-1.jpg',
      '/folders/image/tour/استانبول-2.jpg',
      '/folders/image/tour/استانبول-3.jpg',
      '/folders/image/tour/استانبول-4.jpg',
      '/folders/image/tour/استانبول-5.jpg',
      '/folders/image/tour/استانبول-6.jpg',
    ],
    urope004Images: [
      '/folders/image/tour/اروپا004-1.jpg',
      '/folders/image/tour/اروپا004-2.jpg',
      '/folders/image/tour/اروپا004-3.jpg',
      '/folders/image/tour/اروپا004-4.jpg',
      '/folders/image/tour/اروپا004-5.jpg',
      '/folders/image/tour/استانبول-1.jpg',
      '/folders/image/tour/استانبول-2.jpg',
      '/folders/image/tour/استانبول-3.jpg',
      '/folders/image/tour/استانبول-4.jpg',
      '/folders/image/tour/استانبول-5.jpg',
      '/folders/image/tour/استانبول-6.jpg',
    ],
    urope006Images: [
      '/folders/image/tour/اروپا006-1.jpg',
      '/folders/image/tour/اروپا006-2.jpg',
      '/folders/image/tour/اروپا006-3.jpg',
      '/folders/image/tour/اروپا006-4.jpg',
      '/folders/image/tour/اروپا006-5.jpg',
      '/folders/image/tour/اروپا006-6.jpg',
      '/folders/image/tour/استانبول-1.jpg',
      '/folders/image/tour/استانبول-2.jpg',
      '/folders/image/tour/استانبول-3.jpg',
      '/folders/image/tour/استانبول-4.jpg',
      '/folders/image/tour/استانبول-5.jpg',
      '/folders/image/tour/استانبول-6.jpg',
    ],
    showMore1: false,
    showMore2: false,
    showMore3: false,
    search: '',
  },
  watch: {},
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
    let newObjectDate4 = [
      {
        نام: 'Sun & sand (downtown)',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '12900000',
        تکنفره: '16600000',
        کودک: '8300000',
      },
      {
        نام: 'Furtune pearl',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '13100000',
        تکنفره: '16800000',
        کودک: '8400000',
      },
      {
        نام: 'phoencia',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '13200000',
        تکنفره: '17000000',
        کودک: '8500000',
      },
      {
        نام: 'Golden tulip',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '13500000',
        تکنفره: '17800000',
        کودک: '8600000',
      },
      {
        نام: 'avenue',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '14100000',
        تکنفره: '19000000',
        کودک: '8900000',
      },
      {
        نام: 'City season',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '14700000',
        تکنفره: '20100000',
        کودک: '9200000',
      },
      {
        نام: 'Signature albarsha',
        درجه: 4,
        موقعیت: 'البرشا',
        دوتخته: '15300000',
        تکنفره: '21400000',
        کودک: '9500000',
        کودک2: '',
      },
      {
        نام: 'Emirate grand',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '16600000',
        تکنفره: '23900000',
        کودک: '10200000',
      },
      {
        نام: 'Metropolitan',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '16700000',
        تکنفره: '24200000',
        کودک: '10200000',
      },
      {
        نام: 'Novotel deira',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '17700000',
        تکنفره: '26200000',
        کودک: '10700000',
      },
      {
        نام: 'Hyatt regency',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: '18300000',
        تکنفره: '27300000',
        کودک: '11000000',
      },
      {
        نام: 'Crown plaza jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '18500000',
        تکنفره: '27700000',
        کودک: '11100000',
        کودک2: '',
      },
      {
        نام: 'fairmont',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '20600000',
        تکنفره: '32000000',
        کودک: '12200000',
      },
      {
        نام: 'Sheraton grand',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '21700000',
        تکنفره: '34200000',
        کودک: '12800000',
      },
      {
        نام: 'Sheraton Dubai mall',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '24000000',
        تکنفره: '38700000',
        کودک: '13900000',
      },
      {
        نام: 'Movenpick jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '24800000',
        تکنفره: '40400000',
        کودک: '13500000',
      },
      {
        نام: 'Hilton al habtoor',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '25000000',
        تکنفره: '40200000',
        کودک: '14500000',
        کودک2: '',
      },
      {
        نام: 'Grand hyatt',
        درجه: 5,
        موقعیت: 'بردبی',
        دوتخته: '27800000',
        تکنفره: '46400000',
        کودک: '15800000',
      },
      {
        نام: 'Hilton jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '42400000',
        تکنفره: '75700000',
        کودک: '23200000',
      },
      {
        نام: 'conrad',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '36300000',
        تکنفره: '63400000',
        کودک: '20200000',
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
  },
  mounted() { },
  beforeDestroy() { }
})


