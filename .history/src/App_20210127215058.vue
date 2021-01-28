<template>
    <div id="app">
        <b-link :to="'/'" class="p-3">home</b-link>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/style.scss";
    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';
</style>