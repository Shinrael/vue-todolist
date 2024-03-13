const { createApp } = Vue;
createApp({

  data(){
    return{

      todoList: [
        { text: 'uga uga',
          done: true },
          { text: 'giuseppina',
          done: false },
          { text: 'spesa',
          done: true }
      ]

    }
  },

  methods:{

    
  },

  mounted(){

  }

}).mount('#app')