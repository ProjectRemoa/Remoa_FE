package Remoa.BE.config;

import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecureConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                //api 명세 확정 후 재확인 핋요
                .antMatchers("/**").permitAll()
                /*.antMatchers("/").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/logout").permitAll()
                .antMatchers("/upload").permitAll()
                .antMatchers("/download").permitAll()
                .antMatchers("/signup/**").permitAll()
                .antMatchers("/mypage").authenticated()*/
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/user").hasAnyRole("ADMIN", "USER")
                .anyRequest().authenticated()
                .and()

                .sessionManagement()
                .maximumSessions(-1) //세션 제한 없음
                .maxSessionsPreventsLogin(false); //중복 접속시 마지막 세션만 유지

        http.csrf().disable();

        return http.build();
    }
}
