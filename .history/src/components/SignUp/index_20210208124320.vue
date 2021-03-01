<template>
		<!--begin::Main-->
		<div class="d-flex flex-column flex-root">
			<div class="logo-page-login">
				<a href="index.html">
					<img src="@/assets/media/thmatrix-logo@2x.png" alt="">
				</a>
			</div>
			<!--begin::Login-->
			<div class="login login-4 login-signup-on d-flex flex-row-fluid" id="kt_login">
				<div class="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat" style="background-image: url('assets/media/bg/bg-3.jpg');">
					<div class="login-form text-center p-7 position-relative overflow-hidden">
						<!--begin::Login Sign in form-->
<div class="login-signup">
							<div class="mb-20">
								<h3>Sign Up</h3>
								<div class="text-muted font-weight-bold">Enter your details to create your account</div>
							</div>
							<form class="form fv-plugins-bootstrap fv-plugins-framework" id="kt_login_signup_form">
								<div class="form-group mb-5 fv-plugins-icon-container" style="text-align: left;">
									<label>Fullname <span class="text-danger">*</span></label>
									<input class="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Fullname" name="fullname">
								<div class="fv-plugins-message-container"></div></div>
								<div class="form-group mb-5 fv-plugins-icon-container" style="text-align: left;">
									<label>Email <span class="text-danger">*</span></label>
									<input class="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Email" name="email" autocomplete="off">
								<div class="fv-plugins-message-container"></div></div>
								<div class="form-group mb-5 fv-plugins-icon-container" style="text-align: left;">
									<label>Type <span class="text-danger">*</span></label>
									<select class="form-control h-auto form-control-solid py-4 px-8" id="exampleSelecsd2323dfdfdf">
										<option>Shipper</option>
										<option>Carrier</option>
									</select>
								<div class="fv-plugins-message-container"></div></div>
								<div class="form-group mb-5 fv-plugins-icon-container" style="text-align: left;">
									<label>Password <span class="text-danger">*</span></label>
									<input class="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Password" name="password">
								<div class="fv-plugins-message-container"></div></div>
								<div class="form-group mb-5 fv-plugins-icon-container" style="text-align: left;">
									<label>Confirm Password <span class="text-danger">*</span></label>
									<input class="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Confirm Password" name="cpassword">
								<div class="fv-plugins-message-container"></div></div>
								<div class="form-group mb-5 text-left fv-plugins-icon-container has-success">
									<div class="checkbox-inline">
										<label class="checkbox m-0">
										<input type="checkbox" name="agree" class="is-valid">
										<span></span>I Agree the 
										<a href="#" class="font-weight-bold ml-1">terms and conditions</a>.</label>
									</div>
									<div class="form-text text-muted text-center"></div>
								<div class="fv-plugins-message-container"></div></div>
								<div class="form-group d-flex flex-wrap flex-center mt-10">
									<button id="kt_login_signup_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Sign Up</button>
									<button id="kt_login_signup_cancel" class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2">Cancel</button>
								</div>
							<div></div></form>
						</div>
						<!--end::Login Sign up form-->
						<!--end::Login Sign in form-->
					</div>
				</div>
			</div>
			<!--end::Login-->
		</div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
    @import "./style.scss";
</style>
