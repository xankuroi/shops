<template>
  <div>
    <div v-for="(data, name) in pages" :key="name">
      <template v-if="['Pins', 'Threads', 'Food'].includes(name)">
        <h1>{{ name }}</h1>
        <template v-for="(datum, index) in data">
          <component
            v-if="datum.Stocked"
            :is="name === 'Food' ? name : name.slice(0, -1)"
            :data="datum"
            :key="name + index"
          >
          </component>
        </template>
      </template>
      <template v-else>
        <h1>{{ name }}</h1>
        <template v-for="(datum, index) in data">
          <component
            :is="datum['HTML Tag'] || 'div'"
            v-html="datum.Content"
            :key="name + index"
          >
          </component>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { processSheet } from "../mixins/processSheet";
import Food from "../components/Food";
import Pin from "../components/Pin";
import Thread from "../components/Thread";

export default {
  components: {
    Food,
    Pin,
    Thread,
  },
  data() {
    return { pages: {}, config: {} };
  },
  methods: {
    mountStyle(css) {
      const style = document.createElement("style");
      style.appendChild(document.createTextNode(css));
      document.getElementsByTagName("head")[0].appendChild(style);
    },
  },
  mounted() {
    processSheet(
      "https://birbot-3961.appspot.com/" +
        `https://docs.google.com/spreadsheets/d/e/${window.sheetkey}/pub?output=xlsx`
    ).then((results) => {
      this.pages = results.data;
      this.config = results.config;
      if (this.config[0]["Custom CSS"]) {
        this.mountStyle(this.config[0]["Custom CSS"]);
      }
    });
  },
};
</script>
