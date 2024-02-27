// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: { autoImport: false },
  devtools: { enabled: true },
  typescript: { typeCheck: true, strict: true },
  router: {},
});
