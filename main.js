//获取登陆模型
var modal = document.getElementById('geton');
//点击窗口外进行关闭
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}