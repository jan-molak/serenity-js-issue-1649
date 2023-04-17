# SerenityExample
Serenity Example project with report generation failing with SerenityJS

### Build the project

From the project root directory run `mvn clean install -DskipTests` and then `cd` into `src/test/playwright` and run `npm install` 

### Run tests and generate reports
- At the project root level, run `mvn clean verify` to run the java tests, which will generate a report in `<PROJECT_DIR>/target/site/serenity`. 
- You can then run the JS tests from `<PROJECT_DIR>/src/test/playwright` with `npm run test`. The cucumber json files are saved to the same directory as the java tests above, and then a combined report is generated at `<PROJECT_DIR>/src/test/playwright/target/site/serenity/index.html`

### Important notes
- Running `npm run test` for the JS tests will not remove the root level `<PROJECT_DIR>/target` directory when run, only the one located at `<PROJECT_DIR>/src/test/playwright/target`. It is therefore important to remember if you want to only run the JS tests and see the report, you have to manually delete the target directory at `<PROJECT_DIR>/target` each time. Otherwise it will continually save old test JSON files here.


