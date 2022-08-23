
<template>
  <div>
    <header class="big-text header-band">
      Test Project
    </header>
    <div class="pad10px">
      <p>
        Hello World!
      </p>
      
      <CounterButton class="content-box" :maxCount="buttonMaxCount"/>

    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import CounterButton from './CounterButton.vue';

export default defineComponent({
  name: "App",

  components: {
    CounterButton
  },

  setup(){
    const buttonMaxCount = 5;

    return {
      buttonMaxCount: buttonMaxCount
    }
  }
})


</script>

