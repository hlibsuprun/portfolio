<script setup>
import {ref} from 'vue'

import BaseIcon from "@/components/Base/BaseIcon.vue";

const props = defineProps({
  isOpenMobileMenu: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['update-is-open-mobile-menu'])
const toggleMobileMenu = () => emits('update-is-open-mobile-menu', !props.isOpenMobileMenu)
const closeMobileMenu = () => emits('update-is-open-mobile-menu', false)

const headerHidden = ref(false)
let starScrollPosition = ref(true)
let lastScrollPosition = window.pageYOffset
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset

  if (currentScrollPosition === 0 || currentScrollPosition < 50) {
    starScrollPosition.value = true
  } else if (currentScrollPosition < lastScrollPosition) {
    headerHidden.value = true
    starScrollPosition.value = false
  } else {
    headerHidden.value = false
    starScrollPosition.value = false
  }

  lastScrollPosition = currentScrollPosition
})
</script>

<template>
  <header
      :class="{
      header: true,
      header__scroll: headerHidden && !starScrollPosition,
      header__scroll_hidden: !headerHidden && !starScrollPosition,
    }"
  >
    <nav class="nav">
      <a href="/" class="nav__home home fade-enter-done">
        <div class="home__hex">
          <BaseIcon height="inherit" width="inherit" icon-name="hex"/>
        </div>
        <div class="home__logo ">
          <BaseIcon height="inherit" width="inherit" icon-name="logo"/>
        </div>
      </a>
      <div :class="`nav__menu  ${props.isOpenMobileMenu ? 'nav__menu_active' : ''}`">
        <ul class="nav__list">
          <li class="nav__item fadedown-enter-done" style="animation-delay: 0s;" @click="closeMobileMenu">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item fadedown-enter-done" style="animation-delay: 100ms;" @click="closeMobileMenu">
            <a href="#projects" class="nav__link">Work</a>
          </li>
          <li class="nav__item fadedown-enter-done" style="animation-delay: 200ms;" @click="closeMobileMenu">
            <a href="#contact" class="nav__link">Contact</a>
          </li>
        </ul>
        <div class="fadedown-enter-done" style="animation-delay: 300ms;">
          <a type="button" href="/cv-hlib-suprun-frontend-developer.pdf" target="_blank" class="nav__button" @click="closeMobileMenu">Resume</a>
        </div>
      </div>
      <button
          :class="`nav__ham-button fade-enter-done ${props.isOpenMobileMenu ? 'nav__ham-button_active' : ''}`"
          @click="toggleMobileMenu"
      >
        <div class="nav__ham-box">
          <div class="nav__ham-inner"></div>
        </div>
      </button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.header {
  z-index: 11;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 100px);
  height: 100px;
  padding: 0px 50px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: $transition;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
}

.header__scroll {
  height: 70px;
  transform: translateY(0px);
  background-color: rgba(10, 25, 47, 0.85);
  box-shadow: 0 10px 30px -10px $navy-shadow;

  &_hidden {
    transform: translate(0px, -100px);
  }
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: $lightest-slate;
  font-family: $font-mono;

  &__home {
    width: 39px;
    height: 45px;
    transition: $transition;
    opacity: 0;

    &:hover {
      outline: 0px;
      transform: translate(-4px, -4px);
    }

    &:hover > .home__hex {
      transform: translate(4px, 3px);
    }
  }

  &__menu {
    display: flex;
    align-items: center;
  }

  &__list {
    display: flex;
    align-items: center;
    list-style: none;
  }

  &__item {
    margin: 0 5px;
    counter-increment: item 1;
    opacity: 0;
    transform: translateY(-100%);

    &:focus-visible {
      outline: 2px dashed $green;
      outline-offset: 3px;
    }
  }

  &__link {
    padding: 10px;
    text-decoration: none;
    font-family: $font-mono;
    font-size: $fz-xs;
    color: $lightest-slate;
    transition: $transition;

    &::before {
      content: '0' counter(item) '.';
      margin-right: 5px;
      color: $green;
      font-size: $fz-xxs;
      text-align: right;
    }

    &:hover,
    &:focus {
      color: $green;
    }
  }

  &__button {
    position: relative;
    margin-left: 15px;
    padding: 0.75rem 1rem;
    border: 1px solid $green;
    border-radius: $border-radius;
    font-family: $font-mono;
    font-size: $fz-xs;
    line-height: 1;
    color: $green;
    background-color: transparent;
    transition: $transition;

    &:hover,
    &:active {
      outline: none;
      box-shadow: 3px 3px 0 0 $green;
      transform: translate(-4px, -4px);
    }
  }

  &__ham-button {
    display: none;
  }
}

