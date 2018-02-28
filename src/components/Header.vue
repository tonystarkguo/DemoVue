<template>
  <mt-header  fixed title="headerText" >
    <!--<router-link  to="" slot="left">-->
      <mt-button icon="back" @click="handleClose" slot="left" >返回</mt-button>
    <!--</router-link>-->
    <mt-button icon="more" slot="right" v-show="showRight"></mt-button>
  </mt-header>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
      name : "header",
      data () {
          return{
						
          }
      },
      
      created(){
        console.log(this)
      },
      props:['isLoginSun',"showRight","headerText"],
      methods:{
        handleClose:function(){
//        Toast('提示信息');
          window.history.go(-1);
        }
      }
  }
</script>

<style scoped>

</style>
