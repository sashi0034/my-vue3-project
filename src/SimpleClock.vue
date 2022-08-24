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

export default defineComponent({
  name: "SimpleClock",


  setup(){
    const time = ref("00:00")

    return {
      time
    }
  }
});


// TODO: これを組み込む
async function updateTimeAsync(time: Ref<String>) {
  while(true){
    const date = new Date();
    const newTime = date.getHours() +":"+ date.getMinutes()
    time.value = newTime;
  }
}


</script>



