<template>
    <div class="signin-container">
        <div class="signin-inner-container">
            <h1>Sign In</h1>
            <div class="form">
                <form>
                    <div>
                        <label>Email Address</label>
                        <input class="w-full" />
                    </div>
                    <input type="submit" value="Sign In" class="bg-btn-green cursor-pointer"/>
                </form>
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
            <div class="auth">
                <button id="google-btn">
                    <img src="../assets/images/google.png"/>
                </button>
                <button id="apple-btn">
                    <img src="../assets/images/apple.png"/>
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.signin-container{
    background-image: url("../assets/images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.signin-inner-container{
    min-width: 400px;
    padding: 20px;
    /* border: 1px solid black; */
}
.signin-inner-container h1 {
    text-align: center;
    margin-bottom: 3vh;
    font-size: 20px;
    font-weight: 500;
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
.form input{
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.auth {
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    margin: 20px auto;
}
.auth button {
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}
.auth button img {
    height: 30px;
    width: 30px;
    padding: 5px;
}
</style>