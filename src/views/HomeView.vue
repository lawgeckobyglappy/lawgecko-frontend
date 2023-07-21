<template>
  <TheHeader />
  <!-- <h1 class="text-center mt-10 uppercase font-bold text-3xl text-green-700">
   <h1>{{ $t('message') }}</h1>
   <fa-icon icon="user"/>
   <fa-icon :icon="['fab','font-awesome']"/>
  </h1> -->
  <router-view/>

  <div class="w-150">
    <div class="col-md-12 p-5">
      <TheRow container :gutter="30" class="p-5 gap-">
        <TheColumn :xs="12" :md="6" :lg="6" class=" pa-6">
          <div class="flex justify-center">
            <img class=" h-180 w-160" src="/images/about.png" alt="alternative" />
          </div>
        </TheColumn>
        <TheColumn :xs="12" :md="6" :lg="6" class=" pa-5">
          <div class="mt-15">
            <div class="mt-10">
              <span class="text-xl">ABOUT US</span>
              <font-awesome-icon icon="fa-solid fa-user"> </font-awesome-icon>
                <div class="divide-x-4 divide-yellow-600 mt-3">
                  <a class="mx-2"></a>
                  <a href="#" class="px-4 py-1 text-xl font-bold">Access professional<span class="text-yellow-600 text-lg"> help</span> at your fingertip</a>
                </div>
                <p class="text-sm mt-3">Our platform connects you to vetted professionals tailored to your need seamless 
                  communication and effective assistance are our top priority
                </p>
                <div class="mt-3">
                  <svg
                    id="svg-icon"
                    class="w-2.5 h-2.5 ml-2.5 text-yellow-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"/>
                  </svg>
                  <span class="text-sm">Your Mental Health is our Priority</span>
                </div>
                <div class="mt-3">
                  <svg
                    id="svg-icon"
                    class="w-2.5 h-2.5 ml-2.5 text-yellow-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"/>
                  </svg>
                  <span class="text-sm">Providing advice from top professionals</span>
                </div>
            </div> 
          </div>
        </TheColumn>
      </TheRow>



    <SectionHeader />

    <TheRow :gutter="50" class="mt-10">
      <TheColumn :xs="12" :lg="4">
        <TheCard />
      </TheColumn>

      <TheColumn :xs="12" :lg="4">
        <TheCard />
      </TheColumn>

      <TheColumn :xs="12" :lg="4">
        <TheCard />
      </TheColumn>

    </TheRow>

    <div class="mt-10">
      <div class="divide-y-4 divide-yellow-600 mt-8 text-center">
        <h3 class="px-4 py-4 text-xl ml-1 font-bold">TESTIMONIALS</h3>
        <a href="#" class="px-12 py-1 text-xl"></a>
      </div>
      <p class="text-center p-3 tracking-wide">We beleive that everyone deserves access to the help they need regardless <br>
        of their background or abilities. We are committed to providing <br>
        accesible, affordable services to help you overcome challenges
      </p>
    </div>

    <TestimonialSlide />

     <TheRow container :gutter="30" class="p-5 gap-">
        <TheColumn :xs="12" :md="6" :lg="6" class=" pa-6">
          <div class="flex justify-center items-center">
            <img class="object-fill h-50 w-96" src="/images/image.png" alt="alternative" />
          </div>
        </TheColumn>
        <TheColumn :xs="12" :md="6" :lg="6" class=" pa-5">
          <div class="mt-15 ">
            <div class="mt-10">
                <div class="divide-x-4 divide-yellow-600 mt-3">
                  <a class="mx-2"></a>
                  <a href="#" class="px-4 py-1 text-xl font-bold">Ready For This Life Changing <br>
                     Adventure?</a>
                </div>
                <p class="text-md mt-3 text-sm">
                  Join us today and get access to our refined community <br>
                  feature structured towards helping you become better
                </p>
            </div> 
          </div>
        </TheColumn>
      </TheRow>

    </div>
  </div>

  

</template>



<script>
import TheHeader from '@/components/TheHeader.vue';
import TheCard from '@/components/TheCard.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import TestimonialSlide from '@/components/TestimonialSlide.vue';

export default {
  name: 'App',
  
  components:{
    TheHeader,
    TheCard,
    SectionHeader,
    TestimonialSlide
  }
};
</script>

<style scoped></style>
