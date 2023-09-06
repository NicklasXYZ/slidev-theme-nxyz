<script setup lang="ts">

const props = defineProps({
  slideTitle: {
    type: String,
  },
  slideSubtitle: {
    type: String,
  },
  presentationID: {
    type: String,
  },
  author: {
    type: String,
  },
  university: {
    type: String,
  },
  department: {
    type: String,
  },
  coverImagePath: {
    type: String,
  },
})
</script>

<template>
<div class="slidev-layout cover">
  <div id="mainContainer">
    
    <img :src=coverImagePath id="topContainer" class="overflow-y-hidden" alt="Cover Slide Banner">
    
    <div id="bottomContainer">
      <div v-if="slideTitle">
        <div class="flex items-center justify-left pb-6">
          <div class="colorbox"/>
          <div class="px-3">    
            <div class="text-4xl leading-10 font-semibold tracking-wide -ml-0.75">
              {{ slideTitle }}
            </div>
            <div v-if="slideSubtitle">
              <div class="text-lg tracking-wide font-500 opacity-50">
                - {{ slideSubtitle }}
              </div>
            </div>
          </div>
      </div>
    
      <div class="pb-6 mt-0 ml-5.75 mr-5.75">
        <h2>
          <mdi-presentation /> {{ presentationID }}
        </h2>
        <h2>
          <mdi-account-outline /> {{ author }}
        </h2>
      </div>

      <div class="pb-6 mt-0 ml-5.75 mr-5.75">
        <h3>
          {{ university }}
        </h3>
        <h3>
          {{ department }}
        </h3>
      </div>
      </div>
    </div>
  </div>
</div>
</template>