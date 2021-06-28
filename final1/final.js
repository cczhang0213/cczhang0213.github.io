
$(function () {
    $("#input_20160628 button.draw").click(function () {
      var _lines = $.trim($("#input_20160628 textarea").val()).split("\n");
      var _repeatable = ($('#input_20160628 [name="repeatable"]').length === 1);
      var _number = parseInt($('#input_20160628 [name="number"]').val());
      var _result = $("#result_20160628").empty();
      if (isNaN(_number)) {
          //alert("抽出數量必須為數字");
          _result.html("must be a number");
          return;
      }
      if (_lines.length === 1 && _lines[0] === "") {
          //alert("抽出數量必須為數字");
          _result.html("Must enter data");
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
      _result.append('<div>result( '+_number+' in total )：</div>');
      for (var _r = 0; _r < _number; _r++) {
          var _random_int = _getRandomInt(0, _list.length-1);
          if ($.inArray(_random_int, _result_index) === -1) {
              _result_index.push(_random_int);
              _result.append('<div>' + _list[_random_int] + '</div> is a/are good choice(s) of you');
          }
          else {
              _r--;
          }
      }
    });
    $("#input_20160628 button.default").click(function () {
        $("#input_20160628 textarea").val('藍家割包\n劉家水煎包\n公館夜市煎蛋餅\n蔬菜大蛋餅\n塔巴實驗室\n晴光紅豆餅\n公館夜市蔥油餅\n公館夜市春捲\n豬血糕(西西里克隔壁)\n春捲(巴伯旁邊)\n巴克斯\n公館夜市地瓜球\n三星蔥餅\n小木屋鬆餅\n口袋餅(曼谷燒外面)\n魚雷起司三明治\n土耳其西西里克口袋餅\n兩點紅豆餅\
        \n爭鮮\n壽司郎\n靜壽司\n赤神\n貓大幅\n心KOKORO\n丼壽司\n韓天閣\n小飯館兒\n首爾之家\n韓江館\n樂樂韓食\n銀座\n泰豐味\n曼谷燒\n母女的店\n翠薪越南美食\n站食可以\n阿里媽媽\n泰國小館\n池先生\n泰正點\n越南清化河粉\n右手\n泰味鮮\
        \n阿里媽媽\n狂愛\n虹岩屋\n幸好沒錯過你\n三時午\nCoco一番屋\n十二巷\n極麵屋\nMr.拉麵野崎家\n京阪豚骨拉麵\n頑固拉麵\n鷹流拉麵\n山嵐拉麵\n力量拉麵\n墨洋拉麵\n十二巷\n季丼屋\n大享食\n山丼\n蔥丼\n秀食屋\n吉野家\n初牛\n赤神\n大盛\n京阪\n竹の丼飯屋\
        \n魯肉飯香\n嘉義雞肉飯\n水源市場\n順園小館\n香港亨記\n台大牛莊\n小飯廳\n茗香園\n來福\n師大第一腿\n油夠飯濺\nYU POKE\n低gi.MissEnergy\nJJ poke生魚飯\nLULU沙拉飯/低GI/小火鍋\n喜禾嘉\n大水元\n峨嵋\n蕭家\n鑫吉野烤肉飯\n站食可以\n三米三\
        \n維綸麵食館\n台南意麵\n麻辣巴蕾重慶酸辣粉\n大鼎膳食湯麵館\n劉記川味牛肉麵\n全家喜\n金雞園\n鍋in\n三媽\n12mini\n無鍋不樂\n魯山人\n辛殿\n馬辣\n新馬辣\n東吉\n宮崎308\n雪鍋\n麵工坊義大利麵\nville cafe\n淬煉廚房\n窩巷弄\n發福廚房\n貳樓\nFree Style 義大利麵燉飯\n水源二樓生義大利麵\n轉轉發現義大利麵\
        \n大埔\n甘丹\n戰將\n瓦崎\n喫尤\n牛二哥牛排\n威宇牛排\n龐德羅莎\nBurger King\n頂呱呱\n派克雞排\n淬煉廚房\n胖老爹\n魔法ㄐ排\n麥當勞\n源士林\n滿粥歲\n白帝城\n阿姨滷味\n女九滷味\n卜乘滷味\n八年得麻辣鴨血\
        \nYU POKE\n低gi.MissEnergy\nJJ poke生魚飯\n生機沙拉船\n雪球\n麥味登\n吐司吐司\n倆倆號\nVille cafe\n貳樓\n拉亞漢堡\nBFF\n45 brunch\n如來素食樂園\n夜市素食地瓜球\nFalafel King 炸豆丸子國王\n大家素食\n蒸夠臭\n小蔬杭\n生機沙拉船\n夜市愛上素食麻辣燙\
        \n鴉片粉圓\n龍潭豆花\n酒釀湯圓\n人性甜點\n夜市豆花\nIce holic\n索菲烤布蕾\n雪腐\nNickboys Donuts\n法點法食\n賢夫美食的紫米芋頭糕\n墨朝\n墾丁ㄉㄨㄞ奶\n迷客夏\n可不可\n麻古茶坊\n甘蔗媽媽\n波囍\n天仁茗茶\n十杯\n50嵐\n凰上您好\n兩點\n堅果奶吧\n巴伯Q奶\nComebuy\n紫米牛奶\n老賴\n春芳號\n萬波\n龜記\nDrink Store\n五桐號\
        \nHalf Coffee\nthe common\n小公館咖啡\nville cafe\n丹堤\nPipe\n89 Loop\n軍火庫\n森火\nstaff only club\nJames Joyce Irish Bar\nbitter sweet\n窖父');
      
      });
  
    $("#input_20160628 button.default1").click(function () {
        $("#input_20160628 textarea").val('藍家割包\n劉家水煎包\n公館夜市煎蛋餅\n蔬菜大蛋餅\n塔巴實驗室\n晴光紅豆餅\n公館夜市蔥油餅\n公館夜市春捲\n豬血糕(西西里克隔壁)\n春捲(巴伯旁邊)\n巴克斯\n公館夜市地瓜球\n三星蔥餅\n小木屋鬆餅\n口袋餅(曼谷燒外面)\n魚雷起司三明治\n土耳其西西里克口袋餅\n兩點紅豆餅');
      
      });

    $("#input_20160628 button.default2").click(function () {
        $("#input_20160628 textarea").val('爭鮮\n壽司郎\n靜壽司\n赤神\n貓大幅\n心KOKORO\n丼壽司');
    
      });

    $("#input_20160628 button.default3").click(function () {
        $("#input_20160628 textarea").val('韓天閣\n小飯館兒\n首爾之家\n韓江館\n樂樂韓食');
    
      });

    $("#input_20160628 button.default4").click(function () {
        $("#input_20160628 textarea").val('銀座\n泰豐味\n曼谷燒\n母女的店\n翠薪越南美食\n站食可以\n阿里媽媽\n泰國小館\n池先生\n泰正點\n越南清化河粉\n右手\n泰味鮮');
      
      });

    $("#input_20160628 button.default5").click(function () {
        $("#input_20160628 textarea").val('阿里媽媽\n狂愛\n虹岩屋\n幸好沒錯過你\n三時午\nCoco一番屋');
      
      });

    $("#input_20160628 button.default6").click(function () {
        $("#input_20160628 textarea").val('十二巷\n極麵屋\nMr.拉麵野崎家\n京阪豚骨拉麵\n頑固拉麵\n鷹流拉麵\n山嵐拉麵\n力量拉麵\n墨洋拉麵');

      });

    $("#input_20160628 button.default7").click(function () {
        $("#input_20160628 textarea").val('十二巷\n季丼屋\n大享食\n山丼\n蔥丼\n秀食屋\n吉野家\n初牛\n赤神\n大盛\n京阪\n竹の丼飯屋');
    
      });

    $("#input_20160628 button.default8").click(function () {
        $("#input_20160628 textarea").val('魯肉飯香\n嘉義雞肉飯\n水源市場\n順園小館\n香港亨記\n台大牛莊\n小飯廳\n茗香園\n來福\n師大第一腿\n油夠飯濺\nYU POKE\n低gi.MissEnergy\nJJ poke生魚飯\nLULU沙拉飯/低GI/小火鍋\n喜禾嘉\n大水元\n峨嵋\n蕭家\n鑫吉野烤肉飯\n站食可以\n三米三');
      
      });

    $("#input_20160628 button.default9").click(function () {
        $("#input_20160628 textarea").val('維綸麵食館\n台南意麵\n麻辣巴蕾重慶酸辣粉\n大鼎膳食湯麵館\n劉記川味牛肉麵');
      
      });

    $("#input_20160628 button.default10").click(function () {
        $("#input_20160628 textarea").val('全家喜\n金雞園');

      });

    $("#input_20160628 button.default11").click(function () {
        $("#input_20160628 textarea").val('鍋in\n三媽\n12mini\n無鍋不樂\n魯山人\n辛殿\n馬辣\n新馬辣\n東吉\n宮崎308\n雪鍋');

      });

    $("#input_20160628 button.default12").click(function () {
        $("#input_20160628 textarea").val('麵工坊義大利麵\nville cafe\n淬煉廚房\n窩巷弄\n發福廚房\n貳樓\nFree Style 義大利麵燉飯\n水源二樓生義大利麵\n轉轉發現義大利麵');
    
      });

    $("#input_20160628 button.default13").click(function () {
        $("#input_20160628 textarea").val('大埔\n甘丹\n戰將\n瓦崎\n喫尤\n牛二哥牛排\n威宇牛排\n龐德羅莎');
      
      });

    $("#input_20160628 button.default14").click(function () {
        $("#input_20160628 textarea").val('Burger King\n頂呱呱\n派克雞排\n淬煉廚房\n胖老爹\n魔法ㄐ排\n麥當勞');
      
      });

    $("#input_20160628 button.default15").click(function () {
        $("#input_20160628 textarea").val('源士林\n滿粥歲');

      });

    $("#input_20160628 button.default16").click(function () {
        $("#input_20160628 textarea").val('白帝城\n阿姨滷味\n女九滷味\n卜乘滷味\n八年得麻辣鴨血');
    
      });

    $("#input_20160628 button.default17").click(function () {
        $("#input_20160628 textarea").val('YU POKE\n低gi.MissEnergy\nJJ poke生魚飯\n生機沙拉船');
      
      });

    $("#input_20160628 button.default18").click(function () {
        $("#input_20160628 textarea").val('雪球\n麥味登\n吐司吐司\n倆倆號\nVille cafe\n貳樓\n拉亞漢堡\nBFF\n45 brunch');
      
      });

    $("#input_20160628 button.default19").click(function () {
        $("#input_20160628 textarea").val('如來素食樂園\n夜市素食地瓜球\nFalafel King 炸豆丸子國王\n大家素食\n蒸夠臭\n小蔬杭\n生機沙拉船\n夜市愛上素食麻辣燙');

      });

      $("#input_20160628 button.default20").click(function () {
        $("#input_20160628 textarea").val('鴉片粉圓\n龍潭豆花\n酒釀湯圓\n人性甜點\n夜市豆花\nIce holic\n索菲烤布蕾\n雪腐\nNickboys Donuts\n法點法食\n賢夫美食的紫米芋頭糕');
    
      });

    $("#input_20160628 button.default21").click(function () {
        $("#input_20160628 textarea").val('墨朝\n墾丁ㄉㄨㄞ奶\n迷客夏\n可不可\n麻古茶坊\n甘蔗媽媽\n波囍\n天仁茗茶\n十杯\n50嵐\n凰上您好\n兩點\n堅果奶吧\n巴伯Q奶\nComebuy\n紫米牛奶\n老賴\n春芳號\n萬波\n龜記\nDrink Store\n五桐號');
      
      });

    $("#input_20160628 button.default22").click(function () {
        $("#input_20160628 textarea").val('Half Coffee\nthe common\n小公館咖啡\nville cafe\n丹堤');
      
      });

    $("#input_20160628 button.default23").click(function () {
        $("#input_20160628 textarea").val('Pipe\n89 Loop\n軍火庫\n森火\nstaff only club\nJames Joyce Irish Bar\nbitter sweet\n窖父');

      });

    $("#input_20160628 button.default24").click(function () {
        $("#input_20160628 textarea").val('感恩小館地瓜球\n沙威瑪(往頂好路上\n小林阿盛\n好想吃冰\n漁人食鋪\n爭鮮\n有意思居酒食堂\n韓庭州\n尚家香雲南料理\n泰街頭\n上賀麵食館\n滇味小館\n越南清化河粉\n指有雞飯\n稻咖喱\n咖哩先生\nNo name無名咖哩\n香料廚房\n寶貝咖哩\n三個傻瓜\n大葉麵食館\
            \n漁人食鋪\n牛洞\nSukiya\n有意思\n鳳城燒臘\n阿英滷肉飯\n小飯廳\n柒食貳\n七里亭\n蒲田\n蒙娜家廚\n豪香\n蠶居\n雲香亭閃麵\n多多小吃\n海賊食堂\n尚家香雲南料理\n彩椒廚房\n台大牛肉麵\n笠原麵食館\n八方雲集\n老先覺\n集客\n溏老鴨\n莫宰羊\n蘇活\n瑪麗珍\n霞飛驛\n樹下蘇活\n感恩小館\npasta2go\nCafe Bastille\n左巴好室\
            \n孫東寶牛排\n達美樂\n肯德基\n燈籠\n楽坡BonBox\n金湯匙豆花\n安好食\n光一\nImperfect\n野餐咖啡\nAGCT\n成真咖啡\n找到咖啡\n彩椒廚房\n好想吃冰\n開心農場素食店\n素德蔬食\n金湯匙豆花坊\n三個傻瓜\n好想吃冰\nCoco brownie\n台一牛奶大王\nMr.Bruno\n幸福豆雲\nLazy徠集\nflügel studio\nIC airport 義式手工冰淇淋\n金湯匙豆花\
            \n九品川\n樂法\n日日裝茶\n路易莎\ncama\n葉子\n城市草倉\napple museum\n璐巴\n野餐咖啡\n微光\n聞山咖啡\n半路咖啡\n路上撿到一隻貓\nrebirth\nAGCT\n喜鵲\n亞舍咖啡\n海豚飯店\n23 public');
      
      });
  
    $("#input_20160628 button.default25").click(function () {
        $("#input_20160628 textarea").val('感恩小館地瓜球\n沙威瑪(往頂好路上)');
      
      });

    $("#input_20160628 button.default26").click(function () {
        $("#input_20160628 textarea").val('小林阿盛\n好想吃冰\n漁人食鋪\n爭鮮\n有意思居酒食堂');
    
      });

    $("#input_20160628 button.default27").click(function () {
        $("#input_20160628 textarea").val('韓庭州');
    
      });

    $("#input_20160628 button.default28").click(function () {
        $("#input_20160628 textarea").val('尚家香雲南料理\n泰街頭\n上賀麵食館\n滇味小館\n越南清化河粉\n指有雞飯');
      
      });

    $("#input_20160628 button.default29").click(function () {
        $("#input_20160628 textarea").val('稻咖喱\n咖哩先生\nNo name無名咖哩\n香料廚房\n寶貝咖哩\n三個傻瓜');
      
      });

    $("#input_20160628 button.default30").click(function () {
        $("#input_20160628 textarea").val('大葉麵食館');

      });

    $("#input_20160628 button.default31").click(function () {
        $("#input_20160628 textarea").val('漁人食鋪\n牛洞\nSukiya\n有意思');
    
      });

    $("#input_20160628 button.default32").click(function () {
        $("#input_20160628 textarea").val('鳳城燒臘\n阿英滷肉飯\n小飯廳\n柒食貳\n七里亭\n蒲田\n蒙娜家廚\n豪香\n蠶居');
      
      });

    $("#input_20160628 button.default33").click(function () {
        $("#input_20160628 textarea").val('雲香亭閃麵\n多多小吃\n海賊食堂\n尚家香雲南料理\n彩椒廚房\n台大牛肉麵\n笠原麵食館');
      
      });

    $("#input_20160628 button.default34").click(function () {
        $("#input_20160628 textarea").val('八方雲集');

      });

    $("#input_20160628 button.default35").click(function () {
        $("#input_20160628 textarea").val('老先覺\n集客\n溏老鴨\n莫宰羊');

      });

    $("#input_20160628 button.default36").click(function () {
        $("#input_20160628 textarea").val('蘇活\n瑪麗珍\n霞飛驛\n樹下蘇活\n感恩小館\npasta2go\nCafe Bastille\n左巴好室');
    
      });

    $("#input_20160628 button.default37").click(function () {
        $("#input_20160628 textarea").val('孫東寶牛排');
      
      });

    $("#input_20160628 button.default38").click(function () {
        $("#input_20160628 textarea").val('達美樂\n肯德基');
      
      });

    $("#input_20160628 button.default39").click(function () {
        $("#input_20160628 textarea").val('');

      });

    $("#input_20160628 button.default40").click(function () {
        $("#input_20160628 textarea").val('燈籠');
    
      });

    $("#input_20160628 button.default41").click(function () {
        $("#input_20160628 textarea").val('楽坡BonBox\n金湯匙豆花');
      
      });

    $("#input_20160628 button.default42").click(function () {
        $("#input_20160628 textarea").val('安好食\n光一\nImperfect\n野餐咖啡\nAGCT\n成真咖啡\n找到咖啡');
      
      });

    $("#input_20160628 button.default43").click(function () {
        $("#input_20160628 textarea").val('彩椒廚房\n好想吃冰\n開心農場素食店\n素德蔬食\n金湯匙豆花坊\n三個傻瓜');

      });

      $("#input_20160628 button.default44").click(function () {
        $("#input_20160628 textarea").val('好想吃冰\nCoco brownie\n台一牛奶大王\nMr.Bruno\n幸福豆雲\nLazy徠集\nflügel studio\nIC airport 義式手工冰淇淋\n金湯匙豆花');
    
      });

    $("#input_20160628 button.default45").click(function () {
        $("#input_20160628 textarea").val('九品川\n樂法\n日日裝茶');
      
      });

    $("#input_20160628 button.default46").click(function () {
        $("#input_20160628 textarea").val('路易莎\ncama\n葉子\n城市草倉\napple museum\n璐巴\n野餐咖啡\n微光\n聞山咖啡\n半路咖啡\n路上撿到一隻貓\nrebirth\nAGCT\n喜鵲\n亞舍咖啡');
      
      });

    $("#input_20160628 button.default47").click(function () {
        $("#input_20160628 textarea").val('海豚飯店\n23 public');

      });





    $("#input_20160628 button.default48").click(function () {
        $("#input_20160628 textarea").val('118飯糰\n此燈亮\n淺草日式飯糰\n願有記豬趴包\n高和食堂\n文長安\n韓喜堂\n米食\n揪食堂\n憶馬當鮮\nLazy thai泰\n黎記北越河粉\n越悅越南茶餐廳\n台越美食\n湄賽\n滇味廚房\n卡瓦利印度料理\n海南雞飯\n卡瓦利印度料理\n厚宅\n梧貳\n高和食堂\n靚咖哩\n裸湯拉麵\n高和食堂\n壹之穴沾麵\
        \n厚宅\n邦食堂\n控糖\n親來食堂\n上品食堂\n麻吉食堂\n笑嘻嘻港式\n瑞榮燒臘\n邦食堂\n佳湘自助餐\n采味食光\n穰穰\n合益佳雞肉飯\n叮叮食堂\n控糖餐飲食堂\n梧貳\n唯雞館\n蔥燉牛肉麵\n四面八方\n五九麵館\n二八麵堂\n五二麵鋪\n好好吃麵\n郭董牛肉麵\n馬祖麵館\n96巷麵店\n李記水餃\n大李水餃\n四面八方\n阿玉水餃\n五福餃子館\
        \n一鍋燒\n依依\n就是幸福鍋物\nooh cha cha\n秘境小時光\n貝拉小屋\nI am pasta\n蘇草\n微笑廚房洋食館\n三隻貓頭鷹\nBarkers\none way cafe\n桌藏\n創意廚房\n孫紫牛平價牛排\n好吃雞排\n源士林\n阿英海產粥\n黑客\n小姐姐麻辣燙\n好餵低GI\n唯雞館\n蘇草\n樂子\n補時\n舒記台大黑飯糰\
        \nooh cha cha\n全國素食自助餐\n卡帛義式廚房\n貞有緣素食\n蔬菓in\n搗飛豆花\n櫻花樹蛋糕廚房\nMANIA買你\n劉媽媽蒟蒻\n喬治派克\n方最\nBitter Sweet\n春山茶水\n米堤銀行\nTC shop\n空杯國際\nbitter sweet\nBeans Lab\nRufous Coffee Roasters\none way cafe\n操場');
      
      });
  
    $("#input_20160628 button.default49").click(function () {
        $("#input_20160628 textarea").val('118飯糰\n此燈亮\n淺草日式飯糰\n願有記豬趴包');
      
      });

    $("#input_20160628 button.default50").click(function () {
        $("#input_20160628 textarea").val('高和食堂\n文長安');
    
      });

    $("#input_20160628 button.default51").click(function () {
        $("#input_20160628 textarea").val('韓喜堂\n米食\n揪食堂');
    
      });

    $("#input_20160628 button.default52").click(function () {
        $("#input_20160628 textarea").val('憶馬當鮮\nLazy thai泰\n黎記北越河粉\n越悅越南茶餐廳\n台越美食\n湄賽\n滇味廚房\n卡瓦利印度料理\n海南雞飯');
      
      });

    $("#input_20160628 button.default53").click(function () {
        $("#input_20160628 textarea").val('卡瓦利印度料理\n厚宅\n梧貳\n高和食堂\n靚咖哩');
      
      });

    $("#input_20160628 button.default54").click(function () {
        $("#input_20160628 textarea").val('裸湯拉麵\n高和食堂\n壹之穴沾麵');

      });

    $("#input_20160628 button.default55").click(function () {
        $("#input_20160628 textarea").val('厚宅\n邦食堂\n控糖');
    
      });

    $("#input_20160628 button.default56").click(function () {
        $("#input_20160628 textarea").val('親來食堂\n上品食堂\n麻吉食堂\n笑嘻嘻港式\n瑞榮燒臘\n邦食堂\n佳湘自助餐\n采味食光\n穰穰\n合益佳雞肉飯\n叮叮食堂\n控糖餐飲食堂\n梧貳\n唯雞館');
      
      });

    $("#input_20160628 button.default57").click(function () {
        $("#input_20160628 textarea").val('蔥燉牛肉麵\n四面八方\n五九麵館\n二八麵堂\n五二麵鋪\n好好吃麵\n郭董牛肉麵\n馬祖麵館\n96巷麵店');
      
      });

    $("#input_20160628 button.default58").click(function () {
        $("#input_20160628 textarea").val('李記水餃\n大李水餃\n四面八方\n阿玉水餃\n五福餃子館');

      });

    $("#input_20160628 button.default59").click(function () {
        $("#input_20160628 textarea").val('一鍋燒\n依依\n就是幸福鍋物');

      });

    $("#input_20160628 button.default60").click(function () {
        $("#input_20160628 textarea").val('ooh cha cha\n秘境小時光\n貝拉小屋\nI am pasta\n蘇草\n微笑廚房洋食館\n三隻貓頭鷹\nBarkers\none way cafe\n桌藏\n創意廚房');
    
      });

    $("#input_20160628 button.default61").click(function () {
        $("#input_20160628 textarea").val('孫紫牛平價牛排');
      
      });

    $("#input_20160628 button.default62").click(function () {
        $("#input_20160628 textarea").val('好吃雞排');
      
      });

    $("#input_20160628 button.default63").click(function () {
        $("#input_20160628 textarea").val('源士林\n阿英海產粥');

      });

    $("#input_20160628 button.default64").click(function () {
        $("#input_20160628 textarea").val('黑客\n小姐姐麻辣燙');
    
      });

    $("#input_20160628 button.default65").click(function () {
        $("#input_20160628 textarea").val('好餵低GI\n唯雞館');
      
      });

    $("#input_20160628 button.default66").click(function () {
        $("#input_20160628 textarea").val('蘇草\n樂子\n補時\n舒記台大黑飯糰');
      
      });

    $("#input_20160628 button.default67").click(function () {
        $("#input_20160628 textarea").val('ooh cha cha\n全國素食自助餐\n卡帛義式廚房\n貞有緣素食\n蔬菓in');

      });

    $("#input_20160628 button.default68").click(function () {
        $("#input_20160628 textarea").val('搗飛豆花\n櫻花樹蛋糕廚房\nMANIA買你\n劉媽媽蒟蒻');
    
      });

    $("#input_20160628 button.default69").click(function () {
        $("#input_20160628 textarea").val('喬治派克\n方最\nBitter Sweet\n春山茶水\n米堤銀行\nTC shop\n空杯國際');
      
      });

    $("#input_20160628 button.default70").click(function () {
        $("#input_20160628 textarea").val('bitter sweet\nBeans Lab\nRufous Coffee Roasters\none way cafe');
      
      });

    $("#input_20160628 button.default71").click(function () {
        $("#input_20160628 textarea").val('操場');

      });


  });



