<template>
  <div class="pad10px">
    <header>
      Clock Time
    </header>
    <div>
      {{time}}
    </div>

    <div class="pad10px"><router-link to="/" class="link-box">Go Back</router-link></div>
  </div>
</template>


<script lang="ts">


import {defineComponent, ref, type Ref} from "vue"
import IntCounter from "./incCounter";
import { makeZeroPadding, sleep } from "./utils";
import { useRouter, type Router } from "vue-router";

export default defineComponent({
  name: "SimpleClock",

  props: {
    isAlive: Boolean
  },

  beforeRouteLeave(to, from, next){
    this.isAlive =false;
    next()
  },

  setup(props){
    const isAlive = ref(true);
    const time = ref("00:00")
    const router = useRouter();
    
    updateTimeAsync(time, isAlive, router);

    return {
      time,
      isAlive
    }
  }
});



async function updateTimeAsync(time: Ref<String>, isAlive: Ref<Boolean>, router: Router) {
  const count = new IntCounter();

  while(isAlive.value===true){
    count.addCount();

    if (count.value>10) {
      router.back();
      break;
    }

    const date = new Date();
    const newTime = makeZeroPadding(date.getHours(), 2) +":"+ makeZeroPadding(date.getMinutes(), 2) + ":" + makeZeroPadding(date.getSeconds(), 2)
    console.log(newTime);
    time.value = newTime;

    await sleep(1000);
}
}


</script>



