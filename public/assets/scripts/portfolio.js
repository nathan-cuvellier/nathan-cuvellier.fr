"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author Nathan CUVELLIER <cuvellier.nathan@gmail.com>
 */
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("%cHOP", "color: orange; font-size: xxx-large"); // for fun

    var i = 2;
    var bgHeader = document.querySelector('div.bg');
    setInterval(function () {
        bgHeader.style.backgroundImage = "url('img/portfolio/mountain".concat(i, ".jpg')");
        i++;
        if (i > 3) i = 1;
    }, 5000);
    setInterval(function () {
        new Timer();
    }, 1000);
});

var Timer = /*#__PURE__*/function () {
    function Timer() {
        _classCallCheck(this, Timer);

        var life = document.querySelector('#life');
        var p = '';
        var intervalLife = this.dateInterval();

        for (var timeUnity in intervalLife) {
            p += intervalLife[timeUnity] + ' ' + (intervalLife[timeUnity] > 1 ? timeUnity : timeUnity.substr(0, timeUnity.length - 1)) + ' ';
        }

        life.innerText = p;
    }

    _createClass(Timer, [{
        key: "dateInterval",
        value: function dateInterval() {
            var SECOND = 1000;
            var MINUTE = SECOND * 60;
            var HOUR = MINUTE * 60;
            var DAY = HOUR * 24;
            var MONTH = DAY * 30.4375; // (365.25/12)

            var YEAR = MONTH * 12;
            var times = {
                ans: YEAR,
                mois: MONTH,
                jours: DAY,
                heures: HOUR,
                minutes: MINUTE,
                secondes: SECOND
            };
            var obj = {
                ans: 0,
                mois: 0,
                jours: 0,
                heures: 0,
                minutes: 0,
                secondes: 0
            };
            var now = new Date();
            var birthday = new Date(2000, 5, 12, 21, 30, 0);
            var ms = now.getTime() - birthday.getTime() - now.getTimezoneOffset() * 60 * 1000;
            Object.keys(times).forEach(function (k) {
                obj[k] = Math.floor(ms / times[k]);
                ms -= obj[k] * times[k];
            });
            return obj;
        }
    }]);

    return Timer;
}();
