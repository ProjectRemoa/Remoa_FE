package Remoa.BE.Post.Service;

import Remoa.BE.Member.Domain.Comment;
import Remoa.BE.Member.Domain.CommentBookmark;
import Remoa.BE.Member.Domain.CommentLike;
import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Post.Domain.Post;
import Remoa.BE.Post.Repository.CommentRepository;
import Remoa.BE.Post.Repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public Long writeComment(Comment comment) {
        commentRepository.saveComment(comment);
        return comment.getCommentId();
    }

    public List<Comment> loadCommentsByPostId(Long postId) {
        Post post = postRepository.findByPostId(postId);
        return commentRepository.findByPost(post);
    }

    public Long commentLikeAction(Comment comment, Member member) {
        CommentLike commentLike = CommentLike.createCommentLike(member, comment);
        commentRepository.saveCommentLike(commentLike);
        return commentLike.getCommentLikeId();
    }

    public Long commentBookmarkAction(Comment comment, Member member) {
        CommentBookmark commentBookmark = CommentBookmark.createCommentBookmark(member, comment);
        commentRepository.saveCommentBookmark(commentBookmark);
        return commentBookmark.getCommentBookmarkId();
    }
}
