# use case

`library/` is consumed by `dependent/`. Building `dependent/` throws errors since `dependent/` uses `typescript@^2.7.2` and library/ uses `typescript@^2.9.2` which emits new [import() types](https://blogs.msdn.microsoft.com/typescript/2018/05/31/announcing-typescript-2-9/#import-types) syntax in declarations.

This causes
```bash
$ cd dependent/
$ yarn run build
yarn run v1.7.0
$ tsc --project tsconfig.json
node_modules/library/lib/index.d.ts(1,42): error TS1005: ',' expected.
node_modules/library/lib/index.d.ts(1,54): error TS1005: ',' expected.
node_modules/library/lib/index.d.ts(1,61): error TS1005: ',' expected.
node_modules/library/lib/index.d.ts(1,98): error TS1005: ';' expected.
node_modules/library/lib/index.d.ts(1,100): error TS1128: Declaration or statement expected.
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## tried ts versions

`$ git checkout ts-2.9.2 for typescript@latest`

`$ git checkout ts-next for typescript@next`