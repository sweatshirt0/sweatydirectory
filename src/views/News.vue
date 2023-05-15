<template>
    <div class="news-content-wrapper">
        <h1 class="news-content-title">News</h1>
    </div>
</template>

<script>
 import Nav from "./../components/Nav"
 export default {
     name: "News",
     components: {
     }
 }
</script>

<style scoped>
 .news-content-wrapper {
     position: relative;
     width: 50vw;
     left: 46vw;
     top: 5vh;
     padding: 0 0 5vh 0;
     border: 1px solid #4af626;
     border-radius: 5px;
     background-color: #111;
     box-shadow: 12px 12px 12px #111;
 }

 .news-content-title {
     color: #fff;
 }
</style>
