document.getElementById('fileInput').addEventListener('change', function(event) {
    const photoArea = document.getElementById('photoArea');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImg = document.createElement('img');
            newImg.setAttribute('src', e.target.result);
            newImg.classList.add('photo');
            photoArea.appendChild(newImg);
            newImg.onclick = function() {
                
                if (this.classList.contains('zoom')) {
                    this.classList.remove('zoom');
                } else {
                    this.classList.add('zoom');
                }
            }
        };
        reader.readAsDataURL(file);
    }
});
