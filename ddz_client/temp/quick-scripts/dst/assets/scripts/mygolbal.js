
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