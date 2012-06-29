YUI().add('lr-question',function(Y){
	Y.namespace('LrQuestion');
	var YAHOO = Y.YUI2;
	Y.LrQuestion = {
		init: function(){
				privateFunc.listQuestions();
				Y.on('click',privateFunc.addQuestion,"#ls_add_question_submit");
			},
	};
	var privateFunc = {
		addQuestion : function(){
			var text = Y.one('#ls_add_question_text').get('value');
			var url = "/question/add";
			var postdata = "text="+text;
			var callback = {
				success:function(id,o,args){
					Y.one("#ls_list_questions ul").set('innerHTML','Loading Questions...');
					privateFunc.listQuestions();
				},
				failure:function(){}
			};
			var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, postdata); 
		},
		listQuestions : function(){
			var url = "/question/list";
			var callback = {
				success:function(data) {
					var questionlist = JSON.parse(data.responseText);
					Y.one("#ls_list_questions ul").set('innerHTML','');
					for(var i=0;i<questionlist.data.length;i++){
						Y.one("#ls_list_questions ul").append('<li><div class="lr_user_image"></div><div class="lr_question_text">'+questionlist.data[i].question_text+'</div></li>');   
					}
				},
				failure:function(){
				}
			};
			var request = YAHOO.util.Connect.asyncRequest('GET', url, callback); 
		}
	};
}, '0.0.1', {requires: ['io', 'json-parse','yui2-connection']})
