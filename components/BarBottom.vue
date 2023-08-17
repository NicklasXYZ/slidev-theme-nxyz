<template>
  <div class="bg-barBottom flex absolute w-full bottom-0 left-0 py-0.5 px-4 text-sm ">
    <div class="w-1/2 text-left">
      {{ $slidev.configs.barBottomText }}
    </div>
    <div class="w-1/2 flex justify-end">
      {{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total - 1 }}
    </div>
  </div>
</template>