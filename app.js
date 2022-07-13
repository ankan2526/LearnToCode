const a = document.querySelectorAll(".challenge-list-item");

let arrays = "";
const front = "'https://www.hackerrank.com/challenges/"
const end = "'"

for (let x of a) {
    let y = ""
    for (let i of x.innerText) {
        if (i == '\n') {
            break;
        }
        y += i;
    }

    arrays += `<a href=${front + x.getAttribute('data-attr1') + end}> ${y} </a> `;
}

console.log(arrays)