<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>


<style>
@import "./assets/css-global/primecomponents.css";
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");

html,
body {
  font-family: "Proza Libre", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
span {
  font-family: "Proza Libre", sans-serif;
}
a {
  font-family: "Proza Libre", sans-serif;
}
div {
  font-family: "Proza Libre", sans-serif;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>