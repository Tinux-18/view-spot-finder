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
            viewSpots.push({ id: target.id, value: target.value });
        }
    });

    viewSpots
        .sort((a, b) => {
            return b.value - a.value;
        })
        .slice(0, viewSpotNumber);
    console.log("viewSpots :>> ", viewSpots);
}

findViewSpots();

console.timeEnd("findViewSpots");
