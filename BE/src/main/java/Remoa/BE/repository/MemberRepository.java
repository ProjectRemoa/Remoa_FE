package Remoa.BE.repository;

import Remoa.BE.domain.Member;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
public class MemberRepository {
    public final EntityManager em;

    public void save(Member member) {
        this.em.persist(member);
    }

    public Member findOne(Long id) {
        return (Member)this.em.find(Member.class, id);
    }

    public List<Member> findAll() {
        return this.em.createQuery("select m from Member m", Member.class).getResultList();
    }

    public List<Member> findByEmail(String email) {
        return this.em.createQuery("select m from Member m where m.email = :email", Member.class).setParameter("email", email).getResultList();
    }

    public Optional<Member> findByKakaoId(Long kakaoId) {
        return this.em.createQuery("select k from Member k where k.kakaoId = :kakaoId", Member.class).setParameter("kakaoId", kakaoId).getResultStream().findAny();
    }

    public MemberRepository(final EntityManager em) {
        this.em = em;
    }
}
