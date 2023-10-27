<template>
    <div>
        <div class="flex flex-row align-center mb-15">
            <h1 class="mr-10 text-3xl font-bold">Site Admins</h1>
            <TheButton text="Add Sub Admin" @click="openSubAdminForm"/>
        </div>
        <div class="admin-details">
            <h1>Admin Data Bruh!</h1>
        </div>
        <PopUp v-if="popupTrigger">
            <div class="popup">
                <div class="mb-10 header">
                    <h1 class="font-bold text-2xl">Add New Admin</h1>
                    <button @click="openSubAdminForm"><fa-icon :icon="['far', 'rectangle-xmark']" size="lg"/></button>
                </div>
                <form class="form">
                    <div>
                        <label class="font-bold text-left">First Name</label>
                        <input class="w-full mt-3"/>
                    </div>
                    <div>
                        <label class="font-bold text-left">Last Name</label>
                        <input class="w-full mt-3"/>
                    </div>
                    <div>
                        <label class="font-bold text-left">Email Address</label>
                        <input class="w-full mt-3"/>
                    </div>
                    <TheButton text="Send Invite" class="mt-5"/>
                </form>
            </div>
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
            popupTrigger: true
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

.popup {
    text-align: left;
    padding: 10px 20px;
}

.form input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.header button:hover {
    color: red;
    transition: 0.2s ease-out;
}
</style>