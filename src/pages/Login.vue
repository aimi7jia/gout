<template>
  <div class="login">
    <span class="logo"></span>
    <div v-if="type">
      <input type="text" class="big_txt" placeholder="请填写专属邀请码">
    </div>
    <div v-else>
      <input type="text" class="big_txt" v-model.trim="phone" placeholder="请输入大陆11位手机号码">
      <div class="phone-valide">
        <input type="text" class="big_txt" v-model.trim="phoneValide" placeholder="请输入手机验证码">
        <span class="valide_btn">发送验证码</span>
      </div>
      <input type="text" class="big_txt" v-model.trim="inviteNum" placeholder="请填写专属邀请码">
    </div>
    <router-link to="/healthCenter" class="btn">登录</router-link>
  </div>
</template>

<script>
import norBtn from '../components/btn.vue'
import maskBox from '../components/mask.vue'
export default {
  name: 'login',
  data () {
    return {
      type: false,
      phone: '',
      phoneValide: '',
      inviteNum: ''
    }
  },
  components: {
    'mask-box': maskBox,
    'btn': norBtn
  },
  methods: {
    goTo () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../assets/css/base'
  .login
    text-align: center;
    span.logo
      margin-top:2rem;
    .btn
      margin-top:1rem;
    .phone-valide
      border-bottom: 1px solid #ccc;
      display:inline-block;
      text-align:left;
      width: 8.35rem;
      position: relative;
      .big_txt
        border-bottom: none;
        width:4rem;
      .valide_btn
        position: absolute;
        right:0;
        top:50%;
        transform:translateY(-50%);
        -webkit-transform:translateY(-50%);
        width: 2.78rem;
        txtH(1.26rem);
        text-align: center;
        border-radius:0.148rem;
        font-size:0.416rem;
        color:#fff;
        background: #DCC897;
  .big_txt
    width: 8.35rem;
    height: 1.9rem;
    border-bottom: 1px solid #ccc;
  .logo 
    display:inline-block;
    width: 2.96rem;
    height: 2.96rem;
    iconBg(url("../assets/images/logo.png"));
</style>
