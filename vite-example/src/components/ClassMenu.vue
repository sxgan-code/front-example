<script setup lang="ts">

import {goToHref, HrefTypeEnum} from "@/utils/common";
import {ref} from "vue";

const selectNode = ref('item-0-0')
const data = ref([
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  }
])

function clickMenu(className: string, address: string) {
  console.log(className)
  selectNode.value = className
  // 跳转
  goToHref(HrefTypeEnum.LOCAL_HREF, address)
}
</script>

<template>
  <div class="menu-box"
       v-for="(outItem,outIndex) in data"
       :key="outItem.name+'-'+outIndex">
    <div class="class-title">{{ outItem.name }}</div>
    <div class="class-list">
      <div v-for="(innerItem,innerIndex) in outItem.children"
           :class="'list-item item-'+outIndex+'-'+innerIndex+' '+(selectNode==='item-'+outIndex+'-'+innerIndex?'select-node':'')"
           :key="innerItem.itemName+'-'+innerIndex"
           @click="clickMenu('item-'+outIndex+'-'+innerIndex,innerItem.address)">{{ innerItem.itemName }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 4rem;
  
  .class-title {
    font-family: "HarmonyOS Sans", sans-serif;
    font-size: 1.8rem;
  }
  
  .class-list {
    > div {
      font-family: "HarmonyOS Sans", sans-serif;
      margin: 1rem 2rem;
      font-size: 1.4rem;
      color: #666;
      width: 20rem;
      height: 4rem;
      padding-left: 1rem;
      line-height: 4rem;
    }
    
    > div:hover {
      background: #ECF5FF;
      color: #409EFF;
      border-radius: 0.8rem;
    }
    
    .select-node {
      background: #ECF5FF;
      color: #409EFF;
      border-radius: 0.8rem;
    }
  }
}
</style>