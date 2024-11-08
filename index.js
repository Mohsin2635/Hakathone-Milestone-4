"use strict";
let fullName = document.getElementById("fullName");
let number = document.getElementById("number");
let email = document.getElementById("email");
let address = document.getElementById("address");
let interest = document.getElementById("interest");
let pics = document.getElementById("pics");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
// SKILLS
const addskillBtn = document.getElementById("addskillBtn");
const skill_container = document.getElementById("skill_container");
let skillCount = 1;
addskillBtn.addEventListener("click", () => {
    skillCount++;
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.id = `skill${skillCount}`;
    skillInput.name = "skill[]";
    skillInput.required = true;
    skillInput.placeholder = `Skills ${skillCount}`;
    skill_container.appendChild(skillInput);
});
// Project
const addprojectBtn = document.getElementById("addprojectBtn");
const project_container = document.getElementById("project_container");
let projectCount = 1;
addprojectBtn.addEventListener("click", () => {
    projectCount++;
    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.id = `project${projectCount}`;
    projectInput.name = "project[]";
    projectInput.required = true;
    projectInput.placeholder = `Projects ${projectCount}`;
    project_container.appendChild(projectInput);
});
// Education
const addeducationBtn = document.getElementById("addeducationBtn");
const education_container = document.getElementById("education_container");
let educationCount = 1;
addeducationBtn.addEventListener("click", () => {
    educationCount++;
    //Degree
    const degreeInput = document.createElement("input");
    degreeInput.type = "text";
    degreeInput.id = `degree${educationCount}`;
    degreeInput.name = "degree[]";
    degreeInput.required = true;
    degreeInput.placeholder = `Degree ${educationCount}`;
    // Institute
    const instituteInput = document.createElement("input");
    instituteInput.type = "text";
    instituteInput.id = `institute${educationCount}`;
    instituteInput.name = "institute[]";
    instituteInput.placeholder = "Institute Name";
    instituteInput.required = true;
    //passde year
    const passYearInput = document.createElement("input");
    passYearInput.type = "date";
    passYearInput.name = "passsed_year[]";
    passYearInput.id = `passsed_year${educationCount}`;
    passYearInput.required = true;
    education_container.appendChild(degreeInput);
    education_container.appendChild(instituteInput);
    education_container.appendChild(passYearInput);
});
// Work Experience
const addexperenceBtn = document.getElementById("addexperenceBtn");
const experience_container = document.getElementById("experience_container");
let experienceCount = 1;
addexperenceBtn.addEventListener("click", () => {
    experienceCount++;
    //Comany name
    const companyInput = document.createElement("input");
    companyInput.type = "text";
    companyInput.id = `company_name${experienceCount}`;
    companyInput.name = "company[]";
    companyInput.required = true;
    companyInput.placeholder = `Company Name:${experienceCount}`;
    // field
    const fieldInput = document.createElement("input");
    fieldInput.type = "text";
    fieldInput.id = `field${experienceCount}`;
    fieldInput.name = "field[]";
    fieldInput.placeholder = "Enter Your Field";
    fieldInput.required = true;
    //Work Date
    const workdateInput = document.createElement("input");
    workdateInput.type = "date";
    workdateInput.name = "work_date[]";
    workdateInput.id = `work_date${experienceCount}`;
    workdateInput.required = true;
    experience_container.appendChild(companyInput);
    experience_container.appendChild(fieldInput);
    experience_container.appendChild(workdateInput);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("fullName", fullName.value);
    localStorage.setItem("number", number.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("interest", interest.value);
    if (pics.files.length >= 0) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImage = reader.result;
            localStorage.setItem("TextImage", textImage);
        });
        reader.readAsDataURL(pics.files[0]);
    }
    else {
        console.log(`Your Image Not Loaded`);
    }
    // Skills
    const skillNumber = Array.from(form.querySelectorAll("input[name='skill[]']")).map((input) => input.value);
    localStorage.setItem("skillNumber", JSON.stringify(skillNumber));
    //PROJECTS
    const projectNumber = Array.from(form.querySelectorAll("input[name='project[]']")).map((input) => input.value);
    localStorage.setItem("projectNumber", JSON.stringify(projectNumber));
    // Education
    // Degree
    const degreeNumber = Array.from(form.querySelectorAll("input[name='degree[]']")).map((input) => input.value);
    localStorage.setItem("degreeNumber", JSON.stringify(degreeNumber));
    //Insitute
    const InstituteNumber = Array.from(form.querySelectorAll("input[name='institute[]']")).map((input) => input.value);
    localStorage.setItem("InstituteNumber", JSON.stringify(InstituteNumber));
    //passed year
    const passedYearNumber = Array.from(form.querySelectorAll("input[name='passsed_year[]']")).map((input) => input.value);
    localStorage.setItem("passedYearNumber", JSON.stringify(passedYearNumber));
    // Experience
    // company
    const companyNumber = Array.from(form.querySelectorAll("input[name='company[]']")).map((input) => input.value);
    localStorage.setItem("companyNumber", JSON.stringify(companyNumber));
    //Field
    const fieldNumber = Array.from(form.querySelectorAll("input[name='field[]']")).map((input) => input.value);
    localStorage.setItem("fieldNumber", JSON.stringify(fieldNumber));
    //work year
    const workYearNumber = Array.from(form.querySelectorAll("input[name='work_date[]']")).map((input) => input.value);
    localStorage.setItem("workYearNumber", JSON.stringify(workYearNumber));
    //Loading Next Page....
    window.location.href = "./Inner Page/index.html";
});
