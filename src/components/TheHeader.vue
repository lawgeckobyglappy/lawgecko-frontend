<template>
    <header class="z-99 w-full">
        <nav>
            <div class="logo">
                <h3>Lawgecko</h3>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">About Us</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Categories</router-link></li>
            </ul>
            <div class="authorization">
                <button><router-link class="" :to="{ name: '' }">Sign in</router-link></button>
                <button id="get-started"><router-link :to="{ name: '' }">Get started</router-link></button>
                <LanguageSwitcher />
            </div>
            <Transition></Transition>
            <div >
                <fa-icon :icon="['fas', 'bars']" :class="{'icon-active': mobileNav}"/>
            </div>
        </nav>
    </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
    export default {
        name: "NavBar",
        components: {
            LanguageSwitcher
        }
        
    }
</script>

<style scoped>
.icon{
    font-size: 30px;
    cursor: pointer;
    transition: .8s ease all;
}
header {
    background-color: transparent;
    position: fixed;
    transition: .5s ease all;
}
nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 10px;
    transition: .5s ease all;
    width: 95%;
    margin: 0 auto;
    font-size: 17px;
    justify-content: space-between;
    align-items: center;
}
.logo {
    flex: 1;
}
.navigation {
    display: flex;
    flex: 2;
    margin: 0;
    padding: 0;
    justify-content: center;
}
ul, .link {
    font-weight: 500;
}
li {
    padding: 16px;
    margin-left: 16px;
}
li button {
    border: 1px solid ;
}
.link {
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 4px solid transparent;
}
.link:hover {
    border-color: #6CDFBD;
}
.authorization {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
button {
  cursor: pointer;
  padding: 15px 35px;
  border-radius: 60px;
  cursor: pointer;
  white-space: nowrap;
}
#get-started {
    background-color: #6CDFBD;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border: 2px solid black;
}
</style>