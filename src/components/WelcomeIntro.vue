<template>
  <section class="intro page-width">
    <div class="intro__content">
      <h2 class="equals-decal">Who am I?</h2>
      <p>
        <strong>I'm Grace</strong>, a strategic designer and front end
        enthusiast based in Liverpool, UK.
      </p>
      <p>
        Beyond work, I love being outside, walking in the park, cuddling my
        cats, and supping craft ales in beer gardens with friends.
      </p>
      <g-link to="/about" class="btn">More about me</g-link>
    </div>
    <div class="intro__img">
      <g-image src="~/assets/images/gs_sefton.jpg" alt="Grace out in the park" class="sr-only" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style>
.intro {
  background: #1c5888;
  background: linear-gradient(to bottom, #1c5888 21%, #0f2e48 97%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c5888', endColorstr='#0f2e48',GradientType=0 );

  background: linear-gradient(to bottom, #256199 1%, #00182e 97%);

  color: #fff;
}

/* @screen sm? 560px was 480px */
@media (min-width: 560px) {
  .intro {
    display: flex;
    justify-content: space-between;
  }
}

.intro__content {
  @apply py-5;
  @apply px-10;
}

@screen sm {
  @apply py-12;
  @apply pr-0;
  @apply pl-5;
}

@screen lg {
  @apply pl-10;
}

.intro__content p {
  max-width: 40ch;
}

.intro__content h2 {
  color: #fff;
  text-shadow: 0 2px 4px #002b47;
}

.intro p {
  margin-bottom: 1em;
  text-shadow: 0 2px 4px #002b47;
}

.intro__img {
  min-width: 44vw;
  min-height: 300px;
  background-image: url("../assets/images/gs_sefton.jpg");
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 14vw 100%);
  mix-blend-mode: luminosity;
}
</style>