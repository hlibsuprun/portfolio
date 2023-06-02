<script setup>
</script>

<template>
  <div class="email">
    <a
        href="mailto:hlibsuprun@gmail.com"
        class="email__link">
      hlibsuprun@gmail.com
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.email {
  position: fixed;
  left: auto;
  right: 40px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  margin: 0px;
  padding: 0px;
  font-family: $font-mono;
  font-size: $fz-xxs;
  color: $light-slate;
  line-height: $fz-lg;
  letter-spacing: 0.1em;
  list-style: none;
  opacity: 0;
  animation: fade-in 400ms forwards 5s;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: currentColor;
  }

  &__link {
    display: inline-block;
    margin: 20px 0;
    padding: 10px;
    text-decoration: none;
    color: inherit;
    transition: $transition;
    writing-mode: vertical-lr;


    &:hover, &:focus {
      transform: translateY(-3px);
      color: $green;
    }

    &:focus-visible {
      outline: 2px dashed $green;
      outline-offset: 3px;
    }
  }
}

@media (max-width: 768px) {
  .email {
    display: none;
  }
}

@media (max-width: 1080px) {
  .email {
    right: 20px;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>