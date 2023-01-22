package Remoa.BE.controller;

import Remoa.BE.domain.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
public class HomeController {

    @GetMapping("/")
    public String home(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session == null) {
            return "hello, stranger";
        }

        Member loginMember = (Member) session.getAttribute("loginMember");

        return "hello, " + loginMember.getName();
    }

}