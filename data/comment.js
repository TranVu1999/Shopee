import account from './account';
import classifyCommentReport from './classify_report_comment';

const comment = {
    id: "cmt_id",
    author: account.id,
    rating: 0,
    content: "lorem...",
    created_date: "10-01-1999",
    number_assist: 0,
    images: ["image-link"],

    replay_comments: [
        {
            id: "replay_comment_id",
            content: "content comment",
            author: account.id
        }
    ],

    
    reports: [
        {
            id: "reported_id",
            author: "account_id",
            classify_report_comment_id: classifyCommentReport.id,
            created_date: "10-01-1999"
        }
    ]
}

export default comment;