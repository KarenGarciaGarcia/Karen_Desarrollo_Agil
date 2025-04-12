<script setup>
import router from './router';
</script>
<template>
  <div class="container">
    <h3 class="welcome-message">Bienvenidos a la página web</h3>

  </div>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">Rutas</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUsuario" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUsuario">
                  <li><router-link class="dropdown-item" to="/login">Iniciar sesión</router-link></li>
                  <li><router-link class="dropdown-item" to="/registro">Registrarse</router-link></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-decoration-none" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Horarios
                </a>
                <ul class="dropdown-menu">

                  <li>

                    <router-link class="dropdown-item" to="/horario1">Horario1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/horario2">Horario2</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-decoration-none" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Calculadoras
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item" to="/calculadorav1">Calculadora V1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/calculadorav2">Calculadora V2</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-decoration-none" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Listas
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item" to="/Listas1">Listas1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/Listas">Listas</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link class="nav-link text-decoration-none" to="/eventos">
                  Eventos
                </router-link>
              </li>


              <li class="nav-item">
                <router-link class="nav-link text-decoration-none" to="/padre" exact-active-class="active-link">
                  Props
                </router-link>

              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav>

      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
/* #app {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  min-height: 100vh;
} */

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  background: linear-gradient(90deg, #d7dae9 0%, #d9c8eb 100%) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-weight: 700;
  color: rgb(12, 11, 11) !important;
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.nav-link,
.dropdown-item {
  color: rgba(14, 13, 13, 0.9) !important;
  transition: all 0.3s ease;
  margin: 0 5px;
  border-radius: 5px;
}

/* .nav-link:hover,
.dropdown-item:hover {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
} */

.dropdown-menu {
  background: white;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.dropdown-item {
  color: #555 !important;
  padding: 10px 15px;
}

.dropdown-item:hover {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white !important;
}

/* .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.5);
} */

/* .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
} */

/* Estilo para el enlace activo */
.router-link-active {
  background-color: rgba(252, 40, 206, 0.3);
  font-weight: 600;
}

/* Resaltar el menú padre cuando alguna ruta hija está activa */
.nav-item:has(.router-link-active)>.nav-link:not(.router-link-active),
.nav-item:has(.router-link-active)>.nav-link.dropdown-toggle {
  background-color: rgba(252, 40, 206, 0.3) !important;
  font-weight: 700;
  box-shadow: 0 0 0 2px rgba(252, 40, 206, 0.3);
}

.router-view {
  margin-top: 2rem;
  background: rgb(194, 16, 194, 0.5);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(252, 40, 206, 0.3);
  animation: fadeInUp 0.5s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-message {
  color: #0c0c0c;
  text-align: center;
  margin: 1rem 5;
  font-style: italic;
  background-color: #d0e7e7;
  /* Azul cielo clásico */
  padding: 1.5rem;
  /* Espaciado interno */
  border-radius: 8px;
  /* Esquinas redondeadas */
  margin: 1rem auto;
  /* Centrado con margen */
  max-width: 1200px;
  /* Ancho máximo */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Sombra sutil */
}
</style>
