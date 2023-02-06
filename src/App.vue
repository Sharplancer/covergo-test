<template>
  <div id="app">
    <div class="app-view">
      <div class="app-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  height: 100%;
  background: #f3f3f3;
}

.app-view {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-wrapper {
  width: auto;
}
</style>
