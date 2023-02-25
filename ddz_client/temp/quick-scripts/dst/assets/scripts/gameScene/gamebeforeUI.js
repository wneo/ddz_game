
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/gamebeforeUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34b69bK3SJBFbE0zzOU1X9M', 'gamebeforeUI');
// scripts/gameScene/gamebeforeUI.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    btn_ready: cc.Node,
    btn_gamestart: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.btn_gamestart.active = false;
    this.btn_ready.active = false; //监听本地的发送的消息

    this.node.on("init", function () {
      console.log("game beforeui init");
      console.log("myglobal.playerData.housemanageid" + _mygolbal["default"].playerData.housemanageid);
      console.log("myglobal.playerData.accountID" + _mygolbal["default"].playerData.accountID);

      if (_mygolbal["default"].playerData.housemanageid == _mygolbal["default"].playerData.accountID) {
        //自己就是房主
        this.btn_gamestart.active = true;
        this.btn_ready.active = false;
      } else {
        this.btn_gamestart.active = false;
        this.btn_ready.active = true;
      }
    }.bind(this)); //监听服务器发送来的消息
    // myglobal.socket.onGameStart(function(){
    //     console.log("gamebrforeUI onGameStart revice")
    //     this.node.active = false
    // }.bind(this))

    _mygolbal["default"].socket.onChangeHouseManage(function (data) {
      console.log("gamebrforeUI onChangeHouseManage revice" + JSON.stringify(data));
      _mygolbal["default"].playerData.housemanageid = data;

      if (_mygolbal["default"].playerData.housemanageid == _mygolbal["default"].playerData.accountID) {
        //自己就是房主
        this.btn_gamestart.active = true;
        this.btn_ready.active = false;
      } else {
        this.btn_gamestart.active = false;
        this.btn_ready.active = true;
      }
    }.bind(this));
  },
  start: function start() {},
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "btn_ready":
        console.log("btn_ready");

        _mygolbal["default"].socket.requestReady();

        break;

      case "btn_start":
        // if(isopen_sound){
        //    cc.audioEngine.play(cc.url.raw("resources/sound/start_a.ogg")) 
        //  }
        console.log("btn_start");

        _mygolbal["default"].socket.requestStart(function (err, data) {
          if (err != 0) {
            console.log("requestStart err" + err);
          } else {
            console.log("requestStart data" + JSON.stringify(data));
          }
        });

        break;

      default:
        break;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1lYmVmb3JlVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidG5fcmVhZHkiLCJOb2RlIiwiYnRuX2dhbWVzdGFydCIsIm9uTG9hZCIsImFjdGl2ZSIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJob3VzZW1hbmFnZWlkIiwiYWNjb3VudElEIiwiYmluZCIsInNvY2tldCIsIm9uQ2hhbmdlSG91c2VNYW5hZ2UiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0Iiwib25CdXR0b25DbGljayIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInJlcXVlc3RSZWFkeSIsInJlcXVlc3RTdGFydCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFDSixFQUFFLENBQUNLLElBREw7SUFFUkMsYUFBYSxFQUFDTixFQUFFLENBQUNLO0VBRlQsQ0FIUDtFQVFMO0VBRUFFLE1BVkssb0JBVUs7SUFFTixLQUFLRCxhQUFMLENBQW1CRSxNQUFuQixHQUE0QixLQUE1QjtJQUNBLEtBQUtKLFNBQUwsQ0FBZUksTUFBZixHQUF3QixLQUF4QixDQUhNLENBS047O0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFvQixZQUFVO01BQzFCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtNQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBb0NDLG9CQUFBLENBQVNDLFVBQVQsQ0FBb0JDLGFBQXBFO01BQ0FKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFnQ0Msb0JBQUEsQ0FBU0MsVUFBVCxDQUFvQkUsU0FBaEU7O01BQ0EsSUFBR0gsb0JBQUEsQ0FBU0MsVUFBVCxDQUFvQkMsYUFBcEIsSUFBbUNGLG9CQUFBLENBQVNDLFVBQVQsQ0FBb0JFLFNBQTFELEVBQW9FO1FBQ2hFO1FBQ0EsS0FBS1YsYUFBTCxDQUFtQkUsTUFBbkIsR0FBNEIsSUFBNUI7UUFDQSxLQUFLSixTQUFMLENBQWVJLE1BQWYsR0FBd0IsS0FBeEI7TUFDSCxDQUpELE1BSUs7UUFDRCxLQUFLRixhQUFMLENBQW1CRSxNQUFuQixHQUE0QixLQUE1QjtRQUNBLEtBQUtKLFNBQUwsQ0FBZUksTUFBZixHQUF3QixJQUF4QjtNQUNIO0lBQ0osQ0FabUIsQ0FZbEJTLElBWmtCLENBWWIsSUFaYSxDQUFwQixFQU5NLENBb0JOO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUFKLG9CQUFBLENBQVNLLE1BQVQsQ0FBZ0JDLG1CQUFoQixDQUFvQyxVQUFTQyxJQUFULEVBQWM7TUFDOUNULE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRDQUEwQ1MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBdEQ7TUFDQVAsb0JBQUEsQ0FBU0MsVUFBVCxDQUFvQkMsYUFBcEIsR0FBb0NLLElBQXBDOztNQUNBLElBQUdQLG9CQUFBLENBQVNDLFVBQVQsQ0FBb0JDLGFBQXBCLElBQW1DRixvQkFBQSxDQUFTQyxVQUFULENBQW9CRSxTQUExRCxFQUFvRTtRQUNoRTtRQUNBLEtBQUtWLGFBQUwsQ0FBbUJFLE1BQW5CLEdBQTRCLElBQTVCO1FBQ0EsS0FBS0osU0FBTCxDQUFlSSxNQUFmLEdBQXdCLEtBQXhCO01BQ0gsQ0FKRCxNQUlLO1FBQ0QsS0FBS0YsYUFBTCxDQUFtQkUsTUFBbkIsR0FBNEIsS0FBNUI7UUFDQSxLQUFLSixTQUFMLENBQWVJLE1BQWYsR0FBd0IsSUFBeEI7TUFDSDtJQUVKLENBWm1DLENBWWxDUyxJQVprQyxDQVk3QixJQVo2QixDQUFwQztFQWFILENBakRJO0VBbURMTSxLQW5ESyxtQkFtREksQ0FFUixDQXJESTtFQXVETDtFQUVBQyxhQXpESyx5QkF5RFNDLEtBekRULEVBeURlQyxVQXpEZixFQXlEMEI7SUFDM0IsUUFBT0EsVUFBUDtNQUNJLEtBQUssV0FBTDtRQUNJZixPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaOztRQUNBQyxvQkFBQSxDQUFTSyxNQUFULENBQWdCUyxZQUFoQjs7UUFDQTs7TUFDSixLQUFLLFdBQUw7UUFDSTtRQUNBO1FBQ0E7UUFDQ2hCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O1FBQ0FDLG9CQUFBLENBQVNLLE1BQVQsQ0FBZ0JVLFlBQWhCLENBQTZCLFVBQVNDLEdBQVQsRUFBYVQsSUFBYixFQUFrQjtVQUM1QyxJQUFHUyxHQUFHLElBQUUsQ0FBUixFQUFVO1lBQ05sQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBbUJpQixHQUEvQjtVQUNILENBRkQsTUFFSztZQUNEbEIsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQXFCUyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUFqQztVQUVIO1FBQ0gsQ0FQRDs7UUFRQTs7TUFDTDtRQUNJO0lBcEJSO0VBc0JIO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi4vLi4vbXlnb2xiYWwuanNcIlxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBidG5fcmVhZHk6Y2MuTm9kZSxcbiAgICAgICAgYnRuX2dhbWVzdGFydDpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgdGhpcy5idG5fZ2FtZXN0YXJ0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuYnRuX3JlYWR5LmFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgICAgLy/nm5HlkKzmnKzlnLDnmoTlj5HpgIHnmoTmtojmga9cbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiaW5pdFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgYmVmb3JldWkgaW5pdFwiKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWRcIitteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEXCIrbXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpXG4gICAgICAgICAgICBpZihteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgICAgICAvL+iHquW3seWwseaYr+aIv+S4u1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fcmVhZHkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JlYWR5LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5Zmo5Y+R6YCB5p2l55qE5raI5oGvXG4gICAgICAgIC8vIG15Z2xvYmFsLnNvY2tldC5vbkdhbWVTdGFydChmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJnYW1lYnJmb3JlVUkgb25HYW1lU3RhcnQgcmV2aWNlXCIpXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgLy8gfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vbkNoYW5nZUhvdXNlTWFuYWdlKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lYnJmb3JlVUkgb25DaGFuZ2VIb3VzZU1hbmFnZSByZXZpY2VcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEuaG91c2VtYW5hZ2VpZCA9IGRhdGFcbiAgICAgICAgICAgIGlmKG15Z2xvYmFsLnBsYXllckRhdGEuaG91c2VtYW5hZ2VpZD09bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpe1xuICAgICAgICAgICAgICAgIC8v6Ieq5bex5bCx5piv5oi/5Li7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5fZ2FtZXN0YXJ0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9yZWFkeS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5fZ2FtZXN0YXJ0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fcmVhZHkuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIFxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJidG5fcmVhZHlcIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ0bl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0UmVhZHkoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiYnRuX3N0YXJ0XCI6XG4gICAgICAgICAgICAgICAgLy8gaWYoaXNvcGVuX3NvdW5kKXtcbiAgICAgICAgICAgICAgICAvLyAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvc3RhcnRfYS5vZ2dcIikpIFxuICAgICAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnRuX3N0YXJ0XCIpXG4gICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0U3RhcnQoZnVuY3Rpb24oZXJyLGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBpZihlcnIhPTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0U3RhcnQgZXJyXCIrZXJyKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdFN0YXJ0IGRhdGFcIisgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICBicmVhayAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19