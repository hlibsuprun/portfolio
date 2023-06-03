<script setup>
import BaseProjectCard from "@/components/Base/BaseProjectCard.vue";
</script>

<template>
  <section id="projects" class="projects">
    <h2 class="projects__title numbered-title">Some Things I’ve Built</h2>
    <ul class="projects__list">
      <li v-scrollanimation class="projects__item">
        <BaseProjectCard
            title="ETQ Amsterdam"
            description="ETQ Amsterdam creates a modern minimalist perspective on footwear. Shop the latest sneaker collection at the
        official online store with worldwide shipping."
            :tech-list="['TypeScript', 'React', 'Styled Components', 'Vite']"
            github="https://github.com/hlibsuprun/etq-amsterdam"
            deploy="https://etq-amsterdam-hlibsuprun.vercel.app/"
            :image="['src/assets/images/etq-amsterdam.png', 'etq-amsterdam']"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.before-enter {
  visibility: visible;
  opacity: 0;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1);
}

.enter {
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: all 0.25s $easing 0s, opacity 0.5s $easing 0s, transform 0.5s $easing 0s;
}

.projects {
  &__title {
    &::before {
      counter-increment: section 2;
    }
  }

  &__item {
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;

    &:not(:last-of-type) {
      margin-bottom: 100px;
    }
  }
}

@media (max-width: 768px) {
  .projects {
    &__item {
      box-shadow: 0 10px 30px -15px $navy-shadow;
      transition: $transition;

      &:not(:last-of-type) {
        margin-bottom: 70px;
      }
    }
  }
}

@media (max-width: 480px) {
  .projects {
    &__item {
      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>