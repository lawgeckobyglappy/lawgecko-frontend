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

        <router-link to="/admin/assessment">
            <h3 class="font-bold hover:text-green-500">UNTITLED ASSESSMENT</h3>
        </router-link>
        <div class="menu">
            <input placeholder="Search Questions" class="my-5"/>
            <div class="overflow-auto max-h-72">
                <QuestionBar v-for="(question, index) of questions" :id="index" />
            </div>
            <div class="flex justify-end">
                <button class="p-3 my-3 border-solid border-1 bg-green-900 border-gray-500" @click.prevent="addQuestion">Add Question</button>
            </div>
        </div>

        <div class="flex"></div>

    </aside>
</template>

<script>
import QuestionBar from '@/components/QuestionBar.vue'

export default {
    components: {
        QuestionBar
    },

    data() {
        return {
            isEditable: true,
            defaultTitle: "Question Number",
            questions: [QuestionBar]
        }
    },

    methods: {
        logout(){
            localStorage.removeItem("currentUser")
            localStorage.removeItem("token")
            console.log("Hello")
        },

        addQuestion(){
            this.questions.push(QuestionBar)
        },
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

/* aside .flex {
	flex: 1 1 0%;
} */

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