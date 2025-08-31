// Declaring const values
const input = document.querySelector('input');
const GRABDIV = document.getElementById("display");

// Submitting form on Enter key
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submitting").click();
    }
});
var firstHoldTemp = [];
//Auto fill for Tab, and Up/Down Functionality
input.addEventListener("keydown", function(event) {
    if (event.key === "Tab"){
        event.preventDefault();
        autofill();
    }
    if (event.key == "ArrowUp"){
        event.preventDefault();
        firstHoldTemp.push(document.getElementById("command").value);
        if(counter <= (History.length+1) && counter > 0){
            counter = counter - 1;
            getMyHistory(counter);
        }
           
    }else if(event.key == "ArrowDown"){
        event.preventDefault();
        firstHoldTemp.push(document.getElementById("command").value);
        if(counter != (History.length-1)){
            counter = counter + 1;
            getMyHistory(counter);
        }else{
            document.getElementById("command").value = firstHoldTemp[0];
        }
    }else{
        firstHoldTemp = [];
    }

});

var History = [];
function getMyHistory(counter){
    document.getElementById("command").value = History[counter];
}

function sendHelp(){
    const help = [
        "",
        "whoseTerminal"+Array(32).fill('\xa0').join('')+"Displays a description about me",
        "contactInfo"+Array(34).fill('\xa0').join('')+"Displays different ways of contacting me",
        "langProficiency"+Array(30).fill('\xa0').join('')+"Displays a list of languages I am proficient in",
        "eduHistory"+Array(35).fill('\xa0').join('')+"Displays a history of my education",
        "expHistory"+Array(35).fill('\xa0').join('')+"Displays a history of my work experience",
        "projRecord"+Array(35).fill('\xa0').join('')+"Displays a record of my coding projects",
        "clear"+Array(40).fill('\xa0').join('')+"Clears the terminal",
        ""
    ];
    
    for(let i = 0 ; i < help.length ; i++){
        const helpText = document.createTextNode(help[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
    
}

function sendWho(){
    const whoAmI = [
        "",
        "Name: Catherine Quach",
        "Occupation: Software Engineer",
        "Interests: Learning about new technologies, taking care of plants, and reading novels",
        ""
    ];

    for(let i = 0 ; i < whoAmI.length ; i++){
        const helpText = document.createTextNode(whoAmI[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }

}

function sendContact(){

    newLine();

    const githubB = document.createTextNode("GitHub"+Array(39).fill('\xa0').join(''));
    GRABDIV.appendChild(githubB);


    var a = document.createElement('a');
    var linkText = document.createTextNode("github.com/potatopepsi");
    a.appendChild(linkText);
    a.title = "github.com/potatopepsi";
    a.target = "_blank";
    a.href="https://github.com/potatopepsi";
    GRABDIV.appendChild(a);

    newLine();

    const linkedinB = document.createTextNode("LinkedIn"+Array(37).fill('\xa0').join(''));
    GRABDIV.appendChild(linkedinB);

    b = document.createElement('a');
    linkText = document.createTextNode("linkedin.com/in/catherinequachx");
    b.appendChild(linkText);
    b.title = "linkedin.com/in/catherinequachx/";
    b.target = "_blank";
    b.href="https://www.linkedin.com/in/catherinequachx/";
    GRABDIV.appendChild(b);

    newLine();

    const emailB = document.createTextNode("Email"+Array(40).fill('\xa0').join(''));
    GRABDIV.appendChild(emailB);

    c = document.createElement('a');
    linkText = document.createTextNode("catherinequachx@gmail.com");
    c.appendChild(linkText);
    c.title = "mailto:catherinequachx@gmail.com";
    c.href="mailto:catherinequachx@gmail.com";
    GRABDIV.appendChild(c);

    newLine();
    
    newLine();

}

function sendExperience(){
    const experience = [
        "",
        "Software Engineer - AI Consultant"+Array(24).fill('\xa0').join('')+"Feb 2024 - Oct 2024",
        "Outlier AI - Part-Time",
        "",
        "Web Developer Intern"+Array(37).fill('\xa0').join('')+"May 2023 - Oct 2023",
        "Accutech Machine, Inc. - Internship",
        "",
        "Software Engineer Intern"+Array(33).fill('\xa0').join('')+"Jun 2019 - Aug 2020",
        "MK Services Inc. - Internship",
        ""
    ];
    

    for(let i = 0 ; i < experience.length ; i++){
        const helpText = document.createTextNode(experience[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function sendProject(){
    const project = [
        "",
        "Vending Machine Simulator"+Array(90).fill('\xa0').join('')+"Jun 2022 - Jul 2022",
        "",
        "- Drafted the system using use case diagrams, sequence diagrams, sequence architecture diagrams,",
        "class diagrams, state-machine diagrams, and ER diagrams.",
        "",
        "",

        "Photo Album Web Application"+Array(88).fill('\xa0').join('')+"Jun 2022 - Jul 2022",
        "",
        "- Implemented an SQL database for 10s of users to upload into the system via HTML.",
        "- Generated a space for users to view galleries of photos and make user to user interaction.",
        "Languages used: HTML, CSS, SQL",
        "",
        "",
        "C2 Framework"+Array(103).fill('\xa0').join('')+"Oct 2022 - Dec 2022",
        "",
        "- Built a C2 framework in React that could store up to 10 different implants and it spoke directly",
        "to an implant on a victim machine.",
        "- Designed an implant in C++ that could make remote procedure calls, steal data from Chrome, execute",
        "commands on the terminal remotely, and encrypt data on the victim machine.",
        "- Maintained proper documentation and reduced clutter in code by overwriting bad coding practices.",
        "Languages/Libraries used: React, Windows API, C",
        "",
        "",
        "Client's Website for Personal Business"+Array(77).fill('\xa0').join('')+"Feb 2023 - Mar 2023",
        "",
        "- Designed and developed a visually appealing portfolio website.",
        "- Collaborated with the artist to gather requirements, provide design recommendations, and deliver",
        " a website that effectively showcases their artwork.",
        "Languages used: HTML, CSS, JavaScript",
        "",
        "",
        "Discord Bot"+Array(104).fill('\xa0').join('')+"Dec 2023 - Feb 2024",
        "",
        "Developed a bot written in Python to automate an RPG with a database, to store up to 100 different",
        "users’ statistics, up-to-date currency, and class information.",
        "Language used: Python",
        "",
        "",
        "Through the Universe"+Array(95).fill('\xa0').join('')+"Jan 2025 - Feb 2025",
        "",
        "- Developed a short walking story game in Godot Engine",
        "Language used: GDScript",
        "",
        "",
      
        
        //         "Timer"+Array(110).fill('\xa0').join('')+"Aug 2025 - Present",
        // "",
        // "-Developing a Timer app for Android phones with custom themes",
        // "Language used: Kotlin",
        // "",
        // ""
        

    ];

    for(let i = 0 ; i < project.length ; i++){
        const helpText = document.createTextNode(project[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function sendEducation(){
    const education = [
        "",
        "Boston University"+Array(40).fill('\xa0').join('')+"Sept 2019 - May 2023",
        "Bachelor of Arts - BA, Computer Science",
        "",
        "Yonsei University"+Array(40).fill('\xa0').join('')+"Jun 2021 - Aug 2021",
        "International Summer Study Abroad Program",
        ""
        
    ];
    

    for(let i = 0 ; i < education.length ; i++){
        const helpText = document.createTextNode(education[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function sendList(){
    const languages=[
        "",
        "Python",
        "Java",
        "HTML/CSS",
        "Javascript",
        "C",
        "C++",
        "Kotlin",
        ""
    ];
    for(let i = 0 ; i < languages.length ; i++){
        const helpText = document.createTextNode(languages[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function clearConsole(){
    while(GRABDIV.firstChild){
        GRABDIV.removeChild(GRABDIV.firstChild);
    }
}

function procError(input){
    const errorText = document.createTextNode("'"+String(input)+"' is not a valid command. Please use 'help' for available commands.");
    GRABDIV.appendChild(errorText);
    newLine();
}

function newLine(){
    const newLine = document.createElement('br');
    GRABDIV.appendChild(newLine);
}

function clearLine(){
    document.getElementById("command").value="";
}

function autofill(){
    var input = document.getElementById("command").value;
    input = String(input);
    const commands = ["help", "whoseTerminal", "contactInfo", "expHistory", "eduHistory", "projRecord", "langProficiency", "clear"];
    for(let i = 0; i < commands.length; i++){
        let temp = commands[i];
        if(temp.substring(0,input.length) === input ){
            document.getElementById("command").value=temp;
        }
    }
    
}

var counter = 0;
function commandProc(){
    var input = document.getElementById("command").value;
    const historyText = document.createTextNode("C : \ > " + String(input));
    GRABDIV.appendChild(historyText);
    newLine();
    
    History.push(String(input));
    counter = History.length ;
    
    switch(String(input)){
        case "help":
            sendHelp();
            clearLine();
            break;
        case "whoseTerminal":
            sendWho();
            clearLine();
            break;
        case "contactInfo":
            sendContact();
            clearLine();
            break;
        case "expHistory":
            sendExperience();
            clearLine();
            break;
        case "eduHistory":
            sendEducation();
            clearLine();
            break;
        case "projRecord":
            sendProject();
            clearLine();
            break;
        case "langProficiency":
            sendList();
            clearLine();
            break;
        case "clear":
            clearConsole();
            clearLine();
            break;
        default:
            procError(String(input));
            clearLine();
            break;

    }
    // https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}

