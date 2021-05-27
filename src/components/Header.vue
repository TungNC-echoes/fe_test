<template>
  <div class="header">
    <div class="header-content">
      <el-row>
        <el-col :span="12">
          <div class="left-header">
            <div class="logo"><img src="@/assets/images/logo.svg"></div>
            <div class="united"><img src="@/assets/images/united.svg"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right-header">
            <div class="logout">
              <img src="@/assets/images/logout.svg">
              <div>{{ $t('log_out') }}</div>
            </div>
            <div class="language">
              <img src="@/assets/images/earth.svg">
              <div>Eng</div>
            </div>
            <div class="help">
              <img src="@/assets/images/help.svg">
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style type="text/css" scoped>
  .header {
    height: 55px;
    background: #111052;
    border-radius: 8px 8px 0 0;
  }
  .header-content {
    display: flex;
    font-size: 14px;
    font-weight: 600;
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
    padding-right: 24px;
  }
  .header-content .logo {
    padding: 10px 25px;
  }
  .header-content .united {
    padding: 22px 0 16.5px 0;
  }
  .logout {
    padding: 15px 7px;
    display: -webkit-inline-box
  }
  .logout div {
    padding-top: 3px;
    padding-left: 7px;
  }
  .language {
    padding: 13px 4px;
    display: -webkit-inline-box
  }
  .language div {
    padding: 6px 24px 6px 7px;
  }
  .help {
    padding: 13px 0;
  }

</style>
