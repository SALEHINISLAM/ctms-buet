const building = document.getElementById('building');
const floor = document.getElementById('floor');
const gender = document.getElementById('gender');
const problem = document.getElementById('problem');
const submitBtn = document.getElementById('problem-submit-btn');

submitBtn.addEventListener('click', function() {
    if (building.value === 'Which Building?' || floor.value === 'In Which Floor?' || gender.value === 'In Which Toilet?' || problem.value === 'What is the Problem?') {
        alert('Please select every field');
    } else {
        const formData = new FormData();
        formData.append('entry.864307097', building.value); // replace with your field name
        formData.append('entry.1407030764', floor.value); // replace with your field name
        formData.append('entry.1437054090', gender.value); // replace with your field name
        formData.append('entry.1404354671', problem.value); // replace with your field name

        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSefvsU5abnkWBBSz93C-pYY-3BqHI5HT2jM42_ZALwsPd2PFQ/formResponse', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            alert("Your problem submitted successfully!");
            //  Redirect to a page or clear the form
            window.location.href='congratulation.html';
        }).catch((error) => {
            console.error('Error!', error.message);
            alert("There was an error submitting the problem. Please try again.");
        });
    }
});