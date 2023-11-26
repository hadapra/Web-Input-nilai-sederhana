document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addNilai();
    });
});

function addNilai() {
    const textNama = document.getElementById('title').value;
    const nilai = parseInt(document.getElementById('nilai').value);

    const grade = getGrade(nilai);
    const ganjilGenap = isEvenOrOdd(nilai);
    displayGrade(textNama, nilai, grade, ganjilGenap);
}

function getGrade(nilai) {
    if (nilai >= 85 && nilai <= 100) {
        return 'A';
    } else if (nilai >= 75 && nilai < 85) {
        return 'B';
    } else if (nilai >= 60 && nilai < 75) {
        return 'C';
    } else {
        return 'D';
    }
}

function isEvenOrOdd(nilai) {
    return nilai % 2 === 0 ? 'Genap' : 'Ganjil';
}

function displayGrade(nama, nilai, grade, ganjilGenap) {
    const gradesContainer = document.getElementById('grades');
    const resultElement = document.createElement('p');
    resultElement.innerHTML = `Berdasarkan hasil yang diperoleh, ${nama} mendapatkan hasil : <br> Nilai: ${nilai} <br> Grade: ${grade} <br> Bilangan ${ganjilGenap} <br>`;
    gradesContainer.appendChild(resultElement);
}


