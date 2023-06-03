<script setup>
</script>

<template>
  <section id="about" class="about">
    <h2 class="about__title numbered-title">About me</h2>
    <div class="about__content">
      <div class="about__paragraphs">
        <p>
          Hello! My name is Hlib, and I enjoy developing web applications. My journey began
          in 2020 when I was introduced to web design. However, I didn't find it as captivating, so I didn't pursue it
          for
          long. Instead, I started learning layout with the help of a fantastic YouTube teacher,
          <a href="https://www.youtube.com/@FreelancerLifeStyle" target="_blank" class="highlighted">Freelancer
            Life Style</a>. Later on, I decided to elevate my skills in web development and explore frameworks, which
          led me
          to
          take the <a href="https://fullstackopen.com/en/" target="_blank" class="highlighted">Full Stack Open
          course</a>.
        </p>
        <p>
          After watching hundreds of YouTube videos, reading articles, and making attempts to create quality products,
          today I am working on an e-commerce website called <a href="https://etq-amsterdam-hlibsuprun.vercel.app/"
                                                                target="_blank" class="highlighted">ETQ Amsterdam</a>. I
          incorporate all the necessary modern
          technologies and concepts into it.
        </p>
        <p>
          Moving forward, I plan to delve into backend development. I already have some experience with Next.js and
          Express.js, as well as attempts to learn relational and non-relational databases. I believe that through this
          project, I will demonstrate my knowledge in practice and improve my abilities.
        </p>
        <p>
          Here are a few technologies I’ve been working with recently:
        </p>
      </div>
      <ul class="about__skills">
        <li class="about__skill">HTML5</li>
        <li class="about__skill">CSS3</li>
        <li class="about__skill">Scss</li>
        <li class="about__skill">Styled Components</li>
        <li class="about__skill">JavaScript (ES6+)</li>
        <li class="about__skill">TypeScript</li>
        <li class="about__skill">React</li>
        <li class="about__skill">Vue</li>
        <li class="about__skill">Git</li>
        <li class="about__skill">Vite</li>
        <li class="about__skill">Npm</li>
        <li class="about__skill">Yarn</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.about {
  max-width: 900px;

  &__title {
  }

  &__content {
  }

  &__paragraphs {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__skills {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    margin: 20px 0px 0px;
    padding: 0px;
    overflow: hidden;
  }

  &__skill {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: $font-mono;
    font-size: $fz-xs;

    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: $green;
      font-size: $fz-sm;
      line-height: 12px;
    }
  }
}
</style>