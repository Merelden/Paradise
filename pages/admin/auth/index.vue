<template>
  <div>
    <section class="auth">
      <div class="container">
        <form @submit.prevent="onSubmit" class="auth__form">
          <AppInput  type="text" v-model="user.login" > Login:  </AppInput>
          <AppInput  type="password" v-model="user.password" > Password: </AppInput>

          <div class="controls">
            <AppButton> Sign In </AppButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AppInput from "~/components/UI/Controls/Input";
import AppButton from "~/components/UI/Controls/Button";
export default {
  components: {AppButton, AppInput},
  data () {
    return {
      user: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.user.login = ''
      this.user.password = ''
    }
  }
}
</script>

<style scoped>

</style>
