<template>
    <header class="z-99 w-full">
        <nav>
            <div class="logo">
                <h3>Lawgecko</h3>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'home' }">{{ $t('header.home') }}</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">{{ $t('header.about') }}</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">{{ $t('header.categories') }}</router-link></li>
            </ul>
            <div v-show="!mobile" class="authorization">
                <button><router-link class="" :to="{ name: '' }">{{ $t( 'header.signIn' ) }}</router-link></button>
                <button id="get-started"><router-link :to="{ name: 'sign-up' }">{{ $t('header.getStarted') }}</router-link></button>
            </div>
            <LanguageSwitcher />
            <Transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'home' }">{{ $t('header.home') }}</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">{{ $t('header.about') }}</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">{{ $t('header.categories') }}</router-link></li>
                </ul>
            </Transition>
            <div v-show="mobile">
                <fa-icon 
                :icon="['fas', 'bars']" 
                :class="{'icon-active': mobileNav}"
                @click="toggleMobileNav"
                />
            </div>
        </nav>
    </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
    export default {
        name: "NavBar",
        data(){
            return {
                mobileNav: null,
                mobile: null,
                windowWidth: null
            }
        },
        created(){
            window.addEventListener('resize', this.checkScreen)
            this.checkScreen()
        },
        components: {
            LanguageSwitcher
        },
        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav
            },

            checkScreen(){
                this.windowWidth = window.innerWidth;
                console.log(this.windowWidth)
                if(this.windowWidth <= 850){
                    this.mobile = true
                    return
                }
                this.mobile = false
                this.mobileNav = false
            }
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
    font-weight: 500;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
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
.icon-active{
    cursor: pointer;
}
.dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 90%;
    height: 100%;
    max-width: 250px;
    background-color: white;
    top: 0;
    left: 0;
    padding-top: 20px;
    border-right: 2px solid rgb(229, 229, 229);
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
</style>