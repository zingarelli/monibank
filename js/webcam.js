const webcamBtn = document.querySelector('[data-video-botao]');
const webcamContainer = document.querySelector('[data-camera]');
const webcamDevice = document.querySelector('[data-video]');
const pictureBtn = document.querySelector('[data-tirar-foto]');
const pictureCanvas = document.querySelector('[data-video-canvas]'); 
const pictureContainer = document.querySelector('[data-mensagem]'); 
const formBtn = document.querySelector('[data-enviar]');

let imageURL = '';

// get access to user's webcam and show on page
webcamBtn.addEventListener('click', async (e) => {
    // user needs to authorize access
    try {
        const getWebcam = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        webcamDevice.srcObject = getWebcam;
    
        webcamBtn.style.display = 'none';
        webcamContainer.style.display = 'block';
    }
    catch (err) {
        const errorMessage = e.target.parentNode.querySelector('.formulario__texto');
        errorMessage.innerText = 'Você precisa conceder o acesso a sua câmera. Por favor, verifique as configurações do seu navegador e recarregue a página.';
        errorMessage.classList = 'mensagem-erro';
        console.log(err);
    }
});

// show captured picture when the user clicks to take a photo
pictureBtn.addEventListener('click', () => {
    // create an image based on current frame of the webcam
    pictureCanvas.getContext('2d').drawImage(webcamDevice, 0, 0, pictureCanvas.width, pictureCanvas.height);

    // save image as JPEG
    imageURL = pictureCanvas.toDataURL('image/jpeg');

    webcamContainer.style.display = 'none';
    pictureContainer.style.display = 'block';
});

// save picture locally in the browser
formBtn.addEventListener('click', () => {
    const localData = JSON.parse(localStorage.getItem('register'));
    // add image content to local storage
    localData.image =  imageURL;
    localStorage.setItem('register', JSON.stringify(localData));

    window.location.href = 'abrir-conta-form-3.html';
})