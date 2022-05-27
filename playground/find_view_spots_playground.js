// var obj = JSON.parse(
//     fs.readFileSync(process.argv.slice(2)[0], "utf8")
// );

console.time("findViewSpots");

function findViewSpots() {
    const viewSpotNumber = process.argv.slice(2)[1];
    const mesh = require(process.argv.slice(2)[0]);
    // console.log("projects :>> ", mesh);
}

findViewSpots();

console.timeEnd("findViewSpots");

console.time("findViewSpotsFs");

function findViewSpotsFs() {
    var fs = require("fs");

    const viewSpotNumber = process.argv.slice(2)[1];
    const mesh = JSON.parse(
        fs.readFileSync(process.argv.slice(2)[0], "utf8")
    );
    // console.log("projects :>> ", mesh);
}

findViewSpotsFs();

console.timeEnd("findViewSpotsFs");

const neighbours = elements.filter(
    e =>
        e.nodes[0] === testElement.nodes[0] ||
        e.nodes[1] === testElement.nodes[1] ||
        e.nodes[2] === testElement.nodes[2]
);

if (
    uniqueTestArr.filter(e => e.value > testElement.value).length ===
    0
) {
    console.log("View spot");
    viewSpots.push(testElement);
}
