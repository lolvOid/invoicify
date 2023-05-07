<template>
  
  <div class="absolute top-0 w-screen  h-[60px] bg-gray-900 z-20 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">

    <div class="flex items-center ">
      <a href="/" class="flex text-xl hover:text-orange-500 hover:cursor-pointer">
        <img class="h-8 w-auto mr-2" :src='brandLogo' />
        <h2 class="font-bold">INVOICIFY</h2>
      </a>
    </div>

    <ul
      class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb:10 md:static fixed md:text-gray-100 bottom-2  right-2 duration-75 ease-in text-3xl text-gray-800 ">
      <li class="md:mx-4 md:my-0 my-6" v-for="navLink in navLinks" :key="navLink.name">
        <a :href="navLink.link" :aria-label="navLink.link" class="hover:text-orange-500" @click="navLink.action"
          :target="navLink.target">

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


          <label class="block mt-5">

            <image-input @selected-image="logo" label="Upload Company Logo (1:1)"></image-input>

          </label>
        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold mb-2">Header</h2>
          <div>

            <input-text :maxLength="15" label="Invoice No:" placeholder="1111-111-11" @dataValue="setInvoiceNumber" />
          </div>
          <!-- 
          <div class="mt-2 w-full">
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
              <input datepicker datepicker-autohide type="text"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="Select date">
            </div>


          </div> -->

          <div class="mt-2 ">
            <!-- <label class="block mb-2 text-sm font-medium text-gray-900 light:text-white">Due Date:</label> -->

            <div class="mt-2 ">

              <input-text :maxLength="10" label="Due Date:" placeholder="DD/MM/YYYY" @dataValue="setDueDate" />

            </div>
            <!-- <div class="relative max-w-sm">
              <div class="hidden">
                <div class="days">
                  <div
                    class="days-of-week grid grid-cols-7 mb-1 dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm">
                  </div>
                  <div
                    class="datepicker-grid w-64 grid grid-cols-7 block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 light:text-gray-400">
                  </div>
                </div>
                <div class="calendar-weeks">
                  <div class="days-of-week flex"><span
                      class="dow h-6 leading-6 text-sm font-medium text-gray-500 light:text-gray-400"></span></div>
                  <div
                    class="weeks week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm">
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 light:text-gray-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" forma datepicker theme="light" datepicker-title="Due Date" datepicker-autohide  datepicker-format="dd/mm/yyyy"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="Select date"  @="setDueDate"  maxlength="10" v-model="dueDate">
            </div> -->
          </div>


        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Issue</h2>
          <div class="mt-2 ">

            <input-text :maxLength="30" label="Invoice To:" placeholder="Name" @dataValue="setInvoiceTo" />

          </div>

          <div class="mt-2 ">
            <input-text :maxLength="15" inputType="tel" label="Phone:" placeholder="+1-12345-56789"
              @dataValue="setPhoneNumber" />
          </div>


          <div class="mt-2 ">
            <input-text :maxLength="30" inputType="email" label="Email:" placeholder="customer@email.com"
              @dataValue="setEmail" />
          </div>
          <div class="mt-2 ">
            <input-textarea label="Address:" placeholder="Address" @dataValue="setAddress" />
          </div>
        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Data</h2>
          <div class="mt-2 ">
            <input-text :maxLength="2" inputType="text" label="Commercial Tax(%):" :placeholder="commercialTax.toString()"
              @dataValue="setCommercialTax" />
          </div>
          <div class="mt-2 ">
            <input-text :maxLength="2" inputType="text" label="Discount(%):" :placeholder="discount.toString()"
              @dataValue="setDiscount" />
          </div>
          <div class="mt-2">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">Currency</label>
            <select id="currencies"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              @change="setCurrency">
              <option v-for="c in currency" :key="c.format" :value="c.currency">{{ c.currency }}</option>

            </select>
          </div>
          <button type="button"
            class="text-gray-900 mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 w-full focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ;light:bg-gray-800 ;light:text-white ;light:border-gray-600 ;light:hover:bg-gray-700 ;light:hover:border-gray-600 ;light:focus:ring-gray-700"
            @click="addNewData">Add New</button>
          <data-row :itemsData="itemsData" :count="count" @count="setCount" @dataValue="handleDataValue" />
          <!-- <div class="border-2 bg-white rounded-lg">
              <div class="relative flex-col flex p-2 relative justify-center ">
                <span class="absolute top-4 text-base text-lg">Title</span>
                <a class="hover:cursor-pointer hover:text-red-600 self-end text-xl p-2">
                  <fa-icon icon="fa-solid fa-multiply"></fa-icon>
                </a>
                <div class="mt-2 ">
                  <input-text type="text" label="Description" placeholder="" />
                </div>
                <div class="mt-2">
                  <input-text type="text" label="Quantity" placeholder="" />
                </div>
                <div class="mt-2">
                  <input-text type="text" label="Price" placeholder="" />
                </div>
                
              </div>
          </div> -->
        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Payment Information</h2>
          <div class="mt-2 ">
            <input-text inputType="text" :maxLength="30" label="Bank Name:" placeholder="Bank Name"
              @dataValue="setBankName" />
          </div>
          <div class="mt-2 ">
            <input-text inputType="text" :maxLength="30" label="Bank Account No:" placeholder="Bank Account"
              @dataValue="setBankAccountNumber" />
          </div>

        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold">Authorization</h2>

          <label class="block mt-5">
            <span class="sr-only">Signuature</span>
            <image-input @selected-image="signature" label="Upload Signature"></image-input>
          </label>
          <div class="mt-2 ">
            <div class="mt-2 ">
              <input-text inputType="text" :maxLength="30" label="Name" placeholder="Name"
                @dataValue="setAuthroizedName" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="w-full  bg-gray-50 h-[calc(100%-60px)] mt-[60px] flex items-center justify-center">
      <div class="w-full h-full  flex items-center justify-center">
        <div class="relative shadow-md  md:scale-75 lg:scale-100   w-[21cm] h-[27.9cm] bg-white p-[0.5in] "
          id="document_page" ref="invoiceContent">
          <div class="relative border-b-2  w-full h-[15%]">
            <div class="absolute top-5 left-5 w-[100px] h-[100px]">
              <image-preview :imgData="selectedLogo" />
              <!-- <img class="w-full h-full object-cover"  :src='selectedLogo ? selectedLogo : "https://via.placeholder.com/100x100/ccc.png"' /> -->


            </div>
            <div class="absolute top-5 right-5 w-auto max-h-full flex flex-col">

              <div class="text-2xl font-bold text-left">INVOICE</div>
              <div class="text-sm">
                No: {{ invoiceNumber }}
              </div>
              <div class="text-sm">
                Date: {{ invoiceDate }}
              </div>
              <div class="text-sm">
                Due: {{ dueDate }}
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


            <table class="w-full text-sm text-left text-gray-500 light:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 light:bg-gray-700 light:text-gray-400">
                <tr>
                  <th scope="col" class="px-2 py-2 text-left">
                    Description
                  </th>
                  <th scope="col" class="px-2 py-2 text-left">
                    Price
                  </th>
                  <th scope="col" class="px-2 py-2 text-center">
                    Qty
                  </th>
                  <th scope="col" class="px-2 py-2 text-left">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <table-row :itemsData="itemsData" :currency="currentCurrency" />

              </tbody>
              <tfoot>
                <tr class="font-semibold text-gray-900 light:text-white border-t-2">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Total:</td>
                  <td class="px-2 py-1 ">{{ changeCurrency(total, currentCurrency) }}</td>
                </tr>

                <tr class="font-semibold text-gray-900 light:text-white">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Subtotal:</td>
                  <td class="px-2 py-1">{{ changeCurrency(subtotal, currentCurrency) }}</td>
                </tr>
                <tr class="font-semibold text-gray-900 light:text-white">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right text-sm">Discount(%):</td>
                  <td class="px-2 py-1">{{ discount }}</td>
                </tr>
                <tr class="font-semibold text-gray-900 light:text-white">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right text-sm">Commercial Tax(%):</td>
                  <td class="px-2 py-1">{{ commercialTax }}</td>
                </tr>
              </tfoot>
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
import "flowbite/dist/datepicker";
import html2pdf from "html2pdf.js";
import moment from "moment"
import logoInvoicify from "../assets/invoicify.png";

