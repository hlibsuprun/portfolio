<script setup>
</script>

<template>
  <section class="hero">
    <div class="fadeup-enter-done" style="transition-delay: 100ms;">
      <h1 class="hero__title">Hi, my name is</h1>
    </div>
    <div class="fadeup-enter-done" style="transition-delay: 200ms;">
      <h2 class="hero__subtitle">Hlib Suprun.</h2>
    </div>
    <div class="fadeup-enter-done" style="transition-delay: 300ms;">
      <h3 class="hero__subtitle">I develop web applications.</h3>
    </div>
    <div class="fadeup-enter-done" style="transition-delay: 400ms;">
      <p class="hero__paragraph">
        As a student, I possess a strong desire to develop my coding skills and advance my career in the field. I am
        committed to constantly improving my abilities and knowledge, as I strive to become a proficient programmer.
        My passion for programming fuels my determination to succeed in the industry.
      </p>
    </div>
    <div class="fadeup-enter-done" style="transition-delay: 500ms;">
      <a href="#about" class="hero__button">
        Learn more about me
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 0px;

  &__title {
    margin: 0px 0px 30px 4px;
    color: $green;
    font-family: $font-mono;
    font-size: clamp($fz-sm, 5vw, $fz-md);
    font-weight: 400;
  }

  &__subtitle {
    margin: 0px;
    font-family: $font-sans;
    font-size: clamp(40px, 8vw, 75px);
    font-weight: 600;
    color: $lightest-slate;
    line-height: 1.1;
  }

  h3 {
    margin-top: 5px;
    color: $slate;
    line-height: 0.9;
  }

  &__paragraph {
    margin: 20px 0px 0px;
    max-width: 640px;
    font-family: $font-sans;
  }

  &__button {
    margin-top: 50px;
    padding: 1.25rem 1.75rem;
    border: 1px solid $green;
    border-radius: $border-radius;
    font-family: $font-mono;
    font-size: $fz-sm;
    color: $green;
    line-height: 1;
    text-decoration: none;
    background-color: transparent;
    transition: $transition;

    &:hover, &:active {
      outline: none;
      box-shadow: 4px 4px 0 0 $green;
      transform: translate(-5px, -5px);
    }
  }
}


@media (max-width: 480px) {
  .hero {
    &__title {
      margin: 0px 0px 20px 2px;
    }
  }
}

@media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
  .hero {
    height: calc(100vh - 100px);
    padding-top: 100px;
  }
}
</style>