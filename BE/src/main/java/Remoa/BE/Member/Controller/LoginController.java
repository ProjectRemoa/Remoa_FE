package Remoa.BE.Member.Controller;

import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Member.Form.LoginForm;
import Remoa.BE.Member.Service.LoginService;
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
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class LoginController {

    private final LoginService loginService;

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

        securityLoginWithoutLoginForm(request, loginMember);

        return loginMember.getNickname();
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