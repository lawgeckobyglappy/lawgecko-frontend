<template>
    <footer class="bg-gray-800 text-gray-300 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 class="text-white text-lg font-bold mb-4">Lawgeck<span class="text-orange-400">o</span></h3>
            <p class="text-sm">{{ $t('footer.text1') }} <br>{{ $t('footer.text2') }} <br> {{ $t('footer.text3') }} <br>{{ $t('footer.text4') }}</p>
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
            <h4 class="text-orange-400 font-bold mb-4">{{ $t('footer.menu') }}</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#">{{ $t('footer.home') }}</a></li>
              <li class="my-2"><a href="#">{{ $t('footer.about') }}</a></li>
              <li class="my-2"><a href="#">{{ $t('footer.categories') }}</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-400 font-bold mb-4">{{ $t('footer.categories') }}</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#" >{{ $t('footer.family') }}</a></li>
              <li class="my-2"><a href="#" class="my-2">{{ $t('footer.criminalLaw') }}</a></li>
              <li class="my-2"><a href="#" class="my-2">{{ $t('footer.mentalHealth') }}</a></li>
              <li class="my-2"><a href="#" class="my-2">{{ $t('footer.finance') }}</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-auto">
            <h4 class="text-orange-400 font-bold mb-4">{{ $t('footer.about') }}</h4>
            <ul class="text-sm">
              <li class="my-2"><a href="#">{{ $t('footer.contact') }}</a></li>
              <li class="my-2"><a href="#">{{ $t('footer.faq') }}</a></li>
              <li class="my-2"><a href="#">{{ $t('footer.help') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-orange-500 pt-4">
          <div class="flex justify-between items-center">
            <div class="flex space-x-10">
              <div class="text-xs text-gray-400">{{ $t('footer.copyright') }} &copy;, 2023.</div>
              <div class="text-xs text-gray-400">{{ $t('footer.allRightsReserved') }}.</div>
            </div>
            <nav class="space-x-4">
              <a href="#" class="text-xs text-gray-400">{{ $t('footer.termsOfService') }}</a>
              <a href="#" class="text-xs text-gray-400">{{ $t('footer.privacyPolicy') }}</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>

  export default {
    name: 'TheFooter.vue',
    
  };
  </script>