<template>
    <div class="absolute top-0 w-screen h-[60px] bg-gray-900 z-20 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
        <div class="flex items-center">
            <a href="/" class="flex text-xl hover:text-orange-500 hover:cursor-pointer">
                <img class="h-8 w-auto mr-2" src="../assets/invoicify.svg" />
                <h2 class="font-bold">INVOICIFY</h2>
            </a>
        </div>

        <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb:10 md:static fixed md:text-gray-100 bottom-2 right-2 duration-75 ease-in text-3xl text-gray-800">
            <li class="md:mx-4 md:my-0 my-6" v-for="navLink in navLinks" :key="navLink.name">
                <a :href="navLink.link" :aria-label="navLink.link" class="hover:text-orange-500">
                    <fa-icon :icon="navLink.icon"></fa-icon>
                </a>
            </li>
        </ul>
    </div>

    <div class="relative text-gray-900 w-screen flex h-full">
        <div class="w-[40%] h-[calc(100%-60px)] mt-[60px] p-4">
            <form class="bg-white shadow-xl w-full h-full rounded-xl p-4">
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Options</h2>
                </div>
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Logo</h2>
                    <!-- <DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
            <div v-if="dropZoneActive">
              <div>Drop Them</div>
            </div>
            <div v-else>
              <div>Drag Your Files Here</div>
            </div>
          </DropZone>
          <ul class="image-list" v-show="files.length">
            <FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" />
          </ul> -->

                    <label class="block mt-5">
                        <span class="sr-only">Choose company logo</span>
                        <input
                            type="file"
                            accept=".png"
                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-0 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-800 hover:file:bg-gray-200"
                        />
                    </label>
                </div>
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Header</h2>
                    <div class="mt-2">
                        <label class="mr-5">Invoice No:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="12334435345" />
                    </div>

                    <div class="mt-2">
                        <label class="mr-2">Invoice Date:</label>
                        <input type="date" class="rounded-md p-1 border-2 bg-slate-200" @change="onFileSelected" placeholder="12334435345" />
                    </div>

                    <div class="mt-2">
                        <label class="mr-7">Due Date:</label>
                        <input type="date" class="rounded-md p-1 border-2 bg-slate-200" placeholder="12334435345" />
                    </div>
                </div>
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Issue</h2>
                    <div class="mt-2">
                        <label class="mr-1">Invoice To:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="Name" />
                    </div>

                    <div class="mt-2">
                        <label class="mr-8">Phone:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="12334435345" />
                    </div>

                    <div class="mt-2">
                        <label class="mr-10">Email:</label>
                        <input type="email" class="rounded-md p-1 border-2 bg-slate-200" placeholder="Email" />
                    </div>
                    <div class="mt-2">
                        <label class="mr-5">Address:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="Address" />
                    </div>
                </div>
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Data</h2>
                </div>
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Payment Information</h2>
                    <div class="mt-2">
                        <label class="mr-9">Bank Name:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="Bank Name" />
                    </div>
                    <div class="mt-2">
                        <label class="mr-5">Bank Account:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="Bank Account" />
                    </div>
                </div>
                <div class="w-full p-4 border-b-2">
                    <h2 class="text-lg font-semibold">Authorization</h2>

                    <label class="block mt-5">
                        <span class="sr-only">Signuature</span>
                        <input
                            accept=".png"
                            type="file"
                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-0 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-800 hover:file:bg-gray-200"
                        />
                    </label>
                    <div class="mt-2">
                        <label class="mr-5">Authorized Name:</label>
                        <input type="text" class="rounded-md p-1 border-2 bg-slate-200" placeholder="Name" />
                    </div>
                </div>
            </form>
        </div>
        <div class="w-full bg-gray-50 h-[calc(100%-60px)] mt-[60px] flex items-center justify-center">
            <div class="w-full h-full flex items-center justify-center">
                <div class="relative shadow-md md:scale-75 lg:scale-100 w-[21cm] h-[27.9cm] bg-white p-[0.5in]">
                    <div class="relative border-b-2 w-full h-[15%]">
                        <div class="absolute top-5 left-5 w-[100px] h-[100px]">
                            <img src="https://via.placeholder.com/100x100/ccc.png" />
                        </div>
                        <div class="absolute top-5 right-5 w-auto max-h-full flex flex-col">
                            <div class="text-2xl font-bold">INVOICE</div>
                            <div class="text-sm">Invoice No: 12345</div>
                            <div class="text-sm">Date: 12345</div>
                            <div class="text-sm">Due Date: 12345</div>
                        </div>
                    </div>
                    <div class="w-full mt-2 h-auto pl-5">
                        <div class="flex flex-col">
                            <div class="text-sm">Invoice To:Name</div>
                            <div class="text-sm">Phone: Number</div>
                            <div class="text-sm">Email: email@email.com</div>
                            <div class="text-sm">Address: Minim ad consectetur eiusmod reprehenderit quis consequat tempor.</div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center h-auto mt-7">
                        <table class="shadow-none border-2 bg-white w-full">
                            <tr>
                                <th class="bg-gray-200 border-l-2 border-gray-300 text-center px-2 py-2">No</th>
                                <th class="bg-gray-200 border-l-2 border-gray-300 text-center px-2 py-2">Description</th>
                                <th class="bg-gray-200 border-l-2 border-gray-300 text-center px-2 py-2">Price</th>
                                <th class="bg-gray-200 border-l-2 border-gray-300 text-center px-2 py-2">Qty</th>
                                <th class="bg-gray-200 border-l-2 border-gray-300 text-center px-2 py-2">Amount</th>
                            </tr>
                            <tr>
                                <td class="text-sm border-l-2 text-center px-2 py-2">1</td>
                                <td class="text-sm border-l-2 text-center px-2 py-2">100</td>
                                <td class="text-sm border-l-2 text-center px-2 py-2">Duis elit tempor ullamco minim minim nostrud Lorem.</td>
                                <td class="text-sm border-l-2 text-center px-2 py-2">1</td>
                                <td class="text-sm border-l-2 text-center px-2 py-2">1111</td>
                            </tr>
                        </table>
                    </div>

                    <div class="absolute bottom-0 left-0 w-full flex justify-between items-center p-[0.5in] pt-0">
                        <div class="flex flex-col h-full items-start">
                            <div class="font-bold text-base">Payment Information</div>
                            <div class="text-sm">Bank Name: BN</div>
                            <div class="text-sm">Bank Account No: 1234567678</div>
                        </div>
                        <div class="flex flex-col h-full items-center">
                            <div class="p-2 w-[100px] h-[100px]">
                                <img src="https://via.placeholder.com/100x100/ccc.png" />
                            </div>
                            <div class="text-sm">Name</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeView',
    data() {
        return {
            selectedLogo: null,
            navLinks: [
                {
                    icon: 'fa-regular fa-save',
                    name: 'Save',
                    link: '/',
                },
                {
                    icon: 'fa-brands fa-google-drive',
                    name: 'Google Drive',
                    link: '/',
                },
                {
                    icon: 'fa-brands fa-github',
                    name: 'Github',
                    link: 'https://github.com/lolvoid/invoicify',
                },
            ],
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedLogo = new Image()
            this.selectedLogo.onload(function (e) {
                console.log(e)
            })
            this.selectedLogo.src = e.target.result
        },
        onUpload() {},
    },
}
</script>
