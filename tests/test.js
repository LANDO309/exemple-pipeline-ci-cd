import app from '../src/app';
const helloWorld = app.helloWorld;

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