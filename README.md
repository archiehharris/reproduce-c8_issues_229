## Originating Issue

[issue #228](https://github.com/bcoe/c8/issues/229)

## Steps to Reproduce

With NodeJS version `v20.12.2` installed, clone and run these commands:

```bash
npm install
npm run test
```

\* To visualize, view the generated coverage/index.html in your browser.

## Expected

The text output sent to the terminal should indicate full code coverage.

## Actual

The branch coverage is 88% and line 34 is marked as uncovered.
