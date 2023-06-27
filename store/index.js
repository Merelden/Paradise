export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  addPost({state}, post) {
    console.log(post)
    state.postsLoaded.push(post)
  }
}

export const actions = {
  async addPost ({commit}, post) {
    try {
      const axios = await import('axios');
      const response = await axios.default.post('https://paradise-12c1d-default-rtdb.firebaseio.com/posts.json', post);
      const postId = response.data.name; // Получаем id из ответа сервера Firebase
      const postWithId = {...post, id: postId}; // Создаем новый объект post с добавленным id
      commit('addPost', postWithId); // Передаем объект с id в мутацию addPost
    } catch (error) {
      console.log(error);
    }
  }
}

export const getters = {

}
