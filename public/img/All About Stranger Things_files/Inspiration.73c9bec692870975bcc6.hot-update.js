webpackHotUpdate("Inspiration",{

/***/ "./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Inspiration.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Inspiration.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Nav_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav.vue */ \"./src/components/Nav.vue\");\n/* harmony import */ var vuetify_src_util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/src/util/console */ \"./node_modules/vuetify/src/util/console.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = ({\n        data() {\n            return {\n                // to hold the data responses\n                snippets: []\n                // loading:true\n            };\n        },\n    created() {\n          // logic for get the right data int he correct language\n        if (localStorage.getItem('language') === 'pigLatin') {\n            axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('../../../data/la_PG.json')\n            .then((response) => {\n                let snippets = response.data['snippets'];\n            });\n        } else {\n            axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('../../../data/en_US.json')\n            .then((response) => {\n                let snippets = response.data['snippets'];\n            });\n        }\n    },\n    components: {\n        language: _components_Nav_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    },\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy92aWV3cy9JbnNwaXJhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0luc3BpcmF0aW9uLnZ1ZT9mM2FhIl0sInNvdXJjZXNDb250ZW50IjpbIiA8dGVtcGxhdGU+XG4gIDx2LWNvbnRhaW5lciBjbGFzcz1cImluc3BpcmF0aW9uXCI+XG4gICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgPHYtZmxleCBtZDcgb2Zmc2V0LW1kMz5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICA8di1saXN0XG4gICAgICAgICAgdi1mb3I9XCIoc25pcHBldCwgaW5kZXgpIGluIHNuaXBwZXRzXCIgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAge3tzbmlwcGV0fX1cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiAgICBpbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYudnVlJztcbiAgICBpbXBvcnQgeyBjb25zb2xlSW5mbyB9IGZyb20gJ3Z1ZXRpZnkvc3JjL3V0aWwvY29uc29sZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vIHRvIGhvbGQgdGhlIGRhdGEgcmVzcG9uc2VzXG4gICAgICAgICAgICAgICAgc25pcHBldHM6IFtdXG4gICAgICAgICAgICAgICAgLy8gbG9hZGluZzp0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgLy8gbG9naWMgZm9yIGdldCB0aGUgcmlnaHQgZGF0YSBpbnQgaGUgY29ycmVjdCBsYW5ndWFnZVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykgPT09ICdwaWdMYXRpbicpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnLi4vLi4vLi4vZGF0YS9sYV9QRy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbmlwcGV0cyA9IHJlc3BvbnNlLmRhdGFbJ3NuaXBwZXRzJ107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnLi4vLi4vLi4vZGF0YS9lbl9VUy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbmlwcGV0cyA9IHJlc3BvbnNlLmRhdGFbJ3NuaXBwZXRzJ107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBsYW5ndWFnZSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Inspiration.vue?vue&type=script&lang=js&\n");

/***/ })

})