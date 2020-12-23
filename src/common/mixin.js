import {debounce} from "common/utils";
import BackTop from 'components/content/backTop/BackTop';
export const itemMixin={
  data(){
    return {
      refresh:null
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh,100);
    this.scrollRefresh = ()=>{
      this.refresh();  //使用debounce
    };
    this.$bus.$on('itemImageLoad',this.scrollRefresh);
  }
}

//backTopMixin
export const backTopMixin={
  components:{
    BackTop
  },
  data(){
    return {
      showBackTop:false,
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    }
  }
}
