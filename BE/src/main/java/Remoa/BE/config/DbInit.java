package Remoa.BE.config;

import Remoa.BE.domain.Category;
import Remoa.BE.domain.Member;
import Remoa.BE.service.CategoryService;
import Remoa.BE.service.SignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class DbInit {
    private final SignupService signupService;
    private final CategoryService categoryService;

    @PostConstruct
    public void postConstruct() {
        Member adminMember = new Member();
        adminMember.setEmail("spparta@gmail.com");
        adminMember.setPassword("admin");
        adminMember.setName("admin");
        adminMember.setBirth("00000000");
        adminMember.setSex(true);
        adminMember.setPhoneNumber("010-0000-0000");
        adminMember.setOneLineIntroduction("관리자입니다.");
        adminMember.setTermConsent(true);
        adminMember.setRole("ROLE_ADMIN");
        this.signupService.join(adminMember);
    }

    @PostConstruct
    public void makeCategories() {
        Category idea = new Category("idea");
        Category marketing = new Category("marketing");
        Category design = new Category("design");
        Category video = new Category("video");
        Category etc = new Category("etc");
        this.categoryService.persistCategory(new Category[]{idea, marketing, design, video, etc});
    }

}
