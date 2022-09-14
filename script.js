async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip;
  } catch (e) {
    throw e;
  }
}

async function displayAdvice() {
  try {
    const advice = await getAdvice();
    document.getElementById("advice-id").innerHTML = advice.id;
    document.getElementById("advice-text").innerHTML = advice.advice;
  } catch (e) {
    throw e;
  }
}
