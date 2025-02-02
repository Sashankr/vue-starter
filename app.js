const app = Vue.createApp({
  data() {
    return {
      paraClassName: "",
      isParaVisible: true,
      paraColor: "",
    };
  },
  computed: {
    isVisible() {
      return {
        visible: this.isParaVisible,
        hidden: !this.isParaVisible,
        user1: this.paraClassName === "user1",
        user2: this.paraClassName === "user2",
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.isParaVisible = !this.isParaVisible;
    },
  },
});

app.mount("#assignment");
