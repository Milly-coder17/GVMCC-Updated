/* Codes for the login page */
const username = "admin";
const password = "123";
const loginButton = document.getElementById("loginButton");
if(loginButton) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginButton.addEventListener("click", function () {
        if (usernameInput.value === "admin" && passwordInput.value === "123") {
            window.location.href = "main.html";
        }
    });
}

/* */

const navButtons = document.querySelectorAll(".programButton");
const pages = document.querySelectorAll(".page");
const searchGuardianBar = document.getElementById("searchGuardianBar");

if(navButtons) {
    navButtons.forEach(button => {
        button.addEventListener("click", function() {

            navButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            pages.forEach(page => page.classList.remove("active"));

            const targetPage = this.dataset.page;
            document.getElementById(targetPage).classList.add("active");
        });
    });
}


/* Students Array */
var studentsArray = [
    {'ID':'1','LRN':'202401105','Program':'BSIT','FirstName':'Emil','MiddleName':'Enosa','LastName':'Panganiban','Birthdate':'02-17-2006','Gender':'Male','Address':'Goa','Contact Number':'09284524934','GuardianID':'1','RelationshipType':'Father'},
    {'ID':'2','LRN':'202401106','Program':'BSBA','FirstName':'Maria','MiddleName':'','LastName':'Santos','Birthdate':'03-12-2005','Gender':'Female','Address':'Naga','Contact Number':'09123456701','GuardianID':'2','RelationshipType':'Mother'},
    {'ID':'3','LRN':'202401107','Program':'BSED','FirstName':'Juan','MiddleName':'','LastName':'Dela Cruz','Birthdate':'07-21-2004','Gender':'Male','Address':'Iriga','Contact Number':'09123456702','GuardianID':'3','RelationshipType':'Uncle'},
    {'ID':'4','LRN':'202401108','Program':'BSIT','FirstName':'Angela','MiddleName':'','LastName':'Reyes','Birthdate':'11-05-2006','Gender':'Female','Address':'Legazpi','Contact Number':'09123456703','GuardianID':'4','RelationshipType':'Mother'},
    {'ID':'5','LRN':'202401109','Program':'BSHM','FirstName':'Carlo','MiddleName':'','LastName':'Mendoza','Birthdate':'09-30-2005','Gender':'Male','Address':'Sorsogon','Contact Number':'09123456704','GuardianID':'5','RelationshipType':'Father'},

    {'ID':'6','LRN':'202401110','Program':'BSBA','FirstName':'Patricia','MiddleName':'','LastName':'Lopez','Birthdate':'01-18-2004','Gender':'Female','Address':'Daet','Contact Number':'09123456705','GuardianID':'6','RelationshipType':'Mother'},
    {'ID':'7','LRN':'202401111','Program':'BSED','FirstName':'Mark','MiddleName':'','LastName':'Villanueva','Birthdate':'06-14-2006','Gender':'Male','Address':'Tabaco','Contact Number':'09123456706','GuardianID':'7','RelationshipType':'Father'},
    {'ID':'8','LRN':'202401112','Program':'BSIT','FirstName':'Jasmine','MiddleName':'','LastName':'Cruz','Birthdate':'04-25-2005','Gender':'Female','Address':'Ligao','Contact Number':'09123456707','GuardianID':'8','RelationshipType':'Mother'},
    {'ID':'9','LRN':'202401113','Program':'BSHM','FirstName':'Kevin','MiddleName':'','LastName':'Ramos','Birthdate':'12-09-2004','Gender':'Male','Address':'Masbate','Contact Number':'09123456708','GuardianID':'9','RelationshipType':'Father'},
    {'ID':'10','LRN':'202401114','Program':'BSBA','FirstName':'Nicole','MiddleName':'','LastName':'Flores','Birthdate':'08-02-2006','Gender':'Female','Address':'Polangui','Contact Number':'09123456709','GuardianID':'10','RelationshipType':'Mother'},

    {'ID':'11','LRN':'202401115','Program':'BSED','FirstName':'Adrian','MiddleName':'','LastName':'Castillo','Birthdate':'05-19-2005','Gender':'Male','Address':'Pili','Contact Number':'09123456710','GuardianID':'11','RelationshipType':'Father'},
    {'ID':'12','LRN':'202401116','Program':'BSIT','FirstName':'Trisha','MiddleName':'','LastName':'Aquino','Birthdate':'10-11-2004','Gender':'Female','Address':'Calabanga','Contact Number':'09123456711','GuardianID':'12','RelationshipType':'Mother'},
    {'ID':'13','LRN':'202401117','Program':'BSHM','FirstName':'Joshua','MiddleName':'','LastName':'Bautista','Birthdate':'02-27-2006','Gender':'Male','Address':'Camaligan','Contact Number':'09123456712','GuardianID':'13','RelationshipType':'Father'},
    {'ID':'14','LRN':'202401118','Program':'BSBA','FirstName':'Ella','MiddleName':'','LastName':'Navarro','Birthdate':'07-07-2005','Gender':'Female','Address':'Sipocot','Contact Number':'09123456713','GuardianID':'14','RelationshipType':'Mother'},
    {'ID':'15','LRN':'202401119','Program':'BSED','FirstName':'Christian','MiddleName':'','LastName':'Torres','Birthdate':'03-03-2004','Gender':'Male','Address':'Ragay','Contact Number':'09123456714','GuardianID':'15','RelationshipType':'Uncle'},

    {'ID':'16','LRN':'202401120','Program':'BSIT','FirstName':'Samantha','MiddleName':'','LastName':'Garcia','Birthdate':'09-15-2006','Gender':'Female','Address':'Libmanan','Contact Number':'09123456715','GuardianID':'16','RelationshipType':'Mother'},
    {'ID':'17','LRN':'202401121','Program':'BSHM','FirstName':'Daniel','MiddleName':'','LastName':'Perez','Birthdate':'11-28-2005','Gender':'Male','Address':'Tigaon','Contact Number':'09123456716','GuardianID':'17','RelationshipType':'Father'},
    {'ID':'18','LRN':'202401122','Program':'BSBA','FirstName':'Kimberly','MiddleName':'','LastName':'Rivera','Birthdate':'01-09-2004','Gender':'Female','Address':'Ocampo','Contact Number':'09123456717','GuardianID':'18','RelationshipType':'Mother'},
    {'ID':'19','LRN':'202401123','Program':'BSED','FirstName':'Ryan','MiddleName':'','LastName':'Morales','Birthdate':'06-01-2006','Gender':'Male','Address':'Canaman','Contact Number':'09123456718','GuardianID':'19','RelationshipType':'Father'},
    {'ID':'20','LRN':'202401124','Program':'BSIT','FirstName':'Alyssa','MiddleName':'','LastName':'Hernandez','Birthdate':'08-22-2005','Gender':'Female','Address':'Magarao','Contact Number':'09123456719','GuardianID':'20','RelationshipType':'Mother'},

    {'ID':'21','LRN':'202401125','Program':'BSHM','FirstName':'Paul','MiddleName':'','LastName':'Sanchez','Birthdate':'12-13-2004','Gender':'Male','Address':'Gainza','Contact Number':'09123456720','GuardianID':'21','RelationshipType':'Father'}
];

