<template>
  <div class="section configuration-section">
    <div class="sector-configuration-row">
      <sector-group
          :antennas="antennas"
          :selected="selectedAntennaId"
          :select="select"/>
      <sector-description
          :description="selectedAntenna.description"
          :height="selectedAntenna.mountHeight"
          :azimuth="selectedAntenna.azimuth"
          :tilt-angle="selectedAntenna.tiltAngle"/>
    </div>
    <div class="tech-configuration-row">
      <div v-for="item in labelItems"
           :key="item.label"
           :class="item.classNames"
           :style="item.activeColor">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
  import SectorGroup from "./Configuration/SectorGroup";
  import SectorDescription from "./Configuration/SectorDescription";
  import BaseStation from "../models/BaseStation";
  export default {
    name: "ConfigurationSection",
    components: {SectorDescription, SectorGroup},
    props: {
      antennas: {
        type: Array
      },
      baseStation: {
        type: [BaseStation, Object]
      }
    },
    data: function() {
      return {
        selectedAntennaId: null,
        labels: ['2G','3G','LTE','5G']
      }
    },
    computed: {
      selectedAntenna: function() {
        if (!this.selectedAntennaId) {
          return {}
        }
        return this.antennas.find(x => x.id === this.selectedAntennaId);
      },
      labelItems: function() {
        return this.labels.map(label => ({
          label,
          classNames: `tech-configuration-icon ${this.isBaseStationSupportStandard(label) ? 'available' : ''}`,
          activeColor: this.getColorForSupportedStandard(label)
        }))
      }
    },
    methods: {
      isBaseStationSupportStandard: function(standard) {
        return this.baseStation.id && this.baseStation.isSupportStandard(standard);
      },
      getColorForSupportedStandard: function(standard) {
        const styleForSelectedAntenna = `background-color: ${this.selectedAntenna.color}`;
        return this.selectedAntennaId && this.selectedAntenna.supportedStandard === standard ? styleForSelectedAntenna : '';
      },
      select: function (antennaId) {
        if ( this.selectedAntennaId === antennaId ) {
          this.selectedAntennaId = null;
          return;
        }
        this.selectedAntennaId = antennaId;
      }
    }
  }
</script>

<style scoped>
  .configuration-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
  }
  .sector-configuration-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 25px;
  }

  .tech-configuration-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    font-size: 0.7em;
    font-weight: bold;
    color: #FFF;
  }

  .tech-configuration-icon {
    width: 36px;
    height: 32px;
    background-color: #EAEAEA;
    padding-top: 10px;
    box-sizing: border-box;
    margin-left: 1px;
    margin-right: 1px;
  }
  .tech-configuration-icon.available {
    background-color: black;
  }
</style>
