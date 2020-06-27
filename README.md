## Simple project of Jhipster 6
## Development

    npm install

    ./mvnw
    npm start

### Packaging as jar

    ./mvnw -Pprod clean verify

    java -jar target/*.jar

### Packaging as war

    ./mvnw -Pprod,war clean verify

## Testing

    ./mvnw verify

### Client tests

    npm test

### Code quality

```
docker-compose -f src/main/docker/sonar.yml up -d
```

```
./mvnw -Pprod clean verify sonar:sonar
```

```
./mvnw initialize sonar:sonar
```

## Using Docker to simplify development (optional)

    docker-compose -f src/main/docker/mysql.yml up -d

    docker-compose -f src/main/docker/mysql.yml down

    ./mvnw -Pprod verify jib:dockerBuild

    docker-compose -f src/main/docker/app.yml up -d
