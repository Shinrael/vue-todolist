const { createApp } = Vue;
createApp({

  // Definizione dei dati iniziali dello stato del componente
  data(){
    return{

      // Lista delle attività da fare con stato "fatto" (done) o "da fare" (not done)
      todoList: [
        { text: 'Fare spesa', done: true },
        { text: 'Studiare', done: false },
        { text: 'Ripassare js', done: false }
      ],

      // Nuova attività da aggiungere
      newTask:'',
    }
  },

  // Definizione dei metodi del componente
  methods:{

    // Metodo per eliminare una riga dalla lista
    deleteRow(index){
      if (this.todoList[index].done == true) {
        // Rimuove la riga solo se l'attività è contrassegnata come "fatta"
        this.todoList.splice(index,1)
      } else {
        // Avviso se si cerca di eliminare un'attività non contrassegnata come "fatta"
        alert('Attenzione, non è possibile cancellare senza prima averla sbarrata')
      }     
    },

    // Metodo per aggiungere una nuova attività alla lista
    addTask(){
      if (this.newTask.length > 4) {
        // Aggiunge la nuova attività solo se la lunghezza è maggiore di 4 caratteri
        this.todoList.unshift({text: this.newTask, done:false})
        this.newTask = ''
      }else{
        // Avviso se la lunghezza della nuova attività è inferiore a 5 caratteri
        alert('Attenzione, devi inserire almeno cinque caratteri')
        this.newTask = ''
      }  
    },

  },

  // Metodo chiamato quando il componente è stato montato nel DOM
  mounted(){

  }

}).mount('#app')
