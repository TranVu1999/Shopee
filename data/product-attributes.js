import productCategory from './product-categories';

export default product_attributes = [
    // Thuong hieu
    {
        id: "prod-attr-100",
        label: "Thương hiệu",
        required: true,
        type_value: "single-selections",
        other_value: true,
        options: [
            {
                title: "AAA JEANS",
            },
            {
                title: "ABC",
            },
            {
                title: "ADORE DRESS",
            },
            {
                title: "ALRism",
            }
        ]
    },

    // Chat lieu
    {
        id: "prod-attr-101",
        label: "Chất liệu",
        required: true,
        type_value: "multi-selections",
        max_selections: 5,
        other_value: true,
        options: [
            {
                title: "voan",
            },
            {
                title: "chinos",
            },
            {
                title: "Denim",
            },
            {
                title: "Lông vũ",
            }
        ]
    },

    // Petite
    {
        id: "prod-attr-102",
        label: "Petite",
        required: true,
        type_value: "yes/no-selection",
    },

    // Mua
    {
        id: "prod-attr-103",
        label: "Mùa",
        required: true,
        type_value: "single-selection",
        other_value: true,
        options: [
            {
                title: "Mùa đông",
            },
            {
                title: "Mùa hè",
            },
            {
                title: "Mùa xuân",
            },
            {
                title: "Mùa thu",
            }
        ]
    },

    // Chieu dai ao
    {
        id: "prod-attr-104",
        label: "Chiều dài áo",
        required: true,
        type_value: "single-selection",
        options: [
            {
                title: "Dài",
            },
            {
                title: "Đều đặn",
            }
        ]
    },

    // Xuat Xu
    {
        id: "prod-attr-105",
        label: "Xuất xứ",
        required: true,
        other_value: true,
        type_value: "single-selection",
        options: [
            {
                title: "Băng-la-đét",
            },
            {
                title: "Trung Quốc",
            }
        ]
    },

    // Cropped Top
    {
        id: "prod-attr-106",
        label: "Cropped Top",
        required: true,
        type_value: "yes/no-selection",
    },

    // Mau
    {
        id: "prod-attr-107",
        label: "Mẫu",
        required: true,
        other_value: true,
        type_value: "multi-selection",
        max_selections: 5,
        options: [
            {
                title: "Họa tiết"
            },
            {
                title: "Sọc caro"
            }
        ]
    },

    // Phong cach
    {
        id: "prod-attr-108",
        label: "Phong cách",
        required: true,
        other_value: true,
        type_value: "multi-selection",
        max_selections: 5,
        options: [
            {
                title: "Thể thao"
            }
        ]
    },

    // Rat lon
    {
        id: "prod-attr-109",
        label: "Rất lớn",
        required: true,
        type_value: "yes/no-selection",
    },

    // Co ao
    {
        id: "prod-attr-110",
        label: "Cổ áo",
        required: true,
        other_value: true,
        type_value: "single-selection",
        options: [
            {
                title: "không đối xứng"
            }
        ]
    },

    // Dip
    {
        id: "prod-attr-111",
        label: "Dịp",
        required: true,
        other_value: true,
        type_value: "single-selection",
        options: [
            {
                title: "Hằng Ngày"
            },
            {
                title: "Công việc"
            }
        ]
    },

    // Chieu dai tay ao
    {
        id: "prod-attr-112",
        label: "Chiều dài tay áo",
        required: true,
        other_value: true,
        type_value: "single-selection",
        options: [
            {
                title: "Dài 3/4"
            }
        ]
    },
]