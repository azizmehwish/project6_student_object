#! /user/bin/env node
import  inquirer from "inquirer"
class Student {
    id:string;
    name:string;
    courseEnrolled:string[];
    feesAmount:number;
    constructor(id:string,name:string,courseEnrolled:string[],feesAmount:number)
{
    this.id=id
    this.name=name
    this.courseEnrolled=courseEnrolled
    this.feesAmount=feesAmount
}
}
let baseId=10000
let studentId:string="";
let courseEnrolled=true
let students:Student[]=[]
do{
    let action=await inquirer.prompt([{
      type:"list",
      name:"ans",
      message:"please select an optin:\n",
      choices:["Enrolled a student","show student status"]  
    }])
    if(action.ans==="Enrolled a student"){
        let studentName=await inquirer.prompt([{
            type:"input",
            name:"ans",
            message:"please enter your name"
        }])
        
        let trimStudent=(studentName.ans).trim().toLowerCase()

        let studentNamecheak=students.map(obj=>obj.name)
        if(studentNamecheak.includes(trimStudent)=== false){
        if (trimStudent!==""){
            baseId++
            studentId="STID"+baseId
            console.log("\n\tyour account has been  created")
            console.log(`well come,${trimStudent} !`)
            let cource=await inquirer.prompt([{
                type:"list",
                name:"ans",
                message:"please select a course",
                choices:["IT","English","Cooking"]
            }])
            let courseFees=0;
            switch(cource.ans){
                case"IT":
                courseFees=5000;
                break;
                
                
                    case"English":
                    courseFees=500;
                    break;
                    
            
                case"Cooking":
                courseFees=200;
                break;
                }
            
            let courseConfirm=await inquirer.prompt([{
                type:"confirm",
                name:"ans",
                message:"Do you want to enrolled in this course"
            }])
            if(courseConfirm.ans===true){
                let student=new Student(studentId,trimStudent ,[cource.ans],courseFees)
            students.push(student)
console.log("you have enrolled in this   course")
            }
        
    }else{
        console.log("invalid name");
    }
    }else{
        console.log("this name is already exist")
    }
}
    else if(action.ans==="show student status"){
if(students.length !==0){
    let studentNamecheak=students.map(e=>e.name)
    let selectstudent=await inquirer.prompt([{
        type:"list",
        name:"ans",
        message:"please select name",
        choices:studentNamecheak
    }])
    let foundstudent=students.find(student=>student.name===selectstudent.ans)
    console.log("student information");
    console.log(foundstudent);
    console.log("\n")
    }else{
        console.log("Record is empty")
    }
}
let usercofirm=await inquirer.prompt([{
    type:"confirm",
    name:"ans",
    message:"Do you want to continue?"
}])
if
   ( usercofirm.ans===false){
    courseEnrolled=false
   }

}while(courseEnrolled)