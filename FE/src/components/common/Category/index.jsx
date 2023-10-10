import { Link, NavLink, useLocation } from 'react-router-dom';
import { pageLinks } from '../../../containers/reference/constants';

import StyledComponents from './Category.styles';
const { CategoryList, CategoryItem } = StyledComponents;

function Cateogry() {
  const location = useLocation();

  return (
    <CategoryList>
      {pageLinks.map((link) => (
        <CategoryItem key={link.path}>
          <NavLink to={link.path} activeclassname="active">
            {link.text}
          </NavLink>
        </CategoryItem>
      ))}
    </CategoryList>
  );
}

export default Cateogry;
