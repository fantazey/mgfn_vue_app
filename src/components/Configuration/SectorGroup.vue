<template>
  <div class="sector-group">
    <sector-icon
        v-for="item in items"
        :key="item.id"
        :color="item.color"
        :is-active="item.isActive"
        :class="item.className"
        :antenna-id="item.id"
        :select="select"/>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="sector-center">
      <path d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z" fill="#11DF71"/>
    </svg>
  </div>

</template>

<script>
  import SectorIcon from "./SectorIcon";
  export default {
    name: "SectorGroup",
    components: {
      SectorIcon
    },
    props: {
      antennas: {
        type: Array,
      },
      selected: {
        type: String
      },
      select: Function
    },

    computed: {
      items: function() {
        const antennas = [...this.antennas];
        const sorted = antennas.sort((a,b) => a.azimuth - b.azimuth);
        return sorted.map((antenna,i) => ({
          color: antenna.color,
          id: antenna.id,
          isActive: antenna.id === this.selected,
          className: `sector-icon-${i}`
        }))
      }
    }
  }
</script>

<style scoped>
  .sector-group {
    width: 60px;
    position: relative;
  }
  .sector-center {
    position: absolute;
    left: 20px;
    top: 25px;
  }
  .sector-icon-2 {
    transform: rotate(-60deg);
    position: absolute;
    left: 4px;
    top: 11px;
  }

  .sector-icon-0 {
    position: absolute;
    left: 15px;
    top: 5px
  }
  .sector-icon-1 {
    transform: rotate(60deg);
    position: absolute;
    left: 25px;
    top: 12px;
  }
</style>