var guardiansArray = [
    {'ID':'1','FirstName':'Juvy','MiddleName':'Enosa','LastName':'Panganiban','Contact Number':'09181234501'},
    {'ID':'2','FirstName':'Lucia','MiddleName':'Santos','LastName':'Reyes','Contact Number':'09181234502'},
    {'ID':'3','FirstName':'Pedro','MiddleName':'Dela','LastName':'Cruz','Contact Number':'09181234503'},
    {'ID':'4','FirstName':'Aling','MiddleName':'Reyes','LastName':'Santos','Contact Number':'09181234504'},
    {'ID':'5','FirstName':'Roberto','MiddleName':'Mendoza','LastName':'Lopez','Contact Number':'09181234505'},
    {'ID':'6','FirstName':'Maria','MiddleName':'Lopez','LastName':'Garcia','Contact Number':'09181234506'},
    {'ID':'7','FirstName':'Jose','MiddleName':'Villanueva','LastName':'Castillo','Contact Number':'09181234507'},
    {'ID':'8','FirstName':'Elena','MiddleName':'Cruz','LastName':'Aquino','Contact Number':'09181234508'},
    {'ID':'9','FirstName':'Miguel','MiddleName':'Ramos','LastName':'Perez','Contact Number':'09181234509'},
    {'ID':'10','FirstName':'Teresa','MiddleName':'Flores','LastName':'Navarro','Contact Number':'09181234510'},
    {'ID':'11','FirstName':'Antonio','MiddleName':'Castillo','LastName':'Morales','Contact Number':'09181234511'},
    {'ID':'12','FirstName':'Lourdes','MiddleName':'Aquino','LastName':'Hernandez','Contact Number':'09181234512'},
    {'ID':'13','FirstName':'Fernando','MiddleName':'Bautista','LastName':'Sanchez','Contact Number':'09181234513'},
    {'ID':'14','FirstName':'Cecilia','MiddleName':'Navarro','LastName':'Rivera','Contact Number':'09181234514'},
    {'ID':'15','FirstName':'Gregorio','MiddleName':'Torres','LastName':'Castro','Contact Number':'09181234515'},
    {'ID':'16','FirstName':'Isabel','MiddleName':'Garcia','LastName':'Morales','Contact Number':'09181234516'},
    {'ID':'17','FirstName':'Rodolfo','MiddleName':'Perez','LastName':'Santos','Contact Number':'09181234517'},
    {'ID':'18','FirstName':'Nora','MiddleName':'Rivera','LastName':'Lopez','Contact Number':'09181234518'},
    {'ID':'19','FirstName':'Emilio','MiddleName':'Morales','LastName':'Dela Cruz','Contact Number':'09181234519'},
    {'ID':'20','FirstName':'Clarita','MiddleName':'Hernandez','LastName':'Ramos','Contact Number':'09181234520'},
    {'ID':'21','FirstName':'Benito','MiddleName':'Sanchez','LastName':'Navarro','Contact Number':'09181234521'}
];

