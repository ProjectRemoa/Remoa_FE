package Remoa.BE.Member.Domain;

import Remoa.BE.Post.Domain.Category;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberCategory {

    @Id
    @GeneratedValue
    @Column(name = "member_category_id")
    private Long memberCategoryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    public static MemberCategory createMemberCategory(Member member, Category category) {
        MemberCategory memberCategory = new MemberCategory();
        memberCategory.setMember(member);
        memberCategory.setCategory(category);

        return memberCategory;
    }

}
