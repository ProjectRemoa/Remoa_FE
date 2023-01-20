package Remoa.BE.repository;

import Remoa.BE.domain.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class CategoryRepository {

    private final EntityManager em;

    public void saveCategory(Category category) {
        em.persist(category);
    }
}
