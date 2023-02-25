
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