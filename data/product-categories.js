import productAttributes from "./product-attributes";

export const product_category = [
    // Thoi Trang Nu
    {
        id: "ttn-100",
        title: "Thời Trang Nữ",
        alias: "thoi-trang-nu",
        parent_id: null,
    },

    // Ao
    {
        id: "ttn-100-200",
        title: "Áo",
        alias: "ao",
        parent_id: "ttn-100",
    },
    {
        id: "ttn-100-200-300",
        title: "Áo hai dây và ba lỗ",
        alias: "ao-hai-day-va-ba-lo",
        parent_id: "ttn-100-200",

        // list attributes
        product_attribute: [ 
            productAttributes[0].id, 
            productAttributes[1].id,
            productAttributes[2].id,
            productAttributes[3].id,
            productAttributes[4].id,
            productAttributes[5].id,
            productAttributes[6].id,
            productAttributes[7].id,
            productAttributes[8].id,
            productAttributes[9].id,
        ]
    },
    {
        id: "ttn-100-200-301",
        title: "Áo ống",
        alias: "ao-ong",
        parent_id: "ttn-100-200",

        // list attributes
        product_attribute: [ 
            productAttributes[0].id, 
            productAttributes[1].id,
            productAttributes[2].id,
            productAttributes[3].id,
            productAttributes[4].id,
            productAttributes[5].id,
            productAttributes[6].id,
            productAttributes[7].id,
            productAttributes[8].id,
            productAttributes[9].id,
        ]
    },
    {
        id: "ttn-100-200-302",
        title: "Áo thun",
        alias: "ao-thun",
        parent_id: "ttn-100-200",

        // list attributes
        product_attribute: [ 
            productAttributes[0].id, 
            productAttributes[1].id,
            productAttributes[10].id,
            productAttributes[2].id,
            productAttributes[3].id,

            productAttributes[5].id,
            productAttributes[6].id,
            productAttributes[11].id,
            productAttributes[7].id,
            productAttributes[4].id,
        ]
    },
    {
        id: "ttn-100-200-303",
        title: "Áo sơ mi",
        alias: "ao-so-mi",
        parent_id: "ttn-100-200",

        // list attributes
        product_attribute: [ 
            productAttributes[0].id, 
            productAttributes[1].id,
            productAttributes[10].id,
            productAttributes[2].id,
            productAttributes[3].id,

            productAttributes[5].id,
            productAttributes[6].id,
            productAttributes[11].id,
            productAttributes[7].id,
            productAttributes[12].id,
        ]
    },
    {
        id: "ttn-100-200-304",
        title: "Áo polo",
        alias: "ao-polo",
        parent_id: "ttn-100-200",

        // list attributes
        product_attribute: [ 
            productAttributes[0].id, 
            productAttributes[1].id,
            productAttributes[3].id,
            productAttributes[12].id,
            productAttributes[11].id,

            productAttributes[5].id,
            productAttributes[2].id,
            productAttributes[3].id,
            productAttributes[8].id,
            productAttributes[9].id,
        ]
    },

    // Quan
    {
        id: "ttn-100-201",
        title: "Quần",
        alias: "quan",
        parent_id: "ttn-100",
    },
]