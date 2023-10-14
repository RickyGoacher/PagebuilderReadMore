define([
    'jquery',
    'underscore',
    'Magento_PageBuilder/js/events',
    'Magento_PageBuilder/js/content-type/preview-collection',
    'Magento_PageBuilder/js/content-type-factory',
    'Magento_PageBuilder/js/config',
    'PagebuilderExtend_PageBuilderReadMore/js/content-type/pagebuilderextend-pagebuilderreadmore/appearance/default/widget'
], function ($, _, events, PreviewCollection, createContentType, pageBuilderConfig, readmore) {
    'use strict';

    /**
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */

    function Preview(parent, config, stageId) {
        PreviewCollection.call(this, parent, config, stageId);
        this.config = config;
    }

    Preview.prototype = Object.create(PreviewCollection.prototype);

    /**
     * Root element
     */

    Preview.prototype.element = null;

    /**
     * Bind events to add USP icon & USP text
     */

    Preview.prototype.bindEvents = function bindEvents() {

        PreviewCollection.prototype.bindEvents.call(this);
    };

    Preview.prototype.initializeReadmoreWidget = function (element) {
        if (element) {
            readmore(this.config, element);
        }
    };

    /**
     * Set root element
     *
     * @returns {void}
     */

    Preview.prototype.afterChildrenRender = function (element) {
        this.element = element;
        this.initializeReadmoreWidget(element);
    };

    /**
     * Check if content type is container
     *
     * @returns {boolean}
     */

    Preview.prototype.isContainer = function () {
        return true;
    };

    return Preview;
});
