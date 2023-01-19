package Remoa.BE.controller;

import Remoa.BE.form.SignupForm;
import Remoa.BE.domain.Member;
import Remoa.BE.service.SignupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class SignupController {

    private final SignupService memberService;

    @GetMapping("/signup")
    public String createForm() {
        return "회원가입 페이지 입니다.";
    }

    @PostMapping("/signup")
    public String create(@RequestBody @Valid SignupForm form) {

        Member member = new Member();
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setName(form.getName());
        member.setBirth(form.getBirth());
        member.setSex(form.getSex());
        member.setPhoneNumber(form.getPhoneNumber());
        member.setTermConsent(form.getTermConsent());

        Long joinedId;

        try{
            joinedId = memberService.join(member);
        }
        catch (IllegalStateException e){
            return e.getMessage(); // 에러 메세지 프론트에 반환
        }

        return "signup success";
    }
}