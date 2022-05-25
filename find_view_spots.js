console.time("findViewSpots");

function findViewSpots() {
    const viewSpotNumber = process.argv.slice(2)[1];
    const elements = require(process.argv.slice(2)[0]).elements;
    const values = require(process.argv.slice(2)[0]).values;
    let viewSpots = [];
    // Add values to elements

    elements.map((e, i) => {
        e.value = values[i].value;
    });

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
            viewSpots.push(target);
        }
    });

    viewSpots.map(viewSpot => {
        delete viewSpot.nodes;
    });

    viewSpots.sort((a, b) => {
        return a.value - b.value;
    });
    console.log(viewSpots.reverse().slice(0, viewSpotNumber));
}

findViewSpots();

console.timeEnd("findViewSpots");
