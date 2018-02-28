<template>
  <div>
    <headers-titl :showRight="isShowHeader" :headerText="titleText"></headers-titl>
  <ul>
  	<div class="contsnt-title">{{msg}}</div>
    <li>{{msg}}</li>
    <li><input type="text" class="" placeholder="出发城市" v-model="starCity">
    <router-link  to="/Airplane/Starcity">
      <button>出发城市</button>
    </router-link></li>
    <li><input type="text" class="" placeholder="出发城市" v-model="endCity">
    <router-link to="/Airplane/Endcity">

      <button>出发城市</button>
    </router-link></li>
    
    
  </ul>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  import HeadersTitl from './Header.vue';
  import User from '../router/user';
    export default {
        name: "airplane",
      data () {
        return {
          msg: "机票的预定",
          starCity:"",
          endCity:"",
          isShowHeader:false,
          titleText:"机票的预定",
        }
      },
      components:{
        HeadersTitl,
      }
    }
</script>

<style scoped lang="scss">
	ul{
		margin-top: 45px;
		text-align: center;
		font-size: 0;
		.contsnt-title{
			height:5rem;
			font-size: 18px;
		}
		li{
			font-size:16px;
			border: 1px solid green;
			button{
				height: 30px;
				line-height: 30px;
				width: 80px;
				margin-top:30px
			}
		}
	}
</style>
