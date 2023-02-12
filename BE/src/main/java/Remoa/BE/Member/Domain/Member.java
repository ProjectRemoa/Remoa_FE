package Remoa.BE.Member.Domain;

import Remoa.BE.Post.Domain.Post;
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

    /**
     * 23.02.04 카카오 로그인 단독 개발로 인해 삭제 예정.
     */
    @Deprecated
    private String password;

    private String name;

    //23.1.19 추가
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

    @Column(name = "profile_image")
    private String profileImage;

    @OneToMany(mappedBy = "member")
    private List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.ALL})
    private List<MemberCategory> memberCategories = new ArrayList();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.ALL})
    private List<CommentBookmark> commentBookmarks = new ArrayList();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.ALL})
    private List<CommentLike> commentLikes = new ArrayList();

    @OneToMany(mappedBy = "fromMember")
    private List<Follow> follows = new ArrayList();

    private String role;

    public Member hashPassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
        return this;
    }

    public Boolean checkPassword(String plainPassword, PasswordEncoder passwordEncoder) {
        return passwordEncoder.matches(plainPassword, this.password);
    }

    public void addMemberCategory(MemberCategory memberCategory) {
        memberCategories.add(memberCategory);
    }

    public void addCommentBookmark(MemberCategory memberCategory) {
        memberCategories.add(memberCategory);
    }

    public void addCommentLike(MemberCategory memberCategory) {
        memberCategories.add(memberCategory);
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
