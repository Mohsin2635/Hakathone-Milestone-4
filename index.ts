let fullName: any = document.getElementById("fullName");
let number: any = document.getElementById("number");
let email: any = document.getElementById("email");
let address: any = document.getElementById("address");
let interest: any = document.getElementById("interest");
let pics: any = document.getElementById("pics");

let submit: any = document.getElementById("submit");
let form = document.getElementById("form") as HTMLFormElement;

// SKILLS
const addskillBtn = document.getElementById("addskillBtn") as HTMLButtonElement;
const skill_container = document.getElementById(
  "skill_container"
) as HTMLDivElement;

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
const addprojectBtn = document.getElementById(
  "addprojectBtn"
) as HTMLButtonElement;
const project_container = document.getElementById(
  "project_container"
) as HTMLDivElement;

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
const addeducationBtn = document.getElementById(
  "addeducationBtn"
) as HTMLButtonElement;
const education_container = document.getElementById(
  "education_container"
) as HTMLDivElement;

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

const addexperenceBtn = document.getElementById(
  "addexperenceBtn"
) as HTMLButtonElement;
const experience_container = document.getElementById(
  "experience_container"
) as HTMLDivElement;

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

form.addEventListener("submit", (e: any) => {
  e.preventDefault();

  localStorage.setItem("fullName", fullName.value);
  localStorage.setItem("number", number.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("address", address.value);
  localStorage.setItem("interest", interest.value);

  if (pics.files.length >= 0) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let textImage: any = reader.result;
      localStorage.setItem("TextImage", textImage);
    });
    reader.readAsDataURL(pics.files[0]);
  } else {
    console.log(`Your Image Not Loaded`);
  }
  // Skills
  const skillNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='skill[]']")
  ).map((input) => input.value);
  localStorage.setItem("skillNumber", JSON.stringify(skillNumber));

  //PROJECTS
  const projectNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='project[]']")
  ).map((input) => input.value);
  localStorage.setItem("projectNumber", JSON.stringify(projectNumber));
  // Education
  // Degree
  const degreeNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='degree[]']")
  ).map((input) => input.value);
  localStorage.setItem("degreeNumber", JSON.stringify(degreeNumber));
  //Insitute
  const InstituteNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='institute[]']")
  ).map((input) => input.value);
  localStorage.setItem("InstituteNumber", JSON.stringify(InstituteNumber));
  //passed year
  const passedYearNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='passsed_year[]']")
  ).map((input) => input.value);
  localStorage.setItem("passedYearNumber", JSON.stringify(passedYearNumber));
  // Experience
  // company
  const companyNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='company[]']")
  ).map((input) => input.value);
  localStorage.setItem("companyNumber", JSON.stringify(companyNumber));
  //Field
  const fieldNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='field[]']")
  ).map((input) => input.value);
  localStorage.setItem("fieldNumber", JSON.stringify(fieldNumber));
  //work year
  const workYearNumber = Array.from(
    form.querySelectorAll<HTMLInputElement>("input[name='work_date[]']")
  ).map((input) => input.value);
  localStorage.setItem("workYearNumber", JSON.stringify(workYearNumber));

  //Loading Next Page....
  window.location.href = "./Inner Page/index.html";
});
