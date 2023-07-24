export const routes = {
	auth: {
		SIGNIN: "/signIn",
		SIGNUP: "/signUp",
	},
};

export const errorMessages = {
	required: "Required!",
	short: "Too Short!",
	invalid: "Invalid!",
	invalidEmail: "Invalid Email",
	shortPassword: "Password must be atleast 8 digits",
	passwordsNotMatch: "Your Passwords don't match!",
};

export const keys = {
	recaptchaKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY as string,
};
