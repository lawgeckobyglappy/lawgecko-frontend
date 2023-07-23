<template>
  <header class="back-gd w-full h-screen overflow-x-hidden">
    <div class="header z-99 w-full">
      <nav>
        <div class="logo">
          <img src="/logo.svg" alt="lawgecko logo" class="w-40" />
        </div>
        <ul v-show="!mobile" class="navigation">
          <li>
            <router-link class="link" :to="{ name: 'home' }">{{
              $t("header.home")
            }}</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">{{
              $t("header.about")
            }}</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">{{
              $t("header.categories")
            }}</router-link>
          </li>
        </ul>
        <div v-show="!mobile" class="authorization">
          <button>
            <router-link class="" :to="{ name: '' }">{{
              $t("header.signIn")
            }}</router-link>
          </button>
          <button id="get-started" class="move">
            <router-link :to="{ name: 'sign-up', path:'/signup' }">{{
              $t("header.signUp")
            }}</router-link>
          </button>
        </div>
        <LanguageSwitcher />
        <Transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li>
              <router-link class="link" :to="{ name: 'home' }">{{
                $t("header.home")
              }}</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }">{{
                $t("header.about")
              }}</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }">{{
                $t("header.categories")
              }}</router-link>
            </li>
          </ul>
        </Transition>
        <div v-show="mobile">
          <fa-icon
            :icon="['fas', 'bars']"
            :class="{ 'icon-active': mobileNav }"
            @click="toggleMobileNav"
          />
        </div>
      </nav>
    </div>
    <section
      class="smscreen-margin md:page-margin w-full flex justify-center items-center page-lineheight"
    >
      <div class="flex items-start justify-evenly flex-col-reverse md:flex-row">
        <div class="md:w-2/5">
          <i18n path="" tag="label" for="header.title">
              <h1
                class="text-center sm:text-left text-heading-text text-2xl mr-5 sm:mr-2 sm:text-4xl font-bold mb-10"
              > {{$t('header.title-1')}} <span class='text-secondary-color'> {{$t('header.commute')}}</span> {{ $t('header.title-2') }} <span class="text-secondary-color">{{ $t('header.title-3') }}</span>
            </h1>
            </i18n>
          <p
            class="mr-6 sm:mr-3 md:text-xl text-center sm:text-left text-light-dark-text text-xl sm:text-lg"
          >
            {{ $t("header.intro") }}
          </p>
          <div
            class="mt-10 flex items-center sm:flex-row flex-col sm:justify-start gap-5"
          >
            <button
              class="bg-primary-color w-5/6 sm:w-52 border-2 hover:-translate-y-1 transition-all border-gray-800 py-4 shadow-lg"
            >
              <router-link :to="{ name: '' }">{{
                $t("header.getStarted")
              }}</router-link>
            </button>
            <button
              class="bg-transparent border-2 w-5/6 sm:w-52 shadow-lg hover:-translate-y-1 transition-all border-primary-color py-8"
            >
              <router-link :to="{ name: '' }">{{
                $t("header.learnMore")
              }}</router-link>
            </button>
          </div>
          <div
            class="mr-4 flex justify-center sm:justify-start items-center mt-5 gap-8"
          >
            <div class="text-center">
              <h3 class="font-bold text-lg sm:text-2xl text-heading-text">600+</h3>
              <p>{{ $t("header.personelle") }}</p>
            </div>
            <div class="text-center">
              <h3 class="font-bold text-lg sm:text-2xl text-heading-text">15K</h3>
              <p>{{ $t("header.activeUSer") }}</p>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 w-full arrange sm:inherit mb-7">
          <img
            class="md:w-4/6 w-3/6"
            src="../assets/images/header-img.png"
            alt="image on the header of people holding hands"
          />
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
  name: "NavBar",
  data() {
    return {
      mobileNav: null,
      mobile: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  components: {
    LanguageSwitcher,
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
      if (this.windowWidth <= 850) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style scoped>
.icon {
  font-size: 30px;
  cursor: pointer;
  transition: 0.8s ease all;
}
.header {
  background-color: transparent;
  /* position: fixed; */
  transition: 0.5s ease all;
}
nav {
  /* position: relative; */
  display: flex;
  flex-direction: row;
  padding: 10px;
  transition: 0.5s ease all;
  width: 95%;
  margin: 0 auto;
  font-size: 17px;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
}
.logo {
  flex: 1;
}
.navigation {
  display: flex;
  flex: 2;
  margin: 0;
  padding: 0;
  justify-content: center;
}
li {
  padding: 16px;
  margin-left: 16px;
}
li button {
  border: 1px solid;
}
.link {
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 4px solid transparent;
}
.link:hover {
  border-color: #6cdfbd;
}
.authorization {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
button {
  cursor: pointer;
  padding: 10px 35px;
  border-radius: 60px;
  cursor: pointer;
  white-space: nowrap;
}
#get-started {
  background-color: #6cdfbd;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}
.icon-active {
  cursor: pointer;
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 90%;
  height: 100%;
  max-width: 250px;
  background-color: white;
  top: 0;
  left: 0;
  padding-top: 20px;
  border-right: 2px solid rgb(229, 229, 229);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
