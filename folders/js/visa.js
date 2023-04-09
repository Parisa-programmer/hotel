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
        text: 'تور نوروز 1402',
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
                text: '5 شب و 6 روز',
                link: '/tour/Istanbul/تور-5-شب-ویژه-نوروز/',
                new: true,
              },
              {
                text: '6 شب و 7 روز',
                link: '/tour/Istanbul/تور-6-شب-ویژه-نوروز/',
                new: true,
              },
              {
                text: '7 شب و 8 روز',
                link: '/tour/Istanbul/تور-7-شب-ویژه-نوروز/',
                new: true,
              },
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
                text: '5 شب و 6 روز',
                link: '/tour/Dubai/تور-5-شب-ویژه-نوروز/',
                new: true,
              },
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
    questions: [
      {
        question: 'وقت سفارت چیست؟',
        answer: ''
      },    
      {
        question: 'انواع وقت سفارت؟',
        answer: ''
      },    
      {
        question: 'وقت سفارت فوری / عادی چیست؟',
        answer: ''
      },    
      {
        question: 'چگونه وقت سفارت بگیریم؟',
        answer: ''
      },   
      {
        question: 'مراحل اخذ وقت سفارت',
        answer: ''
      },      
    ],

    questions2: [
      {
        question: 'اخذ وقت سفارت انگلیس چقدر طول میکشد؟',
        answer: ''
      },  
      {
        question: 'هزینه وقت سفارت انگلیس چقدر است؟',
        answer: ''
      },  
      {
        question: 'از کدام شرکت باید وقت سفارت انگلیس را بگیریم؟',
        answer: ''
      },  
      {
        question: 'آدرس و تلفت وقت سفارت انگلیس در تهران؟',
        answer: ''
      },  
      {
        question: 'سفارت انگلیس در کدام شهر ایران کنسولگری دارد؟',
        answer: ''
      },    
      
    ],
    questions3: [
      {
        question: 'امتیازات در آهوان چگونه است؟',
        answer: ''
      }, 
      {
        question: 'باشگاه مسافران آهوان چه کاری انجام می‌دهد؟',
        answer: ''
      },    
       {
        question: 'چطور از وضعیت امتیازت خود در باشگاه آهوان مطلع شویم؟',
        answer: ''
      },   
      {
        question: 'هریک از کارت های نقره‌ای،برنز و طلایی چه ویژگی هایی دارند؟',
        answer: ''
      },    
           
    ],
    testStep:1,
    activeLinkMenuHeader:'',
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
      otp: '',
      windowWidth: 0,
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
    page_text: {
      pageStart: 'number',
      pageStop: 'number',
      itemsLength: 'number'
    },
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

    },
    slick(){
       var windowWidth = window.innerWidth
      $(".slick-logo").slick({
        slidesToShow: windowWidth > 1400 ? 5 : (windowWidth <= 1400 && windowWidth > 960) ? 4 : (windowWidth <= 960 && windowWidth > 775) ? 3 : (windowWidth <= 775 && windowWidth > 599) ? 2 : 1,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        autoplaySpeed: 2500,
      });
    }
  },
  created() {
    this.isLoading = false
    setTimeout(() => {
      
      this.slick()
    }, 200);
  },
  mounted() { },
  beforeDestroy() { }
})


