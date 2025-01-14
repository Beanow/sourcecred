// @flow

import help from "./help";
import {run} from "./testUtil";

describe("cli/help", () => {
  it("prints general help with no arguments", async () => {
    expect(await run(help, [])).toEqual({
      exitCode: 0,
      stdout: expect.arrayContaining([
        expect.stringMatching(/^usage: sourcecred/),
        expect.stringMatching(/Commands:/),
      ]),
      stderr: [],
    });
  });

  it("prints help about itself", async () => {
    expect(await run(help, ["help"])).toEqual({
      exitCode: 0,
      stdout: expect.arrayContaining([
        expect.stringMatching(/^usage: sourcecred help/),
      ]),
      stderr: [],
    });
  });

  it("prints help about 'sourcecred load'", async () => {
    expect(await run(help, ["load"])).toEqual({
      exitCode: 0,
      stdout: expect.arrayContaining([
        expect.stringMatching(/^usage: sourcecred load/),
      ]),
      stderr: [],
    });
  });

  it("prints help about 'sourcecred analyze'", async () => {
    expect(await run(help, ["analyze"])).toEqual({
      exitCode: 0,
      stdout: expect.arrayContaining([
        expect.stringMatching(/^usage: sourcecred analyze/),
      ]),
      stderr: [],
    });
  });

  it("prints help about 'sourcecred clear'", async () => {
    expect(await run(help, ["clear"])).toEqual({
      exitCode: 0,
      stdout: expect.arrayContaining([
        expect.stringMatching(/^usage: sourcecred clear/),
      ]),
      stderr: [],
    });
  });

  it("fails when given an unknown command", async () => {
    expect(await run(help, ["wat"])).toEqual({
      exitCode: 1,
      stdout: [],
      stderr: expect.arrayContaining([
        expect.stringMatching(/^usage: /),
        expect.stringMatching(/Commands:/),
      ]),
    });
  });

  it("fails when given multiple arguments", async () => {
    expect(await run(help, ["help", "help"])).toEqual({
      exitCode: 1,
      stdout: [],
      stderr: expect.arrayContaining([
        expect.stringMatching(/^usage: /),
        expect.stringMatching(/Commands:/),
      ]),
    });
  });
});
