<template>
		<!--begin::Main-->
		<div class="d-flex flex-column flex-root">
			<div class="logo-page-login">
				<a href="index.html">
					<img src="assets/media/thmatrix-logo@2x.png" alt="">
				</a>
			</div>
			<!--begin::Login-->
			<div class="login login-4 login-signin-on d-flex flex-row-fluid" id="kt_login">
				<div class="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat" style="background-image: url('assets/media/bg/bg-3.jpg');">
					<div class="login-form text-center p-7 position-relative overflow-hidden">
						<!--begin::Login Sign in form-->
						<div class="login-signin">
							<form class="form" id="kt_login_signin_form">
								<div class="form-group mb-5" style="text-align: left;">
									<label>Login <span class="text-danger">*</span></label>
									<input class="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Email" name="username" autocomplete="off" />
								</div>
								<div class="form-group mb-5" style="text-align: left;">
									<label>Password <span class="text-danger">*</span></label>
									<input class="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Password" name="password" />
								</div>
								<div class="form-group d-flex flex-wrap justify-content-end align-items-center">
									<!-- <div class="checkbox-register-user">
										<a href="javascript:;" id="kt_login_signup" class="text-muted text-hover-primary font-weight-bold">Sign Up!</a>
									</div> -->
									<a href="javascript:;" id="kt_login_forgot" class="text-muted text-hover-primary">Forget Password ?</a>
								</div>
								<button id="kt_login_signup" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">Sign Up</button>
								<button id="kt_login_signin_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">Sign In</button>
							</form>
							<div class="mt-10">
								<!-- <span class="opacity-70 mr-4">Don't have an account yet?</span>
								<a href="javascript:;" id="kt_login_signup" class="text-muted text-hover-primary font-weight-bold">Sign Up!</a> -->
								<span class="opacity-70 mr-4">Privacy Policy | Terms and Conditions</span>
							</div>
						</div>
						<!--end::Login Sign in form-->
						<!--begin::Login Sign up form-->
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
						<!--begin::Login forgot password form-->
						<div class="login-forgot">
							<div class="mb-20">
								<h3>Forgot Password. <br>Email verification</h3>
							</div>
							<form class="form" id="kt_login_forgot_form">
								<div class="form-group mb-10" style="text-align: left;">
									<label>Input your email <span class="text-danger">*</span></label>
									<input class="form-control form-control-solid h-auto py-4 px-8" type="text" placeholder="Email" name="email" autocomplete="off" />
								</div>
								<div class="form-group d-flex flex-wrap flex-center mt-10">
									<button id="kt_login_forgot_cancel" class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2">Cancel</button>
									<button id="kt_login_forgot_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Send Code</button>
								</div>
							</form>
						</div>
						<!--end::Login forgot password form-->
						<!--begin::Check Code form-->
						<div class="login-check-code">
							<div class="mb-20">
								<h3>Forgot Password. <br>Enter 6 digits code</h3>
							</div>
							<form class="form" id="kt_login_check_code_form">
								<div class="list-code-6">
									<input class="form-control item-custom-input" maxlength="1" type="number" name="code_1" autocomplete="off">
									<input class="form-control item-custom-input" maxlength="1" type="number" name="code_2" autocomplete="off">
									<input class="form-control item-custom-input" maxlength="1" type="number" name="code_3" autocomplete="off">
									<input class="form-control item-custom-input" maxlength="1" type="number" name="code_4" autocomplete="off">
									<input class="form-control item-custom-input" maxlength="1" type="number" name="code_5" autocomplete="off">
									<input class="form-control item-custom-input" maxlength="1" type="number" name="code_6" autocomplete="off">
									
								</div>
								<div class="mt-10">
									<span class="opacity-70 mr-4">Code is not received?</span>
									<a href="javascript:;" class="text-muted text-hover-primary font-weight-bold">Resend the code</a>
								</div>
								<div class="form-group d-flex flex-wrap flex-center mt-10">
									<button id="kt_login_check_code_cancel" class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2">Cancel</button>
									<button id="kt_login_check_code_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Check Code</button>
								</div>
							</form>
						</div>
						<!--end::Check Code form-->

						<!--begin::Login Change Password form-->
						<div class="login-change_pass">
							<div class="mb-20">
								<h3>Forgot Password. <br>Change password</h3>
							</div>
							<form class="form" id="kt_login_change_pass_form">
								<div class="form-group mb-10" style="text-align: left;">
									<label>New password <span class="text-danger">*</span></label>
									<input class="form-control form-control-solid h-auto py-4 px-8" id="new_password_change" type="text" name="new_password" autocomplete="off" />
									<div class="icon-passwork new_password" data-type="show">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-eye fa-w-18"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" class=""></path></svg>
									</div>
								</div>
								<div class="form-group mb-10" style="text-align: left;">
									<label>Confirm new password <span class="text-danger">*</span></label>
									<input class="form-control form-control-solid h-auto py-4 px-8" id="confirm_new_password_change" type="password" name="confirm_password" autocomplete="off" />
									<div class="icon-passwork confirm_change_pass" data-type="hide">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-eye-slash fa-w-20"><path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" class=""></path></svg>
									</div>
								</div>
								<div class="form-group d-flex flex-wrap flex-center mt-10">
									<button id="kt_login_change_pass_cancel" class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2">Cancel</button>
									<button id="kt_login_change_pass_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Change password</button>
								</div>
							</form>
						</div>
						<!--end::Login Change Password form-->

						<!--begin::Login Change Password form-->
						<div class="login-thanks-home">
							<form class="form" id="kt_login_thanks-home_form">
								<div class="mb-20">
									<h3>Your password <br>successfully changed <br> Thank you!</h3>
								</div>
								<div class="form-group d-flex flex-wrap flex-center mt-10">
									<a href="index.html" class="btn btn-primary active">Go to Home Page</a>
									<!-- <button id="kt_login_thanks_page_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Go to Home Page</button> -->
								</div>
							</form>
						</div>
						<!--end::Login Change Password form-->
					</div>
				</div>
			</div>
			<!--end::Login-->
		</div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
    @import "./style.scss";
</style>
