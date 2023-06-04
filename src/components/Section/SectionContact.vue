<script setup>

</script>

<template>
  <section id="contact" class="contact">
    <h2 class="contact__title numbered-title overline">What's next?</h2>
    <h2 class="contact__subtitle">Get in touch</h2>
    <p class="contact__paragraph">At the moment, I am actively seeking new opportunities, and my inbox is always open.
      If you have any questions or simply want to say hello, I will do my best to respond to you!</p>
    <a class="contact__email" href="mailto:hlibsuprun@gmail.com" target="_blank">Say Hello</a>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.contact {
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;

  &__title {
    &::before {
      counter-increment: section 3;
    }
  }

  &__subtitle {
    font-size: clamp(40px, 5vw, 60px);
  }

  &__email {
    color: $green;
    background-color: transparent;
    border: 1px solid $green;
    border-radius: $border-radius;
    padding: 1.25rem 1.75rem;
    font-size: $fz-sm;
    font-family: $font-mono;
    line-height: 1;
    text-decoration: none;
    transition: $transition;
    margin-top: 50px;

    &:hover, &:focus {
      outline: none;
      box-shadow: 4px 4px 0 0 $green;
      transform: translate(-5px, -5px);
    }
  }
}
</style>