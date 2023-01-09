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
    showMenuSmall:false
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


