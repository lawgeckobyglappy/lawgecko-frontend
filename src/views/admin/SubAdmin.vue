<template>
    <div>
        <div class="flex flex-row align-center mb-15">
            <h1 class="mr-10 text-3xl font-bold">Admins</h1>
            <TheButton text="Add Sub Admin" @click="openSubAdminForm"/>
        </div>
        <div class="admin-details">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Permissions</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Collins</td>
                        <td>collins.tito.siyabola@gmail.com</td>
                        <td>Full Sub-Admin Access</td>
                        <td>Pending</td>
                        <td><button>x</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <PopUp v-if="popupTrigger">
            <div class="popup">
                <div class="mb-10 header">
                    <h1 class="font-bold text-2xl">Add New Admin</h1>
                    <button @click="openSubAdminForm"><fa-icon :icon="['far', 'rectangle-xmark']" size="lg"/></button>
                </div>
                <form class="form">
                    <div>
                        <label class="font-bold text-left">Name</label>
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
  display: flex;
  min-width: 70vw;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid;
  padding: 0 100px;
}

table {
  flex: 1; /* Allow the table to take up available space */
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th {
    border-bottom: 1px solid #ccc;
}

table, th, td {
  /* border: 1px solid #ccc; */
  text-align: left;
}

th, td {
  padding: 10px;
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
@media (max-width: 768px) {
    .admin-details {
        overflow-x: scroll;
        padding: 0 0px;
    }
}
</style>