const { helloWorld } = require('../src/app');

function testHelloWorld() {
    const result = helloWorld();
    if (result === "Hello, CI/CD World!") {
        console.log("✅ Test réussi !");
        return true;
    } else {
        console.log("❌ Test échoué !");
        return false;
    }
}

// Exécution du test
testHelloWorld();