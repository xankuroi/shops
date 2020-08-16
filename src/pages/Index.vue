<template>
  <div>
    <div v-for="(shoplist, week) in shops" :key="week">
      <h2>{{ week }}</h2>
      <ul>
        <li v-for="(shop, slug) in shoplist" :key="week + slug">
          <a :href="`${publicPath}${week}/${slug}`">{{ shop }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: JSON.parse(window.shops),
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style></style>
