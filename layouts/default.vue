<script setup lang="ts">
import PageNumber from "../components/BarBottom.vue";

const props = defineProps({
  class: {
    type: String,
  },
  slideTitle: {
    type: String,
  },
  slideSubtitle: {
    type: String,
  }
})
</script>

<template>
<div class="slidev-layout default">
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
</div>

<div class="col-grid mt-0 ml-5.75 mr-5.75">
    <div class="top" :class="props.class">
      <slot/>
    </div>
    <div class="left" :class="props.class">
      <slot name="left"/>
    </div>
    <div class="middle" :class="props.class">
      <slot name="middle"/>
    </div>
    <div class="right" :class="props.class">
      <slot name="right"/>
    </div>
    <div class="bottom" :class="props.class">
      <slot name="bottom"/>
    </div>
    <BarBottom/>
  </div>
</div>
</template>

<style>
.col-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  /* grid-template-rows: min-content auto min-content; */
  grid-template-rows: auto auto auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: 0;
  /* height: 100%; */
  grid-template-areas:
  "top top top"
  "left middle right"
  "bottom bottom bottom"
}



.top {
  grid-area: top;
}

.left {
  grid-area: left;
}

.middle {
  grid-area: middle;
}

.right {
  grid-area: right;
}

.bottom {
  grid-area: bottom;
}

/* .top {
  grid-area: 1 / 1 / 2 / 3;
} */

/* .left {
  grid-area: 2 / 1 / 3 / 2;
} */

/* .right {
  grid-area: 2 / 2 / 3 / 3;
} */

/* .bottom {
  grid-area: 3 / 1 / 4 / 3;
} */
</style>