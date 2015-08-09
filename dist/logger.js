System.register("logger", [], function (_export) {
    "use strict";

    var Logger;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            Logger = (function () {
                function Logger() {
                    _classCallCheck(this, Logger);

                    console.log("Welcome to TypeScript Playground!");
                }

                _createClass(Logger, [{
                    key: "log",
                    value: function log(val) {
                        console.log(val);
                    }
                }]);

                return Logger;
            })();

            _export("Logger", Logger);
        }
    };
});