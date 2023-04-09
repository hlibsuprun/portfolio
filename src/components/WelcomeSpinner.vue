<script setup></script>

<template>
  <div class="wrapper">
    <div class="logo">
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <path
              d="M47.027 43.5892V47.7679H32.9173V43.5892H47.027ZM34.5696 33V59H29V33H34.5696ZM51 33V59H45.4489V33H51Z"
              fill="#64FFDA"
            />
            <polygon
              id="Shape"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            ></polygon>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $dark-navy;
  opacity: 1;
  animation: fade-out 0.25s $easing forwards;
  animation-delay: 2.25s;
}

.logo {
  width: 100px;
  height: 115px;
  color: $green;
  fill: none;
  transition: $transition;
  user-select: none;
  transform: scale(1);
  opacity: 1;
  animation: shrink 1s forwards;
  animation-delay: 2s;

  svg {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 2.5s forwards;
  }

  path {
    opacity: 0;
    animation: fade-in 0.5s forwards;
    animation-delay: 1.5s;
  }
}

@keyframes draw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
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
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes shrink {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
