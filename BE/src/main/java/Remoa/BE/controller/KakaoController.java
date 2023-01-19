package Remoa.BE.controller;

import Remoa.BE.service.KakaoService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.util.Map;

//@RestController로 바꾸어야 합니다.
@Controller
public class KakaoController {

    @Autowired //private final 키워드와 @NoArgsConstructor를 붙여서 생성자 주입으로 바꾸기
    KakaoService ks;

    //@GetMapping("/do")
    //public String loginPage() { return "kakaoCI/login"; }

    @GetMapping("/signup/kakao")
    public String getCI(@RequestParam String code, Model model) throws IOException {
        System.out.println("code = " + code); //@Slf4j로 로그 찍는 게 더 가독성이나 기능면에서 좋습니다.
        String access_token = ks.getToken(code);
        Map<String, Object> userInfo = ks.getUserInfo(access_token);
        model.addAttribute("code", code);
        model.addAttribute("access_token", access_token);
        model.addAttribute("userInfo", userInfo);
        //React와 Rest API로 작업하는 환경에서는 Model을 사용하지 않는다고 알고 있습니다.
        //그냥 필요한 값을 return시키면 @RestController가 알아서 json으로 맵핑해줍니다.
        return "index";
    }
}