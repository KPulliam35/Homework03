console.log("Hello World")

// selecting the form from the dom
const words = document.querySelector("words")


// grabbing the data one element at a time
    console.log(document.querySelector("input[name='words']"));
    console.log(document.querySelector("input[name='words']").value);

// using a FormData object to get the data
    const words: any;
    console.log(words);
    const number = 77;
    const adjective = "sloppy";
    const pluralNoun = "yarn balls";
    const adverb = "waywardly";
    const anotherAdjective = "sheepish fame";
    console.log(number, adjective, pluralNoun, adverb, anotherAdjective)

// populaate the p element
    const p = document.querySelector("p")
// ternary: expression ? true : false
p.innerText = `Once upon a time a group of ${number} General Assembly graduates got together and made a startup called ${adjective} Technologies. Their goal was to create smart ${pluralNoun}. They approached the challenge ${adverb}, which ultimately led them to ${anotherAdjective === "successful" ? "success" : "failure"}.`;

// turn on the dialog box
const dialog = document.querySelector("dialog");
dialog.innerHTML = "Hello";

console.log("Hello");

document.querySelector("dialog").addEventListener("click", (event) => {
    const dialog = event.target;
    dialog.close();
});