<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">
        Contact me !
      </h2>
      <form @submit.prevent="onSubmit" class="contact">
        <AppInput v-model="user.name"> Name: </AppInput>
        <AppInput v-model="user.email" type="email"> Email: </AppInput>
        <AppTextArea v-model="user.text"> Text: </AppTextArea>

        <div class="controls">
          <AppButtons class="btn">
            Submit !
          </AppButtons>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButtons from "./UI/Controls/Button";
import AppInput from "./UI/Controls/Input";
import AppTextArea from "./UI/Controls/TextArea";
export default {
  components: {
    AppButtons, AppInput, AppTextArea
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>
