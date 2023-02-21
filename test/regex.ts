const phrase = "/content/projects/master.md";

const regex = /\/content\/projects\/(.*)\.md/;

const result = phrase.match(regex);

console.log(result);
