const app = new Vue({
  el:'#app',
  data:{
    titulo: 'Lista de Tareas',
    tareas:[
      {titulo:'Aprender VueJs',terminada:false},
      {titulo:'Aprender JS',terminada:false},
      {titulo:'Aprender PHP',terminada:false}
    ],
    nuevaTarea: ''
  },
  methods:{

  }
})
