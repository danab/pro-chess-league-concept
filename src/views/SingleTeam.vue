<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image">
                <img
                  src="https://images.chesscomfiles.com/uploads/content/logos/StLouis_ArchBishops.png"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                {{ $route.params.teamAbbr.toUpperCase() }}
              </p>
              <p class="subtitle is-6">1st Place - Atlantic Division</p>
            </div>
          </div>

          <div class="content">
            <div class="tabs">
              <ul>
                <li class="is-active">
                  <router-link :to="`/teams/${$route.params.teamAbbr}`"
                    >News</router-link
                  >
                </li>
                <li>
                  <router-link :to="`/teams/${$route.params.teamAbbr}/schedule`"
                    >Schedule</router-link
                  >
                </li>
                <li>
                  <router-link :to="`/teams/${$route.params.teamAbbr}/roster`"
                    >Roster</router-link
                  >
                </li>
              </ul>
            </div>

            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Teams"
};
</script>
