var value = 42;

	if(value >= 53){
		value += 42;
	} else {
		value -= 13;
	}
	console.log(value);

	var number = "11";
	value += number;
	console.log(value);

	simpleArray = [];

	for(i = 0; i < value.length; i++) {
		simpleArray[i] = value.charAt(i);
	}
	console.log(simpleArray);

	simpleArray.pop();
	simpleArray.shift();

	console.log(simpleArray);

	var newNumbers = "";

	for (var i = simpleArray.length - 1; i >= 0; i--) {
		newNumbers += simpleArray[i];
	};

	console.log(newNumbers);
	
	newNumbers = parseInt(newNumbers);
	value = parseInt(value);

	console.log(newNumbers);
	console.log(value);

	value += newNumbers;
	console.log(value);

	if (value < 60) {
		value = 14;
	} else if (value == 2930) {
		value = 27;
	} else {
		value = 2;
	}
	console.log(value);

	i=10;
	while (i>0) {
		value++;
		i--;
	}

	console.log(value);

	function subtractOff (val) {
		val = val.toString();

		if (val.length > 1) {
			val = val.slice(1);
			return val; 
		}
		else{
		return val;
		}
	}

	value = subtractOff(value);
	console.log(value);
