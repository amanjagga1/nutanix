<template>
  <div>
    <app-search-header :language="language" :repos= "totalCount"></app-search-header>
      <div class="columns">
        <div class="card column">
        <h2 v-if="search ===1" class="title is-2" style="text-align:center">Top repo's</h2>
        <h2 v-else class="title is-2" style="text-align:center">Repos for user {{language}}</h2>
        </div>
        <input id="repoNameSearchBox"class="input column" placeholder="Search repo by name" type="text" @keydown.up="searchRepo">
       </div>
        <app-search-results :repos="displayRepos"></app-search-results>
        <br />
        <nav class="pagination" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
            <li v-for="page in reposCount/3">
              <a :class="{'pagination-link': true, 'is-current' :activeClass == page}" :aria-label="'Page'+ page" aria-current="page" @click="switchPage((page-1) *3,page *3)" >{{page}}</a>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script>
import appSearchHeader from './SearchHeader.vue'
import appSearchResults from './SearchResults.vue'
export default {
  props: ['repos', 'totalCount','language', 'search'],
  data () {
    return {
      activeClass : 1,
      displayRepos: this.repos.length > 3 ?this.repos.slice(0,3): this.repos
    }
  },
  components: {
    appSearchHeader,appSearchResults
  },
  methods: {
    switchPage(a,b) {
      this.displayRepos = this.repos.slice(a,b);
      this.activeClass = a/3 +1;
    }
  },
  computed:{
    reposCount() {
      if (this.repos != undefined)
        return this.repos.length;
      return 0;
    },
  },
   watch: {
    repos: function(params) {
      if (this.repos != undefined && this.repos.length > 3)
        this.displayRepos = this.repos.slice(0,3);
      else if (this.repos != undefined && this.repos.length > 0)
        this.displayRepos = this.repos;
    }
    
  }
}
  
</script>

<style lang="css">
   #repoNameSearchBox {
     margin-left: 10px;
     top: 15px;
     position: relative;
   }
</style>

