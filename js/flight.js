
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
  el: '#main-page',
  vuetify: new Vuetify(),
  data: {
    // header
    windowWidth:0,
    showMenuSmall: false,
    activePage: 0,
    fromDate: '',
    toDate: '',
    selectedDate: '',
    cityes: [
      'تهران',
      'اهواز',
      'کیش'
    ],
    hotels: ['اسپیناس پلاس', 'استقلال', 'مکس'],
    allFlights: [
      {
        originCity: '',
        destinationInternal: '',
        date: ''
      },
      {
        originCity: '',
        destinationInternal: '',
        date: ''
      },
      {
        originCity: '',
        destinationInternal: '',
        date: ''
      },
    ],
    flightCityes: [
      {
        originCity: '',
        destinationInternal: '',
        date: ''
      }
    ],
    originCity: '',
    destinationInternal: '',
    allPeaples: '1 مسافر ',
    Passenger: {
      peaple: 1,
      child: 0,
      baby: 0
    },
    allSections: [
      {
        icon: 'mdi-airplane',
        title: 'پرواز',
        active: true,
      },
      {
        icon: 'mdi-sofa-single',
        title: 'هتل',
        active: false,
      },
      {
        icon: 'mdi-account-group',
        title: 'تور',
        active: false,
      },
      {
        icon: 'mdi-hospital-building',
        title: 'آهوان',
        active: false,
      },
      {
        icon: 'mdi-bus',
        title: 'اتوبوس',
        active: false,
      },
      {
        icon: 'mdi-train-variant',
        title: 'قطار',
        active: false,
      },
      {
        icon: 'mdi-checkbook',
        title: 'بیمه',
        active: false,
      },
    ],
    selectedSection: {
      icon: 'mdi-airplane',
      title: 'پرواز',
      active: true,
    },
    external: false,
    byReturn: 1,
    // login
    loginDialog: false,
    loginStep: 1,
    resendSeconds: 0,
    loginSecondsInterval: '',
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
    isLogin: false,
    companeyWorkItems: ['آژانس مسافرتی', 'علمی و دانشگاهی', 'بانکی', 'صنعتی', 'تولیدی', 'سایر'],
    emptyRules: [
      v => !!v || 'پر کردن این فیلد اجباریست.'
    ],
    emailRules: [
      v => /.+@.+\..+/.test(v) || 'ایمیل نادرست میباشد.',
    ],
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
    // filter
    filter:{
      priceItems:[
        {
          label:'صد تا سیصد هزار تومان',
          value: 1
        },
        {
          label:'سیصد تا پانصد هزار تومان',
          value: 2
        },
        {
          label:'پانصد تا هشتصد هزار تومان',
          value: 3
        },
        {
          label:'هشتصد تا یک میلیون تومان',
          value: 4
        },
        {
          label:'بیش از یک میلیون تومان',
          value: 5
        },
      ],
      price:[],
      timeItems:[
        {
          label:' صبح (4 تا 11)',
          value: 1
        },
        {
          label:' ظهر (11 تا 14)',
          value: 2
        },
        {
          label:' عصر (14 تا 19)',
          value: 3
        },
        {
          label:'شب (19 تا 24)',
          value: 4
        },
        {
          label:'نیمه شب (24 تا 4)',
          value: 5
        },
      ],
      time:[],
      classItems:[
        {
          label:'اکونومی',
          value: 1
        },
        {
          label:'بیزینس',
          value: 2
        },
      ],
      class:[],
      airlineItems:[],
      airline:[],
      typeItems:[
        {
          label:'چارتری',
          value: 1
        },
        {
          label:'سیستمی',
          value: 2
        },
      ],
      type:[],
      showTypeItems:[
        {
          label:'نمایش پروازهای موجود',
          value: 1
        },
        {
          label:'عدم نمایش پرواز تکراری',
          value: 2
        },
      ],
      showType:[],
    },
    tickets:[
      {
        originTime:'15:20',
        destinationTime:'18:35',
      },
      {
        originTime:'15:20',
        destinationTime:'18:35',
      },
      {
        originTime:'15:20',
        destinationTime:'18:35',
      },
    ],
    ticketDetailsModal:true,
    activeTab: 0,
    panelDetails:0,
    ticketDetailsTabs: [
      'جزییات پرواز', 'قوانین استرداد', 'بار مجاز',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ticketInfo:[],
    cancellConditions:[],
    sortTab:0,
    // loading
    isLoading: false,
    showAlert: false,
    alertType: 'error',
    alertText: ''
  },
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false
        }, 5000);
      }
    },
    external() {
      this.cityes = this.external ?
        ['رم', 'لندن', 'تورنتو'] :
        ['تهران', 'اهواز', 'کیش'];
      this.originCity = ''
      this.destinationInternal = '';
      this.byReturn = 1
    },
    byReturn() {
      this.flightCityes = [
        {
          originCity: '',
          destinationInternal: '',
          date: ''
        }
      ]
    },
    loginStep() {
      if (this.loginStep == 3 || (this.loginStep == 2 && this.UserType == 2)) {
        setTimeout(() => {
          if (this.loginType == 'login') {
            this.isLogin = true
          }
          this.loginDialog = false
        }, 2000);
      }
      this.$refs.loginForm.resetValidation()
    },
    loginDialog(){
      this.resetLoginForm()
    },
    UserType(){
      this.$refs.loginForm.resetValidation()
    },
    loginType(){
      this.$refs.loginForm.resetValidation()
    }
  },
  methods: {
    getWidth(){
      this.windowWidth = window.innerWidth
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
    loginOrRegisterValidate() {
      var self = this
      if (self.loginStep == 1) {
        if (self.$refs.loginForm.validate()) {
          if ((self.loginForm.phone == '09054791374' && self.loginType == 'login' ) || self.loginType == 'register') {
            if (self.UserType == 1) {
              self.resendSeconds = 60
              self.showAlert = true
              self.alertText = 'کد تایید برای شما ارسال شد.'
              self.alertType = 'success'
              self.loginStep = 2
            }
            self.loginStep = 2
          }
          else {

            self.loginType = 'register'
            self.showAlert = true
            self.alertText = 'برای ورود به سایت باید ابتدا ثبت نام کنید.'
            self.alertType = 'error'
            self.loginForm.password = '' 
          }
          this.$refs.loginForm.resetValidation()
        } else {
          self.showAlert = true
          self.alertText = 'لطفا فیلدها را بدرستی تکمیل کنید.'
          self.alertType = 'error'
        }
      } else if (self.loginStep == 2) {
        if (self.loginForm.otp == '1111') {
          self.loginStep = 3
          self.isLogin = true
        } else {
          self.loginForm.otp == ''
          self.showAlert = true
          self.alertText = 'کد وارد شده صحیح نیست.'
          self.alertType = 'error'
        }
      }

    },
    georgian() {
      alert('hi')
    },
    changeRoomValue() {
      var rooms = this.Passenger
      var all = 0
      all = all + rooms.baby + rooms.child + rooms.peaple
      console.log(all);
      this.allPeaples = all + ' مسافر '
    },
    // header
    changeActiveSection(index) {
      this.allSections = this.allSections.map((x) => {
        return {
          icon: x.icon,
          title: x.title,
          active: false,
        };
      });
      this.originCity = ''
      this.destinationInternal = ''
      this.allSections[index].active = true;
      this.headerRooms = [{
        peaple: 1,
        child: 0,
        baby: 0
      }]
    },
    searchInHeaderBox() {
      this.hidePeaple()
      var selectedSection = this.selectedSection.title
      switch (selectedSection) {
        case '':

          break;

        default:
          break;
      }
      console.log(selectedSection);
    },
    exchangeCity(index) {
      if (isNaN(index)) {
        let variable = this.originCity
        this.originCity = this.destinationInternal
        this.destinationInternal = variable
      } else {
        let variable = this.allFlights[index].originCity
        this.allFlights[index].originCity = this.allFlights[index].destinationInternal
        this.allFlights[index].destinationInternal = variable
      }
    },
    addFlight(index, type) {
      if (this.flightCityes.length < 3 && type == 'add') {
        this.flightCityes.push({
          originCity: '',
          destinationInternal: '',
          date: ''
        })
        this.allFlights.push({
          originCity: '',
          destinationInternal: '',
          date: ''
        })
      }
      else {
        this.flightCityes.splice(index, 1)
        this.allFlights.splice(index, 1)
      }
    },
    // send knewes
    validateKnewes() {
      this.$refs.sendKnewsForm.validate()
    },
    // ticket
    showTicketPanel(event,index){
      console.log(this.passengerindex);
    },
    // rooms
    hidePeaple() {
      $('#showPeaple').hide()
    },
    changeHeaderInput(item) {
      switch (item) {
        case 'originCity':
          this.$refs.destinationInternal.$refs.menu.isActive = true
          break;
        case 'destinationInternal':
          $('#dtp1').click()
          break;

        default:
          break;
      }
    }
  },
  created() {
    this.getWidth()
    window.addEventListener('resize', this.getWidth());
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
    this.loginSecondsInterval = setInterval(() => {
      this.resendSeconds > 0 && this.resendSeconds--
    }, 1000);
  },
  mounted() {
    // jquery codes
    // create datepicker
    var self = this
    setTimeout(() => {
      const dtp1 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp1'), {
        targetTextSelector: '[data-name="dtp1-text"]',
        targetDateSelector: '[data-name="dtp1-date"]',
        rangeSelector: false,
        disableBeforeDate: new Date(),
        // trigger: 'focus'
      });

      const dtp2 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp2'), {
        targetTextSelector: '[data-name="dtp2-text"]',
        targetDateSelector: '[data-name="dtp2-date"]',
        rangeSelector: false,
        disableBeforeDate: new Date(),
        // trigger: 'focus'
      });

      const dtp3 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp3'), {
        targetTextSelector: '[data-name="dtp3-text"]',
        targetDateSelector: '[data-name="dtp3-date"]',
        rangeSelector: false,
        disableBeforeDate: new Date(),
        // trigger: 'focus'
      });

      const dtp4 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp4'), {
        targetTextSelector: '[data-name="dtp4-text"]',
        targetDateSelector: '[data-name="dtp4-date"]',
        rangeSelector: false,
        disableBeforeDate: new Date(),
        // trigger: 'focus'
      });

      // functions
      function defultShowDatePicker(value) {
        if (value == 1 || value == 3) {
          dtp1.updateOptions({
            rangeSelector: false,
            rangeSelectorMonthsToShow: [0, 0],
          })
        } else {
          dtp1.updateOptions({
            rangeSelector: true,
            selectedDateToShow: new Date(),
            rangeSelectorMonthsToShow: [0, 1],
          })
          // dtp1.setDatePersian(1400, 06, 31)
        }
        self.hidePeaple()
      }
      // define it for geoargian or solar button
      var firstAppend = 0
      $('#dtp1').on('click', function () {
        if (firstAppend == 0) {
          var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
          $(".popover").append(r);
          firstAppend = 1
        }
        if (firstAppend == 2) {
          var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
          $(".popover").append(r);
          firstAppend = 1
        }
      });

      var firstAppend2 = 0
      $('#dtp2').on('click', function () {
        if (firstAppend2 == 0) {
          var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
          $(".popover").append(r);
          firstAppend2 = 1
        }
        if (firstAppend2 == 2) {
          var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
          $(".popover").append(r);
          firstAppend2 = 1
        }
      });

      var firstAppend3 = 0
      $('#dtp3').on('click', function () {
        if (firstAppend3 == 0) {
          var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
          $(".popover").append(r);
          firstAppend3 = 1
        }
        if (firstAppend3 == 2) {
          var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
          $(".popover").append(r);
          firstAppend3 = 1
        }
      });

      var firstAppend4 = 0
      $('#dtp4').on('click', function () {
        if (firstAppend4 == 0) {
          var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
          $(".popover").append(r);
          firstAppend4 = 1
        }
        if (firstAppend4 == 2) {
          var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
          $(".popover").append(r);
          firstAppend4 = 1
        }
      });

      $(document).on('click', '#solar', function () {
        dtp1.updateOptions({
          isGregorian: false
        });
        dtp2.updateOptions({
          isGregorian: false
        });
        dtp3.updateOptions({
          isGregorian: false
        });
        dtp4.updateOptions({
          isGregorian: false
        });
        $(".popover").removeClass('solarDate')
        $(".popover").addClass('persianDate')
        firstAppend = 0
        firstAppend2 = 0
        firstAppend3 = 0
        firstAppend4 = 0
      });

      $(document).on('click', '#georgian', function () {
        dtp1.updateOptions({
          isGregorian: true
        });
        dtp2.updateOptions({
          isGregorian: true
        });
        dtp3.updateOptions({
          isGregorian: true
        });
        dtp4.updateOptions({
          isGregorian: true
        });
        $(".popover").removeClass('persianDate')
        $(".popover").addClass('solarDate')
        firstAppend = 2
        firstAppend2 = 2
        firstAppend3 = 2
        firstAppend4 = 2
      });

      // for focuse after changes
      $(document).on('click', '.v-list-item', function () {
        // $('#dtp1').popover('show')
      });

      $(document).on('show.bs.popover', '#dtp1', function () {
        self.hidePeaple()
      })

      $(document).on('click', '.sections', function () {
        self.byReturn = 1
        self.selectedSection = self.allSections.find(element => element.active == true);
        self.changeRoomValue()
        self.selectedDate = ''
        dtp1.clearDate()
        if (self.selectedSection.title == 'هتل' || self.selectedSection.title == 'تور' || self.selectedSection.title == 'آهوان') {
          defultShowDatePicker(2)
        } else {
          defultShowDatePicker(1)
        }

      })

      $(document).on('click', '.changeExternal', function () {
        self.hidePeaple()
      })

      $(document).on('hide.bs.popover', '#dtp1', function () {
        firstAppend = 0
        $('#dtp1').attr('value', dtp1.getText())
        var selectedDate = $('#dtp1').attr('value')
        selectedDate = selectedDate.split(' - ')
        let options = { day: 'numeric', month: 'long' };
        self.fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
        self.toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
        self.selectedDate = selectedDate[0] ? (self.fromDate + (self.toDate && ' الی ' + self.toDate)) : ''
        if (self.selectedDate.length) {
          $('#showPeaple').toggle()
        }
      })

      $(document).on('hide.bs.popover', '#dtp2', function () {
        firstAppend2 = 0
        $('#dtp2').attr('value', dtp2.getText())
        var selectedDate = $('#dtp2').attr('value')
        if (selectedDate) {
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          let fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          self.allFlights[0].date = fromDate
        } else {
          self.allFlights[0].date = ''
        }
      })

      $(document).on('hide.bs.popover', '#dtp3', function () {
        firstAppend3 = 0
        $('#dtp3').attr('value', dtp3.getText())
        var selectedDate = $('#dtp3').attr('value')
        if (selectedDate) {
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          let fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          console.log(selectedDate);
          self.allFlights[1].date = fromDate
        } else {
          self.allFlights[1].date = ''
        }

      })

      $(document).on('hide.bs.popover', '#dtp4', function () {
        firstAppend4 = 0
        $('#dtp4').attr('value', dtp4.getText())
        var selectedDate = $('#dtp4').attr('value')
        if (selectedDate) {
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          let fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          console.log(selectedDate);
          self.allFlights[2].date = fromDate
        } else {
          self.allFlights[2].date = ''
        }

      })

      $(document).on('click', '.hideEventPeaple', function () {
        $('#showPeaple').toggle()
      })

      $("#destinationInternal").click(function () {
        dtp1.updateOption('selectedDateToShow', new Date());
      })

      $(document).on('click', '.byReturn', function () {
        self.hidePeaple()
        self.selectedDate = ''
        dtp1.clearDate();
        defultShowDatePicker(self.byReturn)
      })

    }, 3000);

  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
})


