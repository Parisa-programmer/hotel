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
  el: '#imageSlider',
  vuetify: new Vuetify(),
  data: {
    windowWidth:0,
    // header
    showMenuSmall: false,
    activePage:3,
    selectedDate:'',
    // image slider
    items: [
      {
        image: '../hotel/image/hotel1.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel2.jpg',
        text: 'ارمنستان',
      },
      {
        image: '../hotel/image/hotel3.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel4.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel5.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel6.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel7.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel1.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel2.jpg',
        text: 'ارمنستان',
      },
      {
        image: '../hotel/image/hotel3.jpeg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel4.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel5.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel6.jpg',
        text: 'هتل اسپیناس پالاس',
      },
      {
        image: '../hotel/image/hotel7.jpg',
        text: 'هتل اسپیناس پالاس',
      },
    ],
    dialogImage: false,
    slideGroup: 0,
    carousel: 0,
    cityName: 'هتل آهوان-چابکسر',
    cityes: [
      'هتل آهوان-چابکسر',
      'هتل ایمان-مشهد',
    ],
    headerRooms:[
      {
        peaple:1,
        child:0,
        baby:0
      }
    ],
    room:1,
    allPeaples:'1 مسافر + 1 اتاق',
    showPeaple:false,
    // about hotel
    showAllAboutHotel:false,
    // rooms
    cancell_facilities: [
      {
        number: 10,
        description: 'از زمان رزرو هتل تا 12 ظهر قبل 3 روز قبل از ورود'
      },
      {
        number: 30,
        description: 'از 12 ظهر 3 روز قبل از ورود تا 12 ظهر یک روز قبل از ورود'
      },
      {
        number: 50,
        description: 'از 12 ظهر یک روز قبل از ورود تا سه ساعت قبل از ورود'
      },
      {
        number: 100,
        description: 'از 3 ساعت قبل از ورود یا عدم حضور در هتل'
      },
    ],
    rooms: [
      {
        name:'گل نشان',
        room:'تک',
        allPerson: 2,
        during: 0,
        person: 0,
        baby: 0,
        maxPerson: 1,
        maxBaby: 2,
        maxRoom: 2,
        room_facilities:[],
        cancellation_conditions:[],
        price:'10,500,000'
      },
      {
        name:'ویلایی',
        room:'دو',
        allPerson: 6,
        during: 0,
        person: 0,
        baby: 0,
        maxPerson: 1,
        maxBaby: 2,
        maxRoom: 2,
        room_facilities:[],
        cancellation_conditions:[],
        price:'16,950,000'
      },
    ],
    isLoading:true,
    isLoadingAxios:false,
    roomTab: null,
    nextPage:false,
    useWallet:false,
    reserver: {
      family: '',
      name: '',
      phone: '',
      mail: ''
    },
    genders: ['آقا', 'خانم'],
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
    acceptRulles:false,
    valid:false,
    saveInDatabase:true,
    test:'',
    selectedRooms:[],
    fromDate:'',
    toDate:'',
    alertText:'',
    alertType:'success',
    showAlert:false,
    // possibilities
    possibilityItems:[
      'پارکینگ',
      'استخر',
      'رستوران',
      'کتابخانه',
      'پارکینگ',
      'استخر',
      'رستوران',
      'کتابخانه',
      'پارکینگ',
      'استخر',
      'رستوران',
      'کتابخانه',
    ],
    // comments
    comments: [
      {
        name: 'میلاد محمدپور',
        date: '15 بهمن 1400 ساعت 12:20',
        text: 'من با خانواده پارسال به این هتل سفر کردیم همه چی عالی بود.',
        like: 0,
        dislike: 0,
        showReply: false,
        replyes: [
          {
            name: 'سعید غلامی',
            date: '15 بهمن 1400 ساعت 14:26',
            text: 'برخورد پرسنل چطور بود؟',
          },
          {
            name: 'مبینا حسینی',
            date: '19 اسفند 1400 ساعت 19:12',
            text: 'من هم خیلی راضی بودم واقعا ممنون از هتل آهوان',
          }
        ],
        replyMood: false,
        newComment: {
          name: 'پریسا قاسمی',
          date: '16 شهریور 1401 ساعت 12:37',
          text: '',
        },
      },
      {
        name: 'میلاد محمدپور',
        date: '15 بهمن 1400 ساعت 12:20',
        text: 'عالی بود.',
        like: 2,
        dislike: 24,
        showReply: false,
        replyes: [
          {
            name: 'پریسا قاسمی',
            date: '16 شهریور 1401 ساعت 12:37',
            text: 'برخورد پرسنل چطور بود؟',
          },

        ],
        replyMood: false,
        newComment: {
          name: 'پریسا قاسمی',
          date: '16 شهریور 1401 ساعت 12:37',
          text: '',
        },
      }
    ],
    newComment: {
      name: 'پریسا قاسمی',
      date: '16 شهریور 1401 ساعت 12:37',
      text: '',
    },
    newCommentMood:false,
  },
  watch:{
    showAlert(){
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false
        }, 2000);
      }
    },
    async isLoadingAxios(){
      if (this.isLoadingAxios) {
        await setTimeout(() => {
          this.isLoadingAxios = false
        }, 1000);
        $('#showPeaple').hide()
        window.location.href = '#rooms'
        
      }
    }
  },
  methods: {
    sliderSwaper() {
      if (this.dialogImage != true) {
        this.slideGroup = this.slideGroup + 1
        // if (this.windowWidth > 1400) {
        //   this.slideGroup = this.slideGroup + 3.5
        // }
        // else if (this.windowWidth <= 1400 && this.windowWidth >= 960) {
        //   this.slideGroup = this.slideGroup + 2.1
        // }
        // else if (this.windowWidth < 960 && this.windowWidth >= 775) {
        //   this.slideGroup = this.slideGroup + 1.1
        // }
        // else if (this.windowWidth < 775) {
        //   this.slideGroup = this.slideGroup + 1.3
        // }
        if (this.slideGroup >= this.items.length) {
          this.slideGroup = 0
        }
      }
    },
    georgian(){
      alert('hi')
    },
    clear() {
      clearInterval(this.interval)
    },
    start() {
      this.interval = setInterval(this.sliderSwaper, 2000)
    },
    showdate(date) {
      switch (date) {
        case 'firstDate':
          this.firstDate.show();
          break;
        // case 'secondDate':
        //   this.secondDate.show();
          break;
        default:
          break;
      }
      
    },
    changeRoomValue(){
      var rooms = this.headerRooms
      var all = 0
      for (let i = 0; i < rooms.length; i++) {
        all = all + rooms[i].baby + rooms[i].child + rooms[i].peaple
      }
      this.allPeaples = all + ' مسافر + ' + this.headerRooms.length + ' اتاق'
    },
    // rooms
    showRoomPanel(panel,index){
      var self = this
      switch (panel) {
        case 'room_facilities':
          if (self.rooms[index].room_facilities.length == 0) {
            self.rooms[index].cancellation_conditions = []
          }
          break;
        case 'cancellation_conditions':
          if (self.rooms[index].cancellation_conditions.length == 0){
            self.rooms[index].room_facilities = []
          }          
          break;
        default:
          break;
      }
    },
    searchRoom(){
      this.isLoadingAxios = true
    },
    reserveRoom(room,index){
      this.selectedRooms[index] = room
      if (this.roomTab < this.headerRooms.length-1) {
        this.roomTab++
      } else{
        this.nextPage= !this.nextPage
      }
    },
    validateForm(){
      if (this.$refs.reserv.validate()) {
        // the go for pay money
      }
      else{
        this.alertText='لطفا فیلد های اجباری را تکمیل کنید.'
        this.alertType='error'
        this.showAlert = true
      }
    },
    // coments
    replyToComment(index){
      var date = new Date().toLocaleDateString('fa-IR-u-nu-latn')
      date = date.split('/')
      let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
      var month  = months[date[1] -1]
      var textDateFormat = date[2] + ' ' + month + ' ' + date[0] + ' ساعت ' + new Date().getHours() + ':' + new Date().getMinutes()
      var replyText = this.comments[index].newComment ;       
      this.comments[index].replyes.push({
        name: replyText.name,
        date: textDateFormat,
        text: replyText.text
      });
      this.comments[index].replyMood = false
      this.comments[index].showReply = true
      this.comments[index].newComment = {
        name: 'پریسا قاسمی',
        date: '',
        text: ''
      }
    },
    addNewComment(){
      var date = new Date().toLocaleDateString('fa-IR-u-nu-latn')
      date = date.split('/')
      let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
      var month  = months[date[1] -1]
      var textDateFormat = date[2] + ' ' + month + ' ' + date[0] + ' ساعت ' + new Date().getHours() + ':' + new Date().getMinutes()
      this.comments.push(
        {
          name: 'سعیده عسگری',
          date: textDateFormat,
          text: this.newComment.text,
          like: 0,
          dislike: 0,
          showReply: false,
          replyes: [],
          replyMood: false,
          newComment: {
            name: 'پریسا قاسمی',
            date: '',
            text: '',
          },
          
        },
      )
      this.newCommentMood = false
    },
    changeDate(){
      var selectedDate =  $('#dtp1').attr('value')
        if (selectedDate) {
          selectedDate = selectedDate.split(' - ')
          let options = { day: 'numeric', month: 'long' };
          this.fromDate = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
          this.toDate = selectedDate[1] ? new Date(selectedDate[1]).toLocaleDateString('fa-IR', options) : '';
          this.selectedDate = selectedDate[0] ? (this.fromDate + (this.toDate && ' الی ' + this.toDate)) : '';
        }
        if (this.selectedDate.length) {
          $('#showPeaple').show()
        }
    }
  },
  created() {
    this.interval = setInterval(this.sliderSwaper, 2000)
    this.windowWidth = window.innerWidth
    setTimeout(() => {
      this.isLoading = false
    }, 1000);
  },
  mounted(){
    // jquery codes
    // create datepicker
    setTimeout(() => {
      const dtp1 = new mds.MdsPersianDateTimePicker(document.getElementById('dtp1'), {
        targetTextSelector: '[data-name="dtp1-text"]',
        targetDateSelector: '[data-name="dtp1-date"]',
        rangeSelector: true,
        rangeSelectorMonthsToShow: [0, 1],
        disableBeforeDate:new Date(),
        // trigger: 'focus'
      });

      // define it for geoargian or solar button
      var firstAppend = 0 
      $('#dtp1').on('click',function(){
        if (firstAppend == 0) {
          var r= $('<v-btn class="georgian cursorPointer" id="georgian" >میلادی</v-btn>');
          $(".popover").append(r);
          firstAppend = 1
        }
        if (firstAppend == 2) {
          var r= $('<v-btn class="georgian cursorPointer" id="solar" >solar</v-btn>');
          $(".popover").append(r);
          firstAppend = 1
        }
      });
    
      $(document).on('click', '#solar', function() {
        dtp1.updateOptions({
          isGregorian : false
        });
        $(".popover").removeClass('solarDate')
          $(".popover").addClass('persianDate')
          firstAppend = 0
          $('#dtp1').show()
        });
    
      $(document).on('click', '#georgian', function() {
        dtp1.updateOptions({
          isGregorian : true
        });
        $(".popover").removeClass('persianDate')
        $(".popover").addClass('solarDate')
        firstAppend = 2
        $('#dtp1').show()
      });
    
      // for focuse after changes
      $(document).on('click', '.v-list-item', function() {
        $('#dtp1').popover('show')
      });
      var self = this
      $(document).on('hide.bs.popover', '#dtp1', function () {
        firstAppend = 0
        $('#dtp1').attr('value',dtp1.getText())
        self.changeDate()
        dtp1.updateOption('selectedDateToShow', new Date());
      })

      $(document).on('show.bs.popover', '#dtp1', function () {
        $('#showPeaple').hide()
      })

      $(document).on('click', '.hideEventPeaple', function() {
        $('#showPeaple').toggle()
      })

      $('#searchRoom').on('click',function(){
        // var popover = dtp1.getDateRange()

      });
    }, 2000);
    
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
})


