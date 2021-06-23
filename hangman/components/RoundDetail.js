app.component('round-detail', {
    data() {
        return {
            count: 0
        }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
})