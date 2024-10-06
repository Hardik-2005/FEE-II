document.getElementById('update-button').onclick = function () {

    const newName = document.getElementById('name-input').value;
    const newBio = document.getElementById('bio-input').value;
    const newPicUrl = document.getElementById('pic-input').value;

    if (newName.trim() && newBio.trim()) {
        
        document.getElementById('profile-name').value = newName;
        document.getElementById('profile-bio').value = newBio;

        if (newPicUrl.trim()) {
            document.getElementById('profile-pic').src = newPicUrl;
        }
    } else {
        
        alert('Please provide valid name and bio.');
    }
};
