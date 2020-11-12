console.log("Javascript up and running!");

const quotes = [
  {
    quote: "If you want something done right, do it yourself.",
    author: "Herman Bang",
    tags: ["you", "quality"],
  },

  {
    quote:
      "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Hvid Steen",
    tags: ["quality ", "persons"],
  },

  {
    quote:
      "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.",
    author: "J.D. Salinger",
    tags: ["authors", "books", "literature", "reading"],
  },
];

//hide and show functions:
const showElement = (element, visabillity) => {
  document.getElementById(element).style.display = visabillity;
};

const hideElement = (element) => {
  document.getElementById(element).style.display = "none";
};

//quote function to create a quote from the user:

const insertQuote = () => {
  const quote = document.getElementById("quoteInput").value;
  const author = document.getElementById("authorInput").value;
  const tags = document.getElementById("tagsInput").value;
  let error = document.getElementById("errorMessage");

  if (quote == null || quote === "") {
    error.innerHTML = "Enter a valid quote input!";
  } else if (author == null || author === "") {
    error.innerHTML = "Enter a valid author input";
  } else if (tags == null || tags === "") {
    error.innerHTML = "Enter a valid tag input";
  }

  if (
    quote === quote &&
    author === author &&
    tags === tags &&
    quote != null &&
    quote != "" &&
    author != null &&
    author != "" &&
    tags != null &&
    tags != ""
  ) {
    let object = {
      quote: quote,
      author: author,
      tags: [tags],
    };

    quotes.push(object);

    error.innerHTML = "Your quote is added! - See it in the quotes";

    hideElement("create-quote-container", "block");
    showElement("main-frame-js", "block");
  }

  /* Skal tage værdien/teksten som bliver skrevet i textarea og de 2 tekstfelter
 i html og retunere et object og pushe det 
i quotes array af objekt-samling. 
*/
};

// executes the display:
const execute = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("create").style.display = "none";
  document.getElementById("quote").innerHTML = `"${randomQuote.quote}"`;
  document.getElementById("author").innerHTML = `- ${randomQuote.author}`;

  document.getElementById("tag").innerHTML = "";

  randomQuote.tags.forEach((element) => {
    let span = document.createElement("SPAN");
    span.innerHTML = `#${element}`;

    document.getElementById("tag").appendChild(span);
  });
};

// onclick functions:
document.getElementById("autogenerate").onclick = function () {
  execute();
};

document.getElementById("create").onclick = function () {
  hideElement("main-frame-js"), showElement("create-quote-container", "block");
};

document.getElementById("submit").onclick = function () {
  insertQuote();
};
