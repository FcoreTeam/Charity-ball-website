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

const sendRequest = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/send_mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Отправлено");
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
