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
    isLoading:true,
    loginStep:1,
    showAlert:false,
    isLoadingAxios:false,
    loginDialog:false,
    isLogin:false,
    activePage:false,
    showMenuSmall:false,
    tab:0,
    priceHeaders: [
      {
        text: 'درجه هتل ها',
        align: 'center',
        sortable: false,
        value: 'name',
      },
      { text: '5 ستاره',sortable: false, value: 'calories',align: 'center', },
      
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
      { text: '',sortable: false, value: 'image',align: 'center', },
      { text: '',align: 'center',sortable: false,value: 'from'},
      { text: '',sortable: false, value: 'time1',align: 'center', },
      { text: '',sortable: false, value: 'time2',align: 'center', },
      { text: '',sortable: false, value: 'text1',align: 'center', },
      { text: '',sortable: false, value: 'text2',align: 'center', },
      
    ],
    flights: [
      {
        from: 'پرواز از استانبول به ژنو',
        time1 : '14:10',
        time2 : '00:15',
        text1 :'ISTGVA',
        text2:'TK1913'
      },
      {
        from: 'پرواز از تهران به استانبول',
        time1 : '10:25',
        time2 : '08:35',
        text1 :'IKAIST',
        text2:'TK879'
      },
      {
        from: 'پرواز از زوریخ به استانبول',
        time1 : '18:50',
        time2 : '15:00',
        text1 :'ZRHIST',
        text2:'TK1914'
      },
      {
        from: 'پرواز از استانبول به تهران',
        time1 : '23:55',
        time2 : '19:20',
        text1 :'ISTIKA',
        text2:'TK874'
      },
    ],
  },
  watch: {},
  methods: {},
  created() {
    setTimeout(() => {
      this.isLoading = false
      

    }, 200);
  },
  mounted() {},
  beforeDestroy() {}
})


