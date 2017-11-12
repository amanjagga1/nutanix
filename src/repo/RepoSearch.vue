<template>
<div :v-if="topRepos.length > 0">
<app-search :repos = "topRepos" :totalCount="totalCount" :language="language" :search=1></app-search>
</div>
</template>

<script>
import appSearch from './../search/Search.vue'
export default {
  data () {
    return {
      topRepos: {},
      totalCount: {},
      language: this.$route.params.language
    }
  },
  components: {
    appSearch
  },
  methods: {
    getData() {
      let self = this;
      this.$http.get('https://api.github.com/search/repositories?q='+ this.language).then(response => {
        return response.json();
      }, error => {
        console.log(error);
      }).then(data => {
        data.items.sort(function(a,b) {
          if (a.stargazers_count < b.stargazers_count)
            return 1;
          if (a.stargazers_count > b.stargazers_count)
            return -1;
          return 0;
        });
        self.topRepos = data.items;
        self.totalCount = data.total_count;
        console.log(data);
      });
    }
  },
  watch: {
    '$route'(to, from) {
      this.language = to.params.language;
      this.getData();
      console.log("Language is " + to.params.language);
    }
  },
  created() {
    this.getData();
  }
}
</script>

<style lang="css">
   
</style>
