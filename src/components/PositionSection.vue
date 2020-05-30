<template>
  <div class="section position-section">
    <i :class="iconClass"></i>
    <div class="position-coordinates longitude">{{longitude}}</div>
    <div class="position-coordinates latitude">{{latitude}}</div>
  </div>
</template>

<script>
  export default {
    name: "PositionSection",
    props: {
      cover: {
        type: String,
        default: 'outdoor',
        validator: function(value) {
          return ['indoor', 'outdoor'].indexOf(value) !== -1;
        }
      },
      latitude: {
        type: String,
        default: function() {
          return '0'
        }
      },
      longitude: {
        type: String,
        default: function() {
          return '0'
        }
      }
    },
    computed: {
      iconClass: function() {
        return ['position-icon', this.cover].join(' ')
      }
    }
  }
</script>

<style scoped>
  .position-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .position-icon {
    background-repeat: no-repeat no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    padding-bottom: 10px;
  }

  .indoor {
    background-image: url("../assets/svg/indoor.svg");
  }

  .outdoor {
    background-image: url("../assets/svg/outdoor.svg");
  }

  .position-coordinates {
    padding-top: 4px;
  }
</style>
