<script setup lang="ts">

import {goToHref, HrefTypeEnum} from "@/utils/common";
import {ref} from "vue";

const selectNode = ref('item-0-0')
const data = ref([
  {
    name: 'Overview 组件总览',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Basic 基础组件',
    children: [
      {itemName: 'Button 按钮', address: ''},
      {itemName: 'Border 边框', address: ''},
      {itemName: 'Color 色彩', address: ''},
      {itemName: 'Container 布局容器', address: ''},
      {itemName: 'Icon 图标', address: ''},
    ]
  },
  {
    name: 'Form 表单组件',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Data 数据展示',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Navigation 导航',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Feedback 反馈组件',
    children: [
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
      {itemName: 'Overview 组件总览', address: '/main/overview'},
    ]
  },
  {
    name: 'Others 其他',
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
  margin: 2rem 4rem 0;
  
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
      width: 24rem;
      height: 4rem;
      padding-left: 2rem;
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