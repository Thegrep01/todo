<template>
  <div class="app">
    <div class="container">
        <h1>To-Do List!</h1>
        <form v-on:submit.prevent="submitToDo">
            <input type="text" v-model="Todo.title"/>
            <button class="btn primary-btn">Add</button>
        </form>
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
      }
    };
  },
  methods: {
    submitToDo() {
      let url = "https://server-hfdjjaiktt.now.sh/home/add";
      axios
        .post(url, this.Todo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
//"http://localhost:5000/home/add";
</script> 