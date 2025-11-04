// Находим кнопку по её id
const button = document.getElementById('myButton');

// Добавляем действие при клике
button.addEventListener('click', function() {
    // Меняем текст на кнопке
    button.textContent = 'Ура! Вы нажали!';
    
    // Меняем цвет фона страницы
    document.body.style.backgroundColor = '#ffeaa7';
    
    // Показываем сообщение
    alert('Кнопка работает! JavaScript подключен!');
});