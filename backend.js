function getUserInput() {
    const studentType = prompt("Enter student type (Bachelor or Master):").toLowerCase().trim();
    const residency = prompt("Enter residency (in-state or out-state):").toLowerCase().trim();
    const credits = parseInt(prompt("Enter number of credits:"));

    if (!studentType || !residency || isNaN(credits) || 
        (studentType !== 'bachelor' && studentType !== 'master') || 
        (residency !== 'in-state' && residency !== 'out-state')) {
        alert("Invalid input. Please ensure all inputs are correct.");
        return;
    }

    calculateFees(studentType, residency, credits);
}

function calculateFees(studentType, residency, credits) {
    let registrationFee, tuitionRate;

    // Determine registration fee and tuition rate
    if (studentType === 'bachelor') {
        registrationFee = (residency === 'in-state') ? 200 : 600;
        tuitionRate = (residency === 'in-state') ? 350 : 700;
    } else if (studentType === 'master') {
        registrationFee = (residency === 'in-state') ? 300 : 900;
        tuitionRate = (residency === 'in-state') ? 450 : 900;
    } else {
        alert("Invalid student type.");
        return;
    }

    // Calculate tuition and total fee
    const tuition = tuitionRate * credits;
    const totalFee = registrationFee + tuition;

    // Display results
    document.getElementById('result').innerHTML = `
        <h3>Fee Summary</h3>
        <p>Registration Fee: $${registrationFee}</p>
        <p>Tuition Rate (per credit): $${tuitionRate}</p>
        <p>Tuition: $${tuition}</p>
        <p>Total Fee: $${totalFee}</p>
    `;
}
