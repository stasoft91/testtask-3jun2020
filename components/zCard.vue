<template>
  <div class="text-gray-700 text-center bg-white p-2 card">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-2 p-5">
        <div
          class="logo"
          :style="{ backgroundImage: 'url(' + project.logo_url + ')' }"
        ></div>
      </div>
      <div class="col-span-3 text-left self-center">
        {{ project.name }}
      </div>
      <div
        class="col-span-3 self-center"
        :class="{ 'text-green-500': project.is_active }"
      >
        <span v-if="project.is_active">Active</span>
        <span v-else>Inactive</span>
      </div>
      <div class="col-span-4 text-left self-end">
        <table>
          <tr>
            <td>Time this week</td>
            <td class="font-semibold">
              {{ project.spent_time_week | secondsToTime }}
            </td>
          </tr>
          <tr>
            <td>this month</td>
            <td class="font-semibold">
              {{ project.spent_time_month | secondsToTime }}
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td class="font-semibold">
              {{ project.spent_time_all | secondsToTime }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import secondsToTimeFilter from '~/utils/mixins/secondsToTimeFilter'

export default {
  mixins: [secondsToTimeFilter],
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 0 2px lightgray;
}

td {
  padding-left: 5px;
  padding-right: 5px;
}

.logo {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
}

.self-end {
  justify-self: self-end;
}
</style>
