window.onload = function() {
  /*
  function $$(elm){
    if(typeof elm !== 'string') console.warn('请使用正确的css选择器调用此方法...');
    return document.querySelector(elm);
  }
  */
  var bannerTitle = document.querySelector('.banner-title');
  var pageNav = document.getElementById('page-nav');
  var pageBanner = document.getElementById('page-banner');
  var pageIntro = document.getElementById('page-intro');
  var pageSkill = document.getElementById('page-skill');
  var pageFe = document.getElementById('page-fe');
  var pagePic = document.getElementById('page-pic');
  var navBanner = document.getElementById('nav-banner');
  var navIntro = document.getElementById('nav-intro');
  var navSkill = document.getElementById('nav-skill');
  var navFe = document.getElementById('nav-fe');
  var navPic = document.getElementById('nav-pic');
  var loading = document.querySelector('.loading');



  var numPerLoad = 10;
  var totalPic = 0;
  var picBox = document.querySelector('.pic-box');

  function getDiffY(elm) {
    return elm.getBoundingClientRect().top;
  }

  function gImg(data, num, total) {
    var imgAddress = 'http://omliy554c.bkt.clouddn.com/';
    var imgFrame = document.createDocumentFragment();
    for (var i = total, len = total + num; i < len; i++) {
      if(!data[i]){loading.textContent = loading.getAttribute('data-loaded');break;} 
      var imgFigure = document.createElement('figure');
      imgFigure.className = 'img-figure';
      imgFigure.innerHTML = '<img src="' + imgAddress + data[i] + '"alt="消失的图片"/><figcaption>' + data[i] + '</figcaption>';
      imgFrame.appendChild(imgFigure);
    }
    totalPic = total + num;
    picBox.appendChild(imgFrame);
  }

  function makeFixedBottom(elm) {
    var totalH = document.body.scrollHeight || document.documentElement.scrollHeight;
    var clientH = window.innerHeight || document.documentElement.clientHeight;
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    var diffY = totalH - clientH - scrollH;
    var elmHeight = elm.offsetHeight;

    if (scrollH > clientH - elmHeight) {
      pageNav.style.position = 'fixed';
      pageNav.style.top = 0;
    } else {
      pageNav.style.position = '';
      pageNav.style.top = '';
    }
  }



  window.addEventListener('scroll', function(e) {
    var totalH = document.body.scrollHeight || document.documentElement.scrollHeight;
    var clientH = window.innerHeight || document.documentElement.clientHeight;
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    var diffY = totalH - clientH - scrollH;
    makeFixedBottom(pageNav);

    if (diffY < 20) {
      if(totalPic > imgData.length) {return;}
      setTimeout(gImg.bind(null, imgData, numPerLoad, totalPic), 500);
    }
  });

  function init(){
    makeFixedBottom(pageNav);
    gImg(imgData, numPerLoad, totalPic);
  }
  init();

}
