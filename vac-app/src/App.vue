<template>
  <div id="app">
    <div id="NavBar">
    <v-toolbar id="nav">
      <v-toolbar-title >
        NZGSSM Vaccination Education
      </v-toolbar-title>
      <div class="spacer"></div>
      <router-link to="/statistics">
        <v-toolbar-side-icon class="v-icon">
            <i id="navIcon" class="fas fa-chart-area"></i>
        </v-toolbar-side-icon>
      </router-link>
      <router-link to="/">
        <v-toolbar-side-icon>
            <i id="navIcon" class="fas fa-info-circle"></i>
        </v-toolbar-side-icon>
      </router-link>

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

a {
  text-decoration: none;
}

#nav{
  background: rgba(138, 7, 7, .8);
  color: white;
}
#navIcon {
  color:white;
}

</style>
