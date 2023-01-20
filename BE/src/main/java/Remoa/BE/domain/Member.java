package Remoa.BE.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
public class Member implements UserDetails {

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "kakao_id")
    private Long kakaoId;

    private String email;

    private String password;

    private String name;

    private String nickname;

    private String birth;

    private Boolean sex;

    @Column(name = "phone_number")
    private String phoneNumber;

    private String university;

    @Column(name = "one_line_introduction")
    private String oneLineIntroduction;

    @Column(name = "term_consent")
    private Boolean termConsent;

    @OneToMany(mappedBy = "member", cascade = {CascadeType.ALL})
    private List<MemberCategory> categories = new ArrayList();

    @OneToMany(mappedBy = "member")
    private List<Follow> follows = new ArrayList();

    private String role;

    public Member hashPassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
        return this;
    }

    public Boolean checkPassword(String plainPassword, PasswordEncoder passwordEncoder) {
        return passwordEncoder.matches(plainPassword, this.password);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();

        for(String role : role.split(",")){
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }

    public String getUsername() {
        return null;
    }

    public boolean isAccountNonExpired() {
        return false;
    }

    public boolean isAccountNonLocked() {
        return false;
    }

    public boolean isCredentialsNonExpired() {
        return false;
    }

    public boolean isEnabled() {
        return false;
    }
}
