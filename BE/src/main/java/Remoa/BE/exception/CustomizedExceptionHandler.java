package Remoa.BE.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@Slf4j
@RestControllerAdvice //모든 컨트롤러가 호출되기 전에 사전 실행됨. -> 이를 통해 모든 예외가 처리되는 클래스가 만들어졌다.
public class CustomizedExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> methodValidException(MethodArgumentNotValidException e, HttpServletRequest request){
        log.warn("MethodArgumentNotValidException 발생!!! url:{}, trace:{}", request.getRequestURI(), e.getStackTrace());
        ExceptionResponse errorResponse = makeErrorResponse(e.getBindingResult());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    private ExceptionResponse makeErrorResponse(BindingResult bindingResult) {
        String code = "";
        String description = "";
        String detail = "";
        LocalDateTime errorOccurredTime = null;

        //에러가 있다면
        if(bindingResult.hasErrors()){
            //DTO에 설정한 meaasge값을 가져온다
            detail = bindingResult.getFieldError().getDefaultMessage();

            errorOccurredTime = LocalDateTime.now();

            //DTO에 유효성체크를 걸어놓은 어노테이션명을 가져온다.
            String bindResultCode = bindingResult.getFieldError().getCode();

            switch (bindResultCode){
                case "NotBlank":
                    code = "NotBlank Error";
                    description = "비어있거나 공백일 수 없습니다.";
                    break;
                case "Size":
                    code = "Size Error";
                    description = "입력값의 크기가 올바르지 않습니다.";
                    break;
                case "NotNull":
                    code = "NotNull Error";
                    description = "필수 입력 사항입니다.";
            }
        }

        return new ExceptionResponse(code, description, detail, errorOccurredTime);
    }
}
