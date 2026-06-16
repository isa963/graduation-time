// Respuesta correcta a la pregunta
const correctAnswer = "Comunicación";

// Función para validar la respuesta
function checkAnswer() {
    const input = document.getElementById('answerInput');
    const errorMessage = document.getElementById('errorMessage');
    const answer = input.value.trim();

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        // Respuesta correcta
        showInvitation();
        errorMessage.textContent = '';
    } else {
        // Respuesta incorreta
        errorMessage.textContent = '❌ Intenta de nuevo';
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
}

// Permitir enviar con Enter
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('answerInput');
    if (input) {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkAnswer();
            }
        });
    }

    // Iniciar cuenta regresiva
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Función para mostrar la invitación
function showInvitation() {
    const questionScreen = document.getElementById('questionScreen');
    const invitationScreen = document.getElementById('invitationScreen');

    questionScreen.classList.remove('active');
    invitationScreen.classList.add('active');

    // Scroll al top
    window.scrollTo(0, 0);
}

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    // Fecha objetivo: 20 de junio de 2026 a las 7:00 PM
    const targetDate = new Date('2026-06-20T19:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        // La fecha ha llegado
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    // Calcular tiempo restante
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Función para responder RSVP
function respondRSVP(response) {
    const rsvpMessage = document.getElementById('rsvpMessage');

    if (response === 'yes') {
        rsvpMessage.innerHTML = '✨ ¡Gracias! Te esperaré allá 🎓';
        rsvpMessage.style.color = '#9A0002';
    } else {
        rsvpMessage.innerHTML = '💌 ¡Entiendo! Espero que puedas visitarme pronto 🥰';
        rsvpMessage.style.color = '#9A0002';
    }

    // Animación
    rsvpMessage.style.animation = 'none';
    setTimeout(() => {
        rsvpMessage.style.animation = 'slideUp 0.5s ease-out';
    }, 10);
}

// Agregar animación shake al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .answer-input.shake {
        animation: shake 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);