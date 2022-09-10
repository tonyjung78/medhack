const aptButton = document.getElementById("apt");

const noteSubmit = document.getElementById("noteSubmit");

aptButton.addEventListener("click", storeData);
aptButton.addEventListener("click", loadPatient);
noteSubmit.addEventListener("click", addNote);

function storeData() {
    localStorage.setItem("name", document.getElementById("patientName").value);
    localStorage.setItem("date", document.getElementById("month").value + "/" + document.getElementById("date").value + "/" + document.getElementById("year").value);
    localStorage.setItem("time", document.getElementById("time").value);
    localStorage.setItem("reason", document.getElementById("reason").value);
}

function loadPatient() {
    window.location.href = 'patientlist.html';
}

function addAppointment() {
    if (localStorage.getItem("name") !== "Choose...") {
        const aptTable = document.getElementById("aptTable");
        const tableLength = aptTable.rows.length;
        const row = aptTable.insertRow(tableLength);
        const cell0 = row.insertCell(0)
        const cell1 = row.insertCell(1)
        const cell2 = row.insertCell(2)
        const cell3 = row.insertCell(3)
        const cell4 = row.insertCell(4)
        const cell5 = row.insertCell(5)
        cell0.innerHTML = tableLength;
        cell1.innerHTML = localStorage.getItem("date");
        cell2.innerHTML = localStorage.getItem("time");
        cell3.innerHTML = localStorage.getItem("name");
        cell4.innerHTML = localStorage.getItem("reason");
        // cell5.innerHTML = <a href="#">x</a>;
        cell5.innerHTML = '<a href="#">x</a>';
    }
}

function addNote() {
    console.log("hi");
    const date = document.getElementById("noteYear").value + "/" + document.getElementById("noteMonth") + "/" +document.getElementById("noteDays");
    const area = document.getElementById("area").value;
    const title = document.getElementById("noteTitle").value;
    const noteTable = document.getElementById("noteTable");
    const noteTableLength = noteTable.row.length;
    const row = aptTable.insertRow(noteTableLength);
    const cell0 = row.insertCell(0)
    const cell1 = row.insertCell(1)
    const cell2 = row.insertCell(2)
    const cell3 = row.insertCell(3)
    cell0.innerHTML = tableLength;
    cell1.innerHTML = date;
    cell2.innerHTML = area;
    cell3.innerHTML = title;
}