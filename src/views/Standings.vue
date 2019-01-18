<template>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <Division :standings="standings.atlantic" title="Atlantic" />
        <Division :standings="standings.pacific" title="Pacific" />
      </div>
      <div class="tile is-ancestor">
        <Division :standings="standings.eastern" title="Eastern" />
        <Division :standings="standings.central" title="Central" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Division from "@/components/Division";
import atlantic from "@/data/standings-atlantic.json";
// Too lazy to scrape all the data
const pacific = [...atlantic];
const eastern = [...atlantic];
const central = [...atlantic];

const standings = {
  atlantic,
  pacific,
  eastern,
  central
};
export default {
  name: "Standings",
  components: {
    Division
  },
  data: function() {
    return {
      // What number of pts currently gets you into the playoffs
      playoffScore: {
        atlantic: atlantic[3].points,
        pacific: pacific[3].points,
        eastern: eastern[3].points,
        central: central[3].points
      },
      standings,
      formatter: function(division, points) {
        const reqScore = standings[division][3].points;
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
h1 {
  margin-bottom: 2rem;
}
</style>
