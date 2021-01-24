<template>
  <div id="app">
    <x-notify class="error" v-if="error">{{error}}</x-notify>
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Xnotify from "@/components/Xnotify";
export default {
  components: {
    'x-notify': Xnotify
  },
  computed: {
    ...mapGetters({
      error: 'errorGetter'
    })
  }
}
</script>
<style lang="scss" scoped>
  .error {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }
</style>
