// List of all available time zones
const allTimezones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'America/Anchorage', 'Pacific/Honolulu', 'America/Toronto', 'America/Mexico_City',
    'America/Buenos_Aires', 'America/Sao_Paulo', 'Europe/London', 'Europe/Paris',
    'Europe/Berlin', 'Europe/Moscow', 'Europe/Istanbul', 'Africa/Cairo', 'Africa/Lagos',
    'Africa/Johannesburg', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok', 'Asia/Hong_Kong',
    'Asia/Shanghai', 'Asia/Tokyo', 'Australia/Sydney', 'Australia/Melbourne',
    'Pacific/Auckland', 'Pacific/Fiji', 'Pacific/Tongatapu'
];

// Store selected time zones in localStorage
let selectedTimezones = JSON.parse(localStorage.getItem('selectedTimezones')) || ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

// Initialize the app
function init() {
    renderClocks();
    updateClocks();
    setInterval(updateClocks, 1000);
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    const addBtn = document.getElementById('addBtn');
    const searchInput = document.getElementById('searchInput');
    const tzButtons = document.querySelectorAll('.tz-btn');

    addBtn.addEventListener('click', addTimezoneFromInput);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTimezoneFromInput();
    });

    tzButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tz = btn.getAttribute('data-tz');
            addTimezone(tz);
        });
    });
}

// Add timezone from input
function addTimezoneFromInput() {
    const input = document.getElementById('searchInput');
    const tz = input.value.trim();

    if (!tz) {
        alert('Please enter a timezone');
        return;
    }

    if (addTimezone(tz)) {
        input.value = '';
    }
}

// Add timezone to the list
function addTimezone(tz) {
    // Validate timezone
    try {
        new Date().toLocaleString('en-US', { timeZone: tz });
    } catch (e) {
        alert(`Invalid timezone: ${tz}`);
        return false;
    }

    // Check if already added
    if (selectedTimezones.includes(tz)) {
        alert('This timezone is already added');
        return false;
    }

    // Add timezone
    selectedTimezones.push(tz);
    localStorage.setItem('selectedTimezones', JSON.stringify(selectedTimezones));
    renderClocks();
    return true;
}

// Remove timezone
function removeTimezone(tz) {
    selectedTimezones = selectedTimezones.filter(t => t !== tz);
    localStorage.setItem('selectedTimezones', JSON.stringify(selectedTimezones));
    renderClocks();
}

// Render all clocks
function renderClocks() {
    const container = document.getElementById('clocksContainer');
    container.innerHTML = '';

    if (selectedTimezones.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon">🕐</div>
                <h3>No timezones selected</h3>
                <p>Add a timezone to get started!</p>
            </div>
        `;
        return;
    }

    selectedTimezones.forEach(tz => {
        const clockCard = createClockCard(tz);
        container.appendChild(clockCard);
    });
}

// Create a clock card element
function createClockCard(tz) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = `clock-${tz}`;

    const timezoneName = tz === 'UTC' ? 'UTC' : tz.split('/')[1].replace(/_/g, ' ');
    const regionName = tz === 'UTC' ? 'Coordinated Universal Time' : tz.split('/')[0];

    card.innerHTML = `
        <div class="timezone-name">${regionName}</div>
        <div class="digital-time" id="time-${tz}">00:00:00</div>
        <div class="time-details">
            <div class="date-display" id="date-${tz}">Loading...</div>
            <button class="remove-btn" onclick="removeTimezone('${tz}')">Remove</button>
        </div>
    `;

    return card;
}

// Update all clocks
function updateClocks() {
    selectedTimezones.forEach(tz => {
        updateClock(tz);
    });
}

// Update a single clock
function updateClock(tz) {
    const timeElement = document.getElementById(`time-${tz}`);
    const dateElement = document.getElementById(`date-${tz}`);

    if (!timeElement || !dateElement) return;

    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
        timeZone: tz,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const dateString = now.toLocaleDateString('en-US', {
        timeZone: tz,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
