<template>
  <div class="bg-content">
    <nav class="flex items-center justify-between flex-wrap bg-menu p-2">
      <div class="flex items-center flex-shrink-0 mr-6 pl-3">
        <span class="font-semibold text-xl tracking-tight">Q</span>
      </div>
      <div class="block lg:hidden"></div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div v-if="$auth.user">
          <nuxt-link
            class="inline-block text-sm text-gray-700 px-4 py-2 leading-none hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"
            to="/"
            >PROJECTS</nuxt-link
          >
          <a
            href="#"
            class="inline-block text-sm text-gray-700 px-4 py-2 leading-none hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"
            @click="logout"
          >
            LOGOUT
          </a>
        </div>
      </div>
    </nav>

    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('login')
    }
  }
}
</script>

<style>
.bg-menu {
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 2px 2px grey;
  position: relative;
  z-index: 20;
}

.bg-content {
  background-color: rgb(244, 244, 244);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}
</style>
