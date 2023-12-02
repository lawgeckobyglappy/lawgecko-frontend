<template>
    <div class="bg-zinc-800 h-10 flex align-center p-2 mb-2">
        <fa-icon :icon="['fas', 'arrows-up-down-left-right']" />
        <div class="mr-auto flex w-full items-center">
            <div>
                <span v-if="isEditable">
                    <a href="#" class="text-sm ml-2">Question Number</a>
                </span>
                <form v-else class="w-28">
                    <input v-model="defaultTitle" class="h-8 ml-0 text-sm border-none active:outline-none focus:outline-none"/>
                </form>
            </div>  
        </div>
        <div class="flex align-center space-x-2">
            <div class="cursor-pointer dark:hover:text-green-500 duration-200 hover:scale-125 hover:text-indigo-500 items-center justify-center transform text-gray-L500" @click="editQuestionTitle">
                <fa-icon :icon="['fas', 'pencil']" />
            </div>
            <router-link to="/admin/assessment/question">
                <a class="cursor-pointer dark:hover:text-green-500 mt-1 duration-200 hover:scale-125 hover:text-indigo-500 items-center justify-center text-gray-L500 transform " data-testid="edit-lesson">
                    <fa-icon :icon="['far', 'pen-to-square']" />
                </a>
            </router-link>
            <div class="cursor-pointer dark:hover:text-red-400 duration-200 hover:scale-125 hover:text-red-500 items-center justify-center rounded-full transform text-gray-L500" data-testid="delete-lesson" id="delete-lesson">
                <fa-icon :icon="['fas', 'trash-can']" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEditable: true,
            defaultTitle: "Question Number",
            questions: []
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