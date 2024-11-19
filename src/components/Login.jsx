import '.././css/login.css';
export const Login = () => {
    return <div style={{display:"flex",justifyContent:"center",paddingTop:"70px"}}>

              <div class="loginBox">
                <div style={{fontSize: "20px",marginBottom:"15px"}}>Login</div>
                <div style={{marginBottom: "15px"}}>
                    <input class="inp" type="text" placeholder="User ID"/>
                </div>
                <div style={{marginBottom: "15px"}}>
                    <input class="inp" type="text" placeholder="Password"/>
                </div>
                <div style={{marginBottom: "15px",paddingLeft: "140px"}}>
                    <span>Forgot your Password?</span>
                </div>
                <div>
                    <button class="button">Log In</button>
                </div>
              </div>
            </div>
  };
  