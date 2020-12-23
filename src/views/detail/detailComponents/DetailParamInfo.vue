<template>
  <div class="param-info" v-if="Object.keys(itemParams).length !==0">
    <table v-for="(it,index) in itemParams.rule.tables" class="info-size" :key="index">
      <tr v-for="(itt,indey) in it" :key="indey">
        <td v-for="(ittt,indez) in itt" :key="indez">{{ittt}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="itp in itemParams.info.set">
        <td class="info-param-key">{{itp.key}}</td>
        <td class="info-param-value">{{itp.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="itemParams.image">
      <img :src="itemParams.image">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>
.param-info{
  padding: 20px 15px;
  font-size: 14px;
  boeder-bottom:5px solid #f2f5f8;
}
  .param-info table{
    width:100%;
    border-collapse: collapse;
  }
  .param-info table tr{
    height: 42px;
  }
  .param-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param-key{
    width: 95px;
  }
  .info-param{
    border-top:1px solid rgba(0,0,0,.1);
  }
  .info-param-value{
    color: #eb4868;
  }
  .info-img img{
    width: 100%;
  }
</style>
