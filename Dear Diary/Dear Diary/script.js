function _(id){
    return document.getElementById(id)
}
function getRs() {
    let txt=_('txt').value
    const d=new Date()
    

    _('rs').innerHTML+= `<div class="card"><p>${txt}</p>
    <small>${d.toLocaleTimeString()},${d.toLocaleDateString()}</small></div>`
}
ohh

// Function to save the diary entry to local storage
function saveEntry() {
    var entry = document.getElementById('diary-entry').value;
    localStorage.setItem('diaryEntry', entry);
    alert('Entry saved!');
}

// Load the saved entry when the page loads
window.onload = function() {
    var savedEntry = localStorage.getItem('diaryEntry');
    if (savedEntry) {
        _('txt').value = savedEntry;
    }
};