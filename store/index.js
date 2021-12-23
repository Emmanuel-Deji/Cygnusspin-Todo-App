export const state = () => ({
    Todos: []
})
  
export const actions= {  
    async getAllTodos () {
        return await this.$axios.get("https://simp-node-todo.herokuapp.com/todo").then((res)=>{
            return res;
        })
    },
    async addTodo ({commit}, payload) {
        return await this.$axios.post("https://simp-node-todo.herokuapp.com/todo", payload);
    },
    async deleteTodo ({commit}, payload) {
        return await this.$axios.delete(`https://simp-node-todo.herokuapp.com/todo/${payload.id}`);
    }
  }

  export const mutations = {

  }