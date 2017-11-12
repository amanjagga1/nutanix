import Home from './home/Home.vue'
import Search from './search/Search.vue'
import User from './user/User.vue'
import RepoSearch from './repo/RepoSearch.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/search/:language', component: RepoSearch},
  {path: '/users/:user', component: User},
];