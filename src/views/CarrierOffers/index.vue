<template>
	<div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="d-flex flex-row flex-column-fluid page">
            <SideBar/>
            <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                <Header/>
                <CarrierOffersComponent/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
    @import "./style.scss";
</style>
