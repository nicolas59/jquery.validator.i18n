define(["jquery"], function($){
	
	var propWithDynField = /\{\d\}/;

	return {
		url : "scripts/localization/jquery.validator_{}.json",

		updateMsg : function(language){
			$.ajax({
				url:this.url.replace("{}", language)
			}).done(function(data){
				var messages = {};			
				for(prop in data){
					if(propWithDynField.test(data[prop])){
						messages[prop] = $.validator.format(data[prop]);
					}else{
						messages[prop] = data[prop];	
					}
				}
				$.extend($.validator.messages, messages);	
			});
		}
	}
});