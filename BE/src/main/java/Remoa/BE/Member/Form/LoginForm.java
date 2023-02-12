package Remoa.BE.Member.Form;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class LoginForm {

    @NotBlank(message = "이메일은 필수 입니다.")
    private String email;

    @Size(min = 8, max = 20, message = "패스워드는 4~16자까지 가능합니다.")
    private String password;
}
