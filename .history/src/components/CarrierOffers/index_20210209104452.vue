<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <!--begin::Info-->
                <div class="d-flex align-items-center flex-wrap mr-2">
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Carrier Offers</h5>
                    <!--end::Page Title-->
                    <!--begin::Actions-->
                    <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                    <a href="pages/carrier-offers/add-offer.html" class="btn btn-light-success font-weight-bolder btn-sm mt-2 mb-2 mr-4">Create</a>
                    <a href="#" class="btn btn-light-success font-weight-bolder btn-sm">Create & Send</a>
                    <!--end::Actions-->
                </div>
                <!--end::Info-->
                <!--begin::Toolbar-->
                <div class="d-flex align-items-center">
                    <a href="#" class="btn btn-light-success font-weight-bolder btn-sm mt-2 mb-2 mr-4">Upload offers XLS</a>
                    <a href="#" class="btn btn-light-success font-weight-bolder btn-sm">Upload offers CSV</a>
                </div>
                <!--end::Toolbar-->
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
                                        <th colspan="1">Offer ID</th>
                                        <th colspan="1">Status</th>
                                        <th colspan="1">Reference</th>
                                        <th colspan="1">Expiration</th>
                                        <th colspan="4">Available From</th>
                                        <th colspan="4">Available To</th>
                                        <th colspan="1">Actions</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Town</th>
                                        <th>Post Code</th>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Town</th>
                                        <th>Post Code</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-01 08:00</td>
                                        <td>2019-01-01</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-01</td>
                                        <td>JN test name</td>
                                        <td>Oxtcnd2</td>
                                        <td>OX 4PET</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-02 08:00</td>
                                        <td>2019-01-02</td>
                                        <td>test name 1</td>
                                        <td>BRSTOL1</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-02</td>
                                        <td>JN test name2</td>
                                        <td>Oxtcnd7</td>
                                        <td>OX 4PEI</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-03 08:00</td>
                                        <td>2019-01-03</td>
                                        <td>test name 2</td>
                                        <td>BRSTOL2</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-03</td>
                                        <td>JN test text</td>
                                        <td>Oxtcnd2</td>
                                        <td>OX 4PEOP</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-04 08:00</td>
                                        <td>2019-01-04</td>
                                        <td>test name 3</td>
                                        <td>BRSTOL3</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-04</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-05 08:00</td>
                                        <td>2019-01-05</td>
                                        <td>test name 4</td>
                                        <td>BRSTOL4</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-05</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-07 08:00</td>
                                        <td>2019-01-07</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-07</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-08 08:00</td>
                                        <td>2019-01-08</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-08</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-09 08:00</td>
                                        <td>2019-01-09</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-09</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-10 08:00</td>
                                        <td>2019-01-10</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-10</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-11 08:00</td>
                                        <td>2019-01-11</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-11</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-12 08:00</td>
                                        <td>2019-01-12</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-12</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-13 08:00</td>
                                        <td>2019-01-13</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-13</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-14 08:00</td>
                                        <td>2019-01-14</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-14</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-15 08:00</td>
                                        <td>2019-01-15</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-15</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-16 08:00</td>
                                        <td>2019-01-16</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-16</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-17 08:00</td>
                                        <td>2019-01-17</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-17</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-18 08:00</td>
                                        <td>2019-01-18</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-18</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-19 08:00</td>
                                        <td>2019-01-19</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-19</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-20 08:00</td>
                                        <td>2019-01-20</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-20</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-21 08:00</td>
                                        <td>2019-01-21</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-21</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-22 08:00</td>
                                        <td>2019-01-22</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-22</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-23 08:00</td>
                                        <td>2019-01-23</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-23</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-24 08:00</td>
                                        <td>2019-01-24</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-24</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-26 08:00</td>
                                        <td>2019-01-26</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-26</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-27 08:00</td>
                                        <td>2019-01-27</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-27</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-28 08:00</td>
                                        <td>2019-01-28</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-28</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-02-01 08:00</td>
                                        <td>2019-02-01</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-02-01</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-02-02 08:00</td>
                                        <td>2019-02-02</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-02-02</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>1</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>2</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>4</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
                                        <td class="custom-actions" nowrap="nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td>320</td>
                                        <td>3</td>
                                        <td>Test JN JN</td>
                                        <td>2019-01-25 08:00</td>
                                        <td>2019-01-25</td>
                                        <td>test name</td>
                                        <td>BRSTOL</td>
                                        <td>BS16 1LQ</td>
                                        <td>2019-01-25</td>
                                        <td>JN test</td>
                                        <td>Oxtcnd</td>
                                        <td>OX 4PE</td>
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
