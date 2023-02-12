package Remoa.BE.category;

import Remoa.BE.Post.Domain.Category;
import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Member.Repository.MemberRepository;
import Remoa.BE.Post.Service.CategoryService;
import Remoa.BE.Member.Service.SignupService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class CategoryTest {

    @Autowired
    CategoryService categoryService;

    @Autowired
    SignupService signupService;

    @Autowired
    MemberRepository memberRepository;

    @Test
    public void 카테고리_테스트() throws Exception {
        //given
        Member testMember = createMember();
        signupService.join(testMember);

        String category1 = "idea";
        String category2 = "video";

        //when
        //testMember에 대한 카테고리 세팅
        List<Category> testMemberCategories = categoryService.setPreferCategory(testMember, category1, category2);


        //email로 testMember를 찾은 후 category 찾아오기
        Member findMember = memberRepository.findByEmail("tester@test.com").get(0);
        List<Category> findMemberCategories = categoryService.findMemberCategory(findMember);

        //then
        assertEquals("하나의 멤버에 설정한 카테고리와 찾은 카테고리는 같아야한다.", testMemberCategories, findMemberCategories);
    }

    private Member createMember() {
        Member member = new Member();
        member.setEmail("tester@test.com");
        member.setName("test");
        member.setPassword("test");
        member.setBirth("20101010");
        member.setSex(false);
        member.setPhoneNumber("12341234");
        member.setTermConsent(true);

        return member;
    }
}
