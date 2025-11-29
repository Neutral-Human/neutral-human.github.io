const { createApp,ref } = Vue;
const app = createApp({
  mounted() {
    console.log("Web page is fully loaded!\nWelcome to my page!")
  },
  data() {
    return {
      "social_links":[],
      "posts":[]
    }
  }
})
app.mount("#main")
