(function () {
	var arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
		requiredNumber = 10;

	// Split the array in two
	// if the last item is greater than the number

	function searchArray(array) {
		if (array.length > 1) {
			var firstPart = array.splice(0, array.length/2),
				secondPart = array.splice(array.length/2, array.length);

			if (firstPart.indexOf(requiredNumber) > -1) {
				// it must be in this array
				console.log(firstPart);
				searchArray(firstPart);
			} else if (secondPart.indexOf(requiredNumber) > -1) {
				// it must be in this array
				searchArray(secondPart);
			} else {
				console.log('We either found the number or something went wrong');
			}
		} else {
			console.log(array);
		}

	}

	searchArray(arrayToSearch);

})();