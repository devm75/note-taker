export const routes = {
  auth: {
    SIGNIN: "/login",
    SIGNUP: "/register",
  },
  HOME: "/",
  BLOG: "/blogs",
  CONTACT: "/contact-us",
  HELP: "/help",
};

export const errorMessages = {
  required: "Required!",
  short: "Too Short!",
  invalid: "Invalid!",
  shortPassword: "Password must be atleast 8 digits",
  passwordsNotMatch: "Your Passwords don't match!",
};

export const keys = {
  recaptchaKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY as string,
};
