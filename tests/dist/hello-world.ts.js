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

// tests/hello-world.ts
var hello_world_exports = {};
__export(hello_world_exports, {
  config: () => config,
  scenarios: () => scenarios
});
module.exports = __toCommonJS(hello_world_exports);
var config = {
  target: "https://www.artillery.io",
  engines: {
    playwright: {}
  }
};
var scenarios = [{
  engine: "playwright",
  testFunction: helloWorld
}];
async function helloWorld(page) {
  await page.goto("https://www.artillery.io/");
  await page.click("text=Docs");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  scenarios
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaGVsbG8td29ybGQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBhZ2UgfSBmcm9tICdAcGxheXdyaWdodC90ZXN0JztcclxuIFxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIHRhcmdldDogJ2h0dHBzOi8vd3d3LmFydGlsbGVyeS5pbycsXHJcbiAgZW5naW5lczoge1xyXG4gICAgcGxheXdyaWdodDoge31cclxuICB9XHJcbn07XHJcbiBcclxuZXhwb3J0IGNvbnN0IHNjZW5hcmlvcyA9IFt7XHJcbiAgZW5naW5lOiAncGxheXdyaWdodCcsXHJcbiAgdGVzdEZ1bmN0aW9uOiBoZWxsb1dvcmxkXHJcbn1dO1xyXG4gXHJcbmFzeW5jIGZ1bmN0aW9uIGhlbGxvV29ybGQocGFnZTogUGFnZSkge1xyXG4gIGF3YWl0IHBhZ2UuZ290bygnaHR0cHM6Ly93d3cuYXJ0aWxsZXJ5LmlvLycpO1xyXG4gIGF3YWl0IHBhZ2UuY2xpY2soJ3RleHQ9RG9jcycpO1xyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxJQUNQLFlBQVksQ0FBQztBQUFBLEVBQ2Y7QUFDRjtBQUVPLElBQU0sWUFBWSxDQUFDO0FBQUEsRUFDeEIsUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUNoQixDQUFDO0FBRUQsZUFBZSxXQUFXLE1BQVk7QUFDcEMsUUFBTSxLQUFLLEtBQUssMkJBQTJCO0FBQzNDLFFBQU0sS0FBSyxNQUFNLFdBQVc7QUFDOUI7IiwKICAibmFtZXMiOiBbXQp9Cg==
