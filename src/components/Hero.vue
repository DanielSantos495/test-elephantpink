<template>
   <section class='hero' id='hero'>
      <ul id='slide' class="slide move">
         <li>
            <img
               :src='imageUno'
               alt='Jewelry uno'
            />
            <div class='hero__content'>
               <h2>DIAMONDS</h2>
               <div class='hero__content-decoration'/>
               <p>
                  Diamonds are the brightest stars and only
                  the sky is the limit when it comes to achieving
                  our jewels.
               </p>
            </div>
         </li>
         <li>
            <img
               :src='imageDos'
               alt='Jewelry uno'
            />
            <div class='hero__content'>
               <h2>JEWELS</h2>
               <div class='hero__content-decoration'/>
               <p>
                  A true jewel has two parts, the jewel and the one who wears it.
               </p>
            </div>
         </li>
      </ul>
      <div class='hero__manage'>
         <div>
            <button type='button' @click='carousel($event)'>
               <img :src='arrow' alt='Left arrow'/>
            </button>
            <button  type='button' @click='carousel($event)'>
               <img :src='arrow' alt='Right arrow'/>
            </button>
         </div>
         <div>
            <button type='button' @click='carousel($event, "left")'>
               <DiamondIcon :positionCarousel='positionCarousel === "left" ? "#BC9143" : null'/>
            </button>
            <button type='button' @click='carousel($event, "right")'>
               <DiamondIcon :positionCarousel='positionCarousel === "right" ? "#BC9143" : null' />
            </button>
         </div>
      </div>
   </section>
</template>

<script>
   import DiamondIcon from './DiamondIcon.vue'
   export default {
      name: 'Hero',
      components: {
         DiamondIcon
      },
      data() {
         return {
            imageUno: '../assets/images/jewelry-carousel.png',
            imageDos: '../assets/images/jewelry-carousel2.png',
            arrow: '../assets/icons/arrow-copy.svg',
            diamond: '../assets/icons/diamond.svg',
            positionCarousel: 'left',
            setTimeoutId: 0
         }
      },
      methods: {
         carousel(e, side) {
            const direcction = e.target.alt
            const slide = document.getElementById('slide')

            if (direcction === 'Left arrow' || side === 'left') {
               slide.classList.remove('right')
               slide.classList.add('left')
               this.setTimeoutId = setTimeout(() => {
                  this.positionCarousel = 'left'
               }, 300)
            }
            if (direcction === 'Right arrow' || side === 'right') {
               slide.classList.add('left')
               slide.classList.add('right')
               this.setTimeoutId = setTimeout(() => {
                  this.positionCarousel = 'right'
               }, 300)

            }
         }
      },
      mounted() {

         // const hero = document.getElementById('hero')
         // const options = {
         //    threshold: .9
         // }
         // const headerFixed = ([entries], observer) => {
         //    console.log(entries.isIntersecting)
         //    console.log(observer)
         // }

         // const observer = new IntersectionObserver(headerFixed, options)
         // observer.observe(hero)
      },
      beforeUnmount() {
         clearTimeout(this.setTimeoutId)
      }
   }
</script>

<style>
   @import '../styles/components/hero.scss';
</style>