const Data=[
    {
        id:1,
product_name:"tumeric",
quantity:{
    "50gms":"50rs",
    "100gms":"100rs",
    "200gms":"200rs",
    "500gms":"500rs"
},
image:'data:image/jpeg;base64,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'
    },
    {
        id:2,
        product_name:"chilli powder",
        quantity:{
            "50gms":"50rs",
            "100gms":"100rs",
            "200gms":"200rs",
            "500gms":"500rs"
        },
        image:"data:image/jpeg;base64,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"

    },
    {
        id:3,
        product_name: "corindor powder",
        quantity:{
            "50gms":"50rs",
            "100gms":"100rs",
            "200gms":"200rs",
            "500gms":"500rs"
        },
        image:"data:image/jpeg;base64,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"
    }
]

export default Data