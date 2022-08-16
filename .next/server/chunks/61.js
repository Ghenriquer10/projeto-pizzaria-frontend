"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 1463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "Vo": () => (/* binding */ AuthContext),
/* harmony export */   "w7": () => (/* binding */ signOut)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6626);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apiClient__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
([_services_apiClient__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function signOut() {
    try {
        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, "@nextauth.token");
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    } catch  {
        console.log("Erro ao deslogar");
    }
}
function AuthProvider({ children  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const isAuthenticated = !!user;
    // Atrvés do useEffect é persistido os dados do usuário, e caso o usuário tenha manipulado seu cookies, o mesmo é deslogado
    // da aplicação
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //Pegando cookie do usuário
        const { "@nextauth.token": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();
        if (token) {
            _services_apiClient__WEBPACK_IMPORTED_MODULE_4__/* .api.get */ .h.get("/userinfo").then((response)=>{
                const { id , name , email  } = response.data;
                setUser({
                    id,
                    name,
                    email
                });
            }).catch(()=>{
                signOut();
            });
        }
    }, []);
    async function signIn({ email , password  }) {
        try {
            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__/* .api.post */ .h.post("/session", {
                email,
                password
            });
            const { name , id , token  } = response.data;
            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, "@nextauth.token", token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            });
            setUser({
                id,
                name,
                email
            });
            // Enviando token a todas futuras requisições
            _services_apiClient__WEBPACK_IMPORTED_MODULE_4__/* .api.defaults.headers.Authorization */ .h.defaults.headers.Authorization = `Bearer ${token}`;
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("Logado com sucesso!");
            // Redirecionar usuário para os últimos pedidos
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push("dashboard");
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Erro ao acessar!");
            console.log("Erro ao acessar", err);
        }
    }
    async function signUp({ name , email , password  }) {
        try {
            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__/* .api.post */ .h.post("/users", {
                name,
                email,
                password
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("Cadastrado com sucesso!");
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Erro ao cadastrar!");
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            signIn,
            signOut,
            signUp
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ setupApiClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5718);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);
_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function setupApiClient(context = undefined) {
    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(context);
    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: "https://projeto-pizzaria-backend.herokuapp.com",
        headers: {
            Authorization: `Bearer ${cookies["@nextauth.token"]}`
        }
    });
    api.interceptors.response.use((response)=>{
        return response;
    }, (error)=>{
        if (error.response.status === 401) {
            // Qualquer error 401 do tipo não autorizado deslogará o usuário.
            if (true) {
                // Chama função que desloga usuário
                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .signOut */ .w7)();
            } else {}
        }
        return Promise.reject(error);
    });
    return api;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8469);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .setupApiClient */ .$)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AuthTokenError)
/* harmony export */ });
class AuthTokenError extends Error {
    constructor(){
        super("Error with authentication token!");
    }
}


/***/ })

};
;