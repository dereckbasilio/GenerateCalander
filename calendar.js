$(function() {
	console.log("File Found");
	var calBody = $("#calBody");
	var generateCalendar = function(genTable){
		dayStart = 0;
		daysInMonth = 30;
		console.log("Start Calendar Generation");
		var tableHtml = "";
		for (var i = 0; i < 5; i++) {
			tableHtml += "<tr>";
			for (var j = 0; j < 7; j++) {
				if(dayStart > 0 && dayStart <= daysInMonth) tableHtml += "<td>" + dayStart + "</td>";
				else tableHtml += "<td></td>";
				dayStart++;
			};
			tableHtml += "</tr>";
		};
		calBody.append(tableHtml);
	};
	$("#generateCalendarBtn").on("click", generateCalendar);
});