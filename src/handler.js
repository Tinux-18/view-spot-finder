"use strict";

const { findViewSpots } = require("./functions/find_view_spots");

module.exports.getViewSpots = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(findViewSpots()),
    };
};
