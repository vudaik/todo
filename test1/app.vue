<template>
  <div>
    <a :href="getUrl()">url</a>                         <!-- thuộc tính của thẻ HTML, cần phải định nghĩa hàm, getUrl()-->
    <button @click="getUrl">AAAAAA</button>             <!-- gọi sự kiện, k cần định nghĩa hàm -->
  </div>

  <div :class="{'active': isActive}">                   <!-- binding class của thẻ -->
    Content here...
  </div>

  <div v-bind:style="{ color: getTextColor, fontSize: getFontSize + 'px' }">
    Content here...
  </div>

  <!-- <div> {{ var }}</div> -->

</template>


<script setup lang="ts">

  const data = reactive({
    url: 'https://v2.nuxt.com/',
    isActive: true,
    textColor: 'blue',
    fontSize: 19 
  })

  const dt = ref (4) 

  const getUrl = () => data.url
  const getActive = () => data.isActive                 // chạy mỗi khi div được load tới
  const isActive = computed ( () => data.isActive )     // khi có thay đổi, computed() mới chạy
  const getTextColor = computed ( () => data.textColor = 'red' ) 
  const getFontSize = computed ( () => data.fontSize+=3 ) // update logic  



</script>