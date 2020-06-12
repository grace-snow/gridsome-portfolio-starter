<template>
  <Layout>
    <Welcome id="welcome" />

    <Intro id="intro" />

    <!-- <section class="welcome">
      <div
        class="hero container mx-auto flex flex-col sm:flex-row justify-between py-16 min-h-screen"
      >
        <div class="text-4xl font-bold font-display w-full sm:w-3/5 text-center xs:text-left">
          <h1 class="welcome__h1 text-blue-600">
            <span
              class="welcome__h1-1"
              style="font-size: min(max(24px, 4.1vw), 60px);"
            >The Web is for</span>
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
              <span class="margin-right">Contact me via:</span>
              <span class="welcome__links text-blue-600">
                <a href class="welcome__link">Email</a>
                <a href class="welcome__link">LinkedIn</a>
                <a href class="welcome__link">Twitter</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>-->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        This gridsome theme was forked from my
        <a href="https://andremadarang.com">personal website</a>. I added more features and decided to release it as an open source project. Check it out on
        <a
          href="https://github.com/drehimself/gridsome-portfolio-starter"
        >GitHub</a> or check out the
        <a href="https://www.youtube.com/watch?v=uHo6o1TNQeE">screencast I did</a>. Feel free to use it for your own site or projects! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, repellat. Dolores iure, quas perspiciatis rerum quaerat atque eum repellat autem.
      </p>

      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <div id="projectsLoop">
      <div
        v-for="project in $page.projects.edges"
        :key="project.id"
        class="post border-gray-400 border-b mb-12"
      >
        <g-link :to="project.node.path">
          <div class="flex projectItem bg-dark">
            <div class="projectInfo">
              <h2 class="text-3xl font-bold text-copy-primary">{{ project.node.title }}</h2>
              <h4 class="projectRole">{{ project.node.role }}</h4>
              <p class="projDesc text-lg mb-4">{{ project.node.excerpt }}</p>
              <g-link
                :to="project.node.path"
                class="btn font-bold uppercase"
              >{{ project.node.lprojectName }}</g-link>
            </div>
            <div class="projectImg">
              <img :src="project.node.listingImage" :alt="project.node.listingImageAlt" />
            </div>
          </div>
        </g-link>
      </div>
    </div>

    <div id="blogsLoop" class="bg-fireopal"></div>

    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <ul class="text-lg sm:text-xl space-y-6">
          <li class="checkmark">
            <div>Project One</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark">
            <div>Project Two</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark">
            <div>Project Three</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark">
            <div>Project Four</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/avatar.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div
            class="flex-1 text-lg sm:text-xl ml-6"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>

        <div class="responsive-container">
          <iframe
            class="responsive-iframe w-full h-full top-0 left-0 border-0"
            src="https://www.youtube.com/embed/uHo6o1TNQeE"
            style="border:0;"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Contact me:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <p class="mb-12">
            Static sites cannot submit forms on their own. However, services like
            <a
              href="https://www.netlify.com/docs/form-handling"
            >Netlify Forms</a> or
            <a href="https://formspree.io">FormSpree</a> can help you do this without a backend.
          </p>

          <div class="text-lg sm:text-lg mb-16">
            <form action="#" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-blue-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
  </Layout>
</template>

<page-query>
  query Projects {
    projects: allProject (sortBy: "sortOrder", order: ASC) {
      edges {
        node {
          id
          path
          title
          role
          year
          excerpt
          projectName
          listingImage
          listingImageAlt
        }
      }
    }
  }
</page-query>

<script>
import Welcome from "~/components/WelcomeHero.vue";
import Intro from "~/components/WelcomeIntro.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Welcome,
    Intro
  }
};
</script>

<style lang="css">
</style>