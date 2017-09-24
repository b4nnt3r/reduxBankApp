const userList = () => {
  return [
     {
        _id: "597f7521f2dbcd7664363339",
        name: "Brandon Walden",
        email: "brandonshanewalden@gmail.com",
        phone: "(774)283-1992",
        address: "47 Lake Jackson Dr. Mascotte, FL 34753",
        accounts: [
           {
              id: 0,
              accountType: "checking",
              balance: 1000000.00
           },
           {
              id: 2,
              accountType: "credit",
              balance: 2000.00
           }
        ]
     },
     {
        _id: "597f752152b81f549f6e7448",
        name: "Mark Walden",
        email: "markewalden@mac.com",
        phone: "(407)555-6080",
        address: "47 Lake Jackson Dr. Mascotte, FL 34753",
        accounts: [
           {
              id: 0,
              accountType: "checking",
              balance: 500000.00
           },
           {
              id: 1,
              accountType: "savings",
              balance: 2000000.00
           },
           {
              id: 2,
              accountType: "credit",
              balance: 100000.00
           }
        ]
     },
     {
        _id: "597f7521d0a7a70da9c27922",
        name: "Theresa Walden",
        email: "theresamwalden@mac.com",
        phone: "(508)555-3561",
        address: "26 Wenham Rd. Carver, MA 02330",
        accounts: [
           {
              id: 0,
              accountType: "checking",
              balance: 5000000.00
           },
           {
              id: 1,
              accountType: "savings",
              balance: 10000000.00
           },
           {
              id: 2,
              accountType: "credit",
              balance: 100000.00
           }
        ]
     },
     {
        _id: "597f7521a043e7b3242b2448",
        name: "Brianna Walden",
        email: "briannawalden@mac.com",
        phone: "(508)555-6619",
        address: "26 Wenham Rd. Carver, MA 02330",
        accounts: [
           {
              id: 0,
              accountType: "checking",
              balance: 50000.00
           },
           {
              id: 1,
              accountType: "savings",
              balance: 20000.00
           }
        ]
     },
  ];
}

export default userList;
