package Remoa.BE.Post.Repository;

import Remoa.BE.Post.Domain.Category;
import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Member.Domain.MemberCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CategoryRepository {

    private final EntityManager em;

    public void saveCategory(Category category) {
        em.persist(category);
    }

    public List<Category> findAllCategories() {
        return em.createQuery("select c from Category c", Category.class)
                .getResultList();
    }

    public Category findByCategoryName(String categoryName) {
        Optional<Category> category = em.createQuery("select c from Category c " +
                        "where c.name = :categoryName", Category.class)
                .setParameter("categoryName", categoryName)
                .getResultStream()
                .findAny();

        if (category.isPresent()) {
            return category.get();
        } else {
            throw new RuntimeException("해당 카테고리는 존재하지 않습니다.");
        }
    }

    public List<Category> findOnesCategories(Member member) {
        List<MemberCategory> memberCategories = em.createQuery("select mc from MemberCategory mc " +
                        "where mc.member = :member", MemberCategory.class)
                .setParameter("member", member)
                .getResultList();

        List<Category> categories = new ArrayList<>();
        for (MemberCategory memberCategory : memberCategories) {
            categories.add(memberCategory.getCategory());
        }
        return categories;
    }
}
