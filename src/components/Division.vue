<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">{{ title }} Division</p>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th></th>
            <th>Teams</th>
            <th>Points</th>
            <th><abbr title="Points Behind">PB</abbr></th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(team, index) in standings"
            :class="{
              'standings-last-playoff-team': index === 3,
              'standings-last-non-relegated-team': index === 5
            }"
            :key="team.team"
          >
            <td><img v-bind:src="team.img" /></td>
            <td>
              <router-link :to="'/teams/' + team.team.toLowerCase()">{{
                team.team
              }}</router-link>
            </td>
            <td>{{ team.points }}</td>
            <td>{{ formatter(team.points) }}</td>
            <td>{{ team.last }}-{{ 16 - team.last }}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<script>
export default {
  name: "Division",
  props: ["standings", "title"],
  data: function() {
    return {
      formatter: function(points) {
        const reqScore = this.standings[3].points;
        const pointsBehind = points - reqScore;
        if (pointsBehind > 0) {
          return "+" + pointsBehind;
        } else if (pointsBehind === 0) {
          return "—";
        } else {
          return pointsBehind;
        }
      }
    };
  }
};
</script>

<style scoped>
table td,
table th {
  vertical-align: middle;
  text-align: right;
}

.standings-last-playoff-team td,
.standings-last-non-relegated-team td {
  border-bottom: 1px solid black;
}
</style>
