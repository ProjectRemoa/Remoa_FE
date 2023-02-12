package Remoa.BE.Member.Service;

import Remoa.BE.Member.Domain.Member;
import Remoa.BE.Member.Repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class LoginService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder bCryptPasswordEncoder;

    public Member login(String email, String password) {
        return memberRepository.findByEmail(email)
                .stream().filter(member -> bCryptPasswordEncoder.matches(password, member.getPassword())).findAny().orElse(null);
    }

}