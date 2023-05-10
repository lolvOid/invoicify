<template>
  <div
    class="absolute top-0 w-screen  h-[60px] bg-gray-900 z-20 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">

    <div class="flex items-center ">
      <a href="/" class="flex text-xl hover:text-orange-500  hover:cursor-pointer">
        <img class="h-8 w-auto mr-2" :src='brandLogo' />
        <h2 class="font-bold">INVOICIFY</h2>
      </a>
    </div>

    <ul
      class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb:10 md:static fixed md:text-gray-100 dark:text-gray-50 bottom-0  right-0 duration-75 ease-in text-3xl text-gray-800 ">
      <li class="md:mx-4 md:my-0 my-6" v-for="navLink in navLinks" :key="navLink.name">
        <a :href="navLink.link" :aria-label="navLink.link" class="hover:text-orange-500" @click="navLink.action"
          :target="navLink.target">

          <fa-icon :icon=navLink.icon></fa-icon>
        </a>
      </li>
    </ul>
  </div>

  <div class="relative dark:bg-slate-900 bg-slate-50  text-gray-900 w-screen flex h-full ">

    <div class="w-full  lg:w-[40%] xl:w[40%] h-[calc(100%-60px)] mt-[60px] p-4 ">
      <form class="bg-white   shadow-xl w-full h-full rounded-xl p-4 overflow-y-auto over bg-slate-50 dark:bg-slate-800">


        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold dark:text-white text-black">Logo</h2>


          <label class="block mt-5">

            <image-input @selected-image="logo" label="Upload Company Logo (1:1)"></image-input>

          </label>
        </div>
        <div class="w-full p-4 border-b-2 ">

          <h2 class="text-lg font-semibold mb-2 dark:text-white text-black">Header</h2>
          <div>

            <input-text :maxLength="15" label="Invoice No:" placeholder="1111-111-11" @dataValue="setInvoiceNumber" />
          </div>


          <div class="mt-2 ">

            <div class="mt-2 ">

              <input-text :maxLength="10" label="Due Date:" placeholder="DD/MM/YYYY" @dataValue="setDueDate" />

            </div>

          </div>


        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold dark:text-white text-black">Issue</h2>
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
            <input-textarea label="Address:" placeholder="Address" @dataValue="setAddress" :maxlength="50" />
          </div>
        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold dark:text-white text-black">Data</h2>
          <div class="mt-2 ">
            <input-text :maxLength="2" inputType="text" label="Commercial Tax(%):" :placeholder="commercialTax.toString()"
              @dataValue="setCommercialTax" />
          </div>
          <div class="mt-2 ">
            <input-text :maxLength="4" inputType="text" label="Discount(%):" :placeholder="discount.toString()"
              @dataValue="setDiscount" />
          </div>
          <div class="mt-2 ">
            <input-text :maxLength="16" inputType="text" label="Paid:" :placeholder="paid.toString()"
              @dataValue="setPaidAmount" />
          </div>
          <div class="mt-2 ">
            <input-text :maxLength="16" inputType="text" label="Advanced Payment:"
              :placeholder="advancedPayment.toString()" @dataValue="setAdvancePayment" />
          </div>
          <div class="mt-2 ">
            <input-textarea label="Note:" placeholder="Note" @dataValue="setNote"  :maxlength="200"/>
          </div>
          <div class="mt-2">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
            <select id="currencies"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @change="setCurrency">
              <option v-for="c in currency" :key="c.format" :value="c.currency">{{ c.currency }}</option>

            </select>
          </div>
          <button type="button"
            class="text-gray-900 mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 w-full focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ;dark:bg-gray-800 ;dark:text-white ;dark:border-gray-600 ;dark:hover:bg-gray-700 ;dark:hover:border-gray-600 ;dark:focus:ring-gray-700"
            @click="addNewData">Add New</button>
          <data-row :itemsData="itemsData" :count="count" @count="setCount" @dataValue="handleDataValue" />

        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold dark:text-white text-black">Payment Information</h2>
          <button type="button"
            class="text-gray-900 mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 w-full focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ;dark:bg-gray-800 ;dark:text-white ;dark:border-gray-600 ;dark:hover:bg-gray-700 ;dark:hover:border-gray-600 ;dark:focus:ring-gray-700"
            @click="addNewPayment">Add Payment Information</button>
          <data-payment :paymentData="paymentData" :count="paymentCount" @count="setPaymentCount"
            @dataValue="handlePaymentValue" />


        </div>
        <div class="w-full p-4 border-b-2">

          <h2 class="text-lg font-semibold dark:text-white text-black">Authorization</h2>

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

    <div
      class="w-full  bg-gray-50 dark:bg-slate-800 h-[calc(100%-60px)] mt-[60px]  hidden lg:flex items-center justify-center">
      <div class="relative w-full h-full  flex items-center justify-center">
        <div class="relative shadow-md   max-w-full max-h-full  lg:w-[21cm] lg:h-[27.9cm] bg-white p-[0.5in] "
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
                Address: <span class="break-all text-sm whitespace-pre-line"> {{ address }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center h-auto mt-7">


            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
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
                <tr class="font-semibold text-gray-900 border-t-2">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Subtotal:</td>
                  <td class="px-2 py-1 ">{{ changeCurrency(subtotal, currentCurrency) }}</td>
                </tr>
                <tr class="font-semibold text-gray-900">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right text-sm">Discount(%):</td>
                  <td class="px-2 py-1">{{ discount }}</td>
                </tr>
                <tr class="font-semibold text-gray-900">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right text-sm">Commercial Tax(%):</td>
                  <td class="px-2 py-1">{{ commercialTax }}</td>
                </tr>
                <tr class="font-semibold text-gray-900">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Total:</td>
                  <td class="px-2 py-1">{{ changeCurrency(total, currentCurrency) }}</td>
                </tr>
                <tr class="font-semibold text-gray-900">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Advance Amount:</td>
                  <td class="px-2 py-1 ">{{ changeCurrency(advancedPayment, currentCurrency) }}</td>
                </tr>
                <tr class="font-semibold text-gray-900">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Paid:</td>
                  <td class="px-2 py-1">{{ changeCurrency(paid, currentCurrency) }}</td>
                </tr>
                <tr class="font-semibold text-gray-900">
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <th scope="row" class="px-2 py-1 text-sm"></th>
                  <td class="px-2 py-1 text-right">Total Due:</td>
                  <td class="px-2 py-1">{{ changeCurrency(totalDue, currentCurrency) }}</td>
                </tr>

              </tfoot>
            </table>

          </div>

          <div class="absolute bottom-0 left-0 w-full  p-[0.5in] pt-0">
              <div class="w-5/12 mb-1">
                <div class="font-bold text-base">Notes:</div>
                <div class="break-all text-sm whitespace-pre-line">{{ textNote }}</div>
              
              </div>
            <div class="flex  h-full w-full justify-between">

              <div class="flex flex-col items-start ">
                <div class="font-bold text-base">Payment Information</div>
                <payment-row :items-data=paymentData />
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

  </div>
</template>
<script>
import "flowbite/dist/datepicker";
import html2pdf from "html2pdf.js";
import moment from "moment"
import logoInvoicify from "../assets/invoicify.png";
import { event } from 'vue-gtag'
import PaymentRow from "./PaymentRow.vue";
import ImageFileInput from "./ImageFileInput.vue";
import ImagePreviewVue from "./ImagePreview.vue";
import InputTextField from "./InputTextField.vue";
import InputTextArea from "./InputTextArea.vue";
import TableRow from "./TableRow.vue";
import DataRow from "./DataRow.vue";
import DataPayment from "./DataPayment.vue";

export default {
  name: "HomeView",
  components: {
    "payment-row": PaymentRow,
    "table-row": TableRow,
    "data-payment": DataPayment,
    "data-row": DataRow,
    "input-text": InputTextField,
    "input-textarea": InputTextArea,
    "image-input": ImageFileInput,
    "image-preview": ImagePreviewVue,

  },
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
      advancedPayment: 0,
      paid: 0,
      navLinks: [

        {
          icon: "fa-solid fa-file-pdf",
          name: "PDF",
          link: "javascript:void(0)",
          target: "_self",
          action: () => {
            var element = document.getElementById("document_page");
            const div = document.createElement("div");

            div.style.width = "21cm";
            div.style.height = "27.9cm";
            div.style.position = "relative";

            div.style.padding = "0.5in";
            div.style.margin = "0";
            const cloned = element.cloneNode(true);
            div.innerHTML += element.innerHTML;
            var opt = {
              margin: 0,
              filename: `${Math.round(Math.random() * 100 * Date.now())}_invoicify.pdf`,
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };



            html2pdf().from(div).set(opt).save();

            event('exportPDF', { method: 'Google' })


          },
        },

        {
          icon: "fa-solid fa-moon",
          name: "Dark/Light",
          link: "javascript:void(0)",
          target: "_self",
          action: () => {
            const html = document.getElementsByTagName("html")[0];

            html.classList.contains("light") ? html.classList.replace("light", "dark") : html.classList.replace("dark", "light");

          },
        },
        {
          icon: "fa-brands fa-github",
          name: "Github",
          target: "_self",
          link: "javascript:void(0)",
          action: () => {
            event('Go to Github', { method: 'Google' })
            window.open("https://github.com/lolvoid/invoicify", "_blank");
          },
        }
      ],
      itemsData: [],
      paymentData: [],
      paymentCount: -1,
      count: -1,
      total: 0,
      totalDue: 0,
      subtotal: 0,
      commercialTax: 5,
      discount: 0,
      dueDate: moment().format("DD/MM/YYYY"),
      currentCurrency: {

        format: 'en-us',
        currency: 'USD',

      },
      textNote:"",
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
    setNote(data){
      this.textNote = data;
    },
    setInvoiceTo(data) {
      this.invoiceTo = data;
    },
    setCommercialTax(data) {
      this.commercialTax = data;
      this.getSum();
    },
    setAdvancePayment(data) {
      this.advancedPayment = data;
      this.getSum();
    },
    setPaidAmount(data) {
      this.paid = data;
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
    addNewPayment(e) {
      e.preventDefault();
      if (this.paymentCount < 10) {
        this.paymentData.push({
          id: Math.round(Date.now()) + (this.paymentData.length + 1),
          title: `Title`,
          description: 'Description',

        })
        this.paymentData.sort((a, b) => a.title < b.title ? -1 : 1)
        localStorage.setItem('paymentData', JSON.stringify(this.paymentData));

        this.paymentCount = this.paymentData.length;
      }
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
        this.getSum();
      }

    },
    getSum() {
      this.subtotal = 0;
      this.totalDue = 0;
      for (const i in this.itemsData) {
        this.subtotal += this.itemsData[i].amount;
      }
      const promo = (this.subtotal * this.discount / 100);
      const tax = (this.subtotal * this.commercialTax / 100);

      this.total = (this.subtotal + tax - promo);
      this.totalDue = this.total - this.paid;
    },
    setPaymentCount(data) {
      this.paymentCount = data;
      this.paymentData.sort();
    },
    setCount(data) {
      this.count = data;

      this.itemsData.sort();
    },
    handlePaymentValue(value, id, field) {
      const itemIndex = this.paymentData.findIndex(item => item.id === id);
      if (itemIndex >= 0) {

        this.paymentData[itemIndex][field] = value;


      }
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