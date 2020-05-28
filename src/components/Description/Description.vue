<template>
  <div class="description">
    <span class="site-number">№ {{siteNumber}}</span>
    <span class="site-address">{{street}}, {{buildingNumber}} {{region}}, {{city}}</span>
  </div>
</template>

<script>
  export default {
    name: "Description",
    props: {
      address: {
        type: String,
        default: ''
      },
      siteNumber: String
    },
    computed: {
      addressBlocks: function() {
        return this.address.split(',');
      },
      region: function() {
        // адрес в данных отличается от адреса в карточке
        return this.addressBlocks[0]
      },
      city: function() {
        return this.addressBlocks[1]
      },
      street: function() {
        return this.addressBlocks[2]
      },
      buildingNumber: function(){
        return this.addressBlocks[3]
      }
    }
  }
</script>

<style scoped>
  .description {
    padding-top: 5px;
    font-weight: lighter;
  }
</style>
