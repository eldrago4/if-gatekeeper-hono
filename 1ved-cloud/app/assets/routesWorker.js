function addRow() {
    const container = document.getElementById('routeContainer');
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.innerHTML = `
        <input type="text" placeholder="Flight Number">
        <input type="text" placeholder="Departure ICAO">
        <input type="text" placeholder="Arrival ICAO">
        <input type="number" placeholder="Hours" min="0" max="23">
        <input type="number" placeholder="Minutes" min="0" max="59">
        <select>
            <!-- Airbus -->
            <option>Airbus 320</option>
            <option>Airbus A220-300</option>
            <option>Airbus A318</option>
            <option>Airbus A319</option>
            <option>Airbus A321</option>
            <option>Airbus A330-300</option>
            <option>Airbus A330-900</option>
            <option>Airbus A359</option>
            <option>Airbus A380</option>

            <!-- Boeing -->
            <option>Boeing 737-700</option>
            <option>Boeing 737-800</option>
            <option>Boeing 737-900</option>
            <option>Boeing 737MAX</option>
            <option>Boeing 747-400</option>
            <option>Boeing 747-8</option>
            <option>Boeing 757-200</option>
            <option>Boeing 767-300</option>
            <option>Boeing 767-300ER</option>
            <option>Boeing 777-200ER</option>
            <option>Boeing 777-200LR</option>
            <option>Boeing 777-300ER</option>
            <option>Boeing 777F</option>
            <option>Boeing 787-8</option>
            <option>Boeing 787-9</option>
            <option>Boeing 787-10</option>

            <!-- Bombardier -->
            <option>Bombardier Dash 8 Q-400</option>
            <option>CRJ-700</option>
            <option>CRJ-900</option>
            <option>CRJ-1000</option>

            <!-- Embraer -->
            <option>E190</option>
            <option>E195</option>
            <option>ERJ-175</option>
            <option>ERJ-190</option>

            <!-- McDonnell Douglas -->
            <option>DC-10</option>
            <option>DC-10F</option>
            <option>MD-11</option>
            <option>MD-11F</option>

            <!-- Miscellaneous -->
            <option>TBM-930</option>

        </select>
    `;
    container.appendChild(newRow);
}

function deleteRow() {
    const container = document.getElementById('routeContainer');
    if (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
}

async function submitForm() {
    const container = document.getElementById('routeContainer');
    const rows = container.getElementsByClassName('row');

    let routes = [];
    let csvRows = [["flight_number", "departure_icao", "arrival_icao", "aircraft_names", "flight_time_hours", "flight_time_minutes"]];

    for (let row of rows) {
        const inputs = row.getElementsByTagName('input');
        const select = row.getElementsByTagName('select')[0];

        const fnum = inputs[0].value.trim().toUpperCase();
        const fno = fnum.slice(0, 5);
        const startICAO = inputs[1].value.trim().toUpperCase();
        const endICAO = inputs[2].value.trim().toUpperCase();
        const hours = inputs[3].value.trim();
        const minutes = inputs[4].value.trim();
        const aircraft = select.value;

        if (!fnum || !startICAO || !endICAO || !hours || !minutes || !aircraft) {
            alert("All fields must be filled in all rows.");
            return;
        }
        routes.push({ fno, startICAO, endICAO });
        csvRows.push([fnum, startICAO, endICAO, aircraft, hours, minutes]);
    }

    try {
        const response = await fetch('https://1ved.cloud/api/submit-routes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ routes, csvRows })
        });

        if (response.ok) {
            const data = await response.json(); 

            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
            }
        } else {
            alert(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error submitting routes:", error);
        alert(error);
    }
}

