// Add your code here
function submitData(name, email) {
  const userObj = {
    name: `${name}`,
    email: `${email}`,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userObj),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((data) => appendID(data))
    .catch((errorObj) => handleError(errorObj));
}

function appendID(data) {
  const id = data["id"];
  const body = document.querySelector("body");
  body.innerHTML = `<p>${id}</p>`;
}

function handleError(errorObj) {
  const msg = errorObj["message"];
  const body = document.querySelector("body");
  body.innerHTML = `<p>${msg}</p>`;
}

//submitData(a, "a@aol.com");
