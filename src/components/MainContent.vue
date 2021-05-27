<template>
  <div class="content">
    <el-row>
      <el-col :span="16">
        <div class="pay-to display-flex">
          <div class="title">{{ $t('pay_to') }}</div>
          <img src="@/assets/images/pubg.svg">
          <div class="item-info">
            <div class="item-name">PlayerUnknown's Battlegrounds</div>
            <div class="display-flex account-pro">
              <div>FasterPay Business Pro Account</div>
              <img src="@/assets/images/verified.svg">
              <el-tooltip class="item" effect="dark" :content="$t('tooltip')" placement="right-end">
                <div class="verified">{{ $t('verified') }}</div>
              </el-tooltip>
            </div>
            <div class="star display-flex">
              <img src="@/assets/images/star.svg">
              <img src="@/assets/images/star.svg">
              <img src="@/assets/images/star.svg">
              <img src="@/assets/images/star.svg">
              <img class="drop-down" src="@/assets/images/dropdown.svg">
              <div class="rank">{{ dataResult.start }}</div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="my-account">
           <div class="title-my-account">{{ $t('my_account') }}</div>
          <div class="money-type">
            <img src="@/assets/images/eu.svg">
            <img src="@/assets/images/eu2.svg">
          </div>
        </div>
        <div class="bank-transfer">
          <div>{{ $t('bank_transfer') }}</div>
          <div>
            <el-row>
              <el-col :span="6">
                <div class="payment-method">
                  <img src="@/assets/images/fasterpay.svg">
                </div>
              </el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6"></el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="8">

      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Content',
    data() {
      return {
        dataResult: {
          start: '4.6'
        }
      }
    }
  }
</script>
<style type="text/css">
  .content {
    background: white;
    color: #070C11;
    padding: 24px 27px 10px 27px;
  }

  .pay-to {
    font-weight: 600;
    font-size: 20px;
  }

  .item-info {
    padding-left: 12px;
    padding-top: 10px;
  }

  .pay-to .title {
    padding-right: 16px;
    align-self: center;
  }

  .pay-to .item-name {
    font-size: 14px;
    line-height: 21px;
  }

  .account-pro {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }

  .account-pro img {
    padding-left: 16px;
    padding-right: 8px;
  }

  .verified {
    color: #1169FF;
  }

  .line {
    margin-top: 15px;
    margin-right: 100px;
    background: #538FFF;
    height: 1px;
  }

  .rank {
    font-size: 12px;
    line-height: 20px;
  }

  .drop-down {
    padding: 0 10px;
  }

  .title-my-account {
    padding-top: 17px;
    font-weight: 600;
    font-size: 21px;
  }

  .money-type {
    border: 1px solid #F2F7FF;
    box-sizing: border-box;
    box-shadow: 0px 5px 12px rgba(57, 40, 71, 0.2);
    border-radius: 4px;
    width: 138px;
    height: 70px;
    margin-top: 13px;
  }
  .money-type img {
    padding: 13px 9px 10px 15px;
  }
  .money-type img:last-child {
    padding-top: 0;
  }
  .bank-transfer {
    font-weight: 600;
    font-size: 16px;
    padding-top: 21px;
  }
  .payment-method {
    width: 110px;
    height: 72px;
    border: 1px solid #F2F7FF;
    box-sizing: border-box;
    box-shadow: 0px 5px 12px rgba(94, 104, 123, 0.2);
    border-radius: 4px;
  }
</style>
