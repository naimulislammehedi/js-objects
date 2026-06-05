// JavaScript Objects: A JavaScript Object is a data structure used to store related data as key-value pairs. 

const student = {
    name: "Mehedi", 
    age: 25, 
    city: "Ctg"
}; 

console.log(student)

// Access Object Properties 
// Dot Notation 
console.log(student.name); 

// Bracket Notation 
console.log(student["age"]); 

// Add a New Property 
student.profession = "Web Developer"; 
console.log(student); 

// Update a Property 
student.age = 26; 
console.log(student.age); 

// Delete a Property 
delete student.city; 
console.log(student)