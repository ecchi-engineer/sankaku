.PHONY: setup

PLAYWRIGHT_BROWSERS_PATH=$(shell pwd)/pw-browsers
export PLAYWRIGHT_BROWSERS_PATH

setup: package-lock.json
	npm i -D playwright

.PHONY: run
run: setup
	DEBUG=pw:api node example.js