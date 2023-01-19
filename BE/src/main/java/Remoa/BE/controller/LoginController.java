package Remoa.BE.controller;

import Remoa.BE.domain.Member;
import Remoa.BE.form.LoginForm;
import Remoa.BE.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    private void securityLoginWithoutLoginForm(HttpServletRequest request, Member member) {
        //로그인 세션에 들어갈 권한을 설정합니다.
        List<GrantedAuthority> list = new ArrayList<>();
        if (member.getRole().equals("ROLE_USER")) {
            list.add(new SimpleGrantedAuthority("ROLE_USER"));
            log.info("ROLE_USER");
        } else if (member.getRole().equals("ROLE_ADMIN")) {
            list.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            log.info("ROLE_ADMIN");
        }

        SecurityContext sc = SecurityContextHolder.getContext();
        //아이디, 패스워드, 권한을 설정합니다. 아이디는 Object단위로 넣어도 무방하며
        //패스워드는 null로 하여도 값이 생성됩니다.
        sc.setAuthentication(new UsernamePasswordAuthenticationToken(member, null, list));
        HttpSession session = request.getSession(true);
        session.setAttribute("loginMember", member);

        //위에서 설정한 값을 Spring security에서 사용할 수 있도록 세션에 설정해줍니다.
        session.setAttribute(HttpSessionSecurityContextRepository.
                SPRING_SECURITY_CONTEXT_KEY, sc);
    }

    @GetMapping("/login")
    public String loginForm() {
        return "로그인 페이지 입니다.";
    }

    @PostMapping("/login")
    public String login(@Valid @RequestBody LoginForm form, HttpServletRequest request) {

        log.info("login process activate");

        Member loginMember = loginService.login(form.getEmail(), form.getPassword());

        if (loginMember == null) {
            log.info("login process fail");
            return "login fail";
        }
        log.info("login process success");

        //Spring Security를 통한 로그인을 할 때 기본적으로 form 방식으로 진행하는데, 우리는 Resi API로 json을 주고받으므로
        //Spring Security의 로그인 방식을 그대로 쓸 수 없었습니다.
        //대신 Spring Security가 관리하는 객체에 강제로 우리가 사용할 권한, 인증 관련 설정과 세션 설정을 강제로 주입하는 방법을 찾았습니다.
        //다른 방법들도 많았는데, 필터를 통해 form 데이터를 json으로 바꾸어주는 라이브러리를 쓴다든지하는.. 하지만 너무 복잡하고 적용이 어려웠습니다.
        //애초에 Spring Security가 필수 툴이 아니라 AOP를 지키면서 편리하게 로그인을 구현할 수 있게 도와주는 툴이라고 하더라구요.
        //그래서 Spring Security의 정석적인 사용법은 아니지만 동작에는 이상이 없는 해당 방법으로 Spring Security의 기능들을 사용하면서
        //로그인 기능을 구현했습니다.
        securityLoginWithoutLoginForm(request, loginMember);

        /*// 세션 설정 추가하기

        // 기존
        //세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        HttpSession session = request.getSession();
        //세션에 로그인 회원 정보 보관
        session.setAttribute("loginMember", loginMember);
        //세션 관리자를 통해 세션을 생성하고, 회원 데이터 보관*/
        return "login success";
    }
}