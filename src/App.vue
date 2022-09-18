<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600&display=swap");
$color: rgb(29, 28, 28);
html,
body {
  background-color: rgb(211, 249, 211);
  font-family: "Montserrat Alternates";
  margin: 0;
  padding: 0;
  color: rgb(29, 28, 28);
}
#app {
  nav {
    width: 100%;
    background-color: rgb(46, 45, 45);
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin: 0 20px;
      color: rgb(211, 249, 211);
    }
  }
}
</style>
