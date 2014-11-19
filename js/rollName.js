var isRun = true;
function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}
var a = range(1, 150);
// var a = ["张三", "李四", "王五", "赵六"];
var a2 = new Array();

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
        var b = true;
        for (var j in a2) {
            if (a2[j] == i) {
                b = false;
            }
        }
        if (b) {
            a2[a2.length] = i;
            return;
        }
    }
    setTimeout("run()", 10);
}