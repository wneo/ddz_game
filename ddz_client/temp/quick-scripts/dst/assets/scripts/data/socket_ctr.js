
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvc29ja2V0X2N0ci5qcyJdLCJuYW1lcyI6WyJzb2NrZXRDdHIiLCJ0aGF0IiwicmVzcG9uZV9tYXAiLCJjYWxsX2luZGV4IiwiX3NvY2tldCIsImV2ZW50IiwiZXZlbnRsaXN0ZXIiLCJfc2VuZG1zZyIsImNtZHR5cGUiLCJyZXEiLCJjYWxsaW5kZXgiLCJlbWl0IiwiY21kIiwiZGF0YSIsIl9yZXF1ZXN0IiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImluaXRTb2NrZXQiLCJvcHRzIiwid2luZG93IiwiaW8iLCJjb25uZWN0IiwiZGVmaW5lcyIsInNlcnZlclVybCIsIm9uIiwicmVzIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsQmFja0luZGV4IiwicmVzdWx0IiwidHlwZSIsImZpcmUiLCJyZXF1ZXN0X3d4TG9naW4iLCJyZXF1ZXN0X2NyZWF0cm9vbSIsInJlcXVlc3RfamlvbiIsInJlcXVlc3RfZW50ZXJfcm9vbSIsInJlcXVlc3RfYnVjaHVfY2FyZCIsInJlcXVlc3RfY2h1X2NhcmQiLCJvblBsYXllckpvaW5Sb29tIiwib25QbGF5ZXJSZWFkeSIsIm9uR2FtZVN0YXJ0Iiwib25DaGFuZ2VIb3VzZU1hbmFnZSIsInJlcXVlc3RSZWFkeSIsInJlcXVlc3RTdGFydCIsInJlcXVlc3RSb2JTdGF0ZSIsInN0YXRlIiwib25QdXNoQ2FyZHMiLCJvbkNhblJvYlN0YXRlIiwib25Sb2JTdGF0ZSIsIm9uQ2hhbmdlTWFzdGVyIiwib25TaG93Qm90dG9tQ2FyZCIsIm9uQ2FuQ2h1Q2FyZCIsIm9uUm9vbUNoYW5nZVN0YXRlIiwib25PdGhlclBsYXllckNodUNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFVO0VBQ3hCLElBQUlDLElBQUksR0FBRyxFQUFYO0VBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0VBQ0EsSUFBSUMsVUFBVSxHQUFHLENBQWpCO0VBRUEsSUFBSUMsT0FBTyxHQUFHLElBQWQ7RUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBQUMsd0JBQUEsRUFBWSxFQUFaLENBQVo7O0VBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFpQkMsR0FBakIsRUFBcUJDLFNBQXJCLEVBQStCO0lBQzVDTixPQUFPLENBQUNPLElBQVIsQ0FBYSxRQUFiLEVBQXNCO01BQUNDLEdBQUcsRUFBQ0osT0FBTDtNQUFhSyxJQUFJLEVBQUNKLEdBQWxCO01BQXNCQyxTQUFTLEVBQUNBO0lBQWhDLENBQXRCO0VBQ0gsQ0FGRDs7RUFJQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTTixPQUFULEVBQWlCQyxHQUFqQixFQUFxQk0sUUFBckIsRUFBOEI7SUFDM0NDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVlULE9BQVosR0FBb0IsSUFBcEIsR0FBMEJVLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixHQUFmLENBQXRDO0lBQ0FOLFVBQVU7SUFDVkQsV0FBVyxDQUFDQyxVQUFELENBQVgsR0FBMEJZLFFBQTFCOztJQUNBUixRQUFRLENBQUNDLE9BQUQsRUFBU0MsR0FBVCxFQUFhTixVQUFiLENBQVI7RUFDSCxDQUxEOztFQVFBRixJQUFJLENBQUNtQixVQUFMLEdBQWtCLFlBQVU7SUFDeEIsSUFBSUMsSUFBSSxHQUFHO01BQ1AsZ0JBQWUsS0FEUjtNQUVQLHdCQUF3QixJQUZqQjtNQUdQLGNBQWEsQ0FBQyxXQUFELEVBQWMsU0FBZDtJQUhOLENBQVg7SUFLQWpCLE9BQU8sR0FBR2tCLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxPQUFPLENBQUNDLFNBQTFCLEVBQW9DTCxJQUFwQyxDQUFWOztJQUVBakIsT0FBTyxDQUFDdUIsRUFBUixDQUFXLFlBQVgsRUFBd0IsWUFBVTtNQUM5QlgsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7SUFDRCxDQUZIOztJQUlEYixPQUFPLENBQUN1QixFQUFSLENBQVcsUUFBWCxFQUFvQixVQUFTQyxHQUFULEVBQWE7TUFDL0JaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFtQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVTLEdBQWYsQ0FBL0I7O01BQ0EsSUFBRzFCLFdBQVcsQ0FBQzJCLGNBQVosQ0FBMkJELEdBQUcsQ0FBQ0UsYUFBL0IsQ0FBSCxFQUFpRDtRQUMvQyxJQUFJZixRQUFRLEdBQUdiLFdBQVcsQ0FBQzBCLEdBQUcsQ0FBQ0UsYUFBTCxDQUExQjs7UUFDQSxJQUFHZixRQUFILEVBQVk7VUFDUkEsUUFBUSxDQUFDYSxHQUFHLENBQUNHLE1BQUwsRUFBWUgsR0FBRyxDQUFDZixJQUFoQixDQUFSO1FBQ0g7TUFDRCxDQUxGLE1BS007UUFDSjtRQUNBO1FBRUk7UUFDUDtRQUNBO1FBQ0E7UUFDTTtRQUNBLElBQUltQixJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ksSUFBZjtRQUNBM0IsS0FBSyxDQUFDNEIsSUFBTixDQUFXRCxJQUFYLEVBQWdCSixHQUFHLENBQUNmLElBQXBCLEVBVkMsQ0FXTDtNQUVBO0lBRUQsQ0F0QkY7RUF3QkYsQ0FwQ0Q7O0VBc0NBWixJQUFJLENBQUNpQyxlQUFMLEdBQXVCLFVBQVN6QixHQUFULEVBQWFNLFFBQWIsRUFBc0I7SUFDekNELFFBQVEsQ0FBQyxTQUFELEVBQVdMLEdBQVgsRUFBZU0sUUFBZixDQUFSO0VBQ0gsQ0FGRDs7RUFJQWQsSUFBSSxDQUFDa0MsaUJBQUwsR0FBeUIsVUFBUzFCLEdBQVQsRUFBYU0sUUFBYixFQUFzQjtJQUMzQ0QsUUFBUSxDQUFDLGdCQUFELEVBQWtCTCxHQUFsQixFQUFzQk0sUUFBdEIsQ0FBUjtFQUNILENBRkQ7O0VBSUFkLElBQUksQ0FBQ21DLFlBQUwsR0FBb0IsVUFBUzNCLEdBQVQsRUFBYU0sUUFBYixFQUFzQjtJQUN0Q0QsUUFBUSxDQUFDLGNBQUQsRUFBZ0JMLEdBQWhCLEVBQW9CTSxRQUFwQixDQUFSO0VBQ0gsQ0FGRDs7RUFJQWQsSUFBSSxDQUFDb0Msa0JBQUwsR0FBMEIsVUFBUzVCLEdBQVQsRUFBYU0sUUFBYixFQUFzQjtJQUM1Q0QsUUFBUSxDQUFDLGVBQUQsRUFBaUJMLEdBQWpCLEVBQXFCTSxRQUFyQixDQUFSO0VBQ0gsQ0FGRCxDQXJFd0IsQ0F5RXhCOzs7RUFDQWQsSUFBSSxDQUFDcUMsa0JBQUwsR0FBMkIsVUFBUzdCLEdBQVQsRUFBYU0sUUFBYixFQUFzQjtJQUM3Q0QsUUFBUSxDQUFDLGlCQUFELEVBQW1CTCxHQUFuQixFQUF1Qk0sUUFBdkIsQ0FBUjtFQUNILENBRkQ7RUFHQTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7RUFFSWQsSUFBSSxDQUFDc0MsZ0JBQUwsR0FBd0IsVUFBUzlCLEdBQVQsRUFBYU0sUUFBYixFQUFzQjtJQUMxQ0QsUUFBUSxDQUFDLGNBQUQsRUFBZ0JMLEdBQWhCLEVBQW9CTSxRQUFwQixDQUFSO0VBQ0gsQ0FGRCxDQW5Gd0IsQ0FzRnhCOzs7RUFDQWQsSUFBSSxDQUFDdUMsZ0JBQUwsR0FBd0IsVUFBU3pCLFFBQVQsRUFBa0I7SUFDckNWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyx3QkFBVCxFQUFrQ1osUUFBbEM7RUFDSixDQUZEOztFQUlBZCxJQUFJLENBQUN3QyxhQUFMLEdBQXFCLFVBQVMxQixRQUFULEVBQWtCO0lBQ25DVixLQUFLLENBQUNzQixFQUFOLENBQVMscUJBQVQsRUFBK0JaLFFBQS9CO0VBQ0gsQ0FGRDs7RUFJQWQsSUFBSSxDQUFDeUMsV0FBTCxHQUFtQixVQUFTM0IsUUFBVCxFQUFrQjtJQUNqQyxJQUFHQSxRQUFILEVBQVk7TUFDVFYsS0FBSyxDQUFDc0IsRUFBTixDQUFTLGtCQUFULEVBQTRCWixRQUE1QjtJQUNGO0VBQ0osQ0FKRDs7RUFNQWQsSUFBSSxDQUFDMEMsbUJBQUwsR0FBMkIsVUFBUzVCLFFBQVQsRUFBa0I7SUFDekMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUywwQkFBVCxFQUFvQ1osUUFBcEM7SUFDSDtFQUNKLENBSkQsQ0FyR3dCLENBMEd4Qjs7O0VBQ0FkLElBQUksQ0FBQzJDLFlBQUwsR0FBb0IsWUFBVTtJQUMxQnJDLFFBQVEsQ0FBQyxxQkFBRCxFQUF1QixFQUF2QixFQUEwQixJQUExQixDQUFSO0VBQ0gsQ0FGRDs7RUFJQU4sSUFBSSxDQUFDNEMsWUFBTCxHQUFvQixVQUFTOUIsUUFBVCxFQUFrQjtJQUNsQ0QsUUFBUSxDQUFDLHFCQUFELEVBQXVCLEVBQXZCLEVBQTBCQyxRQUExQixDQUFSO0VBQ0gsQ0FGRCxDQS9Hd0IsQ0FtSHhCOzs7RUFDQWQsSUFBSSxDQUFDNkMsZUFBTCxHQUF1QixVQUFTQyxLQUFULEVBQWU7SUFDbEN4QyxRQUFRLENBQUMsbUJBQUQsRUFBcUJ3QyxLQUFyQixFQUEyQixJQUEzQixDQUFSO0VBQ0gsQ0FGRCxDQXBId0IsQ0F1SHhCOzs7RUFDQTlDLElBQUksQ0FBQytDLFdBQUwsR0FBbUIsVUFBU2pDLFFBQVQsRUFBa0I7SUFDakMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyxpQkFBVCxFQUEyQlosUUFBM0I7SUFDRjtFQUNMLENBSkQsQ0F4SHdCLENBOEh4Qjs7O0VBQ0FkLElBQUksQ0FBQ2dELGFBQUwsR0FBcUIsVUFBU2xDLFFBQVQsRUFBa0I7SUFDbkMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyxlQUFULEVBQXlCWixRQUF6QjtJQUNGO0VBQ0wsQ0FKRCxDQS9Id0IsQ0FxSXhCOzs7RUFDQWQsSUFBSSxDQUFDaUQsVUFBTCxHQUFrQixVQUFTbkMsUUFBVCxFQUFrQjtJQUNoQyxJQUFHQSxRQUFILEVBQVk7TUFDUlYsS0FBSyxDQUFDc0IsRUFBTixDQUFTLHFCQUFULEVBQStCWixRQUEvQjtJQUNGO0VBQ0wsQ0FKRCxDQXRJd0IsQ0E0SXhCOzs7RUFDQWQsSUFBSSxDQUFDa0QsY0FBTCxHQUFzQixVQUFTcEMsUUFBVCxFQUFrQjtJQUNwQyxJQUFHQSxRQUFILEVBQVk7TUFDUlYsS0FBSyxDQUFDc0IsRUFBTixDQUFTLHNCQUFULEVBQWdDWixRQUFoQztJQUNGO0VBQ0wsQ0FKRCxDQTdJd0IsQ0FtSnhCOzs7RUFDQWQsSUFBSSxDQUFDbUQsZ0JBQUwsR0FBd0IsVUFBU3JDLFFBQVQsRUFBa0I7SUFDdEMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyx3QkFBVCxFQUFrQ1osUUFBbEM7SUFDRjtFQUNMLENBSkQsQ0FwSndCLENBMEp4Qjs7O0VBQ0FkLElBQUksQ0FBQ29ELFlBQUwsR0FBb0IsVUFBU3RDLFFBQVQsRUFBa0I7SUFDbEMsSUFBR0EsUUFBSCxFQUFZO01BQ1JWLEtBQUssQ0FBQ3NCLEVBQU4sQ0FBUyxxQkFBVCxFQUErQlosUUFBL0I7SUFDSDtFQUNKLENBSkQ7O0VBTUFkLElBQUksQ0FBQ3FELGlCQUFMLEdBQXlCLFVBQVN2QyxRQUFULEVBQWtCO0lBQ3ZDLElBQUdBLFFBQUgsRUFBWTtNQUNSVixLQUFLLENBQUNzQixFQUFOLENBQVMsbUJBQVQsRUFBNkJaLFFBQTdCO0lBQ0g7RUFDSixDQUpEOztFQU1BZCxJQUFJLENBQUNzRCxvQkFBTCxHQUE0QixVQUFTeEMsUUFBVCxFQUFrQjtJQUMxQyxJQUFHQSxRQUFILEVBQVk7TUFDUlYsS0FBSyxDQUFDc0IsRUFBTixDQUFTLHNCQUFULEVBQWdDWixRQUFoQztJQUNIO0VBQ0osQ0FKRDs7RUFLQSxPQUFPZCxJQUFQO0FBQ0gsQ0E3S0Q7O2VBK0tlRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50bGlzdGVyIGZyb20gXCIuLi91dGlsL2V2ZW50X2xpc3Rlci5qc1wiXG5cbmNvbnN0IHNvY2tldEN0ciA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRoYXQgPSB7fVxuICAgIHZhciByZXNwb25lX21hcCA9IHt9IFxuICAgIHZhciBjYWxsX2luZGV4ID0gMFxuXG4gICAgdmFyIF9zb2NrZXQgPSBudWxsXG4gICAgdmFyIGV2ZW50ID0gZXZlbnRsaXN0ZXIoe30pXG4gICAgY29uc3QgX3NlbmRtc2cgPSBmdW5jdGlvbihjbWR0eXBlLHJlcSxjYWxsaW5kZXgpe1xuICAgICAgICBfc29ja2V0LmVtaXQoXCJub3RpZnlcIix7Y21kOmNtZHR5cGUsZGF0YTpyZXEsY2FsbGluZGV4OmNhbGxpbmRleH0pXG4gICAgfSBcbiBcbiAgICBjb25zdCBfcmVxdWVzdCA9IGZ1bmN0aW9uKGNtZHR5cGUscmVxLGNhbGxiYWNrKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kIGNtZDpcIitjbWR0eXBlK1wiICBcIisgSlNPTi5zdHJpbmdpZnkocmVxKSlcbiAgICAgICAgY2FsbF9pbmRleCsrIFxuICAgICAgICByZXNwb25lX21hcFtjYWxsX2luZGV4XSA9IGNhbGxiYWNrXG4gICAgICAgIF9zZW5kbXNnKGNtZHR5cGUscmVxLGNhbGxfaW5kZXgpXG4gICAgfSBcbiAgXG4gICAgICAgIFxuICAgIHRoYXQuaW5pdFNvY2tldCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgJ3JlY29ubmVjdGlvbic6ZmFsc2UsXG4gICAgICAgICAgICAnZm9yY2UgbmV3IGNvbm5lY3Rpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ3RyYW5zcG9ydHMnOlsnd2Vic29ja2V0JywgJ3BvbGxpbmcnXVxuICAgICAgICB9XG4gICAgICAgIF9zb2NrZXQgPSB3aW5kb3cuaW8uY29ubmVjdChkZWZpbmVzLnNlcnZlclVybCxvcHRzKTtcblxuICAgICAgICBfc29ja2V0Lm9uKFwiY29ubmVjdGlvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Qgc2VydmVyIHN1Y2Nlc3MhIVwiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICBfc29ja2V0Lm9uKFwibm90aWZ5XCIsZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib24gbm90aWZ5IGNtZDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXG4gICAgICAgICBpZihyZXNwb25lX21hcC5oYXNPd25Qcm9wZXJ0eShyZXMuY2FsbEJhY2tJbmRleCkpe1xuICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSByZXNwb25lX21hcFtyZXMuY2FsbEJhY2tJbmRleF1cbiAgICAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgICAgY2FsbGJhY2socmVzLnJlc3VsdCxyZXMuZGF0YSlcbiAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAvL2lmKHJlcy5jYWxsQmFja0luZGV4IT0wKXtcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vdCBmb3VuZCBjYWxsIGluZGV4XCIscmVzLmNhbGxCYWNrSW5kZXgpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgLy/mj5DkuqTkuIDkuKrnm5HlkKznmoTkuovku7bnu5nnm5HlkKzlmahcbiAgICAgICAgLy8gIG9uIG5vdGlmeSBjbWQ6e1widHlwZVwiOlwicGxheWVyX2pvaW5yb29tX25vdGlmeVwiLFwicmVzdWx0XCI6MCxcImRhdGFcIjpcbiAgICAgICAgLy8gIHtcImFjY291bnRpZFwiOlwiMjU4NjQyMlwiLFwibmlja19uYW1lXCI6XCJ0aW55MTEwXCIsXCJhdmF0YXJVcmxcIjpcbiAgICAgICAgLy8gIFwiYXZhdGFyXzNcIixcImdvbGRjb3VudFwiOjEwMDAsXCJzZWF0aW5kZXhcIjoyfSxcImNhbGxCYWNrSW5kZXhcIjpudWxsfVxuICAgICAgICAgICAgICAvL+ayoeacieaJvuWIsOWbnuWIsOWHveaVsO+8jOWwsee7meS6i+S7tuebkeWQrOWZqOaPkOS6pOS4gOS4quS6i+S7tlxuICAgICAgICAgICAgICB2YXIgdHlwZSA9IHJlcy50eXBlXG4gICAgICAgICAgICAgIGV2ZW50LmZpcmUodHlwZSxyZXMuZGF0YSlcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB0aGF0LnJlcXVlc3Rfd3hMb2dpbiA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwid3hsb2dpblwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG4gICAgXG4gICAgdGhhdC5yZXF1ZXN0X2NyZWF0cm9vbSA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiY3JlYXRlcm9vbV9yZXFcIixyZXEsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdGhhdC5yZXF1ZXN0X2ppb24gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcImpvaW5yb29tX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICB0aGF0LnJlcXVlc3RfZW50ZXJfcm9vbSA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiZW50ZXJyb29tX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICAvL+WPkemAgeS4jeWHuueJjOS/oeaBr1xuICAgIHRoYXQucmVxdWVzdF9idWNodV9jYXJkID0gIGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiY2h1X2J1X2NhcmRfcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cbiAgICAvKueOqeWutuWHuueJjFxuICAgICAg6ZyA6KaB5Yik5patOiBcbiAgICAgICAgIOWHuueahOeJjOaYr+WQpuespuWQiOinhOWImVxuICAgICAgICAg5ZKM5LiK5Liq5Ye654mM546p5a625q+U6L6D77yM5piv5ZCm5ruh6Laz5p2h5Lu2XG5cbiAgICAqL1xuICAgIHRoYXQucmVxdWVzdF9jaHVfY2FyZCA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgIF9yZXF1ZXN0KFwiY2h1X2NhcmRfcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cbiAgICAvL+ebkeWQrOWFtuS7lueOqeWutui/m+WFpeaIv+mXtOa2iOaBr1xuICAgIHRoYXQub25QbGF5ZXJKb2luUm9vbSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgIGV2ZW50Lm9uKFwicGxheWVyX2pvaW5yb29tX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgIH1cblxuICAgIHRoYXQub25QbGF5ZXJSZWFkeSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgZXZlbnQub24oXCJwbGF5ZXJfcmVhZHlfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdGhhdC5vbkdhbWVTdGFydCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICBldmVudC5vbihcImdhbWVTdGFydF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25DaGFuZ2VIb3VzZU1hbmFnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjaGFuZ2Vob3VzZW1hbmFnZV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+WPkemAgXJlYWR55raI5oGvXG4gICAgdGhhdC5yZXF1ZXN0UmVhZHkgPSBmdW5jdGlvbigpe1xuICAgICAgICBfc2VuZG1zZyhcInBsYXllcl9yZWFkeV9ub3RpZnlcIix7fSxudWxsKVxuICAgIH1cblxuICAgIHRoYXQucmVxdWVzdFN0YXJ0ID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcInBsYXllcl9zdGFydF9ub3RpZnlcIix7fSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICAvL+eOqeWutumAmuefpeacjeWKoeWZqOaKouWcsOS4u+a2iOaBr1xuICAgIHRoYXQucmVxdWVzdFJvYlN0YXRlID0gZnVuY3Rpb24oc3RhdGUpe1xuICAgICAgICBfc2VuZG1zZyhcInBsYXllcl9yb2Jfbm90aWZ5XCIsc3RhdGUsbnVsbClcbiAgICB9XG4gICAgLy/mnI3liqHlmajkuIvlj5HniYzpgJrnn6VcbiAgICB0aGF0Lm9uUHVzaENhcmRzID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcInB1c2hjYXJkX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5Zmo6YCa55+l5byA5aeL5oqi5Zyw5Li75raI5oGvXG4gICAgdGhhdC5vbkNhblJvYlN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNhbnJvYl9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqDrpgJrnn6XosIHmiqLlnLDkuLvmk43kvZzmtojmga9cbiAgICB0aGF0Lm9uUm9iU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2Fucm9iX3N0YXRlX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuehruWumuWcsOS4u+a2iOaBr1xuICAgIHRoYXQub25DaGFuZ2VNYXN0ZXIgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2hhbmdlX21hc3Rlcl9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqDrmmL7npLrlupXniYzmtojmga9cbiAgICB0aGF0Lm9uU2hvd0JvdHRvbUNhcmQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2hhbmdlX3Nob3djYXJkX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuWPr+S7peWHuueJjOa2iOaBr1xuICAgIHRoYXQub25DYW5DaHVDYXJkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNhbl9jaHVfY2FyZF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25Sb29tQ2hhbmdlU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwicm9vbV9zdGF0ZV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25PdGhlclBsYXllckNodUNhcmQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwib3RoZXJfY2h1Y2FyZF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhhdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXRDdHIgIl19