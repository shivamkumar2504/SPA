import '.././css/signup.css';
export const Signup = () => {
    return <div style={{display:"flex",justifyContent:"center",paddingTop:"70px"}}>
              <div class="SignUpBox">
                <div style={{fontSize: "20px",marginBottom:"15px"}}>Sign Up</div>
                <div style={{marginBottom: "15px"}}>
                    <input class="inpSB" type="text" placeholder="First Name"/>
                </div>
                <div style={{marginBottom: "15px"}}>
                    <input class="inpSB" type="text" placeholder="Last Name"/>
                </div>
                <div style={{marginBottom: "15px"}}>
                    <input class="inpSB" type="text" placeholder="Email ID"/>
                </div>
                <div style={{marginBottom: "15px"}}>
                    <input class="inpSB" type="text" placeholder="Password"/>
                </div>
                <div>
                    <button class="buttonSB">Sign Up</button>
                </div>
              </div>
          </div>
  };
  