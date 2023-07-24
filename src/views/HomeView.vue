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
      <section class=" md:page-margin w-full flex justify-center items-center page-lineheight">

        <TheRow container :gutter="30" class="p-5 mt-2">
        <TheColumn :xs="12" :md="6" :lg="6" class="flex justify-center items-center pa-6">
          <div class="flex justify-center about-container">
            
            <img class="object-fill md:w-5/6 w-4/6" src="/images/about.png" alt="image on the header of people holding hands"/>
          </div>
        </TheColumn>
        <TheColumn :xs="12" :md="6" :lg="6" class="flex justify-center items-center">
          <div class="mt-15">
            <div class="mt-10">
              <span class="text-2xl ml-4">ABOUT US</span>
                <div class="divide-x-4 divide-secondary-color mt-6">
                  <a class="mx-2"></a>
                  <a href="#" class="px-4 py-1 text-3xl font-bold">Access professional<span class="text-secondary-color text-3xl"> help</span> at your fingertip</a>
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
      </section>
      
      
      <section class=" md:page-margin w-full justify-center items-center page-lineheight">
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
      </section>
      
    

      <div class="mt-10 mb-12">
        <div class="divide-y-4 divide-secondary-color mt-8 text-center">
          <h3 class="px-4 py-4 text-2xl ml-1 font-bold">TESTIMONIALS</h3>
          <a href="#" class="px-12 py-1 text-xl"></a>
        </div>
        <p class="mr-6 sm:mr-3 md:text-xl text-center sm:text-left text-light-dark-text text-xl sm:text-lg">We beleive that everyone deserves access to the help they need regardless <br>
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
                <div class="divide-x-4 h-16 divide-secondary-color mt-3">
                  <a class="mx-2"></a>
                  <a href="#" class="px-4 py-1 text-3xl font-bold">Ready For This Life Changing Adventure?</a>
                </div>
                <p class="text-xl mt-6 ml-3 text-gray-500">
                  Join us today and get access to our refined community <br>
                  feature structured towards helping you become better
                </p>

                <div class="mt-10 flex items-center sm:flex-row flex-col sm:justify-start gap-5">
                  <button class="bg-primary-color w-5/6 sm:w-52 border-2 hover:-translate-y-1 transition-all border-gray-800 py-4 shadow-lg move" id="create-account">
                    <router-link :to="{ name: 'sign-up' }">{{$t("header.getStarted")}}</router-link>
                  </button>
                  <button class="bg-transparent border-2 w-5/6 sm:w-52 shadow-lg hover:-translate-y-1 transition-all border-primary-color py-4" id="sign-inn">
                    <router-link :to="{ name: '' }">{{$t("header.learnMore")}}</router-link>
                  </button>
                </div>
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

<style scoped>
.about-container{
    background-image: url("/public//images/circles.png");
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
  cursor: pointer;
  padding: 10px 35px;
  border-radius: 60px;
  cursor: pointer;
  white-space: nowrap;
}

#create-account {
  background-color: #6cdfbd;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}

#sign-inn {
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}

.icon-active {
  cursor: pointer;
}
</style>
