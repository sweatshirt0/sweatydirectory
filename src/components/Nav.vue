<template>
    <div class="nav-wrapper">
        <router-link id="link" class="home-link" to="/">Home</router-link>
        <router-link id="link" class="news-link" to="/news">News</router-link>
    </div>
</template>

<script>
 export default {
     name: "Nav"
 }
</script>

<style type="text/css" media="screen" scoped>
 .nav-wrapper #link {
     padding: 0 12px;
 }
</style>
