package Remoa.BE.Post.Domain;

import Remoa.BE.Member.Domain.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostScarp {

    @Id
    @GeneratedValue
    @Column(name = "post_scrap_id")
    private Long postScrapId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    public static PostScarp createPostScrap(Member member, Post post) {
        PostScarp postScrap = new PostScarp();
        postScrap.setPost(post);
        postScrap.setMember(member);

        return postScrap;
    }
}
