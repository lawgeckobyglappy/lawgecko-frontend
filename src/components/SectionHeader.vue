<template>
  <div
    data-aos="fade-down"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-out"
  >
    <div class="divide-y-4 divide-secondary-color mt-8 text-center">
      <h3 class="px-4 py-4 text-2xl ml-1 font-bold">
        {{ $t("goal.ourgoal") }}
      </h3>
      <a href="#" class="px-12 py-1 text-xl"></a>
    </div>
    <p
      class="mr-6 sm:mr-3 md:text-xl text-center sm:text-left text-light-dark-text text-xl sm:text-lg"
    >
      {{ $t("goal.paragraph1") }} <br />
      {{ $t("goal.paragraph2") }} <br />{{ $t("goal.paragraph3") }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
