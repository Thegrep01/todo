<template>
  <div class="app">
    <div class="container">
        <h1>To-Do List!</h1>
        <form v-on:submit.prevent="submitToDo">
            <input type="text" v-model="Todo.title"/>
            <button class="btn primary-btn">Add</button>
        </form>
       </div>
       <div class="container">
         <ul>
           <li v-for="todo in todos" :key="todo.id">
             <p>
               <label>
                 <input type="checkbox" :checked=todo.status @change="todo.status = !todo.status"/>
                 <span>{{todo.title}}</span>
               </label>
             </p>
           </li>
         </ul>
       </div>
    </div> 
</template>

<script>
import axios from "axios";

export default {
  name: "ToDo",
  data() {
    return {
      Todo: {
        title: "",
        status: false
      },
      todos: []
    };
  },
  created: function() {
    this.getAll();
  },
  methods: {
    submitToDo() {
      if (this.Todo.title != "") {
        let url = "https://server-hfdjjaiktt.now.sh/home/add";
        axios
          .post(url, this.Todo)
          .then(res => {
            console.log(res);
            this.Todo.title = "";
            this.getAll();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    getAll() {
      let url = "https://server-hfdjjaiktt.now.sh/home/all";
      axios.get(url).then(res => {
        this.todos = res.data;
      });
    }
  }
};
//"http://localhost:5000/home/add";
</script> 