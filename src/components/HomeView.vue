<template>
  <div
    class="absolute top-0 w-screen  h-[60px] bg-gray-900 z-20 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">

    <div class="flex items-center ">
      <a href="/" class="flex text-xl hover:text-orange-500 hover:cursor-pointer">
        <img class="h-8 w-auto mr-2" src="../assets/invoicify.svg" />
        <h2 class="font-bold">INVOICIFY</h2>
      </a>
    </div>

    <ul
      class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb:10 md:static fixed md:text-gray-100 bottom-2  right-2 duration-75 ease-in text-3xl text-gray-800 ">
      <li class="md:mx-4 md:my-0 my-6" v-for="navLink in navLinks" :key="navLink.name">
        <a :href="navLink.link" :aria-label="navLink.link" class="hover:text-orange-500">

          <fa-icon :icon=navLink.icon></fa-icon>
        </a>
      </li>
    </ul>
  </div>

  <div class="relative  text-gray-900 w-screen flex h-full ">

    <div class="w-[30%] h-[calc(100%-60px)] mt-[60px] p-4">
      <form class="bg-white   shadow-xl w-full h-full rounded-xl p-4 overflow-y-auto over">

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
            <image-input @selected-image="logo"></image-input>

          </label>
        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Header</h2>
          <div>

            <input-text label="Invoice No:" placeholder="1111-111-11" @dataValue="setInvoiceNumber" />
          </div>

          <div class="mt-2">
            <label>Invoice Date:</label>


            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 light:text-gray-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input datepicker type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="Select date">
            </div>


          </div>

          <div class="mt-2 ">
            <label>Due Date:</label>
            <input type="date" class=" w-full rounded-md p-1 border-2 bg-slate-200" placeholder="12334435345" />
          </div>


        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Issue</h2>
          <div class="mt-2 ">

            <input-text label="Invoice To:" placeholder="Name" @dataValue="setInvoiceTo" />

          </div>

          <div class="mt-2 ">
            <input-text type="tel" label="Phone:" placeholder="01-2345-56789" @dataValue="setPhoneNumber" />
          </div>


          <div class="mt-2 ">
            <input-text type="email" label="Email:" placeholder="customer@email.com" @dataValue="setEmail" />
          </div>
          <div class="mt-2 ">
            <input-textarea label="Address:" placeholder="Address" @dataValue="setAddress" />
          </div>
        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Data</h2>

        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Payment Information</h2>
          <div class="mt-2 ">
            <input-text type="text" label="Bank Name:" placeholder="Bank Name" @dataValue="setBankName" />
          </div>
          <div class="mt-2 ">
            <input-text type="text" label="Bank Account No:" placeholder="Bank Account"
              @dataValue="setBankAccountNumber" />
          </div>

        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Authorization</h2>

          <label class="block mt-5">
            <span class="sr-only">Signuature</span>
            <image-input @selected-image="signature"></image-input>
          </label>
          <div class="mt-2 ">
            <div class="mt-2 ">
              <input-text type="text" label="Name" placeholder="Name" @dataValue="setAuthroizedName" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="w-full  bg-gray-50 h-[calc(100%-60px)] mt-[60px] flex items-center justify-center">
      <div class="w-full h-full  flex items-center justify-center">
        <div class="relative shadow-md  md:scale-75 lg:scale-100   w-[21cm] h-[27.9cm] bg-white p-[0.5in] ">
          <div class="relative border-b-2  w-full h-[15%]">
            <div class="absolute top-5 left-5 w-[100px] h-[100px]">
              <image-preview :imgData="selectedLogo" />
              <!-- <img class="w-full h-full object-cover"  :src='selectedLogo ? selectedLogo : "https://via.placeholder.com/100x100/ccc.png"' /> -->


            </div>
            <div class="absolute top-5 right-5 w-auto max-h-full flex flex-col">

              <div class="text-2xl font-bold">INVOICE</div>
              <div class="text-sm">
                Invoice No: {{ invoiceNumber }}
              </div>
              <div class="text-sm">
                Date: 12345
              </div>
              <div class="text-sm">
                Due Date: 12345
              </div>
            </div>

          </div>
          <div class="w-full mt-2 h-auto pl-5">
            <div class="flex flex-col">
              <div class="text-sm">
                Invoice To: {{ invoiceTo }}
              </div>
              <div class="text-sm">
                Phone: {{ phoneNumber }}
              </div>
              <div class="text-sm">
                Email: {{ emailAddress }}
              </div>
              <div class="text-sm">
                Address: {{ address }}
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center h-auto mt-7">
            <table class="shadow-none border-2 bg-white w-full">
              <tr>
                <th class="bg-gray-200 border-l-2 border-gray-300  text-center px-2 py-2">No</th>
                <th class="bg-gray-200 border-l-2 border-gray-300  text-center px-2 py-2">Description</th>
                <th class="bg-gray-200 border-l-2 border-gray-300  text-center px-2 py-2">Price</th>
                <th class="bg-gray-200 border-l-2 border-gray-300  text-center px-2 py-2">Qty</th>
                <th class="bg-gray-200 border-l-2 border-gray-300  text-center px-2 py-2">Amount</th>
              </tr>
              <tr>
                <td class="text-sm border-l-2 text-center px-2 py-2">1</td>
                <td class="text-sm border-l-2 text-center px-2 py-2">100</td>
                <td class="text-sm border-l-2 text-center px-2 py-2">Duis elit tempor ullamco minim minim nostrud Lorem.
                </td>
                <td class="text-sm border-l-2 text-center px-2 py-2">1</td>
                <td class="text-sm border-l-2 text-center px-2 py-2">1111</td>
              </tr>
            </table>
          </div>

          <div class="absolute bottom-0 left-0 w-full flex justify-between items-center p-[0.5in] pt-0">
            <div class="flex flex-col h-full items-start ">
              <div class="font-bold text-base">Payment Information</div>
              <div class="text-sm">Bank Name: {{ bankName }}</div>
              <div class="text-sm">Bank Account No: {{ bankAccount }}</div>
            </div>
            <div class="flex flex-col h-full items-center ">
              <div class="p-2 w-[100px] h-[100px]">
                <image-preview :imgData="selectedSignature" />
              </div>
              <div class=" text-sm">{{ authorziedName }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import "flowbite/dist/datepicker"

export default {
  name: "HomeView",
  data() {
    return {
      invoiceNumber: '0',
      invoiceTo: "Required",
      emailAddress: "Required",
      phoneNumber: "",
      address: "",
      bankName: "Required",
      bankAccount: "Required",
      authorziedName: "Required",
      selectedLogo: "https://via.placeholder.com/100x100/ccc.png",
      selectedSignature: "https://via.placeholder.com/100x100/ccc.png",
      navLinks: [
        {
          icon: "fa-solid fa-print",
          name: "Print",
          link: "/"
        }, 
        {
          icon: "fa-solid fa-file-pdf",
          name: "Print",
          link: "/"
        },
        {
          icon: "fa-regular fa-save",
          name: "Save",
          link: "/"
        },
        {
          icon: "fa-brands fa-google-drive",
          name: "Google Drive",
          link: "/"
        },
        {
          icon: "fa-brands fa-github",
          name: "Github",
          link: "https://github.com/lolvoid/invoicify"
        }
      ]
    };
  },

  methods: {
    setBankName(data) {
      this.bankName = data;
    },
    setBankAccountNumber(data) {
      this.bankAccount = data;
    }, setAuthroizedName(data) {
      this.authorziedName = data;
    },
    setPhoneNumber(data) {
      this.phoneNumber = data;
    },
    setInvoiceNumber(data) {
      this.invoiceNumber = data;
    },
    setInvoiceTo(data) {
      this.invoiceTo = data;
    },
    setEmail(data) {
      this.emailAddress = data;
    },
    setAddress(data) {
      this.address = data;
    },
    logo(data) {
      this.selectedLogo = data;
    },
    signature(data) {
      this.selectedSignature = data;
    }
  }
}



</script>

<style scoped></style>