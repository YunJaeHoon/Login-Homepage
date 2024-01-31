let isValidId = false;
let isValidPassword = false;
let isValidNickname = false;
let isValidIntroduce = true;

const id = document.getElementById('id');
const password = document.getElementById('password');
const nickname = document.getElementById('nickname');
const introduce = document.getElementById('introduce');
const introduce_length = document.getElementById('introduce_length');
const login_button = document.getElementById('login_button');

const id_text = document.getElementById('id_text');
const password_text = document.getElementById('password_text');
const nickname_text = document.getElementById('nickname_text');

const english_test = /[a-zA-Z]/;
const number_test = /[0-9]/;

const buttonActivate = () => {
  if(isValidId === true && isValidPassword === true && isValidNickname === true && isValidIntroduce === true)
    login_button.disabled = false;
  else
    login_button.disabled = true;
};

id.addEventListener('input', () => {
  if(id.value.length >= 8 && id.value.length <= 12)
  {
    id_text.innerText = " ✔";
    id_text.style.color = "#11a803";
    isValidId = true;
  }
  else
  {
    id_text.innerText = "* 아이디는 8자 이상, 12자 이하여야 합니다.";
    id_text.style.color = "black";
    isValidId = false;
  }

  buttonActivate();
});

password.addEventListener('input', () => {
  if(password.value.length >= 8 && password.value.length <= 12 && english_test.test(password.value) && number_test.test(password.value))
  {
    password_text.innerText = " ✔";
    password_text.style.color = "#11a803";
    isValidPassword = true;
  }
  else
  {
    password_text.innerText = "* 비밀번호는 영문과 숫자의 조합으로 8자 이상, 12자 이하여야 합니다.";
    password_text.style.color = "black";
    isValidPassword = false;
  }

  buttonActivate();
});

nickname.addEventListener('input', () => {
  if(nickname.value.length >= 1 && nickname.value.length <= 10)
  {
    nickname_text.innerText = " ✔";
    nickname_text.style.color = "#11a803";
    isValidNickname = true;
  }
  else
  {
    nickname_text.innerText = "* 닉네임은 10자 이하여야 합니다.";
    nickname_text.style.color = "black";
    isValidNickname = false;
  }

  buttonActivate();
});

introduce.addEventListener('input', () => {
  introduce_length.innerText = `${introduce.value.length}/100`

  if(introduce.value.length <= 100)
  {
    introduce_length.style.color = "gray";
    isValidIntroduce = true;
  }
  else
  {
    introduce_length.style.color = "red";
    isValidIntroduce = false;
  }

  buttonActivate();
});