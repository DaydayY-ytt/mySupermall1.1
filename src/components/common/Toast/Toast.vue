<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
      name: "Toast",
      // props:{
      //   message:{
      //     type:String,
      //     default:''
      //   },
      //   showToast:{
      //     type: Boolean,
      //     default: false
      //   }
      // }
      data(){
        return {
         message:'',
         isShow:false
        }
      },
      methods:{
        show(res,maintain = 500){
          this.message =res;
          this.isShow = true;
          setTimeout(()=>{
            this.message='';
            this.isShow = false;
          },maintain);
        }
      }
    }
</script>

<style scoped>
  .toast{
    background-color: rgba(0,0,0,.75);
    color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 13px;
    z-index: 999;
  }
</style>
