vue-todolist
===
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
### Svolgimento
1. Creo subito un array di oggetti e lo vado ad inserire nell'html tramite il v-for
2. Sempre in li aggiungo :class e gli dico che se todo.done è true allora aggiunge la classe done che mi sbarra la scritta.
3. Creo una funzione per eliminare la riga utilizzando splice e la inserisco dentro il cestino.
4. Creo la funzione addTask per aggiungere tramite l'invio nell'input o il click sul pulsante quello che scrivo dentro l'input
5. Nello span del <li> inserisco un @click per sbarrare o togliere la sbarratura dalla lista 