<template>
  <div class="position-section">
    <i :class="iconClass"></i>
    <div class="position-coordinates longitude">{{longitude}}</div>
    <div class="position-coordinates latitude">{{latitude}}</div>
  </div>
</template>

<script>
  export default {
    name: "Position",
    props: {
      cover: {
        type: String,
        default: '',
        validator: function(value) {
          return ['indoor', 'outdoor'].indexOf(value) !== -1;
        }
      },
      latitude: String,
      longitude: String
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
