<script setup>
import BaseIcon from "@/components/Base/BaseIcon.vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  techList: {
    type: Array,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  deploy: {
    type: String,
    required: true
  },
  image: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="project-content">
    <h3 class="project-content__title">
      <a href="https://etq-amsterdam-hlibsuprun.vercel.app/" target="_blank">{{ props.title }}</a>
    </h3>
    <div class="project-content__description">
      <p>{{ description }}</p>
    </div>
    <ul class="project-content__tech-list">
      <li v-for="techItem in props.techList" :key="techItem">{{ techItem }}</li>
    </ul>
    <div class="project-content__links">
      <a :href="props.github" target="_blank">
        <BaseIcon height="20" width="20" icon-name="github"/>
      </a>
      <a href="https://etq-amsterdam-hlibsuprun.vercel.app/" target="_blank">
        <BaseIcon height="20" width="20" icon-name="external-link"/>
      </a>
    </div>
  </div>
  <div class="project-image">
    <a :href="props.deploy" target="_blank">
      <img :src="props.image[0]" :alt="props.image[1]">
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.project-content {
  position: relative;
  grid-area: 1 / 1 / -1 / 7;

  &__title {
    color: $lightest-slate;
    font-size: clamp(24px, 5vw, 28px);

    a {
      display: inline-block;
      color: inherit;
      position: relative;
      transition: $transition;

      &:hover, &:focus {
        color: $green;
      }
    }
  }

  &__description {
    z-index: 2;
    position: relative;
    padding: 25px;
    border-radius: $border-radius;
    box-shadow: 0 10px 30px -15px $navy-shadow;
    font-size: $fz-lg;
    color: $light-slate;
    background-color: $light-navy;
    transition: $transition;
  }

  &__tech-list {
    z-index: 2;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 25px 0px 10px;
    padding: 0px;

    li {
      margin: 0px 20px 5px 0px;
      color: $light-slate;
      font-family: $font-mono;
      font-size: $fz-xs;
      white-space: nowrap;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    margin-left: -10px;

    a {
      padding: 10px;
      color: inherit;
      transition: $transition;

      &:hover, &:focus {
        transform: translateY(-3px);
        color: $green;
      }
    }
  }
}

.project-image {
  z-index: 1;
  position: relative;
  height: 100%;
  border-radius: $border-radius;
  box-shadow: 0 10px 30px -15px $navy-shadow;
  transition: $transition;
  grid-area: 1 / 6 / -1 / -1;

  a {
    width: 100%;
    height: 100%;
    transition: $transition;

    &::before {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $green;
      opacity: 0.25;
      transition: $transition;
    }

    img {
      position: absolute;
      width: inherit;
      transition: transform 10s ease-in-out 0s;
    }

    &:hover {
      &::before {
        opacity: 0;
      }

      img {
        transform: translateY(-81%);
      }
    }
  }
}

@media (min-width: 768px) {
  .project-content {
    &__title {
      margin: 0px 0px 20px;
    }
  }
}

@media (max-width: 1080px) {
  .project-content {
    grid-column: 1 / 9;
  }
}

@media (max-width: 768px) {
  .project-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;

    &__title {
      color: $white;

      a {
        position: static;

        &::before {
          pointer-events: none;
          z-index: 0;
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    &__description {
      padding: 20px 0px;
      background-color: transparent;
      box-shadow: none;
    }
  }

  .project-image {
    grid-column: 1 / -1;
    height: 100%;

    a::before {
      border-radius: $border-radius;
    }

    img {
      display: none;
    }
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 30px 25px 20px;
  }
}
</style>