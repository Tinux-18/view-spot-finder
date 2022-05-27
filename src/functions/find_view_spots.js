console.time("findViewSpots");

const viewSpotNumber = process.argv.slice(2)[1];
const elements = require(process.argv.slice(2)[0]).elements;
const values = require(process.argv.slice(2)[0]).values;

console.log("loaded constants");
console.timeLog("findViewSpots");

function findViewSpots() {
    let viewSpots = [];

    // Add values to elements
    elements.map((e, i) => {
        e.value = values[i].value;
    });

    console.log("added values to elements");
    console.timeLog("findViewSpots");

    // Find view spots
    elements.map(target => {
        let neighbours = [];

        // Find neighbours
        for (let i = 0; i < target.nodes.length; i++) {
            for (let j = 0; j < elements.length; j++) {
                if (
                    elements[j].id !== target.id &&
                    elements[j].nodes.includes(target.nodes[i])
                ) {
                    neighbours.push(elements[j]);
                }
            }
        }

        // Find out if target element is a view spot
        if (
            [...new Set(neighbours)].filter(
                e => e.value > target.value
            ).length === 0
        ) {
            viewSpots.push({ id: target.id, value: target.value });
        }
    });

    console.log("found view spots");
    console.timeLog("findViewSpots");

    // Sort view spots descending
    viewSpots.sort((a, b) => {
        return b.value - a.value;
    });

    console.log("sorted view spots");
    console.timeLog("findViewSpots");

    return viewSpots.slice(0, viewSpotNumber);
}

console.log(findViewSpots());

console.timeEnd("findViewSpots");
