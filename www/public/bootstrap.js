/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../pkg/snake_game.js":
/*!****************************!*\
  !*** ../pkg/snake_game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Direction: () => (/* binding */ Direction),\n/* harmony export */   GameStatus: () => (/* binding */ GameStatus),\n/* harmony export */   World: () => (/* binding */ World),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initSync: () => (/* binding */ initSync)\n/* harmony export */ });\n/* harmony import */ var _snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.ts */ \"../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.ts\");\n\n\nlet wasm;\n\nconst cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );\n\nif (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nconst Direction = Object.freeze({ Up:0,\"0\":\"Up\",Right:1,\"1\":\"Right\",Down:2,\"2\":\"Down\",Left:3,\"3\":\"Left\", });\n/**\n*/\nconst GameStatus = Object.freeze({ Won:0,\"0\":\"Won\",Lost:1,\"1\":\"Lost\",Played:2,\"2\":\"Played\", });\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(World.prototype);\n        obj.__wbg_ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get width() {\n        const ret = wasm.__wbg_get_world_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set width(arg0) {\n        wasm.__wbg_set_world_width(this.__wbg_ptr, arg0);\n    }\n    /**\n    * @param {number} width\n    * @param {number} snake_idx\n    * @returns {World}\n    */\n    static new(width, snake_idx) {\n        const ret = wasm.world_new(width, snake_idx);\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.__wbg_get_world_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    points() {\n        const ret = wasm.world_points(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    reward_cell() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_reward_cell(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    snake_head_idx() {\n        const ret = wasm.world_snake_head_idx(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    */\n    start_game() {\n        wasm.world_start_game(this.__wbg_ptr);\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    game_status() {\n        const ret = wasm.world_game_status(this.__wbg_ptr);\n        return ret === 3 ? undefined : ret;\n    }\n    /**\n    * @returns {string}\n    */\n    game_status_text() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_game_status_text(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            deferred1_0 = r0;\n            deferred1_1 = r1;\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n    /**\n    * @param {number} direction\n    */\n    change_snake_dir(direction) {\n        wasm.world_change_snake_dir(this.__wbg_ptr, direction);\n    }\n    /**\n    * @returns {number}\n    */\n    snake_cells() {\n        const ret = wasm.world_snake_cells(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_lenght() {\n        const ret = wasm.world_snake_lenght(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    */\n    step() {\n        wasm.world_step(this.__wbg_ptr);\n    }\n}\n\nasync function __wbg_load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction __wbg_get_imports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_rnd_4723b29941fecc9d = function(arg0) {\n        const ret = (0,_snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_ts__WEBPACK_IMPORTED_MODULE_0__.rnd)(arg0 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction __wbg_init_memory(imports, maybe_memory) {\n\n}\n\nfunction __wbg_finalize_init(instance, module) {\n    wasm = instance.exports;\n    __wbg_init.__wbindgen_wasm_module = module;\n    cachedInt32Memory0 = null;\n    cachedUint8Memory0 = null;\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    if (wasm !== undefined) return wasm;\n\n    const imports = __wbg_get_imports();\n\n    __wbg_init_memory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\nasync function __wbg_init(input) {\n    if (wasm !== undefined) return wasm;\n\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_game_bg.wasm */ \"../pkg/snake_game_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = __wbg_get_imports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    __wbg_init_memory(imports);\n\n    const { instance, module } = await __wbg_load(await input, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);\n\n\n//# sourceURL=webpack://www/../pkg/snake_game.js?");

/***/ }),

/***/ "../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.ts":
/*!********************************************************************!*\
  !*** ../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rnd = void 0;\nfunction rnd(max) {\n    return Math.floor(Math.random() * max);\n}\nexports.rnd = rnd;\n\n\n//# sourceURL=webpack://www/../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.ts?");

/***/ }),

/***/ "./bootstrap.ts":
/*!**********************!*\
  !*** ./bootstrap.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nPromise.resolve().then(() => __importStar(__webpack_require__(/*! ./index */ \"./index.ts\"))).catch(e => console.error(\"error import index.js : \", e));\n\n\n//# sourceURL=webpack://www/./bootstrap.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst snake_game_1 = __importStar(__webpack_require__(/*! snake_game */ \"../pkg/snake_game.js\"));\nconst rnd_1 = __webpack_require__(/*! ./utils/rnd */ \"./utils/rnd.ts\");\n(0, snake_game_1.default)().then((wasm) => {\n    const CELL_SIZE = 40;\n    const WORLD_WIDTH = 7;\n    const snakeSpawnIdx = (0, rnd_1.rnd)(WORLD_WIDTH * WORLD_WIDTH);\n    const world = snake_game_1.World.new(WORLD_WIDTH, snakeSpawnIdx);\n    const worldWidth = world.width();\n    const points = document.getElementById(\"points\");\n    const gameStatus = document.getElementById(\"game-status\");\n    const gameControlBtn = document.getElementById(\"game-control-btn\");\n    const canvas = document.getElementById(\"snake-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    canvas.height = worldWidth * CELL_SIZE;\n    canvas.width = worldWidth * CELL_SIZE;\n    gameControlBtn === null || gameControlBtn === void 0 ? void 0 : gameControlBtn.addEventListener(\"click\", (_) => {\n        const gameStatus = world.game_status();\n        if (gameStatus === undefined) {\n            gameControlBtn.textContent = \"Playing...\";\n            world.start_game();\n            play();\n        }\n        else {\n            location.reload();\n        }\n    });\n    document.addEventListener(\"keydown\", (e) => {\n        switch (e.code) {\n            case \"Space\":\n                gameControlBtn === null || gameControlBtn === void 0 ? void 0 : gameControlBtn.click();\n                break;\n            case \"ArrowUp\":\n                world.change_snake_dir(snake_game_1.Direction.Up);\n                break;\n            case \"ArrowRight\":\n                world.change_snake_dir(snake_game_1.Direction.Right);\n                break;\n            case \"ArrowDown\":\n                world.change_snake_dir(snake_game_1.Direction.Down);\n                break;\n            case \"ArrowLeft\":\n                world.change_snake_dir(snake_game_1.Direction.Left);\n                break;\n        }\n    });\n    function drawWorld() {\n        if (!ctx)\n            return;\n        ctx.beginPath();\n        ctx.strokeStyle = \"#aaa\";\n        for (let x = 0; x < worldWidth + 1; x++) {\n            ctx.moveTo(CELL_SIZE * x, 0);\n            ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE);\n        }\n        for (let y = 0; y < worldWidth + 1; y++) {\n            ctx.moveTo(0, CELL_SIZE * y);\n            ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);\n        }\n        ctx.stroke();\n    }\n    function drawGameStatus() {\n        if (!gameStatus || !points || !gameControlBtn) {\n            return;\n        }\n        gameStatus.textContent = world.game_status_text();\n        points.textContent = world.points().toString();\n    }\n    function drawReward() {\n        const idx = world.reward_cell();\n        if (!idx || !ctx) {\n            return;\n        }\n        const col = idx % worldWidth;\n        const row = Math.floor(idx / worldWidth);\n        ctx.beginPath();\n        ctx.fillStyle = \"#FF0000\";\n        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        ctx.stroke();\n    }\n    function drawSnake() {\n        if (!ctx)\n            return;\n        const snakeCells = new Uint32Array(wasm.memory.buffer, world.snake_cells(), world.snake_lenght());\n        snakeCells\n            .filter((cellIdx, i) => !(i > 0 && cellIdx === snakeCells[0]))\n            .forEach((cellIdx, i) => {\n            const col = cellIdx % worldWidth;\n            const row = Math.floor(cellIdx / worldWidth);\n            ctx.fillStyle = i === 0 ? \"#7878bd\" : \"#6699ff\";\n            ctx.beginPath();\n            ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        });\n        // const snakeIdx = world.snake_head_idx()\n        ctx.stroke();\n    }\n    function paint() {\n        drawWorld();\n        drawSnake();\n        drawReward();\n        drawGameStatus();\n    }\n    function play() {\n        if (!gameControlBtn) {\n            return;\n        }\n        const status = world.game_status();\n        if (status === snake_game_1.GameStatus.Won || status === snake_game_1.GameStatus.Lost) {\n            gameControlBtn.textContent = \"Replay\";\n            return;\n        }\n        const fps = 3;\n        setTimeout(() => {\n            ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);\n            world.step();\n            paint();\n            requestAnimationFrame(play);\n        }, 1000 / fps);\n    }\n    paint();\n});\n\n\n//# sourceURL=webpack://www/./index.ts?");

/***/ }),

/***/ "./utils/rnd.ts":
/*!**********************!*\
  !*** ./utils/rnd.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rnd = void 0;\nfunction rnd(max) {\n    return Math.floor(Math.random() * max);\n}\nexports.rnd = rnd;\n\n\n//# sourceURL=webpack://www/./utils/rnd.ts?");

/***/ }),

/***/ "../pkg/snake_game_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/snake_game_bg.wasm ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c749e5bc5f15a5406e6.wasm\";\n\n//# sourceURL=webpack://www/../pkg/snake_game_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./bootstrap.ts");
/******/ 	
/******/ })()
;