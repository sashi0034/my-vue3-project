
<template>
  <div>
    <button @click="onClick">increase count</button>
    <div class="pad10px">
      count: {{ count }}<br>
      maxCount: {{ maxCount }}<br>
      <div v-if="isGreater()" class="big-text color-yellow">
        Congratulations!<br/>
        <button @click="reset">reset</button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import {defineComponent, ref} from "vue"

export default defineComponent({
  name: "CounterButton",
  components: {},
  props: {
    maxCount: Number,
  },
  emits: {
    onGreater(args: {count: number}){console.log("Become greater.")},
  },

  methods: {
    onClick() {
      this.count++;
      if (this.count == (this.maxCount as number)){
        this.$emit("onGreater", {count: this.count});
      }
    }
  },

  setup(props){
    const count = ref(0)

    const isGreater = () => {
      return count.value >= (props.maxCount as number);
    }

    const reset = () => {
      count.value = 0;
    }

    return {
      count,
      isGreater,
      reset,
    }
  }
});


</script>



