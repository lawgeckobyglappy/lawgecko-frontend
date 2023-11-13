<template>
  <h3 class="text-lg font-medium">{{ label }}</h3>
  <div class="grid grid-cols-3 gap-5">
    <label class="font-bold col-span-2 block">
      Street
      <input
        :class="{ 'error': street === '' }"
        class="font-normal block mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        @input="$emit('update:street', $event.target.value)"
        :value="street"
        ref="streetRef"
        placeholder="Aboyeji Street"/>
    </label>
  
    <label class="block font-bold">
      Number
      <input
        class="font-normal block mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        @input="$emit('update:streetNumber', $event.target.value)"
        :value="streetNumber"
        placeholder="11"/>
    </label>
  
    <label class="block font-bold -mt-4">
      Postcode
      <input
        class="font-normal block mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        @input="$emit('update:postcode', $event.target.value)"
        :value="postcode"
        placeholder="100001"/>
    </label>
  
    <label class="block font-bold -mt-4">
      City
      <input
        class="font-normal block mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        @input="$emit('update:city', $event.target.value)"
        :value="city"
        placeholder="Lagos"/>
    </label>
  
    <label class="block font-bold -mt-4">
      Country
      <input
        class="font-normal block mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        @input="$emit('update:country', $event.target.value)"
        :value="country"
        placeholder="NG"/>
    </label>
  </div>
</template>

<script>
let autoComplete;
/* eslint-disable */
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    street: {
      type: String,
      default: '',
    },
    streetNumber: {
      type: String,
      default: '',
    },
    postcode: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      streetRef: "",
    }
  },

  mounted() {
    this.initAutocomplete();
  },

  unmounted() {
    if(autoComplete){
      window.google.maps.event.clearInstanceListeners(autoComplete);
    }
  },

  methods: {
    initAutocomplete() {
      autoComplete = new window.google.maps.places.Autocomplete(this.$refs.streetRef, {
        types: ["address"],
        fields: ["address_components"],
      });

      window.google.maps.event.addListener(autoComplete, "place_changed", () => {
        const mapping = {
          route: "update:street",
          street_number: "update:streetNumber",
          postal_code: "update:postcode",
          locality: "update:city",
          country: "update:country",
        }

        for (const type in mapping){
          this.$emit(mapping[type], "")
        }

        let place = {
          address_components: [],
          ...autoComplete.getPlace()
        }

        place.address_components.forEach(component => {
          component.types.forEach((type) => {
            if(mapping.hasOwnProperty(type)) {
              if (type === 'country') {
              const countryCode = component.short_name;
              this.$emit(mapping[type], countryCode);
              } else{
                this.$emit(mapping[type], component.long_name)
              }
            }
          })
        });
      })
    },
  }

}
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error input {
  border-color: red;
}
</style>