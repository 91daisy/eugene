$(function(){

  const $mainmnu = $('header > .left-menu > nav > .gnb > li');
  const $search = $('header > .left-menu> .widgets > .widget-tool > li>.main-search');
  const $language = $('header > .left-menu> .widgets > .widget-tool > li > .main-language')
  const $btnmedia = $('header > a.btn-gnb') 

  // nav 활성화
  $mainmnu.on('mouseover', function(){
    $(this).children('.lnb').stop().fadeIn(200);
  });

  $mainmnu.on('mouseout', function(){
    $(this).children('.lnb').stop().fadeOut(200);
  }); //end of nav 활성화

  
  // search&language 클릭이벤트
  $search.on('click', function(evt){
    evt.preventDefault();
    $(this).parent().toggleClass('on')
  });

  $language.on('click', function(evt){
    evt.preventDefault();
    $(this).parent().toggleClass('on')
  }); //search & language 클릭이벤트

  //미디어쿼리 햄버거버튼
  $btnmedia.on('click',function(evt){
    evt.preventDefault();
    $('.left-menu').toggle().prev().toggleClass('clse');
  });

  $(window).on('resize',function(){
	  
	  if($(this).width()>768){
		  $('.left-menu').show().prev().addClass('clse');
	  }else{
		  //$('.left-menu').hide();
		  if($('header > a.btn-gnb').hasClass('clse') && $('.left-menu').css('display')!='none'){
			  $('.left-menu').hide();
		  }else if(!$('header > a.btn-gnb').hasClass('clse') && $('.left-menu').css('display')=='block'){
			  $('.left-menu').show();
			  
		  }
	  }
  })

});