var subjectsArray = [
    { "Subject Code": "CSDC101", "Title": "Intro to Computing", "Units": "3", "Prerequisite": "" }
];

var sectionsArray = [
    { "ID": "1", "Section Name": "ZT12" },
    { "ID": "2", "Section Name": "ZT13" }
];

var programsArray = [
    { "ID": "1", "Program Name": "BSIT", "Major": "Software Development" },
    { "ID": "2", "Program Name": "BSBA", "Major": "Marketing" }
];

var classOfferingsArray = [];

const studentsTable = document.getElementById("studentsTable");
const searchStudentBar = document.getElementById("searchStudentBar");

function renderStudents(tableArray) {
    const studentsTable = document.getElementById("studentsTable");
    studentsTable.innerHTML = "";

    tableArray.forEach(student => {
        const row = document.createElement("tr");

        const guardian = guardiansArray.find(
            g => String(g.ID) === String(student.GuardianID)
        );

        const guardianDisplay = guardian
            ? `${guardian.FirstName} ${guardian.MiddleName} ${guardian.LastName} - ${student.RelationshipType}`
            : "-";

        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.LRN}</td>
            <td>${student.Program}</td>
            <td>${student.FirstName} ${student.MiddleName} ${student.LastName}</td>
            <td>${student.Birthdate}</td>
            <td>${student.Gender}</td>
            <td>${student.Address}</td>
            <td>${student["Contact Number"]}</td>
            <td>${guardianDisplay}</td>
        `;

        studentsTable.appendChild(row);
    });
}

function renderGuardians(tableArray) {
    const guardiansTable = document.getElementById("guardiansTable");
    if (!guardiansTable) return;

    guardiansTable.innerHTML = "";

    tableArray.forEach(guardian => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${guardian.ID}</td>
            <td>${guardian.FirstName} ${guardian.MiddleName} ${guardian.LastName}</td>
            <td>${guardian["Contact Number"]}</td>
        `;

        guardiansTable.appendChild(row);
    });
}

renderStudents(studentsArray);
renderGuardians(guardiansArray);

searchStudentBar.addEventListener("input", function() {
    const searchValue = searchStudentBar.value.toLowerCase();

    const filteredStudents = studentsArray.filter(student => {
        const fullName = (student.FirstName + " " + student.MiddleName + " " + student.LastName).toLowerCase();
        return fullName.includes(searchValue);
    });

    renderStudents(filteredStudents);
});

if (searchGuardianBar) {
    searchGuardianBar.addEventListener("input", function() {
        const searchValue = searchGuardianBar.value.toLowerCase();

        const filtered = guardiansArray.filter(g => {
            const fullName = (g.FirstName + " " + g.MiddleName + " " + g.LastName).toLowerCase();
            return fullName.includes(searchValue);
        });

        renderGuardians(filtered);
    });
}

// DROPDOWN TOGGLE
document.querySelectorAll(".hasDropdown").forEach(button => {
    button.addEventListener("click", function() {
        this.parentElement.classList.toggle("open");
    });
});

// SUB BUTTON PAGE SWITCHING
const subButtons = document.querySelectorAll(".subButton");

subButtons.forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".navButton, .subButton").forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

        const target = this.dataset.page;
        const page = document.getElementById(target);

        if (page) {
            page.classList.add("active");
        }
    });
});

const studentModal = document.getElementById("studentFormModal");
const addStudentBtn = document.querySelector("#students #addMainBtn");
const closeStudentBtn = document.getElementById("closeStudentForm");

if(addStudentBtn){
    addStudentBtn.onclick = () => studentModal.style.display = "flex";
}

if(closeStudentBtn){
    closeStudentBtn.onclick = () => studentModal.style.display = "none";
}

function loadGuardians() {
    const guardianSelect = document.getElementById("guardian");

    if(!guardianSelect) return;

    guardianSelect.innerHTML = '<option value="">Guardian</option>';

    guardiansArray.forEach(g => {
        const option = document.createElement("option");
        option.value = g.ID;
        option.textContent = g.FirstName + " " + g.LastName;
        guardianSelect.appendChild(option);
    });
}

loadGuardians();

const saveStudentBtn = document.getElementById("saveStudent");

if(saveStudentBtn){
    saveStudentBtn.onclick = () => {

        const newStudent = {
            ID: (studentsArray.length + 1).toString(),
            LRN: document.getElementById("lrn").value,
            Program: document.getElementById("program").value,
            FirstName: document.getElementById("firstName").value,
            MiddleName: document.getElementById("middleName").value,
            LastName: document.getElementById("lastName").value,
            Birthdate: document.getElementById("birthdate").value,
            Gender: document.getElementById("gender").value,
            Address: document.getElementById("address").value,
            "Contact Number": document.getElementById("contact").value,
            GuardianID: document.getElementById("guardian").value
        };

        studentsArray.push(newStudent);
        renderStudents(studentsArray);

        studentModal.style.display = "none";
    };
}

const guardianModal = document.getElementById("guardianFormModal");
const addGuardianBtn = document.querySelector("#guardians #addMainBtn");
const closeGuardianBtn = document.getElementById("closeGuardianForm");

if(addGuardianBtn){
    addGuardianBtn.onclick = () => guardianModal.style.display = "flex";
}

if(closeGuardianBtn){
    closeGuardianBtn.onclick = () => guardianModal.style.display = "none";
}

const saveGuardianBtn = document.getElementById("saveGuardian");

if(saveGuardianBtn){
    saveGuardianBtn.onclick = () => {

        const newGuardian = {
            ID: (guardiansArray.length + 1).toString(),
            FirstName: document.getElementById("gFirstName").value,
            MiddleName: document.getElementById("gMiddleName").value,
            LastName: document.getElementById("gLastName").value,
            "Contact Number": document.getElementById("gContact").value
        };

        guardiansArray.push(newGuardian);
        renderGuardians(guardiansArray);

        loadGuardians();

        guardianModal.style.display = "none";
    };
}

function renderSubjects(tableArray) {
    const table = document.getElementById("subjectsTable");
    if (!table) return;

    table.innerHTML = "";

    tableArray.forEach(sub => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${sub["Subject Code"]}</td>
            <td>${sub["Title"]}</td>
            <td>${sub["Units"]}</td>
            <td>${sub["Prerequisite"] || "-"}</td>
        `;

        table.appendChild(row);
    });
}

renderSubjects(subjectsArray);

function loadSubjectsDropdown() {
    const select = document.getElementById("subPrerequisite");
    if (!select) return;

    select.innerHTML = '<option value="">Prerequisite (optional)</option>';

    subjectsArray.forEach(sub => {
        const option = document.createElement("option");
        option.value = sub["Subject Code"];
        option.textContent = `${sub["Subject Code"]} - ${sub["Title"]}`;
        select.appendChild(option);
    });
}

loadSubjectsDropdown();

const subjectModal = document.getElementById("subjectFormModal");
const addSubjectBtn = document.getElementById("addSubjectBtn");
const closeSubjectBtn = document.getElementById("closeSubjectForm");

if (addSubjectBtn) {
    addSubjectBtn.onclick = () => {
        subjectModal.style.display = "flex";
        loadSubjectsDropdown();
    };
}

if (closeSubjectBtn) {
    closeSubjectBtn.onclick = () => {
        subjectModal.style.display = "none";
    };
}

const saveSubjectBtn = document.getElementById("saveSubject");

if (saveSubjectBtn) {
    saveSubjectBtn.onclick = () => {

        const newSubject = {
            "Subject Code": document.getElementById("subCode").value,
            "Title": document.getElementById("subTitle").value,
            "Units": document.getElementById("subUnits").value,
            "Prerequisite": document.getElementById("subPrerequisite").value
        };

        subjectsArray.push(newSubject);

        renderSubjects(subjectsArray);
        loadSubjectsDropdown();

        subjectModal.style.display = "none";
    };
}

const searchSubjectBar = document.getElementById("searchSubjectBar");

if (searchSubjectBar) {
    searchSubjectBar.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = subjectsArray.filter(sub =>
            sub["Subject Code"].toLowerCase().includes(value) ||
            sub["Title"].toLowerCase().includes(value)
        );

        renderSubjects(filtered);
    });
}

function renderSections(tableArray) {
    const table = document.getElementById("sectionsTable");
    if (!table) return;

    table.innerHTML = "";

    tableArray.forEach(section => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${section.ID}</td>
            <td>${section["Section Name"]}</td>
        `;

        table.appendChild(row);
    });
}

renderSections(sectionsArray);

const sectionModal = document.getElementById("sectionFormModal");
const addSectionBtn = document.querySelector("#sections .addButton");
const closeSectionBtn = document.getElementById("closeSectionForm");

if (addSectionBtn) {
    addSectionBtn.onclick = () => {
        sectionModal.style.display = "flex";
    };
}

if (closeSectionBtn) {
    closeSectionBtn.onclick = () => {
        sectionModal.style.display = "none";
    };
}

const saveSectionBtn = document.getElementById("saveSection");

if (saveSectionBtn) {
    saveSectionBtn.onclick = () => {

        const newSection = {
            ID: (sectionsArray.length + 1).toString(),
            "Section Name": document.getElementById("sectionName").value
        };

        sectionsArray.push(newSection);

        renderSections(sectionsArray);

        sectionModal.style.display = "none";
    };
}

const searchSectionBar = document.getElementById("searchSectionBar");

if (searchSectionBar) {
    searchSectionBar.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = sectionsArray.filter(sec =>
            sec["Section Name"].toLowerCase().includes(value)
        );

        renderSections(filtered);
    });
}

var instructorsArray = [
    { "ID": "1", "Name": "John Cruz", "Department": "IT", "Contact Number": "09123456789" },
    { "ID": "2", "Name": "Maria Santos", "Department": "Education", "Contact Number": "09987654321" }
];

function renderInstructors(tableArray) {
    const table = document.getElementById("instructorsTable");
    if (!table) return;

    table.innerHTML = "";

    tableArray.forEach(ins => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${ins.ID}</td>
            <td>${ins.Name}</td>
            <td>${ins.Department}</td>
            <td>${ins["Contact Number"]}</td>
        `;

        table.appendChild(row);
    });
}

renderInstructors(instructorsArray);

const instructorModal = document.getElementById("instructorFormModal");
const addInstructorBtn = document.querySelector("#instructors .addButton");
const closeInstructorBtn = document.getElementById("closeInstructorForm");

if (addInstructorBtn) {
    addInstructorBtn.onclick = () => {
        instructorModal.style.display = "flex";
    };
}

if (closeInstructorBtn) {
    closeInstructorBtn.onclick = () => {
        instructorModal.style.display = "none";
    };
}

const saveInstructorBtn = document.getElementById("saveInstructor");

if (saveInstructorBtn) {
    saveInstructorBtn.onclick = () => {

        const newInstructor = {
            ID: (instructorsArray.length + 1).toString(),
            Name: document.getElementById("insName").value,
            Department: document.getElementById("insDepartment").value,
            "Contact Number": document.getElementById("insContact").value
        };

        instructorsArray.push(newInstructor);

        renderInstructors(instructorsArray);

        instructorModal.style.display = "none";
    };
}

const searchInstructorBar = document.getElementById("searchInstructorBar");

if (searchInstructorBar) {
    searchInstructorBar.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = instructorsArray.filter(ins =>
            ins.Name.toLowerCase().includes(value) ||
            ins.Department.toLowerCase().includes(value)
        );

        renderInstructors(filtered);
    });
}

var schedulesArray = [
    { "ID": "1", "Day": "MW", "Time Start": "10:30 AM", "Time End": "12:00 NN" },
    { "ID": "2", "Day": "TTH", "Time Start": "01:30 PM", "Time End": "03:00 PM" }
];

function renderSchedules(tableArray) {
    const table = document.getElementById("schedulesTable");
    if (!table) return;

    table.innerHTML = "";

    tableArray.forEach(sch => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${sch.ID}</td>
            <td>${sch.Day}</td>
            <td>${sch["Time Start"]}</td>
            <td>${sch["Time End"]}</td>
        `;

        table.appendChild(row);
    });
}

renderSchedules(schedulesArray);

const scheduleModal = document.getElementById("scheduleFormModal");
const addScheduleBtn = document.querySelector("#schedules .addButton");
const closeScheduleBtn = document.getElementById("closeScheduleForm");

if (addScheduleBtn) {
    addScheduleBtn.onclick = () => {
        scheduleModal.style.display = "flex";
    };
}

if (closeScheduleBtn) {
    closeScheduleBtn.onclick = () => {
        scheduleModal.style.display = "none";
    };
}

const saveScheduleBtn = document.getElementById("saveSchedule");

if (saveScheduleBtn) {
    saveScheduleBtn.onclick = () => {

        const newSchedule = {
            ID: (schedulesArray.length + 1).toString(),
            Day: document.getElementById("schDay").value,
            "Time Start": document.getElementById("schStart").value,
            "Time End": document.getElementById("schEnd").value
        };

        schedulesArray.push(newSchedule);

        renderSchedules(schedulesArray);

        scheduleModal.style.display = "none";
    };
}

const searchScheduleBar = document.getElementById("searchScheduleBar");

if (searchScheduleBar) {
    searchScheduleBar.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = schedulesArray.filter(sch =>
            sch.Day.toLowerCase().includes(value) ||
            sch["Time Start"].includes(value) ||
            sch["Time End"].includes(value)
        );

        renderSchedules(filtered);
    });
}

function renderPrograms(tableArray) {
    const table = document.getElementById("programsTable");
    if (!table) return;

    table.innerHTML = "";

    tableArray.forEach(prog => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${prog.ID}</td>
            <td>${prog["Program Name"]}</td>
            <td>${prog.Major}</td>
        `;

        table.appendChild(row);
    });
}

renderPrograms(programsArray);

const programModal = document.getElementById("programFormModal");
const addProgramBtn = document.querySelector("#programs .addButton");
const closeProgramBtn = document.getElementById("closeProgramForm");

if (addProgramBtn) {
    addProgramBtn.onclick = () => {
        programModal.style.display = "flex";
    };
}

if (closeProgramBtn) {
    closeProgramBtn.onclick = () => {
        programModal.style.display = "none";
    };
}

const saveProgramBtn = document.getElementById("saveProgram");

if (saveProgramBtn) {
    saveProgramBtn.onclick = () => {

        const newProgram = {
            ID: (programsArray.length + 1).toString(),
            "Program Name": document.getElementById("progName").value,
            Major: document.getElementById("progMajor").value
        };

        programsArray.push(newProgram);

        renderPrograms(programsArray);

        programModal.style.display = "none";
    };
}

const searchProgramBar = document.getElementById("searchProgram");

if (searchProgramBar) {
    searchProgramBar.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = programsArray.filter(prog =>
            prog["Program Name"].toLowerCase().includes(value) ||
            prog.Major.toLowerCase().includes(value)
        );

        renderPrograms(filtered);
    });
}

function renderClassOfferings(tableArray) {
    const table = document.getElementById("offeringsTable");
    if (!table) return;

    table.innerHTML = "";

    tableArray.forEach(co => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${co.Room}</td>
            <td>${co.Section}</td>
            <td>${co.Subject}</td>
            <td>${co.Schedule}</td>
            <td>${co.Instructor}</td>
            <td>${co["School Year"]}</td>
            <td>${co.Sem}</td>
        `;

        table.appendChild(row);
    });
}

