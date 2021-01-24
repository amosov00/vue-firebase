<template>
    <div class="card">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Xcard"
}
</script>

<style lang="scss" scoped>
@import "src/styles/main";

.card {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 10px 30px;
    max-width: 500px;
    background-color: white;
    border-radius: 10px;
}

</style>
