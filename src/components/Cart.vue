<template>
   <div>
      <img :src='jewel.img' alt='Diamond image'/>
      <h3>{{ jewel.title }}</h3>
      <p>{{ jewel.description }}</p>
      <DiamondIcon fill='#BC9143'/>
   </div>
</template>

<script>

   import DiamondIcon from './DiamondIcon.vue'

   export default {
      name:'Cart',
      components: {
         DiamondIcon
      },
      props: [
         'jewel'
      ]
   }
</script>