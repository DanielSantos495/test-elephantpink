<template>
   <section>
      <Cart
         v-for="(jewel, i) in jewels"
         :key='i' :jewel='jewel'
      />
   </section>
</template>

<script>
   import Cart from './Cart.vue'

   export default {
      name: 'OurColletion',
      components: {
         Cart
      },
      data() {
         return {
            jewels: [
               {
                  title: 'Diamond 1',
                  description: 'Blab aasd  as da as d as d a d as dasdasd asdad as as d asd',
                  img: '../assets/images/shutterstock.jpg'
               },
               {
                  title: 'Diamond 2',
                  description: 'Blab aasd  as da as d as d a d as dasdasd asdad as as d asd',
                  img: '../assets/images/shutterstock.jpg'
               },
               {
                  title: 'Diamond 3',
                  description: 'Blab aasd  as da as d as d a d as dasdasd asdad as as d asd',
                  img: '../assets/images/shutterstock.jpg'
               }
            ]
         }
      }
   }
</script>