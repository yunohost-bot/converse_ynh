(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[3435],{

/***/ 3238:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t(__webpack_require__(7076)) : 0;
}(this, function (e) {
  "use strict";

  function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var r = t(e),
    a = {
      words: {
        m: ["један минут", "једног минута"],
        mm: ["%d минут", "%d минута", "%d минута"],
        h: ["један сат", "једног сата"],
        hh: ["%d сат", "%d сата", "%d сати"],
        d: ["један дан", "једног дана"],
        dd: ["%d дан", "%d дана", "%d дана"],
        M: ["један месец", "једног месеца"],
        MM: ["%d месец", "%d месеца", "%d месеци"],
        y: ["једну годину", "једне године"],
        yy: ["%d годину", "%d године", "%d година"]
      },
      correctGrammarCase: function (e, t) {
        return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2];
      },
      relativeTimeFormatter: function (e, t, r, d) {
        var i = a.words[r];
        if (1 === r.length) return "y" === r && t ? "једна година" : d || t ? i[0] : i[1];
        var m = a.correctGrammarCase(e, i);
        return "yy" === r && t && "%d годину" === m ? e + " година" : m.replace("%d", e);
      }
    },
    d = {
      name: "sr-cyrl",
      weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"),
      weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"),
      weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
      months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"),
      monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"),
      weekStart: 1,
      relativeTime: {
        future: "за %s",
        past: "пре %s",
        s: "неколико секунди",
        m: a.relativeTimeFormatter,
        mm: a.relativeTimeFormatter,
        h: a.relativeTimeFormatter,
        hh: a.relativeTimeFormatter,
        d: a.relativeTimeFormatter,
        dd: a.relativeTimeFormatter,
        M: a.relativeTimeFormatter,
        MM: a.relativeTimeFormatter,
        y: a.relativeTimeFormatter,
        yy: a.relativeTimeFormatter
      },
      ordinal: function (e) {
        return e + ".";
      },
      formats: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D. M. YYYY.",
        LL: "D. MMMM YYYY.",
        LLL: "D. MMMM YYYY. H:mm",
        LLLL: "dddd, D. MMMM YYYY. H:mm"
      }
    };
  return r.default.locale(d, null, !0), d;
});

/***/ })

}]);
//# sourceMappingURL=sr-cyrl-js.js.map