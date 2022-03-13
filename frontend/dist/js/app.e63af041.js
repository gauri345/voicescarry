(function (e) {
    function t(t) {
        for (var o, i, c = t[0], s = t[1], l = t[2], d = 0, m = []; d < c.length; d++) i = c[d], Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]), a[i] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        u && u(t);
        while (m.length) m.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== a[s] && (o = !1)
            }
            o && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }

    var o = {}, a = {app: 0}, r = [];

    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }

    i.m = e, i.c = o, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], s = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var u = s;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "035f": function (e, t, n) {
        "use strict";
        n("eaba")
    }, "08e4": function (e, t, n) {
    }, "0975": function (e, t, n) {
        e.exports = n.p + "img/homepagewoman.0d28a710.png"
    }, "0b6b": function (e, t, n) {
        "use strict";
        n("f1d3")
    }, "0c69": function (e, t, n) {
    }, "0d27": function (e) {
        e.exports = JSON.parse('{"headerText":"Measuring Worker Wellbeing","speechBubbleName":"Hi! My name is... I will help you.","speechBubbleQR":"To enter, please type your factory code or access via QR code.","labelFactoryCode":"Factory code:","generalButtonStartSurvey":"Enter the survey","homepage_entered_message":"Welcome to the survey on worker-wellbeing!","homepage_info_message":"If you want to know more about the survey, please click on the info icon below.","homepage_start_survey":"Start Survey","homepage_report_complaint":"Report a complaint","welcome_survey":"Welcome to the survey about wellbeing at work!","explain_survey":"We are a team from the University of Mannheim which wants to get deeper insights into the wellbeing of workers. It is important to mention that no personal data are stored or forwarded to your employer."}')
    }, 2098: function (e, t, n) {
        "use strict";
        n("0c69")
    }, "2af4": function (e, t, n) {
        "use strict";
        n("aa61")
    }, "2e5e": function (e, t, n) {
        "use strict";
        n("d8cf")
    }, "32d4": function (e, t, n) {
    }, "354d": function (e, t, n) {
    }, "3f11": function (e, t, n) {
        "use strict";
        n("9290")
    }, "4e9b": function (e) {
        e.exports = JSON.parse('{"headerText":"Dự án \'Đo lường phúc lợi của nhân viên\'","speechBubbleName":"Chào! Tên tôi là ... Tôi sẽ giúp bạn.","speechBubbleQR":"Để tham gia khảo sát, vui lòng nhập mã nhà máy của bạn hoặc truy cập qua mã QR.","labelFactoryCode":"Mã nhà máy:","generalButtonStartSurvey":"Nhập cuộc khảo sát","homepage_welcome":"Chào mừng!","homepage_entered_message":"Bạn đã tham gia cuộc khảo sát này thành công.","homepage_feature_message":"Chúng tôi có hai tính năng trong trang này, Khảo sát và Khiếu nại.","homepage_info_message":"Nếu bạn muốn biết thêm về cuộc khảo sát, vui lòng nhấp vào biểu tượng thông tin bên dưới.","homepage_start_survey":"Bắt đầu khảo sát","homepage_report_complaint":"Báo cáo khiếu nại"}')
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var o = n("7a23");

        function a(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("router-view");
            return Object(o["openBlock"])(), Object(o["createBlock"])(c, {key: e.$route.path})
        }

        var r = {name: "App"}, i = (n("e88d"), n("6b0d")), c = n.n(i);
        const s = c()(r, [["render", a]]);
        var l = s, u = (n("ab8b"), n("7b17"), n("6c02")), d = {class: "landingpage"}, m = {id: "body"},
            b = {id: "footer"};

        function p(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("Header"), s = Object(o["resolveComponent"])("TextField"),
                l = Object(o["resolveComponent"])("LandingFooter");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", d, [Object(o["createVNode"])(c, {HeaderText: e.$t("headerText")}, null, 8, ["HeaderText"]), Object(o["createElementVNode"])("div", m, [Object(o["createVNode"])(s)]), Object(o["createElementVNode"])("div", b, [Object(o["createVNode"])(l)])])
        }

        var f = n("d61a"), v = n.n(f), g = n("c3e7"), j = n.n(g), O = function (e) {
            return Object(o["pushScopeId"])("data-v-17b26551"), e = e(), Object(o["popScopeId"])(), e
        }, h = {class: "navbar fixed-bottom navbar-dark bg-primary"}, y = O((function () {
            return Object(o["createElementVNode"])("div", {class: "picture-wrapper"}, [Object(o["createElementVNode"])("img", {
                alt: "Uni Mannheim",
                src: v.a,
                class: "uni-logo"
            }), Object(o["createElementVNode"])("img", {alt: "Vaude", src: j.a, class: "vaude-logo"})], -1)
        })), N = {class: "language-changer"};

        function k(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("LanguageSwitcher");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("nav", h, [y, Object(o["createElementVNode"])("div", N, [Object(o["createVNode"])(c)])])
        }

        var I = Object(o["createElementVNode"])("span", {class: "material-icons"}, "language", -1);

        function V(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", null, [I, Object(o["createElementVNode"])("a", {
                href: "#",
                class: "btn btn-outline-info lang-button lang-button-first",
                onClick: t[0] || (t[0] = function () {
                    return i.changeLanguage && i.changeLanguage.apply(i, arguments)
                })
            }, "EN"), Object(o["createElementVNode"])("a", {
                class: "btn btn-outline-info lang-button",
                onClick: t[1] || (t[1] = function () {
                    return i.changeLanguage && i.changeLanguage.apply(i, arguments)
                })
            }, "VI")])
        }

        var E = {
            name: "LanguageSwitcher", components: {}, methods: {
                changeLanguage: function (e) {
                    var t = e.target.innerHTML.toLocaleLowerCase();
                    this.$i18n.locale = t, localStorage.setItem("language", t)
                }
            }
        };
        n("035f");
        const q = c()(E, [["render", V]]);
        var w = q, C = {name: "LandingFooter", components: {LanguageSwitcher: w}};
        n("60b6");
        const S = c()(C, [["render", k], ["__scopeId", "data-v-17b26551"]]);
        var _ = S, x = {class: "navbar relative-top navbar-dark bg-primary"}, B = {class: "HeaderText"},
            Q = {class: "material-icons"};

        function T(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("nav", x, [Object(o["renderSlot"])(e.$slots, "default", {}, void 0, !0), Object(o["createElementVNode"])("div", B, [Object(o["createElementVNode"])("span", Q, Object(o["toDisplayString"])(n.HeaderIcon), 1), Object(o["createTextVNode"])(" " + Object(o["toDisplayString"])(n.HeaderText), 1)])])
        }

        var D = {name: "Header", props: {HeaderText: String, HeaderIcon: String}};
        n("0b6b");
        const H = c()(D, [["render", T], ["__scopeId", "data-v-7d535267"]]);
        var M = H, P = n("e830"), F = n.n(P), $ = function (e) {
                return Object(o["pushScopeId"])("data-v-35ec2a6e"), e = e(), Object(o["popScopeId"])(), e
            }, L = {class: "persona-container"}, W = {class: "center"}, U = $((function () {
                return Object(o["createElementVNode"])("div", {class: "image-wrapper"}, [Object(o["createElementVNode"])("img", {
                    alt: "Persona",
                    src: F.a
                })], -1)
            })), R = {class: "speech-wrapper"}, A = {class: "pageentry"}, z = {key: 0, class: "error"},
            G = {class: "submit"};

        function J(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("SpeechBubble"), s = Object(o["resolveComponent"])("LandingButton"),
                l = Object(o["resolveComponent"])("router-link");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])(o["Fragment"], null, [Object(o["createElementVNode"])("section", L, [Object(o["createElementVNode"])("div", W, [U, Object(o["createElementVNode"])("div", R, [Object(o["createVNode"])(c, {description: e.$t("speechBubbleName")}, null, 8, ["description"]), Object(o["createVNode"])(c, {description: e.$t("speechBubbleQR")}, null, 8, ["description"])])])]), Object(o["createElementVNode"])("section", A, [Object(o["createElementVNode"])("form", {
                onSubmit: t[1] || (t[1] = Object(o["withModifiers"])((function () {
                    return i.handleSubmit && i.handleSubmit.apply(i, arguments)
                }), ["prevent"]))
            }, [Object(o["createElementVNode"])("label", null, Object(o["toDisplayString"])(e.$t("labelFactoryCode")), 1), Object(o["withDirectives"])(Object(o["createElementVNode"])("input", {
                "onUpdate:modelValue": t[0] || (t[0] = function (e) {
                    return r.code = e
                }), required: "", type: "code"
            }, null, 512), [[o["vModelText"], r.code]]), r.codeError ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", z, Object(o["toDisplayString"])(r.codeError), 1)) : Object(o["createCommentVNode"])("", !0), Object(o["createElementVNode"])("div", G, [Object(o["createVNode"])(l, {to: "/homepage"}, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createVNode"])(s, {text: e.$t("generalButtonStartSurvey")}, null, 8, ["text"])]
                })), _: 1
            })])], 32)])], 64)
        }

        var K = {class: "button-text-wrapper"};

        function X(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("button", {
                onClick: t[0] || (t[0] = function (e) {
                    return i.onClick()
                }), style: Object(o["normalizeStyle"])({background: n.color}), class: "btn"
            }, [Object(o["createElementVNode"])("div", K, Object(o["toDisplayString"])(n.text), 1)], 4)
        }

        var Y = {
            name: "LandingButton",
            props: {text: String, color: String, icon: String},
            methods: {
                onClick: function () {
                    this.$emit("btn-click")
                }
            }
        };
        n("6b93");
        const Z = c()(Y, [["render", X], ["__scopeId", "data-v-7ef77a94"]]);
        var ee = Z, te = (n("a4d3"), n("e01a"), {class: "speechbubble"});

        function ne(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", te, Object(o["toDisplayString"])(n.description), 1)
        }

        var oe = {name: "SpeechBubble", props: {description: String}};
        n("ccee");
        const ae = c()(oe, [["render", ne], ["__scopeId", "data-v-4c18b503"]]);
        var re = ae, ie = {
            data: function () {
                return {code: "", codeError: null}
            }, components: {LandingButton: ee, SpeechBubble: re}, methods: {
                handleSubmit: function () {
                    this.codeError = this.code.length > 5 ? "" : "The factory code is numeric and has to be 6 characters long!", this.codeError || console.log("code: ", this.code)
                }
            }
        };
        n("6896");
        const ce = c()(ie, [["render", J], ["__scopeId", "data-v-35ec2a6e"]]);
        var se = ce, le = {name: "Landingpage", components: {LandingFooter: _, Header: M, TextField: se}};
        n("2098");
        const ue = c()(le, [["render", p]]);
        var de = ue, me = n("0975"), be = n.n(me), pe = function (e) {
            return Object(o["pushScopeId"])("data-v-872096b8"), e = e(), Object(o["popScopeId"])(), e
        }, fe = {id: "header"}, ve = {class: "div-vertical"}, ge = pe((function () {
            return Object(o["createElementVNode"])("div", {class: "div-top-img"}, [Object(o["createElementVNode"])("img", {
                class: "img-top",
                alt: "top image",
                src: be.a
            })], -1)
        })), je = {class: "div-top-txt"}, Oe = pe((function () {
            return Object(o["createElementVNode"])("br", null, null, -1)
        })), he = pe((function () {
            return Object(o["createElementVNode"])("br", null, null, -1)
        })), ye = pe((function () {
            return Object(o["createElementVNode"])("br", null, null, -1)
        })), Ne = pe((function () {
            return Object(o["createElementVNode"])("br", null, null, -1)
        })), ke = pe((function () {
            return Object(o["createElementVNode"])("br", null, null, -1)
        })), Ie = pe((function () {
            return Object(o["createElementVNode"])("span", {
                class: "material-icons info",
                "data-bs-target": ".bd-example-modal-sm",
                "data-bs-toggle": "modal"
            }, "info", -1)
        })), Ve = {id: "body"}, Ee = {class: "navigation-buttons"}, qe = pe((function () {
            return Object(o["createElementVNode"])("br", null, null, -1)
        })), we = {class: "navigation-buttons"}, Ce = {id: "footer"};

        function Se(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("InformationModal"), s = Object(o["resolveComponent"])("Header"),
                l = Object(o["resolveComponent"])("Button"), u = Object(o["resolveComponent"])("router-link"),
                d = Object(o["resolveComponent"])("Footer");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])(o["Fragment"], null, [Object(o["createElementVNode"])("div", fe, [Object(o["createVNode"])(s, null, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createElementVNode"])("div", ve, [ge, Object(o["createElementVNode"])("div", je, [Oe, Object(o["createTextVNode"])(" " + Object(o["toDisplayString"])(e.$t("homepage_entered_message")) + " ", 1), he, ye, Object(o["createTextVNode"])(" " + Object(o["toDisplayString"])(e.$t("homepage_info_message")) + " ", 1), Ne, ke, Ie, Object(o["createElementVNode"])("span", {
                        class: "material-icons audio",
                        onClick: t[0] || (t[0] = function () {
                            return i.readQuestionContent && i.readQuestionContent.apply(i, arguments)
                        })
                    }, "volume_up"), Object(o["createVNode"])(c)])])]
                })), _: 1
            })]), Object(o["createElementVNode"])("div", Ve, [Object(o["createElementVNode"])("div", Ee, [Object(o["createVNode"])(u, {to: "/question/information"}, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createVNode"])(l, {
                        icon: "assignment",
                        text: e.$t("homepage_start_survey")
                    }, null, 8, ["text"])]
                })), _: 1
            })]), qe, Object(o["createElementVNode"])("div", we, [Object(o["createVNode"])(u, {to: "/complaint"}, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createVNode"])(l, {
                        icon: "assignment_late",
                        text: e.$t("homepage_report_complaint")
                    }, null, 8, ["text"])]
                })), _: 1
            })])]), Object(o["createElementVNode"])("div", Ce, [Object(o["createVNode"])(d)])], 64)
        }

        n("ac1f"), n("5319");
        var _e = {class: "button-text-wrapper"}, xe = {class: "material-icons icon"};

        function Be(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("button", {
                onClick: t[0] || (t[0] = function (e) {
                    return i.onClick()
                }), style: Object(o["normalizeStyle"])({background: n.color}), class: "btn"
            }, [Object(o["createElementVNode"])("div", _e, [Object(o["createElementVNode"])("span", xe, Object(o["toDisplayString"])(n.icon), 1), Object(o["createTextVNode"])(" " + Object(o["toDisplayString"])(n.text), 1)])], 4)
        }

        var Qe = {
            name: "Button", props: {text: String, color: String, icon: String}, methods: {
                onClick: function () {
                    this.$emit("btn-click")
                }
            }
        };
        n("a073");
        const Te = c()(Qe, [["render", Be], ["__scopeId", "data-v-21f873ee"]]);
        var De = Te, He = function (e) {
                return Object(o["pushScopeId"])("data-v-78e2194d"), e = e(), Object(o["popScopeId"])(), e
            }, Me = {class: "navbar justify-content-center navbar-expand fixed-bottom navbar-dark bg-primary"},
            Pe = {class: "navbar-nav"}, Fe = {class: "nav-item nav-link"}, $e = He((function () {
                return Object(o["createElementVNode"])("span", {class: "material-icons"}, "home", -1)
            })), Le = Object(o["createTextVNode"])(" Home "), We = {class: "nav-item nav-link"}, Ue = He((function () {
                return Object(o["createElementVNode"])("span", {class: "material-icons"}, "assignment", -1)
            })), Re = Object(o["createTextVNode"])(" Survey "), Ae = {class: "nav-item nav-link"}, ze = He((function () {
                return Object(o["createElementVNode"])("span", {class: "material-icons"}, "assignment_late", -1)
            })), Ge = Object(o["createTextVNode"])(" Complaint "), Je = {class: "nav-item nav-link", href: "#"};

        function Ke(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("router-link"), s = Object(o["resolveComponent"])("LanguageSwitcher");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("nav", Me, [Object(o["createElementVNode"])("div", Pe, [Object(o["createElementVNode"])("a", Fe, [Object(o["createVNode"])(c, {to: "/homepage"}, {
                default: Object(o["withCtx"])((function () {
                    return [$e, Le]
                })), _: 1
            })]), Object(o["createElementVNode"])("a", We, [Object(o["createVNode"])(c, {to: "/question/1"}, {
                default: Object(o["withCtx"])((function () {
                    return [Ue, Re]
                })), _: 1
            })]), Object(o["createElementVNode"])("a", Ae, [Object(o["createVNode"])(c, {to: "/complaint"}, {
                default: Object(o["withCtx"])((function () {
                    return [ze, Ge]
                })), _: 1
            })]), Object(o["createElementVNode"])("a", Je, [Object(o["createElementVNode"])("div", null, [Object(o["createVNode"])(s)])])])])
        }

        var Xe = {name: "Footer", components: {LanguageSwitcher: w}};
        n("deda");
        const Ye = c()(Xe, [["render", Ke], ["__scopeId", "data-v-78e2194d"]]);
        var Ze = Ye, et = function (e) {
                return Object(o["pushScopeId"])("data-v-510f19f0"), e = e(), Object(o["popScopeId"])(), e
            }, tt = {
                "aria-hidden": "true",
                "aria-labelledby": "additionalInformationModal",
                class: "modal fade bd-example-modal-sm",
                role: "dialog",
                tabindex: "-1"
            }, nt = {class: "modal-dialog", role: "document"}, ot = {class: "modal-content"}, at = {class: "modal-header"},
            rt = {class: "modal-title"}, it = et((function () {
                return Object(o["createElementVNode"])("button", {
                    "aria-label": "Close",
                    class: "close",
                    "data-bs-dismiss": "modal",
                    type: "button"
                }, [Object(o["createElementVNode"])("span", {"aria-hidden": "true"}, "×")], -1)
            })), ct = {class: "modal-body"}, st = et((function () {
                return Object(o["createElementVNode"])("div", {class: "modal-footer"}, [Object(o["createElementVNode"])("button", {
                    class: "btn btn-secondary",
                    "data-bs-dismiss": "modal",
                    type: "button"
                }, "Close")], -1)
            }));

        function lt(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", tt, [Object(o["createElementVNode"])("div", nt, [Object(o["createElementVNode"])("div", ot, [Object(o["createElementVNode"])("div", at, [Object(o["createElementVNode"])("h5", rt, Object(o["toDisplayString"])(n.questionContent), 1), it]), Object(o["createElementVNode"])("div", ct, [Object(o["createElementVNode"])("p", null, Object(o["toDisplayString"])(n.additionalInformation), 1)]), st])])])
        }

        var ut = {name: "InformationModal", props: {questionContent: String, additionalInformation: String}};
        n("b1dc");
        const dt = c()(ut, [["render", lt], ["__scopeId", "data-v-510f19f0"]]);
        var mt = dt;

        function bt(e) {
            var t = window.speechSynthesis;
            if (t.speaking) console.error("speechSynthesis.speaking"); else if ("" !== e.value) {
                var n = new SpeechSynthesisUtterance(e);
                n.onend = function () {
                    console.log("SpeechSynthesisUtterance.onend")
                }, n.onerror = function () {
                    console.error("SpeechSynthesisUtterance.onerror")
                }, n.pitch = .9, n.rate = 1, t.speak(n)
            }
        }

        var pt = {
            name: "Homepage",
            components: {Button: De, Header: M, Footer: Ze, InformationModal: mt},
            data: function () {
                return {isReading: !1}
            },
            methods: {
                readQuestionContent: function () {
                    var e = this.$i18n.t("homepage_entered_message").replace("!", ". ") + this.$i18n.t("homepage_info_message");
                    console.log(this.$i18n.locale), bt(e)
                }
            }
        };
        n("bee8");
        const ft = c()(pt, [["render", Se], ["__scopeId", "data-v-872096b8"]]);
        var vt = ft, gt = {class: "surveypage"}, jt = {class: "question-container"}, Ot = {class: "navigation-buttons"},
            ht = {key: 0, class: "button-previous"}, yt = {
                key: 1,
                class: "button-previous",
                "data-bs-target": ".bd-example-modal-pm",
                "data-bs-toggle": "modal"
            }, Nt = {key: 2, class: "button-next"};

        function kt(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("HeaderSurvey"), s = Object(o["resolveComponent"])("Content"),
                l = Object(o["resolveComponent"])("SurveyButton"), u = Object(o["resolveComponent"])("router-link"),
                d = Object(o["resolveComponent"])("FinishModal"), m = Object(o["resolveComponent"])("Progress"),
                b = Object(o["resolveComponent"])("Footer");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", gt, [Object(o["createVNode"])(c, {
                "question-category": e.currentQuestion.questionCategory,
                "question-icon": e.currentQuestion.questionIcon
            }, null, 8, ["question-category", "question-icon"]), Object(o["createElementVNode"])("div", jt, [Object(o["createVNode"])(s, {
                "additional-information": e.currentQuestion.additionalInformation,
                "question-content": e.currentQuestion.questionTitle,
                "question-number": e.currentQuestion.questionNumber,
                "question-title": e.currentQuestion.questionTitle
            }, null, 8, ["additional-information", "question-content", "question-number", "question-title"]), Object(o["createElementVNode"])("div", Ot, [void 0 !== e.previousQuestion.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", ht, [Object(o["createVNode"])(u, {to: "/question/" + e.previousQuestion.questionNumber}, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createVNode"])(l, {icon1: "arrow_backwards", text: "Previous"})]
                })), _: 1
            }, 8, ["to"])])) : Object(o["createCommentVNode"])("", !0), 23 == e.previousQuestion.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", yt, [Object(o["createVNode"])(d, {
                "additional-information": e.additionalInformation,
                "question-content": e.questionContent
            }, null, 8, ["additional-information", "question-content"]), Object(o["createVNode"])(l, {
                class: "submit",
                text: "Submit"
            })])) : Object(o["createCommentVNode"])("", !0), void 0 !== e.nextQuestion.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", Nt, [Object(o["createVNode"])(u, {to: "/question/" + e.nextQuestion.questionNumber}, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createVNode"])(l, {icon2: "arrow_forwards", text: "Next"})]
                })), _: 1
            }, 8, ["to"])])) : Object(o["createCommentVNode"])("", !0)]), Object(o["createVNode"])(m, {
                id: "progressbar",
                "current-page-number": e.currentQuestion.questionNumber
            }, null, 8, ["current-page-number"])]), Object(o["createVNode"])(b)])
        }

        var It = n("5530"), Vt = function (e) {
            return Object(o["pushScopeId"])("data-v-510e96f2"), e = e(), Object(o["popScopeId"])(), e
        }, Et = {class: "progress-container"}, qt = {class: "current-page-number"}, wt = Vt((function () {
            return Object(o["createElementVNode"])("div", {class: "progress"}, [Object(o["createElementVNode"])("div", {class: "progress-value"})], -1)
        }));

        function Ct(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", Et, [Object(o["createElementVNode"])("div", qt, " Page " + Object(o["toDisplayString"])(n.currentPageNumber) + " of " + Object(o["toDisplayString"])(e.totalQuestions), 1), wt])
        }

        n("a9e3"), n("4de4"), n("d3b7");
        var St = {
            debug: !0, state: Object(o["reactive"])({
                currentQuestion: {},
                nextQuestion: {},
                previousQuestion: {},
                allQuestions: [{
                    questionNumber: 1,
                    questionIcon: "self_improvement",
                    questionCategory: "Overall Wellbeing",
                    questionTitle: "I am doing well at work",
                    additionalInformation: "No explanation needed"
                }, {
                    questionNumber: 2,
                    questionIcon: "spa",
                    questionCategory: "Wellbeing at Work",
                    questionTitle: "My employer ist taking care of me",
                    additionalInformation: "I feel that my employer treats me fairly. I feel supported by my supervisors and managers. There are protocols in place to keep me physically and mentally safe."
                }, {
                    questionNumber: 3,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "My workload is manageable",
                    additionalInformation: "I have enough time to do my work properly, with a bearable level of stress and enough time to rest."
                }, {
                    questionNumber: 4,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "The physical working conditions are good",
                    additionalInformation: "The temperature where I work is moderate — not overly hot or cold. My work space is well ventilated. It is not overly noisy (considering my job environment). I may sit, stand, or move in relatively comfortable ways in order to do my job."
                }, {
                    questionNumber: 5,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I feel that my job is secure",
                    additionalInformation: "I feel that my employment status is not in danger."
                }, {
                    questionNumber: 6,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I feel that my job is meaningful in my life",
                    additionalInformation: "I value having my job. It gives me a sense of accomplishment or satisfaction."
                }, {
                    questionNumber: 7,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "My work environment is safe",
                    additionalInformation: "Dangerous machines are checked for safety regularly. I have access to healthy food, drinking water, and medical care at my place of work. I have adequate protective equipment. My managers and colleagues follow Covid-19 safety regulations."
                }, {
                    questionNumber: 8,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I feel that I am part of a team",
                    additionalInformation: "I can count on my co-workers and supervisors to get the work done and manage stressful situations well."
                }, {
                    questionNumber: 9,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I feel that I have a good work-life balance",
                    additionalInformation: "It is easy to take time off from work for personal matters. Work does not disrupt my family time."
                }, {
                    questionNumber: 10,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I understand what is expected from me at work",
                    additionalInformation: "I have a sense of control over how I do my work and my job schedule."
                }, {
                    questionNumber: 11,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I receive a fair wage",
                    additionalInformation: "I feel that I receive a fair wage for my work and time. I am paid on time. No wages are kept from me. If I work overtime, I am paid for overtime."
                }, {
                    questionNumber: 12,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "At work, I have the opportunity to learn new skills",
                    additionalInformation: "My company offers me opportunities to develop and advance my career."
                }, {
                    questionNumber: 13,
                    questionIcon: "spa",
                    questionCategory: "SHINE Dimensions",
                    questionTitle: "I have NEVER experienced abuse at work (e.g., being insulted)",
                    additionalInformation: "I feel emotionally and physically safe at work. No one makes me feel uncomfortable, yells at me, threatens me, or touches me in inappropriate ways."
                }, {
                    questionNumber: 14,
                    questionIcon: "person",
                    questionCategory: "Work Engagement",
                    questionTitle: "At my work, I feel bursting with energy",
                    additionalInformation: "I feel motivated by my work."
                }, {
                    questionNumber: 15,
                    questionIcon: "person",
                    questionCategory: "Work Engagement",
                    questionTitle: "I am enthusiastic about my job",
                    additionalInformation: "/"
                }, {
                    questionNumber: 16,
                    questionIcon: "person",
                    questionCategory: "Work Engagement",
                    questionTitle: "I am proud of the work that I do",
                    additionalInformation: "/"
                }, {
                    questionNumber: 17,
                    questionIcon: "wb_sunny",
                    questionCategory: "Multidimensional Poverty",
                    questionTitle: "I feel healthy at work in general",
                    additionalInformation: "/"
                }, {
                    questionNumber: 18,
                    questionIcon: "wb_sunny",
                    questionCategory: "Multidimensional Poverty",
                    questionTitle: "I am able to eat healthy food at work",
                    additionalInformation: "/"
                }, {
                    questionNumber: 19,
                    questionIcon: "wb_sunny",
                    questionCategory: "Multidimensional Poverty",
                    questionTitle: "I have access to clean and sufficient drinking water at work",
                    additionalInformation: "/"
                }, {
                    questionNumber: 20,
                    questionIcon: "wb_sunny",
                    questionCategory: "Multidimensional Poverty",
                    questionTitle: "I have good housing",
                    additionalInformation: "If my place of work provides housing, it is clean and comfortable. I am able to cook and socialize without too many regulations."
                }, {
                    questionNumber: 21,
                    questionIcon: "person_pin",
                    questionCategory: "General Information",
                    questionTitle: "What is your gender?",
                    additionalInformation: "/"
                }, {
                    questionNumber: 22,
                    questionIcon: "person_pin",
                    questionCategory: "General Information",
                    questionTitle: "What is yor age?",
                    additionalInformation: "/"
                }, {
                    questionNumber: 23,
                    questionIcon: "person_pin",
                    questionCategory: "General Information",
                    questionTitle: "In which position are you working?",
                    additionalInformation: "/"
                }, {
                    questionNumber: 24,
                    questionIcon: "person_pin",
                    questionCategory: "General Information",
                    questionTitle: "Please use this text box to explain any of your answers here. We would like to hear your feedback about how you feel at work.",
                    additionalInformation: "Please be aware that if you would like to make a complaint anonymously or raise a problem that you do not feel comfortable raising with a manager, you can do so by clicking here. This link will bring you to Vaude’s complaint mechanism system that can provide you with resources and options that can help."
                }]
            }), setQuestionsAction: function (e) {
                var t = this.findQuestion(e - 1);
                t.length > 0 && (this.state.previousQuestion = t[0]);
                var n = this.findQuestion(e);
                n.length > 0 && (this.state.currentQuestion = n[0]);
                var o = this.findQuestion(e + 1);
                o.length > 0 && (this.state.nextQuestion = o[0])
            }, findQuestion: function (e) {
                return this.state.allQuestions.filter((function (t) {
                    return t.questionNumber === e
                }))
            }, clearSelectedQuestions: function () {
                this.state.currentQuestion = {}, this.state.nextQuestion = {}, this.state.previousQuestion = {}
            }, totalAvailableQuestions: function () {
                return this.state.allQuestions.length
            }
        }, _t = St, xt = {
            name: "Progress", props: {currentPageNumber: Number}, data: function () {
                return {
                    totalQuestions: _t.totalAvailableQuestions(),
                    progressPercentage: this.calculateProgressPercentage()
                }
            }, methods: {
                calculateProgressPercentage: function () {
                    return this.currentPageNumber / _t.totalAvailableQuestions() * 100 + "%"
                }
            }
        }, Bt = function () {
            Object(o["useCssVars"])((function (e) {
                return {"5de86c57": e.progressPercentage}
            }))
        }, Qt = xt.setup;
        xt.setup = Qt ? function (e, t) {
            return Bt(), Qt(e, t)
        } : Bt;
        var Tt = xt;
        n("c7e8");
        const Dt = c()(Tt, [["render", Ct], ["__scopeId", "data-v-510e96f2"]]);
        var Ht = Dt, Mt = function (e) {
                return Object(o["pushScopeId"])("data-v-3aefc59a"), e = e(), Object(o["popScopeId"])(), e
            }, Pt = {class: "survey-question-container"}, Ft = {class: "center"}, $t = Mt((function () {
                return Object(o["createElementVNode"])("div", {class: "survey-persona-wrapper"}, [Object(o["createElementVNode"])("img", {
                    alt: "Persona",
                    src: F.a
                })], -1)
            })), Lt = {class: "survey-question-wrapper"}, Wt = {class: "speechbubble"}, Ut = {class: "question-title"},
            Rt = Mt((function () {
                return Object(o["createElementVNode"])("span", {
                    class: "material-icons info",
                    "data-bs-target": ".bd-example-modal-sm",
                    "data-bs-toggle": "modal"
                }, "info", -1)
            })), At = {key: 0, class: "question-answers"}, zt = {key: 1, class: "question-answers"},
            Gt = Mt((function () {
                return Object(o["createElementVNode"])("option", {value: "female"}, "Female", -1)
            })), Jt = Mt((function () {
                return Object(o["createElementVNode"])("option", {value: "male"}, "Male", -1)
            })), Kt = [Gt, Jt], Xt = {key: 2, class: "question-answers"},
            Yt = Object(o["createStaticVNode"])('<option value="twentyoryounger" data-v-3aefc59a>20 or younger</option><option value="twentyonethirty" data-v-3aefc59a>21 - 30</option><option value="thirtyonefourty" data-v-3aefc59a>31 - 40</option><option value="fourtyonefifty" data-v-3aefc59a>41 - 50</option><option value="fiftyonesixty" data-v-3aefc59a>51 - 60</option><option value="sixtyoneseventy" data-v-3aefc59a>61 - 70</option><option value="seventyorolder" data-v-3aefc59a>71 or older</option>', 7),
            Zt = [Yt], en = {key: 3, class: "question-answers"}, tn = Mt((function () {
                return Object(o["createElementVNode"])("option", {value: "worker"}, "Worker", -1)
            })), nn = Mt((function () {
                return Object(o["createElementVNode"])("option", {value: "manager"}, "Manager", -1)
            })), on = [tn, nn], an = {key: 4, class: "question-answers"}, rn = Mt((function () {
                return Object(o["createElementVNode"])("textarea", {class: "textfield"}, "\r\n    ", -1)
            })), cn = [rn];

        function sn(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("InformationModal");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])(o["Fragment"], null, [Object(o["createElementVNode"])("div", Pt, [Object(o["createElementVNode"])("div", Ft, [$t, Object(o["createElementVNode"])("div", Lt, [Object(o["createElementVNode"])("div", Wt, [Object(o["createElementVNode"])("div", Ut, Object(o["toDisplayString"])(n.questionTitle), 1), Rt, Object(o["createVNode"])(c, {
                "additional-information": n.additionalInformation,
                "question-content": n.questionContent
            }, null, 8, ["additional-information", "question-content"]), "en" === e.$i18n.locale ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("span", {
                key: 0,
                class: "material-icons audio",
                onClick: t[0] || (t[0] = function () {
                    return i.readQuestionContent && i.readQuestionContent.apply(i, arguments)
                })
            }, "volume_up")) : Object(o["createCommentVNode"])("", !0)])])])]), n.questionNumber <= 20 ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", At, [Object(o["createElementVNode"])("span", {
                class: "material-icons very_dissatisfied",
                onClick: t[1] || (t[1] = function (e) {
                    return i.answer("very dissatisfied")
                })
            }, "sentiment_very_dissatisfied"), Object(o["createElementVNode"])("span", {
                class: "material-icons dissatisfied",
                onClick: t[2] || (t[2] = function (e) {
                    return i.answer("dissatisfied")
                })
            }, "sentiment_dissatisfied"), Object(o["createElementVNode"])("span", {
                class: "material-icons neutral",
                onClick: t[3] || (t[3] = function (e) {
                    return i.answer("neutral")
                })
            }, "sentiment_neutral"), Object(o["createElementVNode"])("span", {
                class: "material-icons satisfied",
                onClick: t[4] || (t[4] = function (e) {
                    return i.answer("satisfied")
                })
            }, "sentiment_satisfied"), Object(o["createElementVNode"])("span", {
                class: "material-icons very_satisfied",
                onClick: t[5] || (t[5] = function (e) {
                    return i.answer("very satisfied")
                })
            }, "sentiment_very_satisfied")])) : 21 == n.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", zt, [Object(o["withDirectives"])(Object(o["createElementVNode"])("select", {
                "onUpdate:modelValue": t[6] || (t[6] = function (e) {
                    return r.gender = e
                })
            }, Kt, 512), [[o["vModelSelect"], r.gender]])])) : 22 == n.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", Xt, [Object(o["withDirectives"])(Object(o["createElementVNode"])("select", {
                "onUpdate:modelValue": t[7] || (t[7] = function (e) {
                    return r.age = e
                })
            }, Zt, 512), [[o["vModelSelect"], r.age]])])) : 23 == n.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", en, [Object(o["withDirectives"])(Object(o["createElementVNode"])("select", {
                "onUpdate:modelValue": t[8] || (t[8] = function (e) {
                    return r.position = e
                })
            }, on, 512), [[o["vModelSelect"], r.position]])])) : 24 == n.questionNumber ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("div", an, cn)) : Object(o["createCommentVNode"])("", !0)], 64)
        }

        var ln = {
            name: "Content",
            props: {
                questionTitle: String,
                questionNumber: Number,
                questionContent: String,
                additionalInformation: String
            },
            data: function () {
                return {gender: "female", age: "twentyoryounger", position: "worker"}
            },
            components: {InformationModal: mt},
            methods: {
                answer: function (e) {
                    console.log(e)
                }, readQuestionContent: function () {
                    bt(this.questionContent)
                }
            }
        };
        n("eac8");
        const un = c()(ln, [["render", sn], ["__scopeId", "data-v-3aefc59a"]]);
        var dn = un, mn = {class: "material-icons back-arrow"}, bn = {class: "material-icons next-arrow"};

        function pn(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("button", {
                onClick: t[0] || (t[0] = function (e) {
                    return i.onClick()
                }), style: Object(o["normalizeStyle"])({background: n.color}), class: "btn"
            }, [Object(o["createElementVNode"])("span", mn, Object(o["toDisplayString"])(n.icon1), 1), Object(o["createTextVNode"])(" " + Object(o["toDisplayString"])(n.text) + " ", 1), Object(o["createElementVNode"])("span", bn, Object(o["toDisplayString"])(n.icon2), 1)], 4)
        }

        var fn = {
            name: "SurveyButton",
            props: {text: String, color: String, icon1: String, icon2: String},
            methods: {
                onClick: function () {
                    this.$emit("btn-click")
                }
            }
        };
        n("3f11");
        const vn = c()(fn, [["render", pn], ["__scopeId", "data-v-03a7bd64"]]);
        var gn = vn, jn = {class: "questionTitle"}, On = {class: "question-category"}, hn = {class: "material-icons"};

        function yn(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", jn, [Object(o["createElementVNode"])("div", On, [Object(o["createElementVNode"])("span", hn, Object(o["toDisplayString"])(n.questionIcon), 1), Object(o["createTextVNode"])(" " + Object(o["toDisplayString"])(n.questionCategory), 1)])])
        }

        var Nn = {name: "QuestionModal", props: {questionCategory: String, questionIcon: String}};
        n("2e5e");
        const kn = c()(Nn, [["render", yn], ["__scopeId", "data-v-eebfb60c"]]);
        var In = kn, Vn = function (e) {
                return Object(o["pushScopeId"])("data-v-bcc2c7a4"), e = e(), Object(o["popScopeId"])(), e
            }, En = {
                "aria-hidden": "true",
                "aria-labelledby": "additionalInformationModal",
                class: "modal fade bd-example-modal-pm",
                role: "dialog",
                tabindex: "-1"
            }, qn = {class: "modal-dialog", role: "document"}, wn = {class: "modal-content"}, Cn = {class: "modal-header"},
            Sn = Vn((function () {
                return Object(o["createElementVNode"])("h5", {class: "modal-title"}, "Thank you for participating in the survey!", -1)
            })), _n = Vn((function () {
                return Object(o["createElementVNode"])("button", {
                    "aria-label": "Close",
                    class: "close",
                    "data-bs-dismiss": "modal",
                    type: "button"
                }, [Object(o["createElementVNode"])("span", {"aria-hidden": "true"}, "×")], -1)
            })), xn = Vn((function () {
                return Object(o["createElementVNode"])("div", {class: "modal-body"}, [Object(o["createElementVNode"])("p", null, "What is the purpose of the survey?"), Object(o["createElementVNode"])("p", null, "What are we doing with the data?"), Object(o["createElementVNode"])("p", null, "Do we store_old the data?")], -1)
            })), Bn = {class: "modal-footer"}, Qn = Vn((function () {
                return Object(o["createElementVNode"])("button", {
                    class: "btn btn-secondary",
                    background: "",
                    "data-bs-dismiss": "modal",
                    type: "button"
                }, "Finish the survey", -1)
            }));

        function Tn(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("router-link");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("div", En, [Object(o["createElementVNode"])("div", qn, [Object(o["createElementVNode"])("div", wn, [Object(o["createElementVNode"])("div", Cn, [Sn, Object(o["createVNode"])(c, {to: "/homepage"}, {
                default: Object(o["withCtx"])((function () {
                    return [_n]
                })), _: 1
            })]), xn, Object(o["createElementVNode"])("div", Bn, [Object(o["createVNode"])(c, {to: "/homepage"}, {
                default: Object(o["withCtx"])((function () {
                    return [Qn]
                })), _: 1
            })])])])])
        }

        var Dn = {name: "InformationModal", props: {questionContent: String, additionalInformation: String}};
        n("f753");
        const Hn = c()(Dn, [["render", Tn], ["__scopeId", "data-v-bcc2c7a4"]]);
        var Mn = Hn, Pn = n("5502"), Fn = {
            name: "Question",
            components: {Content: dn, SurveyButton: gn, Progress: Ht, Footer: Ze, HeaderSurvey: In, FinishModal: Mn},
            data: function () {
                return {
                    currentQuestion: _t.state.currentQuestion,
                    nextQuestion: _t.state.nextQuestion,
                    previousQuestion: _t.state.previousQuestion,
                    questionCategory: _t.state.questionCategory,
                    questionIcon: _t.state.questionIcon
                }
            },
            methods: Object(It["a"])({}, Object(Pn["b"])(["fetchQuestionById"])),
            created: function () {
                var e = this.$route.params.number;
                console.log(this.fetchQuestionById(e))
            },
            beforeCreate: function () {
                _t.clearSelectedQuestions(), _t.setQuestionsAction(parseInt(this.$route.params.number))
            }
        };
        n("ed6a");
        const $n = c()(Fn, [["render", kt], ["__scopeId", "data-v-9d49170e"]]);
        var Ln = $n,
            Wn = Object(o["createElementVNode"])("p", null, [Object(o["createTextVNode"])(" Click on the button to report a complaint directly to an independent partner of Vaude. For more information, visit this link: "), Object(o["createElementVNode"])("a", {href: "https://csr-report.vaude.com/gri-en/social/complaints-system.php"}, "Fair Wear Complaint Helpline")], -1),
            Un = {class: "buttonwrapper"};

        function Rn(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("Header"), s = Object(o["resolveComponent"])("ComplaintButton"),
                l = Object(o["resolveComponent"])("Footer");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])(o["Fragment"], null, [Object(o["createVNode"])(c, {
                HeaderIcon: "assignment_late",
                HeaderText: "Complaint"
            }), Wn, Object(o["createElementVNode"])("div", Un, [Object(o["createVNode"])(s, {
                onclick: " window.open('http://www.vaude.de','_blank')",
                text: "Go to the Complaint System of Vaude"
            })]), Object(o["createVNode"])(l)], 64)
        }

        var An = {class: "button-text-wrapper"};

        function zn(e, t, n, a, r, i) {
            return Object(o["openBlock"])(), Object(o["createElementBlock"])("button", {
                onClick: t[0] || (t[0] = function (e) {
                    return i.onClick()
                }), style: Object(o["normalizeStyle"])({background: n.color}), class: "btn"
            }, [Object(o["createElementVNode"])("div", An, Object(o["toDisplayString"])(n.text), 1)], 4)
        }

        var Gn = {
            name: "ComplaintButton",
            props: {text: String, color: String, icon: String},
            methods: {
                onClick: function () {
                    this.$emit("btn-click")
                }
            }
        };
        n("2af4");
        const Jn = c()(Gn, [["render", zn], ["__scopeId", "data-v-b3f8ccae"]]);
        var Kn = Jn, Xn = {name: "Complaint", components: {Header: M, Footer: Ze, ComplaintButton: Kn}};
        const Yn = c()(Xn, [["render", Rn]]);
        var Zn = Yn, eo = n("b8eb"), to = n.n(eo), no = function (e) {
            return Object(o["pushScopeId"])("data-v-13b7e12a"), e = e(), Object(o["popScopeId"])(), e
        }, oo = {id: "body"}, ao = {class: "text"}, ro = no((function () {
            return Object(o["createElementVNode"])("div", {class: "team-picture"}, [Object(o["createElementVNode"])("img", {
                id: "Team",
                alt: "Team",
                src: to.a
            })], -1)
        })), io = {class: "text"}, co = {class: "buttonwrapper"};

        function so(e, t, n, a, r, i) {
            var c = Object(o["resolveComponent"])("Header"), s = Object(o["resolveComponent"])("ComplaintButton"),
                l = Object(o["resolveComponent"])("router-link"), u = Object(o["resolveComponent"])("Footer");
            return Object(o["openBlock"])(), Object(o["createElementBlock"])(o["Fragment"], null, [Object(o["createVNode"])(c, {
                HeaderIcon: "spa",
                HeaderText: "Wellbeing at Work"
            }), Object(o["createElementVNode"])("div", oo, ["en" === e.$i18n.locale ? (Object(o["openBlock"])(), Object(o["createElementBlock"])("span", {
                key: 0,
                class: "material-icons audio",
                onClick: t[0] || (t[0] = function () {
                    return i.readQuestionContent && i.readQuestionContent.apply(i, arguments)
                })
            }, "volume_up")) : Object(o["createCommentVNode"])("", !0), Object(o["createElementVNode"])("div", ao, [Object(o["createElementVNode"])("p", null, Object(o["toDisplayString"])(e.$t("welcome_survey")), 1)]), ro, Object(o["createElementVNode"])("div", io, [Object(o["createElementVNode"])("p", null, Object(o["toDisplayString"])(e.$t("explain_survey")), 1)]), Object(o["createElementVNode"])("div", co, [Object(o["createVNode"])(l, {to: "/question/1"}, {
                default: Object(o["withCtx"])((function () {
                    return [Object(o["createVNode"])(s, {id: "startbutton", text: "Start the Questionnaire!"})]
                })), _: 1
            })])]), Object(o["createVNode"])(u)], 64)
        }

        var lo = {
            name: "EntryPage", components: {Header: M, Footer: Ze, ComplaintButton: Kn}, data: function () {
                return {isReading: !1}
            }, methods: {
                readQuestionContent: function () {
                    var e = this.$i18n.t("welcome_survey").replace("!", ". ") + this.$i18n.t("explain_survey").replace("!", ". ");
                    console.log(this.$i18n.locale), bt(e)
                }
            }
        };
        n("ad46");
        const uo = c()(lo, [["render", so], ["__scopeId", "data-v-13b7e12a"]]);
        var mo = uo, bo = n("4e9b"), po = n("0d27"), fo = n("0251"), vo = Object(fo["createI18n"])({
                locale: localStorage.getItem("language") || "en",
                fallbackLocale: "en",
                globalInjection: !0,
                messages: {vi: bo, en: po}
            }), go = [{path: "/", name: "Landingpage", component: de}, {
                path: "/homepage",
                name: "Homepage",
                component: vt
            }, {path: "/question/information", name: "EntryPage", component: mo}, {
                path: "/question/:number",
                name: "Question",
                component: Ln
            }, {path: "/complaint", name: "Complaint", component: Zn}],
            jo = Object(u["a"])({history: Object(u["b"])("/"), routes: go});
        jo.beforeEach((function (e, t, n) {
            return vo.locale = localStorage.getItem("language") || "en", n()
        }));
        var Oo = jo, ho = n("1da1"), yo = (n("96cf"), n("bc3a")), No = n.n(yo), ko = "http://localhost:4000/api/",
            Io = function (e) {
                return "".concat(ko, "/").concat(e)
            }, Vo = function (e) {
                var t = {method: "get", url: Io(e), headers: {"Content-Type": "application/json"}};
                return No()(t)
            }, Eo = function (e, t) {
                var n = {method: "patch", url: Io(e), headers: {"Content-Type": "text/plain"}, data: t};
                return No()(n)
            }, qo = function (e, t) {
                var n = {method: "post", url: Io(e), headers: {"Content-Type": "application/json"}, data: t};
                return No()(n)
            }, wo = function (e) {
                var t = {method: "delete", url: Io(e)};
                return No()(t)
            }, Co = {get: Vo, patch: Eo, post: qo, doDelete: wo}, So = {
                state: {currentQuestion: {}, nextQuestionNumber: {}, previousQuestionNumber: {}},
                getters: {
                    allQuestions: function (e) {
                        return e.allQuestions
                    }, currentQuestion: function (e) {
                        return e.currentQuestion
                    }, nextQuestion: function (e) {
                        return e.nextQuestion
                    }, previousQuestion: function (e) {
                        return e.previousQuestion
                    }
                },
                actions: {
                    fetchQuestionById: function (e, t) {
                        return Object(ho["a"])(regeneratorRuntime.mark((function n() {
                            var o, a;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return o = e.commit, n.prev = 1, n.next = 4, Co.get("question/question_id=" + t);
                                    case 4:
                                        a = n.sent, o("UPDATE_CURRENT_QUESTION", a.data), n.next = 11;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n["catch"](1), console.error(n.t0);
                                    case 11:
                                    case"end":
                                        return n.stop()
                                }
                            }), n, null, [[1, 8]])
                        })))()
                    }
                },
                mutations: {
                    UPDATE_CURRENT_QUESTION: function (e, t) {
                        return e.currentQuestion = t
                    }
                }
            }, _o = Object(Pn["a"])({modules: {question: So}}), xo = _o;
        Object(o["createApp"])(l).use(Oo).use(xo).use(vo).mount("#app")
    }, "60b6": function (e, t, n) {
        "use strict";
        n("cc85")
    }, 6896: function (e, t, n) {
        "use strict";
        n("9dda")
    }, "6b93": function (e, t, n) {
        "use strict";
        n("9f07")
    }, 7955: function (e, t, n) {
    }, "7f47": function (e, t, n) {
    }, "887a": function (e, t, n) {
    }, 9290: function (e, t, n) {
    }, "96ab": function (e, t, n) {
    }, "9dda": function (e, t, n) {
    }, "9f07": function (e, t, n) {
    }, a073: function (e, t, n) {
        "use strict";
        n("a596")
    }, a0aa: function (e, t, n) {
    }, a596: function (e, t, n) {
    }, aa61: function (e, t, n) {
    }, ad46: function (e, t, n) {
        "use strict";
        n("32d4")
    }, b1dc: function (e, t, n) {
        "use strict";
        n("a0aa")
    }, b8eb: function (e, t, n) {
        e.exports = n.p + "img/TeamPicture.af0c7528.jpg"
    }, bee8: function (e, t, n) {
        "use strict";
        n("7955")
    }, c3e7: function (e, t, n) {
        e.exports = n.p + "img/image-removebg-preview.18b43a30.png"
    }, c7e8: function (e, t, n) {
        "use strict";
        n("ebbb")
    }, cc85: function (e, t, n) {
    }, ccee: function (e, t, n) {
        "use strict";
        n("96ab")
    }, d61a: function (e, t, n) {
        e.exports = n.p + "img/Logo_UMA_EN_Weiss.773ef678.png"
    }, d8cf: function (e, t, n) {
    }, daf0: function (e, t, n) {
    }, deda: function (e, t, n) {
        "use strict";
        n("887a")
    }, e830: function (e, t, n) {
        e.exports = n.p + "img/Woman.88e5641d.png"
    }, e88d: function (e, t, n) {
        "use strict";
        n("08e4")
    }, eaba: function (e, t, n) {
    }, eac8: function (e, t, n) {
        "use strict";
        n("354d")
    }, ebbb: function (e, t, n) {
    }, ed6a: function (e, t, n) {
        "use strict";
        n("daf0")
    }, f1d3: function (e, t, n) {
    }, f753: function (e, t, n) {
        "use strict";
        n("7f47")
    }
});
//# sourceMappingURL=app.e63af041.js.map