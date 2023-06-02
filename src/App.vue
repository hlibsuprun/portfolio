<script setup>
import {ref, watch} from 'vue'

import NavBar from './components/NavBar.vue'
import WelcomeSpinner from './components/WelcomeSpinner.vue'
import SocialMedia from "@/components/SideSocial.vue";
import Email from "@/components/SideEmail.vue";
import SectionHero from "@/components/SectionHero.vue";

let welcome = ref(true)
setTimeout(() => {
  welcome.value = !welcome.value
}, 2700)

let isOpenMobileMenu = ref(false)

watch(isOpenMobileMenu, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto'
})
</script>

<template>
  <WelcomeSpinner v-if="welcome"/>
  <div v-else>
    <NavBar
        :is-open-mobile-menu="isOpenMobileMenu"
        @update-is-open-mobile-menu="isOpenMobileMenu = $event"
    />
    <SocialMedia/>
    <Email/>
    <main
        :class="`main ${isOpenMobileMenu ? 'blur' : ''}`"
        @click="() => isOpenMobileMenu && (isOpenMobileMenu = !isOpenMobileMenu)"
    >
      <SectionHero/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.main {
  min-height: 100vh;
  padding: 0px 150px;

  &.blur > * {
    filter: blur(5px) brightness(0.7);
    transition: $transition;
    pointer-events: none;
    user-select: none;
  }
}

@media (max-width: 1080px) {
  .main {
    padding: 0px 100px;
  }
}


@media (max-width: 768px) {
  .main {
    padding: 0px 50px;
  }
}

@media (max-width: 480px) {
  .main {
    padding: 0px 25px;
  }
}

</style>
