(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[8214],{

/***/ 5639:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, n) {
   true ? module.exports = n(__webpack_require__(7076)) : 0;
}(this, function (e) {
  "use strict";

  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var t = n(e),
    r = {
      name: "hu",
      weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
      weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
      monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
      ordinal: function (e) {
        return e + ".";
      },
      weekStart: 1,
      relativeTime: {
        future: "%s múlva",
        past: "%s",
        s: function (e, n, t, r) {
          return "néhány másodperc" + (r || n ? "" : "e");
        },
        m: function (e, n, t, r) {
          return "egy perc" + (r || n ? "" : "e");
        },
        mm: function (e, n, t, r) {
          return e + " perc" + (r || n ? "" : "e");
        },
        h: function (e, n, t, r) {
          return "egy " + (r || n ? "óra" : "órája");
        },
        hh: function (e, n, t, r) {
          return e + " " + (r || n ? "óra" : "órája");
        },
        d: function (e, n, t, r) {
          return "egy " + (r || n ? "nap" : "napja");
        },
        dd: function (e, n, t, r) {
          return e + " " + (r || n ? "nap" : "napja");
        },
        M: function (e, n, t, r) {
          return "egy " + (r || n ? "hónap" : "hónapja");
        },
        MM: function (e, n, t, r) {
          return e + " " + (r || n ? "hónap" : "hónapja");
        },
        y: function (e, n, t, r) {
          return "egy " + (r || n ? "év" : "éve");
        },
        yy: function (e, n, t, r) {
          return e + " " + (r || n ? "év" : "éve");
        }
      },
      formats: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      }
    };
  return t.default.locale(r, null, !0), r;
});

/***/ })

}]);
//# sourceMappingURL=hu-js.js.map