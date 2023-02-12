package Remoa.BE.Member.Form;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class KakaoSignupForm {

    @NotBlank(message = "이메일은 필수값입니다.")
    private String email;

    @NotBlank(message = "카카오에서 발급받은 id값이 누락되었습니다.")
    private Long kakaoId;

    @NotBlank(message = "이름은 필수값입니다.")
    private String nickname;

    private String profileImage;

    /*@NotBlank(message = "생일은 필수값입니다.")
    private String birth;

    @NotNull(message = "성별은 필수값입니다.")
    private Boolean sex;

    @NotBlank(message = "연락처는 필수값입니다.")
    private String phoneNumber;
*/
    //필수 동의사항은 비동의시 회원가입 자체가 진행되지 않으므로 선택 동의사항에 대한 부분만 고려
    @NotNull(message = "선택 동의사항 값은 필수입니다.")
    private Boolean termConsent;
}