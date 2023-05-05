export default  {
    font: "",
    backgroundColor: "#fff",
    accentColor: "#000",
  
    logo: {
      src: "https://via.placeholder.com/100x100/ccc.png",
      width: "100",
      heigth: "100",
    },
    invoice_no_auto:false,
    invoice_no: 22222,
    invoice_date: `${new Date(Date.now()).getDay}/${
      new Date(Date.now()).getMonth
    }/${new Date(Date.now()).getFullYear}`,
    due_date: "",
  
    invoice_to: "Name",
    phone: "+001234567890",
    email: "customer@placeholder.com",
    address: "Address",
  
    currency: "usd",
    data: [
      {
        id: 1,
        descrption:
          "Anim ea voluptate nulla proident officia sit minim in eu deserunt in ea aliquip esse.",
        price: 200,
        qty: 1,
        amount: 200,
      },
    ],
    total: 2000,
    subtotal: 100,
    tax: 0.05,
    authorized_name: "MyName",
    payments: [
      {
        bank_name: "Bank",
        account_no: "1222332432434",
      },
    ],
    sign: {
      src: "https://via.placeholder.com/100x100/ccc.png",
      width: "100",
      heigth: "100",
    },
  };
  