test:
	npm run test

setup:
	cp -n .env.example .env || true

install:
	npm install

start:
	npm run start:dev

lint:
	npm run lint

db-console:
	sqlite3 src/db/development.sqlite

.PHONY: test
