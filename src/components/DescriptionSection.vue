<template>
  <div class="description-section">
    <span class="title">Площадка {{title}}</span>
    <description :site-number="number" :address="address" />
  </div>
</template>

<script>
  import Site from "../models/Site";
  import Description from "./Description/Description";

  export default {
    name: "DescriptionSection",
    components: { Description },
    props: {
      site: {
        type: Site
      }
    },
    data: function() {
      return {
        title: this.site.name,
        number: this.site.number,
        address: this.site.address
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
