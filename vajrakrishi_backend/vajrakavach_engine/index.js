const generateAdvisory = require("./advisoryEngine");

const farmerData = { ... };

async function test() {
    const advisory = await generateAdvisory(farmerData);
    console.log(advisory);
}

test();