~function(){
	new FastClick(document.body);
	var desW = 640,
		winW = document.documentElement.clientWidth,
		ratio = winW / desW,
		oMain = document.querySelector(".main");
	if(winW > desW){
		oMain.style.matgin = "0 auto";
		oMain.style.width = desW + "px";
		return;
	}
	document.documentElement.style.fontSize = ratio * 100 + "px";
}();
new Swiper('.swiper-container',{
	direction: 'vertical',
	// effect: 'fade',
	// pagination: '.swiper-pagination',
	paginationType: 'bullets',
	loop: true,

	/*当切换结束后，给当前展示的区域添加对应的id，由此实现对应的动画效果*/
	onSlideChangeEnd: function(swiper){
		var slideAry = swiper.slides,//获取当前一共有多少个活动块slide（包含loop模式下前后多加的两个）
			curIn = swiper.activeIndex,//当前展示这个区域的索引
		    total = slideAry.length;
		//计算ID是PAGE？
		var targetId = 'page';
		switch(curIn){
			case 0:
				targetId += total - 2;
				break;
			case total - 1:
				targetId += 1;
				break;
			default:
				targetId += curIn;
		}
		//给当前的活动块设置ID即可,还要把其余的移除
		[].forEach.call(slideAry, function(item, index){
			if(curIn === index){
				item.id = targetId;
				return;
			}
			item.id = null;
		});
	}
});
// //music
// ~function(){
// 	var musicMenu = document.getElementById('musicMenu'),
// 		musicAudio = document.getElementById('musicAudio');
// 	musicMenu.addEventListener('click',function(){
// 		if(musicAudio.paused){
// 			musicAudio.play();
// 			musicMenu.className = "music move";
// 			return;
// 		}
// 		musicAudio.pause();
// 		musicMenu.className = "music move1";
// 	},false);
// 	function controlMusic(){
// 		musicAudio.volume = 0.2;
// 		musicAudio.play();
// 		/*musicAudio.addEventListener('canplay',function(){
// 			// musicMenu.style.display = 'block';
// 			// $('#musicMenu').css('display','block');
// 			musicMenu.className = "music move";
// 		},false);*/
// 	}
// 	window.setTimeout(controlMusic, 1000);
// }();


