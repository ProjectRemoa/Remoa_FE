package Remoa.BE.Post.Domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@NoArgsConstructor
@Getter
public class Category {

    public Category(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue
    @Column(name = "category_id")
    private Long categoryId;

    @OneToOne(mappedBy = "category", fetch = FetchType.LAZY)
    private Post post;

    private String name;

}
