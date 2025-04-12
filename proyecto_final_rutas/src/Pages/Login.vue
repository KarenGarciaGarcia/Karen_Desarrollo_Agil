<template>
    <div class="auth-container">
      <div class="auth-card">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" v-model="password" required>
          </div>
          <button type="submit">Ingresar</button>
        </form>
        <p><router-link to="/register"></router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm() {
        // Lógica de autenticación
        console.log('Login con:', this.email, this.password)
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
  
  .auth-card {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #4a6bdf;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3a5bd9;
  }
  </style>