!function(){var n=function(){function n(n,r){var t=!0;if(n.length===r.length){for(var e=n.length,o=0;e>o;o++)if(n[o]!==r[o]){t=!1;break}}else t=!1;return t}function r(n){var r=["string","number","date","boolean","array","object","function","regexp","symbol","error","null","undefined"];return r.includes(n)}function t(n){var r=Object.prototype.toString.call(n),t=r.substring(r.indexOf(" ")+1,r.length-1).toLowerCase();return t}function e(n,r,t,e){h.push({name:n,overloadings:r,type:t,callback:e})}function o(n,r){var t;void 0===r&&(r=[]);var e=i(r),o=a(n,e);if(void 0===o)throw E.functionCalling.undefinedFunction;t=u(o,r);var c=s(t);if(o.type!==c)throw E.runTime.unExpectedReturnType;return"void"!==c?t:t}function i(n){for(var r=[],e=0;e<n.length;e++){var o=t(n[e]);r.push(o)}return r}function a(r,t){for(var e,o=0;o<h.length;o++){var i=h[o],a=n(i.overloadings,t);if(i.name===r&&a){e=i;break}}return e}function u(n,r){var t=n.callback(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17],r[18],r[19],r[20],r[21],r[22],r[23],r[24],r[25],r[26],r[27],r[28],r[29],r[30],r[31],r[32],r[33],r[33],r[34],r[35],r[36],r[37],r[38],r[39],r[40],r[41],r[42],r[43],r[44],r[45],r[46],r[47],r[48],r[49],r[50],r[51],r[52],r[53],r[54],r[55],r[56],r[57],r[58],r[59],r[60],r[61],r[62],r[63],r[64],r[65],r[66],r[67],r[68],r[69],r[70],r[71],r[72],r[73],r[74],r[75],r[76],r[77],r[78],r[79],r[80],r[81],r[82],r[83],r[84],r[85],r[86],r[87],r[88],r[89],r[90],r[91],r[92],r[93],r[93],r[94],r[95],r[96],r[97],r[98],r[99]);return t}function s(n){var r=t(n);return"undefined"===r&&(r="void"),r}function c(n){var r=/^[$A-Z_][0-9A-Z_$]*$/i;if(n){if("string"===t(n)){if(r.test(n))return!0;throw E.functionRegistration.functionName.notFollowStandars}throw E.functionRegistration.functionName.invalidType}throw E.functionRegistration.functionName.notFollowStandars}function f(n){if(n){if("array"===t(n)){if(n.length<=100){if(n.length>0){for(var e=0;e<n.length;e++)if("string"!==t(n[e])&&r(n[e]))throw E.functionRegistration.overloadings.unexpectedValue;return!0}return!0}throw E.functionRegistration.overloadings.number}throw E.functionRegistration.overloadings.invalidType}throw E.functionRegistration.overloadings.invalidType}function l(n){if("string"===t(n)){if("void"===n)return!0;if(r(n))return!0;throw E.functionRegistration.returnType.unexpectedValue}throw E.functionRegistration.returnType.invalidType}function d(n){if("function"===t(n))return!0;throw E.functionRegistration.callback.invalidType}function g(n,r,t,e){return c(n)&&f(r)&&l(t)&&d(e)}function p(){var n={Function:function(n,r,t,i){if(4===arguments.length)return g(n,r,t,i)&&e(n,r,t,i),this;if(2===arguments.length||1===arguments.length)return o(n,r);throw E.general.ambiguousUsage}};return n}var v,h=[],E={functionRegistration:{functionName:{invalidType:new Error("Cjs-Error => functionRegistrationError: used functionName should be string."),notFollowStandars:new Error("Cjs-Error => functionRegistrationError: used functionName should follow Cjs standards.")},overloadings:{invalidType:new Error("Cjs-Error => functionRegistrationError: overloadings parameter should be array of strings or empty array."),number:new Error("Cjs-Error => functionRegistrationError: overloadings length shouldn't exceed 100."),unexpectedValue:new Error("Cjs-Error => functionRegistrationError: unexpected value in overloadings parameter.")},returnType:{invalidType:new Error("Cjs-Error => functionRegistrationError: type parameter should string."),unexpectedValue:new Error("Cjs-Error => functionRegistrationError: unexpected value in type parameter.")},callback:{invalidType:new Error("Cjs-Error => functionRegistrationError: callBack parameter should function type.")},functionDuplication:new Error("Cjs-Error => functionRegistrationError: duplicated function with the same name and parameters.")},functionCalling:{undefinedFunction:new Error("Cjs-Error => functionCallingError: no registered function with this name and these parameters")},runTime:{unExpectedReturnType:new Error("Cjs-Error => unExpectedReturnType: funtion return doesn't match the expected return type.")},general:{ambiguousUsage:new Error("Cjs-Error => ambiguousUsageError: functionRegistration and functionCalling syntex are only allowed in Cjs.Function().")}};return{init:function(){return void 0===v&&(v=p()),v}}}();void 0===window.C&&(window.C=n.init())}();