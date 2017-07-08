(function() {
    var Cjs = (function() {

        // ****************** Variables-Area ******************        
        var instance;
        var funcs = [];
        var errors = {
            functionRegistration: {
                functionName: {
                    invalidType: new Error("Cjs-Error => functionRegistrationError: used functionName should be string."),
                    notFollowStandars: new Error("Cjs-Error => functionRegistrationError: used functionName should follow Cjs standards.")
                },
                overloadings: {
                    invalidType: new Error("Cjs-Error => functionRegistrationError: overloadings parameter should be array of strings or empty array."),
                    number: new Error("Cjs-Error => functionRegistrationError: overloadings length shouldn't exceed 100."),
                    unexpectedValue: new Error("Cjs-Error => functionRegistrationError: unexpected value in overloadings parameter.")
                },
                returnType: {
                    invalidType: new Error("Cjs-Error => functionRegistrationError: type parameter should string."),
                    unexpectedValue: new Error("Cjs-Error => functionRegistrationError: unexpected value in type parameter.")
                },
                callback: {
                    invalidType: new Error("Cjs-Error => functionRegistrationError: callBack parameter should function type.")
                },
                functionDuplication: new Error("Cjs-Error => functionRegistrationError: duplicated function with the same name and parameters.")
            },
            functionCalling: {
                undefinedFunction: new Error("Cjs-Error => functionCallingError: no registered function with this name and these parameters")
            },
            runTime: {
                unExpectedReturnType: new Error("Cjs-Error => unExpectedReturnType: funtion return doesn't match the expected return type.")
            },
            general: {
                ambiguousUsage: new Error("Cjs-Error => ambiguousUsageError: functionRegistration and functionCalling syntex are only allowed in Cjs.Function().")
            }
        };
        // ****************** End-Variables-Area ******************

        // ****************** General-Purpose-Functions-Area ******************

        function haveSameValues(a, b) {
            var result = true;
            if (a.length === b.length) {
                var length = a.length;
                for (var i = 0; i < length; i++) {
                    if (a[i] !== b[i]) {
                        result = false;
                        break;
                    }
                }
            } else {
                result = false;
            }
            return result;
        }

        function isType(type) {
            var types = ["string", "number", "date", "boolean", "array", "object", "function", "regexp", "symbol", "error", "null", "undefined"];
            return types.includes(type);
        }

        function getType(value) {
            var toString = Object.prototype.toString.call(value);
            var type = toString.substring(toString.indexOf(' ') + 1, toString.length - 1).toLowerCase();
            return type;
        }
        // ****************** End-General-Purpose-Functions-Area ******************

        // ****************** Main-Functions-Area ******************

        function registerFunction(functionName, params, type, callback) {
            if (1 === 1) {
                funcs.push({
                    name: functionName,
                    overloadings: params,
                    type: type,
                    callback: callback
                });
            } else {
                throw errors.functionRegistration.functionDuplication;
            }
        }

        function getFunction(functionName, params) {
            var result;
            if (params === undefined) {
                params = [];
            }
            var types = fetchParamsTypes(params);
            var func = getFunctionByTypes(functionName, types);
            if (func === undefined) {
                throw errors.functionCalling.undefinedFunction;
            }
            result = excuteFunction(func, params);
            var resultType = getRetrunType(result);
            if (func.type === resultType) {
                if (resultType !== 'void') {
                    return result;
                }
            } else {
                throw errors.runTime.unExpectedReturnType;
            }
            return result;
        }

        function fetchParamsTypes(params) {
            var types = [];
            for (var index = 0; index < params.length; index++) {
                var type = getType(params[index]);
                types.push(type);
            }
            return types;
        }

        function getFunctionByTypes(functionName, types) {
            var func;
            for (var k = 0; k < funcs.length; k++) {
                var f = funcs[k];
                var isRequestedOverload = haveSameValues(f.overloadings, types);
                if (f.name === functionName && isRequestedOverload) {
                    func = f;
                    break;
                }
            }
            return func;
        }

        function excuteFunction(func, params) {
            var result = func.callback(
                params[0], params[1], params[2], params[3], params[4], params[5],
                params[6], params[7], params[8], params[9], params[10], params[11],
                params[12], params[13], params[14], params[15], params[16], params[17],
                params[18], params[19], params[20], params[21], params[22], params[23],
                params[24], params[25], params[26], params[27], params[28], params[29],
                params[30], params[31], params[32], params[33], params[33], params[34],
                params[35], params[36], params[37], params[38], params[39], params[40],
                params[41], params[42], params[43], params[44], params[45], params[46],
                params[47], params[48], params[49], params[50], params[51], params[52],
                params[53], params[54], params[55], params[56], params[57], params[58],
                params[59], params[60], params[61], params[62], params[63], params[64],
                params[65], params[66], params[67], params[68], params[69], params[70],
                params[71], params[72], params[73], params[74], params[75], params[76],
                params[77], params[78], params[79], params[80], params[81], params[82],
                params[83], params[84], params[85], params[86], params[87], params[88],
                params[89], params[90], params[91], params[92], params[93], params[93],
                params[94], params[95], params[96], params[97], params[98], params[99]
            );
            return result;
        }

        function getRetrunType(value) {
            var type = getType(value);
            if (type === 'undefined') {
                type = 'void';
            }
            return type;
        }
        // ****************** End-Main-Functions-Area ******************

        // ****************** Validation-Functions-Area ******************

        function validateFunctionName(functionName) {
            var validFunctionNamePattern = /^[$A-Z_][0-9A-Z_$]*$/i;
            if (functionName) {
                if (getType(functionName) === 'string') {
                    if (validFunctionNamePattern.test(functionName)) {
                        return true;
                    } else {
                        throw errors.functionRegistration.functionName.notFollowStandars;
                    }
                } else {
                    throw errors.functionRegistration.functionName.invalidType;
                }
            } else {
                throw errors.functionRegistration.functionName.notFollowStandars;
            }
        }

        function validateOverloadings(overloadings) {
            if (overloadings) {
                if (getType(overloadings) === 'array') {
                    if (overloadings.length <= 100) {
                        if (overloadings.length > 0) {
                            for (var i = 0; i < overloadings.length; i++) {
                                if (getType(overloadings[i]) !== 'string' && isType(overloadings[i])) {
                                    throw errors.functionRegistration.overloadings.unexpectedValue;
                                }
                            }
                            return true;
                        } else {
                            return true;
                        }
                    } else {
                        throw errors.functionRegistration.overloadings.number;
                    }
                } else {
                    throw errors.functionRegistration.overloadings.invalidType;
                }
            } else {
                throw errors.functionRegistration.overloadings.invalidType;
            }
        }

        function validateReturnType(type) {
            if (getType(type) === 'string') {
                if (type === 'void') {
                    return true;
                } else {
                    if (isType(type)) {
                        return true;
                    } else {
                        throw errors.functionRegistration.returnType.unexpectedValue;
                    }
                }
            } else {
                throw errors.functionRegistration.returnType.invalidType;
            }
        }

        function validateCallback(callback) {
            if (getType(callback) === 'function') {
                return true;
            } else {
                throw errors.functionRegistration.callback.invalidType;
            }
        }

        function validateFunctionRegistration(functionName, overloadings, type, callback) {
            return validateFunctionName(functionName) && validateOverloadings(overloadings) && validateReturnType(type) && validateCallback(callback)
        }
        // ****************** End-Functions-Validation-Area ******************

        function getInstance() {
            var obj = {
                Function: function(functionName, params, type, callback) {
                    if (arguments.length === 4) {
                        if (validateFunctionRegistration(functionName, params, type, callback)) {
                            registerFunction(functionName, params, type, callback);
                        }
                        return this;
                    } else if (arguments.length === 2 || arguments.length === 1) {
                        return getFunction(functionName, params);
                    } else {
                        throw errors.general.ambiguousUsage;
                    }
                },
                noConflict: function(newName) {
                    window[newName] = instance.init();
                }
            };
            return obj;
        }

        return {
            init: function() {
                if (instance === undefined) {
                    instance = getInstance();
                }
                return instance;
            }
        };
    })();
    window.cjsConfig = {
        reInit: function(newName) {
            var C = Cjs.init();
            if (window.C !== undefined && Object.is(window.C, C)) {
                delete window.C;
            }
            window[newName] = C;
        }
    };
    if (window.C === undefined) {
        window.C = Cjs.init();
    }
})();
