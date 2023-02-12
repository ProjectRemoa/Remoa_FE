package Remoa.BE.Firebase;


import Remoa.BE.service.FirebaseService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
public class FirebaseTest {

    @Resource
    FirebaseService firebaseService;

    @Test
    public void 테스트() throws Exception {
        firebaseService.insertUser();
        firebaseService.selectUser();
    }
}
