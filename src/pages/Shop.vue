<template>
  <div>
    <div v-for="(data, name) in pages" :key="name">
      <template v-if="['Pins', 'Threads', 'Food'].includes(name)">
        <h1>{{ name }}</h1>
        <div v-for="(datum, index) in data" :key="name + index">
          {{ datum }}
        </div>
      </template>
      <template v-else>
        <h1>{{ name }}</h1>
        <template v-for="(datum, index) in data">
          <component :is="datum['HTML Tag'] || 'div'" :key="name + index">
            {{ datum["Content"] }}
          </component>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { processSheet } from "../mixins/processSheet.js";

export default {
  props: {},
  data() {
    return { pages: {} };
  },
  mounted() {
    processSheet(
      "https://birbot-3961.appspot.com/" +
        `https://docs.google.com/spreadsheets/d/e/${window.sheetkey}/pub?output=xlsx`
    ).then((results) => (this.pages = results));
  },
};
</script>
