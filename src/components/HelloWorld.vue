<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="left-header">
          <div class="logo"><img src="../assets/images/logo.svg"></div>
          <div class="united"><img src="../assets/images/united.svg"></div>
        </div>
        <div class="right-header">
          <div class="logout">
            <img src="../assets/images/logout.svg">
            <span>Log Out</span>
          </div>
          <div class="united">
            <img src="../assets/images/earth.svg">
            <span>Eng</span>
          </div>
          <div class="help">
            <img src="../assets/images/help.svg">
          </div>
        </div>
      </div>
    </div>
    <el-main>Main</el-main>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 55px;
    background: #111052;
    border-radius: 8px 8px 0 0;
  }

  .header-content {
    display: flex;
  }

  .header-content .logo {
    padding: 10px 25px;
  }
  .left-header {
    display: flex;
    float: left;
  }
  .right-header {
    display: flex;
    float: right;
  }
  .header-content .logo {
    padding: 10px 25px;
  }

  .header-content .united {
    padding: 22px 0 16.5px 0;
  }
</style>
