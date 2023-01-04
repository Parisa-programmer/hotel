
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
    fromDatePersian: '',
    toDatePersian: '',
    selectedDate: '',
    showSection: true,
    originSearchInput: '',
    originSearchInput2: '',
    originSearchInput3: '',
    originSearchInput4: '',
    destinationSearchInput: '',
    destinationSearchInput2: '',
    destinationSearchInput3: '',
    destinationSearchInput4: '',

    persianCityes: [
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
    ],
    persianCityes2: [
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
    ],
    AllpersianCityes: [
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
    otherCityesOrigin: [],
    otherCityesOrigin2: [],
    otherCityesOrigin3: [],
    otherCityesOrigin4: [],
    otherCityesOrigin5: [],
    otherCityesOrigin6: [],
    otherCityesOrigin7: [],
    otherCityesOrigin8: [],
    // otherCityes2: [],
    AllotherCityes: [],
    mostUseCityes: [],
    hotels: ['هتل آهوان چابکسر', 'شکوه ایمان مشهد'],
    allFlights: [
      {
        originCity: '',
        destinationInternal: '',
        date: '',
        timestamp: 0
      },
      {
        originCity: '',
        destinationInternal: '',
        date: '',
        timestamp: 0
      },
      {
        originCity: '',
        destinationInternal: '',
        date: '',
        timestamp: 0
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
    emptyRules2: [
      v => !!v || ''
    ],
    //slider
    slideGroup: 0,
    items: [
      {
        image: './folders/image/hotel1.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel2.jpg',
        text: 'ارمنستان',
      },
      {
        image: './folders/image/hotel3.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel4.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel5.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel6.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel7.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel1.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel2.jpg',
        text: 'ارمنستان',
      },
      {
        image: './folders/image/hotel3.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel4.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel5.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel6.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: './folders/image/hotel7.jpg',
        text: 'هتل اسپیناس پالاس',
      },
    ],
    tourItems: [
      {
        image: './folders/image/tourSlider/01.jpg',
        city: 'استانبول',
        text: 'هتل اسپیناس پالاس',
        price: '6,800,000'
      },
      {
        image: './folders/image/tourSlider/02.jpg',
        city: 'آنتالیا',
        text: 'هتل اسپیناس پالاس',
        price: '12,400,000'
      },
      {
        image: './folders/image/tourSlider/03.jpg',
        city: 'دبی',
        text: 'هتل اسپیناس پالاس',
        price: '16,000,000'
      },
      {
        image: './folders/image/tourSlider/04.jpg',
        city: 'عمان',
        text: 'هتل اسپیناس پالاس',
        price: '13,890,000'
      },
      {
        image: './folders/image/tourSlider/05.jpg',
        city: 'کوش آداسی',
        text: 'هتل اسپیناس پالاس',
        price: '8,200,000'
      },
    ],
    newItems: [
      {
        image: './folders/image/newesSlider/01.jpeg',
        text: 'اقساطی سفر کن!',
        price: '6,800,000'
      },
      {
        image: './folders/image/newesSlider/02.jpeg',
        text: 'هزینه زندگی در لندن',
        price: '12,400,000'
      },
      {
        image: './folders/image/newesSlider/03.jpeg',
        text: 'ممنوعیت سفر تهرانی ها',
        price: '16,000,000'
      },
      {
        image: './folders/image/newesSlider/04.jpeg',
        text: 'معافیت از عوارض خروج از کشور',
        price: '13,890,000'
      },
      {
        image: './folders/image/newesSlider/05.jpeg',
        text: 'اطلاعیه سفرهای نوروزی',
        price: '8,200,000'
      },
    ],
    slides: [
      './folders/image/sliderMain1.jpg',
      // './folders/image/sliderMain2.jpg',
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
    // emptyRules:[
    //   v => !!v || 'پر کردن فیلد تلفن اجباریست.',
    // ],
    // loading
    isLoading: true,
    showAlert: false,
    alertType: 'error',
    alertText: '',
    isLoadingAxios: false,
    startTypeAnimation: false,
    searchLink: '',
    timestampDate: 0
  },
  watch: {
    test(term) {

    },
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
        $('.showPopup').css("color", "#424242");
        $('#showPeaple').show()
      } else {
        $('.showPopup').css("color", "red");
      }
    },
    originCity() {
      // this.otherCityes = this.AllotherCityes
    },
    originSearchInput() {
      var self = this
      if (!!self.originSearchInput && (self.selectedSection.title != 'هتل' || self.selectedSection.title != 'آهوان')) {
        if (self.external) {
          axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput)
            .then(function (response) {
              // handle success
              var otherCityes = response.data.map((x) => {
                return {
                  text: x.city,
                  IATA: x.IATA,
                  Id: x.Id,
                  country_code: x.country_code,
                  city_code: x.city_code,
                  airport: x.airport,
                  is_city: x.is_city,
                  unic_air: x.unic_air,
                  airport_fa: x.airport_fa,
                  city_fa: x.city_fa,
                  country_fa: x.country_fa,
                  latitude: x.latitude,
                  longitude: x.longitude,
                  CountryName: x.CountryName,
                  CountryNameFa: x.CountryNameFa,
                  OrderId: x.OrderId,
                };
              });
              if (otherCityes.length) {
                self.otherCityesOrigin = otherCityes
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })

        } else {
          self.persianCityes = self.AllpersianCityes
        }
        $('.v-select-list').removeClass("sugestCity")
      } else {
        if (self.selectedSection.title != 'هتل' || self.selectedSection.title != 'آهوان') {
          $('.v-select-list').addClass("sugestCity")
          self.persianCityes = [
            { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
            { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
            { label: "this.otherCityesShiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
            { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
            { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
            { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
            { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
          ]
          self.otherCityesOrigin = self.AllotherCityes
        }
        else {
          $('.v-select-list').removeClass("sugestCity")
        }
      }
    },
    originSearchInput2() {
      var self = this
      if (!!self.originSearchInput2) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput2)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.IATA,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              self.otherCityesOrigin3 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        $('.v-select-list').removeClass("sugestCity")
      } else if (self.selectedSection.title != 'هتل' || self.selectedSection.title != 'آهوان') {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin3 = self.AllotherCityes
      }
    },
    originSearchInput3() {
      var self = this
      if (!!self.originSearchInput3) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput3)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.IATA,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin5 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })

      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin3 = self.AllotherCityes
      }
    },
    originSearchInput4() {
      var self = this
      if (!!self.originSearchInput4) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput4)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.IATA,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin7 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })

      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin7 = self.AllotherCityes
      }
    },
    destinationSearchInput() {
      var self = this
      if (!!self.destinationSearchInput && (self.selectedSection.title != 'هتل' && self.selectedSection.title != 'آهوان')) {
        $('.v-select-list').removeClass("sugestCity")
        if (self.external) {
          axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput)
            .then(function (response) {
              // handle success
              var otherCityes = response.data.map((x) => {
                return {
                  text: x.city,
                  IATA: x.IATA,
                  Id: x.Id,
                  country_code: x.country_code,
                  city_code: x.city_code,
                  airport: x.airport,
                  is_city: x.is_city,
                  unic_air: x.unic_air,
                  airport_fa: x.airport_fa,
                  city_fa: x.city_fa,
                  country_fa: x.country_fa,
                  latitude: x.latitude,
                  longitude: x.longitude,
                  CountryName: x.CountryName,
                  CountryNameFa: x.CountryNameFa,
                  OrderId: x.OrderId,
                };
              });
              if (otherCityes.length) {
                self.otherCityesOrigin2 = otherCityes
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        } else {
          this.persianCityes2 = this.AllpersianCityes
        }
      } else if (self.selectedSection.title != 'هتل' && self.selectedSection.title != 'آهوان') {
        $('.v-select-list').addClass("sugestCity")
        self.persianCityes2 = [
          { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
          { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
          { label: "this.otherCityesShiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
          { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
          { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
          { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
          { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
        ]
        self.otherCityesOrigin2 = self.AllotherCityes

      }
    },
    destinationSearchInput2() {
      var self = this
      if (!!self.destinationSearchInput2) {
        $('.v-select-list').removeClass("sugestCity")
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput2)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.IATA,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin4 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin4 = self.AllotherCityes
      }
    },
    destinationSearchInput3() {
      var self = this
      if (!!self.destinationSearchInput3) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput3)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.IATA,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin6 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin6 = self.AllotherCityes
      }
    },
    destinationSearchInput4() {
      var self = this
      if (!!self.destinationSearchInput4) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput4)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.IATA,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin8 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } else {
        // $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin8 = self.AllotherCityes
      }
    },
  },
  methods: {
    addChangeTypeButtonDate() {
      this.hidePeaple()
    },
    getWidth() {
      this.windowWidth = window.innerWidth
      if (window.innerWidth < 600) {
        // this.allSections = [
        //   {
        //     icon: 'mdi-airplane',
        //     title: 'پرواز',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-sofa-single',
        //     title: 'هتل',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-account-group',
        //     title: 'تور',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-hospital-building',
        //     title: 'آهوان',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-bus',
        //     title: 'اتوبوس',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-train-variant',
        //     title: 'قطار',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-checkbook',
        //     title: 'بیمه',
        //     active: false,
        //   },
        // ]
      }
    },
    wrightAutocomplate(child) {
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
      console.log();
      // var self = this
      // if (self.loginStep == 1) {
      //   if (self.$refs.loginForm.validate()) {
      //     if ((self.loginForm.phone == '09054791374' && self.loginType == 'login') || self.loginType == 'register') {
      //       if (self.UserType == 1) {
      //         self.resendSeconds = 60
      //         self.showAlert = true
      //         self.alertText = 'کد تایید برای شما ارسال شد.'
      //         self.alertType = 'success'
      //         self.loginStep = 2
      //       }
      //       self.loginStep = 2
      //     }
      //     else {

      //       self.loginType = 'register'
      //       self.showAlert = true
      //       self.alertText = 'برای ورود به سایت باید ابتدا ثبت نام کنید.'
      //       self.alertType = 'error'
      //       self.loginForm.password = ''
      //     }
      //     this.$refs.loginForm.resetValidation()
      //   } else {
      //     self.showAlert = true
      //     self.alertText = 'لطفا فیلدها را بدرستی تکمیل کنید.'
      //     self.alertType = 'error'
      //   }
      // } else if (self.loginStep == 2) {
      //   if (self.loginForm.otp == '1111') {
      //     self.loginStep = 3
      //     self.isLogin = true
      //   } else {
      //     self.loginForm.otp == ''
      //     self.showAlert = true
      //     self.alertText = 'کد وارد شده صحیح نیست.'
      //     self.alertType = 'error'
      //   }
      // }

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
      this.changeRoomValue()
      this.hidePeaple()
    },
    searchInHeaderBox() {
      var self = this
      this.hidePeaple()
      if (!this.$refs.headerInputForm.validate()
        || !this.selectedDate.length
        || (self.byReturn == 3 && (!self.allFlights[0].date || self.flightCityes.length > 1 && !self.allFlights[1].date || self.flightCityes.length > 2 && !self.allFlights[2].date))
      ) {
        // validate is false_____________________________________________________________________
        if (!this.selectedDate.length) {
          $('.showPopup').css("color", "red");
        }
        if (self.byReturn == 3) {
          if (!self.allFlights[0].date) {
            $('.showPopup2').css("color", "red");
          }
          if (self.flightCityes.length > 1 && !self.allFlights[1].date) {
            $('.showPopup3').css("color", "red");
          }
          if (self.flightCityes.length > 2 && !self.allFlights[2].date) {
            $('.showPopup4').css("color", "red");
          }
        }
        self.alertText = 'فیلد های درخواستی را بدرستی تکمیل کنید.';
        self.alertType = 'error';
        self.showAlert = true;
      } else if (self.originCity == self.destinationInternal) {
        self.alertText = 'مبداء و مقصد نباید یکسان باشد.';
        self.alertType = 'error';
        self.showAlert = true;
      } else if (
        (self.byReturn == 3) &&
        (
          (self.allFlights[0].destinationInternal == self.allFlights[0].originCity)
          || (self.flightCityes.length > 1 && self.allFlights[1].destinationInternal == self.allFlights[1].originCity)
          || (self.flightCityes.length > 2 && self.allFlights[2].destinationInternal == self.allFlights[2].originCity)
        )
      ) {
        self.alertText = 'مبداء و مقصد نباید یکسان باشد.';
        self.alertType = 'error';
        self.showAlert = true;
        console.log(self.allFlights);
      } else if (
        (self.byReturn == 3) &&
        (
          (self.timestampDate < self.allFlights[0].timestamp)
          || (self.flightCityes.length > 1 && self.allFlights[0].timestamp < self.allFlights[1].timestamp)
          || (self.flightCityes.length > 2 && self.allFlights[1].timestamp < self.allFlights[2].timestamp)
        )
      ) {
        self.alertText = 'تاریخ های انتخابی صحیح نیست.';
        self.alertType = 'error';
        self.showAlert = true;
        console.log(self.allFlights);
      } else {
        self.isLoadingAxios = true
        // validate is true _____________________________________________________________________
        // get date 1 ___________________________________________________________________________
        var selectedDate = $('#dtp1').attr('value')
        selectedDate = selectedDate.split(' - ')
        let options = { day: 'numeric', month: 'long', year: 'numeric' };
        let variabel = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
        variabel = variabel.split(' ')
        let variabel2 = new Date(selectedDate[1]).toLocaleDateString('fa-IR', options);
        variabel2 = variabel2.split(' ')
        // get rooms and peaple number __________________________________________________________
        let rooms = this.headerRooms
        let childs = 0;
        let adl = 0
        let inf = 0
        for (let i = 0; i < rooms.length; i++) {
          childs = childs + rooms[i].child
          adl = adl + rooms[i].peaple
          inf = inf + rooms[i].baby
        }
        // get origin and destination ____________________________________________________________
        let originIATA = ''
        let destinationIATA = ''
        if (self.external) {
          // if is not multi flight_______________________________________________________________
          if (self.byReturn != 3) {
            originIATA = self.otherCityesOrigin.find(x => x.text == self.originCity)
            originIATA = originIATA.IATA
            destinationIATA = self.otherCityesOrigin2.find(x => x.text == self.destinationInternal)
            destinationIATA = destinationIATA.IATA
          }
        } else if (this.selectedSection.title != 'آهوان' && this.selectedSection.title != 'تور' && this.selectedSection.title != 'هتل') {
          originIATA = self.AllpersianCityes.find(x => x.text == self.originCity)
          originIATA = originIATA.label
          destinationIATA = self.AllpersianCityes.find(x => x.text == self.destinationInternal)
          destinationIATA = destinationIATA.label
        }
        switch (this.selectedSection.title) {
          case 'آهوان':
            self.searchLink = 'https://ahuan.ir/iranhotels?hotel=' +
              self.destinationInternal +
              '&checkin=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
              '&checkout=' + variabel2[0] + '+' + variabel2[1] + '+' + variabel2[2] +
              '&room=' + rooms.length +
              '&adl=' + adl +
              '&chd=' + childs +
              '&id=' + (self.destinationInternal == 'هتل آهوان چابکسر' ? '3' : '1005')
            window.location.href = self.searchLink
            break;
          case 'پرواز':
            self.searchLink = self.byReturn == 2 ?
              'https://ahuan.ir/flight?' +
              'path=' + (self.byReturn == 1 ? 'ow' : self.byReturn == 2 ? 'rt' : 'mp') +
              '&from=' + originIATA +
              '&to=' + destinationIATA +
              '&start=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
              '&end=' + variabel2[0] + '+' + variabel2[1] + '+' + variabel2[2] +
              '&adl=' + adl +
              '&chd=' + childs +
              '&inf=' + inf
              :
              'https://ahuan.ir/flight?' +
              'path=' + (self.byReturn == 1 ? 'ow' : self.byReturn == 2 ? 'rt' : 'mp') +
              '&from=' + originIATA +
              '&to=' + destinationIATA +
              '&start=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
              '&end=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
              '&adl=' + adl +
              '&chd=' + childs +
              '&inf=' + inf

            window.location.href = self.searchLink;
            break;
          default:
            break;
        }
        self.isLoadingAxios = false
      }
    },
    exchangeCity(index) {
      this.hidePeaple()
      if (isNaN(index)) {
        if (this.external) {
          var cityes = this.AllotherCityes
          var cityes2 = this.AllotherCityes
          var firstCity = this.destinationInternal
          if (destinationInternal) {
            cityes2.push(this.destinationInternal)
          }
          // origin
          if (this.originCity) {
            cityes.push(this.originCity)
          }
          this.otherCityesOrigin2 = cityes
          this.destinationInternal = this.originCity
          // distination
          this.otherCityesOrigin = cityes2
          this.originCity = firstCity
        } else {
          let variable = this.originCity
          this.originCity = this.destinationInternal
          this.destinationInternal = variable
        }
      } else {
        if (index == 0) {
          var cityes = this.AllotherCityes
          var cityes2 = this.AllotherCityes
          var firstCity = this.allFlights[0].destinationInternal
          if (firstCity) {
            cityes2.push(firstCity)
          }
          // origin
          if (this.allFlights[0].originCity) {
            cityes.push(this.allFlights[0].originCity)
          }
          this.otherCityesOrigin4 = cityes
          this.allFlights[0].destinationInternal = this.allFlights[0].originCity
          // distination
          this.otherCityesOrigin3 = cityes2
          this.allFlights[0].originCity = firstCity
        }
        if (index == 1) {
          var cityes = this.AllotherCityes
          var cityes2 = this.AllotherCityes
          var firstCity = this.allFlights[1].destinationInternal
          if (firstCity) {
            cityes2.push(firstCity)
          }
          // origin
          if (this.allFlights[1].originCity) {
            cityes.push(this.allFlights[1].originCity)
          }
          this.otherCityesOrigin6 = cityes
          this.allFlights[1].destinationInternal = this.allFlights[1].originCity
          // distination
          this.otherCityesOrigin5 = cityes2
          this.allFlights[1].originCity = firstCity
        }
        if (index == 2) {
          var cityes = this.AllotherCityes
          var cityes2 = this.AllotherCityes
          var firstCity = this.allFlights[2].destinationInternal
          if (firstCity) {
            cityes2.push(firstCity)
          }
          // origin
          if (this.allFlights[2].originCity) {
            cityes.push(this.allFlights[2].originCity)
          }
          this.otherCityesOrigin8 = cityes
          this.allFlights[2].destinationInternal = this.allFlights[2].originCity
          // distination
          this.otherCityesOrigin7 = cityes2
          this.allFlights[2].originCity = firstCity
        }
      }
    },
    addFlight(index, type) {
      if (this.flightCityes.length < 3 && type == 'add') {
        this.flightCityes.push({
          originCity: '',
          destinationInternal: '',
          date: '',
          timestamp: 0
        })
        this.allFlights.push({
          originCity: '',
          destinationInternal: '',
          date: '',
          timestamp: 0
        })
        this.$refs.headerInputForm.resetValidation()
        $('.showPopup , .showPopup2 , .showPopup3 , .showPopup4').css("color", '#424242')
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
      this.fromDate = new Date(selectedDate[0]).toLocaleDateString('en-US', options);
      this.toDate = new Date(selectedDate[1]).toLocaleDateString('en-US', options);
      this.fromDatePersian = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
      this.toDatePersian = new Date(selectedDate[1]).toLocaleDateString('fa-IR', options);
      if (this.roomTab < this.headerRooms.length - 1) {
        this.roomTab++
      } else {
        this.nextPage = !this.nextPage
      }
    },
    hidePeaple() {
      $('#showPeaple').hide()
    },
    async changeHeaderInput(item) {
      var self = this
      switch (item) {
        case 'originCity':
          if (self.external) {

          } else {
            await $('.destinationInternalParent').click()

          }
          if (self.originCity) {
            self.$refs.destinationInternal.$refs.menu.isActive = true;
          }

          break;
        case 'destinationInternal':
          if (self.destinationInternal) {
            $('.showPopup').click()
          }
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
      var showDatePicker1 = false
      var showDatePicker2 = false
      var showDatePicker3 = false
      var showDatePicker4 = false
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
        });

        const dtp3 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp3'), {
          targetTextSelector: '[data-name="dtp3-text"]',
          targetDateSelector: '[data-name="dtp3-date"]',
          disableBeforeDate: new Date(),
        });

        const dtp4 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp4'), {
          targetTextSelector: '[data-name="dtp4-text"]',
          targetDateSelector: '[data-name="dtp4-date"]',
          disableBeforeDate: new Date(),
        });

        // define it for geoargian or solar button
        var firstAppend = 0
        var firstAppend2 = 0
        var firstAppend3 = 0
        var firstAppend4 = 0

        $(document).on('hide.bs.popover', '#dtp1', function () {
          $('#dtp1').attr('value', dtp1.getText())
          var selectedDate = dtp1.getText()
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          self.fromDate = new Date(selectedDate[0]).toLocaleDateString('en-US', options);
          self.fromDatePersian = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          self.toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('en-US', options) : '';
          self.toDatePersian = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
          self.timestampDate = new Date(selectedDate[0]).getTime()
          if (dtp1.setting.isGregorian) {
            self.selectedDate = selectedDate[0] ? (self.fromDate + (self.toDate && ' to ' + self.toDate)) : '';
          } else {
            self.selectedDate = selectedDate[0] ? (self.fromDatePersian + (self.toDatePersian && ' الی ' + self.toDatePersian)) : '';
          }
          // showDatePicker1 = false
        })

        $(document).on('shown.bs.popover', '#dtp1', function () {
          // showDatePicker1 = true
        })

        $(document).on('hide.bs.popover', '#dtp2', function () {
          $('#dtp2').attr('value', dtp2.getText())
          var selectedDate = dtp2.getText()
          if (selectedDate) {
            $('.showPopup2').css("color", '#424242')
          }
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          let fromDate = new Date(selectedDate[0]).toLocaleDateString('en-US', options);
          let fromDatePersian = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          let toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('en-US', options) : '';
          let toDatePersian = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
          self.allFlights[0].timestamp = new Date(selectedDate[0]).getTime()
          if (dtp2.setting.isGregorian) {
            self.allFlights[0].date = selectedDate[0] ? (fromDate + (toDate && ' to ' + toDate)) : '';
          } else {
            self.allFlights[0].date = selectedDate[0] ? (fromDatePersian + (toDatePersian && ' الی ' + toDatePersian)) : '';
          }
        })

        $(document).on('hide.bs.popover', '#dtp3', function () {
          $('#dtp3').attr('value', dtp3.getText())
          var selectedDate = dtp3.getText()
          if (selectedDate) {
            $('.showPopup3').css("color", '#424242')
          }
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          let fromDate = new Date(selectedDate[0]).toLocaleDateString('en-US', options);
          let fromDatePersian = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          let toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('en-US', options) : '';
          let toDatePersian = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
          self.allFlights[1].timestamp = new Date(selectedDate[0]).getTime()
          if (dtp3.setting.isGregorian) {
            self.allFlights[1].date = selectedDate[0] ? (fromDate + (toDate && ' to ' + toDate)) : '';
          } else {
            self.allFlights[1].date = selectedDate[0] ? (fromDatePersian + (toDatePersian && ' الی ' + toDatePersian)) : '';
          }
        })

        $(document).on('hide.bs.popover', '#dtp4', function () {
          $('#dtp4').attr('value', dtp4.getText())
          var selectedDate = dtp4.getText()
          if (selectedDate) {
            $('.showPopup4').css("color", '#424242')
          }
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          let fromDate = new Date(selectedDate[0]).toLocaleDateString('en-US', options);
          let fromDatePersian = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          let toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('en-US', options) : '';
          let toDatePersian = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
          self.allFlights[2].timestamp = new Date(selectedDate[0]).getTime()
          if (dtp4.setting.isGregorian) {
            self.allFlights[2].date = selectedDate[0] ? (fromDate + (toDate && ' to ' + toDate)) : '';
          } else {
            self.allFlights[2].date = selectedDate[0] ? (fromDatePersian + (toDatePersian && ' الی ' + toDatePersian)) : '';
          }
        })

        $('.sections').click(function () {
          $('.v-select-list').removeClass("sugestCity")
          $('.showPopup , .showPopup2 , .showPopup3 , .showPopup4').css("color", '#424242')
          self.$refs.headerInputForm.resetValidation()
        })

        $('.showPopup').click(function () {
          $('#showPeaple').hide();
          defultShowDatePicker()
          setTimeout(() => {
            if (showDatePicker1) {
              dtp1.hide();
              showDatePicker1 = false
            } else {
              dtp1.show()
              showDatePicker1 = true
              if (firstAppend == 0) {
                var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
                $(".popover").append(r);
              }
              if (firstAppend == 2) {
                var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
                $(".popover").append(r);
              }
            }
          }, 500);
        })

        async function defultShowDatePicker() {
          var title = self.selectedSection.title
          if (title == 'هتل' || title == 'تور' || title == 'آهوان' || self.byReturn == 2) {
            dtp1.updateOptions({
              rangeSelector: true,
              rangeSelectorMonthsToShow: [0, 1],
              selectedDateToShow: new Date(),
            })
          } else if ((title == 'پرواز' || title == 'اتوبوس' || title == 'قطار') && (self.byReturn != 2)) {
            dtp1.updateOptions({
              rangeSelector: false,
              rangeSelectorMonthsToShow: [0, 0],
              selectedDateToShow: new Date(),
            })
          }

        }

        $('.showPopup2').click(function () {
          $('#showPeaple').hide();
          if (showDatePicker2) {
            dtp2.hide()
            showDatePicker2 = false
          } else {
            setTimeout(() => {
              dtp2.show()
              if (firstAppend2 == 0) {
                var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
                $(".popover").append(r);
              }
              if (firstAppend2 == 2) {
                var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
                $(".popover").append(r);
              }
              self.allFlights[0].date = ''
              showDatePicker2 = true
            }, 500);
          }

        })

        $('.showPopup3').click(function () {
          $('#showPeaple').hide();
          if (showDatePicker3) {
            dtp3.hide()
            showDatePicker3 = false
          } else {
            setTimeout(() => {
              dtp3.show()
              if (firstAppend3 == 0) {
                var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
                $(".popover").append(r);
              }
              if (firstAppend3 == 2) {
                var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
                $(".popover").append(r);
              }
              self.allFlights[1].date = ''
              showDatePicker3 = true
            }, 500);

          }

        })

        $('.showPopup4').click(function () {
          $('#showPeaple').hide();
          if (showDatePicker4) {
            dtp4.hide()
            showDatePicker4 = false
          } else {
            setTimeout(() => {
              dtp4.show()
              if (firstAppend4 == 0) {
                var r = $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
                $(".popover").append(r);
              }
              if (firstAppend4 == 2) {
                var r = $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
                $(".popover").append(r);
              }
              self.allFlights[2].date = ''
              showDatePicker4 = true
            }, 500);
          }

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
          showDatePicker1 = false
          showDatePicker2 = false
          showDatePicker3 = false
          showDatePicker4 = false
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
          showDatePicker1 = false
          showDatePicker2 = false
          showDatePicker3 = false
          showDatePicker4 = false
        });

        $('.hideEventPeaple').click(function () {
          $('#showPeaple').toggle()
        })



        $(document).on('click', '.originCityParent', function () {
          if (self.external) {
            let index = self.AllotherCityes.findIndex(x => x.text == self.originCity)
            if (!self.originCity || index != (-1)) {
              $('.v-select-list').addClass("sugestCity")
              self.otherCityesOrigin = self.AllotherCityes
            } else {
              $('.v-select-list').removeClass("sugestCity")
            }
          } else if (self.selectedSection.title != 'هتل' || self.selectedSection.title != 'آهوان') {
            let variabel = [
              { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
              { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
              { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
              { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
              { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
              { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
              { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
            ]
            if (self.originCity) {
              let index = variabel.findIndex(x => x.text == self.originCity)
              if (index == (-1)) {
                self.persianCityes = self.AllpersianCityes
                $('.v-select-list').removeClass("sugestCity")
              } else {
                $('.v-select-list').addClass("sugestCity")
                self.persianCityes = variabel
              }
            } else {
              $('.v-select-list').addClass("sugestCity")
              self.persianCityes = variabel
            }
          }
        })

        $(document).on('click', '.originCityParent2', function () {
          let variabel = self.allFlights[0].originCity
          let index = self.AllotherCityes.findIndex(x => x.text == variabel)
          if (!self.allFlights[0].originCity || index != (-1)) {
            $('.v-select-list').addClass("sugestCity")
            self.otherCityesOrigin3 = self.AllotherCityes
          } else {
            $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(document).on('click', '.originCityParent3', function () {

          let variabel = self.allFlights[1].originCity
          let index = self.AllotherCityes.findIndex(x => x.text == variabel)
          if (!self.allFlights[1].originCity || index != (-1)) {
            $('.v-select-list').addClass("sugestCity")
            self.otherCityesOrigin5 = self.AllotherCityes
          } else {
            $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(document).on('click', '.originCityParent4', function () {

          let variabel = self.allFlights[2].originCity
          let index = self.AllotherCityes.findIndex(x => x.text == variabel)
          if (!self.allFlights[2].originCity || index != (-1)) {
            $('.v-select-list').addClass("sugestCity")
            self.otherCityesOrigin7 = self.AllotherCityes
          } else {
            $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(document).on('click', '.destinationInternalParent', function () {
          if (self.external) {
            let index = self.AllotherCityes.findIndex(x => x.text == self.destinationInternal)
            if (!self.destinationInternal || index != (-1)) {
              $('.v-select-list').addClass("sugestCity")
              self.otherCityesOrigin2 = self.AllotherCityes
            } else {
              $('.v-select-list').removeClass("sugestCity")
            }
          } else if (self.selectedSection.title != 'هتل' && self.selectedSection.title != 'آهوان') {
            let variabel = [
              { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران" },
              { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد" },
              { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز" },
              { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز" },
              { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان" },
              { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش" },
              { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس" },
            ]
            if (self.destinationInternal) {
              let index = variabel.findIndex(x => x.text == self.destinationInternal)
              if (index == (-1)) {
                self.persianCityes2 = self.AllpersianCityes
                // $('.v-select-list').removeClass("sugestCity")
              } else {
                // $('.v-select-list').addClass("sugestCity")
                self.persianCityes2 = variabel
              }
            } else {
              $('.v-select-list').addClass("sugestCity")
              self.persianCityes2 = variabel
            }
          } else {
            $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(document).on('click', '.destinationInternalParent2', function () {
          let index = self.AllotherCityes.findIndex(x => x.text == self.allFlights[0].destinationInternal)
          if (!self.allFlights[0].destinationInternal || index != (-1)) {
            // $('.v-select-list').addClass("sugestCity")
            self.otherCityesOrigin4 = self.AllotherCityes
          } else {
            // $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(document).on('click', '.destinationInternalParent3', function () {

          let index = self.AllotherCityes.findIndex(x => x.text == self.allFlights[1].destinationInternal)
          if (!self.allFlights[1].destinationInternal || index != (-1)) {
            $('.v-select-list').addClass("sugestCity")
            self.otherCityesOrigin6 = self.AllotherCityes
          } else {
            $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(document).on('click', '.destinationInternalParent4', function () {
          let index = self.AllotherCityes.findIndex(x => x.text == self.allFlights[2].destinationInternal)
          if (!self.allFlights[2].destinationInternal || index != (-1)) {
            $('.v-select-list').addClass("sugestCity")
            self.otherCityesOrigin8 = self.AllotherCityes
          } else {
            $('.v-select-list').removeClass("sugestCity")
          }
        })

        $(".slick-tour").slick({
          slidesToShow: self.windowWidth > 1400 ? 4 : (self.windowWidth <= 1400 && self.windowWidth > 960) ? 3 : (self.windowWidth <= 960 && self.windowWidth > 774) ? 3 : (self.windowWidth <= 774 && self.windowWidth > 599) ? 2 : 1,
          slidesToScroll: 1,
          rtl: true,
          autoplay: true,
          autoplaySpeed: 2000,
        });

        $(".slick-title").slick({
          slidesToShow: self.windowWidth > 1400 ? 3 : (self.windowWidth <= 1400 && self.windowWidth > 960) ? 3 : (self.windowWidth <= 960 && self.windowWidth > 599) ? 2 : 1,
          slidesToScroll: 1,
          rtl: true,
          autoplay: true,
          autoplaySpeed: 2500,
        });
        self.startTypeAnimation = true
        var typed = new Typed('#typed', {
          stringsElement: '#typed-strings',
          typeSpeed: 200,
          backSpeed: 80,
          backDelay: 2000,
          startDelay: 2000,
          loop: true,
        });
      }, 3000);
    },
    getCityesExternal() {
      let self = this
      axios.get('https://ahuan.ir/api/IntAirport?airportCode=0')
        .then(function (response) {
          // handle success
          let otherCityes = response.data.map((x) => {
            return {
              text: x.city,
              IATA: x.IATA
            };
          });
          self.mostUseCityes = otherCityes
          self.AllotherCityes = otherCityes
          self.otherCityesOrigin3 = otherCityes
          self.otherCityesOrigin4 = otherCityes
          self.otherCityesOrigin5 = otherCityes
          self.otherCityesOrigin6 = otherCityes
          self.otherCityesOrigin7 = otherCityes
          self.otherCityesOrigin8 = otherCityes
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  created() {
    // window.location = 'https://ahuan.ir/flight'
    // window.History.push({urlPath:'www.domain.com/page2.php'},"",'www.domain.com/page2.php')
    this.getCityesExternal();
    this.jquery()
    this.start()
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
  },
  beforeDestroy() {
    window.removeEventListener('resize')
    clearInterval(this.interval)
  }
})


