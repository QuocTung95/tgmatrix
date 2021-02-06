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
