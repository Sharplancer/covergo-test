<template>
  <PageTemplate
    title="Ooops"
    subInfo="Your age is over our accepted limit. We are sorry but we cannot insure you now"
    buttonTitle="Ok :("
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
export default class AgeErrorView extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
