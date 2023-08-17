<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  color: {
    type: String,
  },
})
</script>

<template>
  <div class="alert overflow-hidden">
    <div class="header px-4 pt-2 pb-2 font-bold"
      :class="{ 'bg-nxyz-black text-white': color === 'black', 'bg-nxyz-orange text-white': color === 'orange', 'bg-nxyz-red text-white': color === 'red', 'bg-nxyz-yellow text-white': color === 'yellow', 'bg-nxyz-blue text-white': color === 'blue', 'bg-nxyz-green text-white': color === 'green' }">
      {{ title }}
    </div>
    <div class="content pt-2 pb-2 px-4 py-4"
      :class="{ 'bg-nxyz-black/20': color === 'black', 'bg-nxyz-orange/20': color === 'orange', 'bg-nxyz-red/20': color === 'red', 'bg-nxyz-yellow/20': color === 'yellow', 'bg-nxyz-blue/20': color === 'blue', 'bg-nxyz-green/20': color === 'green' }">
      <slot />
    </div>
  </div>
</template>