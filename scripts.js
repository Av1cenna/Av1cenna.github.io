// Create an object to store the form data
let formData = {};

// Function to validate the email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Function to validate phone number (10-digit)
function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

// Handle form submission
//document.getElementById('contactForm').addEventListener('submit', function(event) {
//    event.preventDefault(); // Prevent page reload on submit

function submit() {
    
    // Collect form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Collect separate address fields
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;

    // Get rating values
    const question1 = parseInt(document.getElementById('question1').value, 10);
    const question2 = parseInt(document.getElementById('question2').value, 10);
    const question3 = parseInt(document.getElementById('question3').value, 10);
    const question4 = parseInt(document.getElementById('question4').value, 10);
    const question5 = parseInt(document.getElementById('question5').value, 10);

    // Form validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!validatePhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (!street.trim() || !city.trim() || !state.trim() || !zip.trim()) {
        alert("Please enter a valid address.");
        return;
    }

    // Check if any rating is missing or invalid
    if (isNaN(question1) || isNaN(question2) || isNaN(question3) || isNaN(question4) || isNaN(question5)) {
        alert("Please provide ratings for all the questions.");
        return;
    }

    // Concatenate the address into a single string
    const address = `${street}, ${city}, ${state} ${zip}`;

    // Store form data in the formData object
    formData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        question1,
        question2,
        question3,
        question4,
        question5
    };

    // Log the formData to the console
    console.log(formData);

    // Display results on the website
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Form Results</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Website Satisfaction:</strong> ${formData.question1}</p>
        <p><strong>Customer Service Rating:</strong> ${formData.question2}</p>
        <p><strong>Likelihood to Recommend:</strong> ${formData.question3}</p>
        <p><strong>Website Navigation:</strong> ${formData.question4}</p>
        <p><strong>Product Selection Satisfaction:</strong> ${formData.question5}</p>
    `;

    // Calculate the average of numeric ratings
    const averageRating = (
        (formData.question1 + formData.question2 + formData.question3 + formData.question4 + formData.question5) / 5
    ).toFixed(2);  // Round the average to two decimal places

    // Set color based on the average rating
    let averageColor = '';
    if (averageRating <= 3.4) {
        averageColor = 'red';
    } else if (averageRating <= 7.1) {
        averageColor = 'orange';
    } else {
        averageColor = 'green';
    }

    // Append the average result to the results div
    resultsDiv.innerHTML += `
        <h3 class="average" style="color: ${averageColor};">Average Rating: ${averageRating}</h3>
        <p><strong>Overall: </strong>${formData.firstName} ${formData.lastName} (${formData.email}): ${averageRating}</p>
    `;
});
