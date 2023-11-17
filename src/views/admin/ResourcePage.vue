<template>
    <div>
        <div class="flex flex-row align-center mb-15">
            <h1 class="mr-10 text-3xl font-bold">Resources</h1>
        </div>
        <div class="px-20">
            <div class="flex flex-row w-full">
                <select class="mr-2">
                    <option value="all" selected>ALL</option>
                    <option value="drafts">DRAFTS</option>
                    <option value="published">PUBLISHED</option>
                </select>
                <input placeholder="Search..." class="flex-grow"/>
            </div>
            <div>
                <button class="font-bold p-2 border-15 mb-6 mt-2">Created Assessments</button>
            </div>
            <div class="flex justify-center items-center">
                <div class="p-10 border-2 w-80 h-80 cursor-pointer bg-neutral-100 text-center flex flex-col justify-center items-center rounded-lg">
                    <fa-icon :icon="['fas', 'plus']" size="2xl" />
                    <h1 class="font-bold mt-3">CREATE NEW ASSESSMENT</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
input, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select {
  width: 15%;
  margin-right: 10px;
  cursor: pointer;
}

button {
    border-bottom: 3px solid teal;
}

</style>