package Remoa.BE.Post.Domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "FILE")
public class UploadFile {

    @Id
    @GeneratedValue
    @Column(name = "file_id")
    private Long uploadFileId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @Column(name = "original_file_name")
    private String originalFileName;

    @Column(name = "save_file_name")
    private String saveFileName;

    private String extension;

    //이후 업로드 날짜 및 시간, 컨텐츠 타입, 사이즈 등의 필드등이 필요할 때 손봐야할듯.
}
