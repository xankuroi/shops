export const item = {
  props: {
    data: {
      type: Object,
      required: true,
    },
    override: {
      type: Object,
      required: false,
    },
  },
  computed: {
    overriden() {
      if (!this.override) {
        return false;
      }
      return this.override.replace("{{ATK}}");
    },
  },
};
