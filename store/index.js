import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      posts: [],
      load: true,
    },
    getters: {
      getPosts(state) {
        return state.posts;
      },
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      },
      setLoad(state, load) {
        state.load = load;
      },
    },
    actions: {
      fetchPosts() {
        try {
          const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              this.commit("setPosts", data);
            });
        } catch (e) {
          console.log(e);
        } finally {
          this.commit("setLoad", false);
        }
      },
    },
  });

export default store;
