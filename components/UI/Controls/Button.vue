<template>
  <button
  class="btn"
  :class="btnClass"
  v-on="$listeners"
  v-bind="$attrs">

    <slot/>

  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnClass: {
      type: String,
      default: 'btn'
    }
  }
}
</script>

<style scoped>

</style>
