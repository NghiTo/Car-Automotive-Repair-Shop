FROM eclipse-temurin:17-jdk-alpine as build
COPY . .
RUN chmod +x ./mvnw
RUN ./mvnw install -DskipTests

FROM eclipse-temurin:17-jdk-alpine
COPY --from=build /target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080