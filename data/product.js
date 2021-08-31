import account from './account';
import comment from './comment';


const product = {
    id: "product_id",
    title: "product_title",
    alias: "product_alias",
    avatar: "one_image",

    created_by: account.id,

    comments: [comment.id]
}