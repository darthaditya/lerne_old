/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Question', function(Y, NAME) {

/**
 * The Question module.
 *
 * @module Question
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.QuestionModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                //ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
		list: function(ac) {
			ac.done({
                    status: 'you are in the list controller',
			});
		}
    };

}, '0.0.1', {requires: ['mojito', 'QuestionModelFoo']});
