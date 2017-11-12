<template>
<div class="card">
  <div class="card-content">
    <h2 class="title is-2">Awwww Work</h2>
    <div class="level" v-for="(desc,link) in work">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong><a :href="'http://www.' + link">{{link}}</a></strong>
          </p>
        </div>
      </div>
      <div class="level-right">
        <strong>{{desc}}</strong>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data () {
      return {
          work : {'legpin.com' : 'Personal resume', 'talkinglobby.com' : 'Forum for tech park' }
      }
  },
  components: {
     
  }
}
</script>

<style lang="css">
   
</style>

