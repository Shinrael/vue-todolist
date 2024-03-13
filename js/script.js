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
      if (this.todoList[index].done == true) {
        this.todoList.splice(index,1)
      } else {
        alert('Attenzione, non è possibile cancellare senza prima averla sbarrata')
      }     
    },

    addTask(){
      if (this.newTask.length > 4) {
        this.todoList.unshift({text: this.newTask, done:false})
        this.newTask = ''
      }else{
        alert('Attenzione, devi inserire almeno cinque caratteri')
        this.newTask = ''
      }  
    },

  },

  mounted(){

  }

}).mount('#app')