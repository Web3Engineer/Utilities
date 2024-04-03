function imgRaw (_id, _zindex, _src, _topStart='0px', _leftStart='0px', _position='absolute'){
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.id = _id;
    img.src = _src;
    img.style.position = _position;
    img.style.zIndex = _zindex;
    img.style.top = _topStart;
    img.style.left = _leftStart;
    div.appendChild(img);
    document.body.appendChild(div);
    }
    imgRaw('imgID1', 11, './shoot.gif', '500px', '500px');
    imgRaw('imgID1', 11, './shoot.gif', '200px', '200px');
    imgRaw('imgID2', 10, './rect.jpeg');
    imgRaw('imgID2', 10, './rect.jpeg', '200px', '200px');
    
    function imgCascade (_id, _zindex, _src){
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.id = _id;
    img.src = _src;
    img.style.position = 'relative';
    img.style.top = 'auto';
    img.style.left = 'auto';
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.zIndex = _zindex;
    div.appendChild(img);
    document.body.appendChild(div);
    }
    imgCascade('imgID4', -10, './beach.jpg');
    //imgCascade('imgID5', -10, './cabin.jpg');
    //imgCascade('imgID6', -10, './cross.png');
    
    
    function txtCascade (_id, _txt='_txt Argument Missing!', _zindex=0, _align='center', _fontPX='16px', _color='black', _fontFam='ariel', _bgAllColor='red', _padding='5px', _border='solid 5px black', _margin='5px'){
    const div = document.createElement("div");
    div.style.zIndex = _zindex;
    div.style.textAlign = _align;
    div.style.fontSize = _fontPX;
    div.style.color = _color;
    div.style.fontFamily = _fontFam;
    div.style.backgroundColor = _bgAllColor;
    div.style.padding = _padding;
    div.style.border = _border;
    div.style.margin = _margin;
    div.id = _id;
    div.innerText = _txt;
    document.body.appendChild(div);
    }
    txtCascade('txtID1', 'Some Text !!!', '3', 'center', '60px', 'green', 'luminari, monospace', 'blue', '60px', 'solid 10px green', '60px');
    //txtCascade('txtID2', 'Some Text ###', '3', 'right', '30px', 'red', 'cursive, monospace', 'yellow', '30px', 'solid 20px blue', '30px');
    //txtCascade('txtID3', 'S0me Text +++', '3', 'left', '15px', 'orange', 'consolas, monospace', 'brown', '15px', 'solid 20px red', '15px');
    //txtCascade();
    
    
    function imgUp(_imgID, _distance, _time) {
      const img = document.getElementById(_imgID);
      const topPos = parseInt(img.style.top) || 0;
      const startTime = performance.now();
      const duration = _time * 1000;
    
      function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newPos = topPos - (_distance * progress);
        img.style.top = newPos + "px";
    
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
    
      requestAnimationFrame(animate);
    }
    //imgUp('imgID1', 300, 1);      
    
    function imgDown(_imgID, _distance, _time) {
      const img = document.getElementById(_imgID);
      const start = performance.now();
      const startY = img.offsetTop;
      const endY = startY + _distance;
    
      function step() {
        const elapsed = performance.now() - start;
        const progress = elapsed / (_time * 1000);
        const newY = startY + (endY - startY) * progress;
    
        if (progress < 1) {
          img.style.top = newY + 'px';
          requestAnimationFrame(step);
        } else {
          img.style.top = endY + 'px';
        }
      }
      requestAnimationFrame(step);
    }
    imgDown('imgID1', 300, 2);
    imgDown('imgID4', 300, 2);
    
    function imgLeft(_imgID, _distance, _time) {
      const img = document.getElementById(_imgID);
      const distancePerMs = _distance / (_time * 1000);
      const initialPos = parseInt(img.style.left) || 0;
      const startTime = performance.now();
    
      const move = function(currentTime) {
        const elapsedTime = currentTime - startTime;
        const newPos = initialPos - (elapsedTime * distancePerMs);
        img.style.left = newPos + "px";
        if (elapsedTime < (_time * 1000)) {
          requestAnimationFrame(move);
        }
      };
    
      requestAnimationFrame(move);  
    }
    //imgLeft('imgID1', 300, 1);
    
    function imgRight(_imgID, _distance, _time) {
      const img = document.getElementById(_imgID);
      const start = performance.now();
      const startX = img.offsetLeft;
      const endX = startX + _distance;
    
      function animate() {
        const elapsed = performance.now() - start;
        const progress = elapsed / (_time * 1000);
    
        if (progress > 1) {
          img.style.left = endX + 'px';
          return;
        }
    
        const newX = startX + (progress * _distance);
        img.style.left = newX + 'px';
    
        requestAnimationFrame(animate);
      }
    
      requestAnimationFrame(animate);
    }
    imgRight('imgID1', 300, 2);
    imgRight('imgID4', 300, 2);
    
    
    function imgResize(_imgID, _targetSize, _time) {
    
    const img = document.getElementById(_imgID);
    
    img.onload = function() {
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const startWidth = img.offsetWidth || img.width;
    const startHeight = img.offsetHeight || img.height;
    const startTime = performance.now();
    
    function animate() {
      const elapsedTime = performance.now() - startTime;
      if (elapsedTime >= _time * 1000) {
        img.style.width = _targetSize + 'px';
        img.style.height = (_targetSize * naturalHeight) / naturalWidth + 'px';
        return;}
    
      const progress = elapsedTime / (_time * 1000);
      const currentWidth = startWidth + (_targetSize - startWidth) * progress;
      const currentHeight = startHeight + ((_targetSize * naturalHeight) / naturalWidth - startHeight) * progress;
      img.style.width = currentWidth + 'px';
      img.style.height = currentHeight + 'px';
      window.requestAnimationFrame(animate);
    }
    
    window.requestAnimationFrame(animate);
    };
    
    
    }
    //imgResize('imgID1', 300, 6);
    //imgResize('imgID2', 300, 6);
    
    
    function imgReduceOpacity(_imgID, _targetOpacity, _time) {
        const img = document.getElementById(_imgID);
        const originalOpacity = parseFloat(getComputedStyle(img).opacity);
        const start = performance.now();
        
        function reduceOpac(timestamp) {
          const timeElapsed = timestamp - start;
          const opacity = Math.max(originalOpacity - (timeElapsed / (_time * 1000)), _targetOpacity);
          img.style.opacity = opacity;
          
          if (timeElapsed < (_time * 1000)) {requestAnimationFrame(reduceOpac);}
        }
        
        requestAnimationFrame(reduceOpac);
      }
    imgReduceOpacity('imgID1', .2, 5);//('ID, 0-1, DURATION_IN_SECONDS')
    imgReduceOpacity('imgID4', .2, 5);
    
    ////Makes transparent instantly, then increases to target opacity with a delay of n-Seconds.  
    function imgAddOpacity(_imgID, _targetOpacity, _time) {
        const img = document.getElementById(_imgID);
        const startOpacity = img.style.opacity;
        const startTime = performance.now();
      
        const animate = function() {
          const timeElapsed = performance.now() - startTime;
          const progress = timeElapsed / (_time * 1000);
      
          if (progress > 1) {
            progress = 1;
          }
      
          const currentOpacity = startOpacity - (startOpacity - _targetOpacity) * progress;
          img.style.opacity = currentOpacity;
      
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
      
        requestAnimationFrame(animate);
      }
    //imgAddOpacity('imgID1', 1, 10);//('ID, 0-1, DURATION_IN_SECONDS')
    
    
    function imgSpin(_imgID, _revolutions = 1, _time = 5000, _angle = 0) {
        const img = document.getElementById(_imgID);
        const startAngle = _angle;
        const startTime = performance.now();
        const endTime = startTime + _time;
      
        function rotate() {
          const now = performance.now();
          if (now >= endTime) {
            img.style.transform = `rotate(${startAngle}deg)`;
            return;
          }
          const elapsed = now - startTime;
          const progress = elapsed / _time;
          const angle = progress * 360 * _revolutions + startAngle;
          img.style.transform = `rotate(${angle}deg)`;
          requestAnimationFrame(rotate);
        }
      
        requestAnimationFrame(rotate);
      }
    imgSpin('imgID1', 3, 3000, 180);//(ID, REVOLUTIONS, TIME, START_AND_STOP_ANGLE)  
    imgSpin('imgID4', 3, 3000, 180);
    
    function imgSpin360(_imgID, _time = 1, _angle = 360,) {
      const img = document.getElementById(_imgID);
      const start = performance.now();
      const end = start + _time * 1000;
      
      function animate() {
        const now = performance.now();
        const progress = (now - start) / (_time * 1000);
        const angle = _angle * Math.min(progress, 1);
        img.style.transform = 'rotate(' + angle + 'deg)';
        if (now < end) {
          window.requestAnimationFrame(animate);
        }
      }
      
      window.requestAnimationFrame(animate);
    }
    //imgSpin360('imgID1', 3, 180); // in 3 seconds, spin the image to 180 degrees
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function imgShrinkToSquare(_imgID, _destSize, _time) {
      const img = document.getElementById(_imgID);
      const origWidth = img.clientWidth;
      const origHeight = img.clientHeight;
      const widthDiff = origWidth - _destSize;
      const heightDiff = origHeight - _destSize;
      const widthStep = widthDiff / (_time * 60);
      const heightStep = heightDiff / (_time * 60);
      let currentWidth = origWidth;
      let currentHeight = origHeight;
      let startTime = null;
    
      function shrink() {
        if (!startTime) {
          startTime = performance.now();
        }
        const elapsedTime = performance.now() - startTime;
        currentWidth -= widthStep;
        currentHeight -= heightStep;
        if (currentWidth <= _destSize || currentHeight <= _destSize) {
          img.style.width = _destSize + "px";
          img.style.height = _destSize + "px";
          return;}
    
        img.style.width = currentWidth + "px";
        img.style.height = currentHeight + "px";
        requestAnimationFrame(shrink);
      }
    
      requestAnimationFrame(shrink);
    }