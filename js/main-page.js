
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
  el: '#main-page',
  vuetify: new Vuetify(),
  data: {
    // header
    windowWidth: 0,
    showMenuSmall: false,
    activePage: null,
    fromDate: '',
    toDate: '',
    selectedDate: '',
    showSection: true,
    persianCityes: [
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
    ],
    AllpersianCityes:[
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
      { label: "Tabriz, TBZ - تبریز", code: "Tabriz, TBZ", text: "تبریز" },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
      { label: "Qeshm, GSM - قشم", code: "Qeshm, GSM", text: "قشم" },
      { label: "Gorgan, GBT - گرگان", code: "Gorgan, GBT", text: "گرگان" },
      { label: "Ramsar, RZR - رامسر", code: "Ramsar, RZR", text: "رامسر" },
      { label: "Bushehr, BUZ - بوشهر", code: "Bushehr, BUZ", text: "بوشهر" },
      { label: "Lar, LRR - لار", code: "Lar, LRR", text: "لار" },
      { label: "Zanjan, JWN - زنجان", code: "Zanjan, JWN", text: "زنجان" },
      { label: "Bahregan, IAQ - بهرگان", code: "Bahregan, IAQ", text: "بهرگان" },
      { label: "Lamard, LFM - لامرد", code: "Lamard, LFM", text: "لامرد" },
      { label: "Sari, SRY - ساری", code: "Sari, SRY", text: "ساری" },
      { label: "Birjand, XBJ - بیرجند", code: "Birjand, XBJ", text: "بیرجند" },
      { label: "Lavan, LVP - لاوان", code: "Lavan, LVP", text: "لاوان" },
      { label: "Sabzevar, AFZ - سبزوار", code: "Sabzevar, AFZ", text: "سبزوار" },
      { label: "Abu Musa, AEU - جزیره ابوموسی", code: "Abu Musa, AEU", text: "جزیره ابوموسی" },
      { label: "Mahshahr, MRX - ماهشهر", code: "Mahshahr, MRX", text: "ماهشهر" },
      { label: "Sanandaj, SDG - سنندج", code: "Sanandaj, SDG", text: "سنندج" },
      { label: "Siri, SXI - جزیره سیری", code: "Siri, SXI", text: "جزیره سیری" },
      { label: "Nowshahr, NSH - نوشهر", code: "Nowshahr, NSH", text: "نوشهر" },
      { label: "Sirjan, SYJ - سیرجان", code: "Sirjan, SYJ", text: "سیرجان" },
      { label: "Jiroft, JYR - جیرفت", code: "Jiroft, JYR", text: "جیرفت" },
      { label: "Hamedan, HDM - همدان", code: "Hamedan, HDM", text: "همدان" },
      { label: "Shahrod, RUD - شاهرود", code: "Shahrod, RUD", text: "شاهرود" },
      { label: "Chabahar, ZBR - چابهار", code: "Chabahar, ZBR", text: "چابهار" },
      { label: "Yazd, AZD - یزد", code: "Yazd, AZD", text: "یزد" },
      { label: "Sharekord, CQD - شهر کرد", code: "Sharekord, CQD", text: "شهر کرد" },
      { label: "Khark, KHK - خارک", code: "Khark, KHK", text: "خارک" },
      { label: "Arak, AJK - اراک", code: "Arak, AJK", text: "اراک" },
      { label: "Abadan, ABD - آبادان", code: "Abadan, ABD", text: "آبادان" },
      { label: "Tabas, TCX - طبس", code: "Tabas, TCX", text: "طبس" },
      { label: "Khoramabad, KHD - خرم آباد", code: "Khoramabad, KHD", text: "خرم آباد" },
      { label: "Maragheh, ACP - مراغه", code: "Maragheh, ACP", text: "مراغه" },
      { label: "Ardabil, ADU - اردبیل", code: "Ardabil, ADU", text: "اردبیل" },
      { label: "Asaluyeh, PGU - عسلویه", code: "Asaluyeh, PGU", text: "عسلویه" },
      { label: "Khoy, KHY - خوی", code: "Khoy, KHY", text: "خوی" },
      { label: "Yasuj, YES - یاسوج", code: "Yasuj, YES", text: "یاسوج" },
      { label: "Urmia, OMH - ارومیه", code: "Urmia, OMH", text: "ارومیه" },
      { label: "Dezful, DEF - دزفول", code: "Dezful, DEF", text: "دزفول" },
      { label: "Jahrom, JAR - جهرم", code: "Jahrom, JAR", text: "جهرم" },
      { label: "Kashan, KSN - کاشان", code: "Kashan, KSN", text: "کاشان" },
      { label: "Kangan, KNR - کانگان", code: "Kangan, KNR", text: "کانگان" },
      { label: "Parsabad, PFQ - پارس آباد", code: "Parsabad, PFQ", text: "پارس آباد" },
      { label: "Iranshahr, IHR - ایران شهر", code: "Iranshahr, IHR", text: "ایران شهر" },
      { label: "Kerman, KER - کرمان", code: "Kerman, KER", text: "کرمان" },
      { label: "Rasht, RAS - رشت", code: "Rasht, RAS", text: "رشت" },
      { label: "Ilam, IIL - ایلام", code: "Ilam, IIL", text: "ایلام" },
      { label: "Kermanshah, KSH - کرمانشاه", code: "Kermanshah, KSH", text: "کرمانشاه" },
      { label: "Rafsanjan, RJN - رفسنجان", code: "Rafsanjan, RJN", text: "رفسنجان" },
      { label: "Bojnord, BJB - بجنورد", code: "Bojnord, BJB", text: "بجنورد" },
      { label: "Gachsaran, GCH - گچساران", code: "Gachsaran, GCH", text: "گچساران" },
      { label: "zabol, ACZ - زابل", code: "zabol, ACZ", text: "زابل" },
      { label: "Bam, BXR - بم", code: "Bam, BXR", text: "بم" },
      { label: "Bandar lengeh, BDH - بندر لنگه", text: "Bandar lengeh, BDH", text: "بندر لنگه" },
      { label: "Zahedan, ZAH - زاهدان", code: "Zahedan, ZAH", text: "زاهدان" }
    ],
    otherCityes: [],
    hotels: ['هتل آهوان،چابکسر', 'شکوه ایمان،مشهد'],
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
    headerRooms: [
      {
        peaple: 1,
        child: 0,
        baby: 0
      }
    ],
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
    //slider
    slideGroup: 0,
    items: [
      {
        image: './image/hotel1.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel2.jpg',
        text: 'ارمنستان',
      },
      {
        image: './image/hotel3.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel4.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel5.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel6.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel7.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel1.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel2.jpg',
        text: 'ارمنستان',
      },
      {
        image: './image/hotel3.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel4.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel5.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel6.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './image/hotel7.jpg',
        text: 'هتل اسپیناس پالاس',
      },
    ],
    slides: [
      './image/sliderMain6.jpg',
      './image/sliderMain5.jpg',
      './image/sliderMain2.jpg',
      './image/sliderMain3.jpg',
      './image/sliderMain4.jpg',
      './image/sliderMain1.jpg',
    ],
    // questions
    questions: [
      {
        question: 'چند روز قبل از پرواز، بلیط هواپیما را بخریم؟',
        answer: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.'
      },
      {
        question: 'در هر پرواز، میزان بار مجاز چقدر است؟',
        answer: 'میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.'
      },
      {
        question: 'نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟',
        answer: 'نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.'
      },
      {
        question: 'رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟',
        answer: 'خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.'
      },
      {
        question: 'آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟',
        answer: 'وقتی از آهوان یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.'
      },
      {
        question: 'آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟',
        answer: 'در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند.'
      },
    ],
    // Knewes
    getKnewesDialog: false,
    getKnewesType: 'mail',
    mailForm: '',
    nameForm: '',
    familyForm: '',
    phoneForm: '',
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
    // loading
    isLoading: true,
    showAlert: false,
    alertType: 'error',
    alertText: '',
    isLoadingAxios: false,
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
      this.originCity = ''
      this.destinationInternal = '';
      this.byReturn = 1
      this.hidePeaple()
      this.selectedDate = ''
    },
    byReturn() {
      this.flightCityes = [
        {
          originCity: '',
          destinationInternal: '',
          date: ''
        }
      ]
      this.selectedDate = ''
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
    selectedDate() {
      if (this.selectedDate.length) {
        $('#showPeaple').show()
      }
    }
  },
  methods: {
    test($event) {
      console.log($event);
    },

    addChangeTypeButtonDate() {
      this.hidePeaple()
    },
    getWidth() {
      this.windowWidth = window.innerWidth
      if (window.innerWidth < 600) {
        this.allSections = [
          {
            icon: 'mdi-airplane',
            title: 'پرواز',
            active: false,
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
        ]
      }
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
      var rooms = this.headerRooms
      var all = 0
      for (let i = 0; i < rooms.length; i++) {
        all = all + rooms[i].baby + rooms[i].child + rooms[i].peaple
      }
      this.allPeaples = all + ' مسافر '
      if (this.selectedSection.title == 'هتل' || this.selectedSection.title == 'تور' || this.selectedSection.title == 'آهوان') {
        this.allPeaples = this.allPeaples + '+ ' + this.headerRooms.length + ' اتاق'
      }
    },
    // header
    changeActiveSection(index) {
      this.showSection = this.allSections[index].active && this.showSection ? false : true
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
      this.selectedSection = this.allSections.find(element => element.active == true);
      this.byReturn = 1
      this.selectedDate = ''
      this.external = false
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
    // rooms
    showRoomPanel(panel, index) {
      var self = this
      switch (panel) {
        case 'room_facilities':
          if (self.rooms[index].room_facilities.length == 0) {
            self.rooms[index].cancellation_conditions = []
          }
          break;
        case 'cancellation_conditions':
          if (self.rooms[index].cancellation_conditions.length == 0) {
            self.rooms[index].room_facilities = []
          }
          break;
        default:
          break;
      }
    },
    reserveRoom(room, index) {
      this.selectedRooms[index] = room
      var selectedDate = $('#dtp1').attr('value')
      selectedDate = selectedDate.split(' - ')
      let options = { day: 'numeric', month: 'long' };
      this.fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
      this.toDate = new Date(selectedDate[1]).toLocaleDateString('fa-IR', options);
      if (this.roomTab < this.headerRooms.length - 1) {
        this.roomTab++
      } else {
        this.nextPage = !this.nextPage
      }
    },
    hidePeaple() {
      $('#showPeaple').hide()
    },
    changeHeaderInput(item) {
      switch (item) {
        case 'originCity':
          $('.v-select-list').addClass( "sugestCity" )
          this.$refs.destinationInternal.$refs.menu.isActive = true
          
          break;
        case 'destinationInternal':
          $('.showPopup').click()
          break;

        default:
          break;
      }
    },
    // slider
    clear() {
      clearInterval(this.interval)
    },
    start() {
      this.interval = setInterval(this.sliderSwaper, 2000)
    },
    sliderSwaper() {
      // this.slideGroup = this.slideGroup + 1
      /*if (this.windowWidth > 1400) {
        this.slideGroup = this.slideGroup + 3.5
      }
      else if (this.windowWidth <= 1400 && this.windowWidth >= 960) {
        this.slideGroup = this.slideGroup + 2.1
      }
      else if (this.windowWidth < 960 && this.windowWidth >= 775) {
        this.slideGroup = this.slideGroup + 1.1
      }
      else if (this.windowWidth < 775) {
        this.slideGroup = this.slideGroup + 1.3
      } */
      // if (this.slideGroup >= this.items.length) {
      //   this.slideGroup = 0
      // }
    },
    jquery() {
      // jquery codes
      // create datepicker
      var self = this
      setTimeout(() => {
        const dtp1 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp1'), {
          targetTextSelector: '[data-name="dtp1-text"]',
          targetDateSelector: '[data-name="dtp1-date"]',
          disableBeforeDate: new Date(),
        });

        const dtp2 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp2'), {
          targetTextSelector: '[data-name="dtp2-text"]',
          targetDateSelector: '[data-name="dtp2-date"]',
          disableBeforeDate: new Date(),
          // trigger: 'focus'
        });

        const dtp3 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp3'), {
          targetTextSelector: '[data-name="dtp3-text"]',
          targetDateSelector: '[data-name="dtp3-date"]',
          disableBeforeDate: new Date(),
          // trigger: 'focus'
        });

        const dtp4 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp4'), {
          targetTextSelector: '[data-name="dtp4-text"]',
          targetDateSelector: '[data-name="dtp4-date"]',
          disableBeforeDate: new Date(),
          // trigger: 'focus'
        });

        function defultShowDatePicker(value) {
          if (value == 1 || value == 3) {
            dtp1.updateOptions({
              rangeSelector: false,
              rangeSelectorMonthsToShow: [0, 0],
              selectedDateToShow: new Date(),
            })
          } else {
            dtp1.updateOptions({
              rangeSelector: true,
              rangeSelectorMonthsToShow: [0, 1],
              selectedDateToShow: new Date(),
            })
          }
        }

        // define it for geoargian or solar button
        var firstAppend = 0
        var firstAppend2 = 0
        var firstAppend3 = 0
        var firstAppend4 = 0

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

        $(document).on('hide.bs.popover', '#dtp2', function () {
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

        $(document).on('hide.bs.popover', '#dtp1', function () {
          $('#dtp1').attr('value', dtp1.getText())
          var selectedDate = dtp1.getText()
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          self.fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          self.toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
          self.selectedDate = selectedDate[0] ? (self.fromDate + (self.toDate && ' الی ' + self.toDate)) : '';
        })

        async function showPopupFunction() {
          var title = self.selectedSection.title
          switch (title) {
            case 'پرواز':
              if (self.byReturn == 1 || self.byReturn == 3) {
                defultShowDatePicker(1)
              } else {
                defultShowDatePicker(2)
              }
              break;
            case 'هتل':
              defultShowDatePicker(2)
              break;
            case 'تور':
              defultShowDatePicker(2)
              break;
            case 'آهوان':
              defultShowDatePicker(2)
              break;
            case 'اتوبوس':
              if (self.byReturn == 1) {
                defultShowDatePicker(1)
              } else {
                defultShowDatePicker(2)
              }
              break;
            case 'قطار':
              if (self.byReturn == 1) {
                defultShowDatePicker(1)
              } else {
                defultShowDatePicker(2)
              }
              break;

            default:
              break;
          }
        }

        $('.showPopup').click(function () {
          $('#showPeaple').hide();
          showPopupFunction();
          setTimeout(() => {
            dtp1.show()
            if (firstAppend == 0) {
              var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
              $(".popover").append(r);
            }
            if (firstAppend == 2) {
              var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
              $(".popover").append(r);
            }
            self.selectedDate = ''
          }, 500);
        })

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

        $('.hideEventPeaple').click(function () {
          $('#showPeaple').toggle()
        })

        $(document).on('click', '.originCityParent , .destinationInternalParent', function () {
          $('.v-select-list').addClass( "sugestCity" )
        })
        
        var cityValueLength = 0
        $('#originCity').keydown(function (e) {
          if (e.keyCode == 8 || e.which == 8) {
            if (cityValueLength > 0) {
              cityValueLength -- ;
            } 
          } else{
            $('.v-select-list').removeClass( "sugestCity" )
            self.persianCityes = self.AllpersianCityes
            cityValueLength ++
          }
        })

        $('#originCity').keyup(function (e) {
          if (cityValueLength == 0) {
            $('.v-select-list').addClass( "sugestCity" )
            self.persianCityes = [
              { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
              { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
              { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
              { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
              { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
              { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
              { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
            ]
          }
        })

        $(".slick-tour").slick({
          slidesToShow: this.windowWidth > 1400 ? 4 : (this.windowWidth <= 1400 && this.windowWidth > 960) ? 3 : (this.windowWidth <= 960 && this.windowWidth > 774) ? 2 : 1,
          slidesToScroll: 1,
          rtl: true,
          autoplay: true,
          autoplaySpeed: 2000,
        });

        $(".slick-title").slick({
          slidesToShow: this.windowWidth > 1400 ? 4 : (this.windowWidth <= 1400 && this.windowWidth > 960) ? 3 : (this.windowWidth <= 960 && this.windowWidth > 774) ? 2 : 1,
          slidesToScroll: 1,
          rtl: true,
          autoplay: true,
          autoplaySpeed: 2500,
        });
      }, 3000);
    },
    async getCityesExternal() {
      var self = this
      axios.get('https://ahuan.ir/api/IntAirport?airportCode=0')
        .then(function (response) {
          // handle success

          var otherCityes = response.data.map((x) => {
            return {
              text: x.city
            };
          });
          console.log(otherCityes);
          console.log(self.persianCityes);
          self.otherCityes = otherCityes
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  created() {
    this.getCityesExternal();
    this.jquery()
    this.start()
    this.getWidth()
    // setInterval(() => {
    //   console.log(this.$refs.suggestTour);
    // }, 1000);
    window.addEventListener('resize', this.getWidth());
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
    this.loginSecondsInterval = setInterval(() => {
      this.resendSeconds > 0 && this.resendSeconds--
    }, 1000);
  },
  mounted() {


  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
})


