<template>
  <div>
    <button class="btn"><slot></slot></button>
  </div>
</template>

<script>
export default {
name: "Xbutton"
}
</script>

<style scoped>
  .btn {
    display: block;
    width: 100%;
    padding: 15px 0;
    margin: 10px 0;
    font-size: 25px;
    border-radius: 0;
    border: 0 solid black;
    background-color: #FF6000;
    color: white;
  }
</style>
