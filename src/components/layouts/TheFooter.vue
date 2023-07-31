<template>
    <footer class="bg-gray-800 text-gray-300 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 class="text-white text-lg font-bold mb-4">Lawgeck<span class="text-orange-400">o</span></h3>
            <p class="text-sm">Lawgecko is here to connect you to vetted <br>professionals tailored to your need. Seamless<br> communication and effective assistance are our <br> top priority.</p>
            <div class="flex justify-left my-2 space-x-12">
              <a href="#">
                <fa-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="#">
                <fa-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="#">
                <fa-icon :icon="['fab', 'instagram']" />
              </a>
          </div>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-400 font-bold mb-4">Menu</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#">Home</a></li>
              <li class="my-2"><a href="#">About Us</a></li>
              <li class="my-2"><a href="#">Categories</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-400 font-bold mb-4">Categories</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#" >Family</a></li>
              <li class="my-2"><a href="#" class="my-2">Criminal Law</a></li>
              <li class="my-2"><a href="#" class="my-2">Mental Health</a></li>
              <li class="my-2"><a href="#" class="my-2">Finance</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-400 font-bold mb-4">About Us</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#">Contact Us</a></li>
              <li class="my-2"><a href="#">FAQ</a></li>
              <li class="my-2"><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-orange-500 pt-4">
          <div class="flex justify-between items-center">
            <div class="flex space-x-10">
              <div class="text-xs text-gray-400">Copyright &copy;, 2023.</div>
              <div class="text-xs text-gray-400">All Rights Reserved.</div>
            </div>
            <nav class="space-x-4">
              <a href="#" class="text-xs text-gray-400">Terms of Service</a>
              <a href="#" class="text-xs text-gray-400">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/fontawesome-free';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-free';

  export default {
    name: 'TheFooter.vue',
    components: {FontAwesomeIcon,},
    
    mounted() {
      
      library.add(faFacebookF, faTwitter, faInstagram);
    },
  }
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
