
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