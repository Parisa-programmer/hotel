
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
  el: '#test-page',
  vuetify: new Vuetify(),
  data: {
    friends: { name: 'Sandra Adams', group: 'Group 1',},
    people: ['1','2','3'
      // { name: 'Sandra Adams', group: 'Group 1',},
      // { name: 'Ali Connors', group: 'Group 1',},
      // { name: 'Trevor Hansen', group: 'Group 1',},
      // { name: 'Tucker Smith', group: 'Group 1',},
      // { name: 'Britta Holt', group: 'Group 2',},
      // { name: 'Jane Smith ', group: 'Group 2',},
      // { name: 'John Smith', group: 'Group 2',},
      // { name: 'Sandra Williams', group: 'Group 2',},
    ],
    originSearchInput:''
  },
  watch: {
    originSearchInput(){
      this.$refs.originCity.isFocused = false
    }
  },
  methods: {
   
  },
  created() {
    // setInterval(() => {
    //   console.log( );
    // }, 1000);
  },
  
})


