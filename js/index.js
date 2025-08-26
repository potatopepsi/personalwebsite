/*
How to make a growing span
https://dev.to/matrixersp/how-to-make-an-input-field-grow-shrink-as-you-type-513l
*/ 

const input = document.querySelector('input');
const span = document.querySelector('span');


input.addEventListener('input', function (event) {
    span.innerHTML = this.value.replace(/\s/g, '&nbsp;');
    this.style.width = span.offsetWidth + 'px';
});

/* End of Code used
 */


// Submitting form on Enter key

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submitting").click();
    }

});

// Declaring const values
const GRABDIV = document.getElementById("display");

function sendHelp(){
    const help = [
        "whoMe"+Array(30).fill('\xa0').join('')+"Displays a blurb of myself",
        "contact"+Array(31).fill('\xa0').join('')+"Displays list of ways to contact me",
        // "dir"+Array(38).fill('\xa0').join('')+"Directory of files listed",
        // "cd [directory]"+Array(20).fill('\xa0').join('')+"Change directory to specified directory",
        "languages"+Array(31).fill('\xa0').join('')+"Displays a list of languages I know",
        "education"+Array(31).fill('\xa0').join('')+"Displays a history of my education",
        "experience"+Array(25).fill('\xa0').join('')+"Displays a history of my work experience",
        "project"+Array(31).fill('\xa0').join('')+"Displays a history of my projects",
        "clear"+Array(34).fill('\xa0').join('')+"Clears the terminal"
    ];
    

    for(let i = 0 ; i < help.length ; i++){
        const helpText = document.createTextNode(help[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
    
}


function sendWho(){
    const whoAmI = [
        "Hello, World!",
        "Name: Catherine Quach",
        "Occupation: Software Engineer",
        "Interests: Video games, Plant Enthusiast"
    ];

    for(let i = 0 ; i < whoAmI.length ; i++){
        const helpText = document.createTextNode(whoAmI[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }

}

function sendContact(){
    var a = document.createElement('a');
    var linkText = document.createTextNode("GITHUB");
    a.appendChild(linkText);
    a.title = "github.com/potatopepsi";
    a.target = "_blank";
    a.href="https://github.com/potatopepsi";
    GRABDIV.appendChild(a);

    newLine();

    a = document.createElement('a');
    linkText = document.createTextNode("LINKEDIN");
    a.appendChild(linkText);
    a.title = "linkedin.com/in/catherinequachx/";
    a.target = "_blank";
    a.href="https://www.linkedin.com/in/catherinequachx/";
    GRABDIV.appendChild(a);

    newLine();

    a = document.createElement('a');
    linkText = document.createTextNode("EMAIL");
    a.appendChild(linkText);
    a.title = "mailto:catherinequachx@gmail.com";
    a.href="mailto:catherinequachx@gmail.com";
    GRABDIV.appendChild(a);

    newLine();
    

}

function sendExperience(){
    const experience = [
        "Software Engineer - AI Consultant"+Array(40).fill('\xa0').join('')+"Feb 2024 - Oct 2024",
        "Outlier AI - Part-Time",
        "",
        "Web Developer Intern"+Array(60).fill('\xa0').join('')+"May 2023 - Oct 2023",
        "Accutech Machine, Inc. - Internship",
        "",
        "Software Engineer Intern"+Array(55).fill('\xa0').join('')+"Jun 2019 - Aug 2020",
        "MK Services Inc. - Internship",
        
    ];
    

    for(let i = 0 ; i < experience.length ; i++){
        const helpText = document.createTextNode(experience[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function sendProject(){
    const project = [
        "Timer"+Array(120).fill('\xa0').join('')+"Aug 2025 - Present",
        "-Developing a Timer app for Android phones with custom themes",
        "Language used: Kotlin",
        "",
        "Through the Universe"+Array(94).fill('\xa0').join('')+"Jan 2025 - Feb 2025",
        "- Developed a short walking story game in Godot Engine",
        "Language used: GDScript",
        "",
        "Discord Bot"+Array(109).fill('\xa0').join('')+"Dec 2023 - Feb 2024",
        "Developed a bot written in Python to automate an RPG with a database",
        "to store up to 100 different users’ statistics, up-to-date currency,",
        "and class information",
        "Language used: Python",
        "",
        "Client's Website for Personal Business"+Array(67).fill('\xa0').join('')+"Feb 2023 - Mar 2023",
        "- Designed and developed a visually appealing portfolio website using HTML, CSS, and JavaScript.",
        "- Collaborated with the artist to gather requirements, provide design recommendations, and deliver",
        " a website that effectively showcases their artwork.",
        "Languages used: HTML, CSS, JavaScript",
        "",
        "C2 Framework"+Array(105).fill('\xa0').join('')+"Oct 2022 - Dec 2022",
        "- Built a C2 framework in React that could store up to 10 different implants and it spoke directly",
        "to an implant on a victim machine.",
        "- Designed an implant in C++ could make remote procedure calls, steal data from Chrome, execute",
        "commands on the terminal remotely, and encrypt data on the victim machine.",
        "- Maintained proper documentation and reduced clutter in code by overwriting bad coding practices.",
        "Languages used: React, Windows API, C",
        "",
        "Photo Album Web Application"+Array(80).fill('\xa0').join('')+"Jun 2022 - Jul 2022",
        "- Implemented an SQL database for 10s of users to upload into the system via HTML.",
        "- Generated a space for users to view galleries of photos and make user to user interaction.",
        "Languages used: HTML, CSS, SQL",
        "",
        "Vending Machine Simulator"+Array(85).fill('\xa0').join('')+"Jun 2022 - Jul 2022",
        "- Drafted the system using use case diagrams, sequence diagrams, sequence architecture diagrams,",
        "class diagrams, state-machine diagrams, and er diagrams.",

    ];

    for(let i = 0 ; i < project.length ; i++){
        const helpText = document.createTextNode(project[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function sendEducation(){
    const education = [
        "Boston University"+Array(60).fill('\xa0').join('')+"May 2023",
        "Bachelor of Arts - BA, Computer Science",
        "",
        "Yonsei University"+Array(60).fill('\xa0').join('')+"Jun 2021 - Aug 2021",
        "International Summer Study Abroad Program",
        "",
        "Masconomet Regional High School"+Array(32).fill('\xa0').join('')+"Jun 2018",
        
    ];
    

    for(let i = 0 ; i < education.length ; i++){
        const helpText = document.createTextNode(education[i]);
        GRABDIV.appendChild(helpText);
        newLine();
    }
}

function sendList(){
    const languages=[
        "C",
        "C++",
        "Java",
        "Python",
        "HTML/CSS",
        "Javascript",
        "Kotlin"
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


function commandProc(){
    var input = document.getElementById("command").value;
    const historyText = document.createTextNode("C : \ > " + String(input));
    GRABDIV.appendChild(historyText);
    newLine();
    

    switch(String(input)){
        case "help":
            sendHelp();
            clearLine();
            break;
        case "whoMe":
            sendWho();
            clearLine();
            break;
        case "contact":
            sendContact();
            clearLine();
            break;
        case "experience":
            sendExperience();
            clearLine();
            break;
        case "education":
            sendEducation();
            clearLine();
            break;
        case "project":
            sendProject();
            clearLine();
            break;
        case "languages":
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
}

