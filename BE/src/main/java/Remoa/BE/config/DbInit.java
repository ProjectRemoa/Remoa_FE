package Remoa.BE.config;

import Remoa.BE.Post.Domain.Category;
import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Post.Service.CategoryService;
import Remoa.BE.Member.Service.SignupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
@RequiredArgsConstructor
public class DbInit {
    private final SignupService signupService;
    private final CategoryService categoryService;

    @PostConstruct
    public void createAdminUser() {
        if (signupService.isAdminExist()) {
            //do nothing
            log.info("============Admin is already exist============");
        } else {
            Member adminMember = new Member();
            adminMember.setEmail("spparta@gmail.com");
            adminMember.setPassword("admin");
            adminMember.setName("admin");
            adminMember.setBirth("00000000");
            adminMember.setSex(true);
            adminMember.setPhoneNumber("01000000000");
            adminMember.setOneLineIntroduction("관리자입니다.");
            adminMember.setTermConsent(true);
            adminMember.setRole("ROLE_ADMIN");
            this.signupService.join(adminMember);
        }
    }

    @PostConstruct
    public void initCategories() {
        if (!categoryService.findAllCategories().isEmpty()) {
            //do nothing
            log.info("==========Categories are already set==========");
        } else {
            Category idea = new Category("idea");
            Category marketing = new Category("marketing");
            Category design = new Category("design");
            Category video = new Category("video");
            Category etc = new Category("etc");
            this.categoryService.persistCategory(new Category[]{idea, marketing, design, video, etc});
        }
    }

    @PostConstruct
    public void addCategories() {
        /* 카페고리를 더 추가하고 싶을 때 사용할 예정. */
    }

}
