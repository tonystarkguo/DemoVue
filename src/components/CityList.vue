<template>
  <div>
  <mt-index-list >
    <mt-index-section :index="site.indexval" v-for=" site in sites ">
      <mt-cell v-for="value in site.list" :title="value.CN" @click.native="choseCity(value,$el)"></mt-cell>
    </mt-index-section>
  </mt-index-list>
  </div>
 
</template>

<script>
	 import User from '../router/user';
	 import { IndexList, IndexSection } from 'mint-ui';
    export default {
        name: "city-l-ist",
      data () {
        return {
          options: [],
          sites: []
        }
      },
      created () {
        this.getCity();
      },
      methods: {
          getCity: function(){
            let   dataTEXT='{"request":{"authKey":"","deviceID":"1111","platform":"H5","version":"1.0","location":"(0,0)","sessionID":"","channel":"2001","userID":"","userName":"hgwxt","password":"a123451","aesPwd":"a123451","requestType":"LoginWithMD5Pwd"}}'
            this.$http.post(User.httpInfo.httpValueText+"City", {dataJson: dataTEXT}, {emulateJSON: true}).then(function (res) {
              this.options=res.body.d.cityCodeList.sort(function(a,b){
                if(a.PY>b.PY){
                  return 1
                }else{
                  return -1
                }
              });

              var List=[{"indexval":"A","list":[]}];
              var self=this;
              var optionlist=self.options;
              for(var d in optionlist){
              	if(d<optionlist.length-1){
              		let f=Number(Number(d)+1)
              		if(optionlist[d].PY.substr(0,1)!=optionlist[f].PY.substr(0,1)){
              			 let citylist={"indexval":"A","list":[]};
              			citylist.indexval=optionlist[f].PY.substr(0,1);
              			List.push(citylist);
              		}else{
              				
              		}
              		
              	}else{
              		let h=Number(Number(d)-1)
              		if(optionlist[d].PY.substr(0,1)!=optionlist[h].PY.substr(0,1)){
              			let citylist={"indexval":"A","list":[]};
              			citylist.indexval=optionlist[d].PY.substr(0,1);
              			List.push(citylist);
              		}else{
              				
              		}
              	}
              	
              }
           
						for(let c in optionlist){
              		for(let d in List){
              			let isnext= true; 
              			if(optionlist[c].PY.substr(0,1)==List[d].indexval){
              				List[d].list.push(optionlist[c]);
              			}else{
              		
              			}
              		}
              	
              	}
              	
          
              this.sites=List
              console.log(List)
            }, function (err) {
              console.log(err)
            });
          },
       	choseCity:function(value,el){
       		console.log(this.$route,this.$route.path ,this.$route.params  ,this.$route.router,this.$route.matched )
       		this.$router.go(-1)
       	}
      },
      components: {

      }
    }
</script>

<style scoped>

</style>
