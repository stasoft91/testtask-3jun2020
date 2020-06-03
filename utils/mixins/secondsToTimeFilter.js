export default {
  filters: {
    secondsToTime(seconds) {
      const mins = Math.floor(seconds / 60)
      let h = Math.floor(mins / 60)
      let m = mins % 60
      let s = seconds % 60
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s
      return `${h}:${m}:${s}`
    }
  }
}
