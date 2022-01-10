<template>
  <div
    class="flex flex-row justify-center items-center gap-1 pt-12 font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-geo-alt"
      viewBox="0 0 16 16"
    >
      <path
        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
      />
      <path
        d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
    </svg>

    <h1 class="text-2xl">{{ location }}</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-caret-down pt-1"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps({ location: { type: String, required: true } });
</script>

<style lang="scss" scoped></style>
