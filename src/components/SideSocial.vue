<script setup>
import BaseIcon from "@/components/Base/BaseIcon.vue";
</script>

<template>
  <div class="social fade-enter-done" style="animation-delay: 975ms">
    <div class="social__list">
      <li class="social__item">
        <a href="https://github.com/hlibsuprun" class="social__link" target="_blank">
          <BaseIcon height="20" width="20" icon-name="github"/>
        </a>
      </li>
      <li class="social__item">
        <a
            href="https://www.linkedin.com/in/hlibsuprun/"
            class="social__link" target="_blank">
          <BaseIcon height="20" width="20" icon-name="linkedin"/>
        </a>
      </li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.social {
  position: fixed;
  left: 40px;
  right: auto;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  margin: 0px;
  padding: 0px;
  font-family: $font-sans;
  font-size: $fz-xl;
  color: $light-slate;
  line-height: 1.3;
  list-style: none;
  opacity: 0;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: currentColor;
  }

  &__item {
    position: relative;

    &:last-of-type {
      margin-bottom: 20px;
    }

    & > .social__link:hover, & > .social__link:focus {
      transform: translateY(-3px);
    }
  }

  &__link {
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: inherit;
    transition: $transition;

    &:hover, &:focus {
      color: $green;
    }

    &:focus-visible {
      outline: 2px dashed $green;
      outline-offset: 3px;
    }
  }
}

@media (max-width: 768px) {
  .social {
    display: none;
  }
}

@media (max-width: 1080px) {
  .social {
    left: 20px;
  }
}
</style>