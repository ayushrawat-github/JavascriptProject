const btnEl = document.getElementById("btn");
const quote1 = document.getElementById("qoute");

const apikey = "uOIdvoxJ9deBFEk9D3JPWw==WMwQnd81mWT8RfoK";
let category = "happiness";
const option = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};



async function getquote() {
  try {
      quote1.innerText = "updating.."
      btnEl.disabled = true;
      btnEl.innerText = "loading.."

      const apiurl = `https://api.api-ninjas.com/v1/quotes?category=`;
      const response = await fetch(apiurl, option);
      const data = await response.json();
      btnEl.disabled = false;
      btnEl.innerText = "TELL ME A QUOTE"

    if (data && data.length > 0) {
      quote1.innerText = data[0].quote;
    } else {
      quote1.innerText = "No quotes available . ";
    }
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a QUOTE";
    console.log(error);
  }
}
btnEl.addEventListener("click", getquote);
