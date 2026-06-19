async function testapi() {
    try {
        let r = await Promise.reject("503 error");
    }
    catch (error) {
        console.log("error:", error)
    }
    finally {
        console.log("final clean up");
    }
}

testapi();
