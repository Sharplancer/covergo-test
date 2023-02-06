<template>
  <div class="page-template">
    <h1>{{ title }}</h1>
    <div class="sub-info">
      {{ subInfo }}
    </div>
    <div class="button-wrapper">
      <router-link class="primary" v-bind:to="{ path: path }" tag="button">
        {{ buttonTitle }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTemplate extends Vue {
  @Prop() public title!: string;
  @Prop() public subInfo!: string;
  @Prop() public buttonTitle!: string;
  @Prop() public path!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #1a1a1a;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Poppins,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
}
.sub-info {
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 300;
  padding-top: 10px;
  width: 500px;
  text-align: center;
  line-height: 27px;
}

.button-wrapper {
  padding-top: 36px;
}

.primary {
  padding: 15px 100px;
  background: #1a1a1a;
  color: #fff;
  border-color: #1a1a1a;
  border-radius: 4px;
  font-size: 21px;
  text-align: center;
  cursor: pointer;
}
</style>
