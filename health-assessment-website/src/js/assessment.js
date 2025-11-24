// This file manages the functionality of the assessment form, including form validation and submission handling.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('assessment-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Handle form submission (e.g., send data to a server or display a success message)
            alert('Assessment submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return valid;
    }
});

document.getElementById('assessmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Calculate score
    let totalScore = 0;
    for (let i = 1; i <= 9; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            totalScore += parseInt(selected.value);
        }
    }

    // Generate results
    const form = document.getElementById('assessmentForm');
    const resultsDiv = document.getElementById('results');
    const resultText = document.getElementById('resultText');
    const recommendations = document.getElementById('recommendations');

    let resultMessage = '';
    let recommendationsList = [];

    if (totalScore <= 9) {
        resultMessage = `<strong>Your Score: ${totalScore}/27 - Good Mental Health</strong><br>Your responses suggest that you're managing well emotionally. Keep up with healthy habits and reach out if things change.`;
        recommendationsList = [
            'Continue your current healthy coping strategies',
            'Maintain social connections with friends and family',
            'Get regular exercise and sleep',
            'Practice mindfulness or relaxation techniques regularly'
        ];
    } else if (totalScore <= 15) {
        resultMessage = `<strong>Your Score: ${totalScore}/27 - Moderate Concern</strong><br>Your responses indicate some stress or emotional challenges. It would be helpful to talk with someone about what you're experiencing.`;
        recommendationsList = [
            'Consider talking to a school counselor or trusted adult',
            'Try stress-reduction techniques like meditation or yoga',
            'Increase time with supportive friends and family',
            'Engage in activities you enjoy'
        ];
    } else if (totalScore <= 21) {
        resultMessage = `<strong>Your Score: ${totalScore}/27 - Significant Concern</strong><br>Your responses suggest you may be struggling with significant stress or depression. Please reach out for professional support.`;
        recommendationsList = [
            'Contact a mental health professional or therapist',
            'Call your school counselor for an appointment',
            'Talk to a trusted adult about how you\'re feeling',
            'Reach out to a crisis line: 988 or text HOME to 741741'
        ];
    } else {
        resultMessage = `<strong>Your Score: ${totalScore}/27 - High Concern</strong><br>Your responses suggest serious emotional distress. Please reach out for help immediately.`;
        recommendationsList = [
            'URGENT: Call National Suicide Prevention Lifeline: 988',
            'Text HOME to 741741 for immediate crisis support',
            'Talk to a trusted adult, parent, or school counselor',
            'If in immediate danger, call 911 or go to the nearest emergency room'
        ];
    }

    resultText.innerHTML = resultMessage;
    
    recommendations.innerHTML = recommendationsList
        .map(rec => `<li>${rec}</li>`)
        .join('');

    form.style.display = 'none';
    resultsDiv.style.display = 'block';
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});