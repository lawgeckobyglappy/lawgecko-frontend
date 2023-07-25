<template>
    <div class="signup-container">
        <div class="signup-inner-container">
            <h1>Sign up to Lawgecko</h1>
            <div class="auth">
                <button id="google-btn">
                    <img src="../assets/images/google.png"/>
                    Sign up with Google
                </button>
                <button id="apple-btn">
                    <img src="../assets/images/apple.png"/>
                    Sign up with Apple
                </button>
            </div>
            <div class="or-demarcation">
                <div class="hr">
                    <hr/>
                </div>
                <p class="or-text">or</p>
                <div class="hr">
                    <hr/>
                </div>
            </div>
            <div class="form">
                <form>
                    <div class="name">
                        <div>
                            <label>
                                First Name
                            </label>
                            <input />
                        </div>
                        <div>
                            <label>
                                Last Name
                            </label>
                            <input/>
                        </div>
                    </div>
                    <div>
                        <label>
                            Username
                        </label>
                        <input />
                    </div>
                    <div>
                        <label>
                            Email Address
                        </label>
                        <input />
                    </div>
                    <div class="policy-agreement">
                        <input type="checkbox" id="checkboxInput"/>
                        <label for="termsCheckbox">
                            By signing up, you agree to our Terms of Service and Privacy Policy,
                            including Cookie Use
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" class="bg-btn-green cursor-pointer"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.signup-container{
    /* max-width: 600px; */
    background-image: url("../assets/images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* margin: 0 auto;
    padding: 20px; */
}
.signup-inner-container{
    max-width: 500px;
    padding: 20px;
}
.signup-inner-container h1{
    text-align: center;
    margin-bottom: 3vh;
    font-size: 20px;
    font-weight: 500;
}
.auth {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 20px auto;
}
.auth button {
    border: 1px solid;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 25px 5px 4px;
    font-size: 12px;
}
.auth button img {
    height: 25px;
    padding: 5px;
    background-color: white;
    border-radius: 2px;
    margin-right: 7px;
}
#apple-btn{
    background-color: #414040;
    color: white;
}
#google-btn{
    background-color: #4172D1;
    color: white;
}
.or-demarcation{
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
}
.hr {
    height: 1.5px;
    margin-top: 12px;
    margin-bottom: 20px;
    background-color: #cbcaca;
}
.or-text {
    margin: 0 10px;
    font-weight: 600;
    color: #6E6E6E;
}
.form {
    display: flex;
    flex-direction: column;
}
.name {
    display: flex;
    justify-content: space-between;
}
.name > div:first-child{
    margin-right: 10px;
}
label {
    margin-bottom: 5px;
}
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.policy-agreement {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

#checkboxInput{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

@media (max-width: 600px) {
    .name {
        flex-direction: column;
    }
    .name > div:first-child{
    margin-right: 0;
}
}
</style>