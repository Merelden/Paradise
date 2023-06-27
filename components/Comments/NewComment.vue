<template>
  <section class="contact">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact">
        <AppInput v-model="comment.name"> Name: </AppInput>
        <AppTextArea v-model="comment.text"> Text: </AppTextArea>

        <div class="controls">
          <AppButton class="btn">
            Submit !
          </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButtons from "../UI/Controls/Button";
import AppInput from "../UI/Controls/Input";
import AppTextArea from "../UI/Controls/TextArea";
export default {
  components: {
    AppButtons, AppInput, AppTextArea
  },
  data() {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.comment)
    }
  }
}
</script>

<style scoped>

</style>
