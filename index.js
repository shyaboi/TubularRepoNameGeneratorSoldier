repoNamePrefixArr = [
  "Rad",
  "Dope",
  "Gnarly",
  "Sweet",
  "Electric",
  "Ledgendary",
  "Hott",
  "Cool",
  "Nifty",
  "Spiffy",
  "Tubular",
  "Dingus",
  "すごい",
  "Caliente",
  "Awesome",
  "Hype",
  "Supa",
  "Super",
  "Mega",
  "Totally",
  "Massive",
  "Hella",
  "Turbo",
  'Supra',
  'Sunset',
  'Synth',
  'Euphoric',


];
repoNameSuffixArr = [
  "Radness",
  "Dopeness",
  "Gnar",
  "Sweetness",
  "Electric",
  "Ledgend",
  "Hottness",
  "Coolness",
  "Niftyness",
  "Spiffyness",
  "Tubularness",
  "Dingi",
  "Calienteness",
  "Awesomeness",
  "Hypeness",
  "Soldier",
  "Superness",
  "Meganess",
  "Massiveness",
  "Meggedon",
  "Turbo",
  'Supra',
  'Sunset',
  'Synth',
  'Euphoria',
  

];

// console.log(pword);
var namer = function(pword) {
  prefix =
    repoNamePrefixArr[Math.floor(Math.random() * repoNamePrefixArr.length)];
  suffix =
    repoNameSuffixArr[Math.floor(Math.random() * repoNameSuffixArr.length)];

  console.log(`${prefix} ` + pword + ` ${suffix}`);
};

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$("input").keypress(function(event) {
  if (event.keyCode === 13) {
    $("#genButton").click();
  }
});

$("#genButton").click(function() {
  pword = $("#nameGen").val();
  namer(cap(pword));
  var para = document.createElement("P");
  var butt = document.createElement("BUTTON");
  para.innerText = `${prefix} ` + cap(pword) + ` ${suffix}`;
  document.body.appendChild(para);
  $(para).append(butt);
  var t = document.createTextNode("copy");
  $(butt).append(`<button id="copyButt" onclick="myFunction()">copy</button>`);
  // console.log(pword);
  window.scrollTo(0, document.body.scrollHeight);

  if ($("#nameGen").val() != "") $("#nameGen").val("");
  // console.log(this);
});

// $("copyButt").click(function(event){
//     alert("Triggered by a " + event.target+ " element.");
//   });

function myFunction() {
  var copyText = this.document.body.innerText
//   console.log(this.document.body.innerText);
cop = copyText
console.log(cop)
//   alert(toString(String(copyText)))
//   // copyText.select();
//   // copyText.setSelectionRange(0, 99999)
//   document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
}
