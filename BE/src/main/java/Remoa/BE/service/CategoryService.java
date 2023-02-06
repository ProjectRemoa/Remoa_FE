package Remoa.BE.service;

import Remoa.BE.domain.Category;
import Remoa.BE.domain.Member;
import Remoa.BE.domain.MemberCategory;
import Remoa.BE.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public void persistCategory(Category... categories) {

        for (Category category : categories) {
            categoryRepository.saveCategory(category);
        }
    }

    @Transactional
    public List<Category> setPreferCategory(Member member, String... categoryNames) {

        for (String categoryName : categoryNames) {
            Category category = categoryRepository.findByCategoryName(categoryName);
            MemberCategory memberCategory = MemberCategory.createMemberCategory(member, category);
            member.addMemberCategory(memberCategory);
        }

        List<Category> categories = new ArrayList<>();
        for(MemberCategory memberCategory : member.getMemberCategories()){
            categories.add(memberCategory.getCategory());
        }
        return categories;
    }

    public List<Category> findMemberCategory(Member member) {
        return categoryRepository.findOnesCategories(member);
    }

    public List<Category> findAllCategories() {
        return categoryRepository.findAllCategories();
    }
}