<template>
  <div id="user-info">
    <div class="content">
      <!--头像-->
      <div class="avatar">
        <img src="~assets/img/profile/avatar.svg">
      </div>
      <!--输入用户名密码-->
      <div class="input-area">
        <div class="userName">
          <!--<label for="certi1">用户名</label>-->
          <input type="text" id="certi1" placeholder="请输入用户名"/>
        </div>
        <div class="password">
          <!--<label for="certi2">密码</label>-->
          <input type="text" id="certi2" placeholder="请输入密码"/>
        </div>
      <!--登录按钮-->
        <div class="login">
          <button @click="btnClick">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    methods:{
      btnClick(){
        this.$toast.show('我们暂时还登录不了哦');
      }
    }
  }
</script>

<style scoped>
  #user-info{
    height: calc(100vh - 100px);
  }
  #user-info .content{
    position: relative;
    top:100px;
  }
  .avatar {
    text-align: center;
  }
  .avatar img {
    width: 100px;
  }
  .input-area{
    width: 100%;
    height: 100px;
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin-top: 5px;

  }
  .input-area input{
    border: 0;
    border-bottom: 1px solid var(--color-text);
    outline: none;
    height: 20px;
    margin-top:20px;
  }
  .input-area .login{
    display: block;
    margin-top: 20px;
  }
  .input-area .login button{
    width: 50px;
    background: var(--color-tint);
    color: #fff;
    border: 0;
    padding: 3px;
  }
</style>
