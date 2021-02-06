<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <!--begin::Info-->
                <div class="d-flex align-items-center flex-wrap mr-2">
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Users</h5>
                    <!--end::Page Title-->
                    <!--begin::Actions-->
                    <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                    <a href="pages/users/create.html" class="btn btn-light-success font-weight-bolder btn-sm mt-2 mb-2 mr-4">Add User</a>
                    <!--end::Actions-->
                </div>
                <!--end::Info-->
            </div>
        </div>
        <!--end::Subheader-->
        <!--begin::Entry-->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div class="container card card-custom" style="max-width: 95%;">
                <div class="row">
                    <div class="col-lg-12 col-xxl-12">
                        <div class="card-body carrier-offers-list-custom">
                            <!--begin: Datatable-->
                            <table class="table table-bordered table-hover table-checkable mt-10" id="kt_datatable">
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DLH</td>
                                        <td>Alexander Gvozdev</td>
                                        <td>alexander.gvozdev@ardas.dp.ua</td>
                                        <td>+44 799867 3434</td>
                                        <td>Carrier Admin</td>
                                        <td>1</td>
                                        <td class="custom-actions"></td>
                                    </tr>
                                    <tr>
                                        <td>DLH</td>
                                        <td>Yaroslav Karmalita</td>
                                        <td>yaroslav.karmalita@ardas.dp.ua</td>
                                        <td>+44 670989 3434</td>
                                        <td>Carrier Manager</td>
                                        <td>3</td>
                                        <td class="custom-actions"></td>
                                    </tr>
                                    <tr>
                                        <td>Alex Inc</td>
                                        <td>Alex Simmons</td>
                                        <td>alex.simmons@ardas.dp.ua</td>
                                        <td>+44 78646 3434</td>
                                        <td>Supper Admin</td>
                                        <td>2</td>
                                        <td class="custom-actions"></td>
                                    </tr>
                                    <tr>
                                        <td>DLH</td>
                                        <td>Alexander Gvozdev</td>
                                        <td>alexander.gvozdev@ardas.dp.ua</td>
                                        <td>+44 799867 3434</td>
                                        <td>Carrier Admin</td>
                                        <td>1</td>
                                        <td class="custom-actions"></td>
                                    </tr>
                                    <tr>
                                        <td>DLH</td>
                                        <td>Yaroslav Karmalita</td>
                                        <td>yaroslav.karmalita@ardas.dp.ua</td>
                                        <td>+44 670989 3434</td>
                                        <td>Carrier Manager</td>
                                        <td>3</td>
                                        <td class="custom-actions"></td>
                                    </tr>
                                    <tr>
                                        <td>Alex Inc</td>
                                        <td>Alex Simmons</td>
                                        <td>alex.simmons@ardas.dp.ua</td>
                                        <td>+44 78646 3434</td>
                                        <td>Supper Admin</td>
                                        <td>2</td>
                                        <td class="custom-actions"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <!--end: Datatable-->
                        </div>
                    </div>
                </div>
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
