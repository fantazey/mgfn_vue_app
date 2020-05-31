<template>
  <div class="sector-description">
    <span class="sector-description-row sector-name" :title="description">{{description}}</span>
    <div class="sector-description-row">
      <div class="sector-description-icon azimuth-icon"></div>
      <div class="sector-description-value">{{azimuth}}&deg;</div>
    </div>
    <div class="sector-description-row">
      <div class="sector-description-icon tilt-icon"></div>
      <div class="sector-description-value">{{tiltAngle}}&deg;</div>
    </div>
    <div class="sector-description-row">
      <div class="sector-description-icon height-icon"></div>
      <div class="sector-description-value">{{height}} m.</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SectorDescription",
    props: {
      description: {
        type: String,
        default: function() {
          return '\u00A0';
        }
      },
      height: {
        type: String,
        default: function() {
          return '0'
        }
      },
      tiltAngle: {
        type: String,
        default: function() {
          return '0'
        }
      },
      azimuth: {
        type: String,
        default: function() {
          return '0'
        }
      },
    }
  }
</script>

<style scoped>
  .sector-description {
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .sector-name {
    max-width: 100px;
    width: 100px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    display:inline-block;
  }
  .sector-description-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 4px;
    padding-right: 4px;
    box-sizing: border-box;
    font-size: 0.8em;
    margin-top: 5px;
  }
  .sector-description-icon {
    background-repeat: no-repeat no-repeat;
    background-size: contain;
    width: 10px;
    height: 10px;
  }
  .height-icon {
    background-image: url("../../assets/svg/mount-height.svg");
  }
  .azimuth-icon {
    background-image: url("../../assets/svg/azimuth.svg");
  }
  .tilt-icon {
    background-image: url("../../assets/svg/tilt-angle.svg");
  }
</style>
