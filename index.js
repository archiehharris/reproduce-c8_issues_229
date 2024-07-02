"use strict";

const Orchestrator = class {
    #receivedError;

    async activate () {
        return "Activated";
    }

    handleError (error) {
        this.#receivedError = error;
        return error;
    }

    destroy () {
        if (this.#receivedError) {
            // console.log("We encountered an error.");
        } else {
            // console.log("We did not encounter an error.");
        }
    }
};
exports.Orchestrator = Orchestrator;

exports.handler = async function () {
    const orchestrator = new Orchestrator();

    try {
        return await orchestrator.activate();

    } catch (error) {
        throw orchestrator.handleError(error);

    } finally {
        orchestrator.destroy();
    }
};
