<template>
  <TheHeader />
  <!-- <h1 class="text-center mt-10 uppercase font-bold text-3xl text-green-700">
   <h1>{{ $t('message') }}</h1>
   <fa-icon icon="user"/>
   <fa-icon :icon="['fab','font-awesome']"/>
  </h1> -->
  <router-view/>

  <div class="mx-10" elevation="2" max-width="600">
    <div class="col-md-12 p-5">
      <div class="mb-32">
        <TheRow container :gutter="30" class="p-5 mb-40">
        <TheColumn :xs="12" :md="6" :lg="6" class="flex justify-center items-center pa-6">
          <div class="flex justify-center">
            <img class="h-200 w-2/3 mt-20" src="/images/about.png" alt="alternative" />
          </div>
        </TheColumn>
        <TheColumn :xs="12" :md="6" :lg="6" class="flex justify-center items-center">
          <div class="mt-15">
            <div class="mt-10">
              <span class="text-2xl ml-4">ABOUT US</span>
                <div class="divide-x-4 divide-yellow-600 mt-6">
                  <a class="mx-2"></a>
                  <a href="#" class="px-4 py-1 text-3xl font-bold">Access professional<span class="text-yellow-600 text-3xl"> help</span> at your fingertip</a>
                </div>
                <p class="text-xl mt-6 whitespace-normal ml-4 text-gray-500">Our platform connects you to vetted professionals tailored to your need seamless 
                  communication and effective assistance are our top priority
                </p>
                <div class="flex items-center mt-8">
                  <img class="rounded h-15 w-15 mr-2 ml-3" src="/images/Anxiety.png" alt="">
                  <span class="text-md text-gray-500">Your Mental Health is our Priority</span>
                </div>
                <div class="flex items-center mt-3">
                  <img class="rounded h-15 w-15 mr-2 ml-3" src="/images/Advice.png" alt="">
                  <span class="text-md text-gray-500">Providing advice from top professionals</span>
                </div>
            </div> 
          </div>
        </TheColumn>
        </TheRow>
      </div>
      

      <div class="mb-40">
        <SectionHeader />

        <TheRow :gutter="50" class="mt-16">
          <TheColumn :xs="12" :lg="4">
            <TheCard cardTitle="Empowerment" cardText="With our platform we ensure our users get to feel empowered to take control of their lives and their sanity" cardImage="/images/goal.png" />
          </TheColumn>

          <TheColumn :xs="12" :lg="4">
            <TheCard  cardTitle="Community" cardText="A safe space for our users to communicate, commute, share experiences, get feedbacks and gain insigts on related subject" cardImage="/images/goal2.png" />
          </TheColumn>

          <TheColumn :xs="12" :lg="4">
            <TheCard cardTitle="Anonymity" cardText="With us your Identity is secure and safe, Considered and this enables trust between our users and us" cardImage="/images/goal3.png" />
          </TheColumn>

        </TheRow>
      </div>
    

      <div class="mt-10 mb-12">
        <div class="divide-y-4 divide-yellow-600 mt-8 text-center">
          <h3 class="px-4 py-4 text-2xl ml-1 font-bold">TESTIMONIALS</h3>
          <a href="#" class="px-12 py-1 text-xl"></a>
        </div>
        <p class="text-center p-3 tracking-wide text-xl text-gray-500">We beleive that everyone deserves access to the help they need regardless <br>
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
                <div class="divide-x-4 h-16 divide-yellow-600 mt-3">
                  <a class="mx-2"></a>
                  <a href="#" class="px-4 py-1 text-3xl font-bold">Ready For This Life Changing Adventure?</a>
                </div>
                <p class="text-xl mt-6 ml-3 text-gray-500">
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
