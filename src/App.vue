<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: { Header, Footer }
};
</script>
<style></style>
