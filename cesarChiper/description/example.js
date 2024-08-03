const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function shiftAlphabet(shift) {
    const shifted = alphabet.slice(shift) + alphabet.slice(0, shift);
    return shifted;
}

function updateTable() {
    const shiftAmount = parseInt(document.getElementById('shiftInput').value, 10);
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    // Clear existing table rows
    row1.innerHTML = '';
    row2.innerHTML = '';

    // Generate the shifted alphabet
    const shiftedAlphabet = shiftAlphabet(shiftAmount);

    // Populate the table rows with alphabet and shifted alphabet
    for (let i = 0; i < alphabet.length; i++) {
        const td1 = document.createElement('td');
        td1.textContent = alphabet[i];
        row1.appendChild(td1);

        const td2 = document.createElement('td');
        td2.textContent = shiftedAlphabet[i];
        row2.appendChild(td2);
    }
}

// Initial table creation with shift amount 0
window.onload = updateTable;