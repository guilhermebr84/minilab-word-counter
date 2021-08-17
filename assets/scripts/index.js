const wordCountInput = document.getElementById("wordCountInput");
const btn = document.getElementById("btn");
const wordCount = document.getElementById("wordCount");

btn.addEventListener("click", () => {
    let count = wordCountInput.value.split(' ').length
    wordCount.innerText = count
});