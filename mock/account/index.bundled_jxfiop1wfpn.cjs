var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/account/index.js
var account_exports = {};
__export(account_exports, {
  default: () => account_default
});
module.exports = __toCommonJS(account_exports);
var import_vite_plugin_mock = require("vite-plugin-mock");
var TIME_OUT = 500;
var account_default = [
  /**
   * @description: 登录接口
   * @return {*}
   */
  {
    type: "post",
    url: "/api/account/login",
    timeout: TIME_OUT,
    response: ({ query, body }) => {
      return {
        code: 200,
        msg: "\u767B\u5F55\u6210\u529F",
        data: {
          token: "lg001",
          nickName: "lg",
          company: "\u67A3\u9633\u5927\u516C\u53F8",
          menuList: []
        },
        success: true,
        timestamp: Date.now()
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hY2NvdW50L2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkc6XFxcXG1lXFxcXGxnLWdyb3VwMjAyMzA1MTNcXFxcdml0ZS1yZWFjdFxcXFxtb2NrXFxcXGFjY291bnRcXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRzpcXFxcbWVcXFxcbGctZ3JvdXAyMDIzMDUxM1xcXFx2aXRlLXJlYWN0XFxcXG1vY2tcXFxcYWNjb3VudFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRzovbWUvbGctZ3JvdXAyMDIzMDUxMy92aXRlLXJlYWN0L21vY2svYWNjb3VudC9pbmRleC5qc1wiOy8qXHJcbiAqIEBBdXRob3I6IGxnXHJcbiAqIEBEYXRlOiAyMDIzLTA5LTA2IDE2OjM0OjQ3XHJcbiAqIEBMYXN0RWRpdG9yczogbGdcclxuICogQExhc3RFZGl0VGltZTogMjAyNC0wMS0wNCAxMDoxMzowN1xyXG4gKiBARGVzY3JpcHRpb246XHJcbiAqIEBGaWxlUGF0aDogXFx2aXRlLXJlYWN0XFxtb2NrXFxhY2NvdW50XFxpbmRleC5qc1xyXG4gKi9cclxuaW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xyXG5cclxuY29uc3QgVElNRV9PVVQgPSA1MDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uOiBcdTc2N0JcdTVGNTVcdTYzQTVcdTUzRTNcclxuICAgKiBAcmV0dXJuIHsqfVxyXG4gICAqL1xyXG4gIHtcclxuICAgIHR5cGU6ICdwb3N0JyxcclxuICAgIHVybDogJy9hcGkvYWNjb3VudC9sb2dpbicsXHJcbiAgICB0aW1lb3V0OiBUSU1FX09VVCxcclxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSwgYm9keSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1zZzogJ1x1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdG9rZW46ICdsZzAwMScsXHJcbiAgICAgICAgICBuaWNrTmFtZTonbGcnLFxyXG4gICAgICAgICAgY29tcGFueTpcIlx1NjdBM1x1OTYzM1x1NTkyN1x1NTE2Q1x1NTNGOFwiLFxyXG4gICAgICAgICAgbWVudUxpc3Q6W10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSw4QkFBMkI7QUFFM0IsSUFBTSxXQUFXO0FBRWpCLElBQU8sa0JBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2I7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFVBQVUsQ0FBQyxFQUFFLE9BQU8sS0FBSyxNQUFNO0FBQzdCLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxVQUNQLFVBQVM7QUFBQSxVQUNULFNBQVE7QUFBQSxVQUNSLFVBQVMsQ0FBQztBQUFBLFFBQ1o7QUFBQSxRQUNBLFNBQVM7QUFBQSxRQUNULFdBQVcsS0FBSyxJQUFJO0FBQUEsTUFDdEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
