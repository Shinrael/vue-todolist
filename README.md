vue-todolist
===
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
### Svolgimento
1. Creo subito un array di oggetti e lo vado ad inserire nell'html tramite il v-for
2. Sempre in li aggiungo :class e gli dico che se todo.done è true allora aggiunge la classe done che mi sbarra la scritta.