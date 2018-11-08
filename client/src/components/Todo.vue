<style scoped>
.app {
  margin-left: 41%;
}
ul {
  list-style: none;
}
</style>

<template>
  <div class="app">
    <div>
        <h1>To-Do List!</h1>
        <form v-on:submit.prevent="submitToDo">
            <input type="text" v-model="Todo.title"/>
            <button class="btn primary-btn">Add</button>
        </form>
       </div>
       <div>
         <ul>
           <li v-for="todo in todos" :key="todo.id">
             <p>
               <label>
                 <input type="checkbox" :checked=todo.status @change="Update(todo)"/>
                 <span>{{todo.title}}</span>
                 <a @click.prevent="DeleteTodo(todo)">
                   <font-awesome-icon icon="trash"/>
                 </a>
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
        _id: "",
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
        let url = "https://server-qquiodzkpz.now.sh/home/add";
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
      let url = "https://server-qquiodzkpz.now.sh/home/all";
      axios.get(url).then(res => {
        this.todos = res.data;
      });
    },
    Update(todo) {
      let url = "https://server-qquiodzkpz.now.sh/home/update/";
      todo.status = !todo.status;
      axios
        .post(url + todo._id, todo)
        .then(res => {
          console.log(res);
          this.getAll();
        })
        .catch(err => {
          console.log(err);
        });
    },
    DeleteTodo(todo) {
      let url = "https://server-qquiodzkpz.now.sh/home/delete/";
      axios
        .get(url + todo._id)
        .then(res => {
          console.log(res);
          this.getAll();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
//"http://localhost:5000/home/add";
</script> 