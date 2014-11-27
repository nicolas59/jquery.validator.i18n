(function($){

	$(document).ready(function(){
		$.validator.setDefaults({
				submitHandler: function() {
					alert("submitted!");
				}
			});

			//chargement jquery.validator

			$.ajax({
				url:"scripts/jquery.validator_fr.json"
			}).done(function(data){
				$.extend($.validator.messages, data);	
			});
			

			$("#form").validate(
			{
				rules: {
					nomInput: "required",
					telInput: "required",
					dtNInput: {
						"required":true,
						"date":true
					}
				}
			}
			);

		$("input[name='langue']").click(function(){
			//modification chargement jqeury.validator
			$.ajax({
				url:"scripts/jquery.validator_"+$(this).val()+".json"
			}).done(function(data){
				$.extend($.validator.messages, data);	
			});
			


		});
	});

})(jQuery)