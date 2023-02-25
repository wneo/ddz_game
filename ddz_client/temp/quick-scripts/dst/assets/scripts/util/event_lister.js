
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