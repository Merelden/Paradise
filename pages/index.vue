<template>
  <div>
    <Header></Header>
    <PostsList :posts="posts"/>
    <contacts/>
  </div>
</template>

<script>
import PostsList from "../components/Blog/PostsList";
import Contacts from "../components/Contacts";

export default {
  name: 'IndexPage',
  components: {
    PostsList, Contacts
  },
  asyncData(contex) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          posts: [
            {
              id: 1,
              title: '1 post',
              description: 'lorem lorem',
              img: 'https://i.pinimg.com/564x/be/8d/54/be8d54a3db603d273ac3db90181a1f15.jpg'
            }
          ]
        })
        reject(new Error())
      }, 1500)
    })
      .then(data => {
        return data
      })
      .catch(e => {
        contex.error(e)
      })
  },
  data() {
    return {
      posts: []
    }
  },
}
</script>
