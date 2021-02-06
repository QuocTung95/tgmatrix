<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <!--begin::Info-->
                <div class="d-flex align-items-center flex-wrap mr-2">
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Dashboard</h5>
                    <!--end::Page Title-->
                    <!--begin::Actions-->
                    <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                    <!-- <span class="text-muted font-weight-bold mr-4">#XRS-45670</span>
                    <a href="#" class="btn btn-light-warning font-weight-bolder btn-sm">Add New</a> -->
                    <!--end::Actions-->
                </div>
                <!--end::Info-->
            </div>
        </div>
        <!--end::Subheader-->
        <!--begin::Entry-->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div class="container">
                <!--begin::Dashboard-->
                <!--begin::Row-->
                <div class="row">
                    <div class="col-lg-6 col-xxl-6">
                        <div class="card card-custom card-stretch gutter-b" style="padding: 20px;">
                            <h3 class="card-label" style="margin-bottom: 20px;">Shipper</h3>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Total Registered</th>
                                        <th scope="col">Total Requests created</th>
                                        <th scope="col">Total Contracted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td>1580</td>
                                        <td>567</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-6">
                        <!--begin::List Widget 9-->
                        <div class="card card-custom card-stretch gutter-b" style="padding: 20px;">
                            <h3 class="card-label" style="margin-bottom: 20px;">Carrier</h3>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Total Registered</th>
                                        <th scope="col">Total Requests created</th>
                                        <th scope="col">Total Contracted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td>1580</td>
                                        <td>567</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--end: List Widget 9-->
                    </div>
                    <div class="col-xxl-12 order-2 order-xxl-1">
                        <div class="card card-custom card-stretch gutter-b dashboard-admin-list-shipper-detail" style="padding: 20px;">
                            <h3 class="card-label" style="margin-bottom: 20px;">Shipper Details</h3>
                            <!--begin: Datatable-->
                            <table class="table table-bordered table-hover table-checkable mt-10" id="kt_datatable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Requests Created</th>
                                        <th>Requests not matched</th>
                                        <th>Requests Matched</th>
                                        <th>Requests Contracted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <!--end: Datatable-->
                        </div>
                    </div>
                    <div class="col-xxl-12 order-2 order-xxl-1">
                        <div class="card card-custom card-stretch gutter-b dashboard-admin-list-shipper-detail" style="padding: 20px;">
                            <h3 class="card-label" style="margin-bottom: 20px;">Carrier Details</h3>
                            <!--begin: Datatable-->
                            <table class="table table-bordered table-hover table-checkable mt-10" id="kt_datatable_2">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Requests Created</th>
                                        <th>Requests not matched</th>
                                        <th>Requests Matched</th>
                                        <th>Requests Contracted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>Beweship</td>
                                        <td>100</td>
                                        <td>24</td>
                                        <td>76</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Maritime Transport</td>
                                        <td>200</td>
                                        <td>50</td>
                                        <td>150</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>CPL Transport (UK) Ltd</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>q</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>DHT</td>
                                        <td>150</td>
                                        <td>45</td>
                                        <td>105</td>
                                        <td>68</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <!--end: Datatable-->
                        </div>
                    </div>
                </div>
                <!--end::Row-->
                <!--end::Dashboard-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Entry-->
    </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
    @import "./style.scss";
</style>
