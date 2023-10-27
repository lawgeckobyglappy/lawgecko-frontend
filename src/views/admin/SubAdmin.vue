<template>
    <div>
        <div class="flex flex-row align-center mb-15">
            <h1 class="mr-10 text-3xl font-bold">Site Admins</h1>
            <TheButton text="Add Sub Admin" @click="openSubAdminForm"/>
        </div>
        <div class="admin-details">
            <p>Admin Data Bruh!</p>
        </div>
        <PopUp v-if="popupTrigger">
            <h1>Add New Admin</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input />
                </div>
                <div>
                    <label>Last Name</label>
                    <input />
                </div>
                <div>
                    <label>Email Address</label>
                    <input />
                </div>
                <div>
                    
                </div>
            </form>
        </PopUp>
    </div>
</template>

 
<script>
import TheButton from '@/components/buttons/TheButton.vue';
import PopUp from '@/components/PopUp.vue';

export default {
    components: {
        TheButton,
        PopUp
    }, 

    data() {
        return {
            popupTrigger: false
        }
    },

    methods: {
        openSubAdminForm() {
            this.popupTrigger = !this.popupTrigger;
        }
    }
}

</script>

<style scoped>
.admin-details {
    border: 1px solid;
}

</style>