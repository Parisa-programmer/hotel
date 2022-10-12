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
    showMenuSmall: false,
    activePage: 3,
    fromDate: '',
    toDate: '',
    selectedDate: '',
    cityes: [
      'تهران',
      'اهواز',
      'کیش'
    ],
    hotels: ['اسپیناس پلاس', 'استقلال', 'مکس'],
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
        icon: 'mdi-alpha-a-box',
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
    //slider
    slides: [
      // './image/sliderMain6.jpg',
      './image/sliderMain5.jpg',
      // './image/sliderMain2.jpg',
      // './image/sliderMain3.jpg',
      // './image/sliderMain4.jpg',
      // './image/sliderMain1.jpg',
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
    getKnewesDialog:false,
    getKnewesType:'mail',
    mailForm:'',
    nameForm:'',
    familyForm:'',
    phoneForm:'',
    emailRules: [
      v => /.+@.+\..+/.test(v) || 'ایمیل نادرست میباشد.',
    ],
    phoneRules: [
      v => !!v || 'پر کردن فیلد تلفن اجباریست.',
      v => (v.length == 11 ) || 'شماره تلفن صحیح نیست.',
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
  },
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false
        }, 2000);
      }
    },
    external() {
      this.cityes = this.external ?
        ['رم', 'لندن', 'تورنتو'] :
        ['تهران', 'اهواز', 'کیش'];
      this.originCity = ''
      this.destinationInternal = '';
    },
  },
  methods: {
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
    exchangeCity() {
      var variable = this.originCity
      this.originCity = this.destinationInternal
      this.destinationInternal = variable
    },
    // send knewes
    validateKnewes(){
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
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
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

      // functions
      function defultShowDatePicker(value) {
        if (value == 1) {
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

      $(document).on('click', '#solar', function () {
        dtp1.updateOptions({
          isGregorian: false
        });
        $(".popover").removeClass('solarDate')
        $(".popover").addClass('persianDate')
        firstAppend = 0
        $('#dtp1').show()
      });

      $(document).on('click', '#georgian', function () {
        dtp1.updateOptions({
          isGregorian: true
        });
        $(".popover").removeClass('persianDate')
        $(".popover").addClass('solarDate')
        firstAppend = 2
        $('#dtp1').show()
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


