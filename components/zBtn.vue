<template>
  <button
    class="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    :class="{
      'text-white bg-blue-800 hover:bg-blue-700': !inverse,
      'text-black bg-gray-300 hover:bg-gray-200': inverse
    }"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    inverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