export default {
  name: "HomeView",
 
  data() {
    return {
      invoiceNumber: `INV-${moment().format("YYYYMMYY")}-${Math.round(Math.random() * 4000)}`,
      invoiceTo: "Required",
      invoiceDate: moment().format("DD/MM/YYYY"),
      emailAddress: "Required",
      phoneNumber: "",
      address: "",
      bankName: "Required",
      bankAccount: "Required",
      authorziedName: "Required",
      selectedLogo: "https://via.placeholder.com/100x100/ccc.png",
      selectedSignature: "https://via.placeholder.com/100x100/ccc.png",
      navAction: null,
      brandLogo: logoInvoicify,
      navLinks: [

        {
          icon: "fa-solid fa-file-pdf",
          name: "PDF",
          link: "#",
          target: "_self",
          action: () => {
            var element = document.getElementById("document_page");
            var opt = {
              margin: 0,
              filename: `${Math.round(Math.random() * 100 * Date.now())}_invoicify.pdf`,
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };


            html2pdf().from(element).set(opt).save();

          },
        },
        // {
        //   icon: "fa-solid fa-file-word",
        //   name: "Word",
        //   link: "#",
        //   target: "_self",
        //   action: () => {

        //   }
        // },
        // {
        //   icon: "fa-brands fa-google-drive",
        //   name: "Google Drive",
        //   link: "#",
        //   target: "_self",
        //   action: null,
        // },
        {
          icon: "fa-brands fa-github",
          name: "Github",
          target: "_blank",
          link: "https://github.com/lolvoid/invoicify",
          action: null,
        }
      ],
      itemsData: [],
      count: -1,
      total: 0,
      subtotal: 0,
      commercialTax: 5,
      discount: 0,
      dueDate: moment().format("DD/MM/YYYY"),
      currentCurrency: {

        format: 'en-us',
        currency: 'USD',

      },
      currency: {
        'USD': {
          format: 'en-us',
          currency: 'USD',
        },
        'GBP': {
          format: 'en-GB',
          currency: 'GBP',
        },
        'EUR': {
          format: 'en-DE',
          currency: 'EUR',
        },
        'CNY': {
          format: 'en-CN',
          currency: 'CNY',
        },
        'SGD': {
          format: 'en-SG',
          currency: 'SGD',
        },
        'JPY': {
          format: 'en-JP',
          currency: 'JPY',
        },
        'THB': {
          format: 'en-TH',
          currency: 'THB',
        },
        'MMK': {
          format: 'en-MM',
          currency: 'MMK',
        },
        'INR': {
          format: 'en-IN',
          currency: 'INR',
        },

      }
    };
  },

  methods: {
    handleNavAction: function (e) {
      this.navAction = e;
    },
    changeCurrency: function (data, cur) {

      const c = new Intl.NumberFormat(cur.format, {
        style: "currency",
        currency: cur.currency
      });

      return c.format(data);
    },
    exportPDF() {

    },
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
    setDueDate(data) {

      this.dueDate = data;

    },
    setInvoiceTo(data) {
      this.invoiceTo = data;
    },
    setCommercialTax(data) {
      this.commercialTax = data;
      this.getSum();
    },
    setCurrency(data) {

      this.currentCurrency = this.currency[data.target.value];
    },
    setDiscount(data) {
      this.discount = data;
      this.getSum();
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
    },
    currencyFormat(data) {

    },

    addNewData(e) {
      e.preventDefault();
      if (this.count < 10) {
        this.itemsData.push({
          id: Math.round(Date.now()) + (this.itemsData.length + 1),
          title: `Item-${this.count}`,
          description: '',
          price: 0,
          qty: 0,
          amount: 0,
        })
        this.itemsData.sort((a, b) => a.title < b.title ? -1 : 1)
        localStorage.setItem('itemsData', JSON.stringify(this.itemsData));

        this.count = this.itemsData.length;
      }

    },
    getSum() {
      this.subtotal = 0;

      for (const i in this.itemsData) {
        this.subtotal += this.itemsData[i].amount;
      }
      const promo = (this.subtotal * this.discount / 100);
      const tax = (this.subtotal * this.commercialTax / 100);

      this.total = (this.subtotal + tax - promo);
    },
    setCount(data) {
      this.count = data;

      this.itemsData.sort();
    },
    handleDataValue(value, id, field) {

      const itemIndex = this.itemsData.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        this.itemsData[itemIndex][field] = value;
        this.itemsData[itemIndex]["amount"] = (this.itemsData[itemIndex]["price"]) * (this.itemsData[itemIndex]["quantity"] == null ? 1 : this.itemsData[itemIndex]["quantity"]);
        this.getSum();
      }
      // this.itemsData[id][field] = value;
    },
  }
}



</script>

<style scoped></style>