var isRun = true;

function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie =cname+"=" + cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname+"=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(cname) != -1){
            return c.substring(name.length, c.length);
        }
    }
    return "fuck";
}

function checkCookie() {
    var number = getCookie("number");
    if (number == "fuck") {
        number = prompt("请输入随机的数量:", "");
        setCookie("number", number, 30);
        return number;
    } else {
        return number;
    }
}

//check cookie exits
var nub=checkCookie();

console.log(nub);

var a = range(1, nub);
// var a = ["张三", "李四", "王五", "赵六"];

function action(str) {
    var s = document.getElementById("bt").value;
    if (s == "开始抽奖") {
        isRun = true;
        run();
        document.getElementById("bt").value = "结束抽奖";
    } else {
        isRun = false;
        document.getElementById("bt").value = "开始抽奖";
    }
}

function run() {
    var i = Math.floor(Math.random() * a.length + 1) - 1;
    document.getElementById("show").innerHTML = a[i];
    if (isRun == false) {
        return;
    }
    setTimeout("run()", 10);
}

var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}