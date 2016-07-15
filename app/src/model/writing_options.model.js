'use strict';

angular.module('myApp.modelService.writingOptions', []).factory('modelFactory_writingOptions', function() {
	return {
		
		writing_options:[
		   	{category: "Writing as", options: ["protagonist","antagonist","author","mother","father","brother/sister","best friend","acquaintance","lover","husband","wife","mentor","animal","spirit","ghost","monster","angel","demon","alien","ruler","professional","young child","herald/messenger","hero","outlaw","wizard/witch","robot","warrior","elder","grandparent","aunt/uncle/cousin","reader","narrator","lawer","doctor","psychologist","priest / religious official","boss","staff member","younger self","older self","god","client","customer","sales assistant","tradesman","manager","police officer","detective","runaway","stowaway","emergency services","servant"]},
		  	{category: "Writing to", options: ["protagonist","antagonist","author","mother","father","brother/sister","best friend","acquaintance","lover","husband","wife","mentor","animal","spirit","ghost","monster","angel","demon","alien","ruler","professional","young child","herald/messenger","hero","outlaw","wizard/witch","robot","warrior","elder","grandparent","aunt/uncle/cousin","reader","narrator","lawer","doctor","psychologist","priest / religious official","boss","staff member","younger self","older self","god","client","customer","sales assistant","tradesman","manager","police officer","detective","runaway","stowaway","emergency services","servant"]},
			{category: "Mode of Expression", options: ["a script","a letter","a series of blog or facebook posts","a series of 5 tweets","song lyrics","a rap","scientific report","instruction manual","eulogy","police report","haiku","sonnet","text for a picture book","a monologue","a speech","a newspaper article","an encyclopedia entry","a detailed description","a magazine article","product review","film review","book review","letter to the editor","an interview transcript","a love letter","a biography","an autobiography","a diary entry","an sms/conversation","a recollection","a fairy tale","a myth","a nursery rhyme","a limerick","a letter of complaint","a textbook entry","a recipe","psychologist report/assessment","list of (items, etc)","grocery/shopping list","internet forum","questionnaire"]}
		],
		getWritingOptions: function() {
			return this.writing_options;
		}
	}
});