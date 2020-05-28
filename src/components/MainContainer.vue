<template>
  <div class="card-container">
    <div class="card-row">
      <description-section :site="manager.site"/>
      <position-section :latitude="manager.site.latitude"
                        :longitude="manager.site.longitude"
                        :cover="manager.baseStation.cover"/>
    </div>
    <div class="row">
      <div class="cell">
        <schema-section/>
      </div>
      <div class="cell">
        <configuration-section/>
      </div>
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
      }
    },
    created() {
      this.manager = new ModelManager();
      for (let i=0;i<this.params.length;i++) {
        this.manager.push(this.params[i]);
      }
    },
  }
</script>

<style scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }

  .card-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
