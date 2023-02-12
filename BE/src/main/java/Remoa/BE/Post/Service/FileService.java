package Remoa.BE.Post.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {

    @Value("${uploadFolder}")
    private String uploadFolder;

    public void save(MultipartFile file, String saveFileName) {
        Path upload = Paths.get(uploadFolder);
        try {
            Files.copy(file.getInputStream(), upload.resolve(saveFileName));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
