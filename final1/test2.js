$(function () {
    $("#input_20160628 button.draw").click(function () {
      var _lines = $.trim($("#input_20160628 textarea").val()).split("\n");
      var _repeatable = ($('#input_20160628 [name="repeatable"]').length === 1);
      var _number = parseInt($('#input_20160628 [name="number"]').val());
      var _result = $("#result_20160628").empty();
      if (isNaN(_number)) {
          //alert("抽出數量必須為數字");
          _result.html("抽出數量必須為數字");
          return;
      }
      if (_lines.length === 1 && _lines[0] === "") {
          //alert("抽出數量必須為數字");
          _result.html("必須輸入資料");
          return;
      }
  
      var _list = [];
      for (var _i = 0; _i < _lines.length; _i++) {
          var _line = $.trim(_lines[_i]);
          if (_repeatable === true) {
              _list.push(_line);
          }
          else if ($.inArray(_line, _list) === -1) {
              _list.push(_line);
          }
      }
      
      if (_number > _list.length) {
        _number = _list.length;
      }
  
      // 抽出n位
      var _getRandomInt = function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      var _result_index = [];
      _result.append('<div>抽籤結果(共'+_number+'位)：</div>');
      for (var _r = 0; _r < _number; _r++) {
          var _random_int = _getRandomInt(0, _list.length-1);
          if ($.inArray(_random_int, _result_index) === -1) {
              _result_index.push(_random_int);
              _result.append('<div>' + _list[_random_int] + '</div>');
          }
          else {
              _r--;
          }
      }
    });
    
    $("#input_20160628 button.default").click(function () {
      $("#input_20160628 textarea").val('飯\n排骨飯\n袁怡孜\n張文星\n劉吉蕙\n賴又玲\n陳冠琪\n陳映惠\n黃倍宣\n李禎東\n謝任枝\n魏筱婷');
    
    });

    $("#input_20160628 button.default1").click(function () {
      $("#input_20160628 textarea").val('壽司\n排骨飯\n袁怡孜\n張文星\n劉吉蕙\n賴又玲\n陳冠琪\n陳映惠\n黃倍宣\n李禎東\n謝任枝\n魏筱婷');
    
    });

  });


const shoesPictures = document.querySelectorAll(".thumbnail");

  shoesPictures.forEach((image) => {
      image.addEventListener("mousemove", (e) => {
          image.style =
              "background-size: 840px 540px;" +
              `background-position: ${e.offsetX - 3 * e.offsetX}px ${
                  e.offsetY - 3 * e.offsetY
              }px;`;
      });
  
      image.addEventListener("mouseout", (e) => {
          image.style = "unset;";
      });
});
  