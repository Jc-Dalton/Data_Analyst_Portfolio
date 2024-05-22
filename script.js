// Your JavaScript code remains unchanged
function showSkills() {
    const skills = document.getElementById('skills');
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
}
