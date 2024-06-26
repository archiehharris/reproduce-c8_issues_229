"use strict";

const { fail } = require("assert");
const { assert } = require("chai");
const sinon = require("sinon");

const { Orchestrator, handler } = require("../index");

describe("test cases to showcase issue", () => {

    it("fails during try/catch", async () => {
        sinon.replace(Orchestrator.prototype, "activate", sinon.fake.throws("A fake error during activate()."));

        try {
            await handler();

        } catch (actualError) {
            assert.instanceOf(actualError, Error);
            assert.strictEqual(actualError.toString(), "Error: A fake error during activate().");

        } finally {
            sinon.restore();
        }
    });

    it("succeeds", async () => {
        try {
            const actualResult = await handler();

            assert.deepStrictEqual(actualResult, "Activated");

        } catch (caughtError) {
            fail(caughtError);
        }
    });
});
