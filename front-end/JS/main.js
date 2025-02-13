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

const sendRequest = async (data) => {
  return await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
};
