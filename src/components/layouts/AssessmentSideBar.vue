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
            <div>
                <div class="bg-zinc-800 h-10 pl-1 flex align-center">
                    <fa-icon :icon="['fas', 'arrows-up-down-left-right']" />
                    <div class="mr-auto flex w-full items-center pl-2" style="max-width: 150px;">
                        <span v-if="isEditable" class="text-ellipsis overflow-hidden whitespace-nowrap max-w-sm text-base">
                            <a href="#" style="vertical-align: middle;" class="text-sm">{{ defaultTitle }}</a>
                        </span>
                        <form v-else>
                            <input v-model="defaultTitle" class="h-8 text-sm"/>
                        </form>
                        <div class="cursor-pointer dark:hover:text-green-500 duration-200 hover:scale-125 hover:text-indigo-500 inline-flex items-center justify-center mx-3 transform text-gray-L500" @click="editQuestionTitle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 stroke-current">
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="inline-flex items-center space-x-3">
                        <router-link to="/admin/assessment/question">
                            <a class="cursor-pointer dark:hover:text-green-500  duration-200 hover:scale-125 hover:text-indigo-500 inline-flex items-center justify-center text-gray-L500 transform " data-testid="edit-lesson">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 stroke-current">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </a>
                        </router-link>
                        <div class="cursor-pointer flex mr-3">
                            <div class="cursor-pointer dark:hover:text-red-400 duration-200 hover:scale-125 hover:text-red-500 inline-flex items-center justify-center mr-3 rounded-full transform text-gray-L500" data-testid="delete-lesson" id="delete-lesson">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 stroke-current">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <button class="p-3 my-3 border-solid border-1 bg-green-900 border-gray-500">Add Question</button>
            </div>
        </div>

        <div class="flex"></div>
		
		<div class="menu">
			<!-- Empty for now -->
		</div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            isEditable: true,
            defaultTitle: "Untitled Masterpiece"
        }
    },

    methods: {
        logout(){
            localStorage.removeItem("currentUser")
            localStorage.removeItem("token")
            console.log("Hello")
        },

        editQuestionTitle(){
            this.isEditable = !this.isEditable;
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
    /* width: calc(2rem + 32px); */
    width: 250px;
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
/* .menu-toggle-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
} */
/* .isExpanded .menu-toggle-wrap {
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
} */

.menu .button{
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    transition: 0.2s ease-out;
}

/* .isExpanded h3,
.isExpanded .button .text {
    opacity: 1;
} */

h3, .button .text {
    transition: 0.3s ease-out;
}

.menu-icon {
    margin-right: 0.5rem;
    transition: 0.3s ease-out;
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