<template>
  <div>
    <z-row class="bg-gray-500" disable-margin-top>
      <div class="flex items-center py-2">
        <z-btn inverse @click="$router.push('/')">BACK</z-btn>
      </div>
    </z-row>
    <z-row>
      <div class="flex items-center py-2">
        <span class="mr-10">Name</span>
        <input
          id="inline-full-name"
          v-model="project.name"
          :class="{
            'border-red-400': emptyName,
            'focus:border-red-600': emptyName,
            'focus:border-purple-500': !emptyName
          }"
          class="border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
          type="text"
        />

        <z-btn class="ml-2" @click="editName">OK</z-btn>
      </div>
    </z-row>
  </div>
</template>
<script>
import ZBtn from '~/components/zBtn'
import ZRow from '~/components/zRow'
import API_URL from '~/utils/API_URL'
export default {
  components: { ZBtn, ZRow },
  async asyncData(context) {
    const { project } = await context.$axios.$get(
      `${API_URL}/projects-manage/${context.route.params.id}`
    )
    return { project }
  },
  computed: {
    emptyName() {
      return this.project.name.length === 0
    }
  },
  methods: {
    async editName() {
      if (this.emptyName) {
        return
      }

      const projectFormData = new FormData()
      projectFormData.append('name', this.project.name)

      await this.$axios.$post(
        `${API_URL}/projects-manage/update?id=${this.$route.params.id}`,
        projectFormData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )

      this.$router.push('/')
    }
  }
}
</script>
