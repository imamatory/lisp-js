install: install-deps install-flow-typed

run:
	yarn run babel-node -- 'src/bin/hexlet.js' 10

install-deps:
	yarn install

install-flow-typed:
	yarn run flow-typed install

build:
	rm -rf dist
	yarn run build

test:
	yarn test

test-watch:
	yarn run test-watch

check-types:
	yarn run flow

lint:
	yarn run eslint .

publish:
	yarn publish

.PHONY: test
