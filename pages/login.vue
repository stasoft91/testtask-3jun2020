<template>
  <div class="flex justify-center flex-wrap h-full">
    <div class="w-1/5 p-2 self-center">
      <div class="w-full">
        <form
          class="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          @submit.prevent="login"
        >
          <div class="mb-4">
            <h2 class="font-semibold text-xl">LOGIN</h2>
          </div>
          <div class="mb-4">
            <input
              id="email"
              v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              required
              placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <input
              id="password"
              v-model="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              required
              placeholder="Password"
            />
            <p
              v-if="error.email || error.password"
              class="text-red-500 text-xs italic"
            >
              {{ error.email }} {{ error.password }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <z-btn type="submit" class="w-32">
              LOGIN
            </z-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import zBtn from '~/components/zBtn'
export default {
  middleware: 'auth',
  components: { zBtn },
  data() {
    return {
      email: '',
      password: '',

      error: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    clearError() {
      this.error = {
        email: null,
        password: null
      }
    },
    async login() {
      this.clearError()

      return await this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .catch((e) => {
          this.error = Object.assign(this.error, e.response.data.first_errors)
        })
    }
  }
}
</script>

<style>
.hasError {
  border-color: red;
}
</style>
