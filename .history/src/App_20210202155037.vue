<template>
    <div id="app">
        <SideBar/>
        <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            <router-view/>
        </div>
        
    </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss">
    @import "./assets/scss/style.scss";
    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';
    
</style>
<style lang="css">
@import '../src/assets/css/style.bundle.min.css';
</style>