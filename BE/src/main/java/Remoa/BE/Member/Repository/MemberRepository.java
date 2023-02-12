package Remoa.BE.Member.Repository;

import Remoa.BE.Member.Domain.Follow;
import Remoa.BE.Member.Domain.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@Slf4j
@RequiredArgsConstructor
public class MemberRepository {
    public final EntityManager em;

    public void save(Member member) {
        this.em.persist(member);
    }

    public Member findOne(Long id) {
        return em.find(Member.class, id);
    }

    public List<Member> findAll() {
        return this.em.createQuery("select m from Member m", Member.class).getResultList();
    }

    public List<Member> findByEmail(String email) {
        return em.createQuery("select m from Member m where m.email = :email", Member.class)
                .setParameter("email", email)
                .getResultList();
    }

    public List<Member> findByNickname(String nickname) {
        return em.createQuery("select m from Member m where m.nickname = :nickname", Member.class)
                .setParameter("nickname", nickname)
                .getResultList();
    }

    public Optional<Member> findByKakaoId(Long kakaoId) {
        return this.em.createQuery("select k from Member k where k.kakaoId = :kakaoId", Member.class)
                .setParameter("kakaoId", kakaoId)
                .getResultStream()
                .findAny();
    }

    public void follow(Follow follow) {
        em.persist(follow);
    }

    /**
     * 팔로우 여부를 두 멤버 객체를 받아와서 db에 검색 후 List로 받아서 List에 값이 있으면 팔로우가 되어있는 상태, 없으면 팔로우 되어있지 않은 상태.
     * 팔로우/언팔로우 기능 전에 이 메서드를 통해 이후 동작을 정할 수 있다.
     * @param fromMember
     * @param toMember
     * @return 팔로우 되어있지 않음 : false, 팔로우 되어있음 : true
     */
    public Boolean isFollow(Member fromMember, Member toMember) {
        return !em.createQuery("select f from Follow f " +
                        "where f.fromMember = :fromMember and f.toMemberId = :toMemberId", Follow.class)
                .setParameter("fromMember", fromMember)
                .setParameter("toMemberId", toMember.getMemberId())
                .getResultList()
                .isEmpty();
    }

}
