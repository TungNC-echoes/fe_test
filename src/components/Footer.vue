<template>
  <div class="footer display-flex">
    <el-row>
      <el-col :span="14">
        <div class="footer-left">
          © 2020 Fasterpay Ltd. All rights reserved.  Fasterpay Limited (FRN: 900681) is authorised by the Financial Conduct Authorityunder the Electronic Money Regulations 2011 for the issuing of electronic money and payment instruments.
        </div>
      </el-col>
      <el-col :span="10">
        <div class="footer-right">
          <div class="secure"><img src="@/assets/images/secure.svg"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Footer'
  }
</script>
<style type="text/css" scoped>
  .footer {
    height: 45px;
    background: #111052;
    border-radius: 0 0 8px 8px;
  }
  .footer-left {
    max-width: 523px;
    padding: 12px 0px 8px 19px;
    font-size: 9px;
  }
  .footer-right {
    float: right;
    padding: 10px 15px 12px 0;
  }
</style>
