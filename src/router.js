import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Standings from "./views/Standings.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Standings
    },
    {
      path: "/news",
      name: "home",
      component: Home
    },
    {
      path: "/scores",
      name: "scores",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "scores" */ "./views/Scores.vue")
    },
    {
      path: "/players",
      name: "players",
      component: () =>
        import(/* webpackChunkName: "players" */ "./views/Players.vue")
    },
    {
      path: "/teams",
      name: "teams",
      component: () =>
        import(/* webpackChunkName: "teams" */ "./views/Teams.vue")
    },
    {
      path: "/teams/:teamAbbr",
      name: "teams",
      component: () =>
        import(/* webpackChunkName: "teams" */ "./views/SingleTeam.vue"),
      children: [
        {
          path: "",
          component: () =>
            import(/* webpackChunkName: "team-schedule" */ "./views/SingleTeamNews.vue")
        },
        {
          path: "schedule",
          component: () =>
            import(/* webpackChunkName: "team-schedule" */ "./views/SingleTeamSchedule.vue")
        },
        {
          path: "roster",
          component: () =>
            import(/* webpackChunkName: "team-roster" */ "./views/SingleTeamRoster.vue")
        }
      ]
    },
    {
      path: "/standings",
      name: "standings",
      component: () =>
        import(/* webpackChunkName: "standings" */ "./views/Standings.vue")
    }
  ],
  linkExactActiveClass: "is-active"
});
