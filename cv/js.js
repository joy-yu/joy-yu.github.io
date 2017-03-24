window.onload = function() {

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

  var pageNavHeight = pageNav.scrollHeight;

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
      var imgFigure = document.createElement('figure');
      imgFigure.className = 'img-figure';
      imgFigure.innerHTML = '<img src="' + imgAddress + data[i] + '"alt="消失的图片"/><figcaption>' + data[i] + '</figcaption>';
      imgFrame.appendChild(imgFigure);
    }
    totalPic = total + num;
    picBox.appendChild(imgFrame);
  }
  gImg(imgData, numPerLoad, totalPic);


  /*
  var diffTimer = null;
  navSkill.addEventListener('click', function(e) {
    clearInterval(diffTimer);
    var diffSkill = getDiffY(pageSkill);
    var scrollSpeed = diffSkill / 10;

    diffTimer = setInterval(function() {
      console.log(document.body.scrollTop, diffSkill);
      if (diffSkill > 0) {
        document.body.scrollTop += scrollSpeed;
        diffSkill = Math.round(diffSkill - scrollSpeed);
        if (diffSkill < 0) {
          clearInterval(diffTimer);
        }
      } else if (diffSkill < 0) {
        document.body.scrollTop += scrollSpeed;
        diffSkill = Math.round(diffSkill - scrollSpeed);
        if (diffSkill > 0) {
          clearInterval(diffTimer);
        }
      } else {
        clearInterval(diffTimer);
      }
    }, 17);
  });
  */

  window.addEventListener('scroll', function(e) {
    var totalH = document.body.scrollHeight || document.documentElement.scrollHeight;
    var clientH = window.innerHeight || document.documentElement.clientHeight;
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    var diffY = totalH - clientH - scrollH;


    if (scrollH > clientH - pageNavHeight) {
      pageNav.style.position = 'fixed';
      pageNav.style.top = 0;
    } else {
      pageNav.style.position = '';
      pageNav.style.top = '';
    }

    if (diffY < 20) {
      setTimeout(gImg.bind(null, imgData, numPerLoad, totalPic), 500);
    }
  });

  setTimeout(function(){
    bannerTitle.className +=' fadeDown';
  },300)
}
