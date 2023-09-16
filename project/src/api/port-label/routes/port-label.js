'use strict';

/**
 * port-label router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::port-label.port-label');
