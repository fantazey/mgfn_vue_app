<template>
  <div class="section schema-section">
    <schema-container :antennas="antennas" :amc="amc"/>
    <!--  temporary hardcode  -->
    <span class="height-line-text ground-height">100 м</span>
    <span class="height-line-text amc-height">{{amcHeight}} м AMC</span>
    <span class="height-line-text antenna-height">{{antennaHeight}} м</span>
  </div>
</template>

<script>
  import SchemaContainer from "./Schema/SchemaContainer";
  import AMC from "../models/AMC";
  export default {
    name: "SchemaSection",
    components: {
      SchemaContainer
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
      amcHeight: function() {
        return this.amc.height || 0
      },
      antennaHeight: function() {
        return this.antennas.length > 0 ? this.antennas[0].mountHeight : 0;
      }
    }
  }
</script>

<style scoped>
  .schema-section {
    position: relative;
  }
  .height-line-text {
    position: absolute;
    font-size: 0.7em;
    left: 5px;
  }
  .ground-height {
    bottom: 2px;
  }
  .amc-height {
    top: 2px
  }
  .antenna-height {
    top: 33px
  }
</style>
