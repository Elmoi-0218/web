/*************** AUTH ***************/
const USER = {
    email: "admin@email.com",
    password: "123456"
};

const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const logoutBtn = document.getElementById("logout");

const isAuth = localStorage.getItem("auth");

/* ===== LOGIN ===== */
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMsg.style.display = "none";
        loginForm.classList.remove("shake");

        if (email === USER.email && password === USER.password) {
            localStorage.setItem("auth", "true");
            window.location.href = "index.html";
        } else {
            errorMsg.textContent = "Credenciales incorrectas";
            errorMsg.style.display = "block";
            loginForm.classList.add("shake");
        }
    });
}

/* ===== PROTECCIÓN SOLO PARA PÁGINAS PRIVADAS ===== */
if (document.body.classList.contains("protected") && !isAuth) {
    window.location.href = "login.html";
}

/* ===== EVITAR VOLVER AL LOGIN SI YA ESTÁ AUTENTICADO ===== */
if (document.body.classList.contains("login") && isAuth) {
    window.location.href = "index.html";
}

/* ===== LOGOUT ===== */
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("cart");
        window.location.href = "login.html";
    });
}

/*************** SIDEBAR ***************/
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");

if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

document.querySelectorAll(".sidebar-nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
