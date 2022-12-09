# MoniBank

[Ver esta página em português](#detalhes-do-projeto)

Page of a fictitious bank with a form to open a bank account, in order to test several types of form validation using HTML and Javascript, and also take a picture using the user's webcam.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **MoniBank**
| :label: Tecnologias | html, css, javascript
| :rocket: URL         | https://zingarelli.github.io/monibank/
| :fire: Curso     | https://www.alura.com.br/curso-online-javascript-validando-formularios

![](https://user-images.githubusercontent.com/19349339/206769644-0401b5de-fce1-4bd1-8129-867ce4353c1b.png#vitrinedev)

## Credits

This project was developed in a JavaScript course from [Alura](https://www.alura.com.br), called "JavaScript: validando formulários" (JavaScript: form validation).

Instructor: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**

## Project Details
In this project, there is a [page with a form](https://zingarelli.github.io/monibank/pages/abrir-conta-form.html) to open a bank account in a fictitious bank called "MoniBank". This form has different input types like texts, date, submit and checkbox. The focus of this project is to use HTML and JavaScript to validate these input fields and show proper error messages to the user if the validation of any input fails.

When the user submits a valid form, s/he is [redirected to another page](https://zingarelli.github.io/monibank/pages/abrir-conta-form-2.html), in which it will be possible to access the user's webcam and take a picture of him/her. This picture and the information filled in the form are saved in the browser's local storage.

# Form Validation

HTML5 already provides some built-in validation and controls by adding specific attributes to the `input` HTML element. It's up to the browser to control these validations and display some sort of error message to the user. 

## `type`
The `input` HTML element has a `type` attribute, with which you can tell the browser how this input will be rendered and what type of elements will be accepted. Some built-in constraints  will be available by default, like e-mail validation.

## `minlength` and `maxlength`
These attributes control and limit the minimum and maximum number of characters an input can have. 

## `required`
When submitting a form, input fields with `required` attribute need to have a value in them. Otherwise, the field is flagged as invalid and the submit won't happen.

## `pattern`
This attribute receives a regular expression (regex) and will compare the value in the input with this regex. Validation passes if there's a match between them.

## `validity`
This is a read-only property that returns a `ValidityState` object. This object has several boolean properties provided by the HTML DOM API that we can access to verify different built-in HTML5 input validations.

    console.log(inputElement.validity);

## Preventing default error messages
When an input fails validation, it fires an `invalid` event. We can add an event listener in order to use JavaScript and treat this invalid input (for example, setting a custom message, instead of the default error messages provided by the browser):

```js
// disable default error messages
// form still won't submit, but no built-in errors will be show to the user
inputElement.addEventListener('invalid', e => e.preventDefault());
``` 

## `checkValidity()`
This method verifies the `ValidityState` of the element and returns true if it passes all validations.

## `setCustomValidity()`
You can use this method to set a custom error message when performing a validation in an element using JavaScript. It also sets the property `customError` of the `ValidityState` to true.

# Taking a picture of the user
We can use the following block of code to get access to the user's webcam:

```js
// browser will request the user's permission to access webcam
async cameraAcess() {
    const webcamDevice = document.querySelector('[data-video]'); // HTMLMediaElement
    try{
        const webcamAccess = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        webcamDevice.srcObject = webcamAccess;
    }
    catch (err) { 
        console.log(err); 
    }
}
```

Next, we can use the webcam to draw a picture to a `canvas` element: 

```js
function takePicture() {
    const pictureCanvas = document.querySelector('[data-video-canvas]'); // HTMLCanvasElement

    // create an image based on current frame of the webcam
    pictureCanvas.getContext('2d').drawImage(webcamDevice, 0, 0, pictureCanvas.width, pictureCanvas.height);

    // save image content as JPEG
    imageURL = pictureCanvas.toDataURL('image/jpeg');
}
```

# Screenshots

## Form (in Portuguese) showing error messages (in red) below each input field

![Form showing error messages below each input field](https://user-images.githubusercontent.com/19349339/206759686-7a9361d9-03c5-4ba5-aa58-00578fd18e09.png)

## Taking a picture
![Gif of me taking a picture using](https://user-images.githubusercontent.com/19349339/206767687-784faa03-8181-4ae8-9faa-bd788f594c3f.gif)

## Detalhes do projeto

Site para um banco fictício, o MoniBank.

Neste projeto, há uma [página com um formulário](https://zingarelli.github.io/monibank/pages/abrir-conta-form.html) para abrir uma conta bancária. O formulário contém vários campos de input de diferentes tipos, como texto, data, submit, checkbox. O foco do projeto foi usar HTML e JavaScript para validar estes campos e mostrar mensagens de erro apropriadas à pessoa cliente para o caso de não-validação do que foi digitado.

Quando a pessoa submete o formulário, ela é [redirecionada para uma segunda página](https://zingarelli.github.io/monibank/pages/abrir-conta-form-2.html), em que é possível acessar a câmera do computador/celular da pessoa e tirar uma foto sua. A foto e as informações do formulário são salvas no "local storage" do navegador.

## Créditos

Este projeto foi desenvolvido em um curso de JavaScript da [Alura](https://www.alura.com.br), chamado "JavaScript: validando formulários".

Instrutora: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**

# Validação de formulário

O HTML5 já provê algumas validações e controles nativos ao se adicionar atributos específicos ao elemento HTML de `input`. Cabe ao navegador controlar estas validações e mostrar à pessoa alguma mensagem de erro. 

## `type`

O elemento HTML de `input` possui um atributo `type`, com o qual é possível informar ao navegador como esse campo deve ser renderizado e quais tipos de entrada são aceitas. Algumas restrições nativas são disponibilizadas por padrão, como validação de endereço de e-mail.

## `minlength` e `maxlength`

Estes atributos controlam e limitam, respectivamente, a quantidade mínima e máxima de caracteres que o campo pode ter.

## `required`

Ao submeter um formulário, os campos de input que possuem o atributo `required` não podem estar em branco. Neste caso, o campo é sinalizado como inválido e a submissão do formulário não acontece.

## `pattern`

Este atributo recebe uma expressão regular (regex) e fará a comparação do valor do campo com essa regex, informando se passou ou não na validação.

## `validity`

Esta é uma propriedade somente leitura que retorna um objeto `ValidityState`. Este objeto é disponibilizado pela "API HTML DOM" e possui diversas propriedades com valores booleanos, que podem ser acessadas para verificar as variadas validações nativas feitas pelo HTML5.

    console.log(inputElement.validity);

## Desabilitando mensagens de erro padrão

Quando um campo não passa na validação, um evento `invalid` é disparado. É possível adicionar um *event listener* para utilizar o JavaScript para tratar essa entrada inválida (por exemplo, criar uma mensagem de erro customizada, ao invés da mensagem padrão apresentada pelo navegador).

```js
// desabilita as mensagens de erro padrão
// o formulário continua sem ser submetido, mas os erros não serão mostrados
inputElement.addEventListener('invalid', e => e.preventDefault());
``` 

## `checkValidity()`

Este método verifica o `ValidityState` de um elemento e retorna `true` se todas as validações passarem.

## `setCustomValidity()`

É possível usar este método para criar uma mensagem de erro customizada ao validar um elemento utilizando o JavaScript. O método também marca sete para `true` a propriedade `customError` do `ValidityState`.

# Tirando uma foto

Podemos utilizar o código abaixo para ter acesso à camera de um computador/celular:

```js
// será solicitada permissão para o navegador acessar a câmera
async cameraAcess() {
    const webcamDevice = document.querySelector('[data-video]'); // HTMLMediaElement
    try{
        const webcamAccess = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        webcamDevice.srcObject = webcamAccess;
    }
    catch (err) { 
        console.log(err); 
    }
}
```

Após, podemos utilizar a câmera para tirar uma foto e armazená-la em um elemento HTML `canvas`: 

```js
function takePicture() {
    const pictureCanvas = document.querySelector('[data-video-canvas]'); // HTMLCanvasElement

    // cria uma imagem a partir do frame atual da câmera
    pictureCanvas.getContext('2d').drawImage(webcamDevice, 0, 0, pictureCanvas.width, pictureCanvas.height);

    // salva o conteúdo da imagem como JPEG
    imageURL = pictureCanvas.toDataURL('image/jpeg');
}
```

# Screenshots

## Formulário mostrando as mensagens de erro (em vermelho) para cada campo

![formulário mostrando os campos e as mensagens de erro](https://user-images.githubusercontent.com/19349339/206759686-7a9361d9-03c5-4ba5-aa58-00578fd18e09.png)

## Tirando uma foto
![Gif em que eu tiro uma foto](https://user-images.githubusercontent.com/19349339/206767687-784faa03-8181-4ae8-9faa-bd788f594c3f.gif)