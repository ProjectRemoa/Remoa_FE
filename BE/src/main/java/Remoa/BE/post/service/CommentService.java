package Remoa.BE.post.service;

import Remoa.BE.member.domain.Comment;
import Remoa.BE.member.domain.CommentBookmark;
import Remoa.BE.member.domain.CommentLike;
import Remoa.BE.member.domain.Member;
import Remoa.BE.post.domain.Post;
import Remoa.BE.post.repository.CommentRepository;
import Remoa.BE.post.repository.PostRepository;
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
