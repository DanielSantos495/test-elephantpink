<template>
   <header class='header' id='home' ref='inicio'>
      <div class="header__login">
         <span>
            <Lock />
         </span>
         Login
      </div>
      <nav class="header__nav">
         <ul>
            <li><a href='#home'>HOME</a></li>
            <li><a href='#about'>ABOUT</a></li>
            <li>
               <LogoDiamond />
            </li>
            <li><a href='#jewels'>JEWELS</a></li>
            <li><a href='#contact'>CONTACT</a></li>
         </ul>
      </nav>
      <div class="header__language">
         EN
         <button>
            <ExpandButton />
         </button>
         <button>
            <MagnifyingGlass />
         </button>
      </div>
   </header>
</template>

<script>

   import Lock from './Icons/Lock.vue'
   import ExpandButton from './Icons/ExpandButton.vue'
   import MagnifyingGlass from './Icons/MagnifyingGlass.vue'
   import LogoDiamond from './Icons/LogoDiamond.vue'

   export default {
      name: 'Header',
      components: {
         Lock,
         ExpandButton,
         MagnifyingGlass,
         LogoDiamond
      },
      methods: {},
      mounted() {
         const header = document.getElementById('home')
         // console.log(this.$refs.inicio)

         window.addEventListener('scroll', () => {
            const scrollPixels = window.scrollY;
            console.log(scrollPixels)

            if(scrollPixels < 100) {

               header.classList.remove('fixed')
               console.log('Home en negrilla')

            } else if(scrollPixels > 100) {

               header.classList.add('fixed')
               console.log('About en negrilla')

            } else if (scrollPixels > 200) {

               console.log('Jewels en negrilla')

            } else if (scrollPixels > 400) {

               console.log('Contact en negrill')

            }

         })

      }
   }
</script>

<style>
   @import '../styles/components/header.scss';
</style>