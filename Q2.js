//Tabla hash que almacena la info de todas las preguntas, por cada pregunta debe haber la pregunta, 
//sus 3 posibles respuestas siendo R1 la correcta, y una direccion de la imagen de la pregunta

var HashPreguntas = {
  "P1": { Pregunta: "¿Qué evento marcó el comienzo de la Segunda Guerra Mundial en Europa?", R1: "La invasión de Polonia", R2: "El ataque a Pearl Harbor", R3: "La muerte de Hitler", Img:"picsp/img1p.jpeg"},
  "P2": { Pregunta: "¿Cuál de los siguientes líderes militares fue conocido como el 'Gran Emperador'?", R1: "Napoleón Bonaparte", R2: "Julio César", R3: "Alejandro Magno", Img:"picsp/img2p.jpeg"},
  "P3": { Pregunta: "¿En qué año llegó Cristóbal Colón al continente americano?", R1: "1492", R2: "1519", R3: "1776", Img:"picsp/img3p.jpeg"},
  "P4": { Pregunta: "¿Cuál de las siguientes civilizaciones construyó las pirámides de Giza?", R1: "Antiguo Egipto", R2: "Antigua Grecia", R3: "Imperio Azteca", Img:"picsp/img4p.jpeg"},
  "P5": { Pregunta: "¿Qué famoso científico desarrolló la teoría de la relatividad?", R1: "Albert Einstein", R2: "Isaac Newton", R3: "Galileo Galilei", Img:"picsp/img5p.jpeg"},
  "P6": { Pregunta: "¿¿Cuál fue el líder político y militar que encabezó la Revolución Cubana en 1959?", R1: "Fidel Castro", R2: "Che Guevara", R3: "Hugo Chávez", Img:"picsp/img6p.jpeg"},
  "P7": { Pregunta: "¿En qué año cayó el Muro de Berlín, marcando el final de la Guerra Fría?", R1: "1989", R2: "1975", R3: "1991", Img:"picsp/img7p.jpeg"},
  "P8": { Pregunta: "¿Cuál fue el nombre del movimiento artístico y cultural que floreció en Europa durante el siglo XVI y XVII?", R1: "Renacimiento", R2: "Barroco", R3: "Ilustración", Img:"picsp/img8p.jpeg"},
  "P9": { Pregunta: "¿Cuál fue el período de la historia de Japón en el que gobernaron los samuráis?", R1: "Período feudal", R2: "Período Meiji", R3: "Período Edo", Img:"picsp/img9p.jpeg"},
  "P10": { Pregunta: "¿Cuál fue la primera civilización en desarrollar un sistema de escritura conocido como cuneiforme?", R1: "Sumerios", R2: "Egipcios", R3: "Griegos", Img:"picsp/img10p.jpeg"},
  "P11": { Pregunta: "¿Cuál es el río más largo del mundo?", R1: "El Río amazonas", R2: "El Río Nilo", R3: "El Río Misisipi", Img:"picsp/img11p.png"},
  "P12": { Pregunta: "¿Cuál es la montaña más alta del mundo?", R1: "Monte Everest", R2: "Monte Elbrús", R3: "Monte Makalu", Img:"picsp/img12p.png"},
  "P13": { Pregunta: "¿Cuál es el país más grande del mundo?", R1: "Rusia", R2: "China", R3: "Estados Unidos de América", Img:"picsp/img13p.png"},
  "P14": { Pregunta: "¿Cuál es el país con más densidad poblacional del mundo?", R1: "India", R2: "China", R3: "Indosenia", Img:"picsp/img14p.png"},
  "P15": { Pregunta: "¿Cuál es la capital de Japón?", R1: "Tokio", R2: "Kioto", R3: "Osaka", Img:"picsp/img15p.png"},
  "P16": { Pregunta: "¿Cuál es el océano más grande del mundo?", R1: "Océano Pacífico", R2: "Océano Atlántico", R3: "Océano Índico", Img:"picsp/img16p.png"},
  "P17": { Pregunta: "¿Cuál es el país más pequeño del mundo?", R1: "Vaticano", R2: "Mónaco", R3: "Tlaxcala", Img:"picsp/img17p.png"},
  "P18": { Pregunta: "¿Cuál es el desierto mas grande del mundo?", R1: "Desierto del Sahara", R2: "Desierto de Sonora", R3: "Desierto de Arabia", Img:"picsp/img18p.png"},
  "P19": { Pregunta: "¿Cuál es el país con forma de bota?", R1: "Italia", R2: "Marruecos", R3: "Nigeria", Img:"picsp/img19p.png"},
  "P20": { Pregunta: "¿Cuál es el país con mayor cantidad de islas?", R1: "Suecia", R2: "Noruega", R3: "Finlandia", Img:"picsp/img20p.png"}
};

window.onload = function() {

  //se requieren saber en que elementos del html se van a asignar los elementos de una pregunta de la tabla hash, 
  //y debe haber un total 5 preguntas que sean seleccionads de forma random ver la funcion de selectrandomquestions()
  var progressBar = document.querySelector('.progress');
  var countdownElement = document.querySelector('.countdown');
  var preguntaElement = document.getElementById('pregunta1');
  var respuestasElements = document.querySelectorAll('.respuesta');
  var imagenElement = document.getElementById('imagen');
  var selectedQuestions = selectRandomQuestions(5);

  //Debe haber variables para decir que se inicia en la pregunta 0, con un total de respuestas 
  //correctas de 0 y un contador que tiene un valor de 12 'segundos'
  var currentQuestionIndex = 0;
  var score = 0;
  var countdown = 12;

  //Referencia al intervalo del temporizador
  var interval;

  //Carga una pregunta en la pantalla
  loadQuestion(selectedQuestions[currentQuestionIndex]);

  //Selecciona preguntas aleatorias de un conjunto de preguntas
  function selectRandomQuestions(numQuestions) {
      var keys = Object.keys(HashPreguntas); // Obtiene todas las claves de las preguntas dentro de la tabla hash
      var selected = []; //creamos un array que sera el que almacene las preguntas
      while (selected.length < numQuestions) {
          var randomIndex = Math.floor(Math.random() * keys.length); // Genera un índice aleatorio dentro del rango de claves
          var key = keys[randomIndex];
          if (!selected.includes(key)) {
              selected.push(key);
          }
      }
      return selected;
  }
  //Carga los elementos de una pregunta en la pantalla
  function loadQuestion(questionKey) {
      var question = HashPreguntas[questionKey];//Obtenemos la pregunta utilizando la clave proporcionada
      preguntaElement.textContent = question.Pregunta; //Establece el texto de la pregunta
      imagenElement.querySelector('img').src = question.Img; //Establece la imáagen de la pregunta

      //Baraja las respuestas para que aparezcan en orden aleatorio ya que si no la primera opción simpre sería la corecta
      var shuffledAnswers = shuffle([
          question.R1,
          question.R2,
          question.R3
      ]);

      //Asigna las respuestas a los elementos de respuesta correspondientes en la interfaz de la pestaña
      respuestasElements.forEach(function(element, index) {
          element.textContent = shuffledAnswers[index];
          element.style.backgroundColor = ''; // Reinicia el color de fondo
          element.onclick = function() {
              respuestasElements.forEach(function(element) {
                  element.style.backgroundColor = ''; // Reinicia el color de fondo de las respuestas
              });
              element.style.backgroundColor = 'rgb(0, 102, 204)'; 
              clearInterval(interval);
              checkAnswer(element, shuffledAnswers[index] === question.R1);
          };
      });
      startTimer();
  }

  // Inicia el temporizador para la pregunta actual, por cada pregunta este timer debe funcionar
  function startTimer() {
      countdown = 12; // Duración del temporizador en segundos, como está arriba 
      progressBar.style.width = '100%'; // Establece la anchura inicial de la barra de progreso al 100%, conforme baje el contador, bajará su anchura
      countdownElement.textContent = countdown;
      interval = setInterval(function() {
          countdown--; //Baja el contador de segundo en segundo
          var progress = (countdown / 12) * 100; //Se calcula el progreso actual en porcentaje
          progressBar.style.width = progress + '%'; //Actualiza la anchura de la barra de progreso
          countdownElement.textContent = countdown;

          // Si el contador llega a cero, se detiene el temporizador y se llama a la función checkAnswer 
          //con una respuesta incorrecta (null, false)
          if (countdown <= 0) {
              clearInterval(interval);
              checkAnswer(null, false);
          }
      }, 1000); //El intervalo se ejecuta cada segundo, son mil porque son milisegundos realmente
  }
  function checkAnswer(selectedElement, isCorrect) {
    respuestasElements.forEach(function(element) {
      // Reinicia el color de fondo de todas las respuestas
      element.style.backgroundColor = '';
    });
    if (selectedElement) {
      selectedElement.style.backgroundColor = 'rgb(0, 102, 204)'; // Mantén el color de fondo azul
    }
    if (isCorrect) {
      //si fue una respuesta debe de marcarse el color div con un background color verde 
      //y debe aumentar el valor de score 'respuestas correctas'
      selectedElement.style.backgroundColor = 'green';
      score++;
    } else if (!selectedElement) {
      respuestasElements.forEach(function(element) {
        if (element.textContent === HashPreguntas[selectedQuestions[currentQuestionIndex]].R1) {
          element.style.backgroundColor = 'green';
        }
      });
    } else {
      selectedElement.style.backgroundColor = 'red'; //Cambia el color de fondo a rojo para la respuesta incorrecta
    }
    setTimeout(function() {
      showResult(isCorrect);
    }, 1000);
  }
  function showResult(isCorrect) {
    // Obtiene la respuesta correcta de la pregunta actual
      var correctAnswer = HashPreguntas[selectedQuestions[currentQuestionIndex]].R1; //como decia arriba todas las r1 son las respuestas correctas
      
      // Recorre todas las respuestas y resalta la respuesta correcta en verde
      respuestasElements.forEach(function(element) {
          if (element.textContent === correctAnswer) {
              element.style.backgroundColor = 'green';
          }
      });
      //Después de .2 segundos, llama a la función resetQuestion para pasar a la siguiente pregunta
      setTimeout(resetQuestion, 200);
  }

  //Reinicia la pregunta actual y pasa a la siguiente pregunta.
  function resetQuestion() {
    //Incrementa el índice de la pregunta actual
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      //Si todavia no supera el valor de preguntas totales, carga la siguiente pregunta
      loadQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
      clearInterval(interval);
      //Si no hay más preguntas, se detiene el intervalo y se va a q3.html
      var url = 'q3.html?score=' + score + '&total=5';
      window.location.href = url;
    }
  }
  function shuffle(array) {
      var currentIndex = array.length; 
      var temporaryValue, randomIndex;

      //Mientras queden elementos sin barajar
      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          //Intercambia el elemento actual con el elemento seleccionado aleatoriamente
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  }
};