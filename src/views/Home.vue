<template>
  <div class="bg-yellow-300">
    <UserLocation :location="getLocation.location.city" />
    <Header />
    <div class="flex flex-col justify-center items-center h-screen">
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { getAddress, ipLookUp } from "../composables/getLocation";
import Location from "../types/geoLocation";

import Header from "../components/Tags/Header.vue";
import UserLocation from "../components/Tags/Location.vue";

const getLocation = reactive<Location>({
  location: Object,
  address: Object,
});

onMounted(async () => {
  getLocation.location = await ipLookUp();
  getLocation.address = await getAddress();
});
</script>
