
<template>
  <div>
    <header class="big-text header-band">
      Test Project
    </header>
    
    <div class="pad10px">
      <p>Hello World!</p>
      
      <CounterButton class="content-box" :maxCount="buttonMaxCount" @onGreater="greaterPoint++"/>
      <p>point: {{greaterPoint}}</p>

      <div class="content-box">
        <div class="pad10px" v-if="isRoot()"><router-link to="/clock" class="link-box">Clock Page</router-link></div>
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import CounterButton from './CounterButton.vue';
import {useRoute} from "vue-router" 

export default defineComponent({
  name: "App",

  components: {
    CounterButton
  },

  setup(){
    const buttonMaxCount = 5;
    const greaterPoint = ref(0);
    const route = useRoute()

    const isRoot = () => route.path==="/"

    return {
      buttonMaxCount: buttonMaxCount,
      greaterPoint: greaterPoint,
      isRoot: isRoot
    }
  }
})


</script>

