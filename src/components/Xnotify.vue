<template>
<div class="notify">
 <slot></slot>
</div>
</template>

<script>
export default {
name: "Xnotify"
}
</script>

<style lang="scss" scoped>
.notify {
  max-width: 700px;
  background: lightpink;
  border: 2px solid brown;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}
</style>
