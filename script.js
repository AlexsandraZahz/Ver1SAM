document.addEventListener('DOMContentLoaded', function () {
    const inputType = document.getElementById('input-type');
    const outputType = document.getElementById('output-type');
    const visualizationType = document.getElementById('visualization-type');
    const objectPath = document.getElementById('object-path');
    const browseButton = document.getElementById('browse-button');
    const clearButton = document.getElementById('clear-button');
    const startButton = document.getElementById('start-button');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.querySelector('.progress');
    const originalDisplay = document.getElementById('original-display');
    const resultDisplay = document.getElementById('result-display');
    const saveLocation = document.getElementById('save-location');

    function checkFields() {
        if (inputType.value && outputType.value && visualizationType.value && objectPath.value) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    }

    inputType.addEventListener('change', checkFields);
    outputType.addEventListener('change', checkFields);
    visualizationType.addEventListener('change', checkFields);
    objectPath.addEventListener('input', checkFields);

    browseButton.addEventListener('click', function () {
        alert('Функция выбора файла/папки будет реализована позже.');
        objectPath.value = '/путь/до/объекта';
        checkFields();
    });

    clearButton.addEventListener('click', function () {
        objectPath.value = '';
        checkFields();
    });

    startButton.addEventListener('click', function () {
        progressBar.style.display = 'block';
        progress.style.width = '0';
        startButton.disabled = true;

        setTimeout(() => {
            progress.style.width = '100%';
        }, 10);

        setTimeout(function () {
            progressBar.style.display = 'none';
            startButton.disabled = false;
            originalDisplay.innerHTML = '<img src="https://via.placeholder.com/300" alt="Исходное изображение">';
            resultDisplay.innerHTML = '<img src="https://via.placeholder.com/300" alt="Результат">';
            saveLocation.textContent = 'Результат сохранен в: /путь/до/результата';
        }, 3000);
    });
});