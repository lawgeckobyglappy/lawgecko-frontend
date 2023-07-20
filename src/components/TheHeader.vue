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
                <li><router-link class="link" :to="{ name: '' }">Sign in</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Get started</router-link></li>
            </ul>
            <!-- <Transition class="mobile-dev">
                <ul v-show="!mobile" class="navigation">
                    <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">About Us</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Categories</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Sign in</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Get started</router-link></li>
                </ul>
            </Transition> -->
            <LanguageSwitcher />
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
header {
    background-color: transparent;
    position: fixed;
    transition: .5s ease all;
}
nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 9px 0px;
    transition: .5s ease all;
    width: 95%;
    margin: 0 auto;
}
.navigation {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
}
ul, .link {
    font-weight: 500;
}
li {
    padding: 16px;
    margin-left: 16px;
}
.link {
    font-size: 20px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}
.link:hover {
    color: red;
    border-color: black;
}
</style>