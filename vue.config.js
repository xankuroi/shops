module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shops/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      title: "The Reaper's Game Shops",
      shops: {
        test_week: {
          test: "Test Shop",
        },
      },
    },
    "Test Page": {
      entry: "src/main.js",
      title: "Test Shop",
      filename: "test_week/test/index.html",
      filekey:
        "2PACX-1vR6pYPKLHt0GrJ7LLQWhhwDYBoQJc-iLaoiHJAgmPXbGCId8osZFp0p-By1L5cakwLwTqM7-i_d46x2",
    },
  },
};
