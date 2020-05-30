<template>
  <svg width="270" height="230" viewBox="0 0 270 230" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M270 0H0V230H270V0Z" fill="white"/>
    <!--  dashed line amc  -->
    <path d="M1 7H3" stroke="#1D1D1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.2" d="M57 7H270" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 5"/>
    <!--  dashed line antenna  -->
    <path d="M1 39H3" stroke="#1D1D1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.2" d="M33 39H270" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 5"/>
    <!--  vertical height line  -->
    <path d="M3 226H1V1" stroke="#1D1D1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <g v-if="isEmpty">
      <empty-site />
      <empty-ground v-if="isGround"/>
      <empty-roof v-else/>
    </g>
    <g v-else>
      <site />
      <antennas :antennas="antennas" />
      <ground v-if="isGround" />
      <roof v-else/>
    </g>
  </svg>
</template>

<script>
  import AMC from '../../models/AMC';
  import EmptyGround from "./EmptyGround";
  import EmptyRoof from "./EmptyRoof";
  import EmptySite from "./EmptySite";
  import Ground from "./Ground";
  import Roof from "./Roof";
  import Site from "./Site";
  import Antennas from "./Antennas";
  export default {
    name: "SchemaContainer",
    components: {
      Antennas,
      EmptyRoof, EmptyGround, EmptySite,
      Roof, Ground, Site
    },
    props: {
      antennas: {
        type: Array,
        default: function() {
          return [];
        }
      },
      amc: {
        type: [AMC, Object]
      }
    },
    computed: {
      isGround: function() {
        return this.amc.id && this.amc.isOnGround;
      },
      isEmpty: function() {
        return this.amc.id === undefined;
      }
    }
  }
</script>

<style scoped>

</style>
