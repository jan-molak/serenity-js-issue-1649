import {BeforeAll, Before} from '@cucumber/cucumber';
import {ConsoleReporter} from '@serenity-js/console-reporter';
import {SerenityBDDReporter} from '@serenity-js/serenity-bdd';
import { ArtifactArchiver, configure, Duration } from '@serenity-js/core';

const timeouts = {
    cucumber: {
        step: Duration.ofSeconds(30),                       // how long to wait for a Cucumber step to complete
    },
    serenity: {
        cueTimeout: Duration.ofSeconds(5),    // how long to wait for Serenity/JS to complete any post-test activities, like saving screenshots and reports
    }
}

BeforeAll(async function() {
    configure({

        // Configure Serenity/JS reporting services
        crew: [
            ArtifactArchiver.storingArtifactsAt('../../../target/site/serenity'),
            new SerenityBDDReporter(),
            ConsoleReporter.forDarkTerminals()
        ],
        cueTimeout: timeouts.serenity.cueTimeout
    });
});