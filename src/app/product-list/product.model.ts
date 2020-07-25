export class ProductModel{

    constructor(
        public _id: String,
        public productId: Number,
        public name: String,
        public code: String,
        public releaseDate: string,
        public description: String,
        public price: Number,
        public rating: Number,
        public imageUrl: string
    ){}
}