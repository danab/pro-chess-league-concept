<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div id="main-brand" class="navbar-brand">
        <router-link @click.native="closeMenu" class="navbar-item" to="/">
          <img
            src="https://www.prochessleague.com/uploads/3/0/5/7/30579463/pro-title-logo_4.png"
          />
        </router-link>

        <a
          role="button"
          v-bind:class="{
            'navbar-burger': true,
            burger: true,
            'is-active': isActive
          }"
          @click="toggleActive"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span> <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        v-bind:class="{ 'navbar-menu': true, 'is-active': isActive }"
      >
        <div class="navbar-start">
          <router-link
            to="/scores"
            @click.native="closeMenu"
            class="navbar-item"
            >Scores</router-link
          >
          <router-link
            to="/standings"
            @click.native="closeMenu"
            class="navbar-item"
            >Standings</router-link
          >
          <router-link to="/teams" @click.native="closeMenu" class="navbar-item"
            >Teams</router-link
          >
          <router-link
            to="/players"
            @click.native="closeMenu"
            class="navbar-item"
            >Players</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data: function() {
    return { isActive: false };
  },
  methods: {
    toggleActive: function() {
      this.isActive = !this.isActive;
    },
    closeMenu: function() {
      this.isActive = false;
    }
  }
};
</script>

<style scoped>
#main-brand.navbar-brand a.is-active {
  background: #173744;
}
</style>
