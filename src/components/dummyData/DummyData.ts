interface Prod{

    find(arg0: (p: any) => boolean):any;
    _id?:string;
    name?:string;
    description?:string;
    image?:string;
    price?:number;
    countInStock?:number;
    rating?:number;
    numReviews?:number;
}

export const products:Prod=[

    {
        _id: "1",
        name: "Velcro Ballerinas For Girls  (Pink)",
        image: "/images/6.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
      },
      {
        _id: "2",
        name: "Velcro Sneakers For Boys & Girls  (Blue)",
        image: "/images/5.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 599,
        countInStock: 10,
        rating: 2,
        numReviews: 2,
      },
      {
        _id: "3",
        name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
        image: "/images/4.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 929,
        countInStock: 0,
        rating: 3.5,
        numReviews: 3,
      },
      {
        _id: "4",
        name: "Lace Casual Boots For Boys & Girls  (Tan)",
        image: "/images/3.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 399,
        countInStock: 10,
        rating: 5,
        numReviews: 9,
      },
      {
        _id: "5",
        name: "Lace Walking Shoes For Boys & Girls  (Pink)",
        image: "/images/2.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 49,
        countInStock: 7,
        rating: 2,
        numReviews: 2,
      },
      {
        _id: "6",
        name: "Women Red Heels Sandal",
        image: "/images/1.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 29,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
      },
]