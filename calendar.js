$(function() {
	var currentYear = 2015;
	var currentMonth = 5;
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
	};
	var findFirstDayOfMonth = function(){
		currentYear = parseInt($("#yearSelect").val());
		var yearDifference = currentYear - 2012;
		var firstDayOfMonth = yearDifference >= 4 ? ((yearDifference) + ((yearDifference) % 4 + 1)) % 7 : yearDifference + 1;
		months["febuary"][0] = currentYear % 4 === 0 ? 29 : 28;
		for (var month in months) {
			months[month][1] = firstDayOfMonth;
			firstDayOfMonth += months[month][0] % 7;
			firstDayOfMonth = firstDayOfMonth >= 7 ? firstDayOfMonth - 7 : firstDayOfMonth;
			console.log(month + " -> " + months[month]);
		};
	};
	findFirstDayOfMonth();
	var calBody = $("#calBody");
	var generateCalendar = function(){
		var dayStart = months[$("#monthSelect").val()][1];
		var daysInMonth = months[$("#monthSelect").val()][0];
		var currentDay = 0 - dayStart + 1;

		console.log("Start Calendar Generation");
		var tableHtml = "";
		for (var i = 0; i < 5; i++) {
			tableHtml += "<tr>";
			for (var j = 0; j < 7; j++) {
				if(currentDay > 0 && currentDay <= daysInMonth) tableHtml += "<td>" + currentDay + "</td>";
				else tableHtml += "<td></td>";
				currentDay++;
			};
			tableHtml += "</tr>";
		};
		calBody.html(tableHtml);
	};
	$("#generateCalendarBtn").on("click", generateCalendar);
	$("#yearSelect").focusout(findFirstDayOfMonth);
});