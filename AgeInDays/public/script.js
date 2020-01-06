function ageInDays(){
    let getAge = prompt('What is your Birth Year?');
    let currentYear = new Date();
    let calculateAge = (currentYear.getFullYear() - getAge) * 365;
    // create dynamic element 
    let h2 = document.createElement('h1');
    h2.setAttribute('id','setAge');
    let age = document.createTextNode(`You are ${calculateAge} days old`);
    h2.appendChild(age);
    document.getElementById('result').appendChild(h2);
}

function reset(){
    document.getElementById('setAge').remove();
}
