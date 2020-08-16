# TRG Shops

This is a shop page for The Reaper's Game.

Current frontend uses sheetjs to process an xlsx export of the workbook.

## New Week Setup

1. Have everyone make a copy of \[TEMPLATE\] TRG: Shop Backend. Details for setting up each individual shop sheet can be found in the README tab there.
2. Have all shops publich sheet to web (File -> Publish to the web)
3. Take the keys from the publish links (https://docs.google.com/spreadsheets/d/e/THISISTHEKEY/pubhtml)
4. In `vue.config.js`, add a new entry in the `shops` object for the new week. The format should be

```
week_name: {
  shop_slug: "Shop Name",
  shop_slug2: "Shop Name 2"
}
```

5. In `vue.config.js`, add a new entry for the week in the `pages` object. The filename should be `week_name/shop_slug/index.html`.
6. Push changes to master

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
