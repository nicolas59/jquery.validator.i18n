requirejs.config({
	baseUrl : "bower_components/",
	paths : {
		"jquery" : "jquery/dist/jquery",
		"jquery-validate" : "jquery-validation/dist/jquery.validate",
		"jquery-validator-json" : "../scripts/validator.i18n"
	}
});

require(["jquery", "jquery-validator-json", "jquery-validate" ], function($, validatori18n){
	$(document).ready(function(){
		$.validator.setDefaults({
				submitHandler: function() {
					alert("submitted!");
				}
			});

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
			validatori18n.updateMsg($(this).val());
		});
		validatori18n.updateMsg($("input[name='langue']").val());
	});
});