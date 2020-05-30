<template>
  <g>
    <path v-for="antenna in items"
          :d="antenna.path"
          :fill="antenna.color"
          stroke="#1D1D1D"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :key="antenna.path" />
<!--    <path d="M122 17H116C114.895 17 114 17.8954 114 19V35C114 36.1046 114.895 37 116 37H122C123.105 37 124 36.1046 124 35V19C124 17.8954 123.105 17 122 17Z"-->
<!--          fill="#11DF71"-->
<!--          stroke="#1D1D1D"-->
<!--          stroke-width="1.2"-->
<!--          stroke-linecap="round"-->
<!--          stroke-linejoin="round"/>-->
<!--    <path d="M148 17H142C140.895 17 140 17.8954 140 19V35C140 36.1046 140.895 37 142 37H148C149.105 37 150 36.1046 150 35V19C150 17.8954 149.105 17 148 17Z"-->
<!--          fill="#FFB932"-->
<!--          stroke="#1D1D1D"-->
<!--          stroke-width="1.2"-->
<!--          stroke-linecap="round"-->
<!--          stroke-linejoin="round"/>-->
<!--    <path d="M174 17H168C166.895 17 166 17.8954 166 19V35C166 36.1046 166.895 37 168 37H174C175.105 37 176 36.1046 176 35V19C176 17.8954 175.105 17 174 17Z"-->
<!--          fill="#BAB9FF"-->
<!--          stroke="#1D1D1D"-->
<!--          stroke-width="1.2"-->
<!--          stroke-linecap="round"-->
<!--          stroke-linejoin="round"/>-->
  </g>
</template>

<script>
  export default {
    name: "Antennas",
    props: {
      antennas: {
        type: Array,
        validate: function(value) {
          return value.length <= 3;
        }
      }
    },
    methods: {
      buildPathByNumber: function(num) {
        const delta = 26 * num;
        return `M${122 + delta} 17H${116 + delta}C${114 + delta}.895 17 ${114 + delta} 17.8954 ${114 + delta} 19V35C${114+delta} 36.1046 ${114 + delta}.895 37 ${116 + delta} 37H${122 + delta}C${123 + delta}.105 37 ${124+delta} 36.1046 ${124+delta} 35V19C${124+delta} 17.8954 ${123+delta}.105 17 ${122+delta} 17Z`
      }
    },
    computed: {
      items: function() {
        return this.antennas.map(( x, i ) => ({
          path: this.buildPathByNumber(i),
          color: x.color
        }));
      }
    }
  }
</script>

<style scoped>

</style>
