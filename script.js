document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form data
    var tierdness = document.getElementById('tierdness').value;
    var dryCough = document.getElementById('dryCough').value;
    var difficultyBreathing = document.getElementById('difficultyBreathing').value;
    var soreThroat = document.getElementById('soreThroat').value;
    var noneSymptom = document.getElementById('noneSymptom').value;
    var pains = document.getElementById('pains').value;
    var nasalCongestion = document.getElementById('nasalCongestion').value;
    var runningNose = document.getElementById('runningNose').value;
    var none_Experiencing = document.getElementById('none_Experiencing').value;
 

    // Create an object to hold the form data
    var formData = {
        tierdness: tierdness,
        dryCough: dryCough,
        difficultyBreathing: difficultyBreathing,
        soreThroat: soreThroat,
        noneSymptom: noneSymptom,
        pains: pains,
        nasalCongestion: nasalCongestion,
        runningNose: runningNose,
        none_Experiencing: none_Experiencing,

    };

    // Send the form data to the server for processing (e.g., making predictions)
    // You can use XMLHttpRequest, Fetch API, or any other method to send the data to your Django backend
    // Example using Fetch API:
    fetch('/predict/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server (e.g., display predictions to the user)
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});