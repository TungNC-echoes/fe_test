<template>
  <div>
    <Header/>
    <MainContent/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./Header";
  import MainContent from "./MainContent";
  import Footer from "./Footer";
  export default {
    name: 'AppMain',
    components: { Header, MainContent, Footer },
    data() {
      return {}
    }
  }
</script>

<style type="text/css">
  @import "../assets/styles/main.css";
</style>
