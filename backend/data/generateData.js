
import { faker } from "@faker-js/faker";
import fs from "fs";

// Generate 10 fake users
const users = Array.from({ length: 10 }).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(), // random password
}));

const userFilePath = "C:\\Vscoder\\projects\\JobPortal\\backend\\data\\users.json";
// fs.writeFileSync( filePath, JSON.stringify(users, null, 2));
console.log("✅ Fake users saved to users.json");

const jobs = Array.from({ length: 10 }).map(() => ({
  title: faker.person.jobTitle(),
  description: faker.lorem.sentence(),
  skills: faker.helpers.arrayElements(["JavaScript","Python", "Java", "C#", "Ruby", "Go", "PHP", "Swift"], 3),
  company: faker.company.name(),
  location: faker.location.city(),
  salary: faker.number.int({ min: 40000, max: 150000 })
}));

const jobFilePath = "C:\\Vscoder\\projects\\JobPortal\\backend\\data\\jobs.json";
fs.writeFileSync( jobFilePath, JSON.stringify(jobs, null, 2));
console.log("✅ Fake users saved to jobs.json");
