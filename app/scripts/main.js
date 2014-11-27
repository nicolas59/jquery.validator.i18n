(function($){

	$(document).ready(function(){
		$.validator.setDefaults({
				submitHandler: function() {
					alert("submitted!");
				}
			});

		var updateMsg = function(language){
			$.ajax({
				url:"scripts/jquery.validator_"+language+".json"
			}).done(function(data){
				var messages = {};
				var propWithDynField = /\{\d\}/;
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

			$("#form").validate(
			{
				rules: {
					nomInput: "required",
					telInput: {
						"required":true,
						"maxlength":10,
						"minlength":10
					},
					dtNInput: {
						"required":true,
						"date":true
					},
					emailInput:"required"
				}
			}
			);

		$("input[name='langue']").click(function(){
			updateMsg($(this).val());
		});
		updateMsg($("input[name='langue']").val());
	});

})(jQuery)