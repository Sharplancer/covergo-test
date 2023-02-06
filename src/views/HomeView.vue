<template>
  <PageTemplate
    title="Hello There!"
    subInfo="Let's buy some insurance. It is going to take only a few steps"
    buttonTitle="Start"
    path="/package-selection"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTemplate from "@/components/PageTemplate.vue"; // @ is an alias to /src

@Component({
  components: {
    PageTemplate,
  },
})
export default class HomeView extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
