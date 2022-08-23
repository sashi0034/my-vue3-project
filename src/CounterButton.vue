
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

  setup(props){
    const count = ref(0)

    const onClick = () => {
      count.value++;
    }

    const isGreater = () => {
      return count.value >= (props.maxCount as number);
    }

    const reset = () => {
      count.value = 0;
    }

    return {
      count,
      onClick,
      isGreater,
      reset,
    }
  }
});


</script>



