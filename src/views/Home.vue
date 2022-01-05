<template>
  <div class="justify-center flex flex-col bg-yellow-300 items-center h-screen">
    <h1 class="text-3xl font-bold underline">Hello 👋🏼 !</h1>
    <br />
    <div class="text-4xl">
      You're currently located at: {{ getLocation.location.city }},
      {{ getLocation.location.country }} with a latitude of
      {{ getLocation.location.lat }} and longitude of
      {{ getLocation.location.lon }}
    </div>
    <div class="text-4xl">
      You current address is:

      {{ getLocation?.address.formatted_address }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { getAddress, ipLookUp } from "../composables/getLocation";

const getLocation = reactive({
  location: Object,
  address: Object,
});

onMounted(async () => {
  getLocation.location = await ipLookUp();
  getLocation.address = await getAddress();
});
</script>
