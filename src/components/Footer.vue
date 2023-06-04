<script setup>
import BaseIcon from "@/components/Base/BaseIcon.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__social">
      <ul>
        <li>
          <a href="https://github.com/hlibsuprun" class="social__link" target="_blank">
            <BaseIcon height="20" width="20" icon-name="github"/>
          </a>
        </li>
        <li>
          <a
              href="https://www.linkedin.com/in/hlibsuprun/"
              class="social__link" target="_blank">
            <BaseIcon height="20" width="20" icon-name="linkedin"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__credit">
      <a href="https://github.com/hlibsuprun/portfolio" target="_blank">
        <div>Built by Hlib Suprun</div>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;

  &__social {
    display: none;
  }

  &__credit a {
    color: $light-slate;
    font-family: $font-mono;
    font-size: $fz-xxs;
    line-height: 1;
  }
}

@media (max-width: 768px) {
  .footer {
    &__social {
      display: block;
      width: 100%;
      max-width: 270px;
      margin: 0px auto 10px;
      color: $light-slate;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        margin: 0px;

        a {
          color: inherit;
          padding: 10px;

          &:hover, &:focus {
            color: $green;
          }
        }
      }
    }
  }
}
</style>