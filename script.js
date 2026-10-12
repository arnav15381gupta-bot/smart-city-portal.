function cityAlert() {
    alert("System Status: All smart grids, transit routes, and municipal services are fully operational!");
}

function trackTransport() {
    alert("Connecting to live transit tracking servers... All buses and metros are running on time.");
}

function submitFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('citizenName').value;
    const msg = document.getElementById('responseMsg');
    
    msg.textContent = `Thank you, ${name}! Your feedback has been logged into the Smart City portal. Ticket ID: #SC-9824.`;
    
    document.getElementById('citizenName').value = '';
    document.getElementById('citizenEmail').value = '';
    document.getElementById('citizenMsg').value = '';
}
