
require('./world.js');
// require("style-loader!css-loader!./style.css") 
// 执行这个命令之后 --webpack hello.js -o hello.bundle.js --module-bind 'css=style-loader!css-loader'就可以使用下面的引入了
require("./style.css")
function hello(str){
	alert(str);
}
hello('hello world！！！')