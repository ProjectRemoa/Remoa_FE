package Remoa.BE.Member.Controller;

import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Member.Form.KakaoSignupForm;
import Remoa.BE.Member.Service.KakaoService;
import Remoa.BE.Member.Service.SignupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class KakaoController {

    private final KakaoService ks;
    private final SignupService signupService;

    @GetMapping("/login/kakao")
    public void getCI(@RequestParam String code, HttpServletResponse response, HttpServletRequest request) throws IOException {
        log.info("code = " + code);

        // 액세스 토큰과 유저정보 받기
        String access_token = ks.getToken(code);
        Map<String, Object> userInfo = ks.getUserInfo(access_token);

        log.info("userInfo = {}", userInfo.values());

        Long kakaoId = Long.parseLong((String) userInfo.get("id"));
        Member kakaoMember = ks.distinguishKakaoId(kakaoId);

        log.info("kakaoId = {}", kakaoId);

        if (kakaoMember == null) {
            //kakaoId가 db에 없으므로 kakaoMember가 null이므로 회원가입하지 않은 회원. 따라서 회원가입이 필요하므로 회원가입하는 uri로 redirect 시켜주어야 함.
            response.sendRedirect("/signup/kakao"); //현재 api명세서가 미완성이라 임의로 카카오 회원가입 페이지를 정해서 써두었습니다.
            //현재는 편의상 위처럼 redirect를 써두었으나 이후 작업에서는 프론트에 카카오에서 받아온 사용자 정보를 넘겨야 하므로 return값으로 userInfo에서 닉네임와 이메일 등을 받아와야 합니다.
        } else {
            //if문에 걸리지 않았다면 이미 회원가입이 진행돼 db에 kakaoId가 있는 유저이므로 kakaoMember가 존재하므로 LoginController처럼 로그인 처리 하면 됩니다.
            securityLoginWithoutLoginForm(request, kakaoMember);
        }

    }

    @PostMapping("/signup/kakao")
    public void signupKakaoMember(KakaoSignupForm form) {

        /*Member member = new Member();
        member.setEmail(form.getEmail());
        member.setKakaoId(form.getKakaoId());
        member.setName(form.getName());
        member.setBirth(form.getBirth());
        member.setSex(form.getSex());
        member.setPhoneNumber(form.getPhoneNumber());
        member.setTermConsent(form.getTermConsent());

        signupService.join(member);*/

        Member member = new Member();
        member.setKakaoId(form.getKakaoId());
        member.setEmail(form.getEmail());
        member.setNickname(form.getNickname());
        member.setProfileImage(form.getProfileImage()); //사진 파일을 다운 받아서 저장해야할까..?

        signupService.join(member);
    }

    private void securityLoginWithoutLoginForm(HttpServletRequest request, Member member) {

        //로그인 세션에 들어갈 권한을 설정합니다.
        List<GrantedAuthority> list = new ArrayList<>();
        list.add(new SimpleGrantedAuthority("ROLE_USER"));

        SecurityContext sc = SecurityContextHolder.getContext();
        //아이디, 패스워드, 권한을 설정합니다. 아이디는 Object단위로 넣어도 무방하며
        //패스워드는 null로 하여도 값이 생성됩니다.
        sc.setAuthentication(new UsernamePasswordAuthenticationToken(member, null, list));
        HttpSession session = request.getSession(true);
        session.setAttribute("loginMember", member);

        //위에서 설정한 값을 Spring security에서 사용할 수 있도록 세션에 설정해줍니다.
        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, sc);
    }
}