
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/data/player');
require('./assets/scripts/data/socket_ctr');
require('./assets/scripts/gameScene/gameScene');
require('./assets/scripts/gameScene/gamebeforeUI');
require('./assets/scripts/gameScene/gameingUI');
require('./assets/scripts/gameScene/prefabs/card');
require('./assets/scripts/gameScene/prefabs/player_node');
require('./assets/scripts/hallscene/hallScene');
require('./assets/scripts/hallscene/prefabs_script/creatRoom');
require('./assets/scripts/hallscene/prefabs_script/joinRoom');
require('./assets/scripts/loginscene/loginScene');
require('./assets/scripts/mygolbal');
require('./assets/scripts/util/event_lister');
require('./assets/scripts/util/waitnode');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mygolbal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9667atqdBHIb60A67blB9L', 'mygolbal');
// scripts/mygolbal.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _socket_ctr = _interopRequireDefault(require("./data/socket_ctr.js"));

var _player = _interopRequireDefault(require("./data/player.js"));

var _event_lister = _interopRequireDefault(require("./util/event_lister.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myglobal = {} || myglobal;
myglobal.socket = (0, _socket_ctr["default"])();
myglobal.playerData = (0, _player["default"])();
myglobal.eventlister = (0, _event_lister["default"])({});
var _default = myglobal;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL215Z29sYmFsLmpzIl0sIm5hbWVzIjpbIm15Z2xvYmFsIiwic29ja2V0Iiwic29ja2V0Y3RyIiwicGxheWVyRGF0YSIsInBsYXllcmRhdGEiLCJldmVudGxpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxNQUFNQSxRQUF2QjtBQUNBQSxRQUFRLENBQUNDLE1BQVQsR0FBa0IsSUFBQUMsc0JBQUEsR0FBbEI7QUFDQUYsUUFBUSxDQUFDRyxVQUFULEdBQXNCLElBQUFDLGtCQUFBLEdBQXRCO0FBQ0FKLFFBQVEsQ0FBQ0ssV0FBVCxHQUF1QixJQUFBQSx3QkFBQSxFQUFZLEVBQVosQ0FBdkI7ZUFDZUwiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2NrZXRjdHIgZnJvbSBcIi4vZGF0YS9zb2NrZXRfY3RyLmpzXCJcbmltcG9ydCBwbGF5ZXJkYXRhIGZyb20gXCIuL2RhdGEvcGxheWVyLmpzXCJcbmltcG9ydCBldmVudGxpc3RlciBmcm9tIFwiLi91dGlsL2V2ZW50X2xpc3Rlci5qc1wiXG5cbmNvbnN0IG15Z2xvYmFsID0ge30gfHwgbXlnbG9iYWxcbm15Z2xvYmFsLnNvY2tldCA9IHNvY2tldGN0cigpXG5teWdsb2JhbC5wbGF5ZXJEYXRhID0gcGxheWVyZGF0YSgpXG5teWdsb2JhbC5ldmVudGxpc3RlciA9IGV2ZW50bGlzdGVyKHt9KVxuZXhwb3J0IGRlZmF1bHQgbXlnbG9iYWxcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec135Q6KzZJs6HbbU3UeCa5', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjAueF9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0VBQ1g7RUFDQTtFQUNBRCxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsMkJBQVYsR0FBd0MsSUFBeEM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIOS5i+WJjeeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmlmIChjYy5Ub2dnbGUpIHtcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcbiAgICBjYy5Ub2dnbGUuX3RyaWdnZXJFdmVudEluU2NyaXB0X2NoZWNrID0gdHJ1ZTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/util/event_lister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd485eyCsiBLBqweDM7SjVQh', 'event_lister');
// scripts/util/event_lister.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var eventLister = function eventLister(obj) {
  var register = {};

  obj.on = function (type, method) {
    if (register.hasOwnProperty(type)) {
      register[type].push(method);
    } else {
      register[type] = [method];
    }
  };

  obj.fire = function (type) {
    if (register.hasOwnProperty(type)) {
      var methodList = register[type];

      for (var i = 0; i < methodList.length; ++i) {
        var handle = methodList[i];
        var args = [];

        for (var i = 1; i < arguments.length; ++i) {
          args.push(arguments[i]);
        } //handle.call(this,args)


        console.log("handle.call(this,args) type:" + type);
        handle.apply(this, args);
      }
    }
  };

  obj.removeLister = function (type) {
    register[type] = [];
  };

  obj.removeAllLister = function () {
    register = {};
  };

  return obj;
};

var _default = eventLister;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWwvZXZlbnRfbGlzdGVyLmpzIl0sIm5hbWVzIjpbImV2ZW50TGlzdGVyIiwib2JqIiwicmVnaXN0ZXIiLCJvbiIsInR5cGUiLCJtZXRob2QiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJmaXJlIiwibWV0aG9kTGlzdCIsImkiLCJsZW5ndGgiLCJoYW5kbGUiLCJhcmdzIiwiYXJndW1lbnRzIiwiY29uc29sZSIsImxvZyIsImFwcGx5IiwicmVtb3ZlTGlzdGVyIiwicmVtb3ZlQWxsTGlzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLEdBQVQsRUFBYTtFQUM3QixJQUFJQyxRQUFRLEdBQUcsRUFBZjs7RUFFQUQsR0FBRyxDQUFDRSxFQUFKLEdBQVMsVUFBU0MsSUFBVCxFQUFjQyxNQUFkLEVBQXFCO0lBQzFCLElBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QkYsSUFBeEIsQ0FBSCxFQUFpQztNQUM3QkYsUUFBUSxDQUFDRSxJQUFELENBQVIsQ0FBZUcsSUFBZixDQUFvQkYsTUFBcEI7SUFDSCxDQUZELE1BRUs7TUFDREgsUUFBUSxDQUFDRSxJQUFELENBQVIsR0FBaUIsQ0FBQ0MsTUFBRCxDQUFqQjtJQUNIO0VBQ0osQ0FORDs7RUFRQUosR0FBRyxDQUFDTyxJQUFKLEdBQVcsVUFBU0osSUFBVCxFQUFjO0lBQ3JCLElBQUdGLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QkYsSUFBeEIsQ0FBSCxFQUFrQztNQUM5QixJQUFJSyxVQUFVLEdBQUdQLFFBQVEsQ0FBQ0UsSUFBRCxDQUF6Qjs7TUFDQSxLQUFJLElBQUlNLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0QsVUFBVSxDQUFDRSxNQUF6QixFQUFnQyxFQUFFRCxDQUFsQyxFQUFvQztRQUNoQyxJQUFJRSxNQUFNLEdBQUdILFVBQVUsQ0FBQ0MsQ0FBRCxDQUF2QjtRQUNBLElBQUlHLElBQUksR0FBRyxFQUFYOztRQUNBLEtBQUksSUFBSUgsQ0FBQyxHQUFHLENBQVosRUFBY0EsQ0FBQyxHQUFDSSxTQUFTLENBQUNILE1BQTFCLEVBQWlDLEVBQUVELENBQW5DLEVBQXFDO1VBQ2pDRyxJQUFJLENBQUNOLElBQUwsQ0FBVU8sU0FBUyxDQUFDSixDQUFELENBQW5CO1FBQ0gsQ0FMK0IsQ0FPaEM7OztRQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBK0JaLElBQTNDO1FBQ0FRLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhLElBQWIsRUFBa0JKLElBQWxCO01BQ0g7SUFDSjtFQUNKLENBZkQ7O0VBaUJBWixHQUFHLENBQUNpQixZQUFKLEdBQW1CLFVBQVNkLElBQVQsRUFBYztJQUM3QkYsUUFBUSxDQUFDRSxJQUFELENBQVIsR0FBaUIsRUFBakI7RUFDSCxDQUZEOztFQUlBSCxHQUFHLENBQUNrQixlQUFKLEdBQXNCLFlBQVU7SUFDNUJqQixRQUFRLEdBQUcsRUFBWDtFQUNILENBRkQ7O0VBSUEsT0FBT0QsR0FBUDtBQUNILENBckNEOztlQXVDZUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50TGlzdGVyID0gZnVuY3Rpb24ob2JqKXtcbiAgICB2YXIgcmVnaXN0ZXIgPSB7fVxuXG4gICAgb2JqLm9uID0gZnVuY3Rpb24odHlwZSxtZXRob2Qpe1xuICAgICAgICBpZihyZWdpc3Rlci5oYXNPd25Qcm9wZXJ0eSh0eXBlKSl7XG4gICAgICAgICAgICByZWdpc3Rlclt0eXBlXS5wdXNoKG1ldGhvZClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZWdpc3Rlclt0eXBlXSA9IFttZXRob2RdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvYmouZmlyZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICAgICAgICBpZihyZWdpc3Rlci5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZExpc3QgPSByZWdpc3Rlclt0eXBlXVxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxtZXRob2RMaXN0Lmxlbmd0aDsrK2kpe1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBtZXRob2RMaXN0W2ldXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7aTxhcmd1bWVudHMubGVuZ3RoOysraSl7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9oYW5kbGUuY2FsbCh0aGlzLGFyZ3MpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGUuY2FsbCh0aGlzLGFyZ3MpIHR5cGU6XCIrdHlwZSlcbiAgICAgICAgICAgICAgICBoYW5kbGUuYXBwbHkodGhpcyxhcmdzKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9iai5yZW1vdmVMaXN0ZXIgPSBmdW5jdGlvbih0eXBlKXtcbiAgICAgICAgcmVnaXN0ZXJbdHlwZV0gPSBbXVxuICAgIH1cblxuICAgIG9iai5yZW1vdmVBbGxMaXN0ZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICByZWdpc3RlciA9IHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlciJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/prefabs/player_node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa64aMZgnFIfLx2Lmi+lbwV', 'player_node');
// scripts/gameScene/prefabs/player_node.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    account_label: cc.Label,
    nickname_label: cc.Label,
    room_touxiang: cc.Sprite,
    globalcount_label: cc.Label,
    headimage: cc.Sprite,
    readyimage: cc.Node,
    offlineimage: cc.Node,
    card_node: cc.Node,
    card_prefab: cc.Prefab,
    //tips_label:cc.Label,
    clockimage: cc.Node,
    qiangdidzhu_node: cc.Node,
    //抢地主的父节点
    time_label: cc.Label,
    robimage_sp: cc.SpriteFrame,
    robnoimage_sp: cc.SpriteFrame,
    robIconSp: cc.Sprite,
    robIcon_Sp: cc.Node,
    robnoIcon_Sp: cc.Node,
    masterIcon: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.readyimage.active = false;
    this.offlineimage.active = false; //监听开始游戏事件(客户端发给客户端)

    this.node.on("gamestart_event", function (event) {
      this.readyimage.active = false;
    }.bind(this)); //给其他玩家发牌事件

    this.node.on("push_card_event", function (event) {
      console.log("on push_card_event"); //自己不再发牌

      if (this.accountid == _mygolbal["default"].playerData.accountID) {
        return;
      }

      this.pushCard();
    }.bind(this));
    this.node.on("playernode_rob_state_event", function (event) {
      //{"accountid":"2162866","state":1}
      var detail = event; //如果是自己在抢，需要隐藏qiangdidzhu_node节点
      //this.accountid表示这个节点挂接的accountid

      if (detail.accountid == this.accountid) {
        //console.log("detail.accountid"+detail.accountid)
        this.qiangdidzhu_node.active = false;
      }

      if (this.accountid == detail.accountid) {
        if (detail.state == qian_state.qian) {
          console.log("this.robIcon_Sp.active = true");
          this.robIcon_Sp.active = true;
        } else if (detail.state == qian_state.buqiang) {
          this.robnoIcon_Sp.active = true;
        } else {
          console.log("get rob value :" + detail.state);
        }
      }
    }.bind(this));
    this.node.on("playernode_changemaster_event", function (event) {
      var detail = event;
      this.robIcon_Sp.active = false;
      this.robnoIcon_Sp.active = false;

      if (detail == this.accountid) {
        this.masterIcon.active = true;
      }
    }.bind(this)); // this.node.on("playernode_add_three_card",function(event){
    //   var detail = event //地主的accountid
    //   if(detail==this.accountid){
    //     //给地主发三张排
    //   }
    // }.bind(this))
  },
  start: function start() {},
  //这里初始化房间内位置节点信息(自己和其他玩家)
  //data玩家节点数据
  //index玩家在房间的位置索引
  init_data: function init_data(data, index) {
    console.log("init_data:" + JSON.stringify(data)); //data:{"accountid":"2117836","nick_name":"tiny543","avatarUrl":"http://xxx","goldcount":1000}

    this.accountid = data.accountid;
    this.account_label.string = data.accountid;
    this.nickname_label.string = data.nick_name;
    this.globalcount_label.string = data.goldcount;
    this.cardlist_node = [];
    this.seat_index = index;

    if (data.isready == true) {
      this.readyimage.active = true;
    } //网络图片加载
    //     cc.loader.load({url: data.avatarUrl, type: 'jpg'},  (err, tex)=> {
    //     //cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
    //     let oldWidth = this.headImage.node.width;
    //     //console.log('old withd' + oldWidth);
    //     this.room_touxiang.spriteFrame = new cc.SpriteFrame(tex);
    //     let newWidth = this.headImage.node.width;
    //     //console.log('old withd' + newWidth);
    //     this.headImage.node.scale = oldWidth / newWidth;
    // });
    //这里根据传入的avarter来获取本地图像


    var str = data.avatarUrl; //console.log(str)

    var head_image_path = "UI/headimage/" + str;
    cc.loader.loadRes(head_image_path, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        console.log(err.message || err);
        return;
      }

      this.headimage.spriteFrame = spriteFrame;
    }.bind(this)); //注册一个player_ready消息

    this.node.on("player_ready_notify", function (event) {
      console.log("player_ready_notify event", event);
      var detail = event;
      console.log("------player_ready_notify detail:" + detail);

      if (detail == this.accountid) {
        this.readyimage.active = true;
      }
    }.bind(this)); //监听内部随可以抢地主消息,这个消息会发给每个playernode节点

    this.node.on("playernode_canrob_event", function (event) {
      var detail = event;
      console.log("------playernode_canrob_event detail:" + detail);

      if (detail == this.accountid) {
        this.qiangdidzhu_node.active = true; //this.tips_label.string ="正在抢地主" 

        this.time_label.string = "10"; //开启一个定时器
      }
    }.bind(this)); //?

    if (index == 1) {
      this.card_node.x = -this.card_node.x - 30;
    }
  },
  // update (dt) {},
  pushCard: function pushCard() {
    this.card_node.active = true;

    for (var i = 0; i < 17; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.6;
      console.log(" this.card_node.parent.parent" + this.card_node.parent.parent.name);
      card.parent = this.card_node; //card.parent = this.node

      var height = card.height;
      card.y = (17 - 1) * 0.5 * height * 0.4 * 0.3 - height * 0.4 * 0.3 * i;
      card.x = 0; //console.log("call pushCard x:"+card.x+" y:"+card.y)

      this.cardlist_node.push(card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9wcmVmYWJzL3BsYXllcl9ub2RlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWNjb3VudF9sYWJlbCIsIkxhYmVsIiwibmlja25hbWVfbGFiZWwiLCJyb29tX3RvdXhpYW5nIiwiU3ByaXRlIiwiZ2xvYmFsY291bnRfbGFiZWwiLCJoZWFkaW1hZ2UiLCJyZWFkeWltYWdlIiwiTm9kZSIsIm9mZmxpbmVpbWFnZSIsImNhcmRfbm9kZSIsImNhcmRfcHJlZmFiIiwiUHJlZmFiIiwiY2xvY2tpbWFnZSIsInFpYW5nZGlkemh1X25vZGUiLCJ0aW1lX2xhYmVsIiwicm9iaW1hZ2Vfc3AiLCJTcHJpdGVGcmFtZSIsInJvYm5vaW1hZ2Vfc3AiLCJyb2JJY29uU3AiLCJyb2JJY29uX1NwIiwicm9ibm9JY29uX1NwIiwibWFzdGVySWNvbiIsIm9uTG9hZCIsImFjdGl2ZSIsIm5vZGUiLCJvbiIsImV2ZW50IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50aWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJhY2NvdW50SUQiLCJwdXNoQ2FyZCIsImRldGFpbCIsInN0YXRlIiwicWlhbl9zdGF0ZSIsInFpYW4iLCJidXFpYW5nIiwic3RhcnQiLCJpbml0X2RhdGEiLCJkYXRhIiwiaW5kZXgiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyaW5nIiwibmlja19uYW1lIiwiZ29sZGNvdW50IiwiY2FyZGxpc3Rfbm9kZSIsInNlYXRfaW5kZXgiLCJpc3JlYWR5Iiwic3RyIiwiYXZhdGFyVXJsIiwiaGVhZF9pbWFnZV9wYXRoIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInNwcml0ZUZyYW1lIiwibWVzc2FnZSIsIngiLCJpIiwiY2FyZCIsImluc3RhbnRpYXRlIiwic2NhbGUiLCJwYXJlbnQiLCJuYW1lIiwiaGVpZ2h0IiwieSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7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R0FBaEMsR0FBc0NBLE1BQU0sR0FBRyxHQUFULEdBQWUsR0FBZixHQUFxQk4sQ0FBcEU7TUFDQUMsSUFBSSxDQUFDRixDQUFMLEdBQVMsQ0FBVCxDQVJpQixDQVVqQjs7TUFDQSxLQUFLWCxhQUFMLENBQW1Cb0IsSUFBbkIsQ0FBd0JQLElBQXhCO0lBQ0g7RUFDSjtBQW5MSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYWNjb3VudF9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgbmlja25hbWVfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIHJvb21fdG91eGlhbmc6Y2MuU3ByaXRlLFxuICAgICAgICBnbG9iYWxjb3VudF9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgaGVhZGltYWdlOmNjLlNwcml0ZSxcbiAgICAgICAgcmVhZHlpbWFnZTpjYy5Ob2RlLFxuICAgICAgICBvZmZsaW5laW1hZ2U6Y2MuTm9kZSxcbiAgICAgICAgY2FyZF9ub2RlOmNjLk5vZGUsXG4gICAgICAgIGNhcmRfcHJlZmFiOmNjLlByZWZhYixcbiAgICAgICAgLy90aXBzX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBjbG9ja2ltYWdlOmNjLk5vZGUsXG4gICAgICAgIHFpYW5nZGlkemh1X25vZGU6Y2MuTm9kZSwgLy/miqLlnLDkuLvnmoTniLboioLngrlcbiAgICAgICAgdGltZV9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgcm9iaW1hZ2Vfc3A6Y2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIHJvYm5vaW1hZ2Vfc3A6Y2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIHJvYkljb25TcDogY2MuU3ByaXRlLFxuICAgICAgICByb2JJY29uX1NwOmNjLk5vZGUsXG4gICAgICAgIHJvYm5vSWNvbl9TcDpjYy5Ob2RlLFxuICAgICAgICBtYXN0ZXJJY29uOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMucmVhZHlpbWFnZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5vZmZsaW5laW1hZ2UuYWN0aXZlID0gZmFsc2VcbiAgICAgIFxuICAgICAgLy/nm5HlkKzlvIDlp4vmuLjmiI/kuovku7Yo5a6i5oi356uv5Y+R57uZ5a6i5oi356uvKVxuICAgICAgdGhpcy5ub2RlLm9uKFwiZ2FtZXN0YXJ0X2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB0aGlzLnJlYWR5aW1hZ2UuYWN0aXZlID0gZmFsc2VcbiAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgLy/nu5nlhbbku5bnjqnlrrblj5HniYzkuovku7ZcbiAgICAgIHRoaXMubm9kZS5vbihcInB1c2hfY2FyZF9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBwdXNoX2NhcmRfZXZlbnRcIilcbiAgICAgICAgLy/oh6rlt7HkuI3lho3lj5HniYxcbiAgICAgICAgaWYodGhpcy5hY2NvdW50aWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaENhcmQoKVxuICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICB0aGlzLm5vZGUub24oXCJwbGF5ZXJub2RlX3JvYl9zdGF0ZV9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAvL3tcImFjY291bnRpZFwiOlwiMjE2Mjg2NlwiLFwic3RhdGVcIjoxfVxuICAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudFxuICAgICAgXG4gICAgICAgICAgLy/lpoLmnpzmmK/oh6rlt7HlnKjmiqLvvIzpnIDopoHpmpDol49xaWFuZ2RpZHpodV9ub2Rl6IqC54K5XG4gICAgICAgICAgLy90aGlzLmFjY291bnRpZOihqOekuui/meS4quiKgueCueaMguaOpeeahGFjY291bnRpZFxuICAgICAgICAgIGlmKGRldGFpbC5hY2NvdW50aWQ9PXRoaXMuYWNjb3VudGlkKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkZXRhaWwuYWNjb3VudGlkXCIrZGV0YWlsLmFjY291bnRpZClcbiAgICAgICAgICAgIHRoaXMucWlhbmdkaWR6aHVfbm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aGlzLmFjY291bnRpZCA9PSBkZXRhaWwuYWNjb3VudGlkKXtcbiAgICAgICAgICAgIGlmKGRldGFpbC5zdGF0ZT09cWlhbl9zdGF0ZS5xaWFuKXtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnJvYkljb25fU3AuYWN0aXZlID0gdHJ1ZVwiKVxuICAgICAgICAgICAgICB0aGlzLnJvYkljb25fU3AuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICB9ZWxzZSBpZihkZXRhaWwuc3RhdGU9PXFpYW5fc3RhdGUuYnVxaWFuZyl7XG4gICAgICAgICAgICAgIHRoaXMucm9ibm9JY29uX1NwLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCByb2IgdmFsdWUgOlwiK2RldGFpbC5zdGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgdGhpcy5ub2RlLm9uKFwicGxheWVybm9kZV9jaGFuZ2VtYXN0ZXJfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICB2YXIgZGV0YWlsID0gZXZlbnQgXG4gICAgICAgICB0aGlzLnJvYkljb25fU3AuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgIHRoaXMucm9ibm9JY29uX1NwLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICBpZihkZXRhaWw9PXRoaXMuYWNjb3VudGlkKXtcbiAgICAgICAgICAgIHRoaXMubWFzdGVySWNvbi5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAvLyB0aGlzLm5vZGUub24oXCJwbGF5ZXJub2RlX2FkZF90aHJlZV9jYXJkXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgLy8gICB2YXIgZGV0YWlsID0gZXZlbnQgLy/lnLDkuLvnmoRhY2NvdW50aWRcbiAgICAgIC8vICAgaWYoZGV0YWlsPT10aGlzLmFjY291bnRpZCl7XG4gICAgICAvLyAgICAgLy/nu5nlnLDkuLvlj5HkuInlvKDmjpJcblxuICAgICAgLy8gICB9XG4gICAgICAvLyB9LmJpbmQodGhpcykpXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIC8v6L+Z6YeM5Yid5aeL5YyW5oi/6Ze05YaF5L2N572u6IqC54K55L+h5oGvKOiHquW3seWSjOWFtuS7lueOqeWutilcbiAgICAvL2RhdGHnjqnlrrboioLngrnmlbDmja5cbiAgICAvL2luZGV4546p5a625Zyo5oi/6Ze055qE5L2N572u57Si5byVXG4gICAgaW5pdF9kYXRhKGRhdGEsaW5kZXgpe1xuICAgICAgY29uc29sZS5sb2coXCJpbml0X2RhdGE6XCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpICBcbiAgICAgIC8vZGF0YTp7XCJhY2NvdW50aWRcIjpcIjIxMTc4MzZcIixcIm5pY2tfbmFtZVwiOlwidGlueTU0M1wiLFwiYXZhdGFyVXJsXCI6XCJodHRwOi8veHh4XCIsXCJnb2xkY291bnRcIjoxMDAwfVxuICAgICAgdGhpcy5hY2NvdW50aWQgPSBkYXRhLmFjY291bnRpZFxuICAgICAgdGhpcy5hY2NvdW50X2xhYmVsLnN0cmluZyA9IGRhdGEuYWNjb3VudGlkXG4gICAgICB0aGlzLm5pY2tuYW1lX2xhYmVsLnN0cmluZyA9IGRhdGEubmlja19uYW1lXG4gICAgICB0aGlzLmdsb2JhbGNvdW50X2xhYmVsLnN0cmluZyA9IGRhdGEuZ29sZGNvdW50XG4gICAgICB0aGlzLmNhcmRsaXN0X25vZGUgPSBbXVxuICAgICAgdGhpcy5zZWF0X2luZGV4ID0gaW5kZXhcbiAgICAgIGlmKGRhdGEuaXNyZWFkeT09dHJ1ZSl7XG4gICAgICAgIHRoaXMucmVhZHlpbWFnZS5hY3RpdmUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8v572R57uc5Zu+54mH5Yqg6L29XG4gICAgLy8gICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IGRhdGEuYXZhdGFyVXJsLCB0eXBlOiAnanBnJ30sICAoZXJyLCB0ZXgpPT4ge1xuICAgIC8vICAgICAvL2NjLmxvZygnU2hvdWxkIGxvYWQgYSB0ZXh0dXJlIGZyb20gUkVTVGZ1bCBBUEkgYnkgc3BlY2lmeSB0aGUgdHlwZTogJyArICh0ZXggaW5zdGFuY2VvZiBjYy5UZXh0dXJlMkQpKTtcbiAgICAvLyAgICAgbGV0IG9sZFdpZHRoID0gdGhpcy5oZWFkSW1hZ2Uubm9kZS53aWR0aDtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZygnb2xkIHdpdGhkJyArIG9sZFdpZHRoKTtcbiAgICAvLyAgICAgdGhpcy5yb29tX3RvdXhpYW5nLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XG4gICAgLy8gICAgIGxldCBuZXdXaWR0aCA9IHRoaXMuaGVhZEltYWdlLm5vZGUud2lkdGg7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coJ29sZCB3aXRoZCcgKyBuZXdXaWR0aCk7XG4gICAgLy8gICAgIHRoaXMuaGVhZEltYWdlLm5vZGUuc2NhbGUgPSBvbGRXaWR0aCAvIG5ld1dpZHRoO1xuICAgIC8vIH0pO1xuICAgIC8v6L+Z6YeM5qC55o2u5Lyg5YWl55qEYXZhcnRlcuadpeiOt+WPluacrOWcsOWbvuWDj1xuICAgIHZhciBzdHIgPSBkYXRhLmF2YXRhclVybFxuICAgIC8vY29uc29sZS5sb2coc3RyKVxuICAgIHZhciBoZWFkX2ltYWdlX3BhdGggPSBcIlVJL2hlYWRpbWFnZS9cIiArIHN0clxuICAgIGNjLmxvYWRlci5sb2FkUmVzKGhlYWRfaW1hZ2VfcGF0aCxjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3ByaXRlRnJhbWUpwqB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH3CoCDCoCDCoCDCoCDCoCBcbiAgICAgICAgIHRoaXMuaGVhZGltYWdlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7wqAgwqAgwqAgwqAgXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvL+azqOWGjOS4gOS4qnBsYXllcl9yZWFkeea2iOaBr1xuICAgIHRoaXMubm9kZS5vbihcInBsYXllcl9yZWFkeV9ub3RpZnlcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyX3JlYWR5X25vdGlmeSBldmVudFwiLGV2ZW50KVxuICAgICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLXBsYXllcl9yZWFkeV9ub3RpZnkgZGV0YWlsOlwiK2RldGFpbClcbiAgICAgICAgICAgIGlmKGRldGFpbD09dGhpcy5hY2NvdW50aWQpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlpbWFnZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOWGhemDqOmaj+WPr+S7peaKouWcsOS4u+a2iOaBryzov5nkuKrmtojmga/kvJrlj5Hnu5nmr4/kuKpwbGF5ZXJub2Rl6IqC54K5XG4gICAgICAgIHRoaXMubm9kZS5vbihcInBsYXllcm5vZGVfY2Fucm9iX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLXBsYXllcm5vZGVfY2Fucm9iX2V2ZW50IGRldGFpbDpcIitkZXRhaWwpXG4gICAgICAgICAgICBpZihkZXRhaWw9PXRoaXMuYWNjb3VudGlkKXtcbiAgICAgICAgICAgICAgdGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZT10cnVlXG4gICAgICAgICAgICAgIC8vdGhpcy50aXBzX2xhYmVsLnN0cmluZyA9XCLmraPlnKjmiqLlnLDkuLtcIiBcbiAgICAgICAgICAgICAgdGhpcy50aW1lX2xhYmVsLnN0cmluZz1cIjEwXCJcbiAgICAgICAgICAgICAgLy/lvIDlkK/kuIDkuKrlrprml7blmahcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIC8vP1xuICAgICAgICBpZihpbmRleD09MSl7XG4gICAgICAgICAgdGhpcy5jYXJkX25vZGUueCA9IC10aGlzLmNhcmRfbm9kZS54IC0gMzBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBwdXNoQ2FyZCgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYXJkX25vZGUuYWN0aXZlID0gdHJ1ZSBcbiAgICAgICAgZm9yKHZhciBpPTA7aTwxNztpKyspe1xuICAgICAgICAgICAgdmFyIGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRfcHJlZmFiKVxuICAgICAgICAgICAgY2FyZC5zY2FsZT0wLjZcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuY2FyZF9ub2RlLnBhcmVudC5wYXJlbnRcIisgdGhpcy5jYXJkX25vZGUucGFyZW50LnBhcmVudC5uYW1lKVxuICAgICAgICAgICAgY2FyZC5wYXJlbnQgPSB0aGlzLmNhcmRfbm9kZVxuICAgICAgICAgICAgLy9jYXJkLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGNhcmQuaGVpZ2h0XG4gICAgICAgICAgICBjYXJkLnkgPSAoMTcgLSAxKSAqIDAuNSAqIGhlaWdodCAqIDAuNCAqIDAuMyAtIGhlaWdodCAqIDAuNCAqIDAuMyAqIGk7XG4gICAgICAgICAgICBjYXJkLnggPSAwXG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhbGwgcHVzaENhcmQgeDpcIitjYXJkLngrXCIgeTpcIitjYXJkLnkpXG4gICAgICAgICAgICB0aGlzLmNhcmRsaXN0X25vZGUucHVzaChjYXJkKVxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/data/socket_ctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ce03TvsElJsaLzLDlseCff', 'socket_ctr');
// scripts/data/socket_ctr.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _event_lister = _interopRequireDefault(require("../util/event_lister.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socketCtr = function socketCtr() {
  var that = {};
  var respone_map = {};
  var call_index = 0;
  var _socket = null;
  var event = (0, _event_lister["default"])({});

  var _sendmsg = function _sendmsg(cmdtype, req, callindex) {
    _socket.emit("notify", {
      cmd: cmdtype,
      data: req,
      callindex: callindex
    });
  };

  var _request = function _request(cmdtype, req, callback) {
    console.log("send cmd:" + cmdtype + "  " + JSON.stringify(req));
    call_index++;
    respone_map[call_index] = callback;

    _sendmsg(cmdtype, req, call_index);
  };

  that.initSocket = function () {
    var opts = {
      'reconnection': false,
      'force new connection': true,
      'transports': ['websocket', 'polling']
    };
    _socket = window.io.connect(defines.serverUrl, opts);

    _socket.on("connection", function () {
      console.log("connect server success!!");
    });

    _socket.on("notify", function (res) {
      console.log("on notify cmd:" + JSON.stringify(res));

      if (respone_map.hasOwnProperty(res.callBackIndex)) {
        var callback = respone_map[res.callBackIndex];

        if (callback) {
          callback(res.result, res.data);
        }
      } else {
        //if(res.callBackIndex!=0){
        //console.log("not found call index",res.callBackIndex)
        //提交一个监听的事件给监听器
        //  on notify cmd:{"type":"player_joinroom_notify","result":0,"data":
        //  {"accountid":"2586422","nick_name":"tiny110","avatarUrl":
        //  "avatar_3","goldcount":1000,"seatindex":2},"callBackIndex":null}
        //没有找到回到函数，就给事件监听器提交一个事件
        var type = res.type;
        event.fire(type, res.data); // }
      }
    });
  };

  that.request_wxLogin = function (req, callback) {
    _request("wxlogin", req, callback);
  };

  that.request_creatroom = function (req, callback) {
    _request("createroom_req", req, callback);
  };

  that.request_jion = function (req, callback) {
    _request("joinroom_req", req, callback);
  };

  that.request_enter_room = function (req, callback) {
    _request("enterroom_req", req, callback);
  }; //发送不出牌信息


  that.request_buchu_card = function (req, callback) {
    _request("chu_bu_card_req", req, callback);
  };
  /*玩家出牌
    需要判断: 
       出的牌是否符合规则
       和上个出牌玩家比较，是否满足条件
   */


  that.request_chu_card = function (req, callback) {
    _request("chu_card_req", req, callback);
  }; //监听其他玩家进入房间消息


  that.onPlayerJoinRoom = function (callback) {
    event.on("player_joinroom_notify", callback);
  };

  that.onPlayerReady = function (callback) {
    event.on("player_ready_notify", callback);
  };

  that.onGameStart = function (callback) {
    if (callback) {
      event.on("gameStart_notify", callback);
    }
  };

  that.onChangeHouseManage = function (callback) {
    if (callback) {
      event.on("changehousemanage_notify", callback);
    }
  }; //发送ready消息


  that.requestReady = function () {
    _sendmsg("player_ready_notify", {}, null);
  };

  that.requestStart = function (callback) {
    _request("player_start_notify", {}, callback);
  }; //玩家通知服务器抢地主消息


  that.requestRobState = function (state) {
    _sendmsg("player_rob_notify", state, null);
  }; //服务器下发牌通知


  that.onPushCards = function (callback) {
    if (callback) {
      event.on("pushcard_notify", callback);
    }
  }; //监听服务器通知开始抢地主消息


  that.onCanRobState = function (callback) {
    if (callback) {
      event.on("canrob_notify", callback);
    }
  }; //监听服务器:通知谁抢地主操作消息


  that.onRobState = function (callback) {
    if (callback) {
      event.on("canrob_state_notify", callback);
    }
  }; //监听服务器:确定地主消息


  that.onChangeMaster = function (callback) {
    if (callback) {
      event.on("change_master_notify", callback);
    }
  }; //监听服务器:显示底牌消息


  that.onShowBottomCard = function (callback) {
    if (callback) {
      event.on("change_showcard_notify", callback);
    }
  }; //监听服务器:可以出牌消息


  that.onCanChuCard = function (callback) {
    if (callback) {
      event.on("can_chu_card_notify", callback);
    }
  };

  that.onRoomChangeState = function (callback) {
    if (callback) {
      event.on("room_state_notify", callback);
    }
  };

  that.onOtherPlayerChuCard = function (callback) {
    if (callback) {
      event.on("other_chucard_notify", callback);
    }
  };

  return that;
};

var _default = socketCtr;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvc29ja2V0X2N0ci5qcyJdLCJuYW1lcyI6WyJzb2NrZXRDdHIiLCJ0aGF0IiwicmVzcG9uZV9tYXAiLCJjYWxsX2luZGV4IiwiX3NvY2tldCIsImV2ZW50IiwiZXZlbnRsaXN0ZXIiLCJfc2VuZG1zZyIsImNtZHR5cGUiLCJyZXEiLCJjYWxsaW5kZXgiLCJlbWl0IiwiY21kIiwiZGF0YSIsIl9yZXF1ZXN0IiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImluaXRTb2NrZXQiLCJvcHRzIiwid2luZG93IiwiaW8iLCJjb25uZWN0IiwiZGVmaW5lcyIsInNlcnZlclVybCIsIm9uIiwicmVzIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsQmFja0luZGV4IiwicmVzdWx0IiwidHlwZSIsImZpcmUiLCJyZXF1ZXN0X3d4TG9naW4iLCJyZXF1ZXN0X2NyZWF0cm9vbSIsInJlcXVlc3RfamlvbiIsInJlcXVlc3RfZW50ZXJfcm9vbSIsInJlcXVlc3RfYnVjaHVfY2FyZCIsInJlcXVlc3RfY2h1X2NhcmQiLCJvblBsYXllckpvaW5Sb29tIiwib25QbGF5ZXJSZWFkeSIsIm9uR2FtZVN0YXJ0Iiwib25DaGFuZ2VIb3VzZU1hbmFnZSIsInJlcXVlc3RSZWFkeSIsInJlcXVlc3RTdGFydCIsInJlcXVlc3RSb2JTdGF0ZSIsInN0YXRlIiwib25QdXNoQ2FyZHMiLCJvbkNhblJvYlN0YXRlIiwib25Sb2JTdGF0ZSIsIm9uQ2hhbmdlTWFzdGVyIiwib25TaG93Qm90dG9tQ2FyZCIsIm9uQ2FuQ2h1Q2FyZCIsIm9uUm9vbUNoYW5nZVN0YXRlIiwib25PdGhlclBsYXllckNodUNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFVO0VBQ3hCLElBQUlDLElBQUksR0FBRyxFQUFYO0VBQ0EsSUFBSUMsV0FBVyxHQUFH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WixRQUFoQztJQUNGO0VBQ0wsQ0FKRCxDQTdJd0IsQ0FtSnhCOzs7RUFDQWQsSUFBSSxDQUFDbUQsZ0JBQUwsR0FBd0IsVUFBU3JDLFFBQVQsRUFBa0I7SUFDdEMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyx3QkFBVCxFQUFrQ1osUUFBbEM7SUFDRjtFQUNMLENBSkQsQ0FwSndCLENBMEp4Qjs7O0VBQ0FkLElBQUksQ0FBQ29ELFlBQUwsR0FBb0IsVUFBU3RDLFFBQVQsRUFBa0I7SUFDbEMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyxxQkFBVCxFQUErQlosUUFBL0I7SUFDSDtFQUNKLENBSkQ7O0VBTUFkLElBQUksQ0FBQ3FELGlCQUFMLEdBQXlCLFVBQVN2QyxRQUFULEVBQWtCO0lBQ3ZDLElBQUdBLFFBQUgsRUFBWTtNQUNSVixLQUFLLENBQUNzQixFQUFOLENBQVMsbUJBQVQsRUFBNkJaLFFBQTdCO0lBQ0g7RUFDSixDQUpEOztFQU1BZCxJQUFJLENBQUNzRCxvQkFBTCxHQUE0QixVQUFTeEMsUUFBVCxFQUFrQjtJQUMxQyxJQUFHQSxRQUFILEVBQVk7TUFDUlYsS0FBSyxDQUFDc0IsRUFBTixDQUFTLHNCQUFULEVBQWdDWixRQUFoQztJQUNIO0VBQ0osQ0FKRDs7RUFLQSxPQUFPZCxJQUFQO0FBQ0gsQ0E3S0Q7O2VBK0tlRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50bGlzdGVyIGZyb20gXCIuLi91dGlsL2V2ZW50X2xpc3Rlci5qc1wiXG5cbmNvbnN0IHNvY2tldEN0ciA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRoYXQgPSB7fVxuICAgIHZhciByZXNwb25lX21hcCA9IHt9IFxuICAgIHZhciBjYWxsX2luZGV4ID0gMFxuXG4gICAgdmFyIF9zb2NrZXQgPSBudWxsXG4gICAgdmFyIGV2ZW50ID0gZXZlbnRsaXN0ZXIoe30pXG4gICAgY29uc3QgX3NlbmRtc2cgPSBmdW5jdGlvbihjbWR0eXBlLHJlcSxjYWxsaW5kZXgpe1xuICAgICAgICBfc29ja2V0LmVtaXQoXCJub3RpZnlcIix7Y21kOmNtZHR5cGUsZGF0YTpyZXEsY2FsbGluZGV4OmNhbGxpbmRleH0pXG4gICAgfSBcbiBcbiAgICBjb25zdCBfcmVxdWVzdCA9IGZ1bmN0aW9uKGNtZHR5cGUscmVxLGNhbGxiYWNrKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kIGNtZDpcIitjbWR0eXBlK1wiICBcIisgSlNPTi5zdHJpbmdpZnkocmVxKSlcbiAgICAgICAgY2FsbF9pbmRleCsrIFxuICAgICAgICByZXNwb25lX21hcFtjYWxsX2luZGV4XSA9IGNhbGxiYWNrXG4gICAgICAgIF9zZW5kbXNnKGNtZHR5cGUscmVxLGNhbGxfaW5kZXgpXG4gICAgfSBcbiAgXG4gICAgICAgIFxuICAgIHRoYXQuaW5pdFNvY2tldCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgJ3JlY29ubmVjdGlvbic6ZmFsc2UsXG4gICAgICAgICAgICAnZm9yY2UgbmV3IGNvbm5lY3Rpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ3RyYW5zcG9ydHMnOlsnd2Vic29ja2V0JywgJ3BvbGxpbmcnXVxuICAgICAgICB9XG4gICAgICAgIF9zb2NrZXQgPSB3aW5kb3cuaW8uY29ubmVjdChkZWZpbmVzLnNlcnZlclVybCxvcHRzKTtcblxuICAgICAgICBfc29ja2V0Lm9uKFwiY29ubmVjdGlvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Qgc2VydmVyIHN1Y2Nlc3MhIVwiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICBfc29ja2V0Lm9uKFwibm90aWZ5XCIsZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib24gbm90aWZ5IGNtZDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXG4gICAgICAgICBpZihyZXNwb25lX21hcC5oYXNPd25Qcm9wZXJ0eShyZXMuY2FsbEJhY2tJbmRleCkpe1xuICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSByZXNwb25lX21hcFtyZXMuY2FsbEJhY2tJbmRleF1cbiAgICAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgICAgY2FsbGJhY2socmVzLnJlc3VsdCxyZXMuZGF0YSlcbiAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAvL2lmKHJlcy5jYWxsQmFja0luZGV4IT0wKXtcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vdCBmb3VuZCBjYWxsIGluZGV4XCIscmVzLmNhbGxCYWNrSW5kZXgpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgLy/mj5DkuqTkuIDkuKrnm5HlkKznmoTkuovku7bnu5nnm5HlkKzlmahcbiAgICAgICAgLy8gIG9uIG5vdGlmeSBjbWQ6e1widHlwZVwiOlwicGxheWVyX2pvaW5yb29tX25vdGlmeVwiLFwicmVzdWx0XCI6MCxcImRhdGFcIjpcbiAgICAgICAgLy8gIHtcImFjY291bnRpZFwiOlwiMjU4NjQyMlwiLFwibmlja19uYW1lXCI6XCJ0aW55MTEwXCIsXCJhdmF0YXJVcmxcIjpcbiAgICAgICAgLy8gIFwiYXZhdGFyXzNcIixcImdvbGRjb3VudFwiOjEwMDAsXCJzZWF0aW5kZXhcIjoyfSxcImNhbGxCYWNrSW5kZXhcIjpudWxsfVxuICAgICAgICAgICAgICAvL+ayoeacieaJvuWIsOWbnuWIsOWHveaVsO+8jOWwsee7meS6i+S7tuebkeWQrOWZqOaPkOS6pOS4gOS4quS6i+S7tlxuICAgICAgICAgICAgICB2YXIgdHlwZSA9IHJlcy50eXBlXG4gICAgICAgICAgICAgIGV2ZW50LmZpcmUodHlwZSxyZXMuZGF0YSlcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB0aGF0LnJlcXVlc3Rfd3hMb2dpbiA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwid3hsb2dpblwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG4gICAgXG4gICAgdGhhdC5yZXF1ZXN0X2NyZWF0cm9vbSA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiY3JlYXRlcm9vbV9yZXFcIixyZXEsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdGhhdC5yZXF1ZXN0X2ppb24gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcImpvaW5yb29tX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICB0aGF0LnJlcXVlc3RfZW50ZXJfcm9vbSA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiZW50ZXJyb29tX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICAvL+WPkemAgeS4jeWHuueJjOS/oeaBr1xuICAgIHRoYXQucmVxdWVzdF9idWNodV9jYXJkID0gIGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiY2h1X2J1X2NhcmRfcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cbiAgICAvKueOqeWutuWHuueJjFxuICAgICAg6ZyA6KaB5Yik5patOiBcbiAgICAgICAgIOWHuueahOeJjOaYr+WQpuespuWQiOinhOWImVxuICAgICAgICAg5ZKM5LiK5Liq5Ye654mM546p5a625q+U6L6D77yM5piv5ZCm5ruh6Laz5p2h5Lu2XG5cbiAgICAqL1xuICAgIHRoYXQucmVxdWVzdF9jaHVfY2FyZCA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiY2h1X2NhcmRfcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cbiAgICAvL+ebkeWQrOWFtuS7lueOqeWutui/m+WFpeaIv+mXtOa2iOaBr1xuICAgIHRoYXQub25QbGF5ZXJKb2luUm9vbSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgIGV2ZW50Lm9uKFwicGxheWVyX2pvaW5yb29tX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgIH1cblxuICAgIHRoYXQub25QbGF5ZXJSZWFkeSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgZXZlbnQub24oXCJwbGF5ZXJfcmVhZHlfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdGhhdC5vbkdhbWVTdGFydCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICBldmVudC5vbihcImdhbWVTdGFydF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25DaGFuZ2VIb3VzZU1hbmFnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjaGFuZ2Vob3VzZW1hbmFnZV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+WPkemAgXJlYWR55raI5oGvXG4gICAgdGhhdC5yZXF1ZXN0UmVhZHkgPSBmdW5jdGlvbigpe1xuICAgICAgICBfc2VuZG1zZyhcInBsYXllcl9yZWFkeV9ub3RpZnlcIix7fSxudWxsKVxuICAgIH1cblxuICAgIHRoYXQucmVxdWVzdFN0YXJ0ID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcInBsYXllcl9zdGFydF9ub3RpZnlcIix7fSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICAvL+eOqeWutumAmuefpeacjeWKoeWZqOaKouWcsOS4u+a2iOaBr1xuICAgIHRoYXQucmVxdWVzdFJvYlN0YXRlID0gZnVuY3Rpb24oc3RhdGUpe1xuICAgICAgICBfc2VuZG1zZyhcInBsYXllcl9yb2Jfbm90aWZ5XCIsc3RhdGUsbnVsbClcbiAgICB9XG4gICAgLy/mnI3liqHlmajkuIvlj5HniYzpgJrnn6VcbiAgICB0aGF0Lm9uUHVzaENhcmRzID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcInB1c2hjYXJkX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5Zmo6YCa55+l5byA5aeL5oqi5Zyw5Li75raI5oGvXG4gICAgdGhhdC5vbkNhblJvYlN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNhbnJvYl9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqDrpgJrnn6XosIHmiqLlnLDkuLvmk43kvZzmtojmga9cbiAgICB0aGF0Lm9uUm9iU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2Fucm9iX3N0YXRlX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuehruWumuWcsOS4u+a2iOaBr1xuICAgIHRoYXQub25DaGFuZ2VNYXN0ZXIgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2hhbmdlX21hc3Rlcl9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqDrmmL7npLrlupXniYzmtojmga9cbiAgICB0aGF0Lm9uU2hvd0JvdHRvbUNhcmQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2hhbmdlX3Nob3djYXJkX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuWPr+S7peWHuueJjOa2iOaBr1xuICAgIHRoYXQub25DYW5DaHVDYXJkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNhbl9jaHVfY2FyZF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25Sb29tQ2hhbmdlU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwicm9vbV9zdGF0ZV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25PdGhlclBsYXllckNodUNhcmQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwib3RoZXJfY2h1Y2FyZF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhhdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXRDdHIgIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hallscene/prefabs_script/joinRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b543i+qr1Px4nfSdBwSJcb', 'joinRoom');
// scripts/hallscene/prefabs_script/joinRoom.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    joinids: {
      type: cc.Label,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.joinid = "";
    this.cur_input_count = -1;
  },
  start: function start() {},
  //  update (dt) {
  //  },
  onButtonClick: function onButtonClick(event, customData) {
    if (customData.length === 1) {
      this.joinid += customData;
      this.cur_input_count += 1;
      this.joinids[this.cur_input_count].string = customData; //console.log("joinid.length:"+this.joinid.length)

      if (this.joinid.length >= 6) {
        //判断加入房间逻辑
        var room_para = {
          roomid: this.joinid
        };

        _mygolbal["default"].socket.request_jion(room_para, function (err, result) {
          if (err) {
            console.log("err" + err);
          } else {
            console.log("join room sucess" + JSON.stringify(result));
            _mygolbal["default"].playerData.bottom = result.bottom;
            _mygolbal["default"].playerData.rate = result.rate;
            cc.director.loadScene("gameScene");
          }
        });

        return;
      }

      console.log("customData:" + customData);
    }

    switch (customData) {
      case "back":
        if (this.cur_input_count < 0) {
          return;
        }

        this.joinids[this.cur_input_count].string = "";
        this.cur_input_count -= 1;
        this.joinid = this.joinid.substring(0, this.joinid.length - 1);
        break;

      case "clear":
        for (var i = 0; i < 6; ++i) {
          this.joinids[i].string = "";
        }

        this.joinid = "";
        this.cur_input_count = -1;
        break;

      case "close":
        this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9wcmVmYWJzX3NjcmlwdC9qb2luUm9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImpvaW5pZHMiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJqb2luaWQiLCJjdXJfaW5wdXRfY291bnQiLCJzdGFydCIsIm9uQnV0dG9uQ2xpY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJsZW5ndGgiLCJzdHJpbmciLCJyb29tX3BhcmEiLCJyb29taWQiLCJteWdsb2JhbCIsInNvY2tldCIsInJlcXVlc3RfamlvbiIsImVyciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicGxheWVyRGF0YSIsImJvdHRvbSIsInJhdGUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN1YnN0cmluZyIsImkiLCJub2RlIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFDO01BQ0pDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURMO01BRUosV0FBUTtJQUZKO0VBREUsQ0FIUDtFQVdMO0VBRUFDLE1BYkssb0JBYUs7SUFDTixLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLGVBQUwsR0FBdUIsQ0FBQyxDQUF4QjtFQUNILENBaEJJO0VBa0JMQyxLQWxCSyxtQkFrQkksQ0FFUixDQXBCSTtFQXNCTDtFQUVBO0VBRUFDLGFBMUJLLHlCQTBCU0MsS0ExQlQsRUEwQmVDLFVBMUJmLEVBMEIwQjtJQUMzQixJQUFHQSxVQUFVLENBQUNDLE1BQVgsS0FBb0IsQ0FBdkIsRUFBeUI7TUFDckIsS0FBS04sTUFBTCxJQUFlSyxVQUFmO01BQ0EsS0FBS0osZUFBTCxJQUF3QixDQUF4QjtNQUNBLEtBQUtMLE9BQUwsQ0FBYSxLQUFLSyxlQUFsQixFQUFtQ00sTUFBbkMsR0FBNENGLFVBQTVDLENBSHFCLENBSXJCOztNQUNBLElBQUcsS0FBS0wsTUFBTCxDQUFZTSxNQUFaLElBQW9CLENBQXZCLEVBQXlCO1FBQ3JCO1FBQ0EsSUFBSUUsU0FBUyxHQUFHO1VBQ1pDLE1BQU0sRUFBQyxLQUFLVDtRQURBLENBQWhCOztRQUdBVSxvQkFBQSxDQUFTQyxNQUFULENBQWdCQyxZQUFoQixDQUE2QkosU0FBN0IsRUFBdUMsVUFBU0ssR0FBVCxFQUFhQyxNQUFiLEVBQW9CO1VBQ3ZELElBQUlELEdBQUosRUFBUTtZQUNKRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFPSCxHQUFuQjtVQUNILENBRkQsTUFFSztZQUNERSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBbUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLENBQS9CO1lBQ0FKLG9CQUFBLENBQVNTLFVBQVQsQ0FBb0JDLE1BQXBCLEdBQTZCTixNQUFNLENBQUNNLE1BQXBDO1lBQ0FWLG9CQUFBLENBQVNTLFVBQVQsQ0FBb0JFLElBQXBCLEdBQTJCUCxNQUFNLENBQUNPLElBQWxDO1lBQ0E3QixFQUFFLENBQUM4QixRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7VUFDSDtRQUNKLENBVEQ7O1FBVUE7TUFDSDs7TUFFRFIsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWVYLFVBQTNCO0lBRUg7O0lBQ0QsUUFBT0EsVUFBUDtNQUNJLEtBQUssTUFBTDtRQUNJLElBQUcsS0FBS0osZUFBTCxHQUFxQixDQUF4QixFQUEwQjtVQUN0QjtRQUNIOztRQUNELEtBQUtMLE9BQUwsQ0FBYSxLQUFLSyxlQUFsQixFQUFtQ00sTUFBbkMsR0FBNEMsRUFBNUM7UUFDQSxLQUFLTixlQUFMLElBQXVCLENBQXZCO1FBQ0EsS0FBS0QsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWXdCLFNBQVosQ0FBc0IsQ0FBdEIsRUFBd0IsS0FBS3hCLE1BQUwsQ0FBWU0sTUFBWixHQUFtQixDQUEzQyxDQUFkO1FBQ0E7O01BQ0osS0FBSyxPQUFMO1FBQ0ksS0FBSSxJQUFJbUIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLENBQWQsRUFBZ0IsRUFBRUEsQ0FBbEIsRUFBb0I7VUFDaEIsS0FBSzdCLE9BQUwsQ0FBYTZCLENBQWIsRUFBZ0JsQixNQUFoQixHQUF5QixFQUF6QjtRQUVIOztRQUNELEtBQUtQLE1BQUwsR0FBYyxFQUFkO1FBQ0EsS0FBS0MsZUFBTCxHQUF1QixDQUFDLENBQXhCO1FBQ0E7O01BQ0osS0FBSyxPQUFMO1FBQ0csS0FBS3lCLElBQUwsQ0FBVUMsT0FBVjtRQUNBOztNQUNIO1FBQ0k7SUFyQlI7RUF1Qkg7QUE1RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLi8uLi9teWdvbGJhbC5qc1wiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgXG4gICAgcHJvcGVydGllczoge1xuICAgICAgam9pbmlkczp7XG4gICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgZGVmYXVsdDpbXSxcbiAgICAgIH1cbiAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmpvaW5pZCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY3VyX2lucHV0X2NvdW50ID0gLTFcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIFxuICAgIC8vICB9LFxuXG4gICAgb25CdXR0b25DbGljayhldmVudCxjdXN0b21EYXRhKXtcbiAgICAgICAgaWYoY3VzdG9tRGF0YS5sZW5ndGg9PT0xKXtcbiAgICAgICAgICAgIHRoaXMuam9pbmlkICs9IGN1c3RvbURhdGFcbiAgICAgICAgICAgIHRoaXMuY3VyX2lucHV0X2NvdW50ICs9IDFcbiAgICAgICAgICAgIHRoaXMuam9pbmlkc1t0aGlzLmN1cl9pbnB1dF9jb3VudF0uc3RyaW5nID0gY3VzdG9tRGF0YVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImpvaW5pZC5sZW5ndGg6XCIrdGhpcy5qb2luaWQubGVuZ3RoKVxuICAgICAgICAgICAgaWYodGhpcy5qb2luaWQubGVuZ3RoPj02KXtcbiAgICAgICAgICAgICAgICAvL+WIpOaWreWKoOWFpeaIv+mXtOmAu+i+kVxuICAgICAgICAgICAgICAgIHZhciByb29tX3BhcmEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb21pZDp0aGlzLmpvaW5pZCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbXlnbG9iYWwuc29ja2V0LnJlcXVlc3Rfamlvbihyb29tX3BhcmEsZnVuY3Rpb24oZXJyLHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIisgZXJyKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiam9pbiByb29tIHN1Y2Vzc1wiK0pTT04uc3RyaW5naWZ5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmJvdHRvbSA9IHJlc3VsdC5ib3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEucmF0ZSA9IHJlc3VsdC5yYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tRGF0YTpcIisgY3VzdG9tRGF0YSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJiYWNrXCI6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJfaW5wdXRfY291bnQ8MCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5pZHNbdGhpcy5jdXJfaW5wdXRfY291bnRdLnN0cmluZyA9IFwiXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cl9pbnB1dF9jb3VudCAtPTFcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5pZCA9IHRoaXMuam9pbmlkLnN1YnN0cmluZygwLHRoaXMuam9pbmlkLmxlbmd0aC0xKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiY2xlYXJcIjpcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPDY7KytpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luaWRzW2ldLnN0cmluZyA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuam9pbmlkID0gXCJcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3VyX2lucHV0X2NvdW50ID0gLTFcbiAgICAgICAgICAgICAgICBicmVhayAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxuICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hallscene/hallScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eee7bdCqVB/LXv3XqKAza9', 'hallScene');
// scripts/hallscene/hallScene.js

"use strict";

var _mygolbal = _interopRequireDefault(require("./../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    nickname_label: cc.Label,
    headimage: cc.Sprite,
    gobal_count: cc.Label,
    creatroom_prefabs: cc.Prefab,
    joinroom_prefabs: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.nickname_label = _mygolbal["default"].playerData.nickName;
    this.gobal_count.string = ":" + _mygolbal["default"].playerData.gobal_count;
  },
  start: function start() {},
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "create_room":
        var creator_Room = cc.instantiate(this.creatroom_prefabs);
        creator_Room.parent = this.node;
        creator_Room.zIndex = 100;
        break;

      case "join_room":
        var join_Room = cc.instantiate(this.joinroom_prefabs);
        join_Room.parent = this.node;
        join_Room.zIndex = 100;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9oYWxsU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJuaWNrbmFtZV9sYWJlbCIsIkxhYmVsIiwiaGVhZGltYWdlIiwiU3ByaXRlIiwiZ29iYWxfY291bnQiLCJjcmVhdHJvb21fcHJlZmFicyIsIlByZWZhYiIsImpvaW5yb29tX3ByZWZhYnMiLCJvbkxvYWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJuaWNrTmFtZSIsInN0cmluZyIsInN0YXJ0Iiwib25CdXR0b25DbGljayIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImNyZWF0b3JfUm9vbSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsInpJbmRleCIsImpvaW5fUm9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsY0FBYyxFQUFDSixFQUFFLENBQUNLLEtBRFY7SUFFUkMsU0FBUyxFQUFDTixFQUFFLENBQUNPLE1BRkw7SUFHUkMsV0FBVyxFQUFDUixFQUFFLENBQUNLLEtBSFA7SUFJUkksaUJBQWlCLEVBQUNULEVBQUUsQ0FBQ1UsTUFKYjtJQUtSQyxnQkFBZ0IsRUFBQ1gsRUFBRSxDQUFDVTtFQUxaLENBSFA7RUFXTDtFQUVBRSxNQWJLLG9CQWFLO0lBQ1AsS0FBS1IsY0FBTCxHQUFzQlMsb0JBQUEsQ0FBU0MsVUFBVCxDQUFvQkMsUUFBMUM7SUFDQSxLQUFLUCxXQUFMLENBQWlCUSxNQUFqQixHQUEwQixNQUFNSCxvQkFBQSxDQUFTQyxVQUFULENBQW9CTixXQUFwRDtFQUNELENBaEJHO0VBa0JMUyxLQWxCSyxtQkFrQkksQ0FFUixDQXBCSTtFQXNCTDtFQUVBQyxhQXhCSyx5QkF3QlNDLEtBeEJULEVBd0JlQyxVQXhCZixFQXdCMEI7SUFDM0IsUUFBT0EsVUFBUDtNQUNJLEtBQUssYUFBTDtRQUNJLElBQUlDLFlBQVksR0FBR3JCLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZSxLQUFLYixpQkFBcEIsQ0FBbkI7UUFDQVksWUFBWSxDQUFDRSxNQUFiLEdBQXNCLEtBQUtDLElBQTNCO1FBQ0FILFlBQVksQ0FBQ0ksTUFBYixHQUFzQixHQUF0QjtRQUNBOztNQUNKLEtBQUssV0FBTDtRQUNJLElBQUlDLFNBQVMsR0FBRzFCLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZSxLQUFLWCxnQkFBcEIsQ0FBaEI7UUFDQWUsU0FBUyxDQUFDSCxNQUFWLEdBQW1CLEtBQUtDLElBQXhCO1FBQ0FFLFNBQVMsQ0FBQ0QsTUFBVixHQUFtQixHQUFuQjtRQUNBOztNQUNKO1FBQ0k7SUFaUjtFQWNIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi8uLi9teWdvbGJhbC5qc1wiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsIFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBuaWNrbmFtZV9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgaGVhZGltYWdlOmNjLlNwcml0ZSxcbiAgICAgICAgZ29iYWxfY291bnQ6Y2MuTGFiZWwsXG4gICAgICAgIGNyZWF0cm9vbV9wcmVmYWJzOmNjLlByZWZhYixcbiAgICAgICAgam9pbnJvb21fcHJlZmFiczpjYy5QcmVmYWIsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICB0aGlzLm5pY2tuYW1lX2xhYmVsID0gbXlnbG9iYWwucGxheWVyRGF0YS5uaWNrTmFtZVxuICAgICAgIHRoaXMuZ29iYWxfY291bnQuc3RyaW5nID0gXCI6XCIgKyBteWdsb2JhbC5wbGF5ZXJEYXRhLmdvYmFsX2NvdW50XG4gICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG5cbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LGN1c3RvbURhdGEpe1xuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiY3JlYXRlX3Jvb21cIjpcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRvcl9Sb29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5jcmVhdHJvb21fcHJlZmFicylcbiAgICAgICAgICAgICAgICBjcmVhdG9yX1Jvb20ucGFyZW50ID0gdGhpcy5ub2RlIFxuICAgICAgICAgICAgICAgIGNyZWF0b3JfUm9vbS56SW5kZXggPSAxMDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImpvaW5fcm9vbVwiOlxuICAgICAgICAgICAgICAgIHZhciBqb2luX1Jvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmpvaW5yb29tX3ByZWZhYnMpXG4gICAgICAgICAgICAgICAgam9pbl9Sb29tLnBhcmVudCA9IHRoaXMubm9kZSBcbiAgICAgICAgICAgICAgICBqb2luX1Jvb20uekluZGV4ID0gMTAwXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hallscene/prefabs_script/creatRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e85c8xPVuxKX5zdxLJ1e12h', 'creatRoom');
// scripts/hallscene/prefabs_script/creatRoom.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  _createroom: function _createroom(rate) {
    if (rate < 0 || rate > 4) {
      console.log("create room rate error" + rate);
      return;
    }

    var global = 0;

    if (rate == 1) {
      global = 10;
    } else if (rate == 2) {
      global = 20;
    } else if (rate == 3) {
      global = 30;
    } else if (rate == 4) {
      global = 40;
    }

    var room_para = {
      global: global,
      rate: rate
    }; //播放一个等待动画

    _mygolbal["default"].socket.request_creatroom(room_para, function (err, result) {
      if (err != 0) {
        console.log("create_room err:" + err);
      } else {
        console.log("create_room" + JSON.stringify(result)); //网络数据包

        _mygolbal["default"].playerData.bottom = result.bottom;
        _mygolbal["default"].playerData.rate = result.rate;
        cc.director.loadScene("gameScene");
      }
    });
  },
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "create_room_1":
        this._createroom(1);

        break;

      case "create_room_2":
        this._createroom(2);

        break;

      case "create_room_3":
        this._createroom(3);

        break;

      case "create_room_4":
        this._createroom(4);

        break;

      case "create_room_close":
        this.node.destroy();
        break;

      default:
        break;
    }

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9wcmVmYWJzX3NjcmlwdC9jcmVhdFJvb20uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIl9jcmVhdGVyb29tIiwicmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWwiLCJyb29tX3BhcmEiLCJteWdsb2JhbCIsInNvY2tldCIsInJlcXVlc3RfY3JlYXRyb29tIiwiZXJyIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXllckRhdGEiLCJib3R0b20iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uQnV0dG9uQ2xpY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJub2RlIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MO0VBRUE7RUFFQUMsS0FYSyxtQkFXSSxDQUVSLENBYkk7RUFlTEMsV0FmSyx1QkFlT0MsSUFmUCxFQWVZO0lBQ2IsSUFBR0EsSUFBSSxHQUFDLENBQUwsSUFBVUEsSUFBSSxHQUFDLENBQWxCLEVBQW9CO01BQ2hCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBMEJGLElBQXRDO01BQ0E7SUFDSDs7SUFFRCxJQUFJRyxNQUFNLEdBQUcsQ0FBYjs7SUFDQSxJQUFJSCxJQUFJLElBQUUsQ0FBVixFQUFZO01BQ1JHLE1BQU0sR0FBRyxFQUFUO0lBQ0gsQ0FGRCxNQUVNLElBQUdILElBQUksSUFBRSxDQUFULEVBQVc7TUFDYkcsTUFBTSxHQUFHLEVBQVQ7SUFDSCxDQUZLLE1BRUEsSUFBR0gsSUFBSSxJQUFFLENBQVQsRUFBVztNQUNiRyxNQUFNLEdBQUcsRUFBVDtJQUNILENBRkssTUFFQSxJQUFHSCxJQUFJLElBQUUsQ0FBVCxFQUFXO01BQ2JHLE1BQU0sR0FBRyxFQUFUO0lBQ0g7O0lBRUQsSUFBSUMsU0FBUyxHQUFHO01BQ1JELE1BQU0sRUFBQ0EsTUFEQztNQUVSSCxJQUFJLEVBQUNBO0lBRkcsQ0FBaEIsQ0FqQmEsQ0FxQkw7O0lBQ0FLLG9CQUFBLENBQVNDLE1BQVQsQ0FBZ0JDLGlCQUFoQixDQUFrQ0gsU0FBbEMsRUFBNEMsVUFBU0ksR0FBVCxFQUFhQyxNQUFiLEVBQW9CO01BQzVELElBQUlELEdBQUcsSUFBRSxDQUFULEVBQVc7UUFDUFAsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQW1CTSxHQUEvQjtNQUNILENBRkQsTUFFSztRQUNEUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBZ0JRLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixNQUFmLENBQTVCLEVBREMsQ0FFRDs7UUFDQUosb0JBQUEsQ0FBU08sVUFBVCxDQUFvQkMsTUFBcEIsR0FBNkJKLE1BQU0sQ0FBQ0ksTUFBcEM7UUFDQVIsb0JBQUEsQ0FBU08sVUFBVCxDQUFvQlosSUFBcEIsR0FBMkJTLE1BQU0sQ0FBQ1QsSUFBbEM7UUFDQU4sRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO01BQ0g7SUFFSixDQVhEO0VBWVgsQ0FqREk7RUFtREw7RUFDQUMsYUFwREsseUJBb0RTQyxLQXBEVCxFQW9EZUMsVUFwRGYsRUFvRDBCO0lBQzNCLFFBQU9BLFVBQVA7TUFDSSxLQUFLLGVBQUw7UUFDTSxLQUFLbkIsV0FBTCxDQUFpQixDQUFqQjs7UUFDQTs7TUFDTixLQUFLLGVBQUw7UUFDTSxLQUFLQSxXQUFMLENBQWlCLENBQWpCOztRQUNBOztNQUNOLEtBQUssZUFBTDtRQUNNLEtBQUtBLFdBQUwsQ0FBaUIsQ0FBakI7O1FBQ0E7O01BQ04sS0FBSyxlQUFMO1FBQ00sS0FBS0EsV0FBTCxDQUFpQixDQUFqQjs7UUFDQTs7TUFDTixLQUFLLG1CQUFMO1FBQ00sS0FBS29CLElBQUwsQ0FBVUMsT0FBVjtRQUNGOztNQUNKO1FBQ0k7SUFqQlI7O0lBbUJBLEtBQUtELElBQUwsQ0FBVUMsT0FBVjtFQUVIO0FBMUVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi4vLi4vbXlnb2xiYWwuanNcIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIF9jcmVhdGVyb29tKHJhdGUpe1xuICAgICAgICBpZihyYXRlPDAgfHwgcmF0ZT40KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHJvb20gcmF0ZSBlcnJvclwiKyByYXRlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2xvYmFsID0gMFxuICAgICAgICBpZiAocmF0ZT09MSl7XG4gICAgICAgICAgICBnbG9iYWwgPSAxMFxuICAgICAgICB9ZWxzZSBpZihyYXRlPT0yKXtcbiAgICAgICAgICAgIGdsb2JhbCA9IDIwXG4gICAgICAgIH1lbHNlIGlmKHJhdGU9PTMpe1xuICAgICAgICAgICAgZ2xvYmFsID0gMzBcbiAgICAgICAgfWVsc2UgaWYocmF0ZT09NCl7XG4gICAgICAgICAgICBnbG9iYWwgPSA0MFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvb21fcGFyYSA9IHtcbiAgICAgICAgICAgICAgICBnbG9iYWw6Z2xvYmFsLFxuICAgICAgICAgICAgICAgIHJhdGU6cmF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+aSreaUvuS4gOS4quetieW+heWKqOeUu1xuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X2NyZWF0cm9vbShyb29tX3BhcmEsZnVuY3Rpb24oZXJyLHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIhPTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVfcm9vbSBlcnI6XCIrZXJyKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlX3Jvb21cIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+e9kee7nOaVsOaNruWMhVxuICAgICAgICAgICAgICAgICAgICAgICAgbXlnbG9iYWwucGxheWVyRGF0YS5ib3R0b20gPSByZXN1bHQuYm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLnJhdGUgPSByZXN1bHQucmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVNjZW5lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbV8xXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVyb29tKDEpXG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZV9yb29tXzJcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZXJvb20oMilcbiAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiY3JlYXRlX3Jvb21fM1wiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlcm9vbSgzKVxuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbV80XCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVyb29tKDQpXG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZV9yb29tX2Nsb3NlXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpIFxuICAgICAgICAgICAgICAgIGJyZWFrICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCkgXG5cbiAgICB9XG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/gameingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc5fbLb+LFG+rCIt1gYkSVX', 'gameingUI');
// scripts/gameScene/gameingUI.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    gameingUI: cc.Node,
    card_prefab: cc.Prefab,
    robUI: cc.Node,
    bottom_card_pos_node: cc.Node,
    playingUI_node: cc.Node,
    tipsLabel: cc.Label //玩家出牌不合法的tips

  },
  onLoad: function onLoad() {
    //自己牌列表 
    this.cards_nods = [];
    this.card_width = 0; //当前可以抢地主的accountid

    this.rob_player_accountid = 0; //发牌动画是否结束

    this.fapai_end = false; //底牌数组

    this.bottom_card = []; //底牌的json对象数据

    this.bottom_card_data = [];
    this.choose_card_data = [];
    this.outcar_zone = [];
    this.push_card_tmp = []; //监听服务器:下发牌消息

    _mygolbal["default"].socket.onPushCards(function (data) {
      console.log("onPushCards" + JSON.stringify(data));
      this.card_data = data;
      this.cur_index_card = data.length - 1;
      this.pushCard(data);

      if (isopen_sound) {
        //循环播放发牌音效
        // this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"),true)
        console.log("start fapai_audioID" + this.fapai_audioID);
      } //左边移动定时器


      this.scheduleOnce(this._runactive_pushcard.bind(this), 0.3);
      this.node.parent.emit("pushcard_other_event");
    }.bind(this)); //监听服务器:通知抢地主消息,显示相应的UI


    _mygolbal["default"].socket.onCanRobState(function (data) {
      console.log("onCanRobState" + JSON.stringify(data)); //这里需要2个变量条件：自己是下一个抢地主，2发牌动画结束

      this.rob_player_accountid = data;

      if (data == _mygolbal["default"].playerData.accountID && this.fapai_end == true) {
        this.robUI.active = true;
      }
    }.bind(this)); //监听服务器可以出牌消息


    _mygolbal["default"].socket.onCanChuCard(function (data) {
      console.log("onCanRobState" + JSON.stringify(data)); //判断是不是自己能出牌

      if (data == _mygolbal["default"].playerData.accountID) {
        //先清理出牌区域
        this.clearOutZone(_mygolbal["default"].playerData.accountID); //先把自己出牌列表置空
        //this.choose_card_data=[]
        //显示可以出牌的UI

        this.playingUI_node.active = true;
      }
    }.bind(this)); //监听服务器：其他玩家出牌消息


    _mygolbal["default"].socket.onOtherPlayerChuCard(function (data) {
      //{"accountid":"2357540","cards":[{"cardid":4,"card_data":{"index":4,"value":1,"shape":1}}]}
      console.log("onOtherPlayerChuCard" + JSON.stringify(data));
      var accountid = data.accountid;
      var gameScene_script = this.node.parent.getComponent("gameScene"); //获取出牌区域节点

      var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid);

      if (outCard_node == null) {
        return;
      }

      var node_cards = [];

      for (var i = 0; i < data.cards.length; i++) {
        var card = cc.instantiate(this.card_prefab);
        card.getComponent("card").showCards(data.cards[i].card_data, _mygolbal["default"].playerData.accountID);
        node_cards.push(card);
      }

      this.appendOtherCardsToOutZone(outCard_node, node_cards, 0);
    }.bind(this)); //内部事件:显示底牌事件,data是三张底牌数据


    this.node.on("show_bottom_card_event", function (data) {
      console.log("----show_bottom_card_event", +data);
      this.bottom_card_data = data;

      for (var i = 0; i < data.length; i++) {
        var card = this.bottom_card[i];
        var show_data = data[i];
        var call_data = {
          "obj": card,
          "data": show_data
        };
        console.log("bottom show_data:" + JSON.stringify(show_data));
        var run = cc.callFunc(function (target, activedata) {
          var show_card = activedata.obj;
          var show_data = activedata.data; //console.log("cc.callFunc:"+JSON.stringify(show_data))

          show_card.getComponent("card").showCards(show_data);
        }, this, call_data);
        card.runAction(cc.sequence(cc.rotateBy(0, 0, 180), cc.rotateBy(0.2, 0, -90), run, cc.rotateBy(0.2, 0, -90), cc.scaleBy(1, 1.2)));

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/start.mp3"));
        }
      } //this.node.parent.emit("change_room_state_event",RoomState.ROOM_PLAYING)
      //如果自己地主，给加上三张底牌


      if (_mygolbal["default"].playerData.accountID == _mygolbal["default"].playerData.master_accountid) {
        this.scheduleOnce(this.pushThreeCard.bind(this), 0.2);
      }
    }.bind(this)); //注册监听一个选择牌消息 

    this.node.on("choose_card_event", function (event) {
      console.log("choose_card_event:" + JSON.stringify(event));
      var detail = event;
      this.choose_card_data.push(detail);
    }.bind(this));
    this.node.on("unchoose_card_event", function (event) {
      console.log("unchoose_card_event:" + event);
      var detail = event;

      for (var i = 0; i < this.choose_card_data.length; i++) {
        if (this.choose_card_data[i].cardid == detail) {
          this.choose_card_data.splice(i, 1);
        }
      }
    }.bind(this));
  },
  start: function start() {},
  //处理发牌的效果
  _runactive_pushcard: function _runactive_pushcard() {
    //console.log("_runactive_pushcard:"+this.cur_index_card)
    if (this.cur_index_card < 0) {
      console.log("pushcard end"); //发牌动画完成，显示抢地主按钮
      //this.robUI.active = true

      this.fapai_end = true;

      if (this.rob_player_accountid == _mygolbal["default"].playerData.accountID) {
        this.robUI.active = true;
      }

      if (isopen_sound) {
        //console.log("start fapai_audioID"+this.fapai_audioID) 
        cc.audioEngine.stop(this.fapai_audioID);
      } //通知gamescene节点，倒计时


      var sendevent = this.rob_player_accountid;
      this.node.parent.emit("canrob_event", sendevent);
      return;
    } //原有逻辑  
    // var move_node = this.cards_nods[this.cur_index_card]
    // move_node.active = true
    // var newx = move_node.x + (this.card_width * 0.4*this.cur_index_card) - (this.card_width * 0.4)
    // var action = cc.moveTo(0.1, cc.v2(newx, -250));
    // move_node.runAction(action)
    // this.cur_index_card--
    // this.scheduleOnce(this._runactive_pushcard.bind(this),0.3)


    var move_node = this.cards_nods[this.cards_nods.length - this.cur_index_card - 1];
    move_node.active = true;
    this.push_card_tmp.push(move_node);
    this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"));

    for (var i = 0; i < this.push_card_tmp.length - 1; i++) {
      var move_node = this.push_card_tmp[i];
      var newx = move_node.x - this.card_width * 0.4;
      var action = cc.moveTo(0.1, cc.v2(newx, -250));
      move_node.runAction(action);
    }

    this.cur_index_card--;
    this.scheduleOnce(this._runactive_pushcard.bind(this), 0.3);
  },
  //对牌排序
  sortCard: function sortCard() {
    this.cards_nods.sort(function (x, y) {
      var a = x.getComponent("card").card_data;
      var b = y.getComponent("card").card_data;

      if (a.hasOwnProperty('value') && b.hasOwnProperty('value')) {
        return b.value - a.value;
      }

      if (a.hasOwnProperty('king') && !b.hasOwnProperty('king')) {
        return -1;
      }

      if (!a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return 1;
      }

      if (a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return b.king - a.king;
      }
    }); //var x = this.cards_nods[0].x;
    //这里使用固定坐标，因为取this.cards_nods[0].xk可能排序为完成，导致x错误
    //所以做1000毫秒的延时

    var timeout = 1000;
    setTimeout(function () {
      //var x = -417.6 
      var x = this.cards_nods[0].x;
      console.log("sort x:" + x);

      for (var i = 0; i < this.cards_nods.length; i++) {
        var card = this.cards_nods[i];
        card.zIndex = i; //设置牌的叠加次序,zindex越大显示在上面

        card.x = x + card.width * 0.4 * i;
      }
    }.bind(this), timeout);
  },
  pushCard: function pushCard(data) {
    if (data) {
      data.sort(function (a, b) {
        if (a.hasOwnProperty('value') && b.hasOwnProperty('value')) {
          return b.value - a.value;
        }

        if (a.hasOwnProperty('king') && !b.hasOwnProperty('king')) {
          return -1;
        }

        if (!a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
          return 1;
        }

        if (a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
          return b.king - a.king;
        }
      });
    } //创建card预制体


    this.cards_nods = [];

    for (var i = 0; i < 17; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.8;
      card.parent = this.node.parent; //card.x = card.width * 0.4 * (17 - 1) * (-0.5) + card.width * 0.4 * 0;

      card.x = card.width * 0.4 * -0.5 * -16 + card.width * 0.4 * 0; //这里实现为，每发一张牌，放在已经发的牌最后，然后整体移动

      card.y = -250;
      card.active = false;
      card.getComponent("card").showCards(data[i], _mygolbal["default"].playerData.accountID); //存储牌的信息,用于后面发牌效果

      this.cards_nods.push(card);
      this.card_width = card.width;
    } //创建3张底牌


    this.bottom_card = [];

    for (var i = 0; i < 3; i++) {
      var di_card = cc.instantiate(this.card_prefab);
      di_card.scale = 0.4;
      di_card.position = this.bottom_card_pos_node.position; //三张牌，中间坐标就是bottom_card_pos_node节点坐标，
      //0,和2两张牌左右移动windth*0.4

      if (i == 0) {
        di_card.x = di_card.x - di_card.width * 0.4;
      } else if (i == 2) {
        di_card.x = di_card.x + di_card.width * 0.4;
      } //di_card.x = di_card.width-i*di_card.width-20
      //di_card.y=60


      di_card.parent = this.node.parent; //存储在容器里

      this.bottom_card.push(di_card);
    }
  },
  //给玩家发送三张底牌后，过1s,把牌设置到y=-250位置效果
  schedulePushThreeCard: function schedulePushThreeCard() {
    for (var i = 0; i < this.cards_nods.length; i++) {
      var card = this.cards_nods[i];

      if (card.y == -230) {
        card.y = -250;
      }
    }
  },
  //给地主发三张排，并显示在原有牌的后面
  pushThreeCard: function pushThreeCard() {
    //每张牌的其实位置 
    var last_card_x = this.cards_nods[this.cards_nods.length - 1].x;

    for (var i = 0; i < this.bottom_card_data.length; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.8;
      card.parent = this.node.parent;
      card.x = last_card_x + (i + 1) * this.card_width * 0.4;
      card.y = -230; //先把底盘放在-230，在设置个定时器下移到-250的位置
      //console.log("pushThreeCard x:"+card.x)

      card.getComponent("card").showCards(this.bottom_card_data[i], _mygolbal["default"].playerData.accountID);
      card.active = true;
      this.cards_nods.push(card);
    }

    this.sortCard(); //设置一个定时器，在2s后，修改y坐标为-250

    this.scheduleOnce(this.schedulePushThreeCard.bind(this), 2);
  },
  destoryCard: function destoryCard(accountid, choose_card) {
    if (choose_card.length == 0) {
      return;
    }
    /*出牌逻辑
      1. 将选中的牌 从父节点中移除
      2. 从this.cards_nods 数组中，删除 选中的牌 
      3. 将 “选中的牌” 添加到出牌区域
          3.1 清空出牌区域
          3.2 添加子节点
          3.3 设置scale
          3.4 设置position
      4.  重新设置手中的牌的位置  this.updateCards();
    */
    //1/2步骤删除自己手上的card节点 


    var destroy_card = [];

    for (var i = 0; i < choose_card.length; i++) {
      for (var j = 0; j < this.cards_nods.length; j++) {
        var card_id = this.cards_nods[j].getComponent("card").card_id;

        if (card_id == choose_card[i].cardid) {
          console.log("destroy card id:" + card_id); //this.cards_nods[j].destroy()

          this.cards_nods[j].removeFromParent(true);
          destroy_card.push(this.cards_nods[j]);
          this.cards_nods.splice(j, 1);
        }
      }
    }

    this.appendCardsToOutZone(accountid, destroy_card);
    this.updateCards();
  },
  //清除显示出牌节点全部子节点(就是把出牌的清空)
  clearOutZone: function clearOutZone(accountid) {
    var gameScene_script = this.node.parent.getComponent("gameScene");
    var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid);
    var children = outCard_node.children;

    for (var i = 0; i < children.length; i++) {
      var card = children[i];
      card.destroy();
    }

    outCard_node.removeAllChildren(true);
  },
  //对出的牌做排序
  pushCardSort: function pushCardSort(cards) {
    if (cards.length == 1) {
      return;
    }

    cards.sort(function (x, y) {
      var a = x.getComponent("card").card_data;
      var b = y.getComponent("card").card_data;

      if (a.hasOwnProperty('value') && b.hasOwnProperty('value')) {
        return b.value - a.value;
      }

      if (a.hasOwnProperty('king') && !b.hasOwnProperty('king')) {
        return -1;
      }

      if (!a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return 1;
      }

      if (a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return b.king - a.king;
      }
    });
  },
  appendOtherCardsToOutZone: function appendOtherCardsToOutZone(outCard_node, cards, yoffset) {
    outCard_node.removeAllChildren(true); //console.log("appendOtherCardsToOutZone length"+cards.length)
    //添加新的子节点

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      outCard_node.addChild(card, 100 + i); //第二个参数是zorder,保证牌不能被遮住
    } //对出牌进行排序
    //设置出牌节点的坐标


    var zPoint = cards.length / 2; //console.log("appendOtherCardsToOutZone zeroPoint:"+zPoint)

    for (var i = 0; i < cards.length; i++) {
      var cardNode = outCard_node.getChildren()[i];
      var x = (i - zPoint) * 30;
      var y = cardNode.y + yoffset; //因为每个节点需要的Y不一样，做参数传入
      //console.log("-----cardNode: x:"+x+" y:"+y)

      cardNode.setScale(0.5, 0.5);
      cardNode.setPosition(x, y);
    }
  },
  //将 “选中的牌” 添加到出牌区域
  //destroy_card是玩家本次出的牌
  appendCardsToOutZone: function appendCardsToOutZone(accountid, destroy_card) {
    if (destroy_card.length == 0) {
      return;
    } //先给本次出的牌做一个排序


    this.pushCardSort(destroy_card); //console.log("appendCardsToOutZone")

    var gameScene_script = this.node.parent.getComponent("gameScene"); //获取出牌区域节点

    var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid);
    this.appendOtherCardsToOutZone(outCard_node, destroy_card, 360); //sconsole.log("OutZone:"+outCard_node.name)
  },
  //重新排序手上的牌,并移动
  updateCards: function updateCards() {
    var zeroPoint = this.cards_nods.length / 2; //var last_card_x = this.cards_nods[this.cards_nods.length-1].x

    for (var i = 0; i < this.cards_nods.length; i++) {
      var cardNode = this.cards_nods[i];
      var x = (i - zeroPoint) * (this.card_width * 0.4);
      cardNode.setPosition(x, -250);
    }
  },
  playPushCardSound: function playPushCardSound(card_name) {
    console.log("playPushCardSound:" + card_name);

    if (card_name == "") {
      return;
    }

    switch (card_name) {
      case CardsValue.one.name:
        break;

      case CardsValue["double"].name:
        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/duizi.mp3"));
        }

        break;
    }
  },
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "btn_qiandz":
        console.log("btn_qiandz");

        _mygolbal["default"].socket.requestRobState(qian_state.qian);

        this.robUI.active = false;

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/woman_jiao_di_zhu.ogg"));
        }

        break;

      case "btn_buqiandz":
        console.log("btn_buqiandz");

        _mygolbal["default"].socket.requestRobState(qian_state.buqiang);

        this.robUI.active = false;

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/woman_bu_jiao.ogg"));
        }

        break;

      case "nopushcard":
        //不出牌
        _mygolbal["default"].socket.request_buchu_card([], null);

        this.playingUI_node.active = false;
        break;

      case "pushcard":
        //出牌
        //先获取本次出牌数据
        if (this.choose_card_data.length == 0) {
          this.tipsLabel.string = "请选择牌!";
          setTimeout(function () {
            this.tipsLabel.string = "";
          }.bind(this), 2000);
        }

        _mygolbal["default"].socket.request_chu_card(this.choose_card_data, function (err, data) {
          if (err) {
            console.log("request_chu_card:" + err);
            console.log("request_chu_card" + JSON.stringify(data));

            if (this.tipsLabel.string == "") {
              this.tipsLabel.string = data.msg;
              setTimeout(function () {
                this.tipsLabel.string = "";
              }.bind(this), 2000);
            } //出牌失败，把选择的牌归位


            for (var i = 0; i < this.cards_nods.length; i++) {
              var card = this.cards_nods[i];
              card.emit("reset_card_flag");
            }

            this.choose_card_data = [];
          } else {
            //出牌成功
            console.log("resp_chu_card data:" + JSON.stringify(data));
            this.playingUI_node.active = false; //播放出牌的声音
            //resp_chu_card data:{"account":"2519901","msg":"sucess","cardvalue":{"name":"Double","value":1}}
            //{"type":"other_chucard_notify","result":0,"data":{"accountid":"2519901","cards":[{"cardid":24,"card_data":{"index":24,"value":6,"shape":1}},{"cardid":26,"card_data":{"index":26,"value":6,"shape":3}}]},"callBackIndex":0}

            this.playPushCardSound(data.cardvalue.name);
            this.destoryCard(data.account, this.choose_card_data);
            this.choose_card_data = [];
          }
        }.bind(this)); //this.playingUI_node.active = false


        break;

      case "tipcard":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1laW5nVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1laW5nVUkiLCJOb2RlIiwiY2FyZF9wcmVmYWIiLCJQcmVmYWIiLCJyb2JVSSIsImJvdHRvbV9jYXJkX3Bvc19ub2RlIiwicGxheWluZ1VJX25vZGUiLCJ0aXBzTGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImNhcmRzX25vZHMiLCJjYXJkX3dpZHRoIiwicm9iX3BsYXllcl9hY2NvdW50aWQiLCJmYXBhaV9lbmQiLCJib3R0b21fY2FyZCIsImJvdHRvbV9jYXJkX2RhdGEiLCJjaG9vc2VfY2FyZF9kYXRhIiwib3V0Y2FyX3pvbmUiLCJwdXNoX2NhcmRfdG1wIiwibXlnbG9iYWwiLCJzb2NrZXQiLCJvblB1c2hDYXJkcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcmRfZGF0YSIsImN1cl9pbmRleF9jYXJkIiwibGVuZ3RoIiwicHVzaENhcmQiLCJpc29wZW5fc291bmQiLCJmYXBhaV9hdWRpb0lEIiwic2NoZWR1bGVPbmNlIiwiX3J1bmFjdGl2ZV9wdXNoY2FyZCIsImJpbmQiLCJub2RlIiwicGFyZW50IiwiZW1pdCIsIm9uQ2FuUm9iU3RhdGUiLCJwbGF5ZXJEYXRhIiwiYWNjb3VudElEIiwiYWN0aXZlIiwib25DYW5DaHVDYXJkIiwiY2xlYXJPdXRab25lIiwib25PdGhlclBsYXllckNodUNhcmQiLCJhY2NvdW50aWQiLCJnYW1lU2NlbmVfc2NyaXB0IiwiZ2V0Q29tcG9uZW50Iiwib3V0Q2FyZF9ub2RlIiwiZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQiLCJub2RlX2NhcmRzIiwiaSIsImNhcmRzIiwiY2FyZCIsImluc3RhbnRpYXRlIiwic2hvd0NhcmRzIiwicHVzaCIsImFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUiLCJvbiIsInNob3dfZGF0YSIsImNhbGxfZGF0YSIsInJ1biIsImNhbGxGdW5jIiwidGFyZ2V0IiwiYWN0aXZlZGF0YSIsInNob3dfY2FyZCIsIm9iaiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwicm90YXRlQnkiLCJzY2FsZUJ5IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwidXJsIiwicmF3IiwibWFzdGVyX2FjY291bnRpZCIsInB1c2hUaHJlZUNhcmQiLCJldmVudCIsImRldGFpbCIsImNhcmRpZCIsInNwbGljZSIsInN0YXJ0Iiwic3RvcCIsInNlbmRldmVudCIsIm1vdmVfbm9kZSIsIm5ld3giLCJ4IiwiYWN0aW9uIiwibW92ZVRvIiwidjIiLCJzb3J0Q2FyZCIsInNvcnQiLCJ5IiwiYSIsImIiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwia2luZyIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiekluZGV4Iiwid2lkdGgiLCJzY2FsZSIsImRpX2NhcmQiLCJwb3NpdGlvbiIsInNjaGVkdWxlUHVzaFRocmVlQ2FyZCIsImxhc3RfY2FyZF94IiwiZGVzdG9yeUNhcmQiLCJjaG9vc2VfY2FyZCIsImRlc3Ryb3lfY2FyZCIsImoiLCJjYXJkX2lkIiwicmVtb3ZlRnJvbVBhcmVudCIsImFwcGVuZENhcmRzVG9PdXRab25lIiwidXBkYXRlQ2FyZHMiLCJjaGlsZHJlbiIsImRlc3Ryb3kiLCJyZW1vdmVBbGxDaGlsZHJlbiIsInB1c2hDYXJkU29ydCIsInlvZmZzZXQiLCJhZGRDaGlsZCIsInpQb2ludCIsImNhcmROb2RlIiwiZ2V0Q2hpbGRyZW4iLCJzZXRTY2FsZSIsInNldFBvc2l0aW9uIiwiemVyb1BvaW50IiwicGxheVB1c2hDYXJkU291bmQiLCJjYXJkX25hbWUiLCJDYXJkc1ZhbHVlIiwib25lIiwibmFtZSIsIm9uQnV0dG9uQ2xpY2siLCJjdXN0b21EYXRhIiwicmVxdWVzdFJvYlN0YXRlIiwicWlhbl9zdGF0ZSIsInFpYW4iLCJidXFpYW5nIiwicmVxdWVzdF9idWNodV9jYXJkIiwic3RyaW5nIiwicmVxdWVzdF9jaHVfY2Fy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QTNDLFVBQVUsQ0FBQyxZQUFVO2dCQUNqQixLQUFLN0YsU0FBTCxDQUFlcUksTUFBZixHQUFzQixFQUF0QjtjQUNILENBRlUsQ0FFVHpHLElBRlMsQ0FFSixJQUZJLENBQUQsRUFFSSxJQUZKLENBQVY7WUFHSCxDQVJFLENBVUg7OztZQUNBLEtBQUksSUFBSWlCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLMUMsVUFBTCxDQUFnQm1CLE1BQTlCLEVBQXFDdUIsQ0FBQyxFQUF0QyxFQUF5QztjQUNyQyxJQUFJRSxJQUFJLEdBQUcsS0FBSzVDLFVBQUwsQ0FBZ0IwQyxDQUFoQixDQUFYO2NBQ0FFLElBQUksQ0FBQ2hCLElBQUwsQ0FBVSxpQkFBVjtZQUNIOztZQUNELEtBQUt0QixnQkFBTCxHQUF3QixFQUF4QjtVQUNGLENBaEJGLE1BZ0JNO1lBQ0Q7WUFDQU8sT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQXNCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUFsQztZQUNBLEtBQUtoQixjQUFMLENBQW9Cb0MsTUFBcEIsR0FBNkIsS0FBN0IsQ0FIQyxDQUlEO1lBQ0E7WUFDQTs7WUFDQSxLQUFLc0YsaUJBQUwsQ0FBdUIxRyxJQUFJLENBQUMwSCxTQUFMLENBQWVaLElBQXRDO1lBQ0EsS0FBS3hCLFdBQUwsQ0FBaUJ0RixJQUFJLENBQUMySCxPQUF0QixFQUE4QixLQUFLakksZ0JBQW5DO1lBQ0EsS0FBS0EsZ0JBQUwsR0FBd0IsRUFBeEI7VUFFSDtRQUVKLENBL0JzRCxDQStCckRtQixJQS9CcUQsQ0ErQmhELElBL0JnRCxDQUF2RCxFQVJKLENBd0NJOzs7UUFDQTs7TUFDSixLQUFLLFNBQUw7UUFDSTs7TUFDTDtRQUNJO0lBbEVSO0VBb0VIO0FBeGlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZ2FtZWluZ1VJOiBjYy5Ob2RlLFxuICAgICAgICBjYXJkX3ByZWZhYjpjYy5QcmVmYWIsXG4gICAgICAgIHJvYlVJOmNjLk5vZGUsXG4gICAgICAgIGJvdHRvbV9jYXJkX3Bvc19ub2RlOmNjLk5vZGUsXG4gICAgICAgIHBsYXlpbmdVSV9ub2RlOmNjLk5vZGUsXG4gICAgICAgIHRpcHNMYWJlbDpjYy5MYWJlbCwgLy/njqnlrrblh7rniYzkuI3lkIjms5XnmoR0aXBzXG4gICAgXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8v6Ieq5bex54mM5YiX6KGoIFxuICAgICAgICB0aGlzLmNhcmRzX25vZHMgPSBbXVxuICAgICAgICB0aGlzLmNhcmRfd2lkdGggPSAwXG4gICAgICAgIC8v5b2T5YmN5Y+v5Lul5oqi5Zyw5Li755qEYWNjb3VudGlkXG4gICAgICAgIHRoaXMucm9iX3BsYXllcl9hY2NvdW50aWQgPSAwXG4gICAgICAgIC8v5Y+R54mM5Yqo55S75piv5ZCm57uT5p2fXG4gICAgICAgIHRoaXMuZmFwYWlfZW5kID0gZmFsc2VcbiAgICAgICAgLy/lupXniYzmlbDnu4RcbiAgICAgICAgdGhpcy5ib3R0b21fY2FyZCA9IFtdXG4gICAgICAgIC8v5bqV54mM55qEanNvbuWvueixoeaVsOaNrlxuICAgICAgICB0aGlzLmJvdHRvbV9jYXJkX2RhdGE9W11cbiAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhPVtdXG4gICAgICAgIHRoaXMub3V0Y2FyX3pvbmUgPSBbXVxuXG4gICAgICAgIHRoaXMucHVzaF9jYXJkX3RtcCA9IFtdXG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuS4i+WPkeeJjOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25QdXNoQ2FyZHMoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUHVzaENhcmRzXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICB0aGlzLmNhcmRfZGF0YSA9IGRhdGFcbiAgICAgICAgICAgIHRoaXMuY3VyX2luZGV4X2NhcmQgPSBkYXRhLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIHRoaXMucHVzaENhcmQoZGF0YSlcbiAgICAgICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgLy/lvqrnjq/mkq3mlL7lj5HniYzpn7PmlYhcbiAgICAgICAgICAgICAgIC8vIHRoaXMuZmFwYWlfYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdyhcInJlc291cmNlcy9zb3VuZC9mYXBhaTEubXAzXCIpLHRydWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBmYXBhaV9hdWRpb0lEXCIrdGhpcy5mYXBhaV9hdWRpb0lEKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAvL+W3pui+ueenu+WKqOWumuaXtuWZqFxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fcnVuYWN0aXZlX3B1c2hjYXJkLmJpbmQodGhpcyksMC4zKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5lbWl0KFwicHVzaGNhcmRfb3RoZXJfZXZlbnRcIilcbiAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqDrpgJrnn6XmiqLlnLDkuLvmtojmga8s5pi+56S655u45bqU55qEVUlcbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uQ2FuUm9iU3RhdGUoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2FuUm9iU3RhdGVcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIC8v6L+Z6YeM6ZyA6KaBMuS4quWPmOmHj+adoeS7tu+8muiHquW3seaYr+S4i+S4gOS4quaKouWcsOS4u++8jDLlj5HniYzliqjnlLvnu5PmnZ9cbiAgICAgICAgICAgIHRoaXMucm9iX3BsYXllcl9hY2NvdW50aWQgPSBkYXRhXG4gICAgICAgICAgICBpZihkYXRhPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCAmJiB0aGlzLmZhcGFpX2VuZD09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2JVSS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgXG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5Zmo5Y+v5Lul5Ye654mM5raI5oGvXG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vbkNhbkNodUNhcmQoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2FuUm9iU3RhdGVcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIC8v5Yik5pat5piv5LiN5piv6Ieq5bex6IO95Ye654mMXG4gICAgICAgICAgICBpZihkYXRhPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG4gICAgICAgICAgICAgICAgLy/lhYjmuIXnkIblh7rniYzljLrln59cbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT3V0Wm9uZShteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRClcbiAgICAgICAgICAgICAgICAvL+WFiOaKiuiHquW3seWHuueJjOWIl+ihqOe9ruepulxuICAgICAgICAgICAgICAgIC8vdGhpcy5jaG9vc2VfY2FyZF9kYXRhPVtdXG4gICAgICAgICAgICAgICAgLy/mmL7npLrlj6/ku6Xlh7rniYznmoRVSVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqO+8muWFtuS7lueOqeWutuWHuueJjOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25PdGhlclBsYXllckNodUNhcmQoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL3tcImFjY291bnRpZFwiOlwiMjM1NzU0MFwiLFwiY2FyZHNcIjpbe1wiY2FyZGlkXCI6NCxcImNhcmRfZGF0YVwiOntcImluZGV4XCI6NCxcInZhbHVlXCI6MSxcInNoYXBlXCI6MX19XX1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25PdGhlclBsYXllckNodUNhcmRcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuICAgICAgICAgICAgdmFyIGFjY291bnRpZCA9IGRhdGEuYWNjb3VudGlkXG4gICAgICAgICAgICB2YXIgZ2FtZVNjZW5lX3NjcmlwdCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiZ2FtZVNjZW5lXCIpXG4gICAgICAgICAgICAvL+iOt+WPluWHuueJjOWMuuWfn+iKgueCuVxuICAgICAgICAgICAgdmFyIG91dENhcmRfbm9kZSA9IGdhbWVTY2VuZV9zY3JpcHQuZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQoYWNjb3VudGlkKVxuICAgICAgICAgICAgaWYob3V0Q2FyZF9ub2RlPT1udWxsKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5vZGVfY2FyZHMgPSBbXVxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxkYXRhLmNhcmRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRcIikuc2hvd0NhcmRzKGRhdGEuY2FyZHNbaV0uY2FyZF9kYXRhLG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgICAgICAgICAgICAgIG5vZGVfY2FyZHMucHVzaChjYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRPdGhlckNhcmRzVG9PdXRab25lKG91dENhcmRfbm9kZSxub2RlX2NhcmRzLDApXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgLy/lhoXpg6jkuovku7Y65pi+56S65bqV54mM5LqL5Lu2LGRhdGHmmK/kuInlvKDlupXniYzmlbDmja5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvd19ib3R0b21fY2FyZF9ldmVudFwiLGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tc2hvd19ib3R0b21fY2FyZF9ldmVudFwiLCtkYXRhKVxuICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ib3R0b21fY2FyZF9kYXRhID0gZGF0YVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmJvdHRvbV9jYXJkW2ldXG4gICAgICAgICAgICAgICAgdmFyIHNob3dfZGF0YSA9IGRhdGFbaV1cbiAgICAgICAgICAgICAgICB2YXIgY2FsbF9kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm9ialwiOmNhcmQsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOnNob3dfZGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib3R0b20gc2hvd19kYXRhOlwiK0pTT04uc3RyaW5naWZ5KHNob3dfZGF0YSkpXG4gICAgICAgICAgICAgICAgdmFyIHJ1biA9ICBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQsYWN0aXZlZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG93X2NhcmQgPSBhY3RpdmVkYXRhLm9ialxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd19kYXRhID0gYWN0aXZlZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYy5jYWxsRnVuYzpcIitKU09OLnN0cmluZ2lmeShzaG93X2RhdGEpKVxuICAgICAgICAgICAgICAgICAgICBzaG93X2NhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5zaG93Q2FyZHMoc2hvd19kYXRhKVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sdGhpcyxjYWxsX2RhdGEpXG5cbiAgICAgICAgICAgICAgICBjYXJkLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVCeSgwLDAsMTgwKSxjYy5yb3RhdGVCeSgwLjIsMCwtOTApLCBydW4sXG4gICAgICAgICAgICAgICAgY2Mucm90YXRlQnkoMC4yLDAsLTkwKSxjYy5zY2FsZUJ5KDEsIDEuMikpKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdyhcInJlc291cmNlcy9zb3VuZC9zdGFydC5tcDNcIikpIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudC5lbWl0KFwiY2hhbmdlX3Jvb21fc3RhdGVfZXZlbnRcIixSb29tU3RhdGUuUk9PTV9QTEFZSU5HKVxuICAgICAgICAgICAgLy/lpoLmnpzoh6rlt7HlnLDkuLvvvIznu5nliqDkuIrkuInlvKDlupXniYxcbiAgICAgICAgICAgIGlmKG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEPT1teWdsb2JhbC5wbGF5ZXJEYXRhLm1hc3Rlcl9hY2NvdW50aWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMucHVzaFRocmVlQ2FyZC5iaW5kKHRoaXMpLDAuMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v5rOo5YaM55uR5ZCs5LiA5Liq6YCJ5oup54mM5raI5oGvIFxuICAgICAgICB0aGlzLm5vZGUub24oXCJjaG9vc2VfY2FyZF9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hvb3NlX2NhcmRfZXZlbnQ6XCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICAgICAgICB0aGlzLmNob29zZV9jYXJkX2RhdGEucHVzaChkZXRhaWwpXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICB0aGlzLm5vZGUub24oXCJ1bmNob29zZV9jYXJkX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmNob29zZV9jYXJkX2V2ZW50OlwiKyBldmVudClcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudFxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmNob29zZV9jYXJkX2RhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaG9vc2VfY2FyZF9kYXRhW2ldLmNhcmRpZD09ZGV0YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhLnNwbGljZShpLDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICBcbiAgICB9LFxuXG4gICAgLy/lpITnkIblj5HniYznmoTmlYjmnpxcbiAgICBfcnVuYWN0aXZlX3B1c2hjYXJkKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJfcnVuYWN0aXZlX3B1c2hjYXJkOlwiK3RoaXMuY3VyX2luZGV4X2NhcmQpXG4gICAgICAgIGlmKHRoaXMuY3VyX2luZGV4X2NhcmQgPCAwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHVzaGNhcmQgZW5kXCIpXG4gICAgICAgICAgICAvL+WPkeeJjOWKqOeUu+WujOaIkO+8jOaYvuekuuaKouWcsOS4u+aMiemSrlxuICAgICAgICAgICAgLy90aGlzLnJvYlVJLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZmFwYWlfZW5kID0gdHJ1ZVxuICAgICAgICAgICAgaWYodGhpcy5yb2JfcGxheWVyX2FjY291bnRpZD09bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9iVUkuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGFydCBmYXBhaV9hdWRpb0lEXCIrdGhpcy5mYXBhaV9hdWRpb0lEKSBcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuZmFwYWlfYXVkaW9JRClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgLy/pgJrnn6VnYW1lc2NlbmXoioLngrnvvIzlgJLorqHml7ZcbiAgICAgICAgICAgIHZhciBzZW5kZXZlbnQgPSB0aGlzLnJvYl9wbGF5ZXJfYWNjb3VudGlkXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmVtaXQoXCJjYW5yb2JfZXZlbnRcIixzZW5kZXZlbnQpXG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy/ljp/mnInpgLvovpEgIFxuICAgICAgICAvLyB2YXIgbW92ZV9ub2RlID0gdGhpcy5jYXJkc19ub2RzW3RoaXMuY3VyX2luZGV4X2NhcmRdXG4gICAgICAgIC8vIG1vdmVfbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIC8vIHZhciBuZXd4ID0gbW92ZV9ub2RlLnggKyAodGhpcy5jYXJkX3dpZHRoICogMC40KnRoaXMuY3VyX2luZGV4X2NhcmQpIC0gKHRoaXMuY2FyZF93aWR0aCAqIDAuNClcbiAgICAgICAgLy8gdmFyIGFjdGlvbiA9IGNjLm1vdmVUbygwLjEsIGNjLnYyKG5ld3gsIC0yNTApKTtcbiAgICAgICAgLy8gbW92ZV9ub2RlLnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgICAgIC8vIHRoaXMuY3VyX2luZGV4X2NhcmQtLVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKSwwLjMpXG5cbiAgICAgICAgXG4gICAgICAgIHZhciBtb3ZlX25vZGUgPSB0aGlzLmNhcmRzX25vZHNbdGhpcy5jYXJkc19ub2RzLmxlbmd0aC10aGlzLmN1cl9pbmRleF9jYXJkLTFdXG4gICAgICAgIG1vdmVfbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMucHVzaF9jYXJkX3RtcC5wdXNoKG1vdmVfbm9kZSlcbiAgICAgICAgdGhpcy5mYXBhaV9hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2ZhcGFpMS5tcDNcIikpXG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wdXNoX2NhcmRfdG1wLmxlbmd0aC0xO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIG1vdmVfbm9kZSA9IHRoaXMucHVzaF9jYXJkX3RtcFtpXVxuICAgICAgICAgICAgICAgIHZhciBuZXd4ID0gbW92ZV9ub2RlLnggLSAodGhpcy5jYXJkX3dpZHRoICogMC40KVxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy52MihuZXd4LCAtMjUwKSk7XG4gICAgICAgICAgICAgICAgbW92ZV9ub2RlLnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VyX2luZGV4X2NhcmQtLVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKSwwLjMpXG4gICAgfSxcbiBcbiAgICAvL+WvueeJjOaOkuW6j1xuICAgIHNvcnRDYXJkKCl7XG4gICAgICAgIHRoaXMuY2FyZHNfbm9kcy5zb3J0KGZ1bmN0aW9uKHgseSl7XG4gICAgICAgICAgICB2YXIgYSA9IHguZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5jYXJkX2RhdGE7XG4gICAgICAgICAgICB2YXIgYiA9IHkuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5jYXJkX2RhdGE7XG5cbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIGIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIGIudmFsdWUtYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgIWIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiBiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIGIua2luZy1hLmtpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vdmFyIHggPSB0aGlzLmNhcmRzX25vZHNbMF0ueDtcbiAgICAgICAgLy/ov5nph4zkvb/nlKjlm7rlrprlnZDmoIfvvIzlm6DkuLrlj5Z0aGlzLmNhcmRzX25vZHNbMF0ueGvlj6/og73mjpLluo/kuLrlrozmiJDvvIzlr7zoh7R46ZSZ6K+vXG4gICAgICAgIC8v5omA5Lul5YGaMTAwMOavq+enkueahOW7tuaXtlxuICAgICAgICB2YXIgdGltZW91dCA9IDEwMDBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy92YXIgeCA9IC00MTcuNiBcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jYXJkc19ub2RzWzBdLng7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnQgeDpcIisgeClcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkc19ub2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmNhcmRzX25vZHNbaV07XG4gICAgICAgICAgICAgICAgY2FyZC56SW5kZXggPSBpOyAvL+iuvue9rueJjOeahOWPoOWKoOasoeW6jyx6aW5kZXjotorlpKfmmL7npLrlnKjkuIrpnaJcbiAgICAgICAgICAgICAgICBjYXJkLnggPSB4ICsgY2FyZC53aWR0aCAqIDAuNCAqIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGltZW91dCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH0sXG5cbiAgXG4gICAgcHVzaENhcmQoZGF0YSl7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIGIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIudmFsdWUgLSBhLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmICFiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiBiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmtpbmcgLSBhLmtpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIC8v5Yib5bu6Y2FyZOmihOWItuS9k1xuICAgICAgdGhpcy5jYXJkc19ub2RzID0gW11cbiAgICAgIGZvcih2YXIgaT0wO2k8MTc7aSsrKXtcbiAgICAgICAgXG4gICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgY2FyZC5zY2FsZT0wLjhcbiAgICAgICAgY2FyZC5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50XG4gICAgICAgIC8vY2FyZC54ID0gY2FyZC53aWR0aCAqIDAuNCAqICgxNyAtIDEpICogKC0wLjUpICsgY2FyZC53aWR0aCAqIDAuNCAqIDA7XG4gICAgICAgIGNhcmQueCA9IGNhcmQud2lkdGggKiAwLjQgKiAoLTAuNSkgKiAoLTE2KSArIGNhcmQud2lkdGggKiAwLjQgKiAwO1xuICAgICAgICAvL+i/memHjOWunueOsOS4uu+8jOavj+WPkeS4gOW8oOeJjO+8jOaUvuWcqOW3sue7j+WPkeeahOeJjOacgOWQju+8jOeEtuWQjuaVtOS9k+enu+WKqFxuICAgICAgICBjYXJkLnkgPSAtMjUwXG4gICAgICAgIGNhcmQuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRcIikuc2hvd0NhcmRzKGRhdGFbaV0sbXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpXG4gICAgICAgIC8v5a2Y5YKo54mM55qE5L+h5oGvLOeUqOS6juWQjumdouWPkeeJjOaViOaenFxuICAgICAgICB0aGlzLmNhcmRzX25vZHMucHVzaChjYXJkKVxuICAgICAgICB0aGlzLmNhcmRfd2lkdGggPSBjYXJkLndpZHRoXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8v5Yib5bu6M+W8oOW6leeJjFxuICAgICAgdGhpcy5ib3R0b21fY2FyZCA9IFtdXG4gICAgICBmb3IodmFyIGk9MDtpPDM7aSsrKXtcbiAgICAgICAgdmFyIGRpX2NhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRfcHJlZmFiKVxuICAgICAgICBkaV9jYXJkLnNjYWxlPTAuNFxuICAgICAgICBkaV9jYXJkLnBvc2l0aW9uID0gdGhpcy5ib3R0b21fY2FyZF9wb3Nfbm9kZS5wb3NpdGlvbiBcbiAgICAgICAgLy/kuInlvKDniYzvvIzkuK3pl7TlnZDmoIflsLHmmK9ib3R0b21fY2FyZF9wb3Nfbm9kZeiKgueCueWdkOagh++8jFxuICAgICAgICAvLzAs5ZKMMuS4pOW8oOeJjOW3puWPs+enu+WKqHdpbmR0aCowLjRcbiAgICAgICAgaWYoaT09MCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpX2NhcmQueCA9IGRpX2NhcmQueCAtIGRpX2NhcmQud2lkdGgqMC40XG4gICAgICAgIH1lbHNlIGlmKGk9PTIpe1xuICAgICAgICAgICAgZGlfY2FyZC54ID0gZGlfY2FyZC54ICsgZGlfY2FyZC53aWR0aCowLjRcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvL2RpX2NhcmQueCA9IGRpX2NhcmQud2lkdGgtaSpkaV9jYXJkLndpZHRoLTIwXG4gICAgICAgIC8vZGlfY2FyZC55PTYwXG4gICAgICAgIGRpX2NhcmQucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudFxuICAgICAgICAvL+WtmOWCqOWcqOWuueWZqOmHjFxuICAgICAgICB0aGlzLmJvdHRvbV9jYXJkLnB1c2goZGlfY2FyZClcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvL+e7meeOqeWutuWPkemAgeS4ieW8oOW6leeJjOWQju+8jOi/hzFzLOaKiueJjOiuvue9ruWIsHk9LTI1MOS9jee9ruaViOaenFxuICAgIHNjaGVkdWxlUHVzaFRocmVlQ2FyZCgpe1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuY2FyZHNfbm9kcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHZhciBjYXJkID0gdGhpcy5jYXJkc19ub2RzW2ldXG4gICAgICAgICAgICBpZihjYXJkLnk9PS0yMzApe1xuICAgICAgICAgICAgICAgIGNhcmQueSA9IC0yNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/nu5nlnLDkuLvlj5HkuInlvKDmjpLvvIzlubbmmL7npLrlnKjljp/mnInniYznmoTlkI7pnaJcbiAgICBwdXNoVGhyZWVDYXJkKCl7XG4gICAgICAgIC8v5q+P5byg54mM55qE5YW25a6e5L2N572uIFxuICAgICAgICB2YXIgbGFzdF9jYXJkX3ggPSAgdGhpcy5jYXJkc19ub2RzW3RoaXMuY2FyZHNfbm9kcy5sZW5ndGgtMV0ueFxuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYm90dG9tX2NhcmRfZGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgICAgIGNhcmQuc2NhbGU9MC44XG4gICAgICAgICAgICBjYXJkLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNhcmQueCA9IGxhc3RfY2FyZF94ICsgKChpKzEpKnRoaXMuY2FyZF93aWR0aCAqIDAuNClcbiAgICAgICAgICAgIGNhcmQueSA9IC0yMzAgIC8v5YWI5oqK5bqV55uY5pS+5ZyoLTIzMO+8jOWcqOiuvue9ruS4quWumuaXtuWZqOS4i+enu+WIsC0yNTDnmoTkvY3nva5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHVzaFRocmVlQ2FyZCB4OlwiK2NhcmQueClcbiAgICAgICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5zaG93Q2FyZHModGhpcy5ib3R0b21fY2FyZF9kYXRhW2ldLG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgICAgICAgICAgY2FyZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNhcmRzX25vZHMucHVzaChjYXJkKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0Q2FyZCgpXG4gICAgICAgIC8v6K6+572u5LiA5Liq5a6a5pe25Zmo77yM5ZyoMnPlkI7vvIzkv67mlLl55Z2Q5qCH5Li6LTI1MFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNjaGVkdWxlUHVzaFRocmVlQ2FyZC5iaW5kKHRoaXMpLDIpXG5cbiAgICB9LFxuXG4gICAgZGVzdG9yeUNhcmQoYWNjb3VudGlkLGNob29zZV9jYXJkKXtcbiAgICAgICAgaWYoY2hvb3NlX2NhcmQubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLyrlh7rniYzpgLvovpFcbiAgICAgICAgICAxLiDlsIbpgInkuK3nmoTniYwg5LuO54i26IqC54K55Lit56e76ZmkXG4gICAgICAgICAgMi4g5LuOdGhpcy5jYXJkc19ub2RzIOaVsOe7hOS4re+8jOWIoOmZpCDpgInkuK3nmoTniYwgXG4gICAgICAgICAgMy4g5bCGIOKAnOmAieS4reeahOeJjOKAnSDmt7vliqDliLDlh7rniYzljLrln59cbiAgICAgICAgICAgICAgMy4xIOa4heepuuWHuueJjOWMuuWfn1xuICAgICAgICAgICAgICAzLjIg5re75Yqg5a2Q6IqC54K5XG4gICAgICAgICAgICAgIDMuMyDorr7nva5zY2FsZVxuICAgICAgICAgICAgICAzLjQg6K6+572ucG9zaXRpb25cbiAgICAgICAgICA0LiAg6YeN5paw6K6+572u5omL5Lit55qE54mM55qE5L2N572uICB0aGlzLnVwZGF0ZUNhcmRzKCk7XG4gICAgICAgICovXG4gICAgICAgIC8vMS8y5q2l6aqk5Yig6Zmk6Ieq5bex5omL5LiK55qEY2FyZOiKgueCuSBcbiAgICAgICAgdmFyIGRlc3Ryb3lfY2FyZCA9IFtdXG4gICAgICAgIGZvcih2YXIgaT0wO2k8Y2hvb3NlX2NhcmQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBmb3IodmFyIGo9MDtqPHRoaXMuY2FyZHNfbm9kcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZF9pZCA9IHRoaXMuY2FyZHNfbm9kc1tqXS5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmNhcmRfaWRcbiAgICAgICAgICAgICAgICBpZihjYXJkX2lkPT1jaG9vc2VfY2FyZFtpXS5jYXJkaWQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3kgY2FyZCBpZDpcIitjYXJkX2lkKVxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY2FyZHNfbm9kc1tqXS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc19ub2RzW2pdLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3lfY2FyZC5wdXNoKHRoaXMuY2FyZHNfbm9kc1tqXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc19ub2RzLnNwbGljZShqLDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBlbmRDYXJkc1RvT3V0Wm9uZShhY2NvdW50aWQsZGVzdHJveV9jYXJkKVxuICAgICAgICB0aGlzLnVwZGF0ZUNhcmRzKClcblxuICAgIH0sXG5cbiAgICAvL+a4hemZpOaYvuekuuWHuueJjOiKgueCueWFqOmDqOWtkOiKgueCuSjlsLHmmK/miorlh7rniYznmoTmuIXnqbopXG4gICAgY2xlYXJPdXRab25lKGFjY291bnRpZCl7XG4gICAgICAgIHZhciBnYW1lU2NlbmVfc2NyaXB0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIilcbiAgICAgICAgdmFyIG91dENhcmRfbm9kZSA9IGdhbWVTY2VuZV9zY3JpcHQuZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQoYWNjb3VudGlkKVxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBvdXRDYXJkX25vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvcih2YXIgaT0wO2k8Y2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB2YXIgY2FyZCA9IGNoaWxkcmVuW2ldOyBcbiAgICAgICAgICAgIGNhcmQuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgICAgb3V0Q2FyZF9ub2RlLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgIH0sXG4gICAgLy/lr7nlh7rnmoTniYzlgZrmjpLluo9cbiAgICBwdXNoQ2FyZFNvcnQoY2FyZHMpe1xuICAgICAgICBpZihjYXJkcy5sZW5ndGg9PTEpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FyZHMuc29ydChmdW5jdGlvbih4LHkpe1xuICAgICAgICAgICAgdmFyIGEgPSB4LmdldENvbXBvbmVudChcImNhcmRcIikuY2FyZF9kYXRhO1xuICAgICAgICAgICAgdmFyIGIgPSB5LmdldENvbXBvbmVudChcImNhcmRcIikuY2FyZF9kYXRhO1xuXG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBiLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudmFsdWUgLSBhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiAhYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLmtpbmcgLSBhLmtpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUob3V0Q2FyZF9ub2RlLGNhcmRzLHlvZmZzZXQpe1xuICAgICAgIG91dENhcmRfbm9kZS5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcblxuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRPdGhlckNhcmRzVG9PdXRab25lIGxlbmd0aFwiK2NhcmRzLmxlbmd0aClcbiAgICAgICAvL+a3u+WKoOaWsOeahOWtkOiKgueCuVxuICAgICAgIGZvcih2YXIgaT0wO2k8Y2FyZHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07IFxuICAgICAgICAgICBvdXRDYXJkX25vZGUuYWRkQ2hpbGQoY2FyZCwxMDAraSkgLy/nrKzkuozkuKrlj4LmlbDmmK96b3JkZXIs5L+d6K+B54mM5LiN6IO96KKr6YGu5L2PXG4gICAgICAgfVxuXG4gICAgICAgLy/lr7nlh7rniYzov5vooYzmjpLluo9cbiAgICAgICAvL+iuvue9ruWHuueJjOiKgueCueeahOWdkOagh1xuICAgICAgIHZhciB6UG9pbnQgPSBjYXJkcy5sZW5ndGggLyAyO1xuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRPdGhlckNhcmRzVG9PdXRab25lIHplcm9Qb2ludDpcIit6UG9pbnQpXG4gICAgICAgZm9yKHZhciBpPTA7aTxjYXJkcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIGNhcmROb2RlID0gb3V0Q2FyZF9ub2RlLmdldENoaWxkcmVuKClbaV1cbiAgICAgICAgdmFyIHggPSAoaSAtIHpQb2ludCkgKiAzMDtcbiAgICAgICAgdmFyIHkgPSBjYXJkTm9kZS55K3lvZmZzZXQ7IC8v5Zug5Li65q+P5Liq6IqC54K56ZyA6KaB55qEWeS4jeS4gOagt++8jOWBmuWPguaVsOS8oOWFpVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS1jYXJkTm9kZTogeDpcIit4K1wiIHk6XCIreSlcbiAgICAgICAgY2FyZE5vZGUuc2V0U2NhbGUoMC41LCAwLjUpOyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY2FyZE5vZGUuc2V0UG9zaXRpb24oeCx5KTsgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgIH1cbiAgICB9LFxuICAgIC8v5bCGIOKAnOmAieS4reeahOeJjOKAnSDmt7vliqDliLDlh7rniYzljLrln59cbiAgICAvL2Rlc3Ryb3lfY2FyZOaYr+eOqeWutuacrOasoeWHuueahOeJjFxuICAgIGFwcGVuZENhcmRzVG9PdXRab25lKGFjY291bnRpZCxkZXN0cm95X2NhcmQpe1xuICAgICAgICBpZihkZXN0cm95X2NhcmQubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8v5YWI57uZ5pys5qyh5Ye655qE54mM5YGa5LiA5Liq5o6S5bqPXG4gICAgICAgdGhpcy5wdXNoQ2FyZFNvcnQoZGVzdHJveV9jYXJkKVxuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRDYXJkc1RvT3V0Wm9uZVwiKVxuICAgICAgIHZhciBnYW1lU2NlbmVfc2NyaXB0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIilcbiAgICAgICAvL+iOt+WPluWHuueJjOWMuuWfn+iKgueCuVxuICAgICAgIHZhciBvdXRDYXJkX25vZGUgPSBnYW1lU2NlbmVfc2NyaXB0LmdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50KGFjY291bnRpZClcbiAgICAgICB0aGlzLmFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUob3V0Q2FyZF9ub2RlLGRlc3Ryb3lfY2FyZCwzNjApXG4gICAgICAgLy9zY29uc29sZS5sb2coXCJPdXRab25lOlwiK291dENhcmRfbm9kZS5uYW1lKVxuXG4gICAgfSxcblxuICAgIC8v6YeN5paw5o6S5bqP5omL5LiK55qE54mMLOW5tuenu+WKqFxuICAgIHVwZGF0ZUNhcmRzKCl7XG4gICAgXG4gICAgICAgIHZhciB6ZXJvUG9pbnQgPSB0aGlzLmNhcmRzX25vZHMubGVuZ3RoIC8gMjtcbiAgICAgICAgLy92YXIgbGFzdF9jYXJkX3ggPSB0aGlzLmNhcmRzX25vZHNbdGhpcy5jYXJkc19ub2RzLmxlbmd0aC0xXS54XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5jYXJkc19ub2RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIGNhcmROb2RlID0gdGhpcy5jYXJkc19ub2RzW2ldXG4gICAgICAgICAgICB2YXIgeCA9IChpIC0gemVyb1BvaW50KSoodGhpcy5jYXJkX3dpZHRoICogMC40KTtcbiAgICAgICAgICAgIGNhcmROb2RlLnNldFBvc2l0aW9uKHgsIC0yNTApOyAgXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXG4gICAgcGxheVB1c2hDYXJkU291bmQoY2FyZF9uYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5UHVzaENhcmRTb3VuZDpcIitjYXJkX25hbWUpXG4gICAgICAgIFxuICAgICAgICBpZihjYXJkX25hbWU9PVwiXCIpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goY2FyZF9uYW1lKXtcbiAgICAgICAgICAgIGNhc2UgQ2FyZHNWYWx1ZS5vbmUubmFtZTpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBDYXJkc1ZhbHVlLmRvdWJsZS5uYW1lOlxuICAgICAgICAgICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2R1aXppLm1wM1wiKSkgXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWsgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LGN1c3RvbURhdGEpe1xuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3FpYW5kelwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnRuX3FpYW5kelwiKVxuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0Um9iU3RhdGUocWlhbl9zdGF0ZS5xaWFuKVxuICAgICAgICAgICAgICAgIHRoaXMucm9iVUkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvd29tYW5famlhb19kaV96aHUub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1cWlhbmR6XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5fYnVxaWFuZHpcIilcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFJvYlN0YXRlKHFpYW5fc3RhdGUuYnVxaWFuZylcbiAgICAgICAgICAgICAgICB0aGlzLnJvYlVJLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYoaXNvcGVuX3NvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL3dvbWFuX2J1X2ppYW8ub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBicmVhayAgICBcbiAgICAgICAgICAgICBjYXNlIFwibm9wdXNoY2FyZFwiOiAgLy/kuI3lh7rniYxcbiAgICAgICAgICAgICAgICAgbXlnbG9iYWwuc29ja2V0LnJlcXVlc3RfYnVjaHVfY2FyZChbXSxudWxsKVxuICAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmdVSV9ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgY2FzZSBcInB1c2hjYXJkXCI6ICAgLy/lh7rniYxcbiAgICAgICAgICAgICAgICAgLy/lhYjojrflj5bmnKzmrKHlh7rniYzmlbDmja5cbiAgICAgICAgICAgICAgICAgaWYodGhpcy5jaG9vc2VfY2FyZF9kYXRhLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc0xhYmVsLnN0cmluZz1cIuivt+mAieaLqeeJjCFcIlxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmc9XCJcIlxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X2NodV9jYXJkKHRoaXMuY2hvb3NlX2NhcmRfZGF0YSxmdW5jdGlvbihlcnIsZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RfY2h1X2NhcmQ6XCIrZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0X2NodV9jYXJkXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRpcHNMYWJlbC5zdHJpbmc9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc0xhYmVsLnN0cmluZyA9IGRhdGEubXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmc9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Ye654mM5aSx6LSl77yM5oqK6YCJ5oup55qE54mM5b2S5L2NXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuY2FyZHNfbm9kcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZCA9IHRoaXMuY2FyZHNfbm9kc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZW1pdChcInJlc2V0X2NhcmRfZmxhZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhID0gW11cbiAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Ye654mM5oiQ5YqfXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwX2NodV9jYXJkIGRhdGE6XCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nVUlfbm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pKt5pS+5Ye654mM55qE5aOw6Z+zXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXNwX2NodV9jYXJkIGRhdGE6e1wiYWNjb3VudFwiOlwiMjUxOTkwMVwiLFwibXNnXCI6XCJzdWNlc3NcIixcImNhcmR2YWx1ZVwiOntcIm5hbWVcIjpcIkRvdWJsZVwiLFwidmFsdWVcIjoxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvL3tcInR5cGVcIjpcIm90aGVyX2NodWNhcmRfbm90aWZ5XCIsXCJyZXN1bHRcIjowLFwiZGF0YVwiOntcImFjY291bnRpZFwiOlwiMjUxOTkwMVwiLFwiY2FyZHNcIjpbe1wiY2FyZGlkXCI6MjQsXCJjYXJkX2RhdGFcIjp7XCJpbmRleFwiOjI0LFwidmFsdWVcIjo2LFwic2hhcGVcIjoxfX0se1wiY2FyZGlkXCI6MjYsXCJjYXJkX2RhdGFcIjp7XCJpbmRleFwiOjI2LFwidmFsdWVcIjo2LFwic2hhcGVcIjozfX1dfSxcImNhbGxCYWNrSW5kZXhcIjowfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVB1c2hDYXJkU291bmQoZGF0YS5jYXJkdmFsdWUubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlDYXJkKGRhdGEuYWNjb3VudCx0aGlzLmNob29zZV9jYXJkX2RhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhID0gW11cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAvL3RoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICBjYXNlIFwidGlwY2FyZFwiOlxuICAgICAgICAgICAgICAgICBicmVhayAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/gameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf22aez0/xDaaC1kRqxn/pw', 'gameScene');
// scripts/gameScene/gameScene.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    di_label: cc.Label,
    beishu_label: cc.Label,
    roomid_label: cc.Label,
    player_node_prefabs: cc.Prefab,
    //绑定玩家座位,下面有3个子节点
    players_seat_pos: cc.Node
  },
  //本局结束，做状态清除
  gameEnd: function gameEnd() {},
  onLoad: function onLoad() {
    this.playerNodeList = [];
    this.di_label.string = "底:" + _mygolbal["default"].playerData.bottom;
    this.beishu_label.string = "倍数:" + _mygolbal["default"].playerData.rate;
    this.roomstate = RoomState.ROOM_INVALID; //监听，给其他玩家发牌(内部事件)

    this.node.on("pushcard_other_event", function () {
      console.log("gamescene pushcard_other_event");

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("push_card_event");
        }
      }
    }.bind(this)); //监听房间状态改变事件

    _mygolbal["default"].socket.onRoomChangeState(function (data) {
      //回调的函数参数是进入房间用户消息
      console.log("onRoomChangeState:" + data);
      this.roomstate = data;
    }.bind(this)); //


    this.node.on("canrob_event", function (event) {
      console.log("gamescene canrob_event:" + event); //通知给playernode子节点

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("playernode_canrob_event", event);
        }
      }
    }.bind(this));
    this.node.on("choose_card_event", function (event) {
      console.log("--------choose_card_event-----------");
      var gameui_node = this.node.getChildByName("gameingUI");

      if (gameui_node == null) {
        console.log("get childer name gameingUI");
        return;
      }

      gameui_node.emit("choose_card_event", event);
    }.bind(this));
    this.node.on("unchoose_card_event", function (event) {
      console.log("--------unchoose_card_event-----------");
      var gameui_node = this.node.getChildByName("gameingUI");

      if (gameui_node == null) {
        console.log("get childer name gameingUI");
        return;
      }

      gameui_node.emit("unchoose_card_event", event);
    }.bind(this)); //监听给玩家添加三张底牌
    // this.node.on("add_three_card",function(event){
    //     console.log("add_three_card:"+event)
    //     for(var i=0;i<this.playerNodeList.length;i++){
    //         var node = this.playerNodeList[i]
    //         if(node){
    //             //给playernode节点发送事件
    //             node.emit("playernode_add_three_card",event)
    //         }
    //     }
    // }.bind(this))

    _mygolbal["default"].socket.request_enter_room({}, function (err, result) {
      console.log("enter_room_resp" + JSON.stringify(result));

      if (err != 0) {
        console.log("enter_room_resp err:" + err);
      } else {
        //enter_room成功
        //notify ={"seatid":1,"playerdata":[{"accountid":"2117836","nick_name":"tiny543","avatarUrl":"http://xxx","goldcount":1000}]}
        var seatid = result.seatindex; //自己在房间里的seatid

        this.playerdata_list_pos = []; //3个用户创建一个空用户列表

        this.setPlayerSeatPos(seatid);
        var playerdata_list = result.playerdata;
        var roomid = result.roomid;
        this.roomid_label.string = "房间号:" + roomid;
        _mygolbal["default"].playerData.housemanageid = result.housemanageid;

        for (var i = 0; i < playerdata_list.length; i++) {
          //consol.log("this----"+this)
          this.addPlayerNode(playerdata_list[i]);
        }

        if (isopen_sound) {
          cc.audioEngine.stopAll();
          cc.audioEngine.play(cc.url.raw("resources/sound/bg.mp3"), true);
        }
      }

      var gamebefore_node = this.node.getChildByName("gamebeforeUI");
      gamebefore_node.emit("init");
    }.bind(this)); //在进入房间后，注册其他玩家进入房间的事件


    _mygolbal["default"].socket.onPlayerJoinRoom(function (join_playerdata) {
      //回调的函数参数是进入房间用户消息
      console.log("onPlayerJoinRoom:" + JSON.stringify(join_playerdata));
      this.addPlayerNode(join_playerdata);
    }.bind(this)); //回调参数是发送准备消息的accountid


    _mygolbal["default"].socket.onPlayerReady(function (data) {
      console.log("-------onPlayerReady:" + data);

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          node.emit("player_ready_notify", data);
        }
      }
    }.bind(this));

    _mygolbal["default"].socket.onGameStart(function () {
      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          node.emit("gamestart_event");
        }
      } //隐藏gamebeforeUI节点


      var gamebeforeUI = this.node.getChildByName("gamebeforeUI");

      if (gamebeforeUI) {
        gamebeforeUI.active = false;
      }
    }.bind(this)); //监听服务器玩家抢地主消息


    _mygolbal["default"].socket.onRobState(function (event) {
      console.log("-----onRobState" + JSON.stringify(event)); //onRobState{"accountid":"2162866","state":1}

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("playernode_rob_state_event", event);
        }
      }
    }.bind(this)); //注册监听服务器确定地主消息


    _mygolbal["default"].socket.onChangeMaster(function (event) {
      console.log("onChangeMaster" + event); //保存一下地主id

      _mygolbal["default"].playerData.master_accountid = event;

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("playernode_changemaster_event", event);
        }
      }
    }.bind(this)); //注册监听服务器显示底牌消息


    _mygolbal["default"].socket.onShowBottomCard(function (event) {
      console.log("onShowBottomCard---------" + event);
      var gameui_node = this.node.getChildByName("gameingUI");

      if (gameui_node == null) {
        console.log("get childer name gameingUI");
        return;
      }

      gameui_node.emit("show_bottom_card_event", event);
    }.bind(this));
  },
  //seat_index自己在房间的位置id
  setPlayerSeatPos: function setPlayerSeatPos(seat_index) {
    if (seat_index < 1 || seat_index > 3) {
      console.log("seat_index error" + seat_index);
      return;
    }

    console.log("setPlayerSeatPos seat_index:" + seat_index); //界面位置转化成逻辑位置

    switch (seat_index) {
      case 1:
        this.playerdata_list_pos[1] = 0;
        this.playerdata_list_pos[2] = 1;
        this.playerdata_list_pos[3] = 2;
        break;

      case 2:
        this.playerdata_list_pos[2] = 0;
        this.playerdata_list_pos[3] = 1;
        this.playerdata_list_pos[1] = 2;
        break;

      case 3:
        this.playerdata_list_pos[3] = 0;
        this.playerdata_list_pos[1] = 1;
        this.playerdata_list_pos[2] = 2;
        break;

      default:
        break;
    }
  },
  addPlayerNode: function addPlayerNode(player_data) {
    var playernode_inst = cc.instantiate(this.player_node_prefabs);
    playernode_inst.parent = this.node; //创建的节点存储在gamescene的列表中

    this.playerNodeList.push(playernode_inst); //玩家在room里的位置索引(逻辑位置)

    var index = this.playerdata_list_pos[player_data.seatindex];
    console.log("index " + player_data.seatindex + " " + index);
    playernode_inst.position = this.players_seat_pos.children[index].position;
    playernode_inst.getComponent("player_node").init_data(player_data, index);
  },
  start: function start() {},

  /*
   //通过accountid获取用户出牌放在gamescend的位置 
   做法：先放3个节点在gameacene的场景中cardsoutzone(012)
         
  */
  getUserOutCardPosByAccount: function getUserOutCardPosByAccount(accountid) {
    console.log("getUserOutCardPosByAccount accountid:" + accountid);

    for (var i = 0; i < this.playerNodeList.length; i++) {
      var node = this.playerNodeList[i];

      if (node) {
        //获取节点绑定的组件
        var node_script = node.getComponent("player_node"); //如果accountid和player_node节点绑定的accountid相同
        //接获取player_node的子节点

        if (node_script.accountid === accountid) {
          var seat_node = this.players_seat_pos.children[node_script.seat_index];
          var index_name = "cardsoutzone" + node_script.seat_index; //console.log("getUserOutCardPosByAccount index_name:"+index_name)

          var out_card_node = seat_node.getChildByName(index_name); //console.log("OutZone:"+ out_card_node.name)

          return out_card_node;
        }
      }
    }

    return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1lU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkaV9sYWJlbCIsIkxhYmVsIiwiYmVpc2h1X2xhYmVsIiwicm9vbWlkX2xhYmVsIiwicGxheWVyX25vZGVfcHJlZmFicyIsIlByZWZhYiIsInBsYXllcnNfc2VhdF9wb3MiLCJOb2RlIiwiZ2FtZUVuZCIsIm9uTG9hZCIsInBsYXllck5vZGVMaXN0Iiwic3RyaW5nIiwibXlnbG9iYWwiLCJwbGF5ZXJEYXRhIiwiYm90dG9tIiwicmF0ZSIsInJvb21zdGF0ZSIsIlJvb21TdGF0ZSIsIlJPT01fSU5WQUxJRCIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZW1pdCIsImJpbmQiLCJzb2NrZXQiLCJvblJvb21DaGFuZ2VTdGF0ZSIsImRhdGEiLCJldmVudCIsImdhbWV1aV9ub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJyZXF1ZXN0X2VudGVyX3Jvb20iLCJlcnIiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VhdGlkIiwic2VhdGluZGV4IiwicGxheWVyZGF0YV9saXN0X3BvcyIsInNldFBsYXllclNlYXRQb3MiLCJwbGF5ZXJkYXRhX2xpc3QiLCJwbGF5ZXJkYXRhIiwicm9vbWlkIiwiaG91c2VtYW5hZ2VpZCIsImFkZFBsYXllck5vZGUiLCJpc29wZW5fc291bmQiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJwbGF5IiwidXJsIiwicmF3IiwiZ2FtZWJlZm9yZV9ub2RlIiwib25QbGF5ZXJKb2luUm9vbSIsImpvaW5fcGxheWVyZGF0YSIsIm9uUGxheWVyUmVhZHkiLCJvbkdhbWVTdGFydCIsImdhbWViZWZvcmVVSSIsImFjdGl2ZSIsIm9uUm9iU3RhdGUiLCJvbkNoYW5nZU1hc3RlciIsIm1hc3Rlcl9hY2NvdW50aWQiLCJvblNob3dCb3R0b21DYXJkIiwic2VhdF9pbmRleCIsInBsYXllcl9kYXRhIiwicGxheWVybm9kZV9pbnN0IiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJwdXNoIiwiaW5kZXgiLCJwb3NpdGlvbiIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50IiwiaW5pdF9kYXRhIiwic3RhcnQiLCJnZXRVc2VyT3V0Q2FyZFBvc0J5QWNjb3VudCIsImFjY291bnRpZCIsIm5vZGVfc2NyaXB0Iiwic2VhdF9ub2RlIiwiaW5kZXhfbmFtZSIsIm91dF9jYXJkX25vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQ0osRUFBRSxDQUFDSyxLQURKO0lBRVJDLFlBQVksRUFBQ04sRUFBRSxDQUFDSyxLQUZSO0lBR1JFLFlBQVksRUFBQ1AsRUFBRSxDQUFDSyxLQUhSO0lBSVJHLG1CQUFtQixFQUFDUixFQUFFLENBQUNTLE1BSmY7SUFLUjtJQUNBQyxnQkFBZ0IsRUFBQ1YsRUFBRSxDQUFDVztFQU5aLENBSFA7RUFZTDtFQUNBQyxPQWJLLHFCQWFJLENBRVIsQ0FmSTtFQWdCTEMsTUFoQkssb0JBZ0JLO0lBQ04sS0FBS0MsY0FBTCxHQUFzQixFQUF0QjtJQUNBLEtBQUtWLFFBQUwsQ0FBY1csTUFBZCxHQUF1QixPQUFRQyxvQkFBQSxDQUFTQyxVQUFULENBQW9CQyxNQUFuRDtJQUNBLEtBQUtaLFlBQUwsQ0FBa0JTLE1BQWxCLEdBQTJCLFFBQVFDLG9CQUFBLENBQVNDLFVBQVQsQ0FBb0JFLElBQXZEO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQkMsU0FBUyxDQUFDQyxZQUEzQixDQUpNLENBS047O0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsc0JBQWIsRUFBb0MsWUFBVTtNQUMxQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7O01BQ0EsS0FBSSxJQUFJQyxDQUFDLEdBQUMs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LElBQUlKLElBQUksR0FBRyxLQUFLVCxjQUFMLENBQW9CYSxDQUFwQixDQUFYOztNQUNBLElBQUdKLElBQUgsRUFBUTtRQUNKO1FBQ0EsSUFBSTJELFdBQVcsR0FBRzNELElBQUksQ0FBQ3NELFlBQUwsQ0FBa0IsYUFBbEIsQ0FBbEIsQ0FGSSxDQUdKO1FBQ0E7O1FBQ0EsSUFBR0ssV0FBVyxDQUFDRCxTQUFaLEtBQXdCQSxTQUEzQixFQUFxQztVQUNuQyxJQUFJRSxTQUFTLEdBQUcsS0FBS3pFLGdCQUFMLENBQXNCa0UsUUFBdEIsQ0FBK0JNLFdBQVcsQ0FBQ2QsVUFBM0MsQ0FBaEI7VUFDQSxJQUFJZ0IsVUFBVSxHQUFHLGlCQUFlRixXQUFXLENBQUNkLFVBQTVDLENBRm1DLENBR25DOztVQUNBLElBQUlpQixhQUFhLEdBQUdGLFNBQVMsQ0FBQy9DLGNBQVYsQ0FBeUJnRCxVQUF6QixDQUFwQixDQUptQyxDQUtuQzs7VUFDQSxPQUFPQyxhQUFQO1FBQ0Q7TUFDSjtJQUNKOztJQUVELE9BQU8sSUFBUDtFQUNILENBdlFJLENBd1FMOztBQXhRSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZGlfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIGJlaXNodV9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgcm9vbWlkX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBwbGF5ZXJfbm9kZV9wcmVmYWJzOmNjLlByZWZhYixcbiAgICAgICAgLy/nu5HlrprnjqnlrrbluqfkvY0s5LiL6Z2i5pyJM+S4quWtkOiKgueCuVxuICAgICAgICBwbGF5ZXJzX3NlYXRfcG9zOmNjLk5vZGUsXG5cbiAgICB9LFxuICAgIC8v5pys5bGA57uT5p2f77yM5YGa54q25oCB5riF6ZmkXG4gICAgZ2FtZUVuZCgpe1xuXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnBsYXllck5vZGVMaXN0ID0gW11cbiAgICAgICAgdGhpcy5kaV9sYWJlbC5zdHJpbmcgPSBcIuW6lTpcIiArICBteWdsb2JhbC5wbGF5ZXJEYXRhLmJvdHRvbVxuICAgICAgICB0aGlzLmJlaXNodV9sYWJlbC5zdHJpbmcgPSBcIuWAjeaVsDpcIiArIG15Z2xvYmFsLnBsYXllckRhdGEucmF0ZVxuICAgICAgICB0aGlzLnJvb21zdGF0ZSA9IFJvb21TdGF0ZS5ST09NX0lOVkFMSURcbiAgICAgICAgLy/nm5HlkKzvvIznu5nlhbbku5bnjqnlrrblj5HniYwo5YaF6YOo5LqL5Lu2KVxuICAgICAgICB0aGlzLm5vZGUub24oXCJwdXNoY2FyZF9vdGhlcl9ldmVudFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVzY2VuZSBwdXNoY2FyZF9vdGhlcl9ldmVudFwiKVxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLnBsYXllck5vZGVMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgICAgICAgICAgICAgaWYobm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIC8v57uZcGxheWVybm9kZeiKgueCueWPkemAgeS6i+S7tlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwicHVzaF9jYXJkX2V2ZW50XCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v55uR5ZCs5oi/6Ze054q25oCB5pS55Y+Y5LqL5Lu2XG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vblJvb21DaGFuZ2VTdGF0ZShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8v5Zue6LCD55qE5Ye95pWw5Y+C5pWw5piv6L+b5YWl5oi/6Ze055So5oi35raI5oGvXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUm9vbUNoYW5nZVN0YXRlOlwiK2RhdGEpXG4gICAgICAgICAgICB0aGlzLnJvb21zdGF0ZSA9IGRhdGFcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAvL1xuICAgICAgICB0aGlzLm5vZGUub24oXCJjYW5yb2JfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVzY2VuZSBjYW5yb2JfZXZlbnQ6XCIrZXZlbnQpXG4gICAgICAgICAgICAvL+mAmuefpee7mXBsYXllcm5vZGXlrZDoioLngrlcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgICAgICAgICBpZihub2RlKXtcbiAgICAgICAgICAgICAgICAgICAgLy/nu5lwbGF5ZXJub2Rl6IqC54K55Y+R6YCB5LqL5Lu2XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZW1pdChcInBsYXllcm5vZGVfY2Fucm9iX2V2ZW50XCIsZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2hvb3NlX2NhcmRfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tY2hvb3NlX2NhcmRfZXZlbnQtLS0tLS0tLS0tLVwiKVxuICAgICAgICAgICAgdmFyIGdhbWV1aV9ub2RlID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgaWYoZ2FtZXVpX25vZGU9PW51bGwpe1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY2hpbGRlciBuYW1lIGdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1ldWlfbm9kZS5lbWl0KFwiY2hvb3NlX2NhcmRfZXZlbnRcIixldmVudClcbiAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICB0aGlzLm5vZGUub24oXCJ1bmNob29zZV9jYXJkX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLXVuY2hvb3NlX2NhcmRfZXZlbnQtLS0tLS0tLS0tLVwiKVxuICAgICAgICAgICAgdmFyIGdhbWV1aV9ub2RlID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgaWYoZ2FtZXVpX25vZGU9PW51bGwpe1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY2hpbGRlciBuYW1lIGdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1ldWlfbm9kZS5lbWl0KFwidW5jaG9vc2VfY2FyZF9ldmVudFwiLGV2ZW50KVxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIC8v55uR5ZCs57uZ546p5a625re75Yqg5LiJ5byg5bqV54mMXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImFkZF90aHJlZV9jYXJkXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJhZGRfdGhyZWVfY2FyZDpcIitldmVudClcbiAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgLy8gICAgICAgICBpZihub2RlKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy/nu5lwbGF5ZXJub2Rl6IqC54K55Y+R6YCB5LqL5Lu2XG4gICAgICAgIC8vICAgICAgICAgICAgIG5vZGUuZW1pdChcInBsYXllcm5vZGVfYWRkX3RocmVlX2NhcmRcIixldmVudClcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0uYmluZCh0aGlzKSlcblxuICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF9lbnRlcl9yb29tKHt9LGZ1bmN0aW9uKGVycixyZXN1bHQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcl9yb29tX3Jlc3BcIisgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgICAgICAgICAgIGlmKGVyciE9MCl7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyX3Jvb21fcmVzcCBlcnI6XCIrZXJyKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vZW50ZXJfcm9vbeaIkOWKn1xuICAgICAgICAgICAgICAvL25vdGlmeSA9e1wic2VhdGlkXCI6MSxcInBsYXllcmRhdGFcIjpbe1wiYWNjb3VudGlkXCI6XCIyMTE3ODM2XCIsXCJuaWNrX25hbWVcIjpcInRpbnk1NDNcIixcImF2YXRhclVybFwiOlwiaHR0cDovL3h4eFwiLFwiZ29sZGNvdW50XCI6MTAwMH1dfVxuICAgICAgICAgICAgICAgIHZhciBzZWF0aWQgPSByZXN1bHQuc2VhdGluZGV4IC8v6Ieq5bex5Zyo5oi/6Ze06YeM55qEc2VhdGlkXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJkYXRhX2xpc3RfcG9zID0gW10gIC8vM+S4queUqOaIt+WIm+W7uuS4gOS4quepuueUqOaIt+WIl+ihqFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyU2VhdFBvcyhzZWF0aWQpXG5cbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyZGF0YV9saXN0ID0gcmVzdWx0LnBsYXllcmRhdGFcbiAgICAgICAgICAgICAgICB2YXIgcm9vbWlkID0gcmVzdWx0LnJvb21pZFxuICAgICAgICAgICAgICAgIHRoaXMucm9vbWlkX2xhYmVsLnN0cmluZyA9IFwi5oi/6Ze05Y+3OlwiICsgcm9vbWlkXG4gICAgICAgICAgICAgICAgbXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkID0gcmVzdWx0LmhvdXNlbWFuYWdlaWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHBsYXllcmRhdGFfbGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2wubG9nKFwidGhpcy0tLS1cIit0aGlzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBsYXllck5vZGUocGxheWVyZGF0YV9saXN0W2ldKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKVxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvYmcubXAzXCIpLHRydWUpIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ2FtZWJlZm9yZV9ub2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZWJlZm9yZVVJXCIpXG4gICAgICAgICAgICBnYW1lYmVmb3JlX25vZGUuZW1pdChcImluaXRcIilcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v5Zyo6L+b5YWl5oi/6Ze05ZCO77yM5rOo5YaM5YW25LuW546p5a626L+b5YWl5oi/6Ze055qE5LqL5Lu2XG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vblBsYXllckpvaW5Sb29tKGZ1bmN0aW9uKGpvaW5fcGxheWVyZGF0YSl7XG4gICAgICAgICAgICAvL+Wbnuiwg+eahOWHveaVsOWPguaVsOaYr+i/m+WFpeaIv+mXtOeUqOaIt+a2iOaBr1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvblBsYXllckpvaW5Sb29tOlwiK0pTT04uc3RyaW5naWZ5KGpvaW5fcGxheWVyZGF0YSkpXG4gICAgICAgICAgICB0aGlzLmFkZFBsYXllck5vZGUoam9pbl9wbGF5ZXJkYXRhKVxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIFxuICAgICAgICAvL+Wbnuiwg+WPguaVsOaYr+WPkemAgeWHhuWkh+a2iOaBr+eahGFjY291bnRpZFxuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25QbGF5ZXJSZWFkeShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLW9uUGxheWVyUmVhZHk6XCIrZGF0YSlcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgICAgICAgICBpZihub2RlKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwicGxheWVyX3JlYWR5X25vdGlmeVwiLGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uR2FtZVN0YXJ0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMucGxheWVyTm9kZUxpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICAgICAgaWYobm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZW1pdChcImdhbWVzdGFydF9ldmVudFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvL+makOiXj2dhbWViZWZvcmVVSeiKgueCuVxuICAgICAgICB2YXIgZ2FtZWJlZm9yZVVJID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZWJlZm9yZVVJXCIpXG4gICAgICAgICAgICBpZihnYW1lYmVmb3JlVUkpe1xuICAgICAgICAgICAgICAgIGdhbWViZWZvcmVVSS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgICAgICAgLy/nm5HlkKzmnI3liqHlmajnjqnlrrbmiqLlnLDkuLvmtojmga9cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uUm9iU3RhdGUoZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS1vblJvYlN0YXRlXCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgICAgICAgICAgICAgIC8vb25Sb2JTdGF0ZXtcImFjY291bnRpZFwiOlwiMjE2Mjg2NlwiLFwic3RhdGVcIjoxfVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/nu5lwbGF5ZXJub2Rl6IqC54K55Y+R6YCB5LqL5Lu2XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJwbGF5ZXJub2RlX3JvYl9zdGF0ZV9ldmVudFwiLGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgLy/ms6jlhoznm5HlkKzmnI3liqHlmajnoa7lrprlnLDkuLvmtojmga9cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uQ2hhbmdlTWFzdGVyKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25DaGFuZ2VNYXN0ZXJcIitldmVudClcbiAgICAgICAgICAgIC8v5L+d5a2Y5LiA5LiL5Zyw5Li7aWRcbiAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEubWFzdGVyX2FjY291bnRpZCA9IGV2ZW50XG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMucGxheWVyTm9kZUxpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICAgICAgaWYobm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIC8v57uZcGxheWVybm9kZeiKgueCueWPkemAgeS6i+S7tlxuICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJwbGF5ZXJub2RlX2NoYW5nZW1hc3Rlcl9ldmVudFwiLGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICBcbiAgICAgICAgLy/ms6jlhoznm5HlkKzmnI3liqHlmajmmL7npLrlupXniYzmtojmga9cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uU2hvd0JvdHRvbUNhcmQoZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uU2hvd0JvdHRvbUNhcmQtLS0tLS0tLS1cIitldmVudClcbiAgICAgICAgICAgdmFyIGdhbWV1aV9ub2RlID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVpbmdVSVwiKVxuICAgICAgICAgICBpZihnYW1ldWlfbm9kZT09bnVsbCl7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNoaWxkZXIgbmFtZSBnYW1laW5nVUlcIilcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgZ2FtZXVpX25vZGUuZW1pdChcInNob3dfYm90dG9tX2NhcmRfZXZlbnRcIixldmVudClcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH0sXG5cbiAgICAvL3NlYXRfaW5kZXjoh6rlt7HlnKjmiL/pl7TnmoTkvY3nva5pZFxuICAgIHNldFBsYXllclNlYXRQb3Moc2VhdF9pbmRleCl7XG4gICAgICAgIGlmKHNlYXRfaW5kZXggPCAxIHx8IHNlYXRfaW5kZXggPiAzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhdF9pbmRleCBlcnJvclwiK3NlYXRfaW5kZXgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0UGxheWVyU2VhdFBvcyBzZWF0X2luZGV4OlwiICsgc2VhdF9pbmRleClcbiAgICAgICBcbiAgICAgICAgLy/nlYzpnaLkvY3nva7ovazljJbmiJDpgLvovpHkvY3nva5cbiAgICAgICAgc3dpdGNoKHNlYXRfaW5kZXgpe1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1sxXSA9IDBcbiAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmRhdGFfbGlzdF9wb3NbMl0gPSAxIFxuICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1szXSA9IDJcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJkYXRhX2xpc3RfcG9zWzJdID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmRhdGFfbGlzdF9wb3NbM10gPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1sxXSA9IDJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1szXSA9IDAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmRhdGFfbGlzdF9wb3NbMV0gPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1syXSA9IDJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICBicmVhayAgICAgIFxuICAgICAgICB9IFxuXG4gICAgfSxcblxuICAgIGFkZFBsYXllck5vZGUocGxheWVyX2RhdGEpe1xuICAgICAgICB2YXIgcGxheWVybm9kZV9pbnN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJfbm9kZV9wcmVmYWJzKVxuICAgICAgICBwbGF5ZXJub2RlX2luc3QucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIC8v5Yib5bu655qE6IqC54K55a2Y5YKo5ZyoZ2FtZXNjZW5l55qE5YiX6KGo5LitXG4gICAgICAgIHRoaXMucGxheWVyTm9kZUxpc3QucHVzaChwbGF5ZXJub2RlX2luc3QpXG5cbiAgICAgICAgLy/njqnlrrblnKhyb29t6YeM55qE5L2N572u57Si5byVKOmAu+i+keS9jee9rilcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wbGF5ZXJkYXRhX2xpc3RfcG9zW3BsYXllcl9kYXRhLnNlYXRpbmRleF1cbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCBcIitwbGF5ZXJfZGF0YS5zZWF0aW5kZXgrIFwiIFwiK2luZGV4KVxuICAgICAgICBwbGF5ZXJub2RlX2luc3QucG9zaXRpb24gPSB0aGlzLnBsYXllcnNfc2VhdF9wb3MuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uXG4gICAgICAgIHBsYXllcm5vZGVfaW5zdC5nZXRDb21wb25lbnQoXCJwbGF5ZXJfbm9kZVwiKS5pbml0X2RhdGEocGxheWVyX2RhdGEsaW5kZXgpXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgLy/pgJrov4dhY2NvdW50aWTojrflj5bnlKjmiLflh7rniYzmlL7lnKhnYW1lc2NlbmTnmoTkvY3nva4gXG4gICAgIOWBmuazle+8muWFiOaUvjPkuKroioLngrnlnKhnYW1lYWNlbmXnmoTlnLrmma/kuK1jYXJkc291dHpvbmUoMDEyKVxuICAgICAgICAgICBcbiAgICAqL1xuICAgIGdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50KGFjY291bnRpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQgYWNjb3VudGlkOlwiK2FjY291bnRpZClcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLnBsYXllck5vZGVMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICBpZihub2RlKXtcbiAgICAgICAgICAgICAgICAvL+iOt+WPluiKgueCuee7keWumueahOe7hOS7tlxuICAgICAgICAgICAgICAgIHZhciBub2RlX3NjcmlwdCA9IG5vZGUuZ2V0Q29tcG9uZW50KFwicGxheWVyX25vZGVcIilcbiAgICAgICAgICAgICAgICAvL+WmguaenGFjY291bnRpZOWSjHBsYXllcl9ub2Rl6IqC54K557uR5a6a55qEYWNjb3VudGlk55u45ZCMXG4gICAgICAgICAgICAgICAgLy/mjqXojrflj5ZwbGF5ZXJfbm9kZeeahOWtkOiKgueCuVxuICAgICAgICAgICAgICAgIGlmKG5vZGVfc2NyaXB0LmFjY291bnRpZD09PWFjY291bnRpZCl7XG4gICAgICAgICAgICAgICAgICB2YXIgc2VhdF9ub2RlID0gdGhpcy5wbGF5ZXJzX3NlYXRfcG9zLmNoaWxkcmVuW25vZGVfc2NyaXB0LnNlYXRfaW5kZXhdXG4gICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfbmFtZSA9IFwiY2FyZHNvdXR6b25lXCIrbm9kZV9zY3JpcHQuc2VhdF9pbmRleFxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50IGluZGV4X25hbWU6XCIraW5kZXhfbmFtZSlcbiAgICAgICAgICAgICAgICAgIHZhciBvdXRfY2FyZF9ub2RlID0gc2VhdF9ub2RlLmdldENoaWxkQnlOYW1lKGluZGV4X25hbWUpXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiT3V0Wm9uZTpcIisgb3V0X2NhcmRfbm9kZS5uYW1lKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dF9jYXJkX25vZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/prefabs/card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2afe8rz92BOl7CbQfKSCoLh', 'card');
// scripts/gameScene/prefabs/card.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    cards_sprite_atlas: cc.SpriteAtlas
  },
  onLoad: function onLoad() {
    this.flag = false;
    this.offset_y = 20;
    this.node.on("reset_card_flag", function (event) {
      if (this, flag == true) {
        this, flag = false;
        this.node.y -= this.offset_y;
      }
    }.bind(this)); // this.node.on("chu_card_succ",function(event){
    //    var chu_card_list = event
    //    for(var i=0;i<chu_card_list.length;i++){
    //     if(chu_card_list[i].card_id==this.card_id){
    //         //this.runToCenter(chu_card_list[i])
    //         //this.node.destory()
    //     }
    //    }
    // }.bind(this))
  },
  runToCenter: function runToCenter() {//移动到屏幕中间，并带一个牌缩小的效果
  },
  start: function start() {},
  init_data: function init_data(data) {},
  // update (dt) {},
  setTouchEvent: function setTouchEvent() {
    if (this.accountid == _mygolbal["default"].playerData.accountID) {
      this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        var gameScene_node = this.node.parent;
        var room_state = gameScene_node.getComponent("gameScene").roomstate;

        if (room_state == RoomState.ROOM_PLAYING) {
          console.log("TOUCH_START id:" + this.card_id);

          if (this.flag == false) {
            this.flag = true;
            this.node.y += this.offset_y; //通知gameui层选定的牌

            var carddata = {
              "cardid": this.card_id,
              "card_data": this.card_data
            };
            gameScene_node.emit("choose_card_event", carddata);
          } else {
            this.flag = false;
            this.node.y -= this.offset_y; //通知gameUI取消了那张牌

            gameScene_node.emit("unchoose_card_event", this.card_id);
          }
        }
      }.bind(this));
    }
  },
  showCards: function showCards(card, accountid) {
    //card.index是服务器生成card给对象设置的一副牌里唯一id
    this.card_id = card.index; //传入参数 card={"value":5,"shape":1,"index":20}

    this.card_data = card;

    if (accountid) {
      this.accountid = accountid; //标识card属于的玩家
    } //this.node.getComponent(cc.Sprite).spriteFrame = 
    //服务器定义牌的表示
    // const cardvalue = {
    //     "A": 12,
    //     "2": 13,
    //     "3": 1,
    //     "4": 2,
    //     "5": 3,
    //     "6": 4,
    //     "7": 5,
    //     "8": 6,
    //     "9": 7,
    //     "10": 8,
    //     "J": 9,
    //     "Q": 10,
    //     "K": 11,
    // }
    //服务器返回的是key,value对应的是资源的编号


    var CardValue = {
      "12": 1,
      "13": 2,
      "1": 3,
      "2": 4,
      "3": 5,
      "4": 6,
      "5": 7,
      "6": 8,
      "7": 9,
      "8": 10,
      "9": 11,
      "10": 12,
      "11": 13
    }; // 黑桃：spade
    // 红桃：heart
    // 梅花：club
    // 方片：diamond
    // const CardShape = {
    //     "S": 1,
    //     "H": 2,
    //     "C": 3,
    //     "D": 4,
    // };

    var cardShpae = {
      "1": 3,
      "2": 2,
      "3": 1,
      "4": 0
    };
    var Kings = {
      "14": 54,
      "15": 53
    };
    var spriteKey = '';

    if (card.shape) {
      spriteKey = 'card_' + (cardShpae[card.shape] * 13 + CardValue[card.value]);
    } else {
      spriteKey = 'card_' + Kings[card.king];
    } // console.log("spriteKey"+spriteKey)


    this.node.getComponent(cc.Sprite).spriteFrame = this.cards_sprite_atlas.getSpriteFrame(spriteKey);
    this.setTouchEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9wcmVmYWJzL2NhcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYXJkc19zcHJpdGVfYXRsYXMiLCJTcHJpdGVBdGxhcyIsIm9uTG9hZCIsImZsYWciLCJvZmZzZXRfeSIsIm5vZGUiLCJvbiIsImV2ZW50IiwieSIsImJpbmQiLCJydW5Ub0NlbnRlciIsInN0YXJ0IiwiaW5pdF9kYXRhIiwiZGF0YSIsInNldFRvdWNoRXZlbnQiLCJhY2NvdW50aWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJhY2NvdW50SUQiLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJnYW1lU2NlbmVfbm9kZSIsInBhcmVudCIsInJvb21fc3RhdGUiLCJnZXRDb21wb25lbnQiLCJyb29tc3RhdGUiLCJSb29tU3RhdGUiLCJST09NX1BMQVlJTkciLCJjb25zb2xlIiwibG9nIiwiY2FyZF9pZCIsImNhcmRkYXRhIiwiY2FyZF9kYXRhIiwiZW1pdCIsInNob3dDYXJkcyIsImNhcmQiLCJpbmRleCIsIkNhcmRWYWx1ZSIsImNhcmRTaHBhZSIsIktpbmdzIiwic3ByaXRlS2V5Iiwic2hhcGUiLCJ2YWx1ZSIsImtpbmciLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImdldFNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNYQyxrQkFBa0IsRUFBRUosRUFBRSxDQUFDSztFQURaLENBSFA7RUFRTEMsTUFSSyxvQkFRSztJQUNOLEtBQUtDLElBQUwsR0FBWSxLQUFaO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixFQUFoQjtJQUVBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGlCQUFiLEVBQStCLFVBQVNDLEtB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QUNkLEtBQUssQ0FEUztNQUVkLEtBQUssQ0FGUztNQUdkLEtBQUssQ0FIUztNQUlkLEtBQUs7SUFKUyxDQUFsQjtJQU1BLElBQU1DLEtBQUssR0FBRztNQUNWLE1BQU0sRUFESTtNQUVWLE1BQU07SUFGSSxDQUFkO0lBS0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCOztJQUNBLElBQUlMLElBQUksQ0FBQ00sS0FBVCxFQUFlO01BQ1hELFNBQVMsR0FBRyxXQUFXRixTQUFTLENBQUNILElBQUksQ0FBQ00sS0FBTixDQUFULEdBQXdCLEVBQXhCLEdBQTZCSixTQUFTLENBQUNGLElBQUksQ0FBQ08sS0FBTixDQUFqRCxDQUFaO0lBRUgsQ0FIRCxNQUdNO01BQ0ZGLFNBQVMsR0FBRyxVQUFVRCxLQUFLLENBQUNKLElBQUksQ0FBQ1EsSUFBTixDQUEzQjtJQUNILENBeEVvQixDQTBFdEI7OztJQUNDLEtBQUt2QyxJQUFMLENBQVVvQixZQUFWLENBQXVCN0IsRUFBRSxDQUFDaUQsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdELEtBQUs5QyxrQkFBTCxDQUF3QitDLGNBQXhCLENBQXVDTixTQUF2QyxDQUFoRDtJQUNBLEtBQUszQixhQUFMO0VBQ0g7QUFsSkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLi8uLi9teWdvbGJhbC5qc1wiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgIGNhcmRzX3Nwcml0ZV9hdGxhczogY2MuU3ByaXRlQXRsYXMsXG4gICAgIFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZVxuICAgICAgICB0aGlzLm9mZnNldF95ID0gMjBcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5vbihcInJlc2V0X2NhcmRfZmxhZ1wiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGlmKHRoaXMsZmxhZz09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcyxmbGFnID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm9mZnNldF95XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJjaHVfY2FyZF9zdWNjXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAvLyAgICB2YXIgY2h1X2NhcmRfbGlzdCA9IGV2ZW50XG4gICAgICAgIC8vICAgIGZvcih2YXIgaT0wO2k8Y2h1X2NhcmRfbGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgLy8gICAgIGlmKGNodV9jYXJkX2xpc3RbaV0uY2FyZF9pZD09dGhpcy5jYXJkX2lkKXtcbiAgICAgICAgLy8gICAgICAgICAvL3RoaXMucnVuVG9DZW50ZXIoY2h1X2NhcmRfbGlzdFtpXSlcbiAgICAgICAgLy8gICAgICAgICAvL3RoaXMubm9kZS5kZXN0b3J5KClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvLyB9LmJpbmQodGhpcykpXG4gICAgfSxcblxuICAgIHJ1blRvQ2VudGVyKCl7XG4gICAgICAgIC8v56e75Yqo5Yiw5bGP5bmV5Lit6Ze077yM5bm25bim5LiA5Liq54mM57yp5bCP55qE5pWI5p6cXG4gICAgfSxcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgaW5pdF9kYXRhKGRhdGEpe1xuXG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBzZXRUb3VjaEV2ZW50KCl7XG4gICAgICAgIGlmKHRoaXMuYWNjb3VudGlkPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgIHZhciBnYW1lU2NlbmVfbm9kZSA9IHRoaXMubm9kZS5wYXJlbnQgIFxuICAgICAgICAgICAgICAgIHZhciByb29tX3N0YXRlID0gZ2FtZVNjZW5lX25vZGUuZ2V0Q29tcG9uZW50KFwiZ2FtZVNjZW5lXCIpLnJvb21zdGF0ZVxuICAgICAgICAgICAgICAgIGlmKHJvb21fc3RhdGU9PVJvb21TdGF0ZS5ST09NX1BMQVlJTkcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPVUNIX1NUQVJUIGlkOlwiK3RoaXMuY2FyZF9pZClcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mbGFnPT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLm9mZnNldF95XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+mAmuefpWdhbWV1aeWxgumAieWumueahOeJjFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmRkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZGlkXCI6dGhpcy5jYXJkX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZF9kYXRhXCI6dGhpcy5jYXJkX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2NlbmVfbm9kZS5lbWl0KFwiY2hvb3NlX2NhcmRfZXZlbnRcIixjYXJkZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWc9ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMub2Zmc2V0X3lcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6YCa55+lZ2FtZVVJ5Y+W5raI5LqG6YKj5byg54mMXG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWVTY2VuZV9ub2RlLmVtaXQoXCJ1bmNob29zZV9jYXJkX2V2ZW50XCIsdGhpcy5jYXJkX2lkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0sXG4gICAgc2hvd0NhcmRzKGNhcmQsYWNjb3VudGlkKXtcbiAgICAgICAgLy9jYXJkLmluZGV45piv5pyN5Yqh5Zmo55Sf5oiQY2FyZOe7meWvueixoeiuvue9rueahOS4gOWJr+eJjOmHjOWUr+S4gGlkXG4gICAgICAgIHRoaXMuY2FyZF9pZCA9IGNhcmQuaW5kZXhcbiAgICAgICAgLy/kvKDlhaXlj4LmlbAgY2FyZD17XCJ2YWx1ZVwiOjUsXCJzaGFwZVwiOjEsXCJpbmRleFwiOjIwfVxuICAgICAgICB0aGlzLmNhcmRfZGF0YSA9IGNhcmRcbiAgICAgICAgaWYoYWNjb3VudGlkKXtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudGlkID0gYWNjb3VudGlkIC8v5qCH6K+GY2FyZOWxnuS6jueahOeOqeWutlxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gXG4gICAgICAgIC8v5pyN5Yqh5Zmo5a6a5LmJ54mM55qE6KGo56S6XG4gICAgICAgIC8vIGNvbnN0IGNhcmR2YWx1ZSA9IHtcbiAgICAgICAgLy8gICAgIFwiQVwiOiAxMixcbiAgICAgICAgLy8gICAgIFwiMlwiOiAxMyxcbiAgICAgICAgLy8gICAgIFwiM1wiOiAxLFxuICAgICAgICAvLyAgICAgXCI0XCI6IDIsXG4gICAgICAgIC8vICAgICBcIjVcIjogMyxcbiAgICAgICAgLy8gICAgIFwiNlwiOiA0LFxuICAgICAgICAvLyAgICAgXCI3XCI6IDUsXG4gICAgICAgIC8vICAgICBcIjhcIjogNixcbiAgICAgICAgLy8gICAgIFwiOVwiOiA3LFxuICAgICAgICAvLyAgICAgXCIxMFwiOiA4LFxuICAgICAgICAvLyAgICAgXCJKXCI6IDksXG4gICAgICAgIC8vICAgICBcIlFcIjogMTAsXG4gICAgICAgIC8vICAgICBcIktcIjogMTEsXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIC8v5pyN5Yqh5Zmo6L+U5Zue55qE5piva2V5LHZhbHVl5a+55bqU55qE5piv6LWE5rqQ55qE57yW5Y+3XG4gICAgICAgIGNvbnN0IENhcmRWYWx1ZSA9IHtcbiAgICAgICAgICAgIFwiMTJcIjogMSxcbiAgICAgICAgICAgIFwiMTNcIjogMixcbiAgICAgICAgICAgIFwiMVwiOiAzLFxuICAgICAgICAgICAgXCIyXCI6IDQsXG4gICAgICAgICAgICBcIjNcIjogNSxcbiAgICAgICAgICAgIFwiNFwiOiA2LFxuICAgICAgICAgICAgXCI1XCI6IDcsXG4gICAgICAgICAgICBcIjZcIjogOCxcbiAgICAgICAgICAgIFwiN1wiOiA5LFxuICAgICAgICAgICAgXCI4XCI6IDEwLFxuICAgICAgICAgICAgXCI5XCI6IDExLFxuICAgICAgICAgICAgXCIxMFwiOiAxMixcbiAgICAgICAgICAgIFwiMTFcIjogMTNcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDpu5HmoYPvvJpzcGFkZVxuICAgICAgICAvLyDnuqLmoYPvvJpoZWFydFxuICAgICAgICAvLyDmooXoirHvvJpjbHViXG4gICAgICAgIC8vIOaWueeJh++8mmRpYW1vbmRcbiAgICAgICAgLy8gY29uc3QgQ2FyZFNoYXBlID0ge1xuICAgICAgICAvLyAgICAgXCJTXCI6IDEsXG4gICAgICAgIC8vICAgICBcIkhcIjogMixcbiAgICAgICAgLy8gICAgIFwiQ1wiOiAzLFxuICAgICAgICAvLyAgICAgXCJEXCI6IDQsXG4gICAgICAgIC8vIH07XG4gICAgICAgIGNvbnN0IGNhcmRTaHBhZSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiAzLFxuICAgICAgICAgICAgXCIyXCI6IDIsXG4gICAgICAgICAgICBcIjNcIjogMSxcbiAgICAgICAgICAgIFwiNFwiOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IEtpbmdzID0ge1xuICAgICAgICAgICAgXCIxNFwiOiA1NCxcbiAgICAgICAgICAgIFwiMTVcIjogNTNcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3ByaXRlS2V5ID0gJyc7XG4gICAgICAgIGlmIChjYXJkLnNoYXBlKXtcbiAgICAgICAgICAgIHNwcml0ZUtleSA9ICdjYXJkXycgKyAoY2FyZFNocGFlW2NhcmQuc2hhcGVdICogMTMgKyBDYXJkVmFsdWVbY2FyZC52YWx1ZV0pO1xuXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHNwcml0ZUtleSA9ICdjYXJkXycgKyBLaW5nc1tjYXJkLmtpbmddO1xuICAgICAgICB9XG5cbiAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwcml0ZUtleVwiK3Nwcml0ZUtleSlcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkc19zcHJpdGVfYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlS2V5KVxuICAgICAgICB0aGlzLnNldFRvdWNoRXZlbnQoKVxuICAgIH1cbn0pO1xuXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/util/waitnode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17318Pv1MxELb6d+o/SHo0s', 'waitnode');
// scripts/util/waitnode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    loadimage_target: cc.Node,
    _isShow: false,
    lblContent: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.node.active = this._isShow;
  },
  update: function update(dt) {
    this.loadimage_target.rotation = this.loadimage_target.rotation - dt * 45;
  },
  //content为label显示的内容
  show: function show(content) {
    this._isShow = true;

    if (this.node) {
      this.node.active = this._isShow;
    }

    if (this.lblContent) {
      if (content == null) {
        content = "";
      }

      this.lblContent.string = content;
    }
  },
  hide: function hide() {
    this._isShow = false;

    if (this.node) {
      this.node.active = this._isShow;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWwvd2FpdG5vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb2FkaW1hZ2VfdGFyZ2V0IiwiTm9kZSIsIl9pc1Nob3ciLCJsYmxDb250ZW50IiwiTGFiZWwiLCJzdGFydCIsIm5vZGUiLCJhY3RpdmUiLCJ1cGRhdGUiLCJkdCIsInJvdGF0aW9uIiwic2hvdyIsImNvbnRlbnQiLCJzdHJpbmciLCJoaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsZ0JBQWdCLEVBQUNKLEVBQUUsQ0FBQ0ssSUFEWjtJQUVSQyxPQUFPLEVBQUMsS0FGQTtJQUdSQyxVQUFVLEVBQUNQLEVBQUUsQ0FBQ1E7RUFITixDQUhQO0VBU0w7RUFFQTtFQUVBQyxLQWJLLG1CQWFJO0lBQ0wsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQUtMLE9BQXhCO0VBQ0gsQ0FmSTtFQWlCTE0sTUFqQkssa0JBaUJHQyxFQWpCSCxFQWlCTztJQUNSLEtBQUtULGdCQUFMLENBQXNCVSxRQUF0QixHQUFpQyxLQUFLVixnQkFBTCxDQUFzQlUsUUFBdEIsR0FBaUNELEVBQUUsR0FBQyxFQUFyRTtFQUNILENBbkJJO0VBcUJMO0VBQ0FFLElBdEJLLGdCQXNCQUMsT0F0QkEsRUFzQlE7SUFDVCxLQUFLVixPQUFMLEdBQWUsSUFBZjs7SUFDQSxJQUFHLEtBQUtJLElBQVIsRUFBYTtNQUNULEtBQUtBLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFLTCxPQUF4QjtJQUNIOztJQUNELElBQUcsS0FBS0MsVUFBUixFQUFtQjtNQUNmLElBQUdTLE9BQU8sSUFBSSxJQUFkLEVBQW1CO1FBQ2ZBLE9BQU8sR0FBRyxFQUFWO01BQ0g7O01BQ0QsS0FBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUJELE9BQXpCO0lBQ0g7RUFDSixDQWpDSTtFQW1DTEUsSUFuQ0ssa0JBbUNDO0lBQ0YsS0FBS1osT0FBTCxHQUFlLEtBQWY7O0lBQ0EsSUFBRyxLQUFLSSxJQUFSLEVBQWE7TUFDVCxLQUFLQSxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBS0wsT0FBeEI7SUFDSDtFQUNKO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbG9hZGltYWdlX3RhcmdldDpjYy5Ob2RlLFxuICAgICAgICBfaXNTaG93OmZhbHNlLFxuICAgICAgICBsYmxDb250ZW50OmNjLkxhYmVsLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuX2lzU2hvdztcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLmxvYWRpbWFnZV90YXJnZXQucm90YXRpb24gPSB0aGlzLmxvYWRpbWFnZV90YXJnZXQucm90YXRpb24gLSBkdCo0NTtcbiAgICB9LFxuXG4gICAgLy9jb250ZW505Li6bGFiZWzmmL7npLrnmoTlhoXlrrlcbiAgICBzaG93KGNvbnRlbnQpe1xuICAgICAgICB0aGlzLl9pc1Nob3cgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLm5vZGUpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuX2lzU2hvdzsgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxibENvbnRlbnQpe1xuICAgICAgICAgICAgaWYoY29udGVudCA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGJsQ29udGVudC5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhpZGUoKXtcbiAgICAgICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMubm9kZSl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5faXNTaG93OyAgIFxuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/data/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec2a0fYPv1ASr8YTOKp3Np/', 'player');
// scripts/data/player.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getRandomStr = function getRandomStr(count) {
  var str = '';

  for (var i = 0; i < count; i++) {
    str += Math.floor(Math.random() * 10);
  }

  return str;
};

var playerData = function playerData() {
  var that = {}; //that.uniqueID = "200000";
  //that.uniqueID = "1328014"

  that.uniqueID = 1 + getRandomStr(6);
  that.accountID = "2" + getRandomStr(6);
  that.nickName = "tiny" + getRandomStr(3);
  var str = "avatar_" + (Math.floor(Math.random() * 3) + 1);
  that.avatarUrl = str; //随机一个头像

  that.gobal_count = 0;
  that.master_accountid = 0;
  return that;
};

var _default = playerData;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvcGxheWVyLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbVN0ciIsImNvdW50Iiwic3RyIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYXllckRhdGEiLCJ0aGF0IiwidW5pcXVlSUQiLCJhY2NvdW50SUQiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdvYmFsX2NvdW50IiwibWFzdGVyX2FjY291bnRpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxLQUFWLEVBQWlCO0VBQ2xDLElBQUlDLEdBQUcsR0FBRyxFQUFWOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBaUJBLENBQUMsR0FBR0YsS0FBckIsRUFBNkJFLENBQUMsRUFBOUIsRUFBa0M7SUFDOUJELEdBQUcsSUFBSUUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFQO0VBQ0g7O0VBQ0QsT0FBT0osR0FBUDtBQUNILENBTkQ7O0FBUUEsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVTtFQUN6QixJQUFJQyxJQUFJLEdBQUcsRUFBWCxDQUR5QixDQUd6QjtFQUNBOztFQUNBQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsSUFBSVQsWUFBWSxDQUFDLENBQUQsQ0FBaEM7RUFDQVEsSUFBSSxDQUFDRSxTQUFMLEdBQWlCLE1BQU1WLFlBQVksQ0FBQyxDQUFELENBQW5DO0VBQ0FRLElBQUksQ0FBQ0csUUFBTCxHQUFnQixTQUFTWCxZQUFZLENBQUMsQ0FBRCxDQUFyQztFQUNBLElBQUlFLEdBQUcsR0FBRyxhQUFhRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLElBQWdDLENBQTdDLENBQVY7RUFDQUUsSUFBSSxDQUFDSSxTQUFMLEdBQWlCVixHQUFqQixDQVR5QixDQVNGOztFQUN2Qk0sSUFBSSxDQUFDSyxXQUFMLEdBQW1CLENBQW5CO0VBQ0FMLElBQUksQ0FBQ00sZ0JBQUwsR0FBc0IsQ0FBdEI7RUFDQSxPQUFPTixJQUFQO0FBQ0gsQ0FiRDs7ZUFlZUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFJhbmRvbVN0ciA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBjb3VudCA7IGkgKyspe1xuICAgICAgICBzdHIgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgcGxheWVyRGF0YSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRoYXQgPSB7fVxuXG4gICAgLy90aGF0LnVuaXF1ZUlEID0gXCIyMDAwMDBcIjtcbiAgICAvL3RoYXQudW5pcXVlSUQgPSBcIjEzMjgwMTRcIlxuICAgIHRoYXQudW5pcXVlSUQgPSAxICsgZ2V0UmFuZG9tU3RyKDYpXG4gICAgdGhhdC5hY2NvdW50SUQgPSBcIjJcIiArIGdldFJhbmRvbVN0cig2KVxuICAgIHRoYXQubmlja05hbWUgPSBcInRpbnlcIiArIGdldFJhbmRvbVN0cigzKVxuICAgIHZhciBzdHIgPSBcImF2YXRhcl9cIiArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDEpXG4gICAgdGhhdC5hdmF0YXJVcmwgPSBzdHIgICAvL+maj+acuuS4gOS4quWktOWDj1xuICAgIHRoYXQuZ29iYWxfY291bnQgPSAwXG4gICAgdGhhdC5tYXN0ZXJfYWNjb3VudGlkPTBcbiAgICByZXR1cm4gdGhhdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRGF0YVxuIl19
//------QC-SOURCE-SPLIT------
