<template>
<div class="relative">
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    class="text-black bg-transparent focus:outline-none font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center "
    type="button"
  >
  <img :src="`/flag_${$i18n.locale}.png`" alt="flag" class="w-8 h-8 mr-3">
    {{$i18n.locale.toUpperCase()}}
    <svg
      id="svg-rot"
      class="w-2.5 h-2.5 ml-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div
    id="dropdown"
    class="z-10 hidden bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li>
        <a
          href="#"
          @click.prevent="setLocale('en')"
          class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
          <img src="../../public/flag_en.png" class="w-8 h-8 mr-3" alt="us flag">
          <span>English</span>
          </a
        >
      </li>
      <li>
        <a
          href="#"
          @click.prevent="setLocale('fr')"
          class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
          <img src="../../public/flag_fr.png" class="w-8 h-8 mr-3" alt="french flag">
          <span>French</span>
          </a
        >
      </li>
      
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      langs: ['en', 'fr'] 
    }
  },
  methods:{
    setLocale(locale){
      this.$i18n.locale = locale
    }
  },
  mounted() {
    document
      .getElementById("dropdownDefaultButton")
      .addEventListener("click", () => {
        document.getElementById("dropdown").classList.toggle("hidden");
        document.getElementById("svg-rot").classList.toggle("arrow")
      });
  },
};
</script>

<style scoped>
.arrow{
  transform:rotate(180deg)
}
</style>
