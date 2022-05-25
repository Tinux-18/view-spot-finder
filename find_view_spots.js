console.time("findViewSpots");

function findViewSpots() {
    const viewSpotNumber = process.argv.slice(2)[1];
    const elements = require(process.argv.slice(2)[0]).elements;
    const values = require(process.argv.slice(2)[0]).values;

    // Add values to elements

    elements.map((e, i) => {
        e.value = values[i].value;
    });

    console.log("projects :>> ", elements[0]);

    let viewSpots = [];

    let testElement = elements[0];
    let testArr = [];

    // Find neighbours
    for (let i = 0; i < testElement.nodes.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            if (
                elements[j].id !== testElement.id &&
                elements[j].nodes.includes(testElement.nodes[i])
            ) {
                testArr.push(elements[j]);
            }
        }
    }
    let uniqueTestArr = [...new Set(testArr)];

    console.log("testArr :>> ", uniqueTestArr);

    // Find out if target element is a view spot
    let higherNeighbours = [];

    for (let i = 0; i < uniqueTestArr.length; i++) {
        if (uniqueTestArr[i].value > testElement.value) {
            higherNeighbours.push(uniqueTestArr[i].id);
        }
    }
    console.log("higherNeighbours :>> ", higherNeighbours);
}

findViewSpots();

console.timeEnd("findViewSpots");
