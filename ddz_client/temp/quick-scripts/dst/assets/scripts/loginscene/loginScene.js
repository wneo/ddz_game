
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/loginscene/loginScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b05a68gSOpBWr8ddvT03Jpj', 'loginScene');
// scripts/loginscene/loginScene.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    wait_node: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //console.log("qian_state.qian:"+ qian_state.qian)
    if (isopen_sound) {
      cc.audioEngine.play(cc.url.raw("resources/sound/login_bg.ogg"), true);
    }

    _mygolbal["default"].socket.initSocket();
  },
  start: function start() {},
  onButtonCilck: function onButtonCilck(event, customData) {
    switch (customData) {
      case "wx_login":
        console.log("wx_login request"); //this.wait_node.active = true

        _mygolbal["default"].socket.request_wxLogin({
          uniqueID: _mygolbal["default"].playerData.uniqueID,
          accountID: _mygolbal["default"].playerData.accountID,
          nickName: _mygolbal["default"].playerData.nickName,
          avatarUrl: _mygolbal["default"].playerData.avatarUrl
        }, function (err, result) {
          //请求返回
          //先隐藏等待UI
          //this.wait_node.active = false
          if (err != 0) {
            console.log("err:" + err);
            return;
          }

          console.log("login sucess" + JSON.stringify(result));
          _mygolbal["default"].playerData.gobal_count = result.goldcount;
          cc.director.loadScene("hallScene");
        }.bind(this));

        break;

      default:
        break;
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2luc2NlbmUvbG9naW5TY2VuZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIndhaXRfbm9kZSIsIk5vZGUiLCJvbkxvYWQiLCJpc29wZW5fc291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ1cmwiLCJyYXciLCJteWdsb2JhbCIsInNvY2tldCIsImluaXRTb2NrZXQiLCJzdGFydCIsIm9uQnV0dG9uQ2lsY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdF93eExvZ2luIiwidW5pcXVlSUQiLCJwbGF5ZXJEYXRhIiwiYWNjb3VudElEIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJlcnIiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwiZ29iYWxfY291bnQiLCJnb2xkY291bnQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1RDLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztFQURKLENBSFA7RUFPTDtFQUVBQyxNQVRLLG9CQVNLO0lBQ047SUFDQSxJQUFHQyxZQUFILEVBQWdCO01BQ1pQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxJQUFmLENBQW9CVCxFQUFFLENBQUNVLEdBQUgsQ0FBT0MsR0FBUCxDQUFXLDhCQUFYLENBQXBCLEVBQStELElBQS9EO0lBQ0Y7O0lBRURDLG9CQUFBLENBQVNDLE1BQVQsQ0FBZ0JDLFVBQWhCO0VBQ0osQ0FoQkk7RUFrQkxDLEtBbEJLLG1CQWtCSSxDQUNSLENBbkJJO0VBcUJMQyxhQXJCSyx5QkFxQlNDLEtBckJULEVBcUJlQyxVQXJCZixFQXFCMEI7SUFDM0IsUUFBT0EsVUFBUDtNQUNJLEtBQUssVUFBTDtRQUNJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQURKLENBR0k7O1FBRUFSLG9CQUFBLENBQVNDLE1BQVQsQ0FBZ0JRLGVBQWhCLENBQWdDO1VBQzVCQyxRQUFRLEVBQUNWLG9CQUFBLENBQVNXLFVBQVQsQ0FBb0JELFFBREQ7VUFFNUJFLFNBQVMsRUFBQ1osb0JBQUEsQ0FBU1csVUFBVCxDQUFvQkMsU0FGRjtVQUc1QkMsUUFBUSxFQUFDYixvQkFBQSxDQUFTVyxVQUFULENBQW9CRSxRQUhEO1VBSTVCQyxTQUFTLEVBQUNkLG9CQUFBLENBQVNXLFVBQVQsQ0FBb0JHO1FBSkYsQ0FBaEMsRUFLRSxVQUFTQyxHQUFULEVBQWFDLE1BQWIsRUFBb0I7VUFDbEI7VUFDQTtVQUNBO1VBQ0EsSUFBR0QsR0FBRyxJQUFFLENBQVIsRUFBVTtZQUNQUixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFPTyxHQUFuQjtZQUNBO1VBQ0Y7O1VBRURSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFpQlMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLE1BQWYsQ0FBN0I7VUFDQWhCLG9CQUFBLENBQVNXLFVBQVQsQ0FBb0JRLFdBQXBCLEdBQWtDSCxNQUFNLENBQUNJLFNBQXpDO1VBQ0FoQyxFQUFFLENBQUNpQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7UUFDSCxDQVpDLENBWUFDLElBWkEsQ0FZSyxJQVpMLENBTEY7O1FBa0JBOztNQUNKO1FBQ0k7SUExQlI7RUE0QkgsQ0FsREksQ0FtREw7O0FBbkRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi4vbXlnb2xiYWwuanNcIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICB3YWl0X25vZGU6Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicWlhbl9zdGF0ZS5xaWFuOlwiKyBxaWFuX3N0YXRlLnFpYW4pXG4gICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvbG9naW5fYmcub2dnXCIpLHRydWUpIFxuICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5pbml0U29ja2V0KClcbiAgICB9LFxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuICAgIFxuICAgIG9uQnV0dG9uQ2lsY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJ3eF9sb2dpblwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hfbG9naW4gcmVxdWVzdFwiKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdGhpcy53YWl0X25vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X3d4TG9naW4oe1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVJRDpteWdsb2JhbC5wbGF5ZXJEYXRhLnVuaXF1ZUlELFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQsXG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOm15Z2xvYmFsLnBsYXllckRhdGEubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDpteWdsb2JhbC5wbGF5ZXJEYXRhLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICB9LGZ1bmN0aW9uKGVycixyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICAvL+ivt+axgui/lOWbnlxuICAgICAgICAgICAgICAgICAgICAvL+WFiOmakOiXj+etieW+hVVJXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy53YWl0X25vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyIT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnI6XCIrZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBzdWNlc3NcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEuZ29iYWxfY291bnQgPSByZXN1bHQuZ29sZGNvdW50XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxTY2VuZVwiKVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuXG5cbn0pO1xuIl19