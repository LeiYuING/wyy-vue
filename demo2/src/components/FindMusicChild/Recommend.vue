<template>
  <div>
    <music-nav></music-nav>
    <MusicOne></MusicOne>
  </div>
</template>

<script>
import MusicOne from "../MusicOne";
import MusicHead from "../MusicHead";
import MusicNav from "../MusicNav";

export default {
  components: {
    MusicOne,
    MusicHead,
    MusicNav
  },
  name: "index1"
}
</script>

<style scoped>

</style>
