var tarefasApp = new Vue({
    el: "#tarefasApp",
    data: {
        tarefas: [
            { titulo: "Estudar", pronta: false },
            { titulo: "Almoça", pronta: false },
            { titulo: "Ir a academia", pronta: false },
            { titulo: "Dormi", pronta: false },
            { titulo: "Trabalhar", pronta: false },
        ],
        novaTarefa: {
            titulo: '',
            pronta: false
        },
        
    },
    methods: {
        addTarefa: function(e) {
            e.preventDefault()
            let tarefa = {
                titulo: this.novaTarefa.titulo,
                pronta: false
            }
            this.tarefas.push(tarefa)
            this.novaTarefa.titulo = ''
        },
        removerTarefa: function(tarefa) {
            this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
        },
    }
})