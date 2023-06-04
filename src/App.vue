<script setup>
import {ref, watch} from 'vue'

import NavBar from '@/components/NavBar.vue'
import WelcomeSpinner from '@/components/WelcomeSpinner.vue'
import SocialMedia from "@/components/Side/SideSocial.vue";
import Email from "@/components/Side/SideEmail.vue";
import SectionHero from "@/components/Section/SectionHero.vue";
import SectionAbout from "@/components/Section/SectionAbout.vue";
import SectionProjects from "@/components/Section/SectionProjects.vue";
import SectionContact from "@/components/Section/SectionContact.vue";

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
      <SectionAbout v-scrollanimation/>
      <SectionProjects v-scrollanimation/>
      <SectionContact v-scrollanimation/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.before-enter {
  opacity: 0;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1);
}

.enter {
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s $easing 0.2s, transform 0.5s $easing 0.2s;
}

.main {
  min-height: 100vh;
  padding: 0px 150px;

  &.blur, &.blur > * {
    filter: blur(5px) brightness(0.7);
    transition: $transition;
    user-select: none;
  }

  &.blur > * {
    pointer-events: none;
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
