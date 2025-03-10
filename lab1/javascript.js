// Обработка отправки формы регистрации
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    alert('Форма успешно отправлена!');
});