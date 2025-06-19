<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary-">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about">about</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/Toska">Toska</RouterLink>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="button">btn</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <header>
    <nav class="navbar">
      <ul class="nav-items">
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/about">about</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/Toska">Toska</RouterLink>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="button">btn</button>
      </form>
    </nav>
  </header>
</template>
<script setup></script>

<style lang="scss" scoped></style>
