    npm install

    ./mvnw
    npm start

    ./mvnw -Pprod clean verify

    java -jar target/*.jar

    ./mvnw -Pprod,war clean verify

    ./mvnw verify

    npm test

    ./mvnw -Pprod verify jib:dockerBuild

    docker-compose -f src/main/docker/app.yml up -d
