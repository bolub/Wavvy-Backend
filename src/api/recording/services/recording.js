'use strict';

/**
 * recording service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recording.recording');
