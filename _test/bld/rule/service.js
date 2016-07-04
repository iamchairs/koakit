"use strict";
const error_1 = require('../error');
const response_1 = require('../route/response');
const service_1 = require('../injector/service');
class IRuleHandler {
}
exports.IRuleHandler = IRuleHandler;
class RuleService {
    static registerRuleHandler(handler) {
        let namedHandler = this.getHandlerByName(handler.name);
        if (namedHandler) {
            error_1.fatal(new Error(`Unable to register rule at ${handler.object.prototype.constructor.name}.${handler.method} with the name '${handler.name}'. ${namedHandler.object.prototype.constructor.name}.${namedHandler.method} has already registered this name.`));
        }
        this.handlers.push(handler);
    }
    static getHandlerByName(name) {
        let handler = null;
        this.handlers.forEach((res) => {
            if (res.name === name) {
                handler = res;
            }
        });
        return handler;
    }
    static runRules(server, ruleTree, context) {
        let promises = [];
        ruleTree.forEach((ruleBranch) => {
            promises.push(this.runRuleBranch(server, ruleBranch, context));
        });
        return Promise.all(promises);
    }
    static runRuleBranch(server, ruleBranch, context) {
        return new Promise((resolve, reject) => {
            let promises = [];
            let running = 0;
            ruleBranch.forEach((resolverName) => {
                let handler = this.getHandlerByName(resolverName);
                let promise = new Promise((branchResolve, branchReject) => {
                    service_1.InjectorService.run(server, handler.object, handler.method, context).then((response) => {
                        if (response instanceof response_1.Response && response.httpCode >= 400) {
                            branchReject(response);
                        }
                        else {
                            resolve();
                            branchResolve();
                        }
                    }).catch((response) => {
                        branchReject(response);
                    });
                });
                promises.push(promise);
            });
            Promise.all(promises).catch((response) => {
                reject(response);
            });
        });
    }
}
RuleService.handlers = [];
exports.RuleService = RuleService;
