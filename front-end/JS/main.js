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
});

const checkboxHandle = () => {
  const help = document.querySelector("#help").checked;
  const rental = document.querySelector("#rental").checked;
  const activeCheckOne = document.querySelector(".checkbox__active__help");
  const activeCheckTwo = document.querySelector(".checkbox__active__rental");

  if (help) {
    activeCheckOne.classList.add("show");
  } else {
    activeCheckOne.classList.remove("show");
  }

  if (rental) {
    activeCheckTwo.classList.add("show");
  } else {
    activeCheckTwo.classList.remove("show");
  }
};

const headerHandle = (type) => {
  const ballSchedule = document.querySelector(".ball__schedule");
  const partners = document.querySelector(".partners");
  const souvenirs = document.querySelector(".souvenirs");
  const contacts = document.querySelector(".form");
  if (type === "Наполнение вечера") {
    ballSchedule.scrollIntoView({ behavior: "smooth" });
  } else if (type === "Партнёры") {
    partners.scrollIntoView({ behavior: "smooth" });
  } else if (type === "Сувениры") {
    souvenirs.scrollIntoView({ behavior: "smooth" });
  } else if (type === "Контакты") {
    contacts.scrollIntoView({ behavior: "smooth" });
  }
};

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

const handlePopup = (state) => {
  const popup = document.querySelector(".participation__popup__wrap");
  const image = document.querySelector(".popup__image");
  if (state) {
    let randomImage = Math.random();
    if (randomImage > 0.5) {
      image.src = "./IMG/bannerFirst.png";
    } else {
      image.src = "./IMG/bannerSecond.png";
    }
    popup.classList.add("show__popup");
  } else {
    popup.classList.remove("show__popup");
  }
};
