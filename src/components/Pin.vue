<template>
  <div>
    <div v-if="overriden" v-html="overriden"></div>
    <div v-else>
      Pin Image || Heal {{ data.HEAL }} || Boosts {{ data.Boosts }}
    </div>
  </div>
</template>

<script>
import { item } from "../mixins/item";

export default {
  mixins: [item],
  computed: {
    stats() {
      return 1;
    },
  },
};
</script>
