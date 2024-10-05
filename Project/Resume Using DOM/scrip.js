const body = document.querySelector('body');

const main = document.createElement('main');

const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'Hardik Goyal';
header.appendChild(title);

const personalDetailsSection = document.createElement('section');
const personalHeading = document.createElement('h2');
personalHeading.textContent = 'Personal Details';
personalDetailsSection.appendChild(personalHeading);

const personalDetailsList = document.createElement('ul');
const email = document.createElement('li');
email.textContent = 'Email: goyalhardik654@gmail.com';
const phone = document.createElement('li');
phone.textContent = 'Phone: +6284881755';
const address = document.createElement('li');
address.textContent = 'Address: Guru Nanak Nagar, Patiala';
const linkedIn = document.createElement('li');
linkedIn.textContent = 'LinkedIn: linkedin.com/in/hardikgoyal';

personalDetailsList.appendChild(email);
personalDetailsList.appendChild(phone);
personalDetailsList.appendChild(address);
personalDetailsList.appendChild(linkedIn);
personalDetailsSection.appendChild(personalDetailsList);

const educationSection = document.createElement('section');
const educationHeading = document.createElement('h2');
educationHeading.textContent = 'Education';
educationSection.appendChild(educationHeading);

const educationList = document.createElement('ul');
const education1 = document.createElement('li');
education1.textContent = 'High School Diploma, Patiala High School (2020 - 2023)';
const education2 = document.createElement('li');
education2.textContent = 'Bachelor of Science in Computer Science, Chitkara University (2023 - 2027)';

educationList.appendChild(education1);
educationList.appendChild(education2);
educationSection.appendChild(educationList);

// Create the work experience section
const workExperienceSection = document.createElement('section');
const workExperienceHeading = document.createElement('h2');
workExperienceHeading.textContent = 'Work Experience';
workExperienceSection.appendChild(workExperienceHeading);

const workExperienceList = document.createElement('ul');
const job1 = document.createElement('li');
job1.textContent = 'Web Developer Intern, Tech Innovators (2023 - Present)';
const job2 = document.createElement('li');
job2.textContent = 'Freelance Web Developer (2021 - 2023)';

workExperienceList.appendChild(job1);
workExperienceList.appendChild(job2);
workExperienceSection.appendChild(workExperienceList);

// Create the skills section
const skillsSection = document.createElement('section');
const skillsHeading = document.createElement('h2');
skillsHeading.textContent = 'Skills';
skillsSection.appendChild(skillsHeading);

const skillsList = document.createElement('ul');
const skill1 = document.createElement('li');
skill1.textContent = 'JavaScript ';
const skill2 = document.createElement('li');
skill2.textContent = 'React JS';
const skill3 = document.createElement('li');
skill3.textContent = 'HTML & CSS';
const skill4 = document.createElement('li');
skill4.textContent = 'Node.js & Express';
const skill5 = document.createElement('li');
skill5.textContent = 'Database Management (MongoDB, MySQL)';
const skill6 = document.createElement('li');
skill6.textContent = 'Version Control (Git & GitHub)';

skillsList.appendChild(skill1);
skillsList.appendChild(skill2);
skillsList.appendChild(skill3);
skillsList.appendChild(skill4);
skillsList.appendChild(skill5);
skillsList.appendChild(skill6);
skillsSection.appendChild(skillsList);

// Create the certifications section
const certificationsSection = document.createElement('section');
const certificationsHeading = document.createElement('h2');
certificationsHeading.textContent = 'Certifications';
certificationsSection.appendChild(certificationsHeading);

const certificationsList = document.createElement('ul');
const certification1 = document.createElement('li');
certification1.textContent = 'Google Cloud Certified Professional Cloud Architect (2023)';
const certification2 = document.createElement('li');
certification2.textContent = 'JavaScript Algorithms and Data Structures, freeCodeCamp (2022)';

certificationsList.appendChild(certification1);
certificationsList.appendChild(certification2);
certificationsSection.appendChild(certificationsList);

// Append all sections to the main container
main.appendChild(header);
main.appendChild(personalDetailsSection);
main.appendChild(educationSection);
main.appendChild(workExperienceSection);
main.appendChild(skillsSection);
main.appendChild(certificationsSection);

// Append the main container to the body
body.appendChild(main);
