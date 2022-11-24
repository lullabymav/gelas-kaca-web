import loginPic from "./../asset/login-pic.png";
import logo from "./../asset/logo.png"
import './../index.css'

function Login() {
    return(
        <div className="Login">
            <main className="Login-main grid grid-cols-2">
                <aside className="Login-pic">
                    <img src={loginPic} className="Login-pic" alt="login-pic" />
                </aside>
                <article className="Login-form">
                    <section className="Login-btn-cancel float-right">
                        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red" className="w-12 h-12 m-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></button>
                    </section>
                    <section className="Login-form-input my-28 mx-40">
                        <img src={logo} className="Login-logo h-12 mb-6" alt="logo-alt" />
                        <h1 className="font-sans text-3xl font-bold mb-6">Login</h1>
                        <form>
                            <label className="Login-label  font-semibold" for="email">Email</label><br/>
                            <input type="email" className="Register-input mb-6 shadow text-gray-700 focus:outline-none"/><br/>
                            <label className="Login-label  font-semibold" for="password">Password</label><br/>
                            <input type="password" className="Register-input shadow text-gray-700 focus:outline-none"/><br/>
                            <a href="./" className="forget-input text-xs float-right mt-1">Forgot Password?</a>
                            <button type="submit" className="Register-btn font-bold shadow">Login</button><br/>
                            <button type="button" className="Register-input font-bold shadow">Sign Up</button>
                        </form>
                    </section>     
                </article>
            </main>
        </div>
    )
}

export default Login;