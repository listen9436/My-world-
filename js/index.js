$(function() {
	$(".begin_welcome").delay(600).animate({opacity:1},1200,function(){
		$(".begin_welcome").delay(1000).animate({opacity:0},1000,function(){
			$(".begin_welcome_two").delay(800).animate({opacity:1},1200,function(){
				$(".begin_welcome_two").delay(1000).animate({opacity:0},1000,function(){
					$(".start_text").delay(800).animate({opacity:1},1200,function(){
						$(".start_text").delay(500).animate({marginTop:-180},500,function(){
							$(".start").delay(0).animate({opacity:1,width:118,height:118,marginLeft:-59,marginTop:0,borderWidth:2,lineHeight:118},800,function(){
								$("#music").append("<audio id='music_bmg' src='images/bgm.mp3' autoplay loop></audio>");
								$(".music_itemBox").delay(2000).animate({opacity:1},600);
								sound();
								bideo();
							})										
						})
					})
				})
			})
		})				
	});
		function bideo(){
			var bv = new Bideo();
		bv.init({
			// Video element
			videoEl: document.querySelector('#background_video'),
			// Container element
			container: document.querySelector('body'),
			// Resize
			resize: true,
			// autoplay: false,
			isMobile: window.matchMedia('(max-width: 768px)').matches,
			playButton: document.querySelector('#play'),
			pauseButton: document.querySelector('#pause'),
			// Array of objects containing the src and type
			// of different video formats to add
			src: [{
				src: 'images/bg.mp4',
				type: 'video/mp4'
			}],
			// What to do once video loads (initial frame)
			onLoad: function() {
				$('#video_cover').delay(300).animate({opacity:0},300);
				}
			});
		}
		function sound(){
			function music_sound(){
			var a1 = Math.random()*21;
			var a2 = Math.random()*21;
			var a3 = Math.random()*21;
			var a4 = Math.random()*21;
			var a5 = Math.random()*21;
			$(".sound_item1").css({height:a1});
			$(".sound_item2").css({height:a2});
			$(".sound_item3").css({height:a3});
			$(".sound_item4").css({height:a4});
			$(".sound_item5").css({height:a5});
		}
		var timer = setInterval(music_sound,200);
		var open = true;
		var fa = 1;
		$(".music_itemBox").click(function(){
			if(open == true && fa == 1){
				open = false;
				clearInterval(timer);
				$(".item").css({height:2});
				$("#music_bmg")[0].pause();
				fa = 2;
			}else{
				open = true;
				timer = setInterval(music_sound,200);
				$("#music_bmg")[0].play();
				fa =1;
			}
//		console.log(open);
//		console.log(fa);
			});
		}	
		$(".start").click(function(){
			$(".start_text").animate({opacity:0},0);
			$(".start").animate({opacity:0},0);
//			var w = $(window).width();
//          var h = $("body").height();
//          $(".swiper-container").css({width:w,height:h});
            $(".swiper-container").fadeIn(600,function(){
            	$(".swiper-wrapper").animate({opacity:1},600);
            });
//          $(window).resize(function () {
//              var w2 = $(window).width();
//              var h2 = $("body").height();
//              $(".swiper-container").css({width:w2,height:h2});
//          })            
			var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					slidesPerView: 'auto',
					resistanceRatio: 0,
					paginationClickable: true,
					spaceBetween: 0,
					mousewheelControl: true,
					keyboardControl: true,
					freeMode: true,
					freeModeMomentumRatio: 1,
					freeModeMomentumVelocityRatio: 1,
					freeModeMomentumBounce: false
			});	
	})
})