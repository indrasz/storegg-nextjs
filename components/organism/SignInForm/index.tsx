import Link from "next/link";

export default function SignInForm() {
    return (
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
            <div className="pt-50">
                <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    placeholder="Enter your email address"
                />
            </div>
            <div className="pt-30">
                <label
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="form-control rounded-pill text-lg"
                    placeholder="Your password"
                />
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <button
                    type="button"
                    className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                >
                    Continue to Sign In
                </button>
                <Link href="/sign-up">
                    <a
                        className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                    >
                        Sign Up
                    </a>
                </Link>
            </div>
        </>
    );
}