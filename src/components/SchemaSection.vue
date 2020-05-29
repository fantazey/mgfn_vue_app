<template>
  <schema-container :antennas="antennas" :amc="amc"/>
</template>

<script>
  import SchemaContainer from "./Schema/SchemaContainer";
  import AMC from "../models/AMC";
  export default {
    name: "Schema",
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
        type: AMC
      }
    }
  }
</script>

<style scoped>

</style>
