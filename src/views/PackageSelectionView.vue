<template>
  <div class="package-selection">
    <h1>Tell us about yourself</h1>
    <div class="package-form">
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-input">
          <input autocomplete="off" name="name" type="text" v-model="name" />
        </div>
      </div>
      <div class="field">
        <div class="field-label">Age</div>
        <div class="field-input">
          <input name="age" type="number" v-model.number="age" />
        </div>
      </div>
      <div class="field">
        <div class="field-label">Where do you live</div>
        <div class="field-input">
          <v-select v-model="country" v-bind:options="countries"></v-select>
        </div>
      </div>
    </div>
    <div class="package-view">
      <packageView
        v-bind:age="age"
        v-bind:country="country"
        v-bind:packages="packages"
        v-bind:selectPackage="selectPackage"
      >
      </packageView>
    </div>
    <div class="total-premium">
      <h2>
        Your premium is:
        <span
          class="total-premium-value"
          v-if="totalPremium && country && country.code"
        >
          {{ totalPremium + (expensive || 0) }}{{ country.code }}
        </span>
      </h2>
    </div>
    <div class="button-wrapper">
      <router-link
        class="button default"
        v-bind:to="{ path: '/' }"
        tag="button"
      >
        Back
      </router-link>
      <button class="button primary" @click="savePackageItem">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
import vSelect from "vue-select";
import PackageView from "./PackageView.vue";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

interface Country {
  label: string;
  code: string;
  rate: number;
}

interface Package {
  label: string;
  name: string;
  percentage: number;
}

interface Data {
  countries: Country[];
  packages: Package[];
  name: string;
  age: number;
  totalPremium: number;
  expensive: number;
  selectedPackage: string;
  country: Country;
}

interface Methods {
  redirect: Function;
  savePackage: Function;
  selectPackage: Function;
  savePackageItem: Function;
}

export default Vue.extend<Data, Methods>({
  name: "package-selection",
  data() {
    return {
      name: "",
      age: "",
      totalPremium: 0,
      expensive: 0,
      selectedPackage: "Standard",
      country: null,
      countries: [
        { label: "Hong Kong", code: "HKD", rate: 1 },
        { label: "USA", code: "USD", rate: 2 },
        { label: "Australia", code: "AUD", rate: 3 },
      ],
      packages: [
        { label: "Standard", name: "standard", percentage: 0, checked: true },
        { label: "Safe", name: "safe", percentage: 50 },
        { label: "Super Safe", name: "super-safe", percentage: 75 },
      ],
    };
  },
  watch: {
    age: function (val: number) {
      this.age = val;
      this.totalPremium =
        val * 10 * (this.country && this.country.rate ? this.country.rate : 1);
    },
    country: function (item: Country) {
      this.country = item;
      this.packages = this.packages.map(
        (packageItem: Package, index: number) => {
          if (!index) return { ...packageItem, checked: true };
          return { ...packageItem, checked: false };
        }
      );
      this.expensive = 0;
      this.totalPremium = this.age * 10 * (item && item.rate ? item.rate : 1);
    },
  },
  methods: {
    ...mapActions({
      savePackage: "packages/updatePackageValues",
    }),
    redirect() {
      if (this.name && this.age && this.country && this.totalPremium) {
        if (this.age >= 100) {
          this.$router.push({ path: "/age-error" });
        } else {
          this.$router.push({ path: "/package-summary" });
        }
      }
    },
    savePackageItem() {
      this.savePackage({
        name: this.name,
        age: this.age,
        country: this.country && this.country.label,
        premium: `${this.totalPremium + this.expensive}${
          this.country && this.country.code ? ` ${this.country.code}` : ""
        }`,
        package: this.selectedPackage,
      });
      this.redirect();
    },
    selectPackage(item: Package, expensive: number) {
      this.packages = this.packages.map((packageItem: Package) => {
        if (packageItem.name === item.name)
          return { ...packageItem, checked: true };
        return { ...packageItem, checked: false };
      });
      this.selectedPackage = item.label;
      this.expensive = expensive;
      if (!expensive) {
        this.totalPremium =
          this.age *
          10 *
          (this.country && this.country.rate ? this.country.rate : 1);
      }
    },
  },
  components: {
    packageView: PackageView,
  },
});
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

h2 {
  color: #1a1a1a;
  font-size: 24px;
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

.package-form,
.package-view {
  margin: 10px 40px 10px 40px;
}

.field {
  padding-bottom: 10px;
  width: 220px;
}

.field-input input {
  border: 2px solid #d8d8d8;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  outline: none;
}

.total-premium-value {
  padding-left: 10px;
}

.field-label {
  font-size: 16px;
  padding-bottom: 8px;
}

.total-premium {
  margin: 60px 40px;
}

.button {
  padding: 10px 30px;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}
</style>
