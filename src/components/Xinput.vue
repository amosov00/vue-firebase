<template>
  <div>
    <div class="input"></div>
      <label class="input__label">{{label}}</label>
      <input
          class="input__field"
          :type="type"
          :value="value"
          @input="$emit('input', $event.target.value)"
          :class="{'input__field-invalid': invalid}"
      >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Xinput",
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'password'
    },
    value: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
  .input__field {
    width: 100%;
    display: block;
    padding: 10px;
    font-size: 20px;
  }
  .input__label {
    font-size: 20px;
  }
  .input__field-invalid {
    border: 2px solid red;
  }
  .input {
    margin-top: 5px;
    margin-bottom: 15px;
  }
</style>
