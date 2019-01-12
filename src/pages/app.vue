<template>
  <div id="app" style="min-width:1280px">
    <cat-nav></cat-nav>
    <router-view />
    <cat-footer></cat-footer>
  </div>
</template>

<script>
  import catNav from '../components/cat-nav'
  import CatFooter from '../components/footer'
  export default {
    components: {
      'cat-nav': catNav,
      'cat-footer': CatFooter
    },
  }

</script>

<style>


</style>
