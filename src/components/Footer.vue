<template>
  <footer id="footer" class="bg-blue-g-1000 bg-fireopalxxx">
    <div class="footer container mx-auto py-4">
      <div class="flex flex-col justify-between">
        <p class>
          Made with
          <span class="icon-wrap icon-wrap--inline text-blue-200">
            <svg
              aria-hidden="true"
              focussable="false"
              alt="love heart"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </span>
          <span class="sr-only">love</span>
          by Grace &copy;{{ new Date().getFullYear() }}
        </p>
        <a
          href
          target="_blank"
          class="text-sm font-sans text-white hover:text-blue-300 hover:underline font-normal"
        >
          <span id="email" class="icon-wrap icon-wrap--inline text-blue-200 mr-1">
            <svg
              aria-hidden="true"
              focussable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>gracesnowdesign@gmail.com
        </a>
      </div>
      <div>
        <ul class="footer__links text-sm text-white">
          <li id="email">
            <a
              href="mailto:gracesnowdesign@gmail.com"
              class="footer__link"
              aria-label="Email Grace"
              target="_blank"
            >
              <Email-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>

          <li id="github">
            <a
              href="https://github.com/grace-snow/"
              class="footer__link"
              aria-label="Go to Github"
              target="_blank"
            >
              <Github-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>
          <li id="twitter">
            <a
              href="https://twitter.com/grace-snow/"
              class="footer__link"
              aria-label="Go to Twitter"
              target="_blank"
            >
              <Twitter-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>
          <li id="linkedin">
            <a
              href="https://www.linkedin.com/in/gracesnow/"
              class="footer__link"
              aria-label="Go to LinkedIn"
            >
              <Linkedin-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>
        </ul>
        <div class="text-sm font-sans">
          <a
            href="/rss.xml"
            class="text-white hover:text-blue-300 hover:underline font-normal"
          >RSS Feed</a> |
          <a
            href="/sitemap.xml"
            class="text-white hover:text-blue-300 font-normal hover:underline"
          >Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import EmailIcon from "../../static/icons/mail.svg";
import GithubIcon from "../../static/icons/github.svg";
import TwitterIcon from "../../static/icons/twitter.svg";
import LinkedinIcon from "../../static/icons/linkedin.svg";

export default {
  name: "Footer",
  components: {
    EmailIcon,
    GithubIcon,
    TwitterIcon,
    LinkedinIcon
  }
};
</script>

<style>
.footer {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  @apply font-display;
  letter-spacing: 0.02em;
  @apply text-blue-100;
}

.footer__links {
  display: flex;
  justify-content: flex-end;
  margin: 0 -0.25em;
}

.footer__links > * {
  flex: 0 1 1em;
  margin: 0.25em;
}

.footer__link {
  font-weight: 600;
  font-size: 1em;
  height: 2em;
  width: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__link svg {
  height: 1.5em;
  width: 1.5em;
}

.footer__link:hover {
  @apply bg-blue-300;
}

#email {
  margin-bottom: -0.25em;
}
</style>