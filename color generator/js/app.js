const getColor = () => {
    // hex code = code of color
    //Math.random():- ye function bnayega random number
    const randomnumber = Math.floor(Math.random() * 1677215);
    const randomCode = "#" + randomnumber.toString(16);
    console.log(randomnumber, randomCode)
    // document se body liye html ka or fir uska style liye or fir us style me hamne bgcolor ko random code ke hisnab se set kiya......
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    
}
// event call :- click pe color change hoga

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// initial call:- is se page refresh hone pe bhi color rhega
getColor()