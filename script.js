document.addEventListener("DOMContentLoaded", () => {
    // Инициализация Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });

    // Модальные окна для новостей
    let modal = document.getElementById("newsModal");
    let modalImage = document.getElementById("modalImage");
    let modalTitle = document.getElementById("modalTitle");
    let modalDescription = document.getElementById("modalDescription");
    let closeModal = document.querySelector(".close-modal");

    const newsDescriptions = [
        "Команда 'АРМО' начала подготовку к новому сезону с интенсивных тренировок на льду. Тренерский штаб уверен, что команда покажет отличные результаты в предстоящих матчах.",
        "Игроки команды 'АРМО' активно тренируются на льду, чтобы улучшить свои навыки и показать лучшие результаты в предстоящих играх. Тренировки проходят под руководством опытных тренеров.",
        "В этом сезоне к команде 'АРМО' присоединились два новых игрока, которые уже показывают отличные результаты на тренировках. Ожидается, что они внесут значительный вклад в успех команды.",
        "Команда 'АРМО' готовится к важному матчу против сильного соперника. Тренеры и игроки уверены в своих силах и надеются на поддержку болельщиков.",
        "Наш тренер поделился планами на сезон и рассказал о подготовке команды. Он отметил, что команда находится в отличной форме и готова к новым вызовам.",
        "Встреча с болельщиками состоится в ближайшую субботу. Это отличная возможность для фанатов пообщаться с игроками и тренерами команды."
    ];

// Исправление модальных окон
document.querySelectorAll(".read-more").forEach((button, index) => {
    button.addEventListener("click", () => {
        const card = button.closest(".news-card");
        const video = card.querySelector("video");
        const title = card.querySelector("h3").textContent;
        const description = newsDescriptions[index];

        modalTitle.textContent = title;
        modalDescription.textContent = description;

        if (video) {
            modalImage.style.display = "none";
            const modalVideo = document.createElement("video");
            modalVideo.src = video.src;
            modalVideo.controls = true;
            modalVideo.style.width = "100%";
            modalVideo.style.borderRadius = "10px";
            modalVideo.style.marginBottom = "15px";
            modalContent.insertBefore(modalVideo, modalTitle);
        } else {
            const imgSrc = card.querySelector("img").src;
            modalImage.src = imgSrc;
            modalImage.style.display = "block";
        }

        modal.style.display = "flex";
    });
});

// Закрытие модального окна
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.style.display = "block";
    const modalVideo = modalContent.querySelector("video");
    if (modalVideo) {
        modalVideo.remove();
    }
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        modalImage.style.display = "block";
        const modalVideo = modalContent.querySelector("video");
        if (modalVideo) {
            modalVideo.remove();
        }
    }
});

    // Модальное окно для входа/регистрации
    const authModal = document.getElementById("authModal");
    const closeAuthModal = document.querySelector(".close-auth-modal");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegisterForm = document.getElementById("showRegisterForm");
    const showLoginForm = document.getElementById("showLoginForm");

    document.getElementById("authButton").addEventListener("click", () => {
        authModal.style.display = "flex";
    });

    closeAuthModal.addEventListener("click", () => {
        authModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === authModal) {
            authModal.style.display = "none";
        }
    });

    showRegisterForm.addEventListener("click", () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    showLoginForm.addEventListener("click", () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
});



// Переключение темы
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        themeIcon.textContent = "☀️"; // Иконка для светлой темы
    } else {
        themeIcon.textContent = "🌙"; // Иконка для тёмной темы
    }
});


// Модальное окно для тренировок
const trainingModal = document.getElementById("trainingModal");
const closeTrainingModal = document.querySelector(".close-training-modal");

document.querySelector("a[href='#trainings']").addEventListener("click", () => {
    trainingModal.style.display = "flex";
});

closeTrainingModal.addEventListener("click", () => {
    trainingModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === trainingModal) {
        trainingModal.style.display = "none";
    }
});