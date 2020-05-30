<template>
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path v-if="isActive"
          :fill="color"
          v-on:click="select(antennaId)"
          pointer-events="painted"
          stroke="#1D1D1D"
          d="M21.0493 4.94051C21.3293 4.46051 21.1693 3.85055 20.6793 3.60055C17.7593 2.08055 14.5393 1.2006 11.2393 1.0306C7.94931 0.860599 4.6593 1.40055 1.5993 2.61055C1.0893 2.82055 0.85929 3.4106 1.08929 3.9106L9.25921 22.2105C9.58921 22.9605 10.6292 23.0106 11.0392 22.3006L21.0493 4.94051Z"/>
    <path v-else
          v-on:click="select(antennaId)"
          :fill="color"
          :stroke="color"
          pointer-events="painted"
          d="M18.5155 9.27399C18.7915 8.80399 18.6285 8.18402 18.1355 7.93402C15.9025 6.80402 13.4545 6.15399 10.9485 6.02399C8.44246 5.89399 5.94046 6.29402 3.60346 7.18402C3.08746 7.38402 2.86147 7.97395 3.08747 8.48395L9.22147 22.2139C9.55447 22.9639 10.5935 23.014 11.0015 22.304L18.5155 9.27399Z"/>
  </svg>
</template>

<script>
  export default {
    name: "SectorIcon",
    props: {
      isActive: {
        type: Boolean,
        default: function() {
          return false
        }
      },
      color: {
        type: String
      },
      antennaId: {
        type: String
      },
      select: Function,
    },
  }
</script>

<style scoped>

</style>
