<template>
  <div class="container">
    <app-headers></app-headers>
    <br>
    <div class= "columns">
      <div class="column is-two-thirds">
        <router-view :languages="languages"></router-view>
        <!--<app-home :languages="languages"></app-home>-->
      </div>
      <div class="column">
          <app-work></app-work>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Home from './home/Home.vue';
import awwWork from './home/AwwWork.vue';
export default {
  data () {
    return {
      languages : ['javascript','java','python','ruby','Php']
    }
  },
  components: {
    'appHeaders': Header,
    'appWork' : awwWork

  }
}
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
    body {
      background-color: #232020;
    }
</style>

