<template>
<div class="columns">
  <input class="input column" type="text" value="Enter technology youa re looking for" v-model="language" @keydown.enter="navigate">
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-dark is-large">Repositories</span>
        <span class="tag is-info is-large">{{repos}}</span>
      </div>
  </div>
</div>

  
</template>

<script>

export default {
  props: ['language', 'repos'],
  data () {
    return {
    }
  },
  methods : {
    navigate() {
      console.log('language is' + this.language);
      this.$router.push({ path: '/search/'+this.language });
    }
  }
}
</script>

<style lang="css">
   
</style>

