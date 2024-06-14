"use strict";

const Orchestrator = class {
    #receivedError;

    constructor (id) {
        if (typeof id !== "string") {
            throw new Error("Please provide an ID.");
        }
    }

    async activate () {
        return "Activated";
    }

    handleError (error) {
        this.#receivedError = error;
        return error;
    }

    destroy () {
        if (this.#receivedError) {
            console.log("We encountered an error.");
        } else {
            console.log("We did not encounter an error.");
        }
    }
};
exports.Orchestrator = Orchestrator;

exports.handler = async function (props) {
    const orchestrator = new Orchestrator(props?.orchestrationId);

    try {
        return await orchestrator.activate();

    } catch (error) {
        throw orchestrator.handleError(error);

    } finally {
        orchestrator.destroy();
    }
};
