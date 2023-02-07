package Remoa.BE.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostFile {

    @Id
    @GeneratedValue
    @Column(name = "post_file_id")
    private Long postFileId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private UploadFile uploadFile;

    public static PostFile createPostFile(Post post, UploadFile uploadFile) {
        PostFile postFile = new PostFile();
        postFile.setPost(post);
        postFile.setUploadFile(uploadFile);

        return postFile;
    }
}
