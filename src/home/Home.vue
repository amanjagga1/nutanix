<template>
    <ul>
        <span v-for="language in languages">
            <router-link :to="'/search/'+language">
                <li><app-language :language="language"></app-language></li>
                <br />
            </router-link>
        </span>
        
    </ul>
</template>

<script>
import awwWork from './AwwWork.vue';
import language from './Language.vue';
export default {
    props : ['languages'],
  data () {
      return {

      }
  },
  components: {
      'appLanguage' : language,
      'awwWork' : awwWork
  },
}

</script>

<style lang="css">
   
</style>

