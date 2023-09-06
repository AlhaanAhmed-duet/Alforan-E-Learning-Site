(function (global) {
	// Set up a namespace for our utility
	var ajaxUtils = {};

	// Returns HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		
		else {
			global.alert("Ajax is not supported on your browser")
			return(null);
		}
	};

	// Make an AJAX send GET request on "requesturl"
	ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
		var request = getRequestObject();
		request.onreadystatechange = function () {
			handleResponse(request, responseHandler);
			// Actually this is the function call for handleResponse Function to execute since onreadyStateChange
			// and onload means same thing
		
		};
			request.open("GET", requestUrl, true);
			request.send(null);   // For Post Only	
	};
	// Function definition of handleResponse
	function handleResponse(request, responseHandler) {
		if ((request.readyState == 4) && (request.status == 200)) {
			responseHandler(request);
		}
	}
//  Expose ajaxutils object to global
global.$ajaxUtils = ajaxUtils;





}(window));
