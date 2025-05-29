function Login(){

    return(
        <>
        
        

    <div className="main">
    <h1>Welcome back</h1>
    <h3>Enter your login credentials</h3>

    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="first">Username: </label>
        <input 
            type="text" 
            id="first" 
            className="first" 
            placeholder="Enter your Username" 
            required 
        />

        <label htmlFor="password">Password: </label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your Password" 
            required 
        />

        <div className="wrap">
            <button type="submit">Submit</button>
        </div>
    </form>
    
    <p>
        Not registered?{" "}
        <a href="signup" style={{textDecoration: "none"}}> Create an account</a>
    </p>
</div>
    


        </>
    )
}
export default Login;