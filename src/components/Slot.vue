<template>
<div class="bl_slot">
  <p class="el_slot_txt" style="text-align: center;">
    <template v-if="stopFlg">
      うんち！💩
    </template>
    <template v-else>
      {{ items[itemIdx] }}
    </template>
  </p>
  <div>
    <button
      @click="stopTimer"
      class="el_slot_btn"
    >
      STOP
    </button>
  </div>
</div>
<!-- /.bl_slot -->
</template>

<script>
export default {
  name: 'Slot',
  props: {
    items: Array
  },
  data () {
    return {
      itemIdx: 0,
      timer: null,
      stopFlg: false
    }
  },
  mounted () {
    this.startTimer()
  },
  unmounted () {
    this.stopTimer
  },
  methods: {
    countUp () {
      if (++this.itemIdx >= this.items.length) {
        this.itemIdx = 0
      }
    },
    startTimer () {
      this.timer = setInterval(this.countUp, 80)
    },
    stopTimer () {
      this.stopFlg = true
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.bl_slot {
}
.el_slot_txt {
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;
}
.el_slot_btn {
  margin: auto;
  display: block;
  width: 80px;
  height: 80px;
  font-weight: bold;
  color: rgb(8, 136, 255);
  border-radius: 100%;
  border-color: blue;
  background-color: rgb(220, 255, 247);
  cursor: pointer;
  box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.6);
  outline: none;
}
.el_slot_btn:hover {
  box-shadow: none;
  transform: scale(0.99);
}
</style>