package Remoa.BE.form;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class LoginForm {

    @NotBlank(message = "이메일은 필수 입니다.")
    private String email;

    @Size(min = 4, max = 16, message = "패스워드는 4~16자까지 가능합니다.")
    private String password;
}
