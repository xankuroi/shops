import XLSX from "xlsx";

export async function processSheet(url) {
  return fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error("Failed to load data.");
      return resp.arrayBuffer();
    })
    .then((buffer) => {
      const arrBuffer = new Uint8Array(buffer);
      return XLSX.read(arrBuffer, { type: "array" }).Sheets;
    })
    .then((sheets) => {
      // Base data
      let data = {};
      const config = XLSX.utils.sheet_to_json(sheets.CONFIG);
      const mainPages = ["Pins", "Threads", "Food"];

      // Ignored sheets regex
      const re = new RegExp(
        config[0].Ignore.split(",")
          .map((str) => str.trim())
          .join("|"),
        "i"
      );

      Object.keys(sheets)
        .filter((key) => !re.test(key))
        .forEach((key) => {
          if (mainPages.includes(key)) {
            data[key] = processItemPages(
              keyData(sheets[key]),
              keyData(sheets[`DATADB ${key}`])
            );
          } else {
            data[key] = XLSX.utils.sheet_to_json(sheets[key]);
          }
        });
      return {
        data,
        config,
      };
    });
}

function keyData(rawSheet) {
  let data = {};
  XLSX.utils
    .sheet_to_json(rawSheet)
    .filter((row) => row["Name"])
    .forEach((row) => (data[row["Name"]] = row));
  return data;
}

function processItemPages(data, db) {
  Object.keys(data).map((name) => (data[name].data = db[name]));
  return data;
}
