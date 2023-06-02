<script setup>
import {ref, watch} from 'vue'

import NavBar from './components/NavBar.vue'
import WelcomeSpinner from './components/WelcomeSpinner.vue'
import SocialMedia from "@/components/SocialMedia.vue";
import Email from "@/components/Email.vue";

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
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.main {
  min-height: 100vh;

  &.blur > * {
    filter: blur(5px) brightness(0.7);
    transition: $transition;
    pointer-events: none;
    user-select: none;
  }
}
</style>
