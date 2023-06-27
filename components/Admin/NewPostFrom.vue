<template>
  <div class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title" > Title: </AppInput>
        <AppInput v-model="post.description" > Description: </AppInput>
        <AppInput v-model="post.img" > Image: </AppInput>
        <AppTextArea v-model="post.content" > Content: </AppTextArea>

        <div class="controls">
          <AppButton class="btn" @click="cancel"> Cancel </AppButton>
          <AppButton class="btn" @click="onSubmit" > Save </AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/UI/Controls/Input";
import AppTextArea from "@/components/UI/Controls/TextArea";
import AppButton from "~/components/UI/Controls/Button";
export default {
  components: {AppButton, AppInput, AppTextArea },
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        description: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    cancel () {
      this.$router.push('/admin')
    },
    onSubmit () {
      this.$emit('submit', this.post)
    }
  }
}
</script>

<style scoped>

</style>
