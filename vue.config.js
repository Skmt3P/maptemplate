module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
}