.home {
  &__hex {
    z-index: -1;
    position: absolute;
    width: inherit;
    height: inherit;
    transition: $transition;
  }

  &__logo {
    position: relative;
  }
}

@media (max-width: 1080px) {
  .header {
    padding: 0px 40px;
    width: calc(100% - 80px);
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0px 25px;
    width: calc(100% - 50px);
  }
  .nav {
    &__menu {
      z-index: 9;
      position: fixed;
      top: 0px;
      bottom: 0px;
      right: -25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: min(70vw, 400px);
      height: 100vh;
      padding: 50px 10px;
      outline: 0px;
      background-color: $light-navy;
      box-shadow: -10px 0px 30px -15px $navy-shadow;
      transform: translateX(100vw);
      visibility: hidden;
      transition: $transition;

      &_active {
        transform: translateX(0vw);
        visibility: visible;
      }
    }

    &__list {
      flex-direction: column;
      width: 100%;
      padding: 0;
    }

    &__item {
      width: 100%;
      margin: 0px auto 20px;
      counter-increment: item 1;
    }

    &__link {
      display: inline-block;
      width: 100%;
      padding: 0;
      text-align: center;
      font-size: clamp($fz-sm, 4vw, $fz-lg);
      color: inherit;
      transition: $transition;

      &::before {
        display: block;
        width: 100%;
        margin-right: 0;
        margin-bottom: 5px;
        font-size: $fz-sm;
        text-align: center;
      }
    }

    &__button {
      margin: 10% auto 0px;
      padding: 18px 50px;
      font-size: $fz-sm;
    }

    &__ham-button {
      z-index: 12;
      position: relative;
      display: inline-block;
      width: 30px;
      height: 24px;
      padding: 15px;
      border: 0px;
      text-transform: none;
      color: inherit;
      background-color: transparent;
      transition-timing-function: linear;
      transition-duration: 0.15s;
      transition-property: opacity, filter;
      opacity: 0;

      &:focus-visible {
        outline: 2px dashed $green;
        outline-offset: 3px;
      }

      &_active {
        .nav__ham-inner {
          transition: transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
          transform: rotate(225deg);
        }

        .nav__ham-inner::before {
          width: 100%;
          top: 0px;
          opacity: 0;
          transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
        }

        .nav__ham-inner::after {
          width: 100%;
          bottom: 0px;
          transform: rotate(-90deg);
          transition: bottom 0.1s ease-out,
          transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        }
      }
    }

    &__ham-box {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: inherit;
      height: inherit;
    }

    &__ham-inner {
      position: absolute;
      top: 50%;
      right: 0px;
      width: inherit;
      height: 2px;
      border-radius: $border-radius;
      background-color: $green;
      transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
      transform: rotate(0deg);

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: auto;
        right: 0px;
        display: block;
        width: inherit;
        height: 2px;
        border-radius: 4px;
        background-color: $green;
      }

      &::before {
        width: 120%;
        top: -10px;
        opacity: 1;
        transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
      }

      &::after {
        width: 80%;
        bottom: -10px;
        transform: rotate(0deg);
        transition: bottom 0.1s ease-in 0.25s,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }
  }
}
</style>
