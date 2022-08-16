(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 4402:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product_container__7nDNF",
	"form": "product_form__SGnBM",
	"button": "product_button__jePFf",
	"labelAvatar": "product_labelAvatar__z_Z8J",
	"preview": "product_preview__TBUrI"
};


/***/ }),

/***/ 3939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5869);
/* harmony import */ var _utils_canSSRAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4130);
/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4402);
/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_product_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8469);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _services_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _services_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Product({ categoryList  }) {
    console.log(categoryList);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Tratando o envio de imagens
    const { 0: avatarUrl , 1: setAvatarUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: imageAvatar , 1: setImageAvatar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Tratando a seleção de uma categoria
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(categoryList || []);
    const { 0: categorySelected , 1: setCategorySelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    function handleFile(e) {
        if (!e.target.files) {
            return;
        }
        const image = e.target.files[0];
        if (!image) {
            return;
        }
        if (image.type === "image/jpeg" || image.type === "image/png") {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        }
    }
    function handleCategorySelected(event) {
        //console.log('categoria selecionada', categories[event.target.value])
        setCategorySelected(event.target.value);
    }
    async function handleProduct(event) {
        event.preventDefault();
        try {
            const data = new FormData();
            if (name === "" || price === "" || description === "" || imageAvatar === null) {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.warning("Preencha todos os campos!");
                return;
            }
            data.append("name", name);
            data.append("price", price);
            data.append("description", description);
            data.append("file", imageAvatar);
            data.append("category_id", categories[categorySelected].id);
            const apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_6__/* .setupApiClient */ .$)();
            await apiClient.post("/product", data);
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success("Produto cadastrado com sucesso!");
        } catch (err) {
            console.log(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Erro ao cadastrar produto!");
        }
        setName("");
        setPrice("");
        setDescription("");
        setImageAvatar(null);
        setAvatarUrl("");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Novo produto - Pizzaria"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Cadastrar produto"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleProduct,
                                className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelAvatar),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiUpload, {
                                                    size: 25,
                                                    color: "#fff"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                accept: "image/png, image/jpeg",
                                                onChange: handleFile
                                            }),
                                            avatarUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_8___default().preview),
                                                src: avatarUrl,
                                                alt: "Foto do produto",
                                                width: 250,
                                                height: 250
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        value: categorySelected,
                                        onChange: handleCategorySelected,
                                        children: categories.map((item, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: index,
                                                children: item.name
                                            }, item.id);
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        placeholder: "Nome do item",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        placeholder: "Valor",
                                        value: price,
                                        onChange: (e)=>setPrice(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        placeholder: "Descri\xe7\xe3o",
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),
                                        type: "submit",
                                        children: "Cadastrar"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = (0,_utils_canSSRAuth__WEBPACK_IMPORTED_MODULE_4__/* .canSSRAuth */ .j)(async (ctx)=>{
    const apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_6__/* .setupApiClient */ .$)(ctx);
    const response = await apiClient.get("/category");
    return {
        props: {
            categoryList: response.data
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,61,637], () => (__webpack_exec__(3939)));
module.exports = __webpack_exports__;

})();