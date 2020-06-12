<template>
  <section class="welcome">
    <div
      class="hero container mx-auto flex flex-col sm:flex-row justify-between py-16 min-h-screen welcome-outer"
    >
      <div class="text-4xl font-bold font-display w-full sm:w-3/5 welcome-inner">
        <h1 class="welcome__h1 text-blue-600">
          <span class="welcome__h1-1" style="font-size: min(max(24px, 4.1vw), 60px);">The Web is for</span>
          <br />
          <span class="welcome__h1-2" style="font-size: min(max(44px, 12vw), 130px);">Everyone</span>
        </h1>
        <h2
          class="welcome__h2"
          style="font-size: min(max(20px, 3.25vw), 36px);"
        >I care about making web stuff that's easy to use and inclusive.</h2>
        <div class="welcome__cta">
          <h3
            class="welcome__h3"
            style="font-size: min(max(17px, 2.2vw), 22px)"
          >Want to work together?</h3>
          <p style="font-size: min(max(15px, 1.8vw), 18px);">
            <span class="cta">Contact me via:</span>
            <span class="welcome__links text-blue-600">
              <a href="mailto:gracesnowdesign@gmail.com" class="welcome__link">Email</a>
              <a
                href="https://www.linkedin.com/in/gracesnow/"
                target="_blank"
                rel="noopener noreferrer"
                class="welcome__link"
              >LinkedIn</a>
              <a
                href="https://twitter.com/grace-snow/"
                class="welcome__link"
                aria-label="Go to Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >Twitter</a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- end hero -->
  </section>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<style>
/* bg patterns */
.welcome-outer {
  min-height: calc(100vh - 60px);
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* @screen sm */
@media (min-width: 560px) {
  .welcome-outer {
    flex-direction: row;
  }
  .welcome-inner {
    width: 60%;
  }
}
.welcome-outer:before,
.welcome-outer:after {
  position: absolute;
  content: "";
  right: 0;

  z-index: -1;
}

.welcome-outer:before {
  top: 0;
  background: #f0faff;
  opacity: 0.8;
  height: 88vh;
  width: 34vw;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
}

.welcome-outer:after {
  bottom: 0;
  background: #c9e2f5;
  opacity: 0.74;
  height: 100vh;
  width: 44vw;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  z-index: -2;
}

.welcome__h1 {
  @apply text-blue-600;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 0.85;
  margin-bottom: 1vw;
  white-space: nowrap;
  position: relative;
}

.welcome__h1-1 {
  font-size: 32px;
}

@media screen and (max-width: 260px) {
  .welcome__h1 {
    margin-bottom: 10px;
    line-height: 1.1rem;
  }
  .welcome__h1-1 {
    font-size: 1.2rem !important;
  }
  .welcome__h1-2 {
    font-size: 2rem !important;
    line-height: 30px;
    white-space: normal;
  }
}

.welcome__h1-2 {
  position: relative;
  margin-left: -0.75vw;
  font-size: 50px;
}
.welcome__h1-2:before {
  position: absolute;
  content: "";
  width: 50vw;
  left: -50vw;
  background-color: currentColor;
  opacity: 0.4;
  height: 18%;
  bottom: 52%;
}
.welcome__h1-2:after {
  position: absolute;
  content: "";
  width: 50vw;
  left: -50vw;
  background-color: currentColor;
  opacity: 0.4;
  height: 18%;
  bottom: 25%;
}

.welcome__h2 {
  max-width: 30ch;
  margin-bottom: 10vh;
}

.welcome__h3 {
  font-size: 22px;
  margin-bottom: 5px;
}

.cta {
  @apply font-sans;
  margin-right: 20px;
}

.welcome__links {
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
}

.welcome__link {
  position: relative;
  margin-right: 40px;
  text-decoration: underline;
  @apply text-blue-600;
}

.welcome__link:before {
  content: "";
  position: absolute;
  left: -2%;
  bottom: -2%;
  height: 104%;
  width: 0;
  z-index: -1;
  transition: none;
  @apply bg-accent-100;
  transition: all 0.2s ease-in;
}

.welcome__link:hover {
  @apply text-blue-800;
}

.welcome__link:hover:before {
  width: 104%;
}

.welcome__link:after {
  position: absolute;
  content: "/";
  right: -23px;
  color: currentColor;
}
.welcome__link:last-of-type {
  margin-right: 0;
}
.welcome__link:last-of-type:after {
  content: "";
}
</style>