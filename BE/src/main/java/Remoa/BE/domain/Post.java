package Remoa.BE.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Post {

    @Id
    @GeneratedValue
    @Column(name = "post_id")
    private Long postId;

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

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private Category category;

    //파일 관련 컬럼 추가 예정
}
