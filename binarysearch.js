(function () {
	var arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
		requiredNumber = 31;

	// Split the array in two
	// if the last item is greater than the number

	function searchArray(array) {

		var firstHalf = array.slice(),
			secondHalf = array.slice(),
			arrayLength = array.length;

		if (arrayLength > 1) {
			firstHalf = firstHalf.splice(0, Math.ceil(arrayLength/2));
			secondHalf = secondHalf.splice(Math.ceil(arrayLength/2), arrayLength-1);


			console.log("The first half is " + firstHalf);
			console.log("The second half is " + secondHalf);

			if (firstHalf.indexOf(requiredNumber) > -1) {
				// it must be in this numbers
				searchArray(firstHalf);
			} else if (secondHalf.indexOf(requiredNumber) > -1) {
				// it must be in this numbers
				searchArray(secondHalf);
			} else {
				console.log('something went wrong');
			}
		} else {
			console.log(array);
		}

	}

	searchArray(arrayToSearch);

})();