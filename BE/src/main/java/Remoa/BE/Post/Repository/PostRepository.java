package Remoa.BE.Post.Repository;

import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Post.Domain.Category;
import Remoa.BE.Post.Domain.Post;
import Remoa.BE.Post.Domain.PostLike;
import Remoa.BE.Post.Domain.PostScarp;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Slf4j
@Repository
@RequiredArgsConstructor
public class PostRepository {

    private final EntityManager em;

    public void savePost(Post post) {
        em.persist(post);
    }

    public Post findByPostId(Long postId) {
        return em.find(Post.class, postId);
    }

    public Optional<Post> findByMemberId(Member member) {
        return em.createQuery("select p from Post p where p.member = :member", Post.class)
                .setParameter("member", member)
                .getResultStream()
                .findAny();
    }

    public void savePostScrap(PostScarp postScarp) {
        em.persist(postScarp);
    }

    public Post findScrapedPost(Member member) {
        return em.createQuery("select ps from PostScarp ps where ps.member = :member", PostScarp.class)
                .setParameter("member", member)
                .getResultStream()
                .findAny()
                .get()
                .getPost();
    }

    public Post findLikedPost(Member member) {
        return em.createQuery("select pl from PostLike pl where pl.member = :member", PostLike.class)
                .setParameter("member", member)
                .getResultStream()
                .findAny()
                .get()
                .getPost();
    }

    public List<Post> findPostsByCategory(Category category) {
        return em.createQuery("select p from Post p where p.category = :category", Post.class)
                .setParameter("category", category)
                .getResultList();
    }

}
