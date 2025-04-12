<template>
    <div class="auth-container">
      <div class="auth-card">
        <h2>Registro</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" v-model="name" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" v-model="password" required>
          </div>
          <div class="form-group">
            <label>Confirmar Contraseña</label>
            <input type="password" v-model="confirmPassword" required>
          </div>
          <button type="submit">Registrarse</button>
        </form>
        <p><router-link to="/login"></router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterComponent',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      submitForm() {
        if (this.password !== this.confirmPassword) {
          alert('Las contraseñas no coinciden')
          return
        }
        console.log('Registro con:', this.name, this.email, this.password)
        this.$router.push('/login')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Los mismos estilos que Login.vue */
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