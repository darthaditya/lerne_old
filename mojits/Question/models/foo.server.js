/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('QuestionModelFoo', function(Y, NAME) {

/**
 * The QuestionModelFoo module.
 *
 * @module Question
 */

    /**
     * Constructor for the QuestionModelFoo class.
     *
     * @class QuestionModelFoo
     * @constructor
     */
	var mysqlCli = require('mysql');
	var mysqlClient = mysqlCli.createClient({
        'host' : 'localhost',
        'port' : 3306,
        'user' : 'root',
        'password' : 'root'
    });

    Y.mojito.models[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        },
		getQuestions: function(callback) {
			mysqlClient.query(
            'SELECT * FROM lerne.questions',
            function selectCb(error, results, fields) {
              if (error) {
                  console.log('getProduct Error: ' + error.message);
                  mysqlClient.end();
                  return;
              }
              var result ={
                      meta:{
                          totalRecords: results.length
                      }
                };
              callback(null,{data:results});
          });
		}
    };

}, '0.0.1', {requires: []});
