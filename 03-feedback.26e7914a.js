/* eslint-disable no-undefined,no-param-reassign,no-shadow *//**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */const e=document.querySelector(".feedback-form");e.addEventListener("input",function(e){e.preventDefault();let{elements:{email:t,message:n}}=e.currentTarget;i({email:t.value,message:n.value})}),e.addEventListener("submit",l);const t=e.lastElementChild;t.addEventListener("submit",l);const n=JSON.parse(localStorage.getItem("feedback-form-state"))??"",o=e.querySelector('[name="email"]'),a=e.querySelector('[name="message"]');o.value=n.email??"",a.value=n.message??"";const i=function(e,t,n){var o,a=n||{},i=a.noTrailing,l=void 0!==i&&i,r=a.noLeading,s=void 0!==r&&r,c=a.debounceMode,u=void 0===c?void 0:c,m=!1,d=0;function v(){o&&clearTimeout(o)}// Function to cancel next exec
/*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */function f(){for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];var r=this,c=Date.now()-d;// Execute `callback` and update the `lastExec` timestamp.
function f(){d=Date.now(),t.apply(r,a)}/*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */function g(){o=void 0}m||(s||!u||o||/*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */f(),v(),void 0===u&&c>e?s?(/*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */d=Date.now(),l||(o=setTimeout(u?g:f,e))):/*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */f():!0!==l&&/*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */(o=setTimeout(u?g:f,void 0===u?e-c:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly;v(),m=!(void 0!==t&&t)},f}(500,e=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))},{noLeading:!1,noTrailing:!1});function l(t){t.preventDefault(),console.log("email:",o.value),console.log("message:",a.value),e.reset(),localStorage.removeItem("feedback-form-state")}//# sourceMappingURL=03-feedback.26e7914a.js.map

//# sourceMappingURL=03-feedback.26e7914a.js.map
