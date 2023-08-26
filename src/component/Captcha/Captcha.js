import 'bootstrap/dist/css/bootstrap.min.css';
import captchaImg from './captcha-bg.png';
import React, { useState } from 'react';
function Captcha() {
    const [user, setUser] = useState({
        username: ""
    });
    const captchacharacters = 'xyz123';
    function generateNewString(length) {
        let result = '';
        const charactersLength = captchacharacters.length;
        for (let i = 0; i < length; i++) {
            result += captchacharacters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const captcha = generateNewString(6)
    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        user[name] = value;
        setUser(user);
    }
    const onSubmit = e => {
        var element = document.getElementById("succesBTN");
        var inputData = document.getElementById("inputType");
        element.style.cursor = "wait";
        element.innerHTML = "Checking...";
        inputData.disabled = true;
        element.disabled = true;
        var myFunctions = function () {
            if (captcha == user.username) {
                element.style.backgroundColor = "green";
                element.innerHTML = "SignUp Sucessfully";
                element.disabled = true;
                element.style.cursor = "not-allowed";
                inputData.style.display = "none";

            }
            else {
                element.style.backgroundColor = "red";
                element.style.cursor = "not-allowed";
                element.innerHTML = "Invalid Captcha!";
                element.disabled = true;
                var myFunction = function () {
                    element.style.backgroundColor = "#007bff";
                    element.style.cursor = "pointer";
                    element.innerHTML = "Verify Captcha";
                    element.disabled = false;
                    inputData.disabled = false;
                    inputData.value = '';
                };
                setTimeout(myFunction, 2000);
            }
        }
        setTimeout(myFunctions, 2000);
    };

    return (
        <div
            className={
                "bg-gradient-to-tl from-green-900 to-indigo-400 h-screen flex flex-row "
            }
        >
            <div class="container">
                <h4 className="text-center mt-4 text-white -ml-28"><b>Sign-up </b></h4>
                <div className={"lg:w-1/2 w-3/4 justify-center items-center flex flex-col lg:ml-36 justify-center"}>
                    <p className={"font-semibold lg:-ml-14 -ml-56"}>Email</p>
                    <input
                        id="email"
                        className={"lg:w-1/2 w-full justify-center items-center bg-gray-200 h-6 -mt-2 lg:ml-36 rounded-xl px-3 text-xs"}
                        placeholder={"email"}
                    />{" "}

                </div>
                <div className={"lg:w-1/2 w-3/4 justify-center items-center flex flex-col mt-2 lg:ml-36 justify-center"}>
                    <p className={"font-semibold lg:-ml-14 -ml-56"}>Password</p>
                    <input
                        id="password"

                        className={"lg:w-1/2 w-full  justify-center items-center bg-gray-200 h-6 -mt-2 lg:ml-36 rounded-xl px-3 text-xs"}
                        placeholder={"password"}
                    />
                </div>
                <div className={"lg:w-1/2 w-3/4 justify-center items-center flex flex-col mt-2 lg:ml-36 justify-center"}>
                    <p className={"font-semibold lg:-ml-0 -ml-44"}>Confirm Password</p>
                    <input
                        id="confirmPass"

                        className={"lg:w-1/2 w-full  justify-center items-center bg-gray-200 h-6 -mt-2 lg:ml-36 rounded-xl px-3 text-xs"}
                        placeholder={"confirmPass"}
                    />
                </div>
                <div class="row mt-4">
                    <div class="col-md-4">
                    </div>

                    <div class="col-md-8">
                        <h4 id="captcha" style={{ marginTop: "25px", marginLeft: "65px", position: "absolute" }}>{captcha}</h4>

                        <div class="form-group row">
                            <div className="ml-6" style={{
                                maxWidth: "8rem",
                                minWidth: "12rem",
                            }}>
                                <img src={captchaImg} className="mt-3 mb-3" height="50" />
                            </div>
                        </div>
                        <div class="form-group row">

                            <input type="text" id="inputType" className="form-control" placeholder="Enter Captcha"
                                name="username" onChange={handleChange} autocomplete="off" style={{ width: "20%" }}
                            />
                            <div className="" style={{
                                maxWidth: "13rem",
                                minWidth: "12rem",
                            }}>
                                <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1">SignUp</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Captcha;