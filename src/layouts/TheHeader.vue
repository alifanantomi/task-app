<template>
  <v-app-bar flat outlined fixed>
    <v-app-bar-nav-icon ></v-app-bar-nav-icon>
    <v-toolbar-title class="text-h6">Task app</v-toolbar-title>
    <v-spacer></v-spacer>
    <SearchBar></SearchBar>
    <v-spacer></v-spacer>
    <v-btn class="profile-bar" icon>
      <!-- <v-img src="@/assets/images/person.jpg" alt="username" class="username-img rounded-circle" max-height="30" max-width="30" ></v-img>-->
      <v-icon>mdi-file-plus-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      currentLocation: window.location.pathname
    }
  }
}
</script>

<style lang="sass" scoped>
  .v-app-bar
    background-color: #FFFFFF !important
</style>