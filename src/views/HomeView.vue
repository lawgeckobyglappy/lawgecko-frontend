<template>
  <TheHeader />
  <div class="mx-" elevation="" max-width="">
    <div class="col-md-12 p-5">
      <section class=" md:page-margin w-full flex justify-center items-center page-lineheight">

        <TheRow container :gutter="30" class="p-5 mt-2">
        <TheColumn :xs="12" :md="6" :lg="6" class="flex justify-center items-center pa-6">
          <div class="flex justify-center about-container">
            
            <img class="object-fill max-w-full h-auto " src="/images/about.png" alt="image on the header of people holding hands"/>
          </div>
        </TheColumn>
        <TheColumn :xs="12" :md="6" :lg="6" class="flex justify-center items-center">
          <div class="">
            <div class="mt-10">
              <span class="text-2xl">{{$t('about.aboutus')}}</span>
                <div class="flex flex-1 mt-4">
                  <div class="inline-block h-[70px] min-h-[1em] w-1.5 self-stretch bg-secondary-color rounded-lg"></div>
                  <a href="#" class="ml-4 px-2 py-1 text-3xl font-bold md:text-center sm:text-center">{{$t('about.heading1')}} <span class="text-secondary-color text-3xl md:text-center sm:text-center">{{$t('about.heading2')}}</span> {{$t('about.heading3')}}</a>
                </div>
                <p class="text-xl mt-6 whitespace-normal ml- text-gray-500">{{$t('about.paragraph')}}</p>
                <div class="flex items-center mt-8">
                  <img class="rounded h-15 w-15 mr-2" src="/images/Anxiety.png" alt="">
                  <span class="text-md text-gray-500">{{$t('about.list1')}}</span>
                </div>
                <div class="flex items-center mt-3">
                  <img class="rounded h-15 w-15 mr-2" src="/images/Advice.png" alt="">
                  <span class="text-md text-gray-500">{{$t('about.list2')}}</span>
                </div>
            </div> 
          </div>
        </TheColumn>
        </TheRow>
      </section>
      
      <section class="md:page-margin w-full justify-center items-center page-lineheight">
        <div class="mb-10 mt-24">
        <SectionHeader />

        <TheRow :gutter="50" class="mt-16">
          <TheColumn :xs="12" :lg="4">
            <TheCard :cardTitle="$t('goal.cardtitle1')" :cardText="$t('goal.platformDescription')" cardImage="/images/goal.png" />
          </TheColumn>

          <TheColumn :xs="12" :lg="4">
            <TheCard  :cardTitle="$t('goal.community')" :cardText="$t('goal.safeSpace')" cardImage="/images/goal2.png" />
          </TheColumn>

          <TheColumn :xs="12" :lg="4">
            <TheCard :cardTitle="$t('goal.anonymity')" :cardText="$t('goal.identitySecurity')" cardImage="/images/goal3.png" />
          </TheColumn>

        </TheRow>
        </div>
      </section>
    
      <section class= "md:page-margin w-full justify-center items-center page-lineheight">
        <div class="mb-10 mt-24">
        <div class="divide-y-4 divide-secondary-color mt-8 text-center">
          <h3 class="px-4 py-4 text-2xl ml-1 font-bold">{{$t('testimonials.head')}}</h3>
          <a href="#" class="px-12 py-1 text-xl"></a>
        </div>
        <p class="mr-6 sm:mr-3 md:text-xl text-center sm:text-left text-light-dark-text text-xl sm:text-lg">{{$t('testimonials.paragraph1')}} <br>
          {{$t('testimonials.paragraph2')}} <br>{{$t('testimonials.paragraph3')}}
        </p>
        </div>

        <div>
          <v-sheet class="" max-width="">
            <v-slide-group v-model="model" class="pa-4" show-arrows :icon="['fab', 'arrow-left']">
              <v-slide-group-item :key="n" v-slot="{ toggle}" >
                <v-card class="hover:translate-y-1 mx-4" height="300" width="400"  :style=" 'border: 1px solid black;'" @click="toggle">
                  <v-card-title>

                    <div class="flex mt-5 items-center font-bold">
                        <img class="rounded h-15 w-15 mr-2" src="/images/user3.png" alt="">
                        Michel Johnson
                    </div>
                      
                  </v-card-title>
                  <v-card-text class="mt-5">
                    <span class="text-xl text-gray-500">
                      {{ $t('testimonials.testimonial5') }}
                    </span>
                  </v-card-text>

                  <v-card-footer class="mt-8 ml-16">
                    <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
                    <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
                    <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
                    <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
                    <fa-icon :icon="['fas', 'star']" class="text-secondary-color"/>
                  </v-card-footer>
                </v-card>
              
              </v-slide-group-item>
              <TestimonialCard cardProfile="/images/user1.png" ProfileName="Patricia Themba" :TestimonyText="$t('testimonials.testimonial1')"/>
              <TestimonialCard cardProfile="/images/user2.png" ProfileName="Rebecca Ajose" :TestimonyText="$t('testimonials.testimonial2')"/>
              <TestimonialCard cardProfile="/images/user3.png" ProfileName="Rita Nchang" :TestimonyText="$t('testimonials.testimonial3')"/>
              <TestimonialCard cardProfile="/images/user1.png" ProfileName="Jane Doe" :TestimonyText="$t('testimonials.testimonial4')"/>
            </v-slide-group>
          </v-sheet>
        </div>
      </section>
      
      <section class= "md:page-margin w-full justify-center items-center page-lineheight mb-16 mt-40">
        <TheRow container :gutter="80" class="p-5">
          <TheColumn :xs="12" :md="6" :lg="6" class=" pa-6">
            <div class="flex justify-center items-center">
              <img class="object-fill h-50 w-96" src="/images/image.png" alt="alternative" />
            </div>
          </TheColumn>
          <TheColumn :xs="12" :md="6" :lg="6" class=" pa-5">
            <div class="flex justify-between items-center">
              <div class=" items-start justify-evenly flex-col-reverse md:flex-row">
                <div class="flex flex-1 mt-4">
                  <div class="inline-block h-[70px] min-h-[1em] w-1.5 bg-secondary-color rounded-lg"></div>
                  <a href="#" class="ml-4 px-2 py-1 text-3xl font-bold md:text-center sm:text-center">{{$t("section.heading")}}</a>
                </div>

                <div>
                  <p class="text-xl whitespace-normal mt-4 text-gray-500">
                    {{$t("section.paragraph1")}} <br>{{$t("section.paragraph2")}}
                  </p>
                </div>

                <div class="mt-10 flex items-center sm:flex-row flex-col sm:justify-start gap-5">
                  <button class="bg-primary-color w-5/6 sm:w-52 border-2 hover:-translate-y-1 transition-all border-gray-800 py-4 shadow-lg move" id="create-account">
                    <router-link :to="{ name: 'sign-up' }">{{$t("section.button1")}}</router-link>
                  </button>
                  <button class="bg-transparent border-2 w-5/6 sm:w-52 shadow-lg hover:-translate-y-1 transition-all border-primary-color py-4" id="sign-inn">
                    <router-link :to="{ name: '' }">{{$t("section.button2")}}</router-link>
                  </button>
                </div>
              </div> 
            </div>
          </TheColumn>
        </TheRow>
      </section>
    </div>
  </div>
  <TheFooter/> 
</template>



<script>
import TheCard from '@/components/TheCard.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/layouts/TheFooter.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';

export default {
  name: 'App',
  
  components:{
    TheHeader,
    TheFooter,
    TheCard,
    SectionHeader,
    TestimonialCard
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
