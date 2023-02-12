package Remoa.BE.Member.Domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CommentBookmark {

    @Id
    @GeneratedValue
    @Column(name = "comment_bookmark_id")
    private Long commentBookmarkId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comment_id")
    private Comment comment;

    public static CommentBookmark createCommentBookmark(Member member, Comment comment) {
        CommentBookmark commentBookmark = new CommentBookmark();
        commentBookmark.setComment(comment);
        commentBookmark.setMember(member);

        return commentBookmark;
    }
}
