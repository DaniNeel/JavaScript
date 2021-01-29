//here i take mid of string before @ and from charcter starting from mid upto mid numbers of charcters are *.

const eMail = "abcdef@gmail.com";

function hideEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
  
    if(emailRegex.test(email))
    {
        const splitPart = email.split("@");
        console.log(splitPart);
        const mid = splitPart[0].length / 2;
        console.log(splitPart[0].length);

        const firstElement = splitPart[0].slice(0, (mid - 1));
        const midElement = splitPart[0].substr((mid - 1), mid);
        const endLength = firstElement.length + midElement.length;
        const lastElement = splitPart[0].slice(endLength);

        console.log(firstElement);
        console.log(midElement);
        console.log(lastElement);

        let hidden = "";
        for (let i = 0; i < midElement.length; i++) {
            hidden += "*";
        }
        console.log(hidden);

        console.log(firstElement + hidden + lastElement + "@" + splitPart[1]);
    }else{
        console.log("please enter valid email");
    }
}

hideEmail(eMail);