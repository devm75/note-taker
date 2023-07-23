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
	shortPassword: "Password Must have atleast 8 digits",
};

export const keys = {
	recaptchaKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY as string,
};
