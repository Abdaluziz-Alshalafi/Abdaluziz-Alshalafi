// State management
let currentUser = null;
let projects = [];

// UI Functions
function showLoginForm(type) {
    document.getElementById('studentLogins').classList.add('hidden');
    document.getElementById('adminLogins').classList.add('hidden');
    // document.getElementById('studentDashboard').classList.add('hidden');
    document.getElementById('adminDashboards').classList.add('hidden');
    
    document.getElementById(`${type}Logins`).classList.remove('hidden');
}

function handleLogin(type, event) {
    event.preventDefault();
    
    // Simulate authentication
    currentUser = {
        type: type,
        id: type === 'student' ? 'STD123' : 'ADM456'
    };
    
    showDashboard(type);
}


function showDashboard(type) {
    document.getElementById('studentLogins').classList.add('hidden');
    
    document.getElementById('adminLogins').classList.add('hidden');
    
    if (type === 'students') {
         window.location.href = 'home.html';

        updateProjectStatus();
    } else {
        document.getElementById('adminDashboards').classList.remove('hidden');
        updatePendingProjects();
    }
}