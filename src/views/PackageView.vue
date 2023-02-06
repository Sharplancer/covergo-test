<template>
  <div class="packages">
    <div
      class="package-item"
      v-for="(packageItem, index) in packages"
      :key="index"
      @click="
        selectPackage(
          packageItem,
          age &&
            country.rate &&
            age * 10 * country.rate * (packageItem.percentage / 100)
        )
      "
    >
      <input type="radio" :checked="packageItem.checked" />
      <div class="package-item-label">
        {{ packageItem.label }}
        <span v-if="age && packageItem.percentage && country && country.code">
          (+{{ age * 10 * country.rate * (packageItem.percentage / 100) }}
          {{ country.code }}, {{ packageItem.percentage }}%)
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "package-view",
  props: ["packages", "selectPackage", "age", "country"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

.package-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.package-item-label {
  margin-top: 2px;
  margin-left: 6px;
  font-size: 18px;
}

input[type="radio"] {
  width: 18px;
  height: 18px;
}
</style>
