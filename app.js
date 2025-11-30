const { createApp,ref } = Vue;
Vue.use(VueMarkdown);
const app = createApp({
  async mounted() {
    this.social_links = await axios.get("/social_links.json")
    this.posts = await axios.get("/posts.json")
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
