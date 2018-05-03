const data = {
  tareas:[
    {titulo:'Aprender VueJs',terminada:false},
    {titulo:'Aprender JS',terminada:false},
    {titulo:'Aprender PHP',terminada:false}
  ],
  nuevaTarea: ''
}

Vue.component('titulo',{
  template: '<h1>{{titulo}}</h1>',
  data: function(){
    return {
      titulo: 'Lista de Tareas :)'
    }
  }
});

Vue.component('nueva-tarea',{
  template: `<div class="input-group">
                <input type="text" placeholder="Escribe la nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="agregarTarea()">
                  <span class="input-group-btn">
                    <button type="button" v-on:click="agregarTarea()" class="btn btn-primary">Agregar Tarea</button>
                  </span>
             </div>`,
    data: function(){
      return data;
    },
    methods: {
      agregarTarea: function(){
        let texto = this.nuevaTarea.trim();
        if(texto){
            this.tareas.push({
              titulo:texto,
              terminada:false
            });
        }
        this.nuevaTarea = '';
      }
    }
});

Vue.component('lista-de-tareas',{
  template: `<ul class="list-group">
                <li v-for="(tarea , index) in tareas" class="list-group-item" :class="{terminada:tarea.terminada}">
                    {{tarea.titulo}}
                    <span class="pull-right">
                    <button type="button" class="btn btn-success btn-xs" v-on:click="tarea.terminada = !tarea.terminada">
                      <span class="glyphicon glyphicon-ok"></span>
                    </button>
                    <button type="button" class="btn btn-danger btn-xs" v-on:click="borrar(index)">
                    <span class="glyphicon glyphicon-remove"></span>
                    </button>
                    </span>
              </li>
          </ul>`,
    data:function(){
      return data;
    },
    methods:{
      borrar: function(index){
        this.tareas.splice(index,1);
      }
    }
})
const app = new Vue({
  el:'#app',
  data:data,
  methods:{
  }
})
