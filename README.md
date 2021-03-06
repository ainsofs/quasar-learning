# La'u Kōviti

Repo for learning Quasar.

[![Netlify Status](https://api.netlify.com/api/v1/badges/93197cbc-73fd-4a46-9313-6413044b7945/deploy-status)](https://app.netlify.com/sites/koviti/deploys)
[![End-to-end tests](https://github.com/ainsofs/quasar-learning/actions/workflows/ci.yml/badge.svg)](https://github.com/ainsofs/quasar-learning/actions/workflows/ci.yml)

**Getting started**

```
docker-compose up -d
```

Once installed you can access the dev site on port 8080. e.g. localhost:8080

Compiled SPA can be accessed on port 8000. e.g. localhost:8000/index.html

Demo Form

https://docs.google.com/forms/d/e/1FAIpQLSc41GKKitf_6kXal5n4xIeSM_w0Czw2GX7-i8bIR0CJYLNG6A/viewform?usp=sf_link


**Common commands**

```
# start up dev environment
docker-compose up -d

# stop environment
docker-compose stop

# delete everything and start in a clean environment
docker-compose down -v

# check logs
docker-compose logs -f

# check logs for specific container
docker-compose logs -f node

# log into node container (this will allow use of drush and composer)
docker-compose exec node sh

# run tests
docker-compose up -d && docker-compose logs -f cypress

```
