(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 8026:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "modal_container__hWwgf",
	"table": "modal_table__5JqxT",
	"containerItem": "modal_containerItem__SpYRI",
	"description": "modal_description__D7xMk",
	"buttonOrder": "modal_buttonOrder__3ILz7"
};


/***/ }),

/***/ 9886:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "dashboard_container__rXuWG",
	"containerHeader": "dashboard_containerHeader__VSK6z",
	"listOrders": "dashboard_listOrders__WMAg_",
	"listItem": "dashboard_listItem__5e_lT",
	"tag": "dashboard_tag__l96v3",
	"emptyList": "dashboard_emptyList__J5erk"
};


/***/ }),

/***/ 2687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ModalOrder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8026);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);




function ModalOrder({ isOpen , onRequestClose , order , handleFinishOrder  }) {
    const customStyle = {
        content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "auto",
            padding: "30px",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1D1D2E"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        style: customStyle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            type: "button",
            onClick: onRequestClose,
            className: "react-modal-close",
            style: {
                background: "transparent",
                border: 0
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {
                    size: 45,
                    color: "#f34738"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Detalhes do pedido"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().table),
                            children: [
                                "Mesa: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: order[0].order.table
                                })
                            ]
                        }),
                        order.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().containerItem),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            item.amount,
                                            " -",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: item.product.name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().description),
                                        children: item.product.description
                                    })
                                ]
                            }, item.id);
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttonOrder),
                            onClick: ()=>handleFinishOrder(order[0].order_id),
                            children: "Concluir pedido"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_canSSRAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4130);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9886);
/* harmony import */ var _dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5869);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8469);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ModalOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2687);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_4__, _services_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_4__, _services_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Dashboard({ orders  }) {
    const { 0: orderList , 1: setOrderList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(orders || []);
    const { 0: modalItem , 1: setModalItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: modalVisible , 1: setModaVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function handleModal() {
        setModaVisible((prev)=>!prev);
    }
    async function handleFinishOrder(id) {
        const apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_6__/* .setupApiClient */ .$)();
        await apiClient.put("/order/finish", {
            order_id: id
        });
        const response = await apiClient.get("/orders");
        setOrderList(response.data);
        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Pedido finalizado com sucesso!");
        setModaVisible(false);
    }
    async function handleDetailsTable(id) {
        const setupClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_6__/* .setupApiClient */ .$)();
        const response = await setupClient.get("/order/detail", {
            params: {
                order_id: id
            }
        });
        setModalItem(response.data);
        console.log(response.data);
        setModaVisible(true);
    }
    async function handleRefreshOrders() {
        const apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_6__/* .setupApiClient */ .$)();
        const response = await apiClient.get("/orders");
        setOrderList((await response).data);
    }
    react_modal__WEBPACK_IMPORTED_MODULE_7___default().setAppElement("#__next");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Painel - Pizzaria"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: (_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default().containerHeader),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "\xdaltimos pedidos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiRefreshCcw, {
                                            onClick: handleRefreshOrders,
                                            size: 25,
                                            color: "#3fffa3"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                className: (_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default().listOrders),
                                children: [
                                    orderList.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default().emptyList),
                                        children: "Nenhum pedido aberto foi encontrado!"
                                    }),
                                    orderList.map((item)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                            className: (_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default().listItem),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>handleDetailsTable(item.id),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_dashboard_module_scss__WEBPACK_IMPORTED_MODULE_10___default().tag)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Mesa: ",
                                                            item.table
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, item.id);
                                    })
                                ]
                            })
                        ]
                    }),
                    modalVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalOrder__WEBPACK_IMPORTED_MODULE_8__/* .ModalOrder */ .p, {
                        isOpen: modalVisible,
                        onRequestClose: handleModal,
                        order: modalItem,
                        handleFinishOrder: handleFinishOrder
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = (0,_utils_canSSRAuth__WEBPACK_IMPORTED_MODULE_2__/* .canSSRAuth */ .j)(async (ctx)=>{
    const apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_6__/* .setupApiClient */ .$)(ctx);
    const response = await apiClient.get("/orders");
    return {
        props: {
            orders: response.data
        }
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 9931:
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,61,637], () => (__webpack_exec__(1676)));
module.exports = __webpack_exports__;

})();