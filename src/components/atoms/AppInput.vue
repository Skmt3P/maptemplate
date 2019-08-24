<template>
  <input
    class="app-input"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :min="min"
    :max="max"
    :minlength="minlength"
    :maxlength="maxlength"
    :disabled="disabled"
    :readonly="readonly"
    :autofocus="autofocus"
    :required="required"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number]
    },
    max: {
      type: [String, Number]
    },
    minlength: {
      type: [String, Number]
    },
    maxlength: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    },
    handleInput(e) {
      const value = e.target.value
      this.$emit('input', value)
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-input {
  color: #666;
  padding: 0.5em;
}
</style>
