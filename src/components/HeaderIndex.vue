<template>
  <mt-header fixed title="页头">
    <router-link to="/Login" slot="right" v-if="!error">
      <mt-button icon="">登陆</mt-button>
    </router-link>
    <router-link to="/" slot="right" v-if="error">
      <mt-button icon="">{{msg}}</mt-button>
    </router-link>
    <router-link to="/" slot="left" v-if="index">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
    export default {
        name: "header-index",
      data(){
          return{
           error:false,
            username:"",
            index:false,
          }
      },created(){

      }
    }
</script>

<style scoped>

</style>
