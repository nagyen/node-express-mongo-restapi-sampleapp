db.products.insert({
    name:"Microsoft Surface",
    category:"Electronics",
    model:"111-micro",
    sku:"qwe123",
    img:"http://test.com/img.png",
    price:400,
    pickup_available: true,
    description:"tjbzjhxbcjhksdbjkxbjhszbxkjvkskjakjsnkjnzksncjzKNc,scxbjhzshdfxicjknsdzjxij",
    release_date: ISODate("2015-09-12"),
    specifications:{
        height: "7.36 inches",
        weight: "4562 ounces",
        width: "12 inches",
        battery_life:"10 hours",
        display_type: "lcd",
        touch_screen: true,
        memory: "2gb",
        processor_type: "intel"
    },
    reviews:[
    {
        subject: "great tab!",
        body: "jahsdnjnudfnvjnchuvbsdkjfnvjsdnf",
        rating: 4.5,
        user:"user 1",
        date: ISODate("2015-12-23"),
        would_recommend: true
    },
    {
        subject: "bad tab!",
        body: "jahsdnjnudfnvjnchuvbsdkjfnvjsdnf",
        rating: 2,
        user:"user 2",
        date: ISODate("2015-12-25"),
        would_recommend: false
    },
    {
        subject: "avg tab!",
        body: "jahsdnjnudfnvjnchuvbsdkjfnvjsdnf",
        rating: 3,
        user:"user 3",
        date: ISODate("2015-12-21"),
        would_recommend: true
    }
    ],
    protection_services:['damage', 'battery', 'screen']
})

db.products.insert({
    name:"samsung s7",
    category:"Electronics",
    model:"111-samsung",
    sku:"xcv345",
    img:"http://test.com/img2.png",
    price:800,
    pickup_available: false,
    description:"njkdsncvjndkcvndufhgoisjdiudaklsncjzdilxkcksdhvkd,scxbjhzshdfxicjknsdzjxij",
    release_date: ISODate("2015-12-12"),
    specifications:{
        height: "4.36 inches",
        weight: "456 ounces",
        width: "5 inches",
        battery_life:"24 hours",
        display_type: "amoled",
        touch_screen: true,
        memory: "32gb",
        processor_type: "samsung",
        no_contract: false,
        lte:true,
        wireless_technology:"dual band"
    },
    reviews:[
    {
        subject: "great tab!",
        body: "jahsdnjnudfnvjnchuvbsdkjfnvjsdnf",
        rating: 4.5,
        user:"user 1",
        date: ISODate("2015-12-23"),
        would_recommend: true
    },
    {
        subject: "bad tab!",
        body: "jahsdnjnudfnvjnchuvbsdkjfnvjsdnf",
        rating: 2,
        user:"user 2",
        date: ISODate("2015-12-25"),
        would_recommend: false
    },
    {
        subject: "avg tab!",
        body: "jahsdnjnudfnvjnchuvbsdkjfnvjsdnf",
        rating: 3,
        user:"user 3",
        date: ISODate("2015-12-21"),
        would_recommend: true
    }
    ],
    protection_services:['damage', 'battery', 'screen']
})