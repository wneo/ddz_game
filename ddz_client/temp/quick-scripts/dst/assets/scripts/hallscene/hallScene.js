
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