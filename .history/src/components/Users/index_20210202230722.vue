<template>
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
                                <tr class="child"><td class="child" colspan="4"><ul data-dtr-index="2" class="dtr-details"><li data-dtr-index="4" data-dt-row="2" data-dt-column="4"><span class="dtr-title">Role</span> <span class="dtr-data">Supper Admin</span></li><li data-dtr-index="5" data-dt-row="2" data-dt-column="5"><span class="dtr-title">Status</span> <span class="dtr-data"><span class="label label-lg font-weight-bold label-light-primary label-inline">Pending</span></span></li><li data-dtr-index="6" data-dt-row="2" data-dt-column="6"><span class="dtr-title"></span> <span class="dtr-data">							<div class="dropdown dropdown-inline">								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-success" data-toggle="dropdown">	                                Actions <i class="ki ki-bold-triangle-bottom"></i>	                            </a>							  	<div class="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-js-custom">									<ul class="nav nav-hoverable flex-column">							    		<li class="nav-item view-matched-request"><a class="nav-link user-detail-link" href="pages/users/details.html"><span class="nav-text">User Details</span></a></li>							    		<li class="nav-item"><a class="nav-link" href="#"><span class="nav-text">Disable</span></a></li>									</ul>							  	</div>							</div>						</span></li></ul></td></tr>
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
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
    @import "./style.scss";
</style>
