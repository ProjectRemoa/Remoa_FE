package Remoa.BE.Member.Domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Follow {

    @Id
    @GeneratedValue
    @Column(name = "follow_id")
    private Long followId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_member_id")
    private Member fromMember;

    @Column(name = "to_member_id")
    private Long toMemberId;

    public void setMember(Member member) {
        this.fromMember = member;
        member.getFollows().add(this);
    }

    public static Follow followSomeone(Member toMember, Member fromMember) {
        Follow follow = new Follow();
        follow.setFromMember(fromMember);
        follow.setToMemberId(toMember.getMemberId());

        return follow;
    }

}
