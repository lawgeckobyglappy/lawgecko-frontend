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
                                    <button @click="adminProfile"><fa-icon :icon="['far', 'rectangle-xmark']" size="lg"/></button>
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
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

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
            popupTrigger: false,
            adminProfilePopup: false,
            deleteAdminPopup: false,
            admins: [
                {
                    name: "Collins",
                    email: "collins.tito.siyabola@gmail.com",
                    status: "Pending"
                },
                {
                    name: "Abike",
                    email: "tolu.abike.similoluwa@gmail.com",
                    status: "Active"
                },
            ],
            currentAdmin: null,
            adminActions: [
                {
                    title: "View"
                }, 
                {
                    title: "Delete"
                }
            ]
        }
    },

    methods: {
        openSubAdminForm() {
            this.popupTrigger = !this.popupTrigger;
        },

        handleDeleteAdminPopup() {
            this.deleteAdminPopup = !this.deleteAdminPopup;
            
        },

        removeAdmin(index) {
            this.admins.splice(index, 1)
            this.handleDeleteAdminPopup()
        },

        setCurrentAdmin(index) {
            this.currentAdmin = this.admins[index]
            this.adminProfile()
        },

        adminProfile() {
            this.adminProfilePopup = !this.adminProfilePopup
        },

        accept() {

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


@media (max-width: 768px) {
    .admin-details {
        overflow-x: auto;
        padding: 0 10px;
    }
}
</style>