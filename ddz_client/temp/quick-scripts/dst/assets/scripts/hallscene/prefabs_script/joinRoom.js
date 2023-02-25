
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