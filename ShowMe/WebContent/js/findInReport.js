/**
 * 
 */
var modelYearArr = [ [ "2016", "2016" ], [ "2017", "2017" ] ];
var vehicleLineArr = [ [ "18005", "Edge" ], [ "25003", "Escape" ],
		[ "25001", "Expedition" ], [ "10004", "Explorer" ],
		[ "9004", "Fiesta NA" ], [ "15003", "Focus" ], [ "26004", "Fusion" ],
		[ "17003", "MKC" ], [ "27003", "MKZ" ], [ "5004", "Mustang" ],
		[ "8003", "Superduty" ], [ "4004", "Transit" ] ];
var marketArr = [ [ "C", "Canada" ], [ "U", "USA" ] ];
var reportTypeArr = [ [ "FtrMR", "Weekly Feature Allocation" ],
		[ "OrdMR", "Weekly Order Selection" ],
		[ "FtrMRWhsl", "Wholesale Feature Allocation" ],
		[ "FMRFD", "Unconstrained Wholesale" ],
		[ "FAR", "Order Recommendation vs Scheduling Report" ],
		[ "OTR", "Order Recommendation Trend" ] ];
var weekArr = [ "201608", "201608" ];

var gReportType = "", gModelYear = "", gMarket = "", gVehicleLine = "";

function identifyPhrases(phrase, phrases, modelArr) {
	if (phrase == "") {
		return parsePhrases(phrases, modelArr);
	} else {
		return phrase;
	}
}

function findInPhrases(phrases) {
	gReportType = identifyPhrases(gReportType, phrases, reportTypeArr);
	gModelYear = identifyPhrases(gModelYear, phrases, modelYearArr);
	gMarket = identifyPhrases(gMarket, phrases, marketArr);
	gVehicleLine = identifyPhrases(gVehicleLine, phrases, vehicleLineArr);

	console.log("Report [FtrMR] " + gReportType);
	console.log("Model[2016] " + gModelYear);
	console.log("Market[C] " + gMarket);
	console.log("vehicleLine[15003] " + gVehicleLine);

	var message = "Am still short of ";

	if (gReportType == "") {
		message += "Report type, ";
	}

	if (gModelYear == "") {
		message += "Model Year, ";
	}

	if (gMarket == "") {
		message += "Market, ";
	}

	if (gVehicleLine == "") {
		message += "VehicleLine, ";
	}

	message += ".  Could you please help me?";

	if (message == "Am still short of .  Could you please help me?") {
		document.getElementById("body").innerHTML = "Retriving.../n";
		submitForm(gVehicleLine, gModelYear, gMarket, gReportType);
	} else {
		document.getElementById("body").innerHTML = message;
		var utterance = new SpeechSynthesisUtterance(message);
		window.speechSynthesis.speak(utterance);
	}
}

function submitForm(vehicleLine, modelYear, market, reportType) {
	document.forms[0].requestName.value = "GENERATE_REPORT";
	document.forms[0].allocationWeek.value = "201608";
	document.forms[0].vehicleLineKey.value = vehicleLine;
	document.forms[0].modelYear.value = modelYear;
	document.forms[0].marketCode.value = market;
	document.forms[0].reportType.value = reportType;
	document.forms[0].target = "_new";
	resetValues();
	document.forms[0].submit();
}

function resetValues() {
	gReportType = "";
	gModelYear = "";
	gMarket = "";
	gVehicleLine = "";
	document.forms[0].reset();
}
