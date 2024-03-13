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
      if (this.newTask.length > 4) {
        this.todoList.unshift({text: this.newTask, done:false})
        this.newTask = ''
      }else{
        alert('Attenzione, devi inserire almeno cinque caratteri')
        this.newTask = ''
      }  
    }
  },

  mounted(){

  }

}).mount('#app')