<template>
  <div class="hello">
    <!--<header-title></header-title>-->
    <div class="bg"></div>
    <div class="content">
      <div class="logo-show">
        <div class="logo-wrape" v-show="showTranslate">
          <img src="../assets/logo.png" width="180">
        </div>
      </div>
      <h1>{{ msg }}</h1>
      <login :isShowBack="isShowback"></login>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderTitle from './HeaderIndex.vue';
  import login  from './login'

  export default {
    name:'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your App',
        isShowback:false,
        showTranslate:true,
      }
    },
    components:{
      HeaderTitle,
      login
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

  html,body{

  }
  .bg{
    float: left;
    width: 100%;
    height:700px;
    text-align: center;
    line-height:700px;
    background-image: url("../assets/loginbg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    filter: blur(15px);
  }
  .content{
    position: absolute;
    left: 0px;
    right:0px;
    text-align: center;
  }
h1, h2 {
  font-weight: normal;
  text-align: center;
  font-size: 26px;
  color:whitesmoke;
  text-shadow:5px 5px 5px green;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    height: 30px;
  }
}

a {
  color: #42b983;
}
.logo-show {
  margin-top:50px;
  .logo-wrape{
    text-align: center;

  }
}
</style>
