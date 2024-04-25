const btn = document.querySelector(".btn");
const adviceContainer = document.querySelector(".advice");
const adviceId = document.querySelector(".id");

const renderAdvice = function (advice, id) {
    adviceContainer.textContent = `"${advice}"`;
    adviceId.textContent = id;
};

const getAdvice = function () {
    fetch(`https://api.adviceslip.com/advice`)
        .then((response) => response.json())
        .then((data) => {
            const {
                slip: { advice, id },
            } = data;
            renderAdvice(advice, id);
            // console.log(advice, id);
        });
};

btn.addEventListener("click", () => getAdvice());
