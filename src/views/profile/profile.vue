<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">大王的商城</div></nav-bar>
    <user-info></user-info>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import UserInfo from './profileComponents/UserInfo'
  export default {
    name: "profile",
    components:{
      NavBar,
      UserInfo
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
