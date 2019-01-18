<template>
  <section class="section">
    <div class="container">
      <progress class="progress is-danger" value="10" max="100">15%</progress>
      <h1 class="title">Scores</h1>
      <h2 class="subtitle">Great score content was going here...</h2>
      <div class="main-content">
        <h2>Scores Page</h2>
        <ul>
          <li>Live Updates, including score, round.</li>
          <li>Match Previews for games that haven't started, including rosters, predictions</li>
          <li>Match Recaps for games that haven concluded</li>
        </ul>
        <h2>Match Pages</h2>
        <ul>
          <li>Live Updates from all four boards</li>
          <li>View all rounds, including match ups of later rounds, results of previous rounds</li>
          <li>Match Recaps for games that haven concluded</li>
          <li>
            <a href="/nba-chart.png">NBA style "Match Flow" Chart</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Scores"
};
</script>

<style scoped>
.main-content h2 {
  font-size: 1.2rem;
  font-weight: bold;
}
ul {
  list-style-type: disc;
}
li {
  margin: 1em;
}
</style>

