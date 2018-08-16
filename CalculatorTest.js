var calc_obj = require("./Calculator_Objects.js");

describe('Chain locators demo',function() {  


	beforeEach(function() {
		calc_obj.getURL();
	})

	it('Testing Calculator Functionality',function() {
		

//		repeater ,  chain locators, And css for identical tags

		calc_obj.firstinput.sendKeys("3");
		calc_obj.secondinput.sendKeys("5");

		calc_obj.goButton.click();

		calc_obj.result.getText().then(function(text)
				{

			console.log(text);
				})


//				element(by.model("operator")).element(by.css("option:nth-child(4)")).click();


	})
	
	afterEach(function() {
		//Here i can write the code like 1.Take screenshots 2.Reports 3.Close browser
		console.log("Test Completed");
		
	})

})