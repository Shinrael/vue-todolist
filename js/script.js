const { createApp } = Vue;
createApp({

  data(){
    return{

      todoList: [
        { text: 'Fare spesa',
          done: true },
        { text: 'Studiare',
          done: false },
        { text: 'Ripassare js',
          done: false }
      ],
      newTask:'',

    }
  },

  methods:{

    deleteRow(index){
      this.todoList.splice(index,1)
    },

    addTask(){
      this.todoList.unshift({text: this.newTask, done:false})
      this.newTask = ''
    }
  },

  mounted(){

  }

}).mount('#app')