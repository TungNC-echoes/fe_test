<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="left-header">
          <div class="logo"><img src="@/assets/images/logo.svg"></div>
          <div class="united"><img src="@/assets/images/united.svg"></div>
        </div>
        <div class="right-header">
          <div class="logout">
            <img src="@/assets/images/logout.svg">
            <span>Log Out</span>
          </div>
          <div class="united">
            <img src="@/assets/images/earth.svg">
            <span>Eng</span>
          </div>
          <div class="help">
            <img src="@/assets/images/help.svg">
          </div>
        </div>
      </div>
    </div>
    <el-main>{{$t('success') }}</el-main>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    data() {
      return {}
    }
  }
</script>

<style type="text/css">
  @import "../assets/styles/main.css";
</style>
