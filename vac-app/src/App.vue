<template>
  <div id="app">
    <div id="NavBar">
      <v-toolbar>
        <v-toolbar-title>
          Get the vacc don't be slacc
        </v-toolbar-title>
        <div class="spacer"></div>
        <v-toolbar-side-icon class="v-icon">
          <router-link to="/statistics">
            <i class="fas fa-chart-area"></i>
          </router-link>
        </v-toolbar-side-icon>
        <v-toolbar-side-icon>
          <router-link to="/">
            <i class="fas fa-info-circle"></i>
          </router-link>
        </v-toolbar-side-icon>
      </v-toolbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App',
    comments: {},
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
