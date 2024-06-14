"use strict";

const { fail } = require("assert");
const { assert } = require("chai");
const sinon = require("sinon");

const { Orchestrator, handler } = require("../index");

describe("reproduce test cases", () => {

    it("fails during try/catch", async () => {
        sinon.replace(Orchestrator.prototype, "activate", sinon.fake.throws("A fake error during activate()."));

        try {
            await handler({
                orchestrationId: "foo"
            });

        } catch (actualError) {
            assert.instanceOf(actualError, Error);
            assert.strictEqual(actualError.toString(), "Error: A fake error during activate().");

        } finally {
            sinon.restore();
        }
    });

    it("succeeds", async () => {
        try {
            const actualResult = await handler({
                orchestrationId: "bar"
            });

            assert.deepStrictEqual(actualResult, "Activated");

        } catch (caughtError) {
            fail(caughtError);
        }
    });
});
