class Human{
    setName(name){
   if (isNaN(name) && name.length>=3) {
    this.name = name;
   }else{
    console.log("The name should be string and greater than 3");
   }
}
   getName(){
    return this.name;
   }
   setAge(age){
    if(!isNaN(age)){
        this.age = age
    }
    else{
        console.log("The age should be number");
    }
}
    getAge(){
        return this.age;
    }
   setEmail(email){
    if(email.includes('@') || isNaN(email)){
        this .email = email;
    }
   else{
        console.log("the email should be string");
   }
}
getEmail(){
    return this.email
}
}
new Human( )