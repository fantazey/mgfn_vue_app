<template>
  <div class="sector-group">
    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.9106 4.74631C38.1811 4.26091 38.0092 3.6542 37.5144 3.41387C34.5651 1.95151 31.3284 1.13498 28.0257 1.02983C24.733 0.924481 21.4542 1.52895 18.4186 2.79881C17.9128 3.01879 17.6945 3.61324 17.9343 4.10863L26.4621 22.2445C26.8068 22.9879 27.8475 23.0176 28.2435 22.2997L37.9106 4.74631Z"
            id="0-active"
            v-if="items.sector0.active"
            v-on:click="select(items.sector0.antennaId)"
            :fill="items.sector0.color"
            stroke="#1D1D1D"
      />
      <path d="M35.4624 9.12872C35.7291 8.65339 35.554 8.03674 35.0562 7.79647C32.8014 6.71055 30.3411 6.10872 27.833 6.02797C25.325 5.94721 22.8313 6.39631 20.5122 7.33204C20.0003 7.54213 19.7859 8.13639 20.0219 8.64185L26.4244 22.2487C26.772 22.992 27.8118 23.0217 28.2058 22.3038L35.4624 9.12872Z"
            id="0-inactive"
            v-else
            v-on:click="select(items.sector0.antennaId)"
            :visibility="items.sector0.visibility"
            :fill="items.sector0.color"
            :stroke="items.sector0.color"
      />
      <path d="M49.8456 23.0195C50.4008 22.9973 50.8288 22.5342 50.7759 21.9866C50.4858 18.7075 49.4948 15.5199 47.8624 12.647C46.2354 9.7824 44.0099 7.29985 41.3434 5.37173C40.892 5.05486 40.2709 5.17855 39.9732 5.64146L28.9448 22.3749C28.4902 23.0567 29.0076 23.9602 29.8267 23.9237L49.8456 23.0195Z"
            id="30-active"
            v-if="items.sector30.active"
            v-on:click="select(items.sector30.antennaId)"
            :fill="items.sector30.color"
            stroke="#1D1D1D"
      />
      <path d="M44.8911 23.3319C45.4358 23.3116 45.8706 22.8406 45.8161 22.2906C45.5669 19.8003 44.7976 17.3872 43.5587 15.205C42.3198 13.0228 40.6363 11.1291 38.6286 9.63822C38.1823 9.31091 37.5635 9.43786 37.2552 9.90278L28.9832 22.4611C28.5302 23.1454 29.047 24.0481 29.865 24.0099L44.8911 23.3319Z"
            id="30-inactive"
            v-else
            v-on:click="select(items.sector30.antennaId)"
            :visibility="items.sector30.visibility"
            :fill="items.sector30.color"
            :stroke="items.sector30.color"
      />
      <path d="M39.8661 42.0666C40.1601 42.5382 40.7743 42.6811 41.224 42.3643C43.9304 40.4902 46.2105 38.0522 47.9 35.2124C49.5847 32.3814 50.6415 29.2192 50.9983 25.9481C51.0504 25.399 50.6357 24.9204 50.0861 24.8907L30.088 23.583C29.2706 23.5251 28.7413 24.4217 29.1781 25.1155L39.8661 42.0666Z"
            id="60-active"
            v-if="items.sector60.active"
            v-on:click="select(items.sector60.antennaId)"
            :fill="items.sector60.color"
            stroke="#1D1D1D"
      />
      <path d="M37.144 37.9152C37.431 38.3785 38.0554 38.5235 38.5065 38.204C40.5475 36.7557 42.2642 34.8934 43.548 32.7373C44.8317 30.5812 45.6448 28.1814 45.9474 25.699C46.0112 25.1493 45.5947 24.6742 45.0382 24.6363L30.0321 23.6589C29.2133 23.6037 28.6844 24.4994 29.1222 25.1915L37.144 37.9152Z"
            id="60-inactive"
            v-else
            v-on:click="select(items.sector60.antennaId)"
            :visibility="items.sector60.visibility"
            :fill="items.sector60.color"
            :stroke="items.sector60.color"
      />
      <path d="M16.7779 42.5713C16.5153 43.061 16.6971 43.6648 17.1957 43.8971C20.1683 45.3114 23.4178 46.0753 26.7218 46.1269C30.0158 46.1788 33.2843 45.5212 36.2989 44.2023C36.8011 43.9741 37.0097 43.3762 36.762 42.8848L27.941 24.8896C27.5843 24.1519 26.5432 24.1391 26.159 24.8634L16.7779 42.5713Z"
            id="90-active"
            v-if="items.sector90.active"
            v-on:click="select(items.sector90.antennaId)"
            :fill="items.sector90.color"
            stroke="#1D1D1D"
      />
      <path d="M19.1547 38.1497C18.8957 38.6293 19.0808 39.243 19.5825 39.4752C21.8546 40.5244 24.3243 41.0862 26.8333 41.1263C29.3424 41.1663 31.8284 40.6768 34.132 39.7036C34.6405 39.4852 34.8452 38.8876 34.6011 38.386L27.9787 24.8848C27.619 24.1472 26.5789 24.1344 26.1966 24.8586L19.1547 38.1497Z"
            id="90-inactive"
            v-else
            v-on:click="select(items.sector90.antennaId)"
            :visibility="items.sector90.visibility"
            :fill="items.sector90.color"
            :stroke="items.sector90.color"
      />
      <path d="M4.39532 24.7283C3.84007 24.7506 3.41203 25.2137 3.46498 25.7612C3.75504 29.0403 4.74604 32.2279 6.37847 35.1009C8.00552 37.9655 10.231 40.448 12.8975 42.3761C13.3489 42.693 13.97 42.5693 14.2677 42.1064L25.2961 25.3729C25.7507 24.6912 25.2333 23.7877 24.4142 23.8241L4.39532 24.7283Z"
            id="120-active"
            v-if="items.sector120.active"
            v-on:click="select(items.sector120.antennaId)"
            :fill="items.sector120.color"
            stroke="#1D1D1D"
      />
      <path d="M9.34978 24.416C8.80511 24.4362 8.37026 24.9072 8.42482 25.4573C8.67394 27.9475 9.4433 30.3607 10.6822 32.5429C11.9211 34.7251 13.6046 36.6187 15.6123 38.1096C16.0585 38.4369 16.6774 38.31 16.9857 37.8451L25.2577 25.2868C25.7107 24.6025 25.1938 23.6998 24.3758 23.7379L9.34978 24.416Z"
            id="120-inactive"
            v-else
            v-on:click="select(items.sector120.antennaId)"
            :visibility="items.sector120.visibility"
            :fill="items.sector120.color"
            :stroke="items.sector120.color"
      />
      <path d="M14.8363 4.95934C14.5423 4.48779 13.9281 4.34484 13.4785 4.66169C10.772 6.53577 8.49192 8.97374 6.80248 11.8136C5.1177 14.6446 4.06093 17.8067 3.70414 21.0778C3.65205 21.6269 4.06676 22.1055 4.61632 22.1353L24.6144 23.443C25.4318 23.5008 25.9611 22.6043 25.5243 21.9105L14.8363 4.95934Z"
            id="150-active"
            v-if="items.sector150.active"
            v-on:click="select(items.sector150.antennaId)"
            :fill="items.sector150.color"
            stroke="#1D1D1D"
      />
      <path d="M17.5585 9.11074C17.2714 8.6474 16.647 8.50244 16.1959 8.82195C14.1549 10.2702 12.4382 12.1325 11.1545 14.2886C9.8707 16.4448 9.05767 18.8446 8.75502 21.3269C8.69128 21.8766 9.10772 22.3517 9.66426 22.3896L24.6704 23.367C25.4891 23.4222 26.018 22.5265 25.5802 21.8345L17.5585 9.11074Z"
            id="150-inactive"
            v-else
            v-on:click="select(items.sector150.antennaId)"
            :visibility="items.sector150.visibility"
            :fill="items.sector150.color"
            :stroke="items.sector150.color"
      />
      <path d="M27 29C29.761 29 32 26.7614 32 24C32 21.2386 29.761 19 27 19C24.239 19 22 21.2386 22 24C22 26.7614 24.239 29 27 29Z"
            id="center"
            fill="#11DF71"/>
    </svg>
  </div>

</template>

<script>
  export default {
    name: "SectorGroup",
    props: {
      antennas: {
        type: Array,
      },
      selected: {
        type: String
      },
      select: Function
    },
    data: function() {
      const numbers = [0, 30, 60, 90, 120, 150];
      const sectors = {};
      numbers.forEach(num => {
        sectors['sector' + num] = {
          visibility: 'hidden',
          active: false,
          color: '#000',
          antennaId: null
        };
      });
      return {sectors};
    },
    computed: {
      items: function() {
        const result = {...this.sectors};
        Object.keys(result).forEach(key => {
          result[key] = {
            visibility: 'hidden',
            active: false,
            antennaId: null
          };
        });
        Array.prototype.forEach.call(this.antennas, (antenna) => {
          const azimuth = +antenna.azimuth;
          const key = 'sector' + azimuth;
          if (!Object.prototype.hasOwnProperty.call(result, key)) {
            console.error('Incorrect antenna settings');
            result[key].visibility = 'hidden';
          } else {
            result[key].antennaId = antenna.id;
            result[key].visibility = 'visible';
            result[key].color = antenna.color;
            result[key].active = antenna.id === this.selected;
          }
        });
        return result;
      }
    }
  }
</script>

<style scoped>
  .sector-group {
    width: 60px;
    position: relative;
  }
</style>
