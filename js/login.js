function counting(num) {
    return String(num).split('').reduce(
        (count, digit) => count + 1, 0);
}

document.getElementById('btn-login').addEventListener('click',function(event){
    const studentId=document.getElementById('student-id');
    const userEmail=document.getElementById('user-email');
    var correctEmail=false;
    if(userEmail.value.includes("@") && userEmail.value.includes(studentId.value) && userEmail.value.includes('buet.ac.bd')){
        correctEmail=true;
        console.log('correct');
    }
    if(parseFloat(counting(studentId.value))===7 && correctEmail==true){
        // alert('success');
        window.location.href='login.html';
    }
    else{
        alert('You are not a BUETian.');
    }
    
})