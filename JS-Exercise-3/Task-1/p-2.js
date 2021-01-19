
const input = prompt("please enter string", "");

function removeTags(txt) {

    return txt.replace(/<([^>]+)>/ig, '');
}

alert(removeTags(input));
