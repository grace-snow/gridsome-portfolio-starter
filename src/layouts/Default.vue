<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normalxxx flex flex-col min-h-screen"
    :class="theme"
  >
    <header class="header bg-blue-g-1000 sticky top-0">
      <nav
        class="container mx-auto flex flex-wrap justify-between items-center h-16 font-display font-bold"
      >
        <div>
          <g-link v-if="theme === 'theme-light'" class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
          <g-link v-else to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
        </div>
        <div class="blockxxx nav-wrapper">
          <button
            type="button"
            @click="toggle"
            class="px-3 py-2 border-none text-blue-100 hover:text-blue-300 nav-toggle"
            :class="isOpen ? 'is-open': ''"
          >
            <span v-if="!isOpen">menu</span>
            <span v-else>close</span>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'is-open': ''"
        >
          <li class="mb-6 lg:mb-0">
            <search-input />
          </li>
          <li>
            <theme-switcher :theme="theme" @themeChanged="updateTheme" />
          </li>
          <li>
            <a
              v-if="$route.path === '/'"
              href="/#projects"
              v-scroll-to="'#projects'"
              class="text-copy-primary hover:text-gray-600"
            >Projects</a>
            <g-link v-else to="/#projects" class="text-copy-primary hover:text-gray-600">Projects</g-link>
          </li>
          <li>
            <a
              v-if="$route.path === '/'"
              href="/#about"
              v-scroll-to="'#about'"
              class="text-copy-primary hover:text-gray-600"
            >About</a>
            <g-link v-else to="/#about" class="text-copy-primary hover:text-gray-600">About</g-link>
          </li>
          <li>
            <a
              v-if="$route.path === '/'"
              href="/#contact"
              v-scroll-to="'#contact'"
              class="text-copy-primary hover:text-gray-600"
            >Contact</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">Contact</g-link>
          </li>
          <li>
            <g-link to="/projects" class="text-copy-primary hover:text-gray-600">Work List</g-link>
          </li>
          <li>
            <g-link to="/blog" class="text-copy-primary hover:text-gray-600">Blog</g-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SearchInput from "../components/SearchInput";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Footer from "~/components/Footer";
// import Header from "~/components/Header";

export default {
  components: {
    SearchInput,
    ThemeSwitcher,
    // Header,
    Footer
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },
  data() {
    return {
      isOpen: false,
      theme: ""
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    }
  }
};
</script>

<style src="../css/main.css" />
