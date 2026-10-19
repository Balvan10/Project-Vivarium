<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import {useTheme} from'./hooks/useTheme'

  const{ theme, toggle} = useTheme()



</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vivarium</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Account</a></li>
            <li><a class="dropdown-item" href="#">Orders</a></li>
          </ul>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success me-2" type="submit">🔍</button>
      </form>
      <div class="form-check form-switch">
        <input class="form-check-input me-2" type="checkbox" role="switch" id="switchCheckDefault" @change="toggle">
        <label class="form-check-label" for="switchCheckDefault">Theme</label>
      </div>
    </div>
  </div>
</nav>
<routerView />
</template>

