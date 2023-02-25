
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