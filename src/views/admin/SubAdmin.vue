<template>
    <div>
        <div class="flex flex-row align-center mb-15">
            <h1 class="mr-10 text-3xl font-bold">Admins</h1>
            <TheButton text="Add Sub Admin" @click="addSubAdminToggle"/>
        </div>
        <div class="admin-details">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Permissions</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(admin, index) in admins" :key="index" class="">
                        <td>{{ admin.name }}</td>
                        <td>{{ admin.email }}</td>
                        <td>Full Sub-Admin Access</td>
                        <td><button
                            :class="{
                            'bg-yellow-200': admin.status === 'Pending',
                            'bg-green-400': admin.status === 'Active'
                            }"
                            class="w-20 rounded-full px-3 py-0.5 text-sm cursor-default">{{ admin.status }}</button></td>
                        <td>
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="inline-flex justify-center rounded-md px-4 py-2 z-1"
                                    >
                                        <fa-icon :icon="['fas', 'circle-info']" />
                                    </MenuButton>
                                </div>
                                    <MenuItems
                                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 z-50 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                                    >
                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                                <button
                                                :class="[
                                                    active ? 'bg-black text-white' : 'text-gray-900',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]"
                                                @click="setCurrentAdmin(index)"
                                                >
                                                View
                                                </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                                <button
                                                :class="[
                                                    active ? 'bg-red text-white' : 'text-gray-900',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]"
                                                @click="handleDeleteAdminPopup"
                                                >
                                                Delete
                                                </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                            </Menu>
                        </td>

                        <PopUp v-if="deleteAdminPopup">
                            <div class="popup">
                                <div class="mb-5 header">
                                    <h1 class="font-bold text-2xl">Delete</h1>
                                    <button @click="handleDeleteAdminPopup"><fa-icon :icon="['far', 'rectangle-xmark']" size="lg"/></button>
                                </div>
                                <div class="popup-content">
                                    <h1>Are you sure you want to remove this Admin?</h1>
                                    <div class="flex align-center mt-5 justify-center">
                                        <TheButton text="Yes" class="mr-3" @click="removeAdmin(index)"/>
                                        <TheButton text="No" @click="handleDeleteAdminPopup"/>
                                    </div>
                                </div>
                            </div>
                        </PopUp>

                        <PopUp v-if="adminProfilePopup">
                            <div class="popup">
                                <div class="mb-5 header">
                                    <h1 class="font-bold text-2xl">Admin</h1>
                                    <button @click="adminProfileToggle"><fa-icon :icon="['far', 'rectangle-xmark']" size="lg"/></button>
                                </div>
                                <div class="popup-content">
                                    <div class="admin-details-preview">
                                        <div>
                                            <label class="font-bold text-left">Name</label>
                                            <p>{{ currentAdmin.name }}</p>
                                        </div>
                                        <div>
                                            <label class="font-bold text-left">Email Address</label>
                                            <p>{{ currentAdmin.email }}</p>
                                        </div>
                                    </div>
                                    <hr class="my-5 border-2"/>
                                    <div class="form">
                                        <p class="mb-3">Lawgecko Email Credentials</p>
                                        <div>
                                            <label class="font-bold text-left">Email Address</label>
                                            <input class="w-full mt-3"/>
                                        </div>
                                        <div>
                                            <label class="font-bold text-left">Password</label>
                                            <input class="w-full mt-3"/>
                                        </div>
                                        <div class="flex align-center mt-5">
                                            <TheButton text="Approve" class="mr-3"/>
                                            <TheButton text="Reject"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    </tr>
                </tbody>
            </table>
            
        </div>
        <PopUp v-if="addSubAdminPopup">
            <div class="popup">
                <div class="mb-10 header">
                    <h1 class="font-bold text-2xl">Add New Admin</h1>
                    <button @click="addSubAdminToggle"><fa-icon :icon="['far', 'rectangle-xmark']" size="lg"/></button>
                </div>
                <form class="form" @submit.prevent="addSubAdmin">
                    <div :class="{ 'error': subAdmin.nameError }">
                        <label class="font-bold text-left">Name</label>
                        <input v-model="subAdmin.name" class="w-full mt-3"/>
                    </div>
                    <div :class="{ 'error': subAdmin.personalEmailError }">
                        <label class="font-bold text-left">Email Address</label>
                        <input v-model="subAdmin.personalEmail" class="w-full mt-3"/>
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
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { fetcher } from '@/utils/fetcher';

export default {
    components: {
        TheButton,
        PopUp,
        Menu,
        MenuButton,
        MenuItems,
        MenuItem
    }, 

    data() {
        return {
            addSubAdminPopup: false,
            adminProfilePopup: false,
            deleteAdminPopup: false,
            admins: [],
            currentAdmin: {},
            adminActions: [
                {
                    title: "View"
                }, 
                {
                    title: "Delete"
                }
            ],
            subAdmin: {
                name: "",
                personalEmail: "",
                nameError: "",
                personalEmailError: false
            }
        }
    },

    mounted() {
        this.getAllAdmins();
    },

    methods: {
        addSubAdminToggle() {
            this.addSubAdminPopup = !this.addSubAdminPopup;
            this.resetAddSubAdminForm();
        },

        handleDeleteAdminPopup() {
            this.deleteAdminPopup = !this.deleteAdminPopup;
        },

        async removeAdmin(index) {
            let adminId = this.admins[index]._id;
            this.admins.splice(index, 1);
            await fetcher.delete(`/accounts/security-admins/${adminId}`);
            this.handleDeleteAdminPopup();
        },

        setCurrentAdmin(index) {
            this.currentAdmin = this.admins[index];
            this.adminProfileToggle()
        },

        adminProfileToggle() {
            this.adminProfilePopup = !this.adminProfilePopup
        },

        validateSubAdminFormData() {
            this.subAdmin.nameError = this.subAdmin.name === "",
            this.subAdmin.personalEmailError = this.subAdmin.personalEmail === ""
        },

        isSubAdminFormDataValidated() {
            return !this.subAdmin.nameError && !this.subAdmin.personalEmailError;
        },

        createAddSubAdminRequest() {
            return {
                name: this.subAdmin.name,
                email: this.subAdmin.personalEmail
            }
        },

        resetAddSubAdminForm() {
            this.subAdmin.name = "",
            this.subAdmin.nameError = "",
            this.subAdmin.personalEmail = "",
            this.subAdmin.personalEmailError = ""
        },

        async addSubAdmin() {
            this.validateSubAdminFormData()
            try{
                if(this.isSubAdminFormDataValidated()){
                    let subAdminRequest = this.createAddSubAdminRequest();
                    await fetcher.post('/accounts/security-admins/invite', subAdminRequest)
                    this.addSubAdminToggle();
                    this.admins.push({ status: "Pending", ...subAdminRequest })
                    this.admins = this.getAllAdmins()?.data
                }
            } catch(error){
                console.log(error);
            }
        },

        async getAllAdmins(){
            try{
                let response = await fetcher.get('/accounts/security-admins');
                console.log(response)
                this.admins = response.data.map(admin => ({
                    ...admin,
                    status: admin.status || "Pending"
                }));
            } catch(error) {
                console.log(error)
            }
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
  /* border: 1px solid; */
  padding: 0 100px;
}

table {
  /* flex: 1; */
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

.popup-content {
    max-height: 300px;
    overflow-y: auto; 
    padding: 20px; 
}

.admin-details-preview div{
    margin-bottom: 5px;
}

.error input {
  border-color: red;
}


@media (max-width: 768px) {
    .admin-details {
        overflow-x: auto;
        padding: 0 10px;
    }
}
</style>