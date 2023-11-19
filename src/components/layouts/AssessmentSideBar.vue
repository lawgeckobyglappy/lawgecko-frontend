<template>
    <aside :class="`${this.isExpanded ? 'isExpanded' : '' }`">
        <div class="logo">
            <img v-if="!isExpanded" src="@/assets/images/lawgeckoIcon.png" alt="Google Icon"/>
            <img v-else src="@/assets/images/lawgeckoIcon.png" alt="Google Icon"/>
        </div>

        <div class="back-to-resource">
            <router-link class="back-button" to="/admin/resource">
                <fa-icon :icon="['fas', 'arrow-left']" />
                <h1>Back to Resource</h1>
            </router-link>
        </div>

        <h3 class="font-bold">UNTITLED ASSESSMENT</h3>
        <div class="menu">
            <input placeholder="Search Questions" class="my-5"/>
            <button>Add Question</button>
            <router-link class="button" to="/admin/subAdmin">
                <span class="menu-icon"><fa-icon :icon="['fas', 'users']" /></span>
                <span class="text">Admins</span>
            </router-link>
        </div>

        <div class="flex"></div>
		
		<div class="menu">
			<router-link to="/admin/profile" class="button">
				<span class="menu-icon"><fa-icon :icon="['fas', 'user-gear']" /></span>
				<span class="text">Settings</span>
			</router-link>
			<button class="button" @click="logout">
                <a href="/signin">
                    <span class="menu-icon"><fa-icon :icon="['fas', 'arrow-right-from-bracket']" /></span>
                    <span class="text">Logout</span>
                </a>
            </button>
		</div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: localStorage.getItem("isExpanded") === "true"
        }
    },

    methods: {
        toggleMenu(){
            this.isExpanded = !this.isExpanded;
            localStorage.setItem("isExpanded", this.isExpanded)
        },

        logout(){
            localStorage.removeItem("currentUser")
            localStorage.removeItem("token")
            console.log("Hello")
        }
    }
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    transition: 0.2s ease-in-out;
}

aside .flex {
	flex: 1 1 0%;
}

.logo {
    margin-bottom: 1rem;

}
.logo img {
    width: 2rem;
}
.isExpanded {
    width: 250px;
}

.back-to-resource {
    border-bottom: 1px solid gray;
    margin-bottom: 1rem;
}

.back-button {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  transition: 0.2s ease-out;
}

.back-button:hover {
  color: gray;
  transform: translateX(0.2rem);
}

.back-button h1 {
  margin-left: 0.5rem;
}
.menu-toggle-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
}
.isExpanded .menu-toggle-wrap {
    justify-content: flex-end;
    top: -3rem;
}

.isExpanded .menu-toggle-wrap .menu-toggle {
    transform: rotate(-180deg);
}

.menu-toggle-wrap .menu-toggle {
    transition: 0.2s ease-out;
}

.menu-toggle:hover {
    color: red;
    transform: translateX(0.2rem);
}

.menu .button{
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    transition: 0.2s ease-out;
}

.isExpanded h3,
.isExpanded .button .text {
    opacity: 1;
}

h3, .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
}

.menu-icon {
    margin-right: 0.5rem;
    transition: 0.3s ease-out;
}

.menu-icon .text,
.router-link-exact-active,
.button:hover {
    color: brown;
}

.router-link-exact-active {
    border-left: 2px solid rgb(113, 113, 113);
}

h3 {
    color: gray;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.875rem;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (max-width: 1024px) {
    aside {
        position: fixed;
        z-index: 99;
    }
}
</style>