<template>
  <button @click="event">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    event() {
      this.$emit('child-event', '山田');
    },
  },
}
</script>
<!-- 参照：https://qiita.com/tsuka-rinorino/items/fef323e9e83260b1ae6f -->