<template>
   <main>
      <Header />
      <Hero />
      <OurCollection />
   </main>
</template>

<script>
   import Header from './components/Header.vue'
   import Hero from './components/Hero.vue'
   import OurCollection from './components/OurCollection.vue'

   export default {
      name: 'App',
      components: {
         Header,
         Hero,
         OurCollection
      }
   }
</script>

<style lang="scss">
</style>