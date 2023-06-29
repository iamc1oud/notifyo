serve_docs:
	cd docs && mkdocs serve

# Generate docker image of server.
build_internal:
	cd internal; \
	pwd; \
	docker build -t c1oudgg/notifyo .

serve:
	docker-compose up --build

push:
	docker push c1oudgg/notifyo:latest

nest_run:
	cd internal; \
	npm run start:dev