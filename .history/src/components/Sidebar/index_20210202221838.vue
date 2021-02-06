<template>
    <div class="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
        <!--begin::Brand-->
        <div class="brand flex-column-auto" id="kt_brand" style="padding: 0 10px;">
            <!--begin::Logo-->
            <a href="index.html" class="brand-logo">
                <img alt="Logo" src="@/assets/media/thmatrix-logo@2x.png" style="width: 95%;">
            </a>
            <!--end::Logo-->
            <!--begin::Toggle-->
            <button class="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                <span class="svg-icon svg-icon svg-icon-xl">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg-->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fill-rule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
                            <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
                        </g>
                    </svg>
                    <!--end::Svg Icon-->
                </span>
            </button>
            <!--end::Toolbar-->
        </div>
        <!--end::Brand-->
        <!--begin::Aside Menu-->
        <div class="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
            <!--begin::Menu Container-->
            <div id="kt_aside_menu" class="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
                <!--begin::Menu Nav-->
                <ul class="menu-nav">
                    <li class="menu-item menu-item-active" aria-haspopup="true">
                        <a href="index.html" class="menu-link">
                            <span class="svg-icon menu-icon">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fill-rule="nonzero" />
                                        <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                            </span>
                            
                            <span class="menu-text"><b-link :to="'/dashboard'" class="p-3">Dashboard</b-link></span>
                        </a>
                    </li>
                    <li class="menu-item" aria-haspopup="true">
                        <a href="pages/companies/list.html" class="menu-link">
                            <span class="svg-icon menu-icon"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Home\Building.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <path d="M13.5,21 L13.5,18 C13.5,17.4477153 13.0522847,17 12.5,17 L11.5,17 C10.9477153,17 10.5,17.4477153 10.5,18 L10.5,21 L5,21 L5,4 C5,2.8954305 5.8954305,2 7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,21 L13.5,21 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,6 C8,6.55228475 8.44771525,7 9,7 L10,7 C10.5522847,7 11,6.55228475 11,6 L11,5 C11,4.44771525 10.5522847,4 10,4 L9,4 Z M14,4 C13.4477153,4 13,4.44771525 13,5 L13,6 C13,6.55228475 13.4477153,7 14,7 L15,7 C15.5522847,7 16,6.55228475 16,6 L16,5 C16,4.44771525 15.5522847,4 15,4 L14,4 Z M9,8 C8.44771525,8 8,8.44771525 8,9 L8,10 C8,10.5522847 8.44771525,11 9,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,9 C11,8.44771525 10.5522847,8 10,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 L8,14 C8,14.5522847 8.44771525,15 9,15 L10,15 C10.5522847,15 11,14.5522847 11,14 L11,13 C11,12.4477153 10.5522847,12 10,12 L9,12 Z M14,12 C13.4477153,12 13,12.4477153 13,13 L13,14 C13,14.5522847 13.4477153,15 14,15 L15,15 C15.5522847,15 16,14.5522847 16,14 L16,13 C16,12.4477153 15.5522847,12 15,12 L14,12 Z" fill="#000000"/>
                                    <rect fill="#FFFFFF" x="13" y="8" width="3" height="3" rx="1"/>
                                    <path d="M4,21 L20,21 C20.5522847,21 21,21.4477153 21,22 L21,22.4 C21,22.7313708 20.7313708,23 20.4,23 L3.6,23 C3.26862915,23 3,22.7313708 3,22.4 L3,22 C3,21.4477153 3.44771525,21 4,21 Z" fill="#000000" opacity="0.3"/>
                                </g>
                            </svg><!--end::Svg Icon--></span>
                            <span class="menu-text"><b-link :to="'/companies'" class="p-3">Companies</b-link></span>
                        </a>
                    </li>
                    <li class="menu-item" aria-haspopup="true">
                        <a href="pages/users/list.html" class="menu-link">
                            <span class="svg-icon menu-icon"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\General\User.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24"/>
                                    <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                                    <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
                                </g>
                            </svg><!--end::Svg Icon--></span>
                            <span class="menu-text"><b-link :to="'/users'" class="p-3">Users</b-link></span>
                        </a>
                    </li>
                    <li class="menu-item" aria-haspopup="true">
                        <a href="pages/carrier-offers/list.html" class="menu-link">
                            <span class="svg-icon menu-icon">
                                <!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2020-09-29-132851/theme/html/demo1/dist/../src/media/svg/icons/Design/Flip-horizontal.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M3.73851648,19 L8.5,19 C8.77614237,19 9,18.7761424 9,18.5 L9,6.5962912 C9,6.32014883 8.77614237,6.0962912 8.5,6.0962912 C8.29554771,6.0962912 8.11169333,6.22076667 8.03576165,6.41059586 L3.27427814,18.3143047 C3.17172143,18.5706964 3.29642938,18.8616816 3.55282114,18.9642383 C3.61188128,18.9878624 3.67490677,19 3.73851648,19 Z" fill="#000000" opacity="0.3"/>
                                        <path d="M15.7385165,19 L20.5,19 C20.7761424,19 21,18.7761424 21,18.5 L21,6.5962912 C21,6.32014883 20.7761424,6.0962912 20.5,6.0962912 C20.2955477,6.0962912 20.1116933,6.22076667 20.0357617,6.41059586 L15.2742781,18.3143047 C15.1717214,18.5706964 15.2964294,18.8616816 15.5528211,18.9642383 C15.6118813,18.9878624 15.6749068,19 15.7385165,19 Z" fill="#000000" transform="translate(18.000000, 12.500000) scale(-1, 1) translate(-18.000000, -12.500000) "/>
                                        <rect fill="#000000" opacity="0.3" x="11" y="2" width="2" height="20" rx="1"/>
                                    </g>
                                </svg><!--end::Svg Icon-->
                            </span>
                            <span class="menu-text"><b-link :to="'/carrier-offers'" class="p-3">Carrier Offers</b-link></span>
                        </a>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="pages/trucks/list.html" class="menu-link menu-toggle">
                            <span class="svg-icon menu-icon">
                                <i class="icon-l fas fa-car-side"></i>
                            </span>
                            <span class="menu-text"><b-link :to="'/trucks'" class="p-3">Trucks</b-link></span>
                        </a>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="pages/shipper-requests/list.html" class="menu-link menu-toggle">
                            <span class="svg-icon menu-icon">
                                <i class="icon-l fas fa-archive"></i>
                            </span>
                            <span class="menu-text">Shipper Requests</span>
                        </a>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="pages/profile/details.html" class="menu-link menu-toggle">
                            <span class="svg-icon menu-icon">
                                <i class="icon-l fas fa-user"></i>
                            </span>
                            <span class="menu-text"><b-link :to="'/profile'" class="p-3">Profile</b-link></span>
                        </a>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="#" class="menu-link menu-toggle" style="display: block;">
                            <span class="svg-icon menu-icon" style="display: flex;justify-content: center;align-items: center;">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Shopping/Barcode-read.svg-->
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sign-out-alt fa-w-16"><path fill="#e86767" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" class=""></path></svg>
                                <!--end::Svg Icon-->
                            </span>
                        </a>
                    </li>
                </ul>
                <!--end::Menu Nav-->
            </div>
            <!--end::Menu Container-->
        </div>
        <!--end::Aside Menu-->
    </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
    @import "./style.scss";
</style>
