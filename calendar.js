$(function() {
	console.log("File Found");

	var currentYear = 2015;
	var currentMonth = 5;
	var daysInWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];	
	var months = {
		"january": [31, -1],
		"febuary": [28, -1],
		"march": [31, -1],
		"april": [30, -1],
		"may": [31, -1],
		"june": [30, -1],
		"july": [31, -1],
		"august": [31, -1],
		"september": [30, -1],
		"october": [31, -1],
		"november": [30, -1],
		"december": [31, -1]
	}
	var findFirstDayOfMonth = function(){
		var firstDayOfMonth = ((currentYear - 2012) + ((currentYear - 2012) % 4 + 1)) % 7;
		for (var month in months) {
			months[month][1] = firstDayOfMonth;
			firstDayOfMonth += months[month][0] % 7;
			firstDayOfMonth = firstDayOfMonth >= 7 ? firstDayOfMonth - 7 : firstDayOfMonth;
			console.log(month + " -> " + months[month]);
		};
	};
	findFirstDayOfMonth();
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