repoNamePrefixArr = ['Rad', 'Dope', 'Gnarly','Sweet','Electric','Ledgendary','Hott','Cool','Nifty','Spiffy','Tubular','Dingus','すごい','Caliente','Awesome','Hype','Supa','Super','Mega','Totally','Massive','Hella']
repoNameSuffixArr = ['Radness', 'Dopeness', 'Gnar','Sweetness','Electric','Ledgend','Hottness','Coolness','Niftyness','Spiffyness','Tubularness','Dingi','Calienteness','Awesomeness','Hypeness','Soldier','Superness','Meganess','Massiveness','Meggedon']
pword = prompt("What Is the Theme Of your Project?")

var namer = function(pword){
 prefix = repoNamePrefixArr[Math.floor(Math.random()*repoNamePrefixArr.length)]
 suffix = repoNameSuffixArr[Math.floor(Math.random()*repoNameSuffixArr.length)]

    console.log(`${prefix} ` + pword + ` ${suffix}`)
}

function cap(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}



namer(cap(pword))
var para = document.createElement("P")
para.innerText = `${prefix} ` + cap(pword) + ` ${suffix}`
document.body.appendChild(para)