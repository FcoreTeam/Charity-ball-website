const sendBtn = document.querySelector(".send__btn");

const compareData = (initials, phone, telegram, people, help, rental) => {
  let data = {
    initials,
    phone,
    telegram,
    people,
    help,
    rental,
  };
  return data;
};

sendBtn.addEventListener("click", () => {
  const initials = document.querySelector("#initials").value;
  const phone = document.querySelector("#phone").value;
  const telegram = document.querySelector("#telegram").value;
  const people = document.querySelector("#people").value;

  const help = document.querySelector("#help").checked;
  const rental = document.querySelector("#rental").checked;

  let data = compareData(initials, phone, telegram, people, help, rental);
  sendRequest(data);
  console.log(data);
});

const checkboxHandle = () => {
  const help = document.querySelector("#help").checked; // Получаем состояние чекбокса "help"
  const rental = document.querySelector("#rental").checked; // Получаем состояние чекбокса "rental"
  const activeCheckOne = document.querySelector(".checkbox__active__help"); // Элемент, который будет показан/скрыт для "help"
  const activeCheckTwo = document.querySelector(".checkbox__active__rental"); // Элемент, который будет показан/скрыт для "rental"

  // Управляем отображением для чекбокса "help"
  if (help) {
    activeCheckOne.classList.add("show"); // Показываем элемент, если чекбокс "help" отмечен
  } else {
    activeCheckOne.classList.remove("show"); // Скрываем элемент, если чекбокс "help" не отмечен
  }

  // Управляем отображением для чекбокса "rental"
  if (rental) {
    activeCheckTwo.classList.add("show"); // Показываем элемент, если чекбокс "rental" отмечен
  } else {
    activeCheckTwo.classList.remove("show"); // Скрываем элемент, если чекбокс "rental" не отмечен
  }
};

// Не забудьте добавить обработчик события для чекбоксов
document.querySelector("#help").addEventListener("change", checkboxHandle);
document.querySelector("#rental").addEventListener("change", checkboxHandle);

const sendRequest = async (data) => {
  try {
    const response = await fetch("https://api.bal-kekina.ru/send_mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Отправлено");
      return await response.json();
    } else {
      const errorData = await response.json();
      throw new Error(
        `Ошибка: ${response.status} - ${
          errorData.message || response.statusText
        }`
      );
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
  }
};
const burgerHandle = (state) => {
  const burger = document.querySelector(".burger__menu");
  if (state === 1) {
    burger.classList.add("burger__open");
  } else {
    burger.classList.remove("burger__open");
  }
};
