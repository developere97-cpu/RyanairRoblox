// ---------- TAB FUNCTIONALITY ----------
function openTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// ---------- BOOKING FUNCTIONALITY ----------
const septemberDates = [];
for(let i=1; i<=30; i++) septemberDates.push(`September ${i}, 2025`);

function getRandomDate() {
    return septemberDates[Math.floor(Math.random()*septemberDates.length)];
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
}

document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = getRandomDate();
    const time = getCurrentTime();
    const notify = document.getElementById('bookingNotification');
    notify.style.display='block';
    notify.innerHTML=`Your flight from <strong>${from}</strong> to <strong>${to}</strong> is booked for <strong>${date}</strong> at <strong>${time}</strong>.<br>⚠️ Time Schedules on Discord #flights.<br>🚨 ATC Shortages Sept 1 > Sept 12.<br>Screenshot and send this to your airline's Discord immediately before flight.`;
});

// ---------- CHECK-IN FUNCTIONALITY ----------
function updateCheckinStatus() {
    document.querySelectorAll('#checkinList .status').forEach(span=>{
        span.textContent = Math.random() < 0.5 ? 'Available' : 'Closed';
    });
}

// ---------- TAXI FUNCTIONALITY ----------
document.getElementById('taxiForm').addEventListener('submit', function(e){
    e.preventDefault();
    const from = document.getElementById('taxiFrom').value;
    const to = document.getElementById('taxiTo').value;
    const notify = document.getElementById('taxiNotification');
    notify.style.display='block';
    notify.innerHTML = Math.random() < 0.5 
        ? `Taxi Drivers are Available from ${from} to ${to}. Only 25R$ a Ride!` 
        : `Taxi Drivers are Unavailable from ${from} to ${to}.`;
});

// ---------- BAG DROP FUNCTIONALITY ----------
function updateBagDrop() {
    const status = document.getElementById('bagdropStatus');
    status.textContent = Math.random() < 0.5 ? 'Bag Drop is Available' : 'Bag Drop is Unavailable';
}

// ---------- SUITCASE TAG FUNCTIONALITY ----------
function generateSuitcaseTag() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let tag = '';
    // 4 letters + 2 numbers
    for (let i=0; i<4; i++) tag += letters.charAt(Math.floor(Math.random()*letters.length));
    for (let i=0; i<2; i++) tag += numbers.charAt(Math.floor(Math.random()*numbers.length));
    const classes = ['Economy', 'Priority (15R$)', 'Economy'];
    const randomClass = classes[Math.floor(Math.random()*classes.length)];
    const display = document.getElementById('suitcaseTag');
    display.style.display = 'block';
    display.innerHTML = `Your Suitcase Tag: <strong>${tag}</strong> - <strong>${randomClass}</strong>`;
}
