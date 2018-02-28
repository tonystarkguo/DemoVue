<template>
  <!--<headers></headers>-->
 <div class="home">
   <div class="home-header">
     <div class="policy">差旅政策</div>
     <div class="userinfo">
       <p class="username">{{username}}</p>
       <p class="company">{{company}}</p>
     </div>
   </div>
   <ul>
     <!--<li><router-link to="/Login">登录</router-link></li>-->
     <!--<li><router-link to="/Home">首页</router-link></li>-->
      <li>
       <span><router-link to="/Airplane">国内机票</router-link></span>
       <span><router-link to="/Airplane">天气</router-link></span>
     	</li>
     <li>
       <span><router-link to="/Airplane">酒店</router-link></span>
       <span><router-link to="/Airplane">火车票</router-link></span>
     </li>
     <li>
       <span><router-link to="/Airplane">用车</router-link></span>
       <span><router-link to="/Airplane">地图</router-link></span>
     </li>
     <li><router-link to="/Login">登录</router-link></li>
   </ul>
   <div id="map-container"> </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import Headers from './Header.vue';
	import User from '../router/user';
	import AMap from 'AMap';
//	import AMapUI from 'AMapUI';
  export default {
      name:"home",
      data () {
        return {
          msg: 'Welcome to Airplane',
          username:User.state.login_name.cnName,
          company:User.state.login_name.clientName,
        }
      },
      components:{
        Headers
      },
      created(){
      	
      },
      mounted(){
      	this.initLocation();
      },
      methods:{
				initLocation(){
				var selt=this;
					let mapObj = new AMap.Map('map-container', {
	          center: [117.000923, 36.675807],
	          zoom: 6
        	});
					mapObj.plugin(['AMap.Geolocation'], function () {
					          let geolocation = new AMap.Geolocation({
					            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
					            timeout: 10000, //  超过10秒后停止定位，默认：无穷大
					            maximumAge: 0, // 定位结果缓存0毫秒，默认：0
					            convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
					            showButton: true, //  显示定位按钮，默认：true
					            buttonPosition: 'LB',  // 定位按钮停靠位置，默认：'LB'，左下角
					            buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
					            showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
					            showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
					            panToLocation: true,  //  定位成功后将定位到的位置作为地图中心点，默认：true
					            zoomToAccuracy: true  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
					          })
					          mapObj.addControl(geolocation)
					          geolocation.getCurrentPosition()
					          AMap.event.addListener(geolocation, 'complete', (result) => {
					          	console.log(result.addressComponent);
					          	selt.getCityWeather(result.addressComponent.district)
					            mapObj.setCenter(result.position)
					          })  //  返回定位信息
					          AMap.event.addListener(geolocation, 'error', (result) => {
					            console.log(result)
					          })  //  返回定位出错信息
					        });
        
				},
				getCityWeather(city){
					this.$http.get(User.httpInfo.httpValueText+"weather?city="+city,{'city':city}).then(function(res){
						console.log(res,123)
					},function(err){
						console.log(err,456)
					});
				}

      }
  }

  console.log(User.state)
</script>

<style lang="scss">
  .home{
    .home-header{
      height: 98px;
      background: url("../assets/8b66665da24356bb.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center;
      background-origin:content-box;
      width: 100%;
      color: #fff;
      .policy{
        display: inline-block;
        height:30px;
        line-height:30px;
        width:70px;
        margin-left:10px;
        margin-top: 10px;
        border: 1px solid #ffff;
        border-radius: 5px;
        text-align: center;
        font-size:16px;

      }
      .userinfo{
        height:40px;
        text-align: center;
        p{
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        ;
        }
      }
    }
    ul{
      color: #fff;
      text-align: center;
      font-size: 0;
      .airplane{
        height:10rem;
        line-height: 10rem;
        font-size: 16px;
      }
      li{
        height:10rem;
        line-height: 10rem;
        span{
          display: inline-block;
          width: 50%;
          height: 60px;
          line-height: 60px;
          font-size: 16px;
        }
      }

    }
  }
</style>
