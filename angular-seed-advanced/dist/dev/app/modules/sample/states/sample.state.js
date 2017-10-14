"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleInitialState = {
    names: []
};
function getNames(state$) {
    return state$.select(function (state) { return state.names; });
}
exports.getNames = getNames;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9zdGF0ZXMvc2FtcGxlLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTWEsUUFBQSxrQkFBa0IsR0FBaUI7SUFDOUMsS0FBSyxFQUFpQixFQUFFO0NBQ3pCLENBQUM7QUFHRixrQkFBeUIsTUFBZ0M7SUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCw0QkFFQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9zYW1wbGUvc3RhdGVzL3NhbXBsZS5zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTYW1wbGVTdGF0ZSB7XG4gIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3Qgc2FtcGxlSW5pdGlhbFN0YXRlOiBJU2FtcGxlU3RhdGUgPSB7XG4gIG5hbWVzOiA8QXJyYXk8c3RyaW5nPj5bXVxufTtcblxuLy8gc2VsZWN0cyBzcGVjaWZpYyBzbGljZSBmcm9tIHNhbXBsZSBzdGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVzKHN0YXRlJDogT2JzZXJ2YWJsZTxJU2FtcGxlU3RhdGU+KSB7XG4gIHJldHVybiBzdGF0ZSQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm5hbWVzKTtcbn1cbiJdfQ==
