package Remoa.BE.Post.Domain;

import Remoa.BE.Member.Domain.Comment;
import Remoa.BE.Member.Domain.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
public class Post {

    @Id
    @GeneratedValue
    @Column(name = "post_id")
    private Long postId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private String title;

    @Column(name = "contest_name")
    private String contestName;

    private String deadline;

    @Column(name = "contest_award")
    private Boolean ContestAward;

    @Column(name = "contest_aware_type")
    private String contestAwareType;

    @Column(name = "like_count")
    private Integer likeCount;

    @Column(name = "posting_time")
    private String postingTime;

    private Integer views;

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "post")
    private List<UploadFile> uploadFiles = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<PostScarp> postScarps = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<PostLike> postLikes = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private Category category;
}
