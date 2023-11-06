// Union
type Gender = "male" | "female" | "other";

type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

// Intersection
type FrontendDev = {
    skills: string[];
    readonly designation: "Frontend Developer";
}
type BackendDev = {
    skills: string[];
    readonly designation2: "Backend Developer";
}

// Union
type FullStackDeveloper = FrontendDev & BackendDev;

const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "ExpressJS"],
    designation: "Frontend Developer",
    designation2: "Backend Developer"
}