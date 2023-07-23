<template>
    <div class="signup-container">
        <div class="signup-inner-container">
            <h1>Sign up to Lawgecko</h1>
            <div class="auth">
                <button>Sign up with Google</button>
                <button>Sign up with Apple</button>
            </div>
            <p>or</p>
            <div class="form">
                <form>
                    <div class="name">
                        <div class="">
                            <label>
                                First Name
                            </label>
                            <input />
                        </div>
                        <div class="">
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
                        <input type="submit" value="Sign Up"/>
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
.auth{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.form {
    display: flex;
    flex-direction: column;
}
.name {
    display: flex;
    justify-content: space-between;
}
.name > div {
    flex: 1;
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
}
</style>