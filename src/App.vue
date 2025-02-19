<script>
import HeaderElem from "./components/HeaderElem.vue";
import FooterElem from "./components/FooterElem.vue";

export default {
  components: {
    HeaderElem,
    FooterElem,
  },
};
</script>

<template>
  <header-elem></header-elem>
  <router-view></router-view>
  <footer-elem></footer-elem>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Heebo", sans-serif;
  background: #121212;
}
</style>
