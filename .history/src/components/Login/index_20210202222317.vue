<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <!--begin::Info-->
                <div class="d-flex align-items-center flex-wrap mr-2">
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Companies</h5>
                    <!--end::Page Title-->
                    <!--begin::Actions-->
                    <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                    <a href="pages/companies/create.html" class="btn btn-light-success font-weight-bolder btn-sm mt-2 mb-2 mr-4">Create</a>
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
                                        <th>ID</th>
                                        <th>Company Name</th>
                                        <th>Company Type</th>
                                        <th>Status</th>
                                        <th>Contact Name</th>
                                        <th>Contact Phone</th>
                                        <th>Contact Email</th>
                                        <th>Users</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>1</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>Star UK</td>
                                        <td>Shipper</td>
                                        <td>1</td>
                                        <td>Rob Dilah</td>
                                        <td>12343245646</td>
                                        <td>robd@gmail.com</td>
                                        <td>3545</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>2</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>2</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>A-travel</td>
                                        <td>Shipper/Carrier</td>
                                        <td>1</td>
                                        <td>Chris Pick</td>
                                        <td>12343245646</td>
                                        <td>chris@gmail.com</td>
                                        <td>12</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>Compulagistic</td>
                                        <td>Shipper</td>
                                        <td>2</td>
                                        <td>Alfred Maps</td>
                                        <td>12343245646</td>
                                        <td>alf@gmail.com</td>
                                        <td>23</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
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
