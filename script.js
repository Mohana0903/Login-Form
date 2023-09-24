document.addEventListener('DOMContentLoaded', function () {

    function handleSubmitClick() {
    
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phoneno = document.getElementById('phoneno').value;
        var age = document.getElementById('age').value;

        clearErrorMessages();

        if (name === '' || !/^[a-zA-Z\s]*$/.test(name)) {
            displayErrorMessage('nameError', 'Please enter a valid name with alphabets only.');
            return;
        }

        if (phoneno === '' || !/^\+[0-9]{12}$/.test(phoneno) || /(0123456789|1234567890)/.test(phoneno)) {
            if (phoneno === '') {
                displayErrorMessage('phonenoError', 'Please enter a valid phone number in the format: +123456789012');
            } else {
                displayErrorMessage('phonenoError', 'Please enter a valid phone number within 12 characters.');
            }
            return;
        }

        if (email === '' || !isValidEmail(email)) {
            displayErrorMessage('emailError', 'Please enter a valid email address.');
            return;
        }

        if (age === '' || isNaN(age) || parseInt(age) <= 0 || age.length < 2 || age.length > 2) {
            if (age === '') {
                displayErrorMessage('ageError', 'Please enter a valid age');
            } else {
                displayErrorMessage('ageError', 'Please enter a valid age between 10 and 99.');
            }
            return;
        }

        var newRow = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = name;
        var emailCell = document.createElement('td');
        emailCell.textContent = email;
        var phonenoCell = document.createElement('td');
        phonenoCell.textContent = phoneno;
        var ageCell = document.createElement('td');
        ageCell.textContent = age;

        newRow.appendChild(nameCell);
        newRow.appendChild(emailCell);
        newRow.appendChild(phonenoCell);
        newRow.appendChild(ageCell);

        var detailsTable = document.getElementById('detailsTable');
        detailsTable.appendChild(newRow);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneno').value = '';
        document.getElementById('age').value = '';

        showSuccessMessage();
    }

    function handleShowClick() {
        var tableContainer = document.getElementById('tableContainer');
        tableContainer.style.display = 'block';
    }

    function isValidEmail(email) {
        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(elementId, message) {
        var errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }

    function clearErrorMessages() {
        var errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function (element) {
            element.textContent = '';
        });
    }

    function showSuccessMessage() {
        var successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block'; 
        setTimeout(function () {
            successMessage.style.display = 'none'; 
        }, 10000); 
    }

    document.getElementById('submitBtn').addEventListener('click', handleSubmitClick);
    document.getElementById('showBtn').addEventListener('click', handleShowClick);
});