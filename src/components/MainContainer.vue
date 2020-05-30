<template>
  <div class="card-container">
    <div class="card-row">
      <description-section
          :title="getSite().name"
          :address="getSite().address"
          :site-number="getSite().number"/>
      <position-section :latitude="getSite().latitude"
                        :longitude="getSite().longitude"
                        :cover="getBaseStation().cover"/>
    </div>
    <div class="card-row">
      <schema-section :amc="getAMC()" :antennas="getAntennas()"/>
      <configuration-section :antennas="getAntennas()" :base-station="getBaseStation()"/>
    </div>
  </div>
</template>

<script>
  import DescriptionSection from "./DescriptionSection";
  import PositionSection from "./PositionSection";
  import SchemaSection from "./SchemaSection";
  import ConfigurationSection from "./ConfigurationSection";
  import ModelManager from "../models/modelManager";

  export default {
    name: "MainContainer",
    components: {
      DescriptionSection, PositionSection, SchemaSection, ConfigurationSection
    },
    props: {
      params: {
        type: Array,
        default: function() {
          return []
        }
      },
      showData: Boolean
    },
    created() {
      this.manager = new ModelManager();
      for (let i=0;i<this.params.length;i++) {
        this.manager.push(this.params[i]);
      }
    },
    methods: {
      getSite: function() {
        return this.showData ? this.manager.site : {};
      },
      getBaseStation: function() {
        return this.showData ? this.manager.baseStation : {};
      },
      getAntennas: function() {
        return this.showData ? this.manager.antennas : []
      },
      getAMC: function() {
        return this.showData ? this.manager.amc : {}
      }
    }
  }
</script>

<style scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 10px auto;
  }

  .card-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }
</style>
