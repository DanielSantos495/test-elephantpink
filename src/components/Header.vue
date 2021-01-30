<template>
   <header class='header' id='home'>
      <div class='header__container'>
         <div class="header__login">
            <span>
               <img :src='lock' alt='Login' />
            </span>
            Login
         </div>
         <nav class="header__nav">
            <ul>
               <li>
                  <a href='#home' id='home-link' class='weight-header'>HOME</a>
                  <div v-if='headerStatus === "home" '>
                     <DiamondIcon fill='#BC9143' width='8px' height='11px' />
                  </div>
               </li>
               <li>
                  <a href='#about' id='about-link'>ABOUT</a>
                  <div v-if='headerStatus === "about" '>
                     <DiamondIcon fill='#BC9143' width='8px' height='11px' />
                  </div>
               </li>
               <li>
                  <h1>
                     <img :src='logoDiamond' alt='Logo'/>
                  </h1>
               </li>
               <li>
                  <a href='#jewels' id='jewels-link'>JEWELS</a>
                  <div v-if='headerStatus === "jewels" '>
                     <DiamondIcon fill='#BC9143' width='8px' height='11px' />
                  </div>
               </li>
               <li>
                  <a href='#contact' id='contact-link'>CONTACT</a>
                  <div v-if='headerStatus === "contact" '>
                     <DiamondIcon fill='#BC9143' width='8px' height='11px' />
                  </div>
               </li>
            </ul>
         </nav>
         <div class="header__language">
            EN
            <button>
               <img :src='expandButton' alt='Dowm arrow'/>
            </button>
            <button>
               <img :src='magnifyingGlass' alt='Magnifying glass' />
            </button>
         </div>
      </div>
   </header>
</template>

<script>

   import DiamondIcon from './DiamondIcon.vue'
   export default {
      name: 'Header',
      components: {
         DiamondIcon
      },
      data() {
         return {
            lock: '../assets/icons/lock.svg',
            expandButton: '../assets/icons/expand-button.svg',
            magnifyingGlass: '../assets/icons/magnifying-glass.svg',
            logoDiamond: 'assets/icons/group-14.svg',
            headerStatus: 'home'
         }
      },
      mounted() {
         const header = document.getElementById('home')
         const homeLink = document.getElementById('home-link')
         const aboutLink = document.getElementById('about-link')
         const jewelsLink = document.getElementById('jewels-link')
         const contactLink = document.getElementById('contact-link')

         window.addEventListener('scroll', () => {
            const scrollPixels = window.scrollY;
            console.log(scrollPixels)
            if(scrollPixels < 100) {
               // Home
               header.classList.remove('fixed')
               aboutLink.classList.remove('weight-header')
               homeLink.classList.add('weight-header')
               this.headerStatus = 'home'
            } else if(scrollPixels > 100) {
               // About
               homeLink.classList.remove('weight-header')
               jewelsLink.classList.remove('weight-header')
               header.classList.add('fixed')
               aboutLink.classList.add('weight-header')
               this.headerStatus = 'about'
            }
            if (scrollPixels > 350) {
               // Jewels
               aboutLink.classList.remove('weight-header')
               contactLink.classList.remove('weight-header')
               jewelsLink.classList.add('weight-header')
               this.headerStatus = 'jewels'
            }
            if (scrollPixels > 1500) {
               jewelsLink.classList.remove('weight-header')
               contactLink.classList.add('weight-header')
               this.headerStatus = 'contact'
            }

         })

      }
   }
</script>

<style>
   @import '../styles/components/header.scss';
</style>