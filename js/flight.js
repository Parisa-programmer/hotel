
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
    windowWidth: 0,
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
      v => !(/^[\u0600-\u06FF\s]+$/.test(v)) || 'فرمت صحیح نیست',
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
      v => !(/^[\u0600-\u06FF\s]+$/.test(v)) || 'فرمت صحیح نیست',
    ],
    nationalNumberRules: [
      v => !!v || 'پر کردن این فیلد اجباریست.',
      v => (v.length == 10) || 'کد ملی صحیح نیست.',
    ],
    // filter
    filter: {
      priceItems: [
        {
          label: 'صد تا سیصد هزار تومان',
          value: 1
        },
        {
          label: 'سیصد تا پانصد هزار تومان',
          value: 2
        },
        {
          label: 'پانصد تا هشتصد هزار تومان',
          value: 3
        },
        {
          label: 'هشتصد تا یک میلیون تومان',
          value: 4
        },
        {
          label: 'بیش از یک میلیون تومان',
          value: 5
        },
      ],
      price: [0, 5000000],
      timeItems: [
        'صبح',
        'ظهر',
        'عصر',
        'شب',
        'نیمه شب'
        // {
        //   label:' صبح (4 تا 11)',
        //   value: 1
        // },
        // {
        //   label:' ظهر (11 تا 14)',
        //   value: 2
        // },
        // {
        //   label:' عصر (14 تا 19)',
        //   value: 3
        // },
        // {
        //   label:'شب (19 تا 24)',
        //   value: 4
        // },
        // {
        //   label:'نیمه شب (24 تا 4)',
        //   value: 5
        // },
      ],
      time: [0, 4],
      classItems: [
        {
          label: 'اکونومی',
          value: 1
        },
        {
          label: 'بیزینس',
          value: 2
        },
      ],
      class: [],
      airlineItems: [
        {
          label: 'زاگرس',
          value: 1
        },
        {
          label: 'قشم ایر',
          value: 2
        },
        {
          label: 'ماهان',
          value: 3
        },
        {
          label: 'البرز',
          value: 4
        },
      ],
      airline: [],
      typeItems: [
        {
          label: 'چارتری',
          value: 1
        },
        {
          label: 'سیستمی',
          value: 2
        },
      ],
      type: [],
      showTypeItems: [
        {
          label: 'نمایش پروازهای موجود',
          value: 1
        },
        {
          label: 'عدم نمایش پرواز تکراری',
          value: 2
        },
      ],
      showType: [],
    },
    tickets: [
      {
        originTime: '15:20',
        destinationTime: '18:35',
      },
      {
        originTime: '15:20',
        destinationTime: '18:35',
      },
      {
        originTime: '15:20',
        destinationTime: '18:35',
      },
    ],
    fromPrice: 0,
    toPrice: '5,000,000',
    ticketDetailsModal: false,
    activeTab: 0,
    panelDetails: 0,
    ticketDetailsTabs: [
      'جزییات پرواز', 'قوانین استرداد', 'بار مجاز',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ticketInfo: [],
    cancellConditions: [],
    sortTab: 0,
    slider: [5, 45],
    icons: [
      'mdi-sun-wireless-outline',
      'mdi-white-balance-sunny',
      'mdi-theme-light-dark',
      'mdi-weather-night',
      'mdi-weather-night-partly-cloudy'
    ],
    slideGroup: 10,
    dates: [],
    nextPage: true,
    nationalities: ['ایرانی', 'غیر ایرانی'],
    genders: ['زن', 'مرد'],
    dateDays: [],
    dateMonths: [],
    dateYears: [],
    dateYearsPass: [],
    users: [
      {
        name: '',
        family: '',
        nationality: 'ایرانی',
        nationalityCode: '',
        gender: '',
        phone: '',
        email: '',
        birthday: '0/0/0',
        passportNumber: '',
        expirePass: '0/0/0',
      }
    ],
    contactInfo:[{
      phone:'',
      email:'',
    }],
    contactInfoHeaders: [
      { text: 'تلفن', value: 'phone' ,width:'40%' },
      { text: 'ایمیل', value: 'email' ,width:'40%'},
      { text: 'عملیات', value: 'actions',width:'20%',align:'center'}
    ],
    persianTebelHeaders: [
      { text: 'نام', value: 'name' },
      { text: 'نام خانوادگی', value: 'family' },
      { text: 'ملیت', value: 'nationality' },
      { text: 'کدملی', value: 'nationalityCode' },
      { text: 'جنسیت', value: 'gender' },
      { text: 'تاریخ تولد', value: 'birthday' },
      { text: 'عملیات', value: 'actions' },
    ],
    persianUsers:[],
    otherUsers:[],
    otherTebelHeaders: [
      { text: 'نام', value: 'name' },
      { text: 'نام خانوادگی', value: 'family' },
      { text: 'ملیت', value: 'nationality' },
      { text: 'جنسیت', value: 'gender' },
      { text: 'تاریخ تولد', value: 'birthday' },
      { text: 'شماره پاسپورت', value: 'passportNumber' },
      { text: 'انقضا پاسپورت', value: 'expirePass' },
      { text: 'عملیات', value: 'actions' },
    ],
    bookStep: 1,
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
    loginDialog() {
      this.resetLoginForm()
    },
    UserType() {
      this.$refs.loginForm.resetValidation()
    },
    loginType() {
      this.$refs.loginForm.resetValidation()
    },
    fromPrice() {
      let self = this
      let value1 = self.fromPrice.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      self.fromPrice = value2
      self.filter.price = [Number(value1), Number(self.toPrice.toString().replace(/,/g, ""))]
    },
    toPrice() {
      let self = this
      let value1 = self.toPrice.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      self.toPrice = value2
      self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    }
  },
  computed: {
    monthName() {
      var date = new Date().toLocaleDateString('fa-IR-u-nu-latn')
      date = date.split('/')
      let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
      var month = months[date[1] - 1]
      var textDateFormat = date[2] + ' ' + month + ' ' + date[0] + ' ساعت ' + new Date().getHours() + ':' + new Date().getMinutes()
      return month
    },

  },
  methods: {
    getWidth() {
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
          if ((self.loginForm.phone == '09054791374' && self.loginType == 'login') || self.loginType == 'register') {
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
      this.users = []
      for (let i = 0; i < all; i++) {
        this.users.push(
          {
            name: '',
            family: '',
            nationality: 'ایرانی',
            nationalityCode: '',
            gender: '',
            phone: '',
            email: '',
            birthday: '0/0/0',
            passportNumber: '',
            expirePass: '0/0/0',
          }
        )
      }
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
    showTicketPanel(event, index) {
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
    },
    setDates() {
      this.dateDays = []
      this.dateMonths = []
      this.dateYears = []
      this.dateYearsPass = []
      var nowYear = new Date().toLocaleDateString('fa-IR-u-nu-latn').slice(0, 4)
      for (let i = 0; i < 100; i++) {
        this.dateYears.push(nowYear - i)
        if (i > 0 && i < 32) {
          this.dateDays.push(i)
          if (i < 20) {
            this.dateYearsPass.push(Number(nowYear) + i)
            if (i < 13) {
              this.dateMonths.push(i)
            }
          }
        }
      }
    },
    // filter
    changeRangePrice() {
      this.fromPrice = this.filter.price[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      this.toPrice = this.filter.price[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    filterTime(val) {
      return this.icons[val]
    },
    dayNumber(number) {
      var timestamp = (Math.floor(number / 1000) * 1000) - (86400000 * 10)
      let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
      this.dates = []
      for (let i = 0; i < 20; i++) {
        let date = new Date(timestamp).toLocaleDateString('fa-IR-u-nu-latn')
        date = date.split('/')
        this.dates.push(
          {
            day: date[2],
            month: months[date[1] - 1],
            timestamp: timestamp,
            weekDay: (new Date(timestamp).getDay()) + 1
          }
        )
        timestamp = timestamp + 86400000

      }
      this.slideGroup = 10
      // return date
    },
    changeDate(timeStamp, index) {
      this.slideGroup = index
      if (new Date().getTime() - 86400000 < timeStamp) {
        console.log('hii')
      }

    },
    chooseTicket(type) {
      this.ticketDetailsModal = false;
      // this.nextPage = false ;
      // this.nextPage = type == 'change' ? false : true;
    },
    changeBookStep(step) {
      this.bookStep = step;
      var users = this.users;
      // persianTebelHeaders--otherUsers-otherTebelHeaders
      this.persianUsers = []
      for (let i = 0; i < users.length; i++) {
        if (users[i].nationality == 'ایرانی') {
          this.persianUsers.push(
            {
              name: users[i].name,
              family: users[i].family,
              nationality: users[i].nationality,
              nationalityCode: users[i].nationalityCode,
              gender: users[i].gender,
              birthday: users[i].birthday,
            }
          )
        } else{
          this.otherUsers.push(
            {
              name: users[i].name,
              family: users[i].family,
              nationality: users[i].nationality,
              gender: users[i].gender,
              passportNumber: users[i].passportNumber,
              expirePass: users[i].expirePass,
              birthday: users[i].birthday,
            }
          )
        }
      }
        console.log(step);
    },
    changebirthDay(type, number,index) {
      var dateArray = this.users[index].birthday.split('/')
      switch (type) {
        case 'day':
          dateArray[2] = number
          break;
        case 'month':
          dateArray[1] = number
          break;
        case 'year':
          dateArray[0] = number
          break;
        default:
          break;
      }
      this.users[index].birthday = dateArray[0] + '/' + dateArray[1] + '/' +dateArray[2] 
    },
    changepassExpire(type, number,index) {
      var dateArray = this.users[index].expirePass.split('/')
      switch (type) {
        case 'day':
          dateArray[2] = number
          break;
        case 'month':
          dateArray[1] = number
          break;
        case 'year':
          dateArray[0] = number
          break;
        default:
          break;
      }
      this.users[index].expirePass = dateArray[0] + '/' + dateArray[1] + '/' +dateArray[2] 
    }
  },
  created() {
    this.dayNumber(Math.floor(new Date().getTime() / 1000) * 1000 )
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
      self.setDates();
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
        console.log(selectedDate);
        self.dayNumber(new Date(selectedDate).getTime())
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


