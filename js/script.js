$(document).ready(function(){
	console.log("DOM is ready!")
	$('#border-wait-form').submit(function(event){
		event.preventDefault();
		console.log("Form!")

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

		console.log("1 Pika kufitare:",pikaKufitare,'\n',"2 Hyrje min:",hyrjeMinMinuta,
			'\n',"3 Hyrje max:",hyrjeMaxMinuta,'\n'," 4 Dalje min:",
			daljeMinMinuta,'\n'," 5 Dalje max:",daljeMaxMinuta,
			'\n',"6 Hyrje min ",hyrjeMinMetra,'\n',"7 Hyrje max:",hyrjeMaxMetra,
			'\n',"8 Dalje min:",daljeMinMetra,'\n',"9 Dalje max:",daljeMaxMetra

			);
		//console.log(hyrjeMinMinuta," hyrja min ,",hyrjeMaxMinuta," hyrja max");
	});
});



