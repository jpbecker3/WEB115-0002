    // JavaScript code for form validation
	// Prevent form from submitting
    document.forms['myForm'].addEventListener('submit', function(event) {
    event.preventDefault();
    

      // Retrieve the input field value
      var inputValue = document.forms['myForm'].elements['inputField'].value;
   

      // Regular expression pattern for alphanumeric input
      
        let regex = /^[a-zA-Z0-9]*$/;

      // Check if the input value matches the pattern
      validateInput(inputValue);

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

          function validateInput() {
          if (!regex.test(inputValue)) {
              alert("Invalid input, not alphanumeric.");
              return;
          }

          alert("Form submitted successfully!");

          document.getElementById("myForm").reset();
        }
      });