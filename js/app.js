var app = {};

// load in static data file 
app.dataFile = "./data/work.json";

app.boot = function () {
	app.rawData = null;
	$.ajax({
	    type: 'GET',
	    url: app.dataFile,
	    dataType: 'json',
	    async: false,
	    success: function(data){
	        app.rawData = data;
	    }
	});

	app.fillPage();
}

app.fillPage = function () {
	var data = app.rawData;
	var i = 0;
	var text = "";
	var text_2 = "";
	$(".clips").html(function(){
		
		for (var i =0; i < data.length; i++) {
			var obj = data[i];

			for (var key in obj) {
				var container = obj.container;
				var hed = obj.hed;
				var url = obj.url;
				var photo = obj.photo;
				var date = obj.date
			}

			if (container == "selected") {
				text += "<div class=hed><a href="+ url +">"+ hed + "</a></div>" +
				"<div class=date>" + date + "</div>"+
				"<div class=image><img src=" + photo + "></div>";
			}
		};
		if (text != "null") {
			return text; 
		}

	});
	$(".older").html(function(){
		
		for (var i =0; i < data.length; i++) {
			var obj = data[i];

			for (var key in obj) {
				var container = obj.container;
				var hed = obj.hed;
				var url = obj.url;
				var photo = obj.photo;
				var date = obj.date
			}

			if (container == "older") {
				text_2 += "<div class=hed><a href="+ url +">"+ hed + "</a></div>" +
				"<div class=date>" + date + "</div>"+
				"<div class=image><img src=" + photo + "></div>";
			}

		};
		if (text_2 != "null") {
			return text_2; 
		}

	});
}