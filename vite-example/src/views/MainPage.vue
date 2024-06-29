<script setup lang="ts">

import IconAppLogo from "@/components/icons/IconAppLogo.vue";
import IconGithubLogo from "@/components/icons/IconGithubLogo.vue";
import {goToHref, HrefTypeEnum} from "@/utils/common";
</script>

<template>
  <div class="root-box">
    <div class="box-head">
      <div class="head-logo">
        <div>
          <IconAppLogo/>
        </div>
        <h1>综合案例</h1>
      </div>
      <div class="github-logo">
        <div @click="goToHref(HrefTypeEnum.ONLINE_HREF,'https://github.com/sxgan-code/front-example')">
          <IconGithubLogo/>
        </div>
      </div>
    </div>
    <div class="box-body">
      <div class="menu-box">
      
      </div>
      <div class="main-content">
      
      </div>
    </div>
  
  </div>


</template>

<style scoped lang="scss">
.root-box {
  width: 100vw;
  
  .box-head {
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.15rem solid #ccc;
    
    .head-logo {
      display: flex;
      line-height: 7rem;
      margin: 0 2rem;
      
      div {
        height: 5rem;
        width: 5rem;
        margin: 1rem 0;
      }
      
      h1 {
        font-family: "HarmonyOS Sans", sans-serif;
        font-size: 2.5rem;
        color: #409EFF;
        margin: 0 1rem;
      }
      
    }
    
    .github-logo {
      div {
        height: 4rem;
        width: 4rem;
        margin: 1.5rem 2rem;
      }
    }
  }
  
  .box-body {
  
  }
  
  
}


</style>