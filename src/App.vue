<template>
  <div id="app">
    <Index v-if="shops" />
    <Shop v-else />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Index: () => import("./pages/Index"),
    Shop: () => import("./pages/Shop"),
  },
  data() {
    return {
      shops: window.shops,
    };
  },
  beforeMount() {
    let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localStorage.theme === "light") {
      dark = false;
    }
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  },
};
</script>

<style>
body[data-theme="light"] {
  --text-color: #2c3e50;
  --background-color: #fff;
  --border-color: #b3b3b3;
}

body[data-theme="dark"] {
  --text-color: #dee4e7;
  --background-color: #222;
  --border-color: #666;
}

body {
  background: var(--background-color);
  color: var(--text-color);
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: #29abdf;
  text-decoration: none;
}

a:hover {
  color: var(--text-color);
}
</style>
