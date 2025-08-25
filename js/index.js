// add dir

const input = document.querySelector('input');
const span = document.querySelector('span');

input.addEventListener('input', function (event) {
    span.innerHTML = this.value.replace(/\s/g, '&nbsp;');
    this.style.width = span.offsetWidth + 'px';
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submitting").click();
    }

});

function printThis(){
    // event.preventDefault();
    // document.getElementById("display").innerHTML = "hi";
    const newText = document.createTextNode("hi");
    const newText2 = document.createElement('br');
    const p1 = document.getElementById("display");

    p1.appendChild(newText);
    p1.appendChild(newText2);
}


function sendHelp(){
    const help = [
        "who - small intro",
        "contact - ",
        "experience - jobs",
        "project - projects I've worked on",
        "clear - to clear terminal"
    ]
    const helpText = document.createTextNode(help);
    const newLine = document.createElement('br');
    const grabDiv = document.getElementById("display");

    grabDiv.appendChild(helpText);
    grabDiv.appendChild(newLine);
}



function commandProc(){
    var input = document.getElementById("command").value;
    switch(String(input)){
        case "help":
            sendHelp();
            document.getElementById("command").value="";
            break;
        default:
            // printThis();
            var input_length = input.length;
            document.getElementById("command").value="";
            document.getElementById("cursor").style="left:-"+String(input_length)+"px;";
            


    }
}

