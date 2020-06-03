<template>
  <div>
    <z-row v-for="project in projects" :key="project.id">
      <nuxt-link :to="`project/${project.id}`">
        <z-card :project="project"></z-card>
      </nuxt-link>
    </z-row>
  </div>
</template>

<script>
import zRow from '~/components/zRow'
import zCard from '~/components/zCard'
import API_URL from '~/utils/API_URL'
export default {
  middleware: 'auth',
  components: { zRow, zCard },
  async asyncData(context) {
    const { projects } = await context.$axios.$get(
      `${API_URL}/projects-manage/index`
    )
    return { projects }
  }
}
</script>
