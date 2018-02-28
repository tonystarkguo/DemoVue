var express=require('express');
var app =express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var fs=require("fs");




//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})

//  主页输出 "JSON"
app.get('/json', function (req, res) {
    console.log("主页 GET 请求");
    // res.send('Hello GET');
    res.status(200),
    // res.json(questions);
        fs.readFile("input.json",function(err,data){
            if(err){
                return console.error(err);
            } else{
                console.log(data.toString());
            }
        });
    var questions=fs.readFileSync("input.json");
    res.send(questions);
})
//  POST 请求
app.post('/LoginWithMD5Pwd', function (req, res) {
    res.status(200),
        // res.json(questions);
        fs.readFile("input.json",function(err,data){
            if(err){
                return console.error(err);
            } else{
                console.log(data.toString());
            }
        });
    var questions=fs.readFileSync("input.json");
    res.send(questions);
})
app.post('/City', function (req, res) {
  res.status(200),
    // res.json(questions);
    fs.readFile("city.json",function(err,data){
      if(err){
        return console.error(err);
      } else{
        console.log(data.toString());
      }
    });
  var questions=fs.readFileSync("city.json");
  res.send(questions);
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
