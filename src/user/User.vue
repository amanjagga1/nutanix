<template>
<div :v-if="repos">
  <app-search :repos = "repos" :totalCount="totalCount" :language="user.login" search=0></app-search>
</div>
</template>

<script>
import appSearch from './../search/Search.vue'
export default {
  data () {
    return {
      repos : {},
      queryParamter: this.$route.params.user, 
      user: '',
      totalCount: 0
    }
  },
  components: {
    appSearch
  },
  created() {
    var self = this;
    this.$http.get('https://api.github.com/search/users?q='+ this.queryParamter).then(response => {
      return response.json();
      }, error => {
      console.log(error);
      }).then(data => {
        self.user = data.items[0];
        this.$http.get(self.user.repos_url).then(response => {
          return response.json();
          }, error => {
          console.log(error);
          }).then(data => {
            self.repos = data;
            self.totalCount = data.total_count
          })
      })
  }
}
</script>

<style lang="css">
   
</style>
