exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 5315:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "header_headerContainer__sb69X",
	"headerContent": "header_headerContent___WQLC",
	"navContent": "header_navContent__A4gKa"
};


/***/ }),

/***/ 5869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5315);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);
_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Header() {
    const { signOut  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headerContainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headerContent),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/dashboard",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "logo.svg",
                        width: 190,
                        height: 60
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navContent),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "Pedidos"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/category",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "Categoria"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/product",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "Novo produto"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: signOut,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiLogOut, {
                                size: 24
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ canSSRAuth)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_error_AuthTokenError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5718);


// Função onde só usuários deslogados podem tetr acesso
function canSSRAuth(fn) {
    return async (ctx)=>{
        const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)(ctx);
        const token = cookies["@nextauth.token"];
        if (!token) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false
                }
            };
        }
        try {
            return await fn(ctx);
        } catch (err) {
            if (err instanceof _services_error_AuthTokenError__WEBPACK_IMPORTED_MODULE_1__/* .AuthTokenError */ .I) {
                (0,nookies__WEBPACK_IMPORTED_MODULE_0__.destroyCookie)(ctx, "@nextauth.token");
                return {
                    redirect: {
                        destination: "/",
                        permanent: false
                    }
                };
            }
        }
    };
}


/***/ })

};
;