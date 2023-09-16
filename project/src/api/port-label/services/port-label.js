'use strict';

/**
 * port-label service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::port-label.port-label');
