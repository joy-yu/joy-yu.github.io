(function() {

    var can, ctx;
    var w, h;
    var bgImg = new Image();
    var starImg = new Image();
    var starNum,superStarNum;
    var lastTime, diffTime;


    function changeSize() {
        can.width = w = document.documentElement.clientWidth || document.body.clientWidth;
        can.height = h = document.documentElement.clientHeight || document.body.clientHeight;
    }
    window.onresize = function() {
        clearTimeout(changeSize);
        setTimeout(changeSize, 100);
    };

    function getRandom(from, to) {
        return Math.random() * (to - from) + from;
    };

    function init() {
        can = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        can.width = w = document.documentElement.clientWidth || document.body.clientWidth;
        can.height = h = document.documentElement.clientHeight || document.body.clientHeight;
        bgImg.src = 'img/bg.jpg';
        starImg.src = 'img/star.png';
        starNum = 100;
        superStarNum = 8;
        lastTime = Date.now();

        for (var i = 0; i < starNum; i++) {
            var obj = new star();
            stars.push(obj);
            stars[i].init();
        }

        for (var i = 0; i < superStarNum; i++) {
            var obj = new superStar();
            superStars.push(obj);
            superStars[i].init();
        }

        gameloop();
    }

    function drawImg() {
        ctx.drawImage(bgImg, 0, 0, w, h);
    }

    function gameloop() {
        var now = Date.now();
        diffTime = now - lastTime;
        lastTime = now;

        drawImg();
        drawStars();
        drawSuperStars();
        window.requestAnimationFrame ? requestAnimationFrame(gameloop) : setInterval(gameloop, 1000 / 16);

    }


    var stars = [];
    var star = function() {};
    star.prototype.init = function() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.framNum = Math.ceil(getRandom(0, 7));
        this.timer = 0;
    }
    star.prototype.draw = function() {

        this.timer += diffTime;
        if (this.timer > 200) {
            this.framNum++;
            this.framNum %= 7;
            this.timer = 0;
        }
        ctx.drawImage(starImg, this.framNum * 7, 0, 7, 7, this.x, this.y, 7, 7);
    }


    function drawStars() {
        for (var i = 0; i < starNum; i++) {
            stars[i].draw();
        }
    }



    var superStars = [];
    var superStar = function() {};
    superStar.prototype.init = function() {
        this.x = getRandom(0, w);
        this.y = 0;
        this.dx = -getRandom(80,150);
        this.dy = getRandom(80,150);
        this.speed = 0.07;
        this.vx = -this.dy * this.speed;
        this.vy = this.dy / this.dx * this.vx;

        this.alpha = getRandom(0, 1);
        this.width = getRandom(0, 3);
    };
    superStar.prototype.draw = function() {

        if (this.y < 0 || this.x < 0) {
            this.init();
            return;
        }
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,' + this.alpha + ')';
        ctx.lineWidth = this.width;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.dx, this.y + this.dy);
        ctx.stroke();
        ctx.closePath();
        this.x += this.vx;
        this.y += this.vy;
    };

    function drawSuperStars() {
        for (var i = 0; i < superStarNum; i++) {
            superStars[i].draw();
        }
    }



    var starInterval = setInterval(function() {
        var temp = Math.floor(getRandom(0, starNum));
        stars[temp].init();
        stars[temp].draw();
    }, 500);

    window.addEventListener('load', init);
}());
