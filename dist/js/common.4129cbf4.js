!function (e) {
  var t = window.webpackJsonp;
  window.webpackJsonp = function (n, r, i) {
    for (var o, d, u, _ = 0, l = []; _ < n.length; _++) d = n[_], a[d] && l.push(a[d][0]), a[d] = 0;
    for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    for (t && t(n, r, i); l.length;) l.shift()();
    if (i) for (_ = 0; _ < i.length; _++) u = s(s.s = i[_]);
    return u
  };
  var n = {}, a = {3: 0};

  function s(t) {
    if (n[t]) return n[t].exports;
    var a = n[t] = {i: t, l: !1, exports: {}};
    return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports
  }

  s.e = function (e) {
    var t = a[e];
    if (0 === t) return new Promise(function (e) {
      e()
    });
    if (t) return t[2];
    var n = new Promise(function (n, s) {
      t = a[e] = [n, s]
    });
    t[2] = n;
    var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
    i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.timeout = 12e4, s.nc && i.setAttribute("nonce", s.nc), i.src = s.p + "js/" + ({
      0: "index",
      1: "index3",
      2: "index2"
    }[e] || e) + "." + {0: "6b84d8ce", 1: "c0bd73ba", 2: "49854d6e"}[e] + ".js";
    var o = setTimeout(d, 12e4);

    function d() {
      i.onerror = i.onload = null, clearTimeout(o);
      var t = a[e];
      0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), a[e] = void 0)
    }

    return i.onerror = i.onload = d, r.appendChild(i), n
  }, s.m = e, s.c = n, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return s.d(t, "a", t), t
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, s.p = "", s.oe = function (e) {
    throw e
  }
}({
  "+27R": function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          s: ["thodde secondanim", "thodde second"],
          ss: [e + " secondanim", e + " second"],
          m: ["eka mintan", "ek minute"],
          mm: [e + " mintanim", e + " mintam"],
          h: ["eka horan", "ek hor"],
          hh: [e + " horanim", e + " horam"],
          d: ["eka disan", "ek dis"],
          dd: [e + " disanim", e + " dis"],
          M: ["eka mhoinean", "ek mhoino"],
          MM: [e + " mhoineanim", e + " mhoine"],
          y: ["eka vorsan", "ek voros"],
          yy: [e + " vorsanim", e + " vorsam"]
        };
        return t ? s[n][0] : s[n][1]
      }

      e.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [vazta]",
          LTS: "A h:mm:ss [vazta]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [vazta]",
          LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
          llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
          sameDay: "[Aiz] LT",
          nextDay: "[Faleam] LT",
          nextWeek: "[Ieta to] dddd[,] LT",
          lastDay: "[Kal] LT",
          lastWeek: "[Fatlo] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s",
          past: "%s adim",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
            case"D":
              return e + "er";
            default:
            case"M":
            case"Q":
            case"DDD":
            case"d":
            case"w":
            case"W":
              return e
          }
        },
        week: {dow: 1, doy: 4},
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
        }
      })
    })(n("PJh5"))
  }, "+7/x": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"},
          n = {"௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"};
      e.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
          sameDay: "[இன்று] LT",
          nextDay: "[நாளை] LT",
          nextWeek: "dddd, LT",
          lastDay: "[நேற்று] LT",
          lastWeek: "[கடந்த வாரம்] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s இல்",
          past: "%s முன்",
          s: "ஒரு சில விநாடிகள்",
          ss: "%d விநாடிகள்",
          m: "ஒரு நிமிடம்",
          mm: "%d நிமிடங்கள்",
          h: "ஒரு மணி நேரம்",
          hh: "%d மணி நேரம்",
          d: "ஒரு நாள்",
          dd: "%d நாட்கள்",
          M: "ஒரு மாதம்",
          MM: "%d மாதங்கள்",
          y: "ஒரு வருடம்",
          yy: "%d ஆண்டுகள்"
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + "வது"
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, "/6P1": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
      };

      function n(e, t, n, a) {
        return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
      }

      function a(e) {
        return e % 10 == 0 || e > 10 && e < 20
      }

      function s(e) {
        return t[e].split("_")
      }

      function r(e, t, r, i) {
        var o = e + " ";
        return 1 === e ? o + n(0, t, r[0], i) : t ? o + (a(e) ? s(r)[1] : s(r)[0]) : i ? o + s(r)[1] : o + (a(e) ? s(r)[1] : s(r)[2])
      }

      e.defineLocale("lt", {
        months: {
          format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
          standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
          format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
          standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY [m.] MMMM D [d.]",
          LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
          l: "YYYY-MM-DD",
          ll: "YYYY [m.] MMMM D [d.]",
          lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
          sameDay: "[Šiandien] LT",
          nextDay: "[Rytoj] LT",
          nextWeek: "dddd LT",
          lastDay: "[Vakar] LT",
          lastWeek: "[Praėjusį] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "po %s", past: "prieš %s", s: function (e, t, n, a) {
            return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
          }, ss: r, m: n, mm: r, h: n, hh: r, d: n, dd: r, M: n, MM: r, y: n, yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + "-oji"
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "/bsm": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Bugun soat] LT [da]",
          nextDay: "[Ertaga] LT [da]",
          nextWeek: "dddd [kuni soat] LT [da]",
          lastDay: "[Kecha soat] LT [da]",
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Yaqin %s ichida",
          past: "Bir necha %s oldin",
          s: "soniya",
          ss: "%d soniya",
          m: "bir daqiqa",
          mm: "%d daqiqa",
          h: "bir soat",
          hh: "%d soat",
          d: "bir kun",
          dd: "%d kun",
          M: "bir oy",
          MM: "%d oy",
          y: "bir yil",
          yy: "%d yil"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "/mhn": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
          n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
      e.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "Aको h:mm बजे",
          LTS: "Aको h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, Aको h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[भोलि] LT",
          nextWeek: "[आउँदो] dddd[,] LT",
          lastDay: "[हिजो] LT",
          lastWeek: "[गएको] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमा",
          past: "%s अगाडि",
          s: "केही क्षण",
          ss: "%d सेकेण्ड",
          m: "एक मिनेट",
          mm: "%d मिनेट",
          h: "एक घण्टा",
          hh: "%d घण्टा",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महिना",
          MM: "%d महिना",
          y: "एक बर्ष",
          yy: "%d बर्ष"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, "0X8Q": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần rồi lúc] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          ss: "%d giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "2pmY": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"},
          n = {"۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0"};
      e.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش] [ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          ss: "ثانیه d%",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/[۰-۹]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {dow: 6, doy: 12}
      })
    })(n("PJh5"))
  }, "2s1U": function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = e + " ";
        switch (n) {
          case"s":
            return t || a ? "nekaj sekund" : "nekaj sekundami";
          case"ss":
            return s += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
          case"m":
            return t ? "ena minuta" : "eno minuto";
          case"mm":
            return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
          case"h":
            return t ? "ena ura" : "eno uro";
          case"hh":
            return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
          case"d":
            return t || a ? "en dan" : "enim dnem";
          case"dd":
            return s += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
          case"M":
            return t || a ? "en mesec" : "enim mesecem";
          case"MM":
            return s += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
          case"y":
            return t || a ? "eno leto" : "enim letom";
          case"yy":
            return s += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
        }
      }

      e.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";
              case 3:
                return "[v] [sredo] [ob] LT";
              case 6:
                return "[v] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT"
            }
          }, lastDay: "[včeraj ob] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";
              case 3:
                return "[prejšnjo] [sredo] [ob] LT";
              case 6:
                return "[prejšnjo] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "3CJN": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          ss: "%d sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "3IRH": function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {
      }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0, get: function () {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, "3K28": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      e.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: s,
        monthsShortRegex: s,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "3LKG": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L"
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "3MVc": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
          n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
          a = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
          }, s = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
          }, r = function (e) {
            return function (t, n, r, i) {
              var o = a(t), d = s[e][a(t)];
              return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
            }
          },
          i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      e.defineLocale("ar", {
        months: i,
        monthsShort: i,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: r("s"),
          ss: r("s"),
          m: r("m"),
          mm: r("m"),
          h: r("h"),
          hh: r("h"),
          d: r("d"),
          dd: r("d"),
          M: r("M"),
          MM: r("M"),
          y: r("y"),
          yy: r("y")
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {dow: 6, doy: 12}
      })
    })(n("PJh5"))
  }, "3hfc": function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        var a, s;
        return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (a = +e, s = {
          ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў"
        }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? s[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? s[1] : s[2])
      }

      e.defineLocale("be", {
        months: {
          format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
          standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
          standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
          sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function () {
            return "[У] dddd [ў] LT"
          }, lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return "[У мінулую] dddd [ў] LT";
              case 1:
              case 2:
              case 4:
                return "[У мінулы] dddd [ў] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "дзень",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case"M":
            case"d":
            case"DDD":
            case"w":
            case"W":
              return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
            case"D":
              return e + "-га";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "5Omq": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          ss: "%d sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "5SNd": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        0: "-ум",
        1: "-ум",
        2: "-юм",
        3: "-юм",
        4: "-ум",
        5: "-ум",
        6: "-ум",
        7: "-ум",
        8: "-ум",
        9: "-ум",
        10: "-ум",
        12: "-ум",
        13: "-ум",
        20: "-ум",
        30: "-юм",
        40: "-ум",
        50: "-ум",
        60: "-ум",
        70: "-ум",
        80: "-ум",
        90: "-ум",
        100: "-ум"
      };
      e.defineLocale("tg", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
        weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
        weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Имрӯз соати] LT",
          nextDay: "[Пагоҳ соати] LT",
          lastDay: "[Дирӯз соати] LT",
          nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
          lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "баъди %s",
          past: "%s пеш",
          s: "якчанд сония",
          m: "як дақиқа",
          mm: "%d дақиқа",
          h: "як соат",
          hh: "%d соат",
          d: "як рӯз",
          dd: "%d рӯз",
          M: "як моҳ",
          MM: "%d моҳ",
          y: "як сол",
          yy: "%d сол"
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "5j66": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០"},
          n = {"១": "1", "២": "2", "៣": "3", "៤": "4", "៥": "5", "៦": "6", "៧": "7", "៨": "8", "៩": "9", "០": "0"};
      e.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (e) {
          return "ល្ងាច" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ព្រឹក" : "ល្ងាច"
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          ss: "%d វិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ"
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: "ទី%d",
        preparse: function (e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "5vPg": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
          n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};

      function a(e, t, n, a) {
        var s = "";
        if (t) switch (n) {
          case"s":
            s = "काही सेकंद";
            break;
          case"ss":
            s = "%d सेकंद";
            break;
          case"m":
            s = "एक मिनिट";
            break;
          case"mm":
            s = "%d मिनिटे";
            break;
          case"h":
            s = "एक तास";
            break;
          case"hh":
            s = "%d तास";
            break;
          case"d":
            s = "एक दिवस";
            break;
          case"dd":
            s = "%d दिवस";
            break;
          case"M":
            s = "एक महिना";
            break;
          case"MM":
            s = "%d महिने";
            break;
          case"y":
            s = "एक वर्ष";
            break;
          case"yy":
            s = "%d वर्षे"
        } else switch (n) {
          case"s":
            s = "काही सेकंदां";
            break;
          case"ss":
            s = "%d सेकंदां";
            break;
          case"m":
            s = "एका मिनिटा";
            break;
          case"mm":
            s = "%d मिनिटां";
            break;
          case"h":
            s = "एका तासा";
            break;
          case"hh":
            s = "%d तासां";
            break;
          case"d":
            s = "एका दिवसा";
            break;
          case"dd":
            s = "%d दिवसां";
            break;
          case"M":
            s = "एका महिन्या";
            break;
          case"MM":
            s = "%d महिन्यां";
            break;
          case"y":
            s = "एका वर्षा";
            break;
          case"yy":
            s = "%d वर्षां"
        }
        return s.replace(/%d/i, e)
      }

      e.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm वाजता",
          LTS: "A h:mm:ss वाजता",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm वाजता",
          LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[उद्या] LT",
          nextWeek: "dddd, LT",
          lastDay: "[काल] LT",
          lastWeek: "[मागील] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमध्ये",
          past: "%sपूर्वी",
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, "6cf8": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
      };
      e.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгүн саат] LT",
          nextDay: "[Эртең саат] LT",
          nextWeek: "dddd [саат] LT",
          lastDay: "[Кече саат] LT",
          lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ичинде",
          past: "%s мурун",
          s: "бирнече секунд",
          ss: "%d секунд",
          m: "бир мүнөт",
          mm: "%d мүнөт",
          h: "бир саат",
          hh: "%d саат",
          d: "бир күн",
          dd: "%d күн",
          M: "бир ай",
          MM: "%d ай",
          y: "бир жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "7LV+": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
          n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

      function a(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
      }

      function s(e, t, n) {
        var s = e + " ";
        switch (n) {
          case"ss":
            return s + (a(e) ? "sekundy" : "sekund");
          case"m":
            return t ? "minuta" : "minutę";
          case"mm":
            return s + (a(e) ? "minuty" : "minut");
          case"h":
            return t ? "godzina" : "godzinę";
          case"hh":
            return s + (a(e) ? "godziny" : "godzin");
          case"MM":
            return s + (a(e) ? "miesiące" : "miesięcy");
          case"yy":
            return s + (a(e) ? "lata" : "lat")
        }
      }

      e.defineLocale("pl", {
        months: function (e, a) {
          return e ? "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W niedzielę o] LT";
              case 2:
                return "[We wtorek o] LT";
              case 3:
                return "[W środę o] LT";
              case 6:
                return "[W sobotę o] LT";
              default:
                return "[W] dddd [o] LT"
            }
          }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W zeszłą niedzielę o] LT";
              case 3:
                return "[W zeszłą środę o] LT";
              case 6:
                return "[W zeszłą sobotę o] LT";
              default:
                return "[W zeszły] dddd [o] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: s,
          m: s,
          mm: s,
          h: s,
          hh: s,
          d: "1 dzień",
          dd: "%d dni",
          M: "miesiąc",
          MM: s,
          y: "rok",
          yy: s
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "7MHZ": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      e.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: s,
        monthsShortRegex: s,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "7OnE": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
          n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"};
      e.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, "7Q8x": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Namuhla nga] LT",
          nextDay: "[Kusasa nga] LT",
          nextWeek: "dddd [nga] LT",
          lastDay: "[Itolo nga] LT",
          lastWeek: "dddd [leliphelile] [nga] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "nga %s",
          past: "wenteka nga %s",
          s: "emizuzwana lomcane",
          ss: "%d mzuzwana",
          m: "umzuzu",
          mm: "%d emizuzu",
          h: "lihora",
          hh: "%d emahora",
          d: "lilanga",
          dd: "%d emalanga",
          M: "inyanga",
          MM: "%d tinyanga",
          y: "umnyaka",
          yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "7t+N": function (e, t, n) {
    var a;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function (t, n) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e)
      } : n(t)
    }("undefined" != typeof window ? window : this, function (n, s) {
      "use strict";
      var r = [], i = n.document, o = Object.getPrototypeOf, d = r.slice, u = r.concat, _ = r.push, l = r.indexOf,
          m = {}, c = m.toString, h = m.hasOwnProperty, f = h.toString, p = f.call(Object), M = {}, y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
          }, L = function (e) {
            return null != e && e === e.window
          }, Y = {type: !0, src: !0, noModule: !0};

      function g(e, t, n) {
        var a, s = (t = t || i).createElement("script");
        if (s.text = e, n) for (a in Y) n[a] && (s[a] = n[a]);
        t.head.appendChild(s).parentNode.removeChild(s)
      }

      function k(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? m[c.call(e)] || "object" : typeof e
      }

      var D = function (e, t) {
        return new D.fn.init(e, t)
      }, v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function T(e) {
        var t = !!e && "length" in e && e.length, n = k(e);
        return !y(e) && !L(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }

      D.fn = D.prototype = {
        jquery: "3.3.1", constructor: D, length: 0, toArray: function () {
          return d.call(this)
        }, get: function (e) {
          return null == e ? d.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
          var t = D.merge(this.constructor(), e);
          return t.prevObject = this, t
        }, each: function (e) {
          return D.each(this, e)
        }, map: function (e) {
          return this.pushStack(D.map(this, function (t, n) {
            return e.call(t, n, t)
          }))
        }, slice: function () {
          return this.pushStack(d.apply(this, arguments))
        }, first: function () {
          return this.eq(0)
        }, last: function () {
          return this.eq(-1)
        }, eq: function (e) {
          var t = this.length, n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
          return this.prevObject || this.constructor()
        }, push: _, sort: r.sort, splice: r.splice
      }, D.extend = D.fn.extend = function () {
        var e, t, n, a, s, r, i = arguments[0] || {}, o = 1, d = arguments.length, u = !1;
        for ("boolean" == typeof i && (u = i, i = arguments[o] || {}, o++), "object" == typeof i || y(i) || (i = {}), o === d && (i = this, o--); o < d; o++) if (null != (e = arguments[o])) for (t in e) n = i[t], i !== (a = e[t]) && (u && a && (D.isPlainObject(a) || (s = Array.isArray(a))) ? (s ? (s = !1, r = n && Array.isArray(n) ? n : []) : r = n && D.isPlainObject(n) ? n : {}, i[t] = D.extend(u, r, a)) : void 0 !== a && (i[t] = a));
        return i
      }, D.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
          throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
          var t, n;
          return !(!e || "[object Object]" !== c.call(e)) && (!(t = o(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && f.call(n) === p)
        }, isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0
        }, globalEval: function (e) {
          g(e)
        }, each: function (e, t) {
          var n, a = 0;
          if (T(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++) ; else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
          return e
        }, trim: function (e) {
          return null == e ? "" : (e + "").replace(v, "")
        }, makeArray: function (e, t) {
          var n = t || [];
          return null != e && (T(Object(e)) ? D.merge(n, "string" == typeof e ? [e] : e) : _.call(n, e)), n
        }, inArray: function (e, t, n) {
          return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
          for (var n = +t.length, a = 0, s = e.length; a < n; a++) e[s++] = t[a];
          return e.length = s, e
        }, grep: function (e, t, n) {
          for (var a = [], s = 0, r = e.length, i = !n; s < r; s++) !t(e[s], s) !== i && a.push(e[s]);
          return a
        }, map: function (e, t, n) {
          var a, s, r = 0, i = [];
          if (T(e)) for (a = e.length; r < a; r++) null != (s = t(e[r], r, n)) && i.push(s); else for (r in e) null != (s = t(e[r], r, n)) && i.push(s);
          return u.apply([], i)
        }, guid: 1, support: M
      }), "function" == typeof Symbol && (D.fn[Symbol.iterator] = r[Symbol.iterator]), D.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        m["[object " + t + "]"] = t.toLowerCase()
      });
      var w =
          /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
          function (e) {
            var t, n, a, s, r, i, o, d, u, _, l, m, c, h, f, p, M, y, L, Y = "sizzle" + 1 * new Date, g = e.document,
                k = 0, D = 0, v = ie(), T = ie(), w = ie(), b = function (e, t) {
                  return e === t && (l = !0), 0
                }, S = {}.hasOwnProperty, H = [], x = H.pop, j = H.push, P = H.push, O = H.slice, E = function (e, t) {
                  for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
                  return -1
                },
                W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                A = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                C = "\\[" + A + "*(" + F + ")(?:" + A + "*([*^$|!~]?=)" + A + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + A + "*\\]",
                J = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + C + ")*)|.*)\\)|)",
                N = new RegExp(A + "+", "g"), z = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g"),
                R = new RegExp("^" + A + "*," + A + "*"), I = new RegExp("^" + A + "*([>+~]|" + A + ")" + A + "*"),
                q = new RegExp("=" + A + "*([^\\]'\"]*?)" + A + "*\\]", "g"), U = new RegExp(J),
                G = new RegExp("^" + F + "$"), V = {
                  ID: new RegExp("^#(" + F + ")"),
                  CLASS: new RegExp("^\\.(" + F + ")"),
                  TAG: new RegExp("^(" + F + "|[*])"),
                  ATTR: new RegExp("^" + C),
                  PSEUDO: new RegExp("^" + J),
                  CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
                  bool: new RegExp("^(?:" + W + ")$", "i"),
                  needsContext: new RegExp("^" + A + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + A + "*((?:-\\d)?\\d*)" + A + "*\\)|)(?=[^-]|$)", "i")
                }, B = /^(?:input|select|textarea|button)$/i, $ = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
                X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
                Q = new RegExp("\\\\([\\da-f]{1,6}" + A + "?|(" + A + ")|.)", "ig"), ee = function (e, t, n) {
                  var a = "0x" + t - 65536;
                  return a != a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                  return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, ae = function () {
                  m()
                }, se = ye(function (e) {
                  return !0 === e.disabled && ("form" in e || "label" in e)
                }, {dir: "parentNode", next: "legend"});
            try {
              P.apply(H = O.call(g.childNodes), g.childNodes), H[g.childNodes.length].nodeType
            } catch (e) {
              P = {
                apply: H.length ? function (e, t) {
                  j.apply(e, O.call(t))
                } : function (e, t) {
                  for (var n = e.length, a = 0; e[n++] = t[a++];) ;
                  e.length = n - 1
                }
              }
            }

            function re(e, t, a, s) {
              var r, o, u, _, l, h, M, y = t && t.ownerDocument, k = t ? t.nodeType : 9;
              if (a = a || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return a;
              if (!s && ((t ? t.ownerDocument || t : g) !== c && m(t), t = t || c, f)) {
                if (11 !== k && (l = X.exec(e))) if (r = l[1]) {
                  if (9 === k) {
                    if (!(u = t.getElementById(r))) return a;
                    if (u.id === r) return a.push(u), a
                  } else if (y && (u = y.getElementById(r)) && L(t, u) && u.id === r) return a.push(u), a
                } else {
                  if (l[2]) return P.apply(a, t.getElementsByTagName(e)), a;
                  if ((r = l[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(a, t.getElementsByClassName(r)), a
                }
                if (n.qsa && !w[e + " "] && (!p || !p.test(e))) {
                  if (1 !== k) y = t, M = e; else if ("object" !== t.nodeName.toLowerCase()) {
                    for ((_ = t.getAttribute("id")) ? _ = _.replace(te, ne) : t.setAttribute("id", _ = Y), o = (h = i(e)).length; o--;) h[o] = "#" + _ + " " + Me(h[o]);
                    M = h.join(","), y = Z.test(e) && fe(t.parentNode) || t
                  }
                  if (M) try {
                    return P.apply(a, y.querySelectorAll(M)), a
                  } catch (e) {
                  } finally {
                    _ === Y && t.removeAttribute("id")
                  }
                }
              }
              return d(e.replace(z, "$1"), t, a, s)
            }

            function ie() {
              var e = [];
              return function t(n, s) {
                return e.push(n + " ") > a.cacheLength && delete t[e.shift()], t[n + " "] = s
              }
            }

            function oe(e) {
              return e[Y] = !0, e
            }

            function de(e) {
              var t = c.createElement("fieldset");
              try {
                return !!e(t)
              } catch (e) {
                return !1
              } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
              }
            }

            function ue(e, t) {
              for (var n = e.split("|"), s = n.length; s--;) a.attrHandle[n[s]] = t
            }

            function _e(e, t) {
              var n = t && e, a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
              if (a) return a;
              if (n) for (; n = n.nextSibling;) if (n === t) return -1;
              return e ? 1 : -1
            }

            function le(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
              }
            }

            function me(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
              }
            }

            function ce(e) {
              return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
              }
            }

            function he(e) {
              return oe(function (t) {
                return t = +t, oe(function (n, a) {
                  for (var s, r = e([], n.length, t), i = r.length; i--;) n[s = r[i]] && (n[s] = !(a[s] = n[s]))
                })
              })
            }

            function fe(e) {
              return e && void 0 !== e.getElementsByTagName && e
            }

            for (t in n = re.support = {}, r = re.isXML = function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName
            }, m = re.setDocument = function (e) {
              var t, s, i = e ? e.ownerDocument || e : g;
              return i !== c && 9 === i.nodeType && i.documentElement ? (h = (c = i).documentElement, f = !r(c), g !== c && (s = c.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ae, !1) : s.attachEvent && s.attachEvent("onunload", ae)), n.attributes = de(function (e) {
                return e.className = "i", !e.getAttribute("className")
              }), n.getElementsByTagName = de(function (e) {
                return e.appendChild(c.createComment("")), !e.getElementsByTagName("*").length
              }), n.getElementsByClassName = K.test(c.getElementsByClassName), n.getById = de(function (e) {
                return h.appendChild(e).id = Y, !c.getElementsByName || !c.getElementsByName(Y).length
              }), n.getById ? (a.filter.ID = function (e) {
                var t = e.replace(Q, ee);
                return function (e) {
                  return e.getAttribute("id") === t
                }
              }, a.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && f) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
                }
              }) : (a.filter.ID = function (e) {
                var t = e.replace(Q, ee);
                return function (e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
                }
              }, a.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && f) {
                  var n, a, s, r = t.getElementById(e);
                  if (r) {
                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                    for (s = t.getElementsByName(e), a = 0; r = s[a++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                  }
                  return []
                }
              }), a.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
              } : function (e, t) {
                var n, a = [], s = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; n = r[s++];) 1 === n.nodeType && a.push(n);
                  return a
                }
                return r
              }, a.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e)
              }, M = [], p = [], (n.qsa = K.test(c.querySelectorAll)) && (de(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + Y + "'></a><select id='" + Y + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && p.push("[*^$]=" + A + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || p.push("\\[" + A + "*(?:value|" + W + ")"), e.querySelectorAll("[id~=" + Y + "-]").length || p.push("~="), e.querySelectorAll(":checked").length || p.push(":checked"), e.querySelectorAll("a#" + Y + "+*").length || p.push(".#.+[+~]")
              }), de(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = c.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && p.push("name" + A + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && p.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), p.push(",.*:")
              })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), M.push("!=", J)
              }), p = p.length && new RegExp(p.join("|")), M = M.length && new RegExp(M.join("|")), t = K.test(h.compareDocumentPosition), L = t || K.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode;
                return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
              } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
              }, b = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return a || (1 & (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === a ? e === c || e.ownerDocument === g && L(g, e) ? -1 : t === c || t.ownerDocument === g && L(g, t) ? 1 : _ ? E(_, e) - E(_, t) : 0 : 4 & a ? -1 : 1)
              } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, a = 0, s = e.parentNode, r = t.parentNode, i = [e], o = [t];
                if (!s || !r) return e === c ? -1 : t === c ? 1 : s ? -1 : r ? 1 : _ ? E(_, e) - E(_, t) : 0;
                if (s === r) return _e(e, t);
                for (n = e; n = n.parentNode;) i.unshift(n);
                for (n = t; n = n.parentNode;) o.unshift(n);
                for (; i[a] === o[a];) a++;
                return a ? _e(i[a], o[a]) : i[a] === g ? -1 : o[a] === g ? 1 : 0
              }, c) : c
            }, re.matches = function (e, t) {
              return re(e, null, null, t)
            }, re.matchesSelector = function (e, t) {
              if ((e.ownerDocument || e) !== c && m(e), t = t.replace(q, "='$1']"), n.matchesSelector && f && !w[t + " "] && (!M || !M.test(t)) && (!p || !p.test(t))) try {
                var a = y.call(e, t);
                if (a || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
              } catch (e) {
              }
              return re(t, c, null, [e]).length > 0
            }, re.contains = function (e, t) {
              return (e.ownerDocument || e) !== c && m(e), L(e, t)
            }, re.attr = function (e, t) {
              (e.ownerDocument || e) !== c && m(e);
              var s = a.attrHandle[t.toLowerCase()],
                  r = s && S.call(a.attrHandle, t.toLowerCase()) ? s(e, t, !f) : void 0;
              return void 0 !== r ? r : n.attributes || !f ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.escape = function (e) {
              return (e + "").replace(te, ne)
            }, re.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function (e) {
              var t, a = [], s = 0, r = 0;
              if (l = !n.detectDuplicates, _ = !n.sortStable && e.slice(0), e.sort(b), l) {
                for (; t = e[r++];) t === e[r] && (s = a.push(r));
                for (; s--;) e.splice(a[s], 1)
              }
              return _ = null, e
            }, s = re.getText = function (e) {
              var t, n = "", a = 0, r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (3 === r || 4 === r) return e.nodeValue
              } else for (; t = e[a++];) n += s(t);
              return n
            }, (a = re.selectors = {
              cacheLength: 50,
              createPseudo: oe,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
              },
              preFilter: {
                ATTR: function (e) {
                  return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                }, PSEUDO: function (e) {
                  var t, n = !e[6] && e[2];
                  return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = i(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(Q, ee).toLowerCase();
                  return "*" === e ? function () {
                    return !0
                  } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                  }
                }, CLASS: function (e) {
                  var t = v[e + " "];
                  return t || (t = new RegExp("(^|" + A + ")" + e + "(" + A + "|$)")) && v(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                  })
                }, ATTR: function (e, t, n) {
                  return function (a) {
                    var s = re.attr(a, e);
                    return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? (" " + s.replace(N, " ") + " ").indexOf(n) > -1 : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"))
                  }
                }, CHILD: function (e, t, n, a, s) {
                  var r = "nth" !== e.slice(0, 3), i = "last" !== e.slice(-4), o = "of-type" === t;
                  return 1 === a && 0 === s ? function (e) {
                    return !!e.parentNode
                  } : function (t, n, d) {
                    var u, _, l, m, c, h, f = r !== i ? "nextSibling" : "previousSibling", p = t.parentNode,
                        M = o && t.nodeName.toLowerCase(), y = !d && !o, L = !1;
                    if (p) {
                      if (r) {
                        for (; f;) {
                          for (m = t; m = m[f];) if (o ? m.nodeName.toLowerCase() === M : 1 === m.nodeType) return !1;
                          h = f = "only" === e && !h && "nextSibling"
                        }
                        return !0
                      }
                      if (h = [i ? p.firstChild : p.lastChild], i && y) {
                        for (L = (c = (u = (_ = (l = (m = p)[Y] || (m[Y] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[e] || [])[0] === k && u[1]) && u[2], m = c && p.childNodes[c]; m = ++c && m && m[f] || (L = c = 0) || h.pop();) if (1 === m.nodeType && ++L && m === t) {
                          _[e] = [k, c, L];
                          break
                        }
                      } else if (y && (L = c = (u = (_ = (l = (m = t)[Y] || (m[Y] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[e] || [])[0] === k && u[1]), !1 === L) for (; (m = ++c && m && m[f] || (L = c = 0) || h.pop()) && ((o ? m.nodeName.toLowerCase() !== M : 1 !== m.nodeType) || !++L || (y && ((_ = (l = m[Y] || (m[Y] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[e] = [k, L]), m !== t));) ;
                      return (L -= s) === a || L % a == 0 && L / a >= 0
                    }
                  }
                }, PSEUDO: function (e, t) {
                  var n, s = a.pseudos[e] || a.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                  return s[Y] ? s(t) : s.length > 1 ? (n = [e, e, "", t], a.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, n) {
                    for (var a, r = s(e, t), i = r.length; i--;) e[a = E(e, r[i])] = !(n[a] = r[i])
                  }) : function (e) {
                    return s(e, 0, n)
                  }) : s
                }
              },
              pseudos: {
                not: oe(function (e) {
                  var t = [], n = [], a = o(e.replace(z, "$1"));
                  return a[Y] ? oe(function (e, t, n, s) {
                    for (var r, i = a(e, null, s, []), o = e.length; o--;) (r = i[o]) && (e[o] = !(t[o] = r))
                  }) : function (e, s, r) {
                    return t[0] = e, a(t, null, r, n), t[0] = null, !n.pop()
                  }
                }), has: oe(function (e) {
                  return function (t) {
                    return re(e, t).length > 0
                  }
                }), contains: oe(function (e) {
                  return e = e.replace(Q, ee), function (t) {
                    return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                  }
                }), lang: oe(function (e) {
                  return G.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(), function (t) {
                    var n;
                    do {
                      if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1
                  }
                }), target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
                }, root: function (e) {
                  return e === h
                }, focus: function (e) {
                  return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ce(!1), disabled: ce(!0), checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0
                }, parent: function (e) {
                  return !a.pseudos.empty(e)
                }, header: function (e) {
                  return $.test(e.nodeName)
                }, input: function (e) {
                  return B.test(e.nodeName)
                }, button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                  return [0]
                }), last: he(function (e, t) {
                  return [t - 1]
                }), eq: he(function (e, t, n) {
                  return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e
                }), odd: he(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e
                }), lt: he(function (e, t, n) {
                  for (var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                  return e
                }), gt: he(function (e, t, n) {
                  for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                  return e
                })
              }
            }).pseudos.nth = a.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) a.pseudos[t] = le(t);
            for (t in{submit: !0, reset: !0}) a.pseudos[t] = me(t);

            function pe() {
            }

            function Me(e) {
              for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
              return a
            }

            function ye(e, t, n) {
              var a = t.dir, s = t.next, r = s || a, i = n && "parentNode" === r, o = D++;
              return t.first ? function (t, n, s) {
                for (; t = t[a];) if (1 === t.nodeType || i) return e(t, n, s);
                return !1
              } : function (t, n, d) {
                var u, _, l, m = [k, o];
                if (d) {
                  for (; t = t[a];) if ((1 === t.nodeType || i) && e(t, n, d)) return !0
                } else for (; t = t[a];) if (1 === t.nodeType || i) if (_ = (l = t[Y] || (t[Y] = {}))[t.uniqueID] || (l[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[a] || t; else {
                  if ((u = _[r]) && u[0] === k && u[1] === o) return m[2] = u[2];
                  if (_[r] = m, m[2] = e(t, n, d)) return !0
                }
                return !1
              }
            }

            function Le(e) {
              return e.length > 1 ? function (t, n, a) {
                for (var s = e.length; s--;) if (!e[s](t, n, a)) return !1;
                return !0
              } : e[0]
            }

            function Ye(e, t, n, a, s) {
              for (var r, i = [], o = 0, d = e.length, u = null != t; o < d; o++) (r = e[o]) && (n && !n(r, a, s) || (i.push(r), u && t.push(o)));
              return i
            }

            function ge(e, t, n, a, s, r) {
              return a && !a[Y] && (a = ge(a)), s && !s[Y] && (s = ge(s, r)), oe(function (r, i, o, d) {
                var u, _, l, m = [], c = [], h = i.length, f = r || function (e, t, n) {
                      for (var a = 0, s = t.length; a < s; a++) re(e, t[a], n);
                      return n
                    }(t || "*", o.nodeType ? [o] : o, []), p = !e || !r && t ? f : Ye(f, m, e, o, d),
                    M = n ? s || (r ? e : h || a) ? [] : i : p;
                if (n && n(p, M, o, d), a) for (u = Ye(M, c), a(u, [], o, d), _ = u.length; _--;) (l = u[_]) && (M[c[_]] = !(p[c[_]] = l));
                if (r) {
                  if (s || e) {
                    if (s) {
                      for (u = [], _ = M.length; _--;) (l = M[_]) && u.push(p[_] = l);
                      s(null, M = [], u, d)
                    }
                    for (_ = M.length; _--;) (l = M[_]) && (u = s ? E(r, l) : m[_]) > -1 && (r[u] = !(i[u] = l))
                  }
                } else M = Ye(M === i ? M.splice(h, M.length) : M), s ? s(null, i, M, d) : P.apply(i, M)
              })
            }

            function ke(e) {
              for (var t, n, s, r = e.length, i = a.relative[e[0].type], o = i || a.relative[" "], d = i ? 1 : 0, _ = ye(function (e) {
                return e === t
              }, o, !0), l = ye(function (e) {
                return E(t, e) > -1
              }, o, !0), m = [function (e, n, a) {
                var s = !i && (a || n !== u) || ((t = n).nodeType ? _(e, n, a) : l(e, n, a));
                return t = null, s
              }]; d < r; d++) if (n = a.relative[e[d].type]) m = [ye(Le(m), n)]; else {
                if ((n = a.filter[e[d].type].apply(null, e[d].matches))[Y]) {
                  for (s = ++d; s < r && !a.relative[e[s].type]; s++) ;
                  return ge(d > 1 && Le(m), d > 1 && Me(e.slice(0, d - 1).concat({value: " " === e[d - 2].type ? "*" : ""})).replace(z, "$1"), n, d < s && ke(e.slice(d, s)), s < r && ke(e = e.slice(s)), s < r && Me(e))
                }
                m.push(n)
              }
              return Le(m)
            }

            return pe.prototype = a.filters = a.pseudos, a.setFilters = new pe, i = re.tokenize = function (e, t) {
              var n, s, r, i, o, d, u, _ = T[e + " "];
              if (_) return t ? 0 : _.slice(0);
              for (o = e, d = [], u = a.preFilter; o;) {
                for (i in n && !(s = R.exec(o)) || (s && (o = o.slice(s[0].length) || o), d.push(r = [])), n = !1, (s = I.exec(o)) && (n = s.shift(), r.push({
                  value: n,
                  type: s[0].replace(z, " ")
                }), o = o.slice(n.length)), a.filter) !(s = V[i].exec(o)) || u[i] && !(s = u[i](s)) || (n = s.shift(), r.push({
                  value: n,
                  type: i,
                  matches: s
                }), o = o.slice(n.length));
                if (!n) break
              }
              return t ? o.length : o ? re.error(e) : T(e, d).slice(0)
            }, o = re.compile = function (e, t) {
              var n, s = [], r = [], o = w[e + " "];
              if (!o) {
                for (t || (t = i(e)), n = t.length; n--;) (o = ke(t[n]))[Y] ? s.push(o) : r.push(o);
                (o = w(e, function (e, t) {
                  var n = t.length > 0, s = e.length > 0, r = function (r, i, o, d, _) {
                    var l, h, p, M = 0, y = "0", L = r && [], Y = [], g = u, D = r || s && a.find.TAG("*", _),
                        v = k += null == g ? 1 : Math.random() || .1, T = D.length;
                    for (_ && (u = i === c || i || _); y !== T && null != (l = D[y]); y++) {
                      if (s && l) {
                        for (h = 0, i || l.ownerDocument === c || (m(l), o = !f); p = e[h++];) if (p(l, i || c, o)) {
                          d.push(l);
                          break
                        }
                        _ && (k = v)
                      }
                      n && ((l = !p && l) && M--, r && L.push(l))
                    }
                    if (M += y, n && y !== M) {
                      for (h = 0; p = t[h++];) p(L, Y, i, o);
                      if (r) {
                        if (M > 0) for (; y--;) L[y] || Y[y] || (Y[y] = x.call(d));
                        Y = Ye(Y)
                      }
                      P.apply(d, Y), _ && !r && Y.length > 0 && M + t.length > 1 && re.uniqueSort(d)
                    }
                    return _ && (k = v, u = g), L
                  };
                  return n ? oe(r) : r
                }(r, s))).selector = e
              }
              return o
            }, d = re.select = function (e, t, n, s) {
              var r, d, u, _, l, m = "function" == typeof e && e, c = !s && i(e = m.selector || e);
              if (n = n || [], 1 === c.length) {
                if ((d = c[0] = c[0].slice(0)).length > 2 && "ID" === (u = d[0]).type && 9 === t.nodeType && f && a.relative[d[1].type]) {
                  if (!(t = (a.find.ID(u.matches[0].replace(Q, ee), t) || [])[0])) return n;
                  m && (t = t.parentNode), e = e.slice(d.shift().value.length)
                }
                for (r = V.needsContext.test(e) ? 0 : d.length; r-- && (u = d[r], !a.relative[_ = u.type]);) if ((l = a.find[_]) && (s = l(u.matches[0].replace(Q, ee), Z.test(d[0].type) && fe(t.parentNode) || t))) {
                  if (d.splice(r, 1), !(e = s.length && Me(d))) return P.apply(n, s), n;
                  break
                }
              }
              return (m || o(e, c))(s, t, !f, n, !t || Z.test(e) && fe(t.parentNode) || t), n
            }, n.sortStable = Y.split("").sort(b).join("") === Y, n.detectDuplicates = !!l, m(), n.sortDetached = de(function (e) {
              return 1 & e.compareDocumentPosition(c.createElement("fieldset"))
            }), de(function (e) {
              return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ue("type|href|height|width", function (e, t, n) {
              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && de(function (e) {
              return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ue("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), de(function (e) {
              return null == e.getAttribute("disabled")
            }) || ue(W, function (e, t, n) {
              var a;
              if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }), re
          }(n);
      D.find = w, D.expr = w.selectors, D.expr[":"] = D.expr.pseudos, D.uniqueSort = D.unique = w.uniqueSort, D.text = w.getText, D.isXMLDoc = w.isXML, D.contains = w.contains, D.escapeSelector = w.escape;
      var b = function (e, t, n) {
        for (var a = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (s && D(e).is(n)) break;
          a.push(e)
        }
        return a
      }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      }, H = D.expr.match.needsContext;

      function x(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }

      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function P(e, t, n) {
        return y(t) ? D.grep(e, function (e, a) {
          return !!t.call(e, a, e) !== n
        }) : t.nodeType ? D.grep(e, function (e) {
          return e === t !== n
        }) : "string" != typeof t ? D.grep(e, function (e) {
          return l.call(t, e) > -1 !== n
        }) : D.filter(t, e, n)
      }

      D.filter = function (e, t, n) {
        var a = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? D.find.matchesSelector(a, e) ? [a] : [] : D.find.matches(e, D.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      }, D.fn.extend({
        find: function (e) {
          var t, n, a = this.length, s = this;
          if ("string" != typeof e) return this.pushStack(D(e).filter(function () {
            for (t = 0; t < a; t++) if (D.contains(s[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < a; t++) D.find(e, s[t], n);
          return a > 1 ? D.uniqueSort(n) : n
        }, filter: function (e) {
          return this.pushStack(P(this, e || [], !1))
        }, not: function (e) {
          return this.pushStack(P(this, e || [], !0))
        }, is: function (e) {
          return !!P(this, "string" == typeof e && H.test(e) ? D(e) : e || [], !1).length
        }
      });
      var O, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (D.fn.init = function (e, t, n) {
        var a, s;
        if (!e) return this;
        if (n = n || O, "string" == typeof e) {
          if (!(a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (a[1]) {
            if (t = t instanceof D ? t[0] : t, D.merge(this, D.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), j.test(a[1]) && D.isPlainObject(t)) for (a in t) y(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
            return this
          }
          return (s = i.getElementById(a[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(D) : D.makeArray(e, this)
      }).prototype = D.fn, O = D(i);
      var W = /^(?:parents|prev(?:Until|All))/, A = {children: !0, contents: !0, next: !0, prev: !0};

      function F(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
      }

      D.fn.extend({
        has: function (e) {
          var t = D(e, this), n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (D.contains(this, t[e])) return !0
          })
        }, closest: function (e, t) {
          var n, a = 0, s = this.length, r = [], i = "string" != typeof e && D(e);
          if (!H.test(e)) for (; a < s; a++) for (n = this[a]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && D.find.matchesSelector(n, e))) {
            r.push(n);
            break
          }
          return this.pushStack(r.length > 1 ? D.uniqueSort(r) : r)
        }, index: function (e) {
          return e ? "string" == typeof e ? l.call(D(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
          return this.pushStack(D.uniqueSort(D.merge(this.get(), D(e, t))))
        }, addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), D.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
          return b(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
          return b(e, "parentNode", n)
        }, next: function (e) {
          return F(e, "nextSibling")
        }, prev: function (e) {
          return F(e, "previousSibling")
        }, nextAll: function (e) {
          return b(e, "nextSibling")
        }, prevAll: function (e) {
          return b(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
          return b(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
          return b(e, "previousSibling", n)
        }, siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
          return S(e.firstChild)
        }, contents: function (e) {
          return x(e, "iframe") ? e.contentDocument : (x(e, "template") && (e = e.content || e), D.merge([], e.childNodes))
        }
      }, function (e, t) {
        D.fn[e] = function (n, a) {
          var s = D.map(this, t, n);
          return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (s = D.filter(a, s)), this.length > 1 && (A[e] || D.uniqueSort(s), W.test(e) && s.reverse()), this.pushStack(s)
        }
      });
      var C = /[^\x20\t\r\n\f]+/g;

      function J(e) {
        return e
      }

      function N(e) {
        throw e
      }

      function z(e, t, n, a) {
        var s;
        try {
          e && y(s = e.promise) ? s.call(e).done(t).fail(n) : e && y(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(a))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }

      D.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return D.each(e.match(C) || [], function (e, n) {
            t[n] = !0
          }), t
        }(e) : D.extend({}, e);
        var t, n, a, s, r = [], i = [], o = -1, d = function () {
          for (s = s || e.once, a = t = !0; i.length; o = -1) for (n = i.shift(); ++o < r.length;) !1 === r[o].apply(n[0], n[1]) && e.stopOnFalse && (o = r.length, n = !1);
          e.memory || (n = !1), t = !1, s && (r = n ? [] : "")
        }, u = {
          add: function () {
            return r && (n && !t && (o = r.length - 1, i.push(n)), function t(n) {
              D.each(n, function (n, a) {
                y(a) ? e.unique && u.has(a) || r.push(a) : a && a.length && "string" !== k(a) && t(a)
              })
            }(arguments), n && !t && d()), this
          }, remove: function () {
            return D.each(arguments, function (e, t) {
              for (var n; (n = D.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= o && o--
            }), this
          }, has: function (e) {
            return e ? D.inArray(e, r) > -1 : r.length > 0
          }, empty: function () {
            return r && (r = []), this
          }, disable: function () {
            return s = i = [], r = n = "", this
          }, disabled: function () {
            return !r
          }, lock: function () {
            return s = i = [], n || t || (r = n = ""), this
          }, locked: function () {
            return !!s
          }, fireWith: function (e, n) {
            return s || (n = [e, (n = n || []).slice ? n.slice() : n], i.push(n), t || d()), this
          }, fire: function () {
            return u.fireWith(this, arguments), this
          }, fired: function () {
            return !!a
          }
        };
        return u
      }, D.extend({
        Deferred: function (e) {
          var t = [["notify", "progress", D.Callbacks("memory"), D.Callbacks("memory"), 2], ["resolve", "done", D.Callbacks("once memory"), D.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", D.Callbacks("once memory"), D.Callbacks("once memory"), 1, "rejected"]],
              a = "pending", s = {
                state: function () {
                  return a
                }, always: function () {
                  return r.done(arguments).fail(arguments), this
                }, catch: function (e) {
                  return s.then(null, e)
                }, pipe: function () {
                  var e = arguments;
                  return D.Deferred(function (n) {
                    D.each(t, function (t, a) {
                      var s = y(e[a[4]]) && e[a[4]];
                      r[a[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this, s ? [e] : arguments)
                      })
                    }), e = null
                  }).promise()
                }, then: function (e, a, s) {
                  var r = 0;

                  function i(e, t, a, s) {
                    return function () {
                      var o = this, d = arguments, u = function () {
                        var n, u;
                        if (!(e < r)) {
                          if ((n = a.apply(o, d)) === t.promise()) throw new TypeError("Thenable self-resolution");
                          u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? s ? u.call(n, i(r, t, J, s), i(r, t, N, s)) : (r++, u.call(n, i(r, t, J, s), i(r, t, N, s), i(r, t, J, t.notifyWith))) : (a !== J && (o = void 0, d = [n]), (s || t.resolveWith)(o, d))
                        }
                      }, _ = s ? u : function () {
                        try {
                          u()
                        } catch (n) {
                          D.Deferred.exceptionHook && D.Deferred.exceptionHook(n, _.stackTrace), e + 1 >= r && (a !== N && (o = void 0, d = [n]), t.rejectWith(o, d))
                        }
                      };
                      e ? _() : (D.Deferred.getStackHook && (_.stackTrace = D.Deferred.getStackHook()), n.setTimeout(_))
                    }
                  }

                  return D.Deferred(function (n) {
                    t[0][3].add(i(0, n, y(s) ? s : J, n.notifyWith)), t[1][3].add(i(0, n, y(e) ? e : J)), t[2][3].add(i(0, n, y(a) ? a : N))
                  }).promise()
                }, promise: function (e) {
                  return null != e ? D.extend(e, s) : s
                }
              }, r = {};
          return D.each(t, function (e, n) {
            var i = n[2], o = n[5];
            s[n[1]] = i.add, o && i.add(function () {
              a = o
            }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), i.add(n[3].fire), r[n[0]] = function () {
              return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
            }, r[n[0] + "With"] = i.fireWith
          }), s.promise(r), e && e.call(r, r), r
        }, when: function (e) {
          var t = arguments.length, n = t, a = Array(n), s = d.call(arguments), r = D.Deferred(), i = function (e) {
            return function (n) {
              a[e] = this, s[e] = arguments.length > 1 ? d.call(arguments) : n, --t || r.resolveWith(a, s)
            }
          };
          if (t <= 1 && (z(e, r.done(i(n)).resolve, r.reject, !t), "pending" === r.state() || y(s[n] && s[n].then))) return r.then();
          for (; n--;) z(s[n], i(n), r.reject);
          return r.promise()
        }
      });
      var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      D.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
      }, D.readyException = function (e) {
        n.setTimeout(function () {
          throw e
        })
      };
      var I = D.Deferred();

      function q() {
        i.removeEventListener("DOMContentLoaded", q), n.removeEventListener("load", q), D.ready()
      }

      D.fn.ready = function (e) {
        return I.then(e).catch(function (e) {
          D.readyException(e)
        }), this
      }, D.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
          (!0 === e ? --D.readyWait : D.isReady) || (D.isReady = !0, !0 !== e && --D.readyWait > 0 || I.resolveWith(i, [D]))
        }
      }), D.ready.then = I.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? n.setTimeout(D.ready) : (i.addEventListener("DOMContentLoaded", q), n.addEventListener("load", q));
      var U = function (e, t, n, a, s, r, i) {
        var o = 0, d = e.length, u = null == n;
        if ("object" === k(n)) for (o in s = !0, n) U(e, t, o, n[o], !0, r, i); else if (void 0 !== a && (s = !0, y(a) || (i = !0), u && (i ? (t.call(e, a), t = null) : (u = t, t = function (e, t, n) {
          return u.call(D(e), n)
        })), t)) for (; o < d; o++) t(e[o], n, i ? a : a.call(e[o], o, t(e[o], n)));
        return s ? e : u ? t.call(e) : d ? t(e[0], n) : r
      }, G = /^-ms-/, V = /-([a-z])/g;

      function B(e, t) {
        return t.toUpperCase()
      }

      function $(e) {
        return e.replace(G, "ms-").replace(V, B)
      }

      var K = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

      function X() {
        this.expando = D.expando + X.uid++
      }

      X.uid = 1, X.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        }, set: function (e, t, n) {
          var a, s = this.cache(e);
          if ("string" == typeof t) s[$(t)] = n; else for (a in t) s[$(a)] = t[a];
          return s
        }, get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
        }, access: function (e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
          var n, a = e[this.expando];
          if (void 0 !== a) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in a ? [t] : t.match(C) || []).length;
              for (; n--;) delete a[t[n]]
            }
            (void 0 === t || D.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        }, hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !D.isEmptyObject(t)
        }
      };
      var Z = new X, Q = new X, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;

      function ne(e, t, n) {
        var a;
        if (void 0 === n && 1 === e.nodeType) if (a = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(a))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
            }(n)
          } catch (e) {
          }
          Q.set(e, t, n)
        } else n = void 0;
        return n
      }

      D.extend({
        hasData: function (e) {
          return Q.hasData(e) || Z.hasData(e)
        }, data: function (e, t, n) {
          return Q.access(e, t, n)
        }, removeData: function (e, t) {
          Q.remove(e, t)
        }, _data: function (e, t, n) {
          return Z.access(e, t, n)
        }, _removeData: function (e, t) {
          Z.remove(e, t)
        }
      }), D.fn.extend({
        data: function (e, t) {
          var n, a, s, r = this[0], i = r && r.attributes;
          if (void 0 === e) {
            if (this.length && (s = Q.get(r), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
              for (n = i.length; n--;) i[n] && 0 === (a = i[n].name).indexOf("data-") && (a = $(a.slice(5)), ne(r, a, s[a]));
              Z.set(r, "hasDataAttrs", !0)
            }
            return s
          }
          return "object" == typeof e ? this.each(function () {
            Q.set(this, e)
          }) : U(this, function (t) {
            var n;
            if (r && void 0 === t) return void 0 !== (n = Q.get(r, e)) ? n : void 0 !== (n = ne(r, e)) ? n : void 0;
            this.each(function () {
              Q.set(this, e, t)
            })
          }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e)
          })
        }
      }), D.extend({
        queue: function (e, t, n) {
          var a;
          if (e) return t = (t || "fx") + "queue", a = Z.get(e, t), n && (!a || Array.isArray(n) ? a = Z.access(e, t, D.makeArray(n)) : a.push(n)), a || []
        }, dequeue: function (e, t) {
          t = t || "fx";
          var n = D.queue(e, t), a = n.length, s = n.shift(), r = D._queueHooks(e, t);
          "inprogress" === s && (s = n.shift(), a--), s && ("fx" === t && n.unshift("inprogress"), delete r.stop, s.call(e, function () {
            D.dequeue(e, t)
          }, r)), !a && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return Z.get(e, n) || Z.access(e, n, {
            empty: D.Callbacks("once memory").add(function () {
              Z.remove(e, [t + "queue", n])
            })
          })
        }
      }), D.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? D.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = D.queue(this, e, t);
            D._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && D.dequeue(this, e)
          })
        }, dequeue: function (e) {
          return this.each(function () {
            D.dequeue(this, e)
          })
        }, clearQueue: function (e) {
          return this.queue(e || "fx", [])
        }, promise: function (e, t) {
          var n, a = 1, s = D.Deferred(), r = this, i = this.length, o = function () {
            --a || s.resolveWith(r, [r])
          };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) (n = Z.get(r[i], e + "queueHooks")) && n.empty && (a++, n.empty.add(o));
          return o(), s.promise(t)
        }
      });
      var ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          se = new RegExp("^(?:([+-])=|)(" + ae + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"],
          ie = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && D.contains(e.ownerDocument, e) && "none" === D.css(e, "display")
          }, oe = function (e, t, n, a) {
            var s, r, i = {};
            for (r in t) i[r] = e.style[r], e.style[r] = t[r];
            for (r in s = n.apply(e, a || []), t) e.style[r] = i[r];
            return s
          };

      function de(e, t, n, a) {
        var s, r, i = 20, o = a ? function () {
              return a.cur()
            } : function () {
              return D.css(e, t, "")
            }, d = o(), u = n && n[3] || (D.cssNumber[t] ? "" : "px"),
            _ = (D.cssNumber[t] || "px" !== u && +d) && se.exec(D.css(e, t));
        if (_ && _[3] !== u) {
          for (d /= 2, u = u || _[3], _ = +d || 1; i--;) D.style(e, t, _ + u), (1 - r) * (1 - (r = o() / d || .5)) <= 0 && (i = 0), _ /= r;
          _ *= 2, D.style(e, t, _ + u), n = n || []
        }
        return n && (_ = +_ || +d || 0, s = n[1] ? _ + (n[1] + 1) * n[2] : +n[2], a && (a.unit = u, a.start = _, a.end = s)), s
      }

      var ue = {};

      function _e(e) {
        var t, n = e.ownerDocument, a = e.nodeName, s = ue[a];
        return s || (t = n.body.appendChild(n.createElement(a)), s = D.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), ue[a] = s, s)
      }

      function le(e, t) {
        for (var n, a, s = [], r = 0, i = e.length; r < i; r++) (a = e[r]).style && (n = a.style.display, t ? ("none" === n && (s[r] = Z.get(a, "display") || null, s[r] || (a.style.display = "")), "" === a.style.display && ie(a) && (s[r] = _e(a))) : "none" !== n && (s[r] = "none", Z.set(a, "display", n)));
        for (r = 0; r < i; r++) null != s[r] && (e[r].style.display = s[r]);
        return e
      }

      D.fn.extend({
        show: function () {
          return le(this, !0)
        }, hide: function () {
          return le(this)
        }, toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            ie(this) ? D(this).show() : D(this).hide()
          })
        }
      });
      var me = /^(?:checkbox|radio)$/i, ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          he = /^$|^module$|\/(?:java|ecma)script/i, fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };

      function pe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && x(e, t) ? D.merge([e], n) : n
      }

      function Me(e, t) {
        for (var n = 0, a = e.length; n < a; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
      }

      fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
      var ye, Le, Ye = /<|&#?\w+;/;

      function ge(e, t, n, a, s) {
        for (var r, i, o, d, u, _, l = t.createDocumentFragment(), m = [], c = 0, h = e.length; c < h; c++) if ((r = e[c]) || 0 === r) if ("object" === k(r)) D.merge(m, r.nodeType ? [r] : r); else if (Ye.test(r)) {
          for (i = i || l.appendChild(t.createElement("div")), o = (ce.exec(r) || ["", ""])[1].toLowerCase(), d = fe[o] || fe._default, i.innerHTML = d[1] + D.htmlPrefilter(r) + d[2], _ = d[0]; _--;) i = i.lastChild;
          D.merge(m, i.childNodes), (i = l.firstChild).textContent = ""
        } else m.push(t.createTextNode(r));
        for (l.textContent = "", c = 0; r = m[c++];) if (a && D.inArray(r, a) > -1) s && s.push(r); else if (u = D.contains(r.ownerDocument, r), i = pe(l.appendChild(r), "script"), u && Me(i), n) for (_ = 0; r = i[_++];) he.test(r.type || "") && n.push(r);
        return l
      }

      ye = i.createDocumentFragment().appendChild(i.createElement("div")), (Le = i.createElement("input")).setAttribute("type", "radio"), Le.setAttribute("checked", "checked"), Le.setAttribute("name", "t"), ye.appendChild(Le), M.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", M.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
      var ke = i.documentElement, De = /^key/, ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Te = /^([^.]*)(?:\.(.+)|)/;

      function we() {
        return !0
      }

      function be() {
        return !1
      }

      function Se() {
        try {
          return i.activeElement
        } catch (e) {
        }
      }

      function He(e, t, n, a, s, r) {
        var i, o;
        if ("object" == typeof t) {
          for (o in"string" != typeof n && (a = a || n, n = void 0), t) He(e, o, n, a, t[o], r);
          return e
        }
        if (null == a && null == s ? (s = n, a = n = void 0) : null == s && ("string" == typeof n ? (s = a, a = void 0) : (s = a, a = n, n = void 0)), !1 === s) s = be; else if (!s) return e;
        return 1 === r && (i = s, (s = function (e) {
          return D().off(e), i.apply(this, arguments)
        }).guid = i.guid || (i.guid = D.guid++)), e.each(function () {
          D.event.add(this, t, s, a, n)
        })
      }

      D.event = {
        global: {}, add: function (e, t, n, a, s) {
          var r, i, o, d, u, _, l, m, c, h, f, p = Z.get(e);
          if (p) for (n.handler && (n = (r = n).handler, s = r.selector), s && D.find.matchesSelector(ke, s), n.guid || (n.guid = D.guid++), (d = p.events) || (d = p.events = {}), (i = p.handle) || (i = p.handle = function (t) {
            return void 0 !== D && D.event.triggered !== t.type ? D.event.dispatch.apply(e, arguments) : void 0
          }), u = (t = (t || "").match(C) || [""]).length; u--;) c = f = (o = Te.exec(t[u]) || [])[1], h = (o[2] || "").split(".").sort(), c && (l = D.event.special[c] || {}, c = (s ? l.delegateType : l.bindType) || c, l = D.event.special[c] || {}, _ = D.extend({
            type: c,
            origType: f,
            data: a,
            handler: n,
            guid: n.guid,
            selector: s,
            needsContext: s && D.expr.match.needsContext.test(s),
            namespace: h.join(".")
          }, r), (m = d[c]) || ((m = d[c] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, a, h, i) || e.addEventListener && e.addEventListener(c, i)), l.add && (l.add.call(e, _), _.handler.guid || (_.handler.guid = n.guid)), s ? m.splice(m.delegateCount++, 0, _) : m.push(_), D.event.global[c] = !0)
        }, remove: function (e, t, n, a, s) {
          var r, i, o, d, u, _, l, m, c, h, f, p = Z.hasData(e) && Z.get(e);
          if (p && (d = p.events)) {
            for (u = (t = (t || "").match(C) || [""]).length; u--;) if (c = f = (o = Te.exec(t[u]) || [])[1], h = (o[2] || "").split(".").sort(), c) {
              for (l = D.event.special[c] || {}, m = d[c = (a ? l.delegateType : l.bindType) || c] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = r = m.length; r--;) _ = m[r], !s && f !== _.origType || n && n.guid !== _.guid || o && !o.test(_.namespace) || a && a !== _.selector && ("**" !== a || !_.selector) || (m.splice(r, 1), _.selector && m.delegateCount--, l.remove && l.remove.call(e, _));
              i && !m.length && (l.teardown && !1 !== l.teardown.call(e, h, p.handle) || D.removeEvent(e, c, p.handle), delete d[c])
            } else for (c in d) D.event.remove(e, c + t[u], n, a, !0);
            D.isEmptyObject(d) && Z.remove(e, "handle events")
          }
        }, dispatch: function (e) {
          var t, n, a, s, r, i, o = D.event.fix(e), d = new Array(arguments.length),
              u = (Z.get(this, "events") || {})[o.type] || [], _ = D.event.special[o.type] || {};
          for (d[0] = o, t = 1; t < arguments.length; t++) d[t] = arguments[t];
          if (o.delegateTarget = this, !_.preDispatch || !1 !== _.preDispatch.call(this, o)) {
            for (i = D.event.handlers.call(this, o, u), t = 0; (s = i[t++]) && !o.isPropagationStopped();) for (o.currentTarget = s.elem, n = 0; (r = s.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (a = ((D.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, d)) && !1 === (o.result = a) && (o.preventDefault(), o.stopPropagation()));
            return _.postDispatch && _.postDispatch.call(this, o), o.result
          }
        }, handlers: function (e, t) {
          var n, a, s, r, i, o = [], d = t.delegateCount, u = e.target;
          if (d && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (r = [], i = {}, n = 0; n < d; n++) void 0 === i[s = (a = t[n]).selector + " "] && (i[s] = a.needsContext ? D(s, this).index(u) > -1 : D.find(s, this, null, [u]).length), i[s] && r.push(a);
            r.length && o.push({elem: u, handlers: r})
          }
          return u = this, d < t.length && o.push({elem: u, handlers: t.slice(d)}), o
        }, addProp: function (e, t) {
          Object.defineProperty(D.Event.prototype, e, {
            enumerable: !0, configurable: !0, get: y(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[e]
            }, set: function (t) {
              Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
            }
          })
        }, fix: function (e) {
          return e[D.expando] ? e : new D.Event(e)
        }, special: {
          load: {noBubble: !0}, focus: {
            trigger: function () {
              if (this !== Se() && this.focus) return this.focus(), !1
            }, delegateType: "focusin"
          }, blur: {
            trigger: function () {
              if (this === Se() && this.blur) return this.blur(), !1
            }, delegateType: "focusout"
          }, click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && x(this, "input")) return this.click(), !1
            }, _default: function (e) {
              return x(e.target, "a")
            }
          }, beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, D.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, D.Event = function (e, t) {
        if (!(this instanceof D.Event)) return new D.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && D.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[D.expando] = !0
      }, D.Event.prototype = {
        constructor: D.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, D.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && De.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
      }, D.event.addProp), D.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        D.event.special[e] = {
          delegateType: t, bindType: t, handle: function (e) {
            var n, a = e.relatedTarget, s = e.handleObj;
            return a && (a === this || D.contains(this, a)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
          }
        }
      }), D.fn.extend({
        on: function (e, t, n, a) {
          return He(this, e, t, n, a)
        }, one: function (e, t, n, a) {
          return He(this, e, t, n, a, 1)
        }, off: function (e, t, n) {
          var a, s;
          if (e && e.preventDefault && e.handleObj) return a = e.handleObj, D(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
          if ("object" == typeof e) {
            for (s in e) this.off(s, t, e[s]);
            return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function () {
            D.event.remove(this, e, n, t)
          })
        }
      });
      var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          je = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Ee(e, t) {
        return x(e, "table") && x(11 !== t.nodeType ? t : t.firstChild, "tr") && D(e).children("tbody")[0] || e
      }

      function We(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function Ae(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }

      function Fe(e, t) {
        var n, a, s, r, i, o, d, u;
        if (1 === t.nodeType) {
          if (Z.hasData(e) && (r = Z.access(e), i = Z.set(t, r), u = r.events)) for (s in delete i.handle, i.events = {}, u) for (n = 0, a = u[s].length; n < a; n++) D.event.add(t, s, u[s][n]);
          Q.hasData(e) && (o = Q.access(e), d = D.extend({}, o), Q.set(t, d))
        }
      }

      function Ce(e, t, n, a) {
        t = u.apply([], t);
        var s, r, i, o, d, _, l = 0, m = e.length, c = m - 1, h = t[0], f = y(h);
        if (f || m > 1 && "string" == typeof h && !M.checkClone && Pe.test(h)) return e.each(function (s) {
          var r = e.eq(s);
          f && (t[0] = h.call(this, s, r.html())), Ce(r, t, n, a)
        });
        if (m && (r = (s = ge(t, e[0].ownerDocument, !1, e, a)).firstChild, 1 === s.childNodes.length && (s = r), r || a)) {
          for (o = (i = D.map(pe(s, "script"), We)).length; l < m; l++) d = s, l !== c && (d = D.clone(d, !0, !0), o && D.merge(i, pe(d, "script"))), n.call(e[l], d, l);
          if (o) for (_ = i[i.length - 1].ownerDocument, D.map(i, Ae), l = 0; l < o; l++) d = i[l], he.test(d.type || "") && !Z.access(d, "globalEval") && D.contains(_, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? D._evalUrl && D._evalUrl(d.src) : g(d.textContent.replace(Oe, ""), _, d))
        }
        return e
      }

      function Je(e, t, n) {
        for (var a, s = t ? D.filter(t, e) : e, r = 0; null != (a = s[r]); r++) n || 1 !== a.nodeType || D.cleanData(pe(a)), a.parentNode && (n && D.contains(a.ownerDocument, a) && Me(pe(a, "script")), a.parentNode.removeChild(a));
        return e
      }

      D.extend({
        htmlPrefilter: function (e) {
          return e.replace(xe, "<$1></$2>")
        }, clone: function (e, t, n) {
          var a, s, r, i, o, d, u, _ = e.cloneNode(!0), l = D.contains(e.ownerDocument, e);
          if (!(M.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || D.isXMLDoc(e))) for (i = pe(_), a = 0, s = (r = pe(e)).length; a < s; a++) o = r[a], d = i[a], void 0, "input" === (u = d.nodeName.toLowerCase()) && me.test(o.type) ? d.checked = o.checked : "input" !== u && "textarea" !== u || (d.defaultValue = o.defaultValue);
          if (t) if (n) for (r = r || pe(e), i = i || pe(_), a = 0, s = r.length; a < s; a++) Fe(r[a], i[a]); else Fe(e, _);
          return (i = pe(_, "script")).length > 0 && Me(i, !l && pe(e, "script")), _
        }, cleanData: function (e) {
          for (var t, n, a, s = D.event.special, r = 0; void 0 !== (n = e[r]); r++) if (K(n)) {
            if (t = n[Z.expando]) {
              if (t.events) for (a in t.events) s[a] ? D.event.remove(n, a) : D.removeEvent(n, a, t.handle);
              n[Z.expando] = void 0
            }
            n[Q.expando] && (n[Q.expando] = void 0)
          }
        }
      }), D.fn.extend({
        detach: function (e) {
          return Je(this, e, !0)
        }, remove: function (e) {
          return Je(this, e)
        }, text: function (e) {
          return U(this, function (e) {
            return void 0 === e ? D.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        }, append: function () {
          return Ce(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
          })
        }, prepend: function () {
          return Ce(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Ee(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        }, before: function () {
          return Ce(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        }, after: function () {
          return Ce(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        }, empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (D.cleanData(pe(e, !1)), e.textContent = "");
          return this
        }, clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return D.clone(this, e, t)
          })
        }, html: function (e) {
          return U(this, function (e) {
            var t = this[0] || {}, n = 0, a = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !je.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = D.htmlPrefilter(e);
              try {
                for (; n < a; n++) 1 === (t = this[n] || {}).nodeType && (D.cleanData(pe(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {
              }
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        }, replaceWith: function () {
          var e = [];
          return Ce(this, arguments, function (t) {
            var n = this.parentNode;
            D.inArray(this, e) < 0 && (D.cleanData(pe(this)), n && n.replaceChild(t, this))
          }, e)
        }
      }), D.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        D.fn[e] = function (e) {
          for (var n, a = [], s = D(e), r = s.length - 1, i = 0; i <= r; i++) n = i === r ? this : this.clone(!0), D(s[i])[t](n), _.apply(a, n.get());
          return this.pushStack(a)
        }
      });
      var Ne = new RegExp("^(" + ae + ")(?!px)[a-z%]+$", "i"), ze = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      }, Re = new RegExp(re.join("|"), "i");

      function Ie(e, t, n) {
        var a, s, r, i, o = e.style;
        return (n = n || ze(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || D.contains(e.ownerDocument, e) || (i = D.style(e, t)), !M.pixelBoxStyles() && Ne.test(i) && Re.test(t) && (a = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = a, o.minWidth = s, o.maxWidth = r)), void 0 !== i ? i + "" : i
      }

      function qe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }

      !function () {
        function e() {
          if (_) {
            u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", _.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ke.appendChild(u).appendChild(_);
            var e = n.getComputedStyle(_);
            a = "1%" !== e.top, d = 12 === t(e.marginLeft), _.style.right = "60%", o = 36 === t(e.right), s = 36 === t(e.width), _.style.position = "absolute", r = 36 === _.offsetWidth || "absolute", ke.removeChild(u), _ = null
          }
        }

        function t(e) {
          return Math.round(parseFloat(e))
        }

        var a, s, r, o, d, u = i.createElement("div"), _ = i.createElement("div");
        _.style && (_.style.backgroundClip = "content-box", _.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = "content-box" === _.style.backgroundClip, D.extend(M, {
          boxSizingReliable: function () {
            return e(), s
          }, pixelBoxStyles: function () {
            return e(), o
          }, pixelPosition: function () {
            return e(), a
          }, reliableMarginLeft: function () {
            return e(), d
          }, scrollboxSize: function () {
            return e(), r
          }
        }))
      }();
      var Ue = /^(none|table(?!-c[ea]).+)/, Ge = /^--/,
          Ve = {position: "absolute", visibility: "hidden", display: "block"},
          Be = {letterSpacing: "0", fontWeight: "400"}, $e = ["Webkit", "Moz", "ms"], Ke = i.createElement("div").style;

      function Xe(e) {
        var t = D.cssProps[e];
        return t || (t = D.cssProps[e] = function (e) {
          if (e in Ke) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in Ke) return e
        }(e) || e), t
      }

      function Ze(e, t, n) {
        var a = se.exec(t);
        return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
      }

      function Qe(e, t, n, a, s, r) {
        var i = "width" === t ? 1 : 0, o = 0, d = 0;
        if (n === (a ? "border" : "content")) return 0;
        for (; i < 4; i += 2) "margin" === n && (d += D.css(e, n + re[i], !0, s)), a ? ("content" === n && (d -= D.css(e, "padding" + re[i], !0, s)), "margin" !== n && (d -= D.css(e, "border" + re[i] + "Width", !0, s))) : (d += D.css(e, "padding" + re[i], !0, s), "padding" !== n ? d += D.css(e, "border" + re[i] + "Width", !0, s) : o += D.css(e, "border" + re[i] + "Width", !0, s));
        return !a && r >= 0 && (d += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - d - o - .5))), d
      }

      function et(e, t, n) {
        var a = ze(e), s = Ie(e, t, a), r = "border-box" === D.css(e, "boxSizing", !1, a), i = r;
        if (Ne.test(s)) {
          if (!n) return s;
          s = "auto"
        }
        return i = i && (M.boxSizingReliable() || s === e.style[t]), ("auto" === s || !parseFloat(s) && "inline" === D.css(e, "display", !1, a)) && (s = e["offset" + t[0].toUpperCase() + t.slice(1)], i = !0), (s = parseFloat(s) || 0) + Qe(e, t, n || (r ? "border" : "content"), i, a, s) + "px"
      }

      function tt(e, t, n, a, s) {
        return new tt.prototype.init(e, t, n, a, s)
      }

      D.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ie(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, a) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var s, r, i, o = $(t), d = Ge.test(t), u = e.style;
            if (d || (t = Xe(o)), i = D.cssHooks[t] || D.cssHooks[o], void 0 === n) return i && "get" in i && void 0 !== (s = i.get(e, !1, a)) ? s : u[t];
            "string" === (r = typeof n) && (s = se.exec(n)) && s[1] && (n = de(e, t, s), r = "number"), null != n && n == n && ("number" === r && (n += s && s[3] || (D.cssNumber[o] ? "" : "px")), M.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, a)) || (d ? u.setProperty(t, n) : u[t] = n))
          }
        },
        css: function (e, t, n, a) {
          var s, r, i, o = $(t);
          return Ge.test(t) || (t = Xe(o)), (i = D.cssHooks[t] || D.cssHooks[o]) && "get" in i && (s = i.get(e, !0, n)), void 0 === s && (s = Ie(e, t, a)), "normal" === s && t in Be && (s = Be[t]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
        }
      }), D.each(["height", "width"], function (e, t) {
        D.cssHooks[t] = {
          get: function (e, n, a) {
            if (n) return !Ue.test(D.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, a) : oe(e, Ve, function () {
              return et(e, t, a)
            })
          }, set: function (e, n, a) {
            var s, r = ze(e), i = "border-box" === D.css(e, "boxSizing", !1, r), o = a && Qe(e, t, a, i, r);
            return i && M.scrollboxSize() === r.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Qe(e, t, "border", !1, r) - .5)), o && (s = se.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = D.css(e, t)), Ze(0, n, o)
          }
        }
      }), D.cssHooks.marginLeft = qe(M.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {marginLeft: 0}, function () {
          return e.getBoundingClientRect().left
        })) + "px"
      }), D.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        D.cssHooks[e + t] = {
          expand: function (n) {
            for (var a = 0, s = {}, r = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) s[e + re[a] + t] = r[a] || r[a - 2] || r[0];
            return s
          }
        }, "margin" !== e && (D.cssHooks[e + t].set = Ze)
      }), D.fn.extend({
        css: function (e, t) {
          return U(this, function (e, t, n) {
            var a, s, r = {}, i = 0;
            if (Array.isArray(t)) {
              for (a = ze(e), s = t.length; i < s; i++) r[t[i]] = D.css(e, t[i], !1, a);
              return r
            }
            return void 0 !== n ? D.style(e, t, n) : D.css(e, t)
          }, e, t, arguments.length > 1)
        }
      }), D.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, a, s, r) {
          this.elem = e, this.prop = n, this.easing = s || D.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = r || (D.cssNumber[n] ? "" : "px")
        }, cur: function () {
          var e = tt.propHooks[this.prop];
          return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
          var t, n = tt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = D.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
      }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = D.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          }, set: function (e) {
            D.fx.step[e.prop] ? D.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[D.cssProps[e.prop]] && !D.cssHooks[e.prop] ? e.elem[e.prop] = e.now : D.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, D.easing = {
        linear: function (e) {
          return e
        }, swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
      }, D.fx = tt.prototype.init, D.fx.step = {};
      var nt, at, st = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;

      function it() {
        at && (!1 === i.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(it) : n.setTimeout(it, D.fx.interval), D.fx.tick())
      }

      function ot() {
        return n.setTimeout(function () {
          nt = void 0
        }), nt = Date.now()
      }

      function dt(e, t) {
        var n, a = 0, s = {height: e};
        for (t = t ? 1 : 0; a < 4; a += 2 - t) s["margin" + (n = re[a])] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s
      }

      function ut(e, t, n) {
        for (var a, s = (_t.tweeners[t] || []).concat(_t.tweeners["*"]), r = 0, i = s.length; r < i; r++) if (a = s[r].call(n, t, e)) return a
      }

      function _t(e, t, n) {
        var a, s, r = 0, i = _t.prefilters.length, o = D.Deferred().always(function () {
          delete d.elem
        }), d = function () {
          if (s) return !1;
          for (var t = nt || ot(), n = Math.max(0, u.startTime + u.duration - t), a = 1 - (n / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(a);
          return o.notifyWith(e, [u, a, n]), a < 1 && i ? n : (i || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
        }, u = o.promise({
          elem: e,
          props: D.extend({}, t),
          opts: D.extend(!0, {specialEasing: {}, easing: D.easing._default}, n),
          originalProperties: t,
          originalOptions: n,
          startTime: nt || ot(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var a = D.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(a), a
          },
          stop: function (t) {
            var n = 0, a = t ? u.tweens.length : 0;
            if (s) return this;
            for (s = !0; n < a; n++) u.tweens[n].run(1);
            return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
          }
        }), _ = u.props;
        for (!function (e, t) {
          var n, a, s, r, i;
          for (n in e) if (s = t[a = $(n)], r = e[n], Array.isArray(r) && (s = r[1], r = e[n] = r[0]), n !== a && (e[a] = r, delete e[n]), (i = D.cssHooks[a]) && "expand" in i) for (n in r = i.expand(r), delete e[a], r) n in e || (e[n] = r[n], t[n] = s); else t[a] = s
        }(_, u.opts.specialEasing); r < i; r++) if (a = _t.prefilters[r].call(u, e, _, u.opts)) return y(a.stop) && (D._queueHooks(u.elem, u.opts.queue).stop = a.stop.bind(a)), a;
        return D.map(_, ut, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), D.fx.timer(D.extend(d, {
          elem: e,
          anim: u,
          queue: u.opts.queue
        })), u
      }

      D.Animation = D.extend(_t, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return de(n.elem, e, se.exec(t), n), n
          }]
        }, tweener: function (e, t) {
          y(e) ? (t = e, e = ["*"]) : e = e.match(C);
          for (var n, a = 0, s = e.length; a < s; a++) n = e[a], _t.tweeners[n] = _t.tweeners[n] || [], _t.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
          var a, s, r, i, o, d, u, _, l = "width" in t || "height" in t, m = this, c = {}, h = e.style,
              f = e.nodeType && ie(e), p = Z.get(e, "fxshow");
          for (a in n.queue || (null == (i = D._queueHooks(e, "fx")).unqueued && (i.unqueued = 0, o = i.empty.fire, i.empty.fire = function () {
            i.unqueued || o()
          }), i.unqueued++, m.always(function () {
            m.always(function () {
              i.unqueued--, D.queue(e, "fx").length || i.empty.fire()
            })
          })), t) if (s = t[a], st.test(s)) {
            if (delete t[a], r = r || "toggle" === s, s === (f ? "hide" : "show")) {
              if ("show" !== s || !p || void 0 === p[a]) continue;
              f = !0
            }
            c[a] = p && p[a] || D.style(e, a)
          }
          if ((d = !D.isEmptyObject(t)) || !D.isEmptyObject(c)) for (a in l && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = p && p.display) && (u = Z.get(e, "display")), "none" === (_ = D.css(e, "display")) && (u ? _ = u : (le([e], !0), u = e.style.display || u, _ = D.css(e, "display"), le([e]))), ("inline" === _ || "inline-block" === _ && null != u) && "none" === D.css(e, "float") && (d || (m.done(function () {
            h.display = u
          }), null == u && (_ = h.display, u = "none" === _ ? "" : _)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", m.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), d = !1, c) d || (p ? "hidden" in p && (f = p.hidden) : p = Z.access(e, "fxshow", {display: u}), r && (p.hidden = !f), f && le([e], !0), m.done(function () {
            for (a in f || le([e]), Z.remove(e, "fxshow"), c) D.style(e, a, c[a])
          })), d = ut(f ? p[a] : 0, a, m), a in p || (p[a] = d.start, f && (d.end = d.start, d.start = 0))
        }], prefilter: function (e, t) {
          t ? _t.prefilters.unshift(e) : _t.prefilters.push(e)
        }
      }), D.speed = function (e, t, n) {
        var a = e && "object" == typeof e ? D.extend({}, e) : {
          complete: n || !n && t || y(e) && e,
          duration: e,
          easing: n && t || t && !y(t) && t
        };
        return D.fx.off ? a.duration = 0 : "number" != typeof a.duration && (a.duration in D.fx.speeds ? a.duration = D.fx.speeds[a.duration] : a.duration = D.fx.speeds._default), null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function () {
          y(a.old) && a.old.call(this), a.queue && D.dequeue(this, a.queue)
        }, a
      }, D.fn.extend({
        fadeTo: function (e, t, n, a) {
          return this.filter(ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, a)
        }, animate: function (e, t, n, a) {
          var s = D.isEmptyObject(e), r = D.speed(t, n, a), i = function () {
            var t = _t(this, D.extend({}, e), r);
            (s || Z.get(this, "finish")) && t.stop(!0)
          };
          return i.finish = i, s || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        }, stop: function (e, t, n) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0, s = null != e && e + "queueHooks", r = D.timers, i = Z.get(this);
            if (s) i[s] && i[s].stop && a(i[s]); else for (s in i) i[s] && i[s].stop && rt.test(s) && a(i[s]);
            for (s = r.length; s--;) r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(n), t = !1, r.splice(s, 1));
            !t && n || D.dequeue(this, e)
          })
        }, finish: function (e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t, n = Z.get(this), a = n[e + "queue"], s = n[e + "queueHooks"], r = D.timers, i = a ? a.length : 0;
            for (n.finish = !0, D.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < i; t++) a[t] && a[t].finish && a[t].finish.call(this);
            delete n.finish
          })
        }
      }), D.each(["toggle", "show", "hide"], function (e, t) {
        var n = D.fn[t];
        D.fn[t] = function (e, a, s) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, a, s)
        }
      }), D.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function (e, t) {
        D.fn[e] = function (e, n, a) {
          return this.animate(t, e, n, a)
        }
      }), D.timers = [], D.fx.tick = function () {
        var e, t = 0, n = D.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || D.fx.stop(), nt = void 0
      }, D.fx.timer = function (e) {
        D.timers.push(e), D.fx.start()
      }, D.fx.interval = 13, D.fx.start = function () {
        at || (at = !0, it())
      }, D.fx.stop = function () {
        at = null
      }, D.fx.speeds = {slow: 600, fast: 200, _default: 400}, D.fn.delay = function (e, t) {
        return e = D.fx && D.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, a) {
          var s = n.setTimeout(t, e);
          a.stop = function () {
            n.clearTimeout(s)
          }
        })
      }, function () {
        var e = i.createElement("input"), t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox", M.checkOn = "" !== e.value, M.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", M.radioValue = "t" === e.value
      }();
      var lt, mt = D.expr.attrHandle;
      D.fn.extend({
        attr: function (e, t) {
          return U(this, D.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
          return this.each(function () {
            D.removeAttr(this, e)
          })
        }
      }), D.extend({
        attr: function (e, t, n) {
          var a, s, r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? D.prop(e, t, n) : (1 === r && D.isXMLDoc(e) || (s = D.attrHooks[t.toLowerCase()] || (D.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void D.removeAttr(e, t) : s && "set" in s && void 0 !== (a = s.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : s && "get" in s && null !== (a = s.get(e, t)) ? a : null == (a = D.find.attr(e, t)) ? void 0 : a)
        }, attrHooks: {
          type: {
            set: function (e, t) {
              if (!M.radioValue && "radio" === t && x(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        }, removeAttr: function (e, t) {
          var n, a = 0, s = t && t.match(C);
          if (s && 1 === e.nodeType) for (; n = s[a++];) e.removeAttribute(n)
        }
      }), lt = {
        set: function (e, t, n) {
          return !1 === t ? D.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, D.each(D.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = mt[t] || D.find.attr;
        mt[t] = function (e, t, a) {
          var s, r, i = t.toLowerCase();
          return a || (r = mt[i], mt[i] = s, s = null != n(e, t, a) ? i : null, mt[i] = r), s
        }
      });
      var ct = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;

      function ft(e) {
        return (e.match(C) || []).join(" ")
      }

      function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function Mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(C) || []
      }

      D.fn.extend({
        prop: function (e, t) {
          return U(this, D.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
          return this.each(function () {
            delete this[D.propFix[e] || e]
          })
        }
      }), D.extend({
        prop: function (e, t, n) {
          var a, s, r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r) return 1 === r && D.isXMLDoc(e) || (t = D.propFix[t] || t, s = D.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (a = s.set(e, n, t)) ? a : e[t] = n : s && "get" in s && null !== (a = s.get(e, t)) ? a : e[t]
        }, propHooks: {
          tabIndex: {
            get: function (e) {
              var t = D.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : ct.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        }, propFix: {for: "htmlFor", class: "className"}
      }), M.optSelected || (D.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), D.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        D.propFix[this.toLowerCase()] = this
      }), D.fn.extend({
        addClass: function (e) {
          var t, n, a, s, r, i, o, d = 0;
          if (y(e)) return this.each(function (t) {
            D(this).addClass(e.call(this, t, pt(this)))
          });
          if ((t = Mt(e)).length) for (; n = this[d++];) if (s = pt(n), a = 1 === n.nodeType && " " + ft(s) + " ") {
            for (i = 0; r = t[i++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
            s !== (o = ft(a)) && n.setAttribute("class", o)
          }
          return this
        }, removeClass: function (e) {
          var t, n, a, s, r, i, o, d = 0;
          if (y(e)) return this.each(function (t) {
            D(this).removeClass(e.call(this, t, pt(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = Mt(e)).length) for (; n = this[d++];) if (s = pt(n), a = 1 === n.nodeType && " " + ft(s) + " ") {
            for (i = 0; r = t[i++];) for (; a.indexOf(" " + r + " ") > -1;) a = a.replace(" " + r + " ", " ");
            s !== (o = ft(a)) && n.setAttribute("class", o)
          }
          return this
        }, toggleClass: function (e, t) {
          var n = typeof e, a = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
            D(this).toggleClass(e.call(this, n, pt(this), t), t)
          }) : this.each(function () {
            var t, s, r, i;
            if (a) for (s = 0, r = D(this), i = Mt(e); t = i[s++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = pt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
          })
        }, hasClass: function (e) {
          var t, n, a = 0;
          for (t = " " + e + " "; n = this[a++];) if (1 === n.nodeType && (" " + ft(pt(n)) + " ").indexOf(t) > -1) return !0;
          return !1
        }
      });
      var yt = /\r/g;
      D.fn.extend({
        val: function (e) {
          var t, n, a, s = this[0];
          return arguments.length ? (a = y(e), this.each(function (n) {
            var s;
            1 === this.nodeType && (null == (s = a ? e.call(this, n, D(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = D.map(s, function (e) {
              return null == e ? "" : e + ""
            })), (t = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
          })) : s ? (t = D.valHooks[s.type] || D.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof(n = s.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
      }), D.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = D.find.attr(e, "value");
              return null != t ? t : ft(D.text(e))
            }
          }, select: {
            get: function (e) {
              var t, n, a, s = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [],
                  d = i ? r + 1 : s.length;
              for (a = r < 0 ? d : i ? r : 0; a < d; a++) if (((n = s[a]).selected || a === r) && !n.disabled && (!n.parentNode.disabled || !x(n.parentNode, "optgroup"))) {
                if (t = D(n).val(), i) return t;
                o.push(t)
              }
              return o
            }, set: function (e, t) {
              for (var n, a, s = e.options, r = D.makeArray(t), i = s.length; i--;) ((a = s[i]).selected = D.inArray(D.valHooks.option.get(a), r) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), r
            }
          }
        }
      }), D.each(["radio", "checkbox"], function () {
        D.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t)) return e.checked = D.inArray(D(e).val(), t) > -1
          }
        }, M.checkOn || (D.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      }), M.focusin = "onfocusin" in n;
      var Lt = /^(?:focusinfocus|focusoutblur)$/, Yt = function (e) {
        e.stopPropagation()
      };
      D.extend(D.event, {
        trigger: function (e, t, a, s) {
          var r, o, d, u, _, l, m, c, f = [a || i], p = h.call(e, "type") ? e.type : e,
              M = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (o = c = d = a = a || i, 3 !== a.nodeType && 8 !== a.nodeType && !Lt.test(p + D.event.triggered) && (p.indexOf(".") > -1 && (p = (M = p.split(".")).shift(), M.sort()), _ = p.indexOf(":") < 0 && "on" + p, (e = e[D.expando] ? e : new D.Event(p, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = M.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = a), t = null == t ? [e] : D.makeArray(t, [e]), m = D.event.special[p] || {}, s || !m.trigger || !1 !== m.trigger.apply(a, t))) {
            if (!s && !m.noBubble && !L(a)) {
              for (u = m.delegateType || p, Lt.test(u + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), d = o;
              d === (a.ownerDocument || i) && f.push(d.defaultView || d.parentWindow || n)
            }
            for (r = 0; (o = f[r++]) && !e.isPropagationStopped();) c = o, e.type = r > 1 ? u : m.bindType || p, (l = (Z.get(o, "events") || {})[e.type] && Z.get(o, "handle")) && l.apply(o, t), (l = _ && o[_]) && l.apply && K(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
            return e.type = p, s || e.isDefaultPrevented() || m._default && !1 !== m._default.apply(f.pop(), t) || !K(a) || _ && y(a[p]) && !L(a) && ((d = a[_]) && (a[_] = null), D.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Yt), a[p](), e.isPropagationStopped() && c.removeEventListener(p, Yt), D.event.triggered = void 0, d && (a[_] = d)), e.result
          }
        }, simulate: function (e, t, n) {
          var a = D.extend(new D.Event, n, {type: e, isSimulated: !0});
          D.event.trigger(a, null, t)
        }
      }), D.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            D.event.trigger(e, t, this)
          })
        }, triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return D.event.trigger(e, t, n, !0)
        }
      }), M.focusin || D.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
          D.event.simulate(t, e.target, D.event.fix(e))
        };
        D.event.special[t] = {
          setup: function () {
            var a = this.ownerDocument || this, s = Z.access(a, t);
            s || a.addEventListener(e, n, !0), Z.access(a, t, (s || 0) + 1)
          }, teardown: function () {
            var a = this.ownerDocument || this, s = Z.access(a, t) - 1;
            s ? Z.access(a, t, s) : (a.removeEventListener(e, n, !0), Z.remove(a, t))
          }
        }
      });
      var gt = n.location, kt = Date.now(), Dt = /\?/;
      D.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = (new n.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
          t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || D.error("Invalid XML: " + e), t
      };
      var vt = /\[\]$/, Tt = /\r?\n/g, wt = /^(?:submit|button|image|reset|file)$/i,
          bt = /^(?:input|select|textarea|keygen)/i;

      function St(e, t, n, a) {
        var s;
        if (Array.isArray(t)) D.each(t, function (t, s) {
          n || vt.test(e) ? a(e, s) : St(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, a)
        }); else if (n || "object" !== k(t)) a(e, t); else for (s in t) St(e + "[" + s + "]", t[s], n, a)
      }

      D.param = function (e, t) {
        var n, a = [], s = function (e, t) {
          var n = y(t) ? t() : t;
          a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !D.isPlainObject(e)) D.each(e, function () {
          s(this.name, this.value)
        }); else for (n in e) St(n, e[n], t, s);
        return a.join("&")
      }, D.fn.extend({
        serialize: function () {
          return D.param(this.serializeArray())
        }, serializeArray: function () {
          return this.map(function () {
            var e = D.prop(this, "elements");
            return e ? D.makeArray(e) : this
          }).filter(function () {
            var e = this.type;
            return this.name && !D(this).is(":disabled") && bt.test(this.nodeName) && !wt.test(e) && (this.checked || !me.test(e))
          }).map(function (e, t) {
            var n = D(this).val();
            return null == n ? null : Array.isArray(n) ? D.map(n, function (e) {
              return {name: t.name, value: e.replace(Tt, "\r\n")}
            }) : {name: t.name, value: n.replace(Tt, "\r\n")}
          }).get()
        }
      });
      var Ht = /%20/g, xt = /#.*$/, jt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/,
          Et = /^\/\//, Wt = {}, At = {}, Ft = "*/".concat("*"), Ct = i.createElement("a");

      function Jt(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var a, s = 0, r = t.toLowerCase().match(C) || [];
          if (y(n)) for (; a = r[s++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
        }
      }

      function Nt(e, t, n, a) {
        var s = {}, r = e === At;

        function i(o) {
          var d;
          return s[o] = !0, D.each(e[o] || [], function (e, o) {
            var u = o(t, n, a);
            return "string" != typeof u || r || s[u] ? r ? !(d = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
          }), d
        }

        return i(t.dataTypes[0]) || !s["*"] && i("*")
      }

      function zt(e, t) {
        var n, a, s = D.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : a || (a = {}))[n] = t[n]);
        return a && D.extend(!0, e, a), e
      }

      Ct.href = gt.href, D.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: gt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ft,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
          responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
          converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": D.parseXML},
          flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
          return t ? zt(zt(e, D.ajaxSettings), t) : zt(D.ajaxSettings, e)
        },
        ajaxPrefilter: Jt(Wt),
        ajaxTransport: Jt(At),
        ajax: function (e, t) {
          "object" == typeof e && (t = e, e = void 0), t = t || {};
          var a, s, r, o, d, u, _, l, m, c, h = D.ajaxSetup({}, t), f = h.context || h,
              p = h.context && (f.nodeType || f.jquery) ? D(f) : D.event, M = D.Deferred(),
              y = D.Callbacks("once memory"), L = h.statusCode || {}, Y = {}, g = {}, k = "canceled", v = {
                readyState: 0, getResponseHeader: function (e) {
                  var t;
                  if (_) {
                    if (!o) for (o = {}; t = Pt.exec(r);) o[t[1].toLowerCase()] = t[2];
                    t = o[e.toLowerCase()]
                  }
                  return null == t ? null : t
                }, getAllResponseHeaders: function () {
                  return _ ? r : null
                }, setRequestHeader: function (e, t) {
                  return null == _ && (e = g[e.toLowerCase()] = g[e.toLowerCase()] || e, Y[e] = t), this
                }, overrideMimeType: function (e) {
                  return null == _ && (h.mimeType = e), this
                }, statusCode: function (e) {
                  var t;
                  if (e) if (_) v.always(e[v.status]); else for (t in e) L[t] = [L[t], e[t]];
                  return this
                }, abort: function (e) {
                  var t = e || k;
                  return a && a.abort(t), T(0, t), this
                }
              };
          if (M.promise(v), h.url = ((e || h.url || gt.href) + "").replace(Et, gt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(C) || [""], null == h.crossDomain) {
            u = i.createElement("a");
            try {
              u.href = h.url, u.href = u.href, h.crossDomain = Ct.protocol + "//" + Ct.host != u.protocol + "//" + u.host
            } catch (e) {
              h.crossDomain = !0
            }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = D.param(h.data, h.traditional)), Nt(Wt, h, t, v), _) return v;
          for (m in(l = D.event && h.global) && 0 == D.active++ && D.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), s = h.url.replace(xt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (c = h.url.slice(s.length), h.data && (h.processData || "string" == typeof h.data) && (s += (Dt.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (s = s.replace(jt, "$1"), c = (Dt.test(s) ? "&" : "?") + "_=" + kt++ + c), h.url = s + c), h.ifModified && (D.lastModified[s] && v.setRequestHeader("If-Modified-Since", D.lastModified[s]), D.etag[s] && v.setRequestHeader("If-None-Match", D.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && v.setRequestHeader("Content-Type", h.contentType), v.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) v.setRequestHeader(m, h.headers[m]);
          if (h.beforeSend && (!1 === h.beforeSend.call(f, v, h) || _)) return v.abort();
          if (k = "abort", y.add(h.complete), v.done(h.success), v.fail(h.error), a = Nt(At, h, t, v)) {
            if (v.readyState = 1, l && p.trigger("ajaxSend", [v, h]), _) return v;
            h.async && h.timeout > 0 && (d = n.setTimeout(function () {
              v.abort("timeout")
            }, h.timeout));
            try {
              _ = !1, a.send(Y, T)
            } catch (e) {
              if (_) throw e;
              T(-1, e)
            }
          } else T(-1, "No Transport");

          function T(e, t, i, o) {
            var u, m, c, Y, g, k = t;
            _ || (_ = !0, d && n.clearTimeout(d), a = void 0, r = o || "", v.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (Y = function (e, t, n) {
              for (var a, s, r, i, o = e.contents, d = e.dataTypes; "*" === d[0];) d.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
              if (a) for (s in o) if (o[s] && o[s].test(a)) {
                d.unshift(s);
                break
              }
              if (d[0] in n) r = d[0]; else {
                for (s in n) {
                  if (!d[0] || e.converters[s + " " + d[0]]) {
                    r = s;
                    break
                  }
                  i || (i = s)
                }
                r = r || i
              }
              if (r) return r !== d[0] && d.unshift(r), n[r]
            }(h, v, i)), Y = function (e, t, n, a) {
              var s, r, i, o, d, u = {}, _ = e.dataTypes.slice();
              if (_[1]) for (i in e.converters) u[i.toLowerCase()] = e.converters[i];
              for (r = _.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !d && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = r, r = _.shift()) if ("*" === r) r = d; else if ("*" !== d && d !== r) {
                if (!(i = u[d + " " + r] || u["* " + r])) for (s in u) if ((o = s.split(" "))[1] === r && (i = u[d + " " + o[0]] || u["* " + o[0]])) {
                  !0 === i ? i = u[s] : !0 !== u[s] && (r = o[0], _.unshift(o[1]));
                  break
                }
                if (!0 !== i) if (i && e.throws) t = i(t); else try {
                  t = i(t)
                } catch (e) {
                  return {state: "parsererror", error: i ? e : "No conversion from " + d + " to " + r}
                }
              }
              return {state: "success", data: t}
            }(h, Y, v, u), u ? (h.ifModified && ((g = v.getResponseHeader("Last-Modified")) && (D.lastModified[s] = g), (g = v.getResponseHeader("etag")) && (D.etag[s] = g)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = Y.state, m = Y.data, u = !(c = Y.error))) : (c = k, !e && k || (k = "error", e < 0 && (e = 0))), v.status = e, v.statusText = (t || k) + "", u ? M.resolveWith(f, [m, k, v]) : M.rejectWith(f, [v, k, c]), v.statusCode(L), L = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [v, h, u ? m : c]), y.fireWith(f, [v, k]), l && (p.trigger("ajaxComplete", [v, h]), --D.active || D.event.trigger("ajaxStop")))
          }

          return v
        },
        getJSON: function (e, t, n) {
          return D.get(e, t, n, "json")
        },
        getScript: function (e, t) {
          return D.get(e, void 0, t, "script")
        }
      }), D.each(["get", "post"], function (e, t) {
        D[t] = function (e, n, a, s) {
          return y(n) && (s = s || a, a = n, n = void 0), D.ajax(D.extend({
            url: e,
            type: t,
            dataType: s,
            data: n,
            success: a
          }, D.isPlainObject(e) && e))
        }
      }), D._evalUrl = function (e) {
        return D.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
      }, D.fn.extend({
        wrapAll: function (e) {
          var t;
          return this[0] && (y(e) && (e = e.call(this[0])), t = D(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this
        }, wrapInner: function (e) {
          return y(e) ? this.each(function (t) {
            D(this).wrapInner(e.call(this, t))
          }) : this.each(function () {
            var t = D(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          })
        }, wrap: function (e) {
          var t = y(e);
          return this.each(function (n) {
            D(this).wrapAll(t ? e.call(this, n) : e)
          })
        }, unwrap: function (e) {
          return this.parent(e).not("body").each(function () {
            D(this).replaceWith(this.childNodes)
          }), this
        }
      }), D.expr.pseudos.hidden = function (e) {
        return !D.expr.pseudos.visible(e)
      }, D.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, D.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest
        } catch (e) {
        }
      };
      var Rt = {0: 200, 1223: 204}, It = D.ajaxSettings.xhr();
      M.cors = !!It && "withCredentials" in It, M.ajax = It = !!It, D.ajaxTransport(function (e) {
        var t, a;
        if (M.cors || It && !e.crossDomain) return {
          send: function (s, r) {
            var i, o = e.xhr();
            if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
            for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) o.setRequestHeader(i, s[i]);
            t = function (e) {
              return function () {
                t && (t = a = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(Rt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
              }
            }, o.onload = t(), a = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = a : o.onreadystatechange = function () {
              4 === o.readyState && n.setTimeout(function () {
                t && a()
              })
            }, t = t("abort");
            try {
              o.send(e.hasContent && e.data || null)
            } catch (e) {
              if (t) throw e
            }
          }, abort: function () {
            t && t()
          }
        }
      }), D.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
      }), D.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
          "text script": function (e) {
            return D.globalEval(e), e
          }
        }
      }), D.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), D.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
          send: function (a, s) {
            t = D("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
              t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
            }), i.head.appendChild(t[0])
          }, abort: function () {
            n && n()
          }
        }
      });
      var qt, Ut = [], Gt = /(=)\?(?=&|$)|\?\?/;
      D.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
          var e = Ut.pop() || D.expando + "_" + kt++;
          return this[e] = !0, e
        }
      }), D.ajaxPrefilter("json jsonp", function (e, t, a) {
        var s, r, i,
            o = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (o || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Gt, "$1" + s) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
          return i || D.error(s + " was not called"), i[0]
        }, e.dataTypes[0] = "json", r = n[s], n[s] = function () {
          i = arguments
        }, a.always(function () {
          void 0 === r ? D(n).removeProp(s) : n[s] = r, e[s] && (e.jsonpCallback = t.jsonpCallback, Ut.push(s)), i && y(r) && r(i[0]), i = r = void 0
        }), "script"
      }), M.createHTMLDocument = ((qt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), D.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (M.createHTMLDocument ? ((a = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(a)) : t = i), s = j.exec(e), r = !n && [], s ? [t.createElement(s[1])] : (s = ge([e], t, r), r && r.length && D(r).remove(), D.merge([], s.childNodes)));
        var a, s, r
      }, D.fn.load = function (e, t, n) {
        var a, s, r, i = this, o = e.indexOf(" ");
        return o > -1 && (a = ft(e.slice(o)), e = e.slice(0, o)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), i.length > 0 && D.ajax({
          url: e,
          type: s || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          r = arguments, i.html(a ? D("<div>").append(D.parseHTML(e)).find(a) : e)
        }).always(n && function (e, t) {
          i.each(function () {
            n.apply(this, r || [e.responseText, t, e])
          })
        }), this
      }, D.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        D.fn[t] = function (e) {
          return this.on(t, e)
        }
      }), D.expr.pseudos.animated = function (e) {
        return D.grep(D.timers, function (t) {
          return e === t.elem
        }).length
      }, D.offset = {
        setOffset: function (e, t, n) {
          var a, s, r, i, o, d, u = D.css(e, "position"), _ = D(e), l = {};
          "static" === u && (e.style.position = "relative"), o = _.offset(), r = D.css(e, "top"), d = D.css(e, "left"), ("absolute" === u || "fixed" === u) && (r + d).indexOf("auto") > -1 ? (i = (a = _.position()).top, s = a.left) : (i = parseFloat(r) || 0, s = parseFloat(d) || 0), y(t) && (t = t.call(e, n, D.extend({}, o))), null != t.top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : _.css(l)
        }
      }, D.fn.extend({
        offset: function (e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            D.offset.setOffset(this, e, t)
          });
          var t, n, a = this[0];
          return a ? a.getClientRects().length ? (t = a.getBoundingClientRect(), n = a.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {top: 0, left: 0} : void 0
        }, position: function () {
          if (this[0]) {
            var e, t, n, a = this[0], s = {top: 0, left: 0};
            if ("fixed" === D.css(a, "position")) t = a.getBoundingClientRect(); else {
              for (t = this.offset(), n = a.ownerDocument, e = a.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === D.css(e, "position");) e = e.parentNode;
              e && e !== a && 1 === e.nodeType && ((s = D(e).offset()).top += D.css(e, "borderTopWidth", !0), s.left += D.css(e, "borderLeftWidth", !0))
            }
            return {top: t.top - s.top - D.css(a, "marginTop", !0), left: t.left - s.left - D.css(a, "marginLeft", !0)}
          }
        }, offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === D.css(e, "position");) e = e.offsetParent;
            return e || ke
          })
        }
      }), D.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        D.fn[e] = function (a) {
          return U(this, function (e, a, s) {
            var r;
            if (L(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === s) return r ? r[t] : e[a];
            r ? r.scrollTo(n ? r.pageXOffset : s, n ? s : r.pageYOffset) : e[a] = s
          }, e, a, arguments.length)
        }
      }), D.each(["top", "left"], function (e, t) {
        D.cssHooks[t] = qe(M.pixelPosition, function (e, n) {
          if (n) return n = Ie(e, t), Ne.test(n) ? D(e).position()[t] + "px" : n
        })
      }), D.each({Height: "height", Width: "width"}, function (e, t) {
        D.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, a) {
          D.fn[a] = function (s, r) {
            var i = arguments.length && (n || "boolean" != typeof s),
                o = n || (!0 === s || !0 === r ? "margin" : "border");
            return U(this, function (t, n, s) {
              var r;
              return L(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? D.css(t, n, o) : D.style(t, n, s, o)
            }, t, i ? s : void 0, i)
          }
        })
      }), D.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        D.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      }), D.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), D.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n)
        }, unbind: function (e, t) {
          return this.off(e, null, t)
        }, delegate: function (e, t, n, a) {
          return this.on(t, e, n, a)
        }, undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
      }), D.proxy = function (e, t) {
        var n, a, s;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return a = d.call(arguments, 2), (s = function () {
          return e.apply(t || this, a.concat(d.call(arguments)))
        }).guid = e.guid = e.guid || D.guid++, s
      }, D.holdReady = function (e) {
        e ? D.readyWait++ : D.ready(!0)
      }, D.isArray = Array.isArray, D.parseJSON = JSON.parse, D.nodeName = x, D.isFunction = y, D.isWindow = L, D.camelCase = $, D.type = k, D.now = Date.now, D.isNumeric = function (e) {
        var t = D.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, void 0 === (a = function () {
        return D
      }.apply(t, [])) || (e.exports = a);
      var Vt = n.jQuery, Bt = n.$;
      return D.noConflict = function (e) {
        return n.$ === D && (n.$ = Bt), e && n.jQuery === D && (n.jQuery = Vt), D
      }, s || (n.jQuery = n.$ = D), D
    })
  }, "8v14": function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? s[n][0] : s[n][1]
      }

      e.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, ALEw: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, Ab7C: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Изминатата] dddd [во] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Изминатиот] dddd [во] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "после %s",
          past: "пред %s",
          s: "неколку секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          M: "месец",
          MM: "%d месеци",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10, n = e % 100;
          return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, AoDM: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("pt-br", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "poucos segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº"
      })
    })(n("PJh5"))
  }, BEem: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, BbgG: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            case"M":
              return e + "月";
            case"w":
            case"W":
              return e + "週";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      })
    })(n("PJh5"))
  }, Bp2f: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      e.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: s,
        monthsShortRegex: s,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, C7av: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s sidan",
          s: "nokre sekund",
          ss: "%d sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, CFqe: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function (e, t) {
          return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        },
        isPM: function (e) {
          return "μ" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT"
            }
          },
          sameElse: "L"
        },
        calendar: function (e, t) {
          var n, a = this._calendarEl[e], s = t && t.hours();
          return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", s % 12 == 1 ? "στη" : "στις")
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          ss: "%d δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια"
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, CqHt: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        switch (n) {
          case"s":
            return t ? "хэдхэн секунд" : "хэдхэн секундын";
          case"ss":
            return e + (t ? " секунд" : " секундын");
          case"m":
          case"mm":
            return e + (t ? " минут" : " минутын");
          case"h":
          case"hh":
            return e + (t ? " цаг" : " цагийн");
          case"d":
          case"dd":
            return e + (t ? " өдөр" : " өдрийн");
          case"M":
          case"MM":
            return e + (t ? " сар" : " сарын");
          case"y":
          case"yy":
            return e + (t ? " жил" : " жилийн");
          default:
            return e
        }
      }

      e.defineLocale("mn", {
        months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
        monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
        monthsParseExact: !0,
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY оны MMMMын D",
          LLL: "YYYY оны MMMMын D HH:mm",
          LLLL: "dddd, YYYY оны MMMMын D HH:mm"
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (e) {
          return "ҮХ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ҮӨ" : "ҮХ"
        },
        calendar: {
          sameDay: "[Өнөөдөр] LT",
          nextDay: "[Маргааш] LT",
          nextWeek: "[Ирэх] dddd LT",
          lastDay: "[Өчигдөр] LT",
          lastWeek: "[Өнгөрсөн] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s дараа",
          past: "%s өмнө",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + " өдөр";
            default:
              return e
          }
        }
      })
    })(n("PJh5"))
  }, DOkx: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? s[n][0] : s[n][1]
      }

      e.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, DSXN: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          ss: "sekunde %d",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "masiku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, ETHv: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
          n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
      e.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm बजे",
          LTS: "A h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[कल] LT",
          nextWeek: "dddd, LT",
          lastDay: "[कल] LT",
          lastWeek: "[पिछले] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s में",
          past: "%s पहले",
          s: "कुछ ही क्षण",
          ss: "%d सेकंड",
          m: "एक मिनट",
          mm: "%d मिनट",
          h: "एक घंटा",
          hh: "%d घंटे",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महीने",
          MM: "%d महीने",
          y: "एक वर्ष",
          yy: "%d वर्ष"
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, "F+2e": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"},
          n = {"၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"};
      e.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ယနေ.] LT [မှာ]",
          nextDay: "[မနက်ဖြန်] LT [မှာ]",
          nextWeek: "dddd LT [မှာ]",
          lastDay: "[မနေ.က] LT [မှာ]",
          lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
          sameElse: "L"
        },
        relativeTime: {
          future: "လာမည့် %s မှာ",
          past: "လွန်ခဲ့သော %s က",
          s: "စက္ကန်.အနည်းငယ်",
          ss: "%d စက္ကန့်",
          m: "တစ်မိနစ်",
          mm: "%d မိနစ်",
          h: "တစ်နာရီ",
          hh: "%d နာရီ",
          d: "တစ်ရက်",
          dd: "%d ရက်",
          M: "တစ်လ",
          MM: "%d လ",
          y: "တစ်နှစ်",
          yy: "%d နှစ်"
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, FKXc: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
          },
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, FRPF: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          ss: "%d ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {dow: 6, doy: 12}
      })
    })(n("PJh5"))
  }, FlzV: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, Fpqq: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, Frex: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? s[n][0] : s[n][1]
      }

      e.defineLocale("de-ch", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, FuaP: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
          }, nextDay: function () {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
          }, nextWeek: function () {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
          }, lastDay: function () {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
          }, lastWeek: function () {
            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf("un") ? "n" + e : "en " + e
          },
          past: "hai %s",
          s: "uns segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "G++c": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, GrS7: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("hy-am", {
        months: {
          format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
          standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
          sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
            return "dddd [օրը ժամը] LT"
          }, lastWeek: function () {
            return "[անցած] dddd [օրը ժամը] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          ss: "%d վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e)
        },
        meridiem: function (e) {
          return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case"DDD":
            case"w":
            case"W":
            case"DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, INcR: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
      e.defineLocale("es-us", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          LL: "MMMM [de] D [de] YYYY",
          LLL: "MMMM [de] D [de] YYYY h:mm A",
          LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, JwiF: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          ss: "%d detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, LT9G: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      e.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: s,
        monthsShortRegex: s,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, Lgqo: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          ss: "තත්පර %d",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + " වැනි"
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return "ප.ව." === e || "පස් වරු" === e
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
        }
      })
    })(n("PJh5"))
  }, N3vo: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          ss: "%d ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, Nd3h: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D[-a de] MMMM, YYYY",
          LLL: "D[-a de] MMMM, YYYY HH:mm",
          LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return "p" === e.charAt(0).toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd [je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasinta] dddd [je] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "post %s",
          past: "antaŭ %s",
          s: "sekundoj",
          ss: "%d sekundoj",
          m: "minuto",
          mm: "%d minutoj",
          h: "horo",
          hh: "%d horoj",
          d: "tago",
          dd: "%d tagoj",
          M: "monato",
          MM: "%d monatoj",
          y: "jaro",
          yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, Nlnz: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: !0,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          ss: "%d సెకన్లు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు"
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, Nzt2: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          ss: "%d שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function (e) {
            return 2 === e ? "שעתיים" : e + " שעות"
          },
          d: "יום",
          dd: function (e) {
            return 2 === e ? "יומיים" : e + " ימים"
          },
          M: "חודש",
          MM: function (e) {
            return 2 === e ? "חודשיים" : e + " חודשים"
          },
          y: "שנה",
          yy: function (e) {
            return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
        }
      })
    })(n("PJh5"))
  }, ORgI: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日 dddd HH:mm",
          l: "YYYY/MM/DD",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日(ddd) HH:mm"
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return "午後" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "午前" : "午後"
        },
        calendar: {
          sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function (e) {
            return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
          }, lastDay: "[昨日] LT", lastWeek: function (e) {
            return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
          }, sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          ss: "%d秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年"
        }
      })
    })(n("PJh5"))
  }, OSsP: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        return e + " " + function (e, t) {
          if (2 === t) return function (e) {
            var t = {m: "v", b: "v", d: "z"};
            if (void 0 === t[e.charAt(0)]) return e;
            return t[e.charAt(0)] + e.substring(1)
          }(e);
          return e
        }({mm: "munutenn", MM: "miz", dd: "devezh"}[n], e)
      }

      e.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h[e]mm A",
          LTS: "h[e]mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY h[e]mm A",
          LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warc'hoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Dec'h da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s 'zo",
          s: "un nebeud segondennoù",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: t,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: t,
          M: "ur miz",
          MM: t,
          y: "ur bloaz",
          yy: function (e) {
            switch (function e(t) {
              return t > 9 ? e(t % 10) : t
            }(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz"
            }
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? "añ" : "vet")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, OUMt: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
          n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

      function a(e) {
        return e > 1 && e < 5
      }

      function s(e, t, n, s) {
        var r = e + " ";
        switch (n) {
          case"s":
            return t || s ? "pár sekúnd" : "pár sekundami";
          case"ss":
            return t || s ? r + (a(e) ? "sekundy" : "sekúnd") : r + "sekundami";
          case"m":
            return t ? "minúta" : s ? "minútu" : "minútou";
          case"mm":
            return t || s ? r + (a(e) ? "minúty" : "minút") : r + "minútami";
          case"h":
            return t ? "hodina" : s ? "hodinu" : "hodinou";
          case"hh":
            return t || s ? r + (a(e) ? "hodiny" : "hodín") : r + "hodinami";
          case"d":
            return t || s ? "deň" : "dňom";
          case"dd":
            return t || s ? r + (a(e) ? "dni" : "dní") : r + "dňami";
          case"M":
            return t || s ? "mesiac" : "mesiacom";
          case"MM":
            return t || s ? r + (a(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
          case"y":
            return t || s ? "rok" : "rokom";
          case"yy":
            return t || s ? r + (a(e) ? "roky" : "rokov") : r + "rokmi"
        }
      }

      e.defineLocale("sk", {
        months: t,
        monthsShort: n,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v nedeľu o] LT";
              case 1:
              case 2:
                return "[v] dddd [o] LT";
              case 3:
                return "[v stredu o] LT";
              case 4:
                return "[vo štvrtok o] LT";
              case 5:
                return "[v piatok o] LT";
              case 6:
                return "[v sobotu o] LT"
            }
          }, lastDay: "[včera o] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulú nedeľu o] LT";
              case 1:
              case 2:
                return "[minulý] dddd [o] LT";
              case 3:
                return "[minulú stredu o] LT";
              case 4:
              case 5:
                return "[minulý] dddd [o] LT";
              case 6:
                return "[minulú sobotu o] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pred %s",
          s: s,
          ss: s,
          m: s,
          mm: s,
          h: s,
          hh: s,
          d: s,
          dd: s,
          M: s,
          MM: s,
          y: s,
          yy: s
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, OVPi: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          ss: "%d sekundir",
          m: "ein minutt",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaði",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, PJh5: function (e, t, n) {
    (function (e) {
      var t;//! moment.js
      t = function () {
        "use strict";
        var t, a;

        function s() {
          return t.apply(null, arguments)
        }

        function r(e) {
          return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
          return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function o(e) {
          return void 0 === e
        }

        function d(e) {
          return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function u(e) {
          return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function _(e, t) {
          var n, a = [];
          for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
          return a
        }

        function l(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }

        function m(e, t) {
          for (var n in t) l(t, n) && (e[n] = t[n]);
          return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function c(e, t, n, a) {
          return Ht(e, t, n, a, !0).utc()
        }

        function h(e) {
          return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }), e._pf
        }

        function f(e) {
          if (null == e._isValid) {
            var t = h(e), n = a.call(t.parsedDateParts, function (e) {
                  return null != e
                }),
                s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s
          }
          return e._isValid
        }

        function p(e) {
          var t = c(NaN);
          return null != e ? m(h(t), e) : h(t).userInvalidated = !0, t
        }

        a = Array.prototype.some ? Array.prototype.some : function (e) {
          for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++) if (a in t && e.call(this, t[a], a, t)) return !0;
          return !1
        };
        var M = s.momentProperties = [];

        function y(e, t) {
          var n, a, s;
          if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), M.length > 0) for (n = 0; n < M.length; n++) o(s = t[a = M[n]]) || (e[a] = s);
          return e
        }

        var L = !1;

        function Y(e) {
          y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === L && (L = !0, s.updateOffset(this), L = !1)
        }

        function g(e) {
          return e instanceof Y || null != e && null != e._isAMomentObject
        }

        function k(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function D(e) {
          var t = +e, n = 0;
          return 0 !== t && isFinite(t) && (n = k(t)), n
        }

        function v(e, t, n) {
          var a, s = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0;
          for (a = 0; a < s; a++) (n && e[a] !== t[a] || !n && D(e[a]) !== D(t[a])) && i++;
          return i + r
        }

        function T(e) {
          !1 === s.suppressDeprecationWarnings && "undefined" != typeof console && console.warn
        }

        function w(e, t) {
          var n = !0;
          return m(function () {
            if (null != s.deprecationHandler && s.deprecationHandler(null, e), n) {
              for (var a, r = [], i = 0; i < arguments.length; i++) {
                if (a = "", "object" == typeof arguments[i]) {
                  for (var o in a += "\n[" + i + "] ", arguments[0]) a += o + ": " + arguments[0][o] + ", ";
                  a = a.slice(0, -2)
                } else a = arguments[i];
                r.push(a)
              }
              T((Array.prototype.slice.call(r).join(""), (new Error).stack)), n = !1
            }
            return t.apply(this, arguments)
          }, t)
        }

        var b, S = {};

        function H(e, t) {
          null != s.deprecationHandler && s.deprecationHandler(e, t), S[e] || (T(), S[e] = !0)
        }

        function x(e) {
          return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function j(e, t) {
          var n, a = m({}, e);
          for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (a[n] = {}, m(a[n], e[n]), m(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
          for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (a[n] = m({}, a[n]));
          return a
        }

        function P(e) {
          null != e && this.set(e)
        }

        s.suppressDeprecationWarnings = !1, s.deprecationHandler = null, b = Object.keys ? Object.keys : function (e) {
          var t, n = [];
          for (t in e) l(e, t) && n.push(t);
          return n
        };
        var O = {};

        function E(e, t) {
          var n = e.toLowerCase();
          O[n] = O[n + "s"] = O[t] = e
        }

        function W(e) {
          return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0
        }

        function A(e) {
          var t, n, a = {};
          for (n in e) l(e, n) && (t = W(n)) && (a[t] = e[n]);
          return a
        }

        var F = {};

        function C(e, t) {
          F[e] = t
        }

        function J(e, t, n) {
          var a = "" + Math.abs(e), s = t - a.length;
          return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
        }

        var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, R = {}, I = {};

        function q(e, t, n, a) {
          var s = a;
          "string" == typeof a && (s = function () {
            return this[a]()
          }), e && (I[e] = s), t && (I[t[0]] = function () {
            return J(s.apply(this, arguments), t[1], t[2])
          }), n && (I[n] = function () {
            return this.localeData().ordinal(s.apply(this, arguments), e)
          })
        }

        function U(e, t) {
          return e.isValid() ? (t = G(t, e.localeData()), R[t] = R[t] || function (e) {
            var t, n, a, s = e.match(N);
            for (t = 0, n = s.length; t < n; t++) I[s[t]] ? s[t] = I[s[t]] : s[t] = (a = s[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
            return function (t) {
              var a, r = "";
              for (a = 0; a < n; a++) r += x(s[a]) ? s[a].call(t, e) : s[a];
              return r
            }
          }(t), R[t](e)) : e.localeData().invalidDate()
        }

        function G(e, t) {
          var n = 5;

          function a(e) {
            return t.longDateFormat(e) || e
          }

          for (z.lastIndex = 0; n >= 0 && z.test(e);) e = e.replace(z, a), z.lastIndex = 0, n -= 1;
          return e
        }

        var V = /\d/, B = /\d\d/, $ = /\d{3}/, K = /\d{4}/, X = /[+-]?\d{6}/, Z = /\d\d?/, Q = /\d\d\d\d?/,
            ee = /\d\d\d\d\d\d?/, te = /\d{1,3}/, ne = /\d{1,4}/, ae = /[+-]?\d{1,6}/, se = /\d+/, re = /[+-]?\d+/,
            ie = /Z|[+-]\d\d:?\d\d/gi, oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            ue = {};

        function _e(e, t, n) {
          ue[e] = x(t) ? t : function (e, a) {
            return e && n ? n : t
          }
        }

        function le(e, t) {
          return l(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, s) {
            return t || n || a || s
          })))
        }

        function me(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        var ce = {};

        function he(e, t) {
          var n, a = t;
          for ("string" == typeof e && (e = [e]), d(t) && (a = function (e, n) {
            n[t] = D(e)
          }), n = 0; n < e.length; n++) ce[e[n]] = a
        }

        function fe(e, t) {
          he(e, function (e, n, a, s) {
            a._w = a._w || {}, t(e, a._w, a, s)
          })
        }

        function pe(e, t, n) {
          null != t && l(ce, e) && ce[e](t, n._a, n, e)
        }

        var Me = 0, ye = 1, Le = 2, Ye = 3, ge = 4, ke = 5, De = 6, ve = 7, Te = 8;

        function we(e) {
          return be(e) ? 366 : 365
        }

        function be(e) {
          return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        q("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? "" + e : "+" + e
        }), q(0, ["YY", 2], 0, function () {
          return this.year() % 100
        }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), C("year", 1), _e("Y", re), _e("YY", Z, B), _e("YYYY", ne, K), _e("YYYYY", ae, X), _e("YYYYYY", ae, X), he(["YYYYY", "YYYYYY"], Me), he("YYYY", function (e, t) {
          t[Me] = 2 === e.length ? s.parseTwoDigitYear(e) : D(e)
        }), he("YY", function (e, t) {
          t[Me] = s.parseTwoDigitYear(e)
        }), he("Y", function (e, t) {
          t[Me] = parseInt(e, 10)
        }), s.parseTwoDigitYear = function (e) {
          return D(e) + (D(e) > 68 ? 1900 : 2e3)
        };
        var Se, He = xe("FullYear", !0);

        function xe(e, t) {
          return function (n) {
            return null != n ? (Pe(this, e, n), s.updateOffset(this, t), this) : je(this, e)
          }
        }

        function je(e, t) {
          return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function Pe(e, t, n) {
          e.isValid() && !isNaN(n) && ("FullYear" === t && be(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
        }

        function Oe(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n, a = (t % (n = 12) + n) % n;
          return e += (t - a) / 12, 1 === a ? be(e) ? 29 : 28 : 31 - a % 7 % 2
        }

        Se = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
          var t;
          for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1
        }, q("M", ["MM", 2], "Mo", function () {
          return this.month() + 1
        }), q("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e)
        }), q("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e)
        }), E("month", "M"), C("month", 8), _e("M", Z), _e("MM", Z, B), _e("MMM", function (e, t) {
          return t.monthsShortRegex(e)
        }), _e("MMMM", function (e, t) {
          return t.monthsRegex(e)
        }), he(["M", "MM"], function (e, t) {
          t[ye] = D(e) - 1
        }), he(["MMM", "MMMM"], function (e, t, n, a) {
          var s = n._locale.monthsParse(e, a, n._strict);
          null != s ? t[ye] = s : h(n).invalidMonth = e
        });
        var Ee = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            We = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
        var Ae = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Fe(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ("string" == typeof t) if (/^\d+$/.test(t)) t = D(t); else if (!d(t = e.localeData().monthsParse(t))) return e;
          return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function Ce(e) {
          return null != e ? (Fe(this, e), s.updateOffset(this, !0), this) : je(this, "Month")
        }

        var Je = de;
        var Ne = de;

        function ze() {
          function e(e, t) {
            return t.length - e.length
          }

          var t, n, a = [], s = [], r = [];
          for (t = 0; t < 12; t++) n = c([2e3, t]), a.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
          for (a.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) a[t] = me(a[t]), s[t] = me(s[t]);
          for (t = 0; t < 24; t++) r[t] = me(r[t]);
          this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
        }

        function Re(e) {
          var t = new Date(Date.UTC.apply(null, arguments));
          return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function Ie(e, t, n) {
          var a = 7 + t - n;
          return -((7 + Re(e, 0, a).getUTCDay() - t) % 7) + a - 1
        }

        function qe(e, t, n, a, s) {
          var r, i, o = 1 + 7 * (t - 1) + (7 + n - a) % 7 + Ie(e, a, s);
          return o <= 0 ? i = we(r = e - 1) + o : o > we(e) ? (r = e + 1, i = o - we(e)) : (r = e, i = o), {
            year: r,
            dayOfYear: i
          }
        }

        function Ue(e, t, n) {
          var a, s, r = Ie(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
          return i < 1 ? a = i + Ge(s = e.year() - 1, t, n) : i > Ge(e.year(), t, n) ? (a = i - Ge(e.year(), t, n), s = e.year() + 1) : (s = e.year(), a = i), {
            week: a,
            year: s
          }
        }

        function Ge(e, t, n) {
          var a = Ie(e, t, n), s = Ie(e + 1, t, n);
          return (we(e) - a + s) / 7
        }

        q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), C("week", 5), C("isoWeek", 5), _e("w", Z), _e("ww", Z, B), _e("W", Z), _e("WW", Z, B), fe(["w", "ww", "W", "WW"], function (e, t, n, a) {
          t[a.substr(0, 1)] = D(e)
        });
        q("d", 0, "do", "day"), q("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e)
        }), q("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e)
        }), q("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e)
        }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), C("day", 11), C("weekday", 11), C("isoWeekday", 11), _e("d", Z), _e("e", Z), _e("E", Z), _e("dd", function (e, t) {
          return t.weekdaysMinRegex(e)
        }), _e("ddd", function (e, t) {
          return t.weekdaysShortRegex(e)
        }), _e("dddd", function (e, t) {
          return t.weekdaysRegex(e)
        }), fe(["dd", "ddd", "dddd"], function (e, t, n, a) {
          var s = n._locale.weekdaysParse(e, a, n._strict);
          null != s ? t.d = s : h(n).invalidWeekday = e
        }), fe(["d", "e", "E"], function (e, t, n, a) {
          t[a] = D(e)
        });
        var Ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
        var Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
        var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        var Ke = de;
        var Xe = de;
        var Ze = de;

        function Qe() {
          function e(e, t) {
            return t.length - e.length
          }

          var t, n, a, s, r, i = [], o = [], d = [], u = [];
          for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), i.push(a), o.push(s), d.push(r), u.push(a), u.push(s), u.push(r);
          for (i.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = me(o[t]), d[t] = me(d[t]), u[t] = me(u[t]);
          this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function et() {
          return this.hours() % 12 || 12
        }

        function tt(e, t) {
          q(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
          })
        }

        function nt(e, t) {
          return t._meridiemParse
        }

        q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, et), q("k", ["kk", 2], 0, function () {
          return this.hours() || 24
        }), q("hmm", 0, 0, function () {
          return "" + et.apply(this) + J(this.minutes(), 2)
        }), q("hmmss", 0, 0, function () {
          return "" + et.apply(this) + J(this.minutes(), 2) + J(this.seconds(), 2)
        }), q("Hmm", 0, 0, function () {
          return "" + this.hours() + J(this.minutes(), 2)
        }), q("Hmmss", 0, 0, function () {
          return "" + this.hours() + J(this.minutes(), 2) + J(this.seconds(), 2)
        }), tt("a", !0), tt("A", !1), E("hour", "h"), C("hour", 13), _e("a", nt), _e("A", nt), _e("H", Z), _e("h", Z), _e("k", Z), _e("HH", Z, B), _e("hh", Z, B), _e("kk", Z, B), _e("hmm", Q), _e("hmmss", ee), _e("Hmm", Q), _e("Hmmss", ee), he(["H", "HH"], Ye), he(["k", "kk"], function (e, t, n) {
          var a = D(e);
          t[Ye] = 24 === a ? 0 : a
        }), he(["a", "A"], function (e, t, n) {
          n._isPm = n._locale.isPM(e), n._meridiem = e
        }), he(["h", "hh"], function (e, t, n) {
          t[Ye] = D(e), h(n).bigHour = !0
        }), he("hmm", function (e, t, n) {
          var a = e.length - 2;
          t[Ye] = D(e.substr(0, a)), t[ge] = D(e.substr(a)), h(n).bigHour = !0
        }), he("hmmss", function (e, t, n) {
          var a = e.length - 4, s = e.length - 2;
          t[Ye] = D(e.substr(0, a)), t[ge] = D(e.substr(a, 2)), t[ke] = D(e.substr(s)), h(n).bigHour = !0
        }), he("Hmm", function (e, t, n) {
          var a = e.length - 2;
          t[Ye] = D(e.substr(0, a)), t[ge] = D(e.substr(a))
        }), he("Hmmss", function (e, t, n) {
          var a = e.length - 4, s = e.length - 2;
          t[Ye] = D(e.substr(0, a)), t[ge] = D(e.substr(a, 2)), t[ke] = D(e.substr(s))
        });
        var at, st = xe("Hours", !0), rt = {
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          months: We,
          monthsShort: Ae,
          week: {dow: 0, doy: 6},
          weekdays: Ve,
          weekdaysMin: $e,
          weekdaysShort: Be,
          meridiemParse: /[ap]\.?m?\.?/i
        }, it = {}, ot = {};

        function dt(e) {
          return e ? e.toLowerCase().replace("_", "-") : e
        }

        function ut(t) {
          var a = null;
          if (!it[t] && void 0 !== e && e && e.exports) try {
            a = at._abbr;
            n("uslO")("./" + t), _t(a)
          } catch (e) {
          }
          return it[t]
        }

        function _t(e, t) {
          var n;
          return e && ((n = o(t) ? mt(e) : lt(e, t)) ? at = n : "undefined" != typeof console && console.warn), at._abbr
        }

        function lt(e, t) {
          if (null !== t) {
            var n, a = rt;
            if (t.abbr = e, null != it[e]) H("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = it[e]._config; else if (null != t.parentLocale) if (null != it[t.parentLocale]) a = it[t.parentLocale]._config; else {
              if (null == (n = ut(t.parentLocale))) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              a = n._config
            }
            return it[e] = new P(j(a, t)), ot[e] && ot[e].forEach(function (e) {
              lt(e.name, e.config)
            }), _t(e), it[e]
          }
          return delete it[e], null
        }

        function mt(e) {
          var t;
          if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return at;
          if (!r(e)) {
            if (t = ut(e)) return t;
            e = [e]
          }
          return function (e) {
            for (var t, n, a, s, r = 0; r < e.length;) {
              for (t = (s = dt(e[r]).split("-")).length, n = (n = dt(e[r + 1])) ? n.split("-") : null; t > 0;) {
                if (a = ut(s.slice(0, t).join("-"))) return a;
                if (n && n.length >= t && v(s, n, !0) >= t - 1) break;
                t--
              }
              r++
            }
            return at
          }(e)
        }

        function ct(e) {
          var t, n = e._a;
          return n && -2 === h(e).overflow && (t = n[ye] < 0 || n[ye] > 11 ? ye : n[Le] < 1 || n[Le] > Oe(n[Me], n[ye]) ? Le : n[Ye] < 0 || n[Ye] > 24 || 24 === n[Ye] && (0 !== n[ge] || 0 !== n[ke] || 0 !== n[De]) ? Ye : n[ge] < 0 || n[ge] > 59 ? ge : n[ke] < 0 || n[ke] > 59 ? ke : n[De] < 0 || n[De] > 999 ? De : -1, h(e)._overflowDayOfYear && (t < Me || t > Le) && (t = Le), h(e)._overflowWeeks && -1 === t && (t = ve), h(e)._overflowWeekday && -1 === t && (t = Te), h(e).overflow = t), e
        }

        function ht(e, t, n) {
          return null != e ? e : null != t ? t : n
        }

        function ft(e) {
          var t, n, a, r, i, o = [];
          if (!e._d) {
            for (a = function (e) {
              var t = new Date(s.now());
              return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e), e._w && null == e._a[Le] && null == e._a[ye] && function (e) {
              var t, n, a, s, r, i, o, d;
              if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, i = 4, n = ht(t.GG, e._a[Me], Ue(xt(), 1, 4).year), a = ht(t.W, 1), ((s = ht(t.E, 1)) < 1 || s > 7) && (d = !0); else {
                r = e._locale._week.dow, i = e._locale._week.doy;
                var u = Ue(xt(), r, i);
                n = ht(t.gg, e._a[Me], u.year), a = ht(t.w, u.week), null != t.d ? ((s = t.d) < 0 || s > 6) && (d = !0) : null != t.e ? (s = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : s = r
              }
              a < 1 || a > Ge(n, r, i) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = qe(n, a, s, r, i), e._a[Me] = o.year, e._dayOfYear = o.dayOfYear)
            }(e), null != e._dayOfYear && (i = ht(e._a[Me], a[Me]), (e._dayOfYear > we(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = Re(i, 0, e._dayOfYear), e._a[ye] = n.getUTCMonth(), e._a[Le] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t];
            for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[Ye] && 0 === e._a[ge] && 0 === e._a[ke] && 0 === e._a[De] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Re : function (e, t, n, a, s, r, i) {
              var o = new Date(e, t, n, a, s, r, i);
              return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
            }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (h(e).weekdayMismatch = !0)
          }
        }

        var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            yt = /Z|[+-]\d\d(?::?\d\d)?/,
            Lt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
            Yt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            gt = /^\/?Date\((\-?\d+)/i;

        function kt(e) {
          var t, n, a, s, r, i, o = e._i, d = pt.exec(o) || Mt.exec(o);
          if (d) {
            for (h(e).iso = !0, t = 0, n = Lt.length; t < n; t++) if (Lt[t][1].exec(d[1])) {
              s = Lt[t][0], a = !1 !== Lt[t][2];
              break
            }
            if (null == s) return void(e._isValid = !1);
            if (d[3]) {
              for (t = 0, n = Yt.length; t < n; t++) if (Yt[t][1].exec(d[3])) {
                r = (d[2] || " ") + Yt[t][0];
                break
              }
              if (null == r) return void(e._isValid = !1)
            }
            if (!a && null != r) return void(e._isValid = !1);
            if (d[4]) {
              if (!yt.exec(d[4])) return void(e._isValid = !1);
              i = "Z"
            }
            e._f = s + (r || "") + (i || ""), bt(e)
          } else e._isValid = !1
        }

        var Dt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function vt(e, t, n, a, s, r) {
          var i = [function (e) {
            var t = parseInt(e, 10);
            if (t <= 49) return 2e3 + t;
            if (t <= 999) return 1900 + t;
            return t
          }(e), Ae.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(s, 10)];
          return r && i.push(parseInt(r, 10)), i
        }

        var Tt = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480
        };

        function wt(e) {
          var t = Dt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
          if (t) {
            var n = vt(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!function (e, t, n) {
              return !e || Be.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (h(n).weekdayMismatch = !0, n._isValid = !1, !1)
            }(t[1], n, e)) return;
            e._a = n, e._tzm = function (e, t, n) {
              if (e) return Tt[e];
              if (t) return 0;
              var a = parseInt(n, 10), s = a % 100;
              return (a - s) / 100 * 60 + s
            }(t[8], t[9], t[10]), e._d = Re.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
          } else e._isValid = !1
        }

        function bt(e) {
          if (e._f !== s.ISO_8601) if (e._f !== s.RFC_2822) {
            e._a = [], h(e).empty = !0;
            var t, n, a, r, i, o = "" + e._i, d = o.length, u = 0;
            for (a = G(e._f, e._locale).match(N) || [], t = 0; t < a.length; t++) r = a[t], (n = (o.match(le(r, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && h(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), u += n.length), I[r] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(r), pe(r, n, e)) : e._strict && !n && h(e).unusedTokens.push(r);
            h(e).charsLeftOver = d - u, o.length > 0 && h(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === h(e).bigHour && e._a[Ye] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[Ye] = function (e, t, n) {
              var a;
              if (null == n) return t;
              return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((a = e.isPM(n)) && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[Ye], e._meridiem), ft(e), ct(e)
          } else wt(e); else kt(e)
        }

        function St(e) {
          var t = e._i, n = e._f;
          return e._locale = e._locale || mt(e._l), null === t || void 0 === n && "" === t ? p({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new Y(ct(t)) : (u(t) ? e._d = t : r(n) ? function (e) {
            var t, n, a, s, r;
            if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (s = 0; s < e._f.length; s++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], bt(t), f(t) && (r += h(t).charsLeftOver, r += 10 * h(t).unusedTokens.length, h(t).score = r, (null == a || r < a) && (a = r, n = t));
            m(e, n || t)
          }(e) : n ? bt(e) : function (e) {
            var t = e._i;
            o(t) ? e._d = new Date(s.now()) : u(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function (e) {
              var t = gt.exec(e._i);
              null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, wt(e), !1 === e._isValid && (delete e._isValid, s.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }(e) : r(t) ? (e._a = _(t.slice(0), function (e) {
              return parseInt(e, 10)
            }), ft(e)) : i(t) ? function (e) {
              if (!e._d) {
                var t = A(e._i);
                e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                  return e && parseInt(e, 10)
                }), ft(e)
              }
            }(e) : d(t) ? e._d = new Date(t) : s.createFromInputFallback(e)
          }(e), f(e) || (e._d = null), e))
        }

        function Ht(e, t, n, a, s) {
          var o, d = {};
          return !0 !== n && !1 !== n || (a = n, n = void 0), (i(e) && function (e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
          }(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = n, d._i = e, d._f = t, d._strict = a, (o = new Y(ct(St(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
        }

        function xt(e, t, n, a) {
          return Ht(e, t, n, a, !1)
        }

        s.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), s.ISO_8601 = function () {
        }, s.RFC_2822 = function () {
        };
        var jt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
              var e = xt.apply(null, arguments);
              return this.isValid() && e.isValid() ? e < this ? this : e : p()
            }),
            Pt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
              var e = xt.apply(null, arguments);
              return this.isValid() && e.isValid() ? e > this ? this : e : p()
            });

        function Ot(e, t) {
          var n, a;
          if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return xt();
          for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
          return n
        }

        var Et = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Wt(e) {
          var t = A(e), n = t.year || 0, a = t.quarter || 0, s = t.month || 0, r = t.week || 0, i = t.day || 0,
              o = t.hour || 0, d = t.minute || 0, u = t.second || 0, _ = t.millisecond || 0;
          this._isValid = function (e) {
            for (var t in e) if (-1 === Se.call(Et, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, a = 0; a < Et.length; ++a) if (e[Et[a]]) {
              if (n) return !1;
              parseFloat(e[Et[a]]) !== D(e[Et[a]]) && (n = !0)
            }
            return !0
          }(t), this._milliseconds = +_ + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * r, this._months = +s + 3 * a + 12 * n, this._data = {}, this._locale = mt(), this._bubble()
        }

        function At(e) {
          return e instanceof Wt
        }

        function Ft(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Ct(e, t) {
          q(e, 0, 0, function () {
            var e = this.utcOffset(), n = "+";
            return e < 0 && (e = -e, n = "-"), n + J(~~(e / 60), 2) + t + J(~~e % 60, 2)
          })
        }

        Ct("Z", ":"), Ct("ZZ", ""), _e("Z", oe), _e("ZZ", oe), he(["Z", "ZZ"], function (e, t, n) {
          n._useUTC = !0, n._tzm = Nt(oe, e)
        });
        var Jt = /([\+\-]|\d\d)/gi;

        function Nt(e, t) {
          var n = (t || "").match(e);
          if (null === n) return null;
          var a = ((n[n.length - 1] || []) + "").match(Jt) || ["-", 0, 0], s = 60 * a[1] + D(a[2]);
          return 0 === s ? 0 : "+" === a[0] ? s : -s
        }

        function zt(e, t) {
          var n, a;
          return t._isUTC ? (n = t.clone(), a = (g(e) || u(e) ? e.valueOf() : xt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), s.updateOffset(n, !1), n) : xt(e).local()
        }

        function Rt(e) {
          return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function It() {
          return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        s.updateOffset = function () {
        };
        var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Ut = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Gt(e, t) {
          var n, a, s, r = e, i = null;
          return At(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
          } : d(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (i = qt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, r = {
            y: 0,
            d: D(i[Le]) * n,
            h: D(i[Ye]) * n,
            m: D(i[ge]) * n,
            s: D(i[ke]) * n,
            ms: D(Ft(1e3 * i[De])) * n
          }) : (i = Ut.exec(e)) ? (n = "-" === i[1] ? -1 : (i[1], 1), r = {
            y: Vt(i[2], n),
            M: Vt(i[3], n),
            w: Vt(i[4], n),
            d: Vt(i[5], n),
            h: Vt(i[6], n),
            m: Vt(i[7], n),
            s: Vt(i[8], n)
          }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
            t = zt(t, e), e.isBefore(t) ? n = Bt(e, t) : ((n = Bt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
          }(xt(r.from), xt(r.to)), (r = {}).ms = s.milliseconds, r.M = s.months), a = new Wt(r), At(e) && l(e, "_locale") && (a._locale = e._locale), a
        }

        function Vt(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t
        }

        function Bt(e, t) {
          var n = {milliseconds: 0, months: 0};
          return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function $t(e, t) {
          return function (n, a) {
            var s;
            return null === a || isNaN(+a) || (H(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = a, a = s), Kt(this, Gt(n = "string" == typeof n ? +n : n, a), e), this
          }
        }

        function Kt(e, t, n, a) {
          var r = t._milliseconds, i = Ft(t._days), o = Ft(t._months);
          e.isValid() && (a = null == a || a, o && Fe(e, je(e, "Month") + o * n), i && Pe(e, "Date", je(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), a && s.updateOffset(e, i || o))
        }

        Gt.fn = Wt.prototype, Gt.invalid = function () {
          return Gt(NaN)
        };
        var Xt = $t(1, "add"), Zt = $t(-1, "subtract");

        function Qt(e, t) {
          var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), a = e.clone().add(n, "months");
          return -(n + (t - a < 0 ? (t - a) / (a - e.clone().add(n - 1, "months")) : (t - a) / (e.clone().add(n + 1, "months") - a))) || 0
        }

        function en(e) {
          var t;
          return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
        }

        s.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", s.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var tn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
          return void 0 === e ? this.localeData() : this.locale(e)
        });

        function nn() {
          return this._locale
        }

        function an(e, t) {
          q(0, [e, e.length], 0, t)
        }

        function sn(e, t, n, a, s) {
          var r;
          return null == e ? Ue(this, a, s).year : (t > (r = Ge(e, a, s)) && (t = r), function (e, t, n, a, s) {
            var r = qe(e, t, n, a, s), i = Re(r.year, 0, r.dayOfYear);
            return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
          }.call(this, e, t, n, a, s))
        }

        q(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100
        }), q(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100
        }), an("gggg", "weekYear"), an("ggggg", "weekYear"), an("GGGG", "isoWeekYear"), an("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), C("weekYear", 1), C("isoWeekYear", 1), _e("G", re), _e("g", re), _e("GG", Z, B), _e("gg", Z, B), _e("GGGG", ne, K), _e("gggg", ne, K), _e("GGGGG", ae, X), _e("ggggg", ae, X), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
          t[a.substr(0, 2)] = D(e)
        }), fe(["gg", "GG"], function (e, t, n, a) {
          t[a] = s.parseTwoDigitYear(e)
        }), q("Q", 0, "Qo", "quarter"), E("quarter", "Q"), C("quarter", 7), _e("Q", V), he("Q", function (e, t) {
          t[ye] = 3 * (D(e) - 1)
        }), q("D", ["DD", 2], "Do", "date"), E("date", "D"), C("date", 9), _e("D", Z), _e("DD", Z, B), _e("Do", function (e, t) {
          return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), he(["D", "DD"], Le), he("Do", function (e, t) {
          t[Le] = D(e.match(Z)[0])
        });
        var rn = xe("Date", !0);
        q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), C("dayOfYear", 4), _e("DDD", te), _e("DDDD", $), he(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = D(e)
        }), q("m", ["mm", 2], 0, "minute"), E("minute", "m"), C("minute", 14), _e("m", Z), _e("mm", Z, B), he(["m", "mm"], ge);
        var on = xe("Minutes", !1);
        q("s", ["ss", 2], 0, "second"), E("second", "s"), C("second", 15), _e("s", Z), _e("ss", Z, B), he(["s", "ss"], ke);
        var dn, un = xe("Seconds", !1);
        for (q("S", 0, 0, function () {
          return ~~(this.millisecond() / 100)
        }), q(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10)
        }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond()
        }), q(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond()
        }), q(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond()
        }), q(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond()
        }), q(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond()
        }), q(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond()
        }), E("millisecond", "ms"), C("millisecond", 16), _e("S", te, V), _e("SS", te, B), _e("SSS", te, $), dn = "SSSS"; dn.length <= 9; dn += "S") _e(dn, se);

        function _n(e, t) {
          t[De] = D(1e3 * ("0." + e))
        }

        for (dn = "S"; dn.length <= 9; dn += "S") he(dn, _n);
        var ln = xe("Milliseconds", !1);
        q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
        var mn = Y.prototype;

        function cn(e) {
          return e
        }

        mn.add = Xt, mn.calendar = function (e, t) {
          var n = e || xt(), a = zt(n, this).startOf("day"), r = s.calendarFormat(this, a) || "sameElse",
              i = t && (x(t[r]) ? t[r].call(this, n) : t[r]);
          return this.format(i || this.localeData().calendar(r, this, xt(n)))
        }, mn.clone = function () {
          return new Y(this)
        }, mn.diff = function (e, t, n) {
          var a, s, r;
          if (!this.isValid()) return NaN;
          if (!(a = zt(e, this)).isValid()) return NaN;
          switch (s = 6e4 * (a.utcOffset() - this.utcOffset()), t = W(t)) {
            case"year":
              r = Qt(this, a) / 12;
              break;
            case"month":
              r = Qt(this, a);
              break;
            case"quarter":
              r = Qt(this, a) / 3;
              break;
            case"second":
              r = (this - a) / 1e3;
              break;
            case"minute":
              r = (this - a) / 6e4;
              break;
            case"hour":
              r = (this - a) / 36e5;
              break;
            case"day":
              r = (this - a - s) / 864e5;
              break;
            case"week":
              r = (this - a - s) / 6048e5;
              break;
            default:
              r = this - a
          }
          return n ? r : k(r)
        }, mn.endOf = function (e) {
          return void 0 === (e = W(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }, mn.format = function (e) {
          e || (e = this.isUtc() ? s.defaultFormatUtc : s.defaultFormat);
          var t = U(this, e);
          return this.localeData().postformat(t)
        }, mn.from = function (e, t) {
          return this.isValid() && (g(e) && e.isValid() || xt(e).isValid()) ? Gt({
            to: this,
            from: e
          }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, mn.fromNow = function (e) {
          return this.from(xt(), e)
        }, mn.to = function (e, t) {
          return this.isValid() && (g(e) && e.isValid() || xt(e).isValid()) ? Gt({
            from: this,
            to: e
          }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, mn.toNow = function (e) {
          return this.to(xt(), e)
        }, mn.get = function (e) {
          return x(this[e = W(e)]) ? this[e]() : this
        }, mn.invalidAt = function () {
          return h(this).overflow
        }, mn.isAfter = function (e, t) {
          var n = g(e) ? e : xt(e);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(o(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }, mn.isBefore = function (e, t) {
          var n = g(e) ? e : xt(e);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(o(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }, mn.isBetween = function (e, t, n, a) {
          return ("(" === (a = a || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }, mn.isSame = function (e, t) {
          var n, a = g(e) ? e : xt(e);
          return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = W(t || "millisecond")) ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }, mn.isSameOrAfter = function (e, t) {
          return this.isSame(e, t) || this.isAfter(e, t)
        }, mn.isSameOrBefore = function (e, t) {
          return this.isSame(e, t) || this.isBefore(e, t)
        }, mn.isValid = function () {
          return f(this)
        }, mn.lang = tn, mn.locale = en, mn.localeData = nn, mn.max = Pt, mn.min = jt, mn.parsingFlags = function () {
          return m({}, h(this))
        }, mn.set = function (e, t) {
          if ("object" == typeof e) for (var n = function (e) {
            var t = [];
            for (var n in e) t.push({unit: n, priority: F[n]});
            return t.sort(function (e, t) {
              return e.priority - t.priority
            }), t
          }(e = A(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]); else if (x(this[e = W(e)])) return this[e](t);
          return this
        }, mn.startOf = function (e) {
          switch (e = W(e)) {
            case"year":
              this.month(0);
            case"quarter":
            case"month":
              this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
              this.hours(0);
            case"hour":
              this.minutes(0);
            case"minute":
              this.seconds(0);
            case"second":
              this.milliseconds(0)
          }
          return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }, mn.subtract = Zt, mn.toArray = function () {
          var e = this;
          return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }, mn.toObject = function () {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
          }
        }, mn.toDate = function () {
          return new Date(this.valueOf())
        }, mn.toISOString = function (e) {
          if (!this.isValid()) return null;
          var t = !0 !== e, n = t ? this.clone().utc() : this;
          return n.year() < 0 || n.year() > 9999 ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, mn.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var e = "moment", t = "";
          this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
          var n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = t + '[")]';
          return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + s)
        }, mn.toJSON = function () {
          return this.isValid() ? this.toISOString() : null
        }, mn.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, mn.unix = function () {
          return Math.floor(this.valueOf() / 1e3)
        }, mn.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, mn.creationData = function () {
          return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
        }, mn.year = He, mn.isLeapYear = function () {
          return be(this.year())
        }, mn.weekYear = function (e) {
          return sn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, mn.isoWeekYear = function (e) {
          return sn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, mn.quarter = mn.quarters = function (e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, mn.month = Ce, mn.daysInMonth = function () {
          return Oe(this.year(), this.month())
        }, mn.week = mn.weeks = function (e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), "d")
        }, mn.isoWeek = mn.isoWeeks = function (e) {
          var t = Ue(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), "d")
        }, mn.weeksInYear = function () {
          var e = this.localeData()._week;
          return Ge(this.year(), e.dow, e.doy)
        }, mn.isoWeeksInYear = function () {
          return Ge(this.year(), 1, 4)
        }, mn.date = rn, mn.day = mn.days = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e ? (e = function (e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
          }(e, this.localeData()), this.add(e - t, "d")) : t
        }, mn.weekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? t : this.add(e - t, "d")
        }, mn.isoWeekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            var t = function (e, t) {
              return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
          }
          return this.day() || 7
        }, mn.dayOfYear = function (e) {
          var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return null == e ? t : this.add(e - t, "d")
        }, mn.hour = mn.hours = st, mn.minute = mn.minutes = on, mn.second = mn.seconds = un, mn.millisecond = mn.milliseconds = ln, mn.utcOffset = function (e, t, n) {
          var a, r = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ("string" == typeof e) {
              if (null === (e = Nt(oe, e))) return this
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && t && (a = Rt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Kt(this, Gt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, s.updateOffset(this, !0), this._changeInProgress = null)), this
          }
          return this._isUTC ? r : Rt(this)
        }, mn.utc = function (e) {
          return this.utcOffset(0, e)
        }, mn.local = function (e) {
          return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Rt(this), "m")), this
        }, mn.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var e = Nt(ie, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
          }
          return this
        }, mn.hasAlignedHourOffset = function (e) {
          return !!this.isValid() && (e = e ? xt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, mn.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, mn.isLocal = function () {
          return !!this.isValid() && !this._isUTC
        }, mn.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC
        }, mn.isUtc = It, mn.isUTC = It, mn.zoneAbbr = function () {
          return this._isUTC ? "UTC" : ""
        }, mn.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : ""
        }, mn.dates = w("dates accessor is deprecated. Use date instead.", rn), mn.months = w("months accessor is deprecated. Use month instead", Ce), mn.years = w("years accessor is deprecated. Use year instead", He), mn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
          return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }), mn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;
          var e = {};
          if (y(e, this), (e = St(e))._a) {
            var t = e._isUTC ? c(e._a) : xt(e._a);
            this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
          } else this._isDSTShifted = !1;
          return this._isDSTShifted
        });
        var hn = P.prototype;

        function fn(e, t, n, a) {
          var s = mt(), r = c().set(a, t);
          return s[n](r, e)
        }

        function pn(e, t, n) {
          if (d(e) && (t = e, e = void 0), e = e || "", null != t) return fn(e, t, n, "month");
          var a, s = [];
          for (a = 0; a < 12; a++) s[a] = fn(e, a, n, "month");
          return s
        }

        function Mn(e, t, n, a) {
          "boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || "");
          var s, r = mt(), i = e ? r._week.dow : 0;
          if (null != n) return fn(t, (n + i) % 7, a, "day");
          var o = [];
          for (s = 0; s < 7; s++) o[s] = fn(t, (s + i) % 7, a, "day");
          return o
        }

        hn.calendar = function (e, t, n) {
          var a = this._calendar[e] || this._calendar.sameElse;
          return x(a) ? a.call(t, n) : a
        }, hn.longDateFormat = function (e) {
          var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
          return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
          }), this._longDateFormat[e])
        }, hn.invalidDate = function () {
          return this._invalidDate
        }, hn.ordinal = function (e) {
          return this._ordinal.replace("%d", e)
        }, hn.preparse = cn, hn.postformat = cn, hn.relativeTime = function (e, t, n, a) {
          var s = this._relativeTime[n];
          return x(s) ? s(e, t, n, a) : s.replace(/%d/i, e)
        }, hn.pastFuture = function (e, t) {
          var n = this._relativeTime[e > 0 ? "future" : "past"];
          return x(n) ? n(t) : n.replace(/%s/i, t)
        }, hn.set = function (e) {
          var t, n;
          for (n in e) x(t = e[n]) ? this[n] = t : this["_" + n] = t;
          this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, hn.months = function (e, t) {
          return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ee).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
        }, hn.monthsShort = function (e, t) {
          return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ee.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, hn.monthsParse = function (e, t, n) {
          var a, s, r;
          if (this._monthsParseExact) return function (e, t, n) {
            var a, s, r, i = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) r = c([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (s = Se.call(this._shortMonthsParse, i)) ? s : null : -1 !== (s = Se.call(this._longMonthsParse, i)) ? s : null : "MMM" === t ? -1 !== (s = Se.call(this._shortMonthsParse, i)) ? s : -1 !== (s = Se.call(this._longMonthsParse, i)) ? s : null : -1 !== (s = Se.call(this._longMonthsParse, i)) ? s : -1 !== (s = Se.call(this._shortMonthsParse, i)) ? s : null
          }.call(this, e, t, n);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
            if (s = c([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
            if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
            if (!n && this._monthsParse[a].test(e)) return a
          }
        }, hn.monthsRegex = function (e) {
          return this._monthsParseExact ? (l(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ne), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }, hn.monthsShortRegex = function (e) {
          return this._monthsParseExact ? (l(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Je), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, hn.week = function (e) {
          return Ue(e, this._week.dow, this._week.doy).week
        }, hn.firstDayOfYear = function () {
          return this._week.doy
        }, hn.firstDayOfWeek = function () {
          return this._week.dow
        }, hn.weekdays = function (e, t) {
          return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, hn.weekdaysMin = function (e) {
          return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }, hn.weekdaysShort = function (e) {
          return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }, hn.weekdaysParse = function (e, t, n) {
          var a, s, r;
          if (this._weekdaysParseExact) return function (e, t, n) {
            var a, s, r, i = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) r = c([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (s = Se.call(this._weekdaysParse, i)) ? s : null : "ddd" === t ? -1 !== (s = Se.call(this._shortWeekdaysParse, i)) ? s : null : -1 !== (s = Se.call(this._minWeekdaysParse, i)) ? s : null : "dddd" === t ? -1 !== (s = Se.call(this._weekdaysParse, i)) ? s : -1 !== (s = Se.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = Se.call(this._minWeekdaysParse, i)) ? s : null : "ddd" === t ? -1 !== (s = Se.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = Se.call(this._weekdaysParse, i)) ? s : -1 !== (s = Se.call(this._minWeekdaysParse, i)) ? s : null : -1 !== (s = Se.call(this._minWeekdaysParse, i)) ? s : -1 !== (s = Se.call(this._weekdaysParse, i)) ? s : -1 !== (s = Se.call(this._shortWeekdaysParse, i)) ? s : null
          }.call(this, e, t, n);
          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
            if (s = c([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
            if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
            if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
            if (!n && this._weekdaysParse[a].test(e)) return a
          }
        }, hn.weekdaysRegex = function (e) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, hn.weekdaysShortRegex = function (e) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, hn.weekdaysMinRegex = function (e) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, hn.isPM = function (e) {
          return "p" === (e + "").toLowerCase().charAt(0)
        }, hn.meridiem = function (e, t, n) {
          return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, _t("en", {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10;
            return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
          }
        }), s.lang = w("moment.lang is deprecated. Use moment.locale instead.", _t), s.langData = w("moment.langData is deprecated. Use moment.localeData instead.", mt);
        var yn = Math.abs;

        function Ln(e, t, n, a) {
          var s = Gt(t, n);
          return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
        }

        function Yn(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function gn(e) {
          return 4800 * e / 146097
        }

        function kn(e) {
          return 146097 * e / 4800
        }

        function Dn(e) {
          return function () {
            return this.as(e)
          }
        }

        var vn = Dn("ms"), Tn = Dn("s"), wn = Dn("m"), bn = Dn("h"), Sn = Dn("d"), Hn = Dn("w"), xn = Dn("M"),
            jn = Dn("y");

        function Pn(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN
          }
        }

        var On = Pn("milliseconds"), En = Pn("seconds"), Wn = Pn("minutes"), An = Pn("hours"), Fn = Pn("days"),
            Cn = Pn("months"), Jn = Pn("years");
        var Nn = Math.round, zn = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};
        var Rn = Math.abs;

        function In(e) {
          return (e > 0) - (e < 0) || +e
        }

        function qn() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e, t, n = Rn(this._milliseconds) / 1e3, a = Rn(this._days), s = Rn(this._months);
          t = k((e = k(n / 60)) / 60), n %= 60, e %= 60;
          var r = k(s / 12), i = s %= 12, o = a, d = t, u = e, _ = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
              l = this.asSeconds();
          if (!l) return "P0D";
          var m = l < 0 ? "-" : "", c = In(this._months) !== In(l) ? "-" : "", h = In(this._days) !== In(l) ? "-" : "",
              f = In(this._milliseconds) !== In(l) ? "-" : "";
          return m + "P" + (r ? c + r + "Y" : "") + (i ? c + i + "M" : "") + (o ? h + o + "D" : "") + (d || u || _ ? "T" : "") + (d ? f + d + "H" : "") + (u ? f + u + "M" : "") + (_ ? f + _ + "S" : "")
        }

        var Un = Wt.prototype;
        return Un.isValid = function () {
          return this._isValid
        }, Un.abs = function () {
          var e = this._data;
          return this._milliseconds = yn(this._milliseconds), this._days = yn(this._days), this._months = yn(this._months), e.milliseconds = yn(e.milliseconds), e.seconds = yn(e.seconds), e.minutes = yn(e.minutes), e.hours = yn(e.hours), e.months = yn(e.months), e.years = yn(e.years), this
        }, Un.add = function (e, t) {
          return Ln(this, e, t, 1)
        }, Un.subtract = function (e, t) {
          return Ln(this, e, t, -1)
        }, Un.as = function (e) {
          if (!this.isValid()) return NaN;
          var t, n, a = this._milliseconds;
          if ("month" === (e = W(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + gn(t), "month" === e ? n : n / 12;
          switch (t = this._days + Math.round(kn(this._months)), e) {
            case"week":
              return t / 7 + a / 6048e5;
            case"day":
              return t + a / 864e5;
            case"hour":
              return 24 * t + a / 36e5;
            case"minute":
              return 1440 * t + a / 6e4;
            case"second":
              return 86400 * t + a / 1e3;
            case"millisecond":
              return Math.floor(864e5 * t) + a;
            default:
              throw new Error("Unknown unit " + e)
          }
        }, Un.asMilliseconds = vn, Un.asSeconds = Tn, Un.asMinutes = wn, Un.asHours = bn, Un.asDays = Sn, Un.asWeeks = Hn, Un.asMonths = xn, Un.asYears = jn, Un.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
        }, Un._bubble = function () {
          var e, t, n, a, s, r = this._milliseconds, i = this._days, o = this._months, d = this._data;
          return r >= 0 && i >= 0 && o >= 0 || r <= 0 && i <= 0 && o <= 0 || (r += 864e5 * Yn(kn(o) + i), i = 0, o = 0), d.milliseconds = r % 1e3, e = k(r / 1e3), d.seconds = e % 60, t = k(e / 60), d.minutes = t % 60, n = k(t / 60), d.hours = n % 24, o += s = k(gn(i += k(n / 24))), i -= Yn(kn(s)), a = k(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
        }, Un.clone = function () {
          return Gt(this)
        }, Un.get = function (e) {
          return e = W(e), this.isValid() ? this[e + "s"]() : NaN
        }, Un.milliseconds = On, Un.seconds = En, Un.minutes = Wn, Un.hours = An, Un.days = Fn, Un.weeks = function () {
          return k(this.days() / 7)
        }, Un.months = Cn, Un.years = Jn, Un.humanize = function (e) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t = this.localeData(), n = function (e, t, n) {
            var a = Gt(e).abs(), s = Nn(a.as("s")), r = Nn(a.as("m")), i = Nn(a.as("h")), o = Nn(a.as("d")),
                d = Nn(a.as("M")), u = Nn(a.as("y")),
                _ = s <= zn.ss && ["s", s] || s < zn.s && ["ss", s] || r <= 1 && ["m"] || r < zn.m && ["mm", r] || i <= 1 && ["h"] || i < zn.h && ["hh", i] || o <= 1 && ["d"] || o < zn.d && ["dd", o] || d <= 1 && ["M"] || d < zn.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
            return _[2] = t, _[3] = +e > 0, _[4] = n, function (e, t, n, a, s) {
              return s.relativeTime(t || 1, !!n, e, a)
            }.apply(null, _)
          }(this, !e, t);
          return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }, Un.toISOString = qn, Un.toString = qn, Un.toJSON = qn, Un.locale = en, Un.localeData = nn, Un.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), Un.lang = tn, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), _e("x", re), _e("X", /[+-]?\d+(\.\d{1,3})?/), he("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e, 10))
        }), he("x", function (e, t, n) {
          n._d = new Date(D(e))
        }), s.version = "2.22.2", t = xt, s.fn = mn, s.min = function () {
          return Ot("isBefore", [].slice.call(arguments, 0))
        }, s.max = function () {
          return Ot("isAfter", [].slice.call(arguments, 0))
        }, s.now = function () {
          return Date.now ? Date.now() : +new Date
        }, s.utc = c, s.unix = function (e) {
          return xt(1e3 * e)
        }, s.months = function (e, t) {
          return pn(e, t, "months")
        }, s.isDate = u, s.locale = _t, s.invalid = p, s.duration = Gt, s.isMoment = g, s.weekdays = function (e, t, n) {
          return Mn(e, t, n, "weekdays")
        }, s.parseZone = function () {
          return xt.apply(null, arguments).parseZone()
        }, s.localeData = mt, s.isDuration = At, s.monthsShort = function (e, t) {
          return pn(e, t, "monthsShort")
        }, s.weekdaysMin = function (e, t, n) {
          return Mn(e, t, n, "weekdaysMin")
        }, s.defineLocale = lt, s.updateLocale = function (e, t) {
          if (null != t) {
            var n, a, s = rt;
            null != (a = ut(e)) && (s = a._config), (n = new P(t = j(s, t))).parentLocale = it[e], it[e] = n, _t(e)
          } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);
          return it[e]
        }, s.locales = function () {
          return b(it)
        }, s.weekdaysShort = function (e, t, n) {
          return Mn(e, t, n, "weekdaysShort")
        }, s.normalizeUnits = W, s.relativeTimeRounding = function (e) {
          return void 0 === e ? Nn : "function" == typeof e && (Nn = e, !0)
        }, s.relativeTimeThreshold = function (e, t) {
          return void 0 !== zn[e] && (void 0 === t ? zn[e] : (zn[e] = t, "s" === e && (zn.ss = t - 1), !0))
        }, s.calendarFormat = function (e, t) {
          var n = e.diff(t, "days", !0);
          return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }, s.prototype = mn, s.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "YYYY-[W]WW",
          MONTH: "YYYY-MM"
        }, s
      }, e.exports = t()
    }).call(t, n("3IRH")(e))
  }, QZk1: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("en-il", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      })
    })(n("PJh5"))
  }, RnJI: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ka", {
        months: {
          standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
          format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
          standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
          format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
          },
          s: "რამდენიმე წამი",
          ss: "%d წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი"
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, Sjoy: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, To0v: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ug-cn", {
        months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
        weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
          LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? "يېرىم كېچە" : a < 900 ? "سەھەر" : a < 1130 ? "چۈشتىن بۇرۇن" : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ"
        },
        calendar: {
          sameDay: "[بۈگۈن سائەت] LT",
          nextDay: "[ئەتە سائەت] LT",
          nextWeek: "[كېلەركى] dddd [سائەت] LT",
          lastDay: "[تۆنۈگۈن] LT",
          lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s كېيىن",
          past: "%s بۇرۇن",
          s: "نەچچە سېكونت",
          ss: "%d سېكونت",
          m: "بىر مىنۇت",
          mm: "%d مىنۇت",
          h: "بىر سائەت",
          hh: "%d سائەت",
          d: "بىر كۈن",
          dd: "%d كۈن",
          M: "بىر ئاي",
          MM: "%d ئاي",
          y: "بىر يىل",
          yy: "%d يىل"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "-كۈنى";
            case"w":
            case"W":
              return e + "-ھەپتە";
            default:
              return e
          }
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, Tqun: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      })
    })(n("PJh5"))
  }, V0td: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return "M" === e.charAt(0)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "PD" : "MD"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          ss: "%d sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, V4qH: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        var a = e + " ";
        switch (n) {
          case"ss":
            return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
          case"m":
            return t ? "jedna minuta" : "jedne minute";
          case"mm":
            return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
          case"h":
            return t ? "jedan sat" : "jednog sata";
          case"hh":
            return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
          case"dd":
            return a += 1 === e ? "dan" : "dana";
          case"MM":
            return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
          case"yy":
            return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
      }

      e.defineLocale("hr", {
        months: {
          format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
          standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[jučer u] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, VK9h: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case"M":
            case"Q":
            case"D":
            case"DDD":
            case"d":
              return e + (1 === e ? "er" : "e");
            case"w":
            case"W":
              return e + (1 === e ? "re" : "e")
          }
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, Vz2w: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            case"M":
              return e + "月";
            case"w":
            case"W":
              return e + "周";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          ss: "%d 秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年"
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, XU1s: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          ss: "%d фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, XlWM: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          ss: [e + "sekundi", e + "sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"]
        };
        return t ? s[n][2] ? s[n][2] : s[n][1] : a ? s[n][0] : s[n][1]
      }

      e.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: "%d päeva",
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "XzD+": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H:mm",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return "หลังเที่ยง" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          ss: "%d วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี"
        }
      })
    })(n("PJh5"))
  }, "YBA/": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "på dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, YXlc: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Ònì ni] LT",
          nextDay: "[Ọ̀la ni] LT",
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: "[Àna ni] LT",
          lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ní %s",
          past: "%s kọjá",
          s: "ìsẹjú aayá die",
          ss: "aayá %d",
          m: "ìsẹjú kan",
          mm: "ìsẹjú %d",
          h: "wákati kan",
          hh: "wákati %d",
          d: "ọjọ́ kan",
          dd: "ọjọ́ %d",
          M: "osù kan",
          MM: "osù %d",
          y: "ọdún kan",
          yy: "ọdún %d"
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, ZFGz: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          ss: "%d eiliad",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = "";
          return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, ZUyn: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            case"M":
              return e + "月";
            case"w":
            case"W":
              return e + "週";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      })
    })(n("PJh5"))
  }, ZoSI: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("pt", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, aM0x: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"},
          n = {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"};
      e.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর"
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, aqvp: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        var a = e + " ";
        switch (n) {
          case"ss":
            return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
          case"m":
            return t ? "jedna minuta" : "jedne minute";
          case"mm":
            return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
          case"h":
            return t ? "jedan sat" : "jednog sata";
          case"hh":
            return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
          case"dd":
            return a += 1 === e ? "dan" : "dana";
          case"MM":
            return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
          case"yy":
            return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
      }

      e.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[jučer u] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, bXQP: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case"M":
            case"Q":
            case"D":
            case"DDD":
            case"d":
              return e + (1 === e ? "er" : "e");
            case"w":
            case"W":
              return e + (1 === e ? "re" : "e")
          }
        }
      })
    })(n("PJh5"))
  }, c1x4: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["секунда", "секунде", "секунди"],
          m: ["један минут", "једне минуте"],
          mm: ["минут", "минуте", "минута"],
          h: ["један сат", "једног сата"],
          hh: ["сат", "сата", "сати"],
          dd: ["дан", "дана", "дана"],
          MM: ["месец", "месеца", "месеци"],
          yy: ["година", "године", "година"]
        }, correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
        }, translate: function (e, n, a) {
          var s = t.words[a];
          return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
        }
      };
      e.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[у] [недељу] [у] LT";
              case 3:
                return "[у] [среду] [у] LT";
              case 6:
                return "[у] [суботу] [у] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[у] dddd [у] LT"
            }
          }, lastDay: "[јуче у] LT", lastWeek: function () {
            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
          }, sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "пре %s",
          s: "неколико секунди",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "дан",
          dd: t.translate,
          M: "месец",
          MM: t.translate,
          y: "годину",
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, dURR: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 6, doy: 12}
      })
    })(n("PJh5"))
  }, dyB6: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "e/KL": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: !0,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[T~ódá~ý át] LT",
          nextDay: "[T~ómó~rró~w át] LT",
          nextWeek: "dddd [át] LT",
          lastDay: "[Ý~ést~érdá~ý át] LT",
          lastWeek: "[L~ást] dddd [át] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "í~ñ %s",
          past: "%s á~gó",
          s: "á ~féw ~sécó~ñds",
          ss: "%d s~écóñ~ds",
          m: "á ~míñ~úté",
          mm: "%d m~íñú~tés",
          h: "á~ñ hó~úr",
          hh: "%d h~óúrs",
          d: "á ~dáý",
          dd: "%d d~áýs",
          M: "á ~móñ~th",
          MM: "%d m~óñt~hs",
          y: "á ~ýéár",
          yy: "%d ý~éárs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "eBB/": function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "일";
            case"M":
              return e + "월";
            case"w":
            case"W":
              return e + "주";
            default:
              return e
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return "오후" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "오전" : "오후"
        }
      })
    })(n("PJh5"))
  }, eHwN: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
      };
      e.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[gələn həftə] dddd [saat] LT",
          lastDay: "[dünən] LT",
          lastWeek: "[keçən həftə] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s əvvəl",
          s: "birneçə saniyə",
          ss: "%d saniyə",
          m: "bir dəqiqə",
          mm: "%d dəqiqə",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e) return e + "-ıncı";
          var n = e % 10;
          return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, f4W3: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["sekunda", "sekunde", "sekundi"],
          m: ["jedan minut", "jedne minute"],
          mm: ["minut", "minute", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mesec", "meseca", "meseci"],
          yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
        }, translate: function (e, n, a) {
          var s = t.words[a];
          return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
        }
      };
      e.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedelju] [u] LT";
              case 3:
                return "[u] [sredu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[juče u] LT", lastWeek: function () {
            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pre %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, fW1y: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
          n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
      e.defineLocale("sd", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام"
        },
        calendar: {
          sameDay: "[اڄ] LT",
          nextDay: "[سڀاڻي] LT",
          nextWeek: "dddd [اڳين هفتي تي] LT",
          lastDay: "[ڪالهه] LT",
          lastWeek: "[گزريل هفتي] dddd [تي] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s پوء",
          past: "%s اڳ",
          s: "چند سيڪنڊ",
          ss: "%d سيڪنڊ",
          m: "هڪ منٽ",
          mm: "%d منٽ",
          h: "هڪ ڪلاڪ",
          hh: "%d ڪلاڪ",
          d: "هڪ ڏينهن",
          dd: "%d ڏينهن",
          M: "هڪ مهينو",
          MM: "%d مهينا",
          y: "هڪ سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, g7KF: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
          n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
      e.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[hjoed om] LT",
          nextDay: "[moarn om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[juster om] LT",
          lastWeek: "[ôfrûne] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oer %s",
          past: "%s lyn",
          s: "in pear sekonden",
          ss: "%d sekonden",
          m: "ien minút",
          mm: "%d minuten",
          h: "ien oere",
          hh: "%d oeren",
          d: "ien dei",
          dd: "%d dagen",
          M: "ien moanne",
          MM: "%d moannen",
          y: "ien jier",
          yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, gEQe: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"},
          n = {"೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"};
      e.defineLocale("kn", {
        months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
        monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
        monthsParseExact: !0,
        weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[ಇಂದು] LT",
          nextDay: "[ನಾಳೆ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ನಿನ್ನೆ] LT",
          lastWeek: "[ಕೊನೆಯ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ನಂತರ",
          past: "%s ಹಿಂದೆ",
          s: "ಕೆಲವು ಕ್ಷಣಗಳು",
          ss: "%d ಸೆಕೆಂಡುಗಳು",
          m: "ಒಂದು ನಿಮಿಷ",
          mm: "%d ನಿಮಿಷ",
          h: "ಒಂದು ಗಂಟೆ",
          hh: "%d ಗಂಟೆ",
          d: "ಒಂದು ದಿನ",
          dd: "%d ದಿನ",
          M: "ಒಂದು ತಿಂಗಳು",
          MM: "%d ತಿಂಗಳು",
          y: "ಒಂದು ವರ್ಷ",
          yy: "%d ವರ್ಷ"
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + "ನೇ"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, gEU3: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [i] HH:mm",
          LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
          sameDay: "[i teie mahana, i] LT",
          nextDay: "[apopo i] LT",
          nextWeek: "dddd [i] LT",
          lastDay: "[inanahi i] LT",
          lastWeek: "dddd [whakamutunga i] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "i roto i %s",
          past: "%s i mua",
          s: "te hēkona ruarua",
          ss: "%d hēkona",
          m: "he meneti",
          mm: "%d meneti",
          h: "te haora",
          hh: "%d haora",
          d: "he ra",
          dd: "%d ra",
          M: "he marama",
          MM: "%d marama",
          y: "he tau",
          yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, gUgh: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Ohin iha] LT",
          nextDay: "[Aban iha] LT",
          nextWeek: "dddd [iha] LT",
          lastDay: "[Horiseik iha] LT",
          lastWeek: "dddd [semana kotuk] [iha] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "iha %s",
          past: "%s liuba",
          s: "minutu balun",
          ss: "minutu %d",
          m: "minutu ida",
          mm: "minutu %d",
          h: "oras ida",
          hh: "oras %d",
          d: "loron ida",
          dd: "loron %d",
          M: "fulan ida",
          MM: "fulan %d",
          y: "tinan ida",
          yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, hPuz: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, hng5: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("bm", {
        months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "MMMM [tile] D [san] YYYY",
          LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
        },
        calendar: {
          sameDay: "[Bi lɛrɛ] LT",
          nextDay: "[Sini lɛrɛ] LT",
          nextWeek: "dddd [don lɛrɛ] LT",
          lastDay: "[Kunu lɛrɛ] LT",
          lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s kɔnɔ",
          past: "a bɛ %s bɔ",
          s: "sanga dama dama",
          ss: "sekondi %d",
          m: "miniti kelen",
          mm: "miniti %d",
          h: "lɛrɛ kelen",
          hh: "lɛrɛ %d",
          d: "tile kelen",
          dd: "tile %d",
          M: "kalo kelen",
          MM: "kalo %d",
          y: "san kelen",
          yy: "san %d"
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, iNtv: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          s: ["viensas secunds", "'iensas secunds"],
          ss: [e + " secunds", e + " secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + " míuts", e + " míuts"],
          h: ["'n þora", "'iensa þora"],
          hh: [e + " þoras", e + " þoras"],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + " ziuas", e + " ziuas"],
          M: ["'n mes", "'iens mes"],
          MM: [e + " mesen", e + " mesen"],
          y: ["'n ar", "'iens ar"],
          yy: [e + " ars", e + " ars"]
        };
        return a ? s[n][0] : t ? s[n][0] : s[n][1]
      }

      e.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return "d'o" === e.toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "j+vx": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
      };
      e.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгін сағат] LT",
          nextDay: "[Ертең сағат] LT",
          nextWeek: "dddd [сағат] LT",
          lastDay: "[Кеше сағат] LT",
          lastWeek: "[Өткен аптаның] dddd [сағат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ішінде",
          past: "%s бұрын",
          s: "бірнеше секунд",
          ss: "%d секунд",
          m: "бір минут",
          mm: "%d минут",
          h: "бір сағат",
          hh: "%d сағат",
          d: "бір күн",
          dd: "%d күн",
          M: "бір ай",
          MM: "%d ай",
          y: "бір жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, j8cJ: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-kw", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 0, doy: 12}
      })
    })(n("PJh5"))
  }, jxEH: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
      };

      function n(e, t, n) {
        return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
      }

      function a(e, a, s) {
        return e + " " + n(t[s], e, a)
      }

      function s(e, a, s) {
        return n(t[s], e, a)
      }

      e.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY.",
          LL: "YYYY. [gada] D. MMMM",
          LLL: "YYYY. [gada] D. MMMM, HH:mm",
          LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
          sameDay: "[Šodien pulksten] LT",
          nextDay: "[Rīt pulksten] LT",
          nextWeek: "dddd [pulksten] LT",
          lastDay: "[Vakar pulksten] LT",
          lastWeek: "[Pagājušā] dddd [pulksten] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "pēc %s", past: "pirms %s", s: function (e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
          }, ss: a, m: s, mm: a, h: s, hh: a, d: s, dd: a, M: s, MM: a, y: s, yy: a
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, "k+5o": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
      };
      e.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[yarın saat] LT",
          nextWeek: "[gelecek] dddd [saat] LT",
          lastDay: "[dün] LT",
          lastWeek: "[geçen] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s önce",
          s: "birkaç saniye",
          ss: "%d saniye",
          m: "bir dakika",
          mm: "%d dakika",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir yıl",
          yy: "%d yıl"
        },
        ordinal: function (e, n) {
          switch (n) {
            case"d":
            case"D":
            case"Do":
            case"DD":
              return e;
            default:
              if (0 === e) return e + "'ıncı";
              var a = e % 10;
              return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
          }
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, krPU: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          ss: "%d imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn"
        },
        week: {dow: 6, doy: 12}
      })
    })(n("PJh5"))
  }, lOED: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[В изминалата] dddd [в] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[В изминалия] dddd [в] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дни",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10, n = e % 100;
          return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, m7yE: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

      function n(e, n, a, s) {
        var r = function (e) {
          var n = Math.floor(e % 1e3 / 100), a = Math.floor(e % 100 / 10), s = e % 10, r = "";
          n > 0 && (r += t[n] + "vatlh");
          a > 0 && (r += ("" !== r ? " " : "") + t[a] + "maH");
          s > 0 && (r += ("" !== r ? " " : "") + t[s]);
          return "" === r ? "pagh" : r
        }(e);
        switch (a) {
          case"ss":
            return r + " lup";
          case"mm":
            return r + " tup";
          case"hh":
            return r + " rep";
          case"dd":
            return r + " jaj";
          case"MM":
            return r + " jar";
          case"yy":
            return r + " DIS"
        }
      }

      e.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[DaHjaj] LT",
          nextDay: "[wa’leS] LT",
          nextWeek: "LLL",
          lastDay: "[wa’Hu’] LT",
          lastWeek: "LLL",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
          },
          past: function (e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
          },
          s: "puS lup",
          ss: n,
          m: "wa’ tup",
          mm: n,
          h: "wa’ rep",
          hh: n,
          d: "wa’ jaj",
          dd: n,
          M: "wa’ jar",
          MM: n,
          y: "wa’ DIS",
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, nE8X: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return "ຕອນແລງ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          ss: "%d ວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ"
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return "ທີ່" + e
        }
      })
    })(n("PJh5"))
  }, nLOz: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("gd", {
        months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
        monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
        monthsParseExact: !0,
        weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[An-diugh aig] LT",
          nextDay: "[A-màireach aig] LT",
          nextWeek: "dddd [aig] LT",
          lastDay: "[An-dè aig] LT",
          lastWeek: "dddd [seo chaidh] [aig] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ann an %s",
          past: "bho chionn %s",
          s: "beagan diogan",
          ss: "%d diogan",
          m: "mionaid",
          mm: "%d mionaidean",
          h: "uair",
          hh: "%d uairean",
          d: "latha",
          dd: "%d latha",
          M: "mìos",
          MM: "%d mìosan",
          y: "bliadhna",
          yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, nS2h: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
          n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

      function a(e, a, s, r) {
        var i = "";
        switch (s) {
          case"s":
            return r ? "muutaman sekunnin" : "muutama sekunti";
          case"ss":
            return r ? "sekunnin" : "sekuntia";
          case"m":
            return r ? "minuutin" : "minuutti";
          case"mm":
            i = r ? "minuutin" : "minuuttia";
            break;
          case"h":
            return r ? "tunnin" : "tunti";
          case"hh":
            i = r ? "tunnin" : "tuntia";
            break;
          case"d":
            return r ? "päivän" : "päivä";
          case"dd":
            i = r ? "päivän" : "päivää";
            break;
          case"M":
            return r ? "kuukauden" : "kuukausi";
          case"MM":
            i = r ? "kuukauden" : "kuukautta";
            break;
          case"y":
            return r ? "vuoden" : "vuosi";
          case"yy":
            i = r ? "vuoden" : "vuotta"
        }
        return i = function (e, a) {
          return e < 10 ? a ? n[e] : t[e] : e
        }(e, r) + " " + i
      }

      e.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, ntHu: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        var a, s;
        return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (a = +e, s = {
          ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
          mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
          hh: t ? "година_години_годин" : "годину_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років"
        }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? s[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? s[1] : s[2])
      }

      function n(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
      }

      e.defineLocale("uk", {
        months: {
          format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
          standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function (e, t) {
          var n = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
          };
          return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
          sameDay: n("[Сьогодні "),
          nextDay: n("[Завтра "),
          lastDay: n("[Вчора "),
          nextWeek: n("[У] dddd ["),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return n("[Минулої] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return n("[Минулого] dddd [").call(this)
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          ss: t,
          m: t,
          mm: t,
          h: "годину",
          hh: t,
          d: "день",
          dd: t,
          M: "місяць",
          MM: t,
          y: "рік",
          yy: t
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case"M":
            case"d":
            case"DDD":
            case"w":
            case"W":
              return e + "-й";
            case"D":
              return e + "-го";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, oCzW: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("mt", {
        months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
        weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Illum fil-]LT",
          nextDay: "[Għada fil-]LT",
          nextWeek: "dddd [fil-]LT",
          lastDay: "[Il-bieraħ fil-]LT",
          lastWeek: "dddd [li għadda] [fil-]LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "f’ %s",
          past: "%s ilu",
          s: "ftit sekondi",
          ss: "%d sekondi",
          m: "minuta",
          mm: "%d minuti",
          h: "siegħa",
          hh: "%d siegħat",
          d: "ġurnata",
          dd: "%d ġranet",
          M: "xahar",
          MM: "%d xhur",
          y: "sena",
          yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, oo1B: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: !0,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          ss: "%d സെക്കൻഡ്",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
        }
      })
    })(n("PJh5"))
  }, ooba: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, pfs9: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"},
          n = {"੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"};
      e.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
          LT: "A h:mm ਵਜੇ",
          LTS: "A h:mm:ss ਵਜੇ",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
          LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
          sameDay: "[ਅਜ] LT",
          nextDay: "[ਕਲ] LT",
          nextWeek: "[ਅਗਲਾ] dddd, LT",
          lastDay: "[ਕਲ] LT",
          lastWeek: "[ਪਿਛਲੇ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ਵਿੱਚ",
          past: "%s ਪਿਛਲੇ",
          s: "ਕੁਝ ਸਕਿੰਟ",
          ss: "%d ਸਕਿੰਟ",
          m: "ਇਕ ਮਿੰਟ",
          mm: "%d ਮਿੰਟ",
          h: "ਇੱਕ ਘੰਟਾ",
          hh: "%d ਘੰਟੇ",
          d: "ਇੱਕ ਦਿਨ",
          dd: "%d ਦਿਨ",
          M: "ਇੱਕ ਮਹੀਨਾ",
          MM: "%d ਮਹੀਨੇ",
          y: "ਇੱਕ ਸਾਲ",
          yy: "%d ਸਾਲ"
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, rIuo: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
          n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
      e.defineLocale("dv", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return "މފ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "މކ" : "މފ"
        },
        calendar: {
          sameDay: "[މިއަދު] LT",
          nextDay: "[މާދަމާ] LT",
          nextWeek: "dddd LT",
          lastDay: "[އިއްޔެ] LT",
          lastWeek: "[ފާއިތުވި] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ތެރޭގައި %s",
          past: "ކުރިން %s",
          s: "ސިކުންތުކޮޅެއް",
          ss: "d% ސިކުންތު",
          m: "މިނިޓެއް",
          mm: "މިނިޓު %d",
          h: "ގަޑިއިރެއް",
          hh: "ގަޑިއިރު %d",
          d: "ދުވަހެއް",
          dd: "ދުވަސް %d",
          M: "މަހެއް",
          MM: "މަސް %d",
          y: "އަހަރެއް",
          yy: "އަހަރު %d"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 7, doy: 12}
      })
    })(n("PJh5"))
  }, rtsW: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"},
          n = {"૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0"};
      e.defineLocale("gu", {
        months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
        monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
        monthsParseExact: !0,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
          LT: "A h:mm વાગ્યે",
          LTS: "A h:mm:ss વાગ્યે",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm વાગ્યે",
          LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
        },
        calendar: {
          sameDay: "[આજ] LT",
          nextDay: "[કાલે] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ગઇકાલે] LT",
          lastWeek: "[પાછલા] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s મા",
          past: "%s પેહલા",
          s: "અમુક પળો",
          ss: "%d સેકંડ",
          m: "એક મિનિટ",
          mm: "%d મિનિટ",
          h: "એક કલાક",
          hh: "%d કલાક",
          d: "એક દિવસ",
          dd: "%d દિવસ",
          M: "એક મહિનો",
          MM: "%d મહિનો",
          y: "એક વર્ષ",
          yy: "%d વર્ષ"
        },
        preparse: function (e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, sqLM: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          ss: "%d segundo",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, ssxj: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
          n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

      function a(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10)
      }

      function s(e, t, n, s) {
        var r = e + " ";
        switch (n) {
          case"s":
            return t || s ? "pár sekund" : "pár sekundami";
          case"ss":
            return t || s ? r + (a(e) ? "sekundy" : "sekund") : r + "sekundami";
          case"m":
            return t ? "minuta" : s ? "minutu" : "minutou";
          case"mm":
            return t || s ? r + (a(e) ? "minuty" : "minut") : r + "minutami";
          case"h":
            return t ? "hodina" : s ? "hodinu" : "hodinou";
          case"hh":
            return t || s ? r + (a(e) ? "hodiny" : "hodin") : r + "hodinami";
          case"d":
            return t || s ? "den" : "dnem";
          case"dd":
            return t || s ? r + (a(e) ? "dny" : "dní") : r + "dny";
          case"M":
            return t || s ? "měsíc" : "měsícem";
          case"MM":
            return t || s ? r + (a(e) ? "měsíce" : "měsíců") : r + "měsíci";
          case"y":
            return t || s ? "rok" : "rokem";
          case"yy":
            return t || s ? r + (a(e) ? "roky" : "let") : r + "lety"
        }
      }

      e.defineLocale("cs", {
        months: t,
        monthsShort: n,
        monthsParse: function (e, t) {
          var n, a = [];
          for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
          return a
        }(t, n),
        shortMonthsParse: function (e) {
          var t, n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
          return n
        }(n),
        longMonthsParse: function (e) {
          var t, n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
          return n
        }(t),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY"
        },
        calendar: {
          sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v neděli v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve středu v] LT";
              case 4:
                return "[ve čtvrtek v] LT";
              case 5:
                return "[v pátek v] LT";
              case 6:
                return "[v sobotu v] LT"
            }
          }, lastDay: "[včera v] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulou neděli v] LT";
              case 1:
              case 2:
                return "[minulé] dddd [v] LT";
              case 3:
                return "[minulou středu v] LT";
              case 4:
              case 5:
                return "[minulý] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: s,
          ss: s,
          m: s,
          mm: s,
          h: s,
          hh: s,
          d: s,
          dd: s,
          M: s,
          MM: s,
          y: s,
          yy: s
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, svD2: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["sekund", "sekunda", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mjesec", "mjeseca", "mjeseci"],
          yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
        }, translate: function (e, n, a) {
          var s = t.words[a];
          return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
        }
      };
      e.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[juče u] LT", lastWeek: function () {
            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mjesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "tb/R": function (e, t) {
  }, tkWw: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 0, doy: 4}
      })
    })(n("PJh5"))
  }, tzHd: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case"D":
              return e + (1 === e ? "er" : "");
            default:
            case"M":
            case"Q":
            case"DDD":
            case"d":
              return e + (1 === e ? "er" : "e");
            case"w":
            case"W":
              return e + (1 === e ? "re" : "e")
          }
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, uSe8: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
          n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
      e.defineLocale("ur", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام"
        },
        calendar: {
          sameDay: "[آج بوقت] LT",
          nextDay: "[کل بوقت] LT",
          nextWeek: "dddd [بوقت] LT",
          lastDay: "[گذشتہ روز بوقت] LT",
          lastWeek: "[گذشتہ] dddd [بوقت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s بعد",
          past: "%s قبل",
          s: "چند سیکنڈ",
          ss: "%d سیکنڈ",
          m: "ایک منٹ",
          mm: "%d منٹ",
          h: "ایک گھنٹہ",
          hh: "%d گھنٹے",
          d: "ایک دن",
          dd: "%d دن",
          M: "ایک ماہ",
          MM: "%d ماہ",
          y: "ایک سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, ulq9: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        var a, s;
        return "m" === n ? t ? "минута" : "минуту" : e + " " + (a = +e, s = {
          ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
          hh: "час_часа_часов",
          dd: "день_дня_дней",
          MM: "месяц_месяца_месяцев",
          yy: "год_года_лет"
        }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? s[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? s[1] : s[2])
      }

      var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
      e.defineLocale("ru", {
        months: {
          format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
          standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
          format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
          standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
          standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
          format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., H:mm",
          LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
          sameDay: "[Сегодня, в] LT",
          nextDay: "[Завтра, в] LT",
          lastDay: "[Вчера, в] LT",
          nextWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В следующее] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В следующий] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В следующую] dddd, [в] LT"
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В прошлое] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В прошлый] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В прошлую] dddd, [в] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "через %s",
          past: "%s назад",
          s: "несколько секунд",
          ss: t,
          m: t,
          mm: t,
          h: "час",
          hh: t,
          d: "день",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
            case"M":
            case"d":
            case"DDD":
              return e + "-й";
            case"D":
              return e + "-го";
            case"w":
            case"W":
              return e + "-я";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, upln: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e) {
        return e % 100 == 11 || e % 10 != 1
      }

      function n(e, n, a, s) {
        var r = e + " ";
        switch (a) {
          case"s":
            return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case"ss":
            return t(e) ? r + (n || s ? "sekúndur" : "sekúndum") : r + "sekúnda";
          case"m":
            return n ? "mínúta" : "mínútu";
          case"mm":
            return t(e) ? r + (n || s ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
          case"hh":
            return t(e) ? r + (n || s ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
          case"d":
            return n ? "dagur" : s ? "dag" : "degi";
          case"dd":
            return t(e) ? n ? r + "dagar" : r + (s ? "daga" : "dögum") : n ? r + "dagur" : r + (s ? "dag" : "degi");
          case"M":
            return n ? "mánuður" : s ? "mánuð" : "mánuði";
          case"MM":
            return t(e) ? n ? r + "mánuðir" : r + (s ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (s ? "mánuð" : "mánuði");
          case"y":
            return n || s ? "ár" : "ári";
          case"yy":
            return t(e) ? r + (n || s ? "ár" : "árum") : r + (n || s ? "ár" : "ári")
        }
      }

      e.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: "klukkustund",
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, uslO: function (e, t, n) {
    var a = {
      "./af": "3CJN",
      "./af.js": "3CJN",
      "./ar": "3MVc",
      "./ar-dz": "tkWw",
      "./ar-dz.js": "tkWw",
      "./ar-kw": "j8cJ",
      "./ar-kw.js": "j8cJ",
      "./ar-ly": "wPpW",
      "./ar-ly.js": "wPpW",
      "./ar-ma": "dURR",
      "./ar-ma.js": "dURR",
      "./ar-sa": "7OnE",
      "./ar-sa.js": "7OnE",
      "./ar-tn": "BEem",
      "./ar-tn.js": "BEem",
      "./ar.js": "3MVc",
      "./az": "eHwN",
      "./az.js": "eHwN",
      "./be": "3hfc",
      "./be.js": "3hfc",
      "./bg": "lOED",
      "./bg.js": "lOED",
      "./bm": "hng5",
      "./bm.js": "hng5",
      "./bn": "aM0x",
      "./bn.js": "aM0x",
      "./bo": "w2Hs",
      "./bo.js": "w2Hs",
      "./br": "OSsP",
      "./br.js": "OSsP",
      "./bs": "aqvp",
      "./bs.js": "aqvp",
      "./ca": "wIgY",
      "./ca.js": "wIgY",
      "./cs": "ssxj",
      "./cs.js": "ssxj",
      "./cv": "N3vo",
      "./cv.js": "N3vo",
      "./cy": "ZFGz",
      "./cy.js": "ZFGz",
      "./da": "YBA/",
      "./da.js": "YBA/",
      "./de": "DOkx",
      "./de-at": "8v14",
      "./de-at.js": "8v14",
      "./de-ch": "Frex",
      "./de-ch.js": "Frex",
      "./de.js": "DOkx",
      "./dv": "rIuo",
      "./dv.js": "rIuo",
      "./el": "CFqe",
      "./el.js": "CFqe",
      "./en-au": "Sjoy",
      "./en-au.js": "Sjoy",
      "./en-ca": "Tqun",
      "./en-ca.js": "Tqun",
      "./en-gb": "hPuz",
      "./en-gb.js": "hPuz",
      "./en-ie": "ALEw",
      "./en-ie.js": "ALEw",
      "./en-il": "QZk1",
      "./en-il.js": "QZk1",
      "./en-nz": "dyB6",
      "./en-nz.js": "dyB6",
      "./eo": "Nd3h",
      "./eo.js": "Nd3h",
      "./es": "LT9G",
      "./es-do": "7MHZ",
      "./es-do.js": "7MHZ",
      "./es-us": "INcR",
      "./es-us.js": "INcR",
      "./es.js": "LT9G",
      "./et": "XlWM",
      "./et.js": "XlWM",
      "./eu": "sqLM",
      "./eu.js": "sqLM",
      "./fa": "2pmY",
      "./fa.js": "2pmY",
      "./fi": "nS2h",
      "./fi.js": "nS2h",
      "./fo": "OVPi",
      "./fo.js": "OVPi",
      "./fr": "tzHd",
      "./fr-ca": "bXQP",
      "./fr-ca.js": "bXQP",
      "./fr-ch": "VK9h",
      "./fr-ch.js": "VK9h",
      "./fr.js": "tzHd",
      "./fy": "g7KF",
      "./fy.js": "g7KF",
      "./gd": "nLOz",
      "./gd.js": "nLOz",
      "./gl": "FuaP",
      "./gl.js": "FuaP",
      "./gom-latn": "+27R",
      "./gom-latn.js": "+27R",
      "./gu": "rtsW",
      "./gu.js": "rtsW",
      "./he": "Nzt2",
      "./he.js": "Nzt2",
      "./hi": "ETHv",
      "./hi.js": "ETHv",
      "./hr": "V4qH",
      "./hr.js": "V4qH",
      "./hu": "xne+",
      "./hu.js": "xne+",
      "./hy-am": "GrS7",
      "./hy-am.js": "GrS7",
      "./id": "yRTJ",
      "./id.js": "yRTJ",
      "./is": "upln",
      "./is.js": "upln",
      "./it": "FKXc",
      "./it.js": "FKXc",
      "./ja": "ORgI",
      "./ja.js": "ORgI",
      "./jv": "JwiF",
      "./jv.js": "JwiF",
      "./ka": "RnJI",
      "./ka.js": "RnJI",
      "./kk": "j+vx",
      "./kk.js": "j+vx",
      "./km": "5j66",
      "./km.js": "5j66",
      "./kn": "gEQe",
      "./kn.js": "gEQe",
      "./ko": "eBB/",
      "./ko.js": "eBB/",
      "./ky": "6cf8",
      "./ky.js": "6cf8",
      "./lb": "z3hR",
      "./lb.js": "z3hR",
      "./lo": "nE8X",
      "./lo.js": "nE8X",
      "./lt": "/6P1",
      "./lt.js": "/6P1",
      "./lv": "jxEH",
      "./lv.js": "jxEH",
      "./me": "svD2",
      "./me.js": "svD2",
      "./mi": "gEU3",
      "./mi.js": "gEU3",
      "./mk": "Ab7C",
      "./mk.js": "Ab7C",
      "./ml": "oo1B",
      "./ml.js": "oo1B",
      "./mn": "CqHt",
      "./mn.js": "CqHt",
      "./mr": "5vPg",
      "./mr.js": "5vPg",
      "./ms": "ooba",
      "./ms-my": "G++c",
      "./ms-my.js": "G++c",
      "./ms.js": "ooba",
      "./mt": "oCzW",
      "./mt.js": "oCzW",
      "./my": "F+2e",
      "./my.js": "F+2e",
      "./nb": "FlzV",
      "./nb.js": "FlzV",
      "./ne": "/mhn",
      "./ne.js": "/mhn",
      "./nl": "3K28",
      "./nl-be": "Bp2f",
      "./nl-be.js": "Bp2f",
      "./nl.js": "3K28",
      "./nn": "C7av",
      "./nn.js": "C7av",
      "./pa-in": "pfs9",
      "./pa-in.js": "pfs9",
      "./pl": "7LV+",
      "./pl.js": "7LV+",
      "./pt": "ZoSI",
      "./pt-br": "AoDM",
      "./pt-br.js": "AoDM",
      "./pt.js": "ZoSI",
      "./ro": "wT5f",
      "./ro.js": "wT5f",
      "./ru": "ulq9",
      "./ru.js": "ulq9",
      "./sd": "fW1y",
      "./sd.js": "fW1y",
      "./se": "5Omq",
      "./se.js": "5Omq",
      "./si": "Lgqo",
      "./si.js": "Lgqo",
      "./sk": "OUMt",
      "./sk.js": "OUMt",
      "./sl": "2s1U",
      "./sl.js": "2s1U",
      "./sq": "V0td",
      "./sq.js": "V0td",
      "./sr": "f4W3",
      "./sr-cyrl": "c1x4",
      "./sr-cyrl.js": "c1x4",
      "./sr.js": "f4W3",
      "./ss": "7Q8x",
      "./ss.js": "7Q8x",
      "./sv": "Fpqq",
      "./sv.js": "Fpqq",
      "./sw": "DSXN",
      "./sw.js": "DSXN",
      "./ta": "+7/x",
      "./ta.js": "+7/x",
      "./te": "Nlnz",
      "./te.js": "Nlnz",
      "./tet": "gUgh",
      "./tet.js": "gUgh",
      "./tg": "5SNd",
      "./tg.js": "5SNd",
      "./th": "XzD+",
      "./th.js": "XzD+",
      "./tl-ph": "3LKG",
      "./tl-ph.js": "3LKG",
      "./tlh": "m7yE",
      "./tlh.js": "m7yE",
      "./tr": "k+5o",
      "./tr.js": "k+5o",
      "./tzl": "iNtv",
      "./tzl.js": "iNtv",
      "./tzm": "FRPF",
      "./tzm-latn": "krPU",
      "./tzm-latn.js": "krPU",
      "./tzm.js": "FRPF",
      "./ug-cn": "To0v",
      "./ug-cn.js": "To0v",
      "./uk": "ntHu",
      "./uk.js": "ntHu",
      "./ur": "uSe8",
      "./ur.js": "uSe8",
      "./uz": "XU1s",
      "./uz-latn": "/bsm",
      "./uz-latn.js": "/bsm",
      "./uz.js": "XU1s",
      "./vi": "0X8Q",
      "./vi.js": "0X8Q",
      "./x-pseudo": "e/KL",
      "./x-pseudo.js": "e/KL",
      "./yo": "YXlc",
      "./yo.js": "YXlc",
      "./zh-cn": "Vz2w",
      "./zh-cn.js": "Vz2w",
      "./zh-hk": "ZUyn",
      "./zh-hk.js": "ZUyn",
      "./zh-tw": "BbgG",
      "./zh-tw.js": "BbgG"
    };

    function s(e) {
      return n(r(e))
    }

    function r(e) {
      var t = a[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t
    }

    s.keys = function () {
      return Object.keys(a)
    }, s.resolve = r, e.exports = s, s.id = "uslO"
  }, w2Hs: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"},
          n = {"༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0"};
      e.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[དི་རིང] LT",
          nextDay: "[སང་ཉིན] LT",
          nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
          lastDay: "[ཁ་སང] LT",
          lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ལ་",
          past: "%s སྔན་ལ",
          s: "ལམ་སང",
          ss: "%d སྐར་ཆ།",
          m: "སྐར་མ་གཅིག",
          mm: "%d སྐར་མ",
          h: "ཆུ་ཚོད་གཅིག",
          hh: "%d ཆུ་ཚོད",
          d: "ཉིན་གཅིག",
          dd: "%d ཉིན་",
          M: "ཟླ་བ་གཅིག",
          MM: "%d ཟླ་བ",
          y: "ལོ་གཅིག",
          yy: "%d ལོ"
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
        },
        week: {dow: 0, doy: 6}
      })
    })(n("PJh5"))
  }, wIgY: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("ca", {
        months: {
          standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
          format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a les] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
          llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, nextDay: function () {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, nextWeek: function () {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, lastDay: function () {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "uns segons",
          ss: "%d segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return "w" !== t && "W" !== t || (n = "a"), e + n
        },
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, wPpW: function (e, t, n) {
    (function (e) {
      "use strict";
      var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, n = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
          }, a = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
          }, s = function (e) {
            return function (t, s, r, i) {
              var o = n(t), d = a[e][n(t)];
              return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, t)
            }
          },
          r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      e.defineLocale("ar-ly", {
        months: r,
        monthsShort: r,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: s("s"),
          ss: s("s"),
          m: s("m"),
          mm: s("m"),
          h: s("h"),
          hh: s("h"),
          d: s("d"),
          dd: s("d"),
          M: s("M"),
          MM: s("M"),
          y: s("y"),
          yy: s("y")
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {dow: 6, doy: 12}
      })
    })(n("PJh5"))
  }, wT5f: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n) {
        var a = " ";
        return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + {
          ss: "secunde",
          mm: "minute",
          hh: "ore",
          dd: "zile",
          MM: "luni",
          yy: "ani"
        }[n]
      }

      e.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          ss: t,
          m: "un minut",
          mm: t,
          h: "o oră",
          hh: t,
          d: "o zi",
          dd: t,
          M: "o lună",
          MM: t,
          y: "un an",
          yy: t
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, "xne+": function (e, t, n) {
    (function (e) {
      "use strict";
      var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

      function n(e, t, n, a) {
        var s = e;
        switch (n) {
          case"s":
            return a || t ? "néhány másodperc" : "néhány másodperce";
          case"ss":
            return s + (a || t) ? " másodperc" : " másodperce";
          case"m":
            return "egy" + (a || t ? " perc" : " perce");
          case"mm":
            return s + (a || t ? " perc" : " perce");
          case"h":
            return "egy" + (a || t ? " óra" : " órája");
          case"hh":
            return s + (a || t ? " óra" : " órája");
          case"d":
            return "egy" + (a || t ? " nap" : " napja");
          case"dd":
            return s + (a || t ? " nap" : " napja");
          case"M":
            return "egy" + (a || t ? " hónap" : " hónapja");
          case"MM":
            return s + (a || t ? " hónap" : " hónapja");
          case"y":
            return "egy" + (a || t ? " év" : " éve");
          case"yy":
            return s + (a || t ? " év" : " éve")
        }
        return ""
      }

      function a(e) {
        return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
      }

      e.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY. MMMM D.",
          LLL: "YYYY. MMMM D. H:mm",
          LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return "u" === e.charAt(1).toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
        },
        calendar: {
          sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
            return a.call(this, !0)
          }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
            return a.call(this, !1)
          }, sameElse: "L"
        },
        relativeTime: {
          future: "%s múlva",
          past: "%s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }, y5uh: function (e, t) {
    var n = document.getElementsByTagName("html")[0],
        a = document.documentElement.offsetWidth || document.body.offsetWidth;
    n.style.fontSize = a >= 750 ? "30px" : 30 * a / 750 + "px"
  }, yRTJ: function (e, t, n) {
    (function (e) {
      "use strict";
      e.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          ss: "%d detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
      })
    })(n("PJh5"))
  }, z3hR: function (e, t, n) {
    (function (e) {
      "use strict";

      function t(e, t, n, a) {
        var s = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"]
        };
        return t ? s[n][0] : s[n][1]
      }

      function n(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10;
          return n(0 === t ? e / 10 : t)
        }
        if (e < 1e4) {
          for (; e >= 10;) e /= 10;
          return n(e)
        }
        return n(e /= 1e3)
      }

      e.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return "[Leschten] dddd [um] LT";
              default:
                return "[Leschte] dddd [um] LT"
            }
          }
        },
        relativeTime: {
          future: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
          },
          past: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
          },
          s: "e puer Sekonnen",
          ss: "%d Sekonnen",
          m: t,
          mm: "%d Minutten",
          h: t,
          hh: "%d Stonnen",
          d: t,
          dd: "%d Deeg",
          M: t,
          MM: "%d Méint",
          y: t,
          yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })(n("PJh5"))
  }
});