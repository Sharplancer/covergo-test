<template>
  <div class="package-summary">
    <h1>Summary</h1>
    <div
      class="package-summary-info"
      v-if="Object.keys(packageInfo).length > 0"
    >
      <div
        class="package-info"
        v-for="(packageKey, index) in Object.keys(packageInfo)"
        :key="index"
      >
        <div class="summary-key">{{ packageKey }}</div>
        :
        <div class="summary-value">{{ packageInfo[packageKey] }}</div>
      </div>
    </div>
    <div class="button-wrapper">
      <router-link
        class="button default"
        v-bind:to="{ path: '/package-selection' }"
        tag="button"
      >
        Back
      </router-link>
      <router-link
        class="button primary"
        v-bind:to="{ path: '/' }"
        tag="button"
      >
        Buy
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";

export default {
  name: "package-summary",
  computed: {
    ...mapGetters({
      packageInfo: "packages/packageInfo",
    }),
  },
  methods: {
    ...mapActions({
      savePackage: "packages/updatePackageValues",
    }),
    destroy() {
      this.savePackage({});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

h1 {
  color: #1a1a1a;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Poppins,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
}

.default {
  background: #fff;
  border-color: #8c8c8c;
  color: #1a1a1a;
}

.primary {
  background: #1a1a1a;
  border-color: #1a1a1a;
  color: #fff;
  margin-left: 15px;
}

.button {
  padding: 10px 30px;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}

.summary-key {
  text-transform: capitalize;
}

.summary-value {
  padding-left: 5px;
}

.package-summary-info {
  margin: 40px 30px;
}
.package-info {
  display: flex;
  margin-bottom: 16px;
}
</style>
