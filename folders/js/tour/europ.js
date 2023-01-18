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
    flightHeaders: [
      { text: '', sortable: false, value: 'image', align: 'center', },
      { text: '', align: 'center', sortable: false, value: 'from' },
      { text: '', sortable: false, value: 'time1', align: 'center', },
      { text: '', sortable: false, value: 'time2', align: 'center', },
      { text: '', sortable: false, value: 'text1', align: 'center', },
      { text: '', sortable: false, value: 'text2', align: 'center', },

    ],
    flights: [
      {
        from: 'پرواز از استانبول به ژنو',
        time1: '14:10',
        time2: '00:15',
        text1: 'ISTGVA',
        text2: 'TK1913'
      },
      {
        from: 'پرواز از تهران به استانبول',
        time1: '10:25',
        time2: '08:35',
        text1: 'IKAIST',
        text2: 'TK879'
      },
      {
        from: 'پرواز از زوریخ به استانبول',
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
  },
  watch: {},
  methods: {
    loginOrRegisterValidate() {
      var self = this
      
      if (self.loginStep == 1) {
        if (self.$refs.loginForm.validate()) {
          self.isLoadingAxios =true
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
                } else{
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
  },
  mounted() { },
  beforeDestroy() { }
})


