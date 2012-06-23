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
		add: function(ac) {
			var params = ac.params.getFromUrl();
			ac.models.QuestionModelFoo.addQuestion(function(err,data){
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.done({
					data:JSON.stringify(data)
                },{ "view": { "name": "json" } });
			},params);
		},
		list: function(ac) {
            ac.models.QuestionModelFoo.getQuestions(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.done({
					data:JSON.stringify(data)
                },{ "view": { "name": "json" } });
            });
		}
    };
}, '0.0.1', {requires: ['mojito', 'QuestionModelFoo']});
