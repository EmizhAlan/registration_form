//code
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === "" || password === "") {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var existingUser = users.find(function(user) {
      return user.username === username;
    });

    if(existingUser) {
      alert('Это имя пользователя уже занято');
      return;
    }

    users.push({
      username: username,
      password: password
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Регистрация прошла успешно!');
  });