<template>
  <div class="section description-section">
    <span class="title">Площадка {{title}}</span>
    <description :site-number="siteNumber" :address="address" />
  </div>
</template>

<script>
  import Description from "./Description/Description";

  export default {
    name: "DescriptionSection",
    components: { Description },
    props: {
      title: {
        type: String,
        default: function() {
          return '';
        }
      },
      siteNumber: {
        type: String,
        default: function() {
          return '';
        }
      },
      address: {
        type: String,
        default: function() {
          return '';
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    font-weight: bolder;
    font-size: 1.7em;
  }

  .description-section {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    text-align: left;
  }
</style>
