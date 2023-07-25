<template>
    <footer class="bg-gray-800 text-gray-300 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 class="text-white text-lg font-bold mb-4">Lawgeck<span class="text-orange-500">o</span></h3>
            <p class="text-sm">Lawgecko is here for all your id fugiamcepturi ipsam? <br>hddhbbihjfbbf <br>uibfjv</p>
            <div class="flex justify-center space-x-6 mb-4">
              <a href="#"><img src="/path/to/twitter-logo.png" alt="Twitter"></a>
              <a href="#"><img src="/path/to/facebook-logo.png" alt="Facebook"></a>
              <font-awesome-icon :icon="['fab', 'facebook']" />
              <a href="#"><img src="/path/to/instagram-logo.png" alt="Instagram"></a>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="#">
                <i class="fab fa-twitter text-orange-500 text-xl"></i>
              </a>
              <div class="icon">
                
              </div>
              <!-- <a href="#">
                <i class="fab fa-facebook-f text-orange-500 text-xl"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter text-orange-500 text-xl"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram text-orange-500 text-xl"></i>
              </a> -->
          </div>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-500 font-bold mb-4">Menu</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#">Home</a></li>
              <li class="my-2"><a href="#">About Us</a></li>
              <li class="my-2"><a href="#">Categories</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-500 font-bold mb-4">Categories</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#" >Family</a></li>
              <li class="my-2"><a href="#" class="my-2">Criminal Law</a></li>
              <li class="my-2"><a href="#" class="my-2">Mental Health</a></li>
              <li class="my-2"><a href="#" class="my-2">Finance</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-500 font-bold mb-4">About Us</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#">Contact Us</a></li>
              <li class="my-2"><a href="#">FAQ</a></li>
              <li class="my-2"><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-orange-500 pt-4">
          <div class="flex justify-between items-center">
            <div class="flex space-x-20">
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
  export default {
    name: 'TheFooter.vue',
  }
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  