<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg">
    <CurrencyForm></CurrencyForm>

  </div>
</template>

<style>
  .logo{
    max-width: 50%;
  }
</style>

<script>
// @ is an alias to /src
import CurrencyForm from '@/components/CurrencyForm.vue'



export default {
  name: 'Home',
  components: {
    CurrencyForm,
  }
}
</script>
