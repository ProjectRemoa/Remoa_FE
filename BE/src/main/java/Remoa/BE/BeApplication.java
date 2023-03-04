package Remoa.BE;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@SpringBootApplication
public class BeApplication {

	@Value("${uploadFolder}")
	private String uploadFolder;

	public static void main(String[] args) {
		SpringApplication.run(BeApplication.class, args);
	}

	@PostConstruct
	public void createUploadFolder() {
		Path upload = Paths.get(uploadFolder);
		try {
			if (!Files.exists(upload)) {
				Files.createDirectory(upload);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
