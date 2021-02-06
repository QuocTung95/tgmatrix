<template>
	<div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="d-flex flex-row flex-column-fluid page">
            <SideBar/>
            <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                <Header/>
                <router-view/>
            </div>
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
@import '../src/assets/css/aside/light.css';
@import '../src/assets/css/themes/layout/header/base/light.css';
</style>