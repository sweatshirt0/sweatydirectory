<template>
    <div class="home-content-wrapper">
        <h1 class="home-content-title">Welcome.</h1>
        <h3 class="home-content-subtitle">Lets direct you to some relevant spaces.</h3>
    </div>
</template>

<script>
 import Nav from "./../components/Nav"

 export default {
     name: "Home",
     components: {
     }
 }
</script>

<style scoped>
 .home-content-wrapper {
     position: relative;
     top: 5vh;
     left: 46vw;
     width: 50vw;
     padding: 0 0 5vh 0;
     border: 1px solid #4af626;
     border-radius: 5px;
     background-color: #111;
     box-shadow: 12px 12px 12px #111;
 }

 .home-content-title {
     color: #fff;
 }

 .home-content-subtitle {
     color: #fff;
     font-size: 1rem;
     margin-top: -5px;
 }

</style>
