package Remoa.BE.service;

import Remoa.BE.domain.Category;
import Remoa.BE.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

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
}