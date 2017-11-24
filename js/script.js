$(document).ready(function(){
	var datatimeNow = new Date();
	$('#datetime-now').val(datatimeNow);
	console.log("DOM is ready!",datatimeNow)

	$('#border-wait-form').submit(function(event){
		event.preventDefault();
		console.log("Form!")

		var datetimeNow = $('#datetime-now').val();
		var pikaKufitare = $('#pika-kufitare').val();
		//Hyrje ne minuta
		var hyrjeMinMinuta = $('#hyrje-min-minuta').val();
		var hyrjeMaxMinuta = $('#hyrje-max-minuta').val();
		//Dalje ne minuta
		var daljeMinMinuta = $('#dalje-min-minuta').val();
		var daljeMaxMinuta = $('#dalje-max-minuta').val();

		//Hyrje ne metra
		var hyrjeMinMetra = $('#hyrje-min-metra').val();
		var hyrjeMaxMetra = $('#hyrje-max-metra').val();
		//Dalje ne Metra
		var daljeMinMetra = $('#dalje-min-metra').val();
		var daljeMaxMetra = $('#dalje-max-metra').val();

		var dataJson = {"pikaKufitare": pikaKufitare,
                        "hyrjeMinMinuta" : parseInt(hyrjeMinMinuta),
                        "hyrjeMaxMinuta" : parseInt(hyrjeMaxMinuta),
                        "daljeMinMinuta" : parseInt(daljeMinMinuta),
                        "daljeMaxMinuta" : parseInt(daljeMaxMinuta),
                        "hyrjeMinMetra" : parseInt(hyrjeMinMetra),
                        "hyrjeMaxMetra" : parseInt(hyrjeMaxMetra),
                        "daljeMinMetra" : parseInt(daljeMinMetra),
                        "daljeMaxMetra" : parseInt(daljeMaxMetra),
                        "datetimeNow" : new Date()
                        };

		console.log(dataJson);


		/*console.log("1 Pika kufitare:",pikaKufitare,'\n',"2 Hyrje min:",hyrjeMinMinuta,
			'\n',"3 Hyrje max:",hyrjeMaxMinuta,'\n'," 4 Dalje min:",
			daljeMinMinuta,'\n'," 5 Dalje max:",daljeMaxMinuta,
			'\n',"6 Hyrje min ",hyrjeMinMetra,'\n',"7 Hyrje max:",hyrjeMaxMetra,
			'\n',"8 Dalje min:",daljeMinMetra,'\n',"9 Dalje max:",daljeMaxMetra

			); */
		//console.log(hyrjeMinMinuta," hyrja min ,",hyrjeMaxMinuta," hyrja max");
	});
});



