<template>
  <div class="flex justify-center flex-wrap">
    <div
      class="xl:w-6/12 md:w-8/12 w-full p-2"
      :class="{ 'mt-4': !disableMarginTop }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disableMarginTop: {
      type: Boolean,
      default: false
    }
  }
}
</script>
