import { useNavigate } from 'react-router-dom';
import { pageLinks } from '../../../containers/reference/constants';

import StyledComponents from './Category.styles';
import { useEffect } from 'react';
const { CategoryList, CategoryItem } = StyledComponents;

function Cateogry({ main, onClickCategory, checkIdx }) {
  const navigate = useNavigate();

  const onChangeCategory = (link) => {
    if (main === true) {
      // RefPage용
      navigate(link.path);
      onClickCategory(link.keyword);
    } else {
      // ManageList용
      onClickCategory(link.keyword);
    }
  };

  return (
    <CategoryList>
      {pageLinks.map((link, index) => (
        <CategoryItem
          key={link.path}
          onClick={() => onChangeCategory(link)}
          checked={index === checkIdx}
        >
          {link.text}
        </CategoryItem>
      ))}
    </CategoryList>
  );
}

export default Cateogry;