function loadClassOfferingDropdowns() {

    const sectionSel = document.getElementById("coSection");
    const subjectSel = document.getElementById("coSubject");
    const scheduleSel = document.getElementById("coSchedule");
    const instructorSel = document.getElementById("coInstructor");

    if (!sectionSel || !subjectSel || !scheduleSel || !instructorSel) return;

    sectionSel.innerHTML = "";
    subjectSel.innerHTML = "";
    scheduleSel.innerHTML = "";
    instructorSel.innerHTML = "";

    sectionsArray.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s["Section Name"];
        opt.textContent = s["Section Name"];
        sectionSel.appendChild(opt);
    });

    subjectsArray.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s["Subject Code"];
        opt.textContent = `${s["Subject Code"]} - ${s["Title"]}`;
        subjectSel.appendChild(opt);
    });

    schedulesArray.forEach(s => {
        const opt = document.createElement("option");
        opt.value = `${s.Day} ${s["Time Start"]}-${s["Time End"]}`;
        opt.textContent = `${s.Day} (${s["Time Start"]}-${s["Time End"]})`;
        scheduleSel.appendChild(opt);
    });

    instructorsArray.forEach(i => {
        const opt = document.createElement("option");
        opt.value = i.Name;
        opt.textContent = i.Name;
        instructorSel.appendChild(opt);
    });
}

const coModal = document.getElementById("classOfferingFormModal");
const addCoBtn = document.querySelector("#classOfferings .addButton");
const closeCoBtn = document.getElementById("closeClassOfferingForm");

if (addCoBtn) {
    addCoBtn.onclick = () => {
        loadClassOfferingDropdowns();
        coModal.style.display = "flex";
    };
}

if (closeCoBtn) {
    closeCoBtn.onclick = () => {
        coModal.style.display = "none";
    };
}

const saveCoBtn = document.getElementById("saveClassOffering");

if (saveCoBtn) {
    saveCoBtn.onclick = () => {

        const newCO = {
            Room: document.getElementById("coRoom").value,
            Section: document.getElementById("coSection").value,
            Subject: document.getElementById("coSubject").value,
            Schedule: document.getElementById("coSchedule").value,
            Instructor: document.getElementById("coInstructor").value,
            "School Year": document.getElementById("coSchoolYear").value,
            Sem: document.getElementById("coSem").value
        };

        classOfferingsArray.push(newCO);

        renderClassOfferings(classOfferingsArray);

        coModal.style.display = "none";
    };
}

const searchCO = document.getElementById("searchClassOffering");

if (searchCO) {
    searchCO.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = classOfferingsArray.filter(co =>
            co.Room.toLowerCase().includes(value) ||
            co.Section.toLowerCase().includes(value) ||
            co.Subject.toLowerCase().includes(value)
        );

        renderClassOfferings(filtered);
    });
}

function loadGuardianDropdown() {
    const select = document.getElementById("studentGuardianSelect");
    if (!select) return;

    select.innerHTML = "";

    guardiansArray.forEach(g => {
        const option = document.createElement("option");

        option.value = g.ID;
        option.textContent = `${g.FirstName} ${g.MiddleName} ${g.LastName}`;

        select.appendChild(option);
    });
}

addStudentBtn.onclick = () => {
    loadGuardianDropdown();
    studentModal.style.display = "flex";
};