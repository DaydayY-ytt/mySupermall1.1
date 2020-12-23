<template>
  <div>
    <div class="check-button-content" :class="{active:isActive}">
      <img src="~assets/img/cart/tick.svg" >
    </div>
  </div>
</template>

<script>
    export default {
      name: "CheckButton",
      props:{
        isActive: {
          type:Boolean,
          default:false
        }
      },
      methods:{
        btnClick(){
          this.isActive = !this.isActive;
        }
      }
    }
</script>

<style scoped>
  .check-button{
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*height:100%;*/
  }

  .check-button-content{
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    overflow: hidden;
  }

  .active{
    background-color: #ff8198;
    border-color: #ff8198;
  }
  .active img{
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
