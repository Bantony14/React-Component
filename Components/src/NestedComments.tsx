interface CommentData {
  id: number;
  text: string;
  replies: CommentData[];
}

interface CommentProps {
  comment: CommentData;
}

export default function NestedComment() {
  const comment: CommentData = {
    id: 1,
    text: "Main Comment",
    replies: [
      {
        id: 2,
        text: "First Reply",
        replies: [
          {
            id: 3,
            text: "Nested Reply",
            replies: [],
          },
        ],
      },
    ],
  };

  return <Comment comment={comment} />;
}

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <p>{comment.text}</p>

      {comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} />
      ))}
    </div>
  );
}
