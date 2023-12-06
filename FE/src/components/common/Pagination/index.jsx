import ReactPaginate from 'react-paginate';
import * as S from './Pagination.styles';

function Pagination({ page, pageCount, handlePageClick, className }) {
  return (
    <S.PaginationContainer className={className}>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousClassName={'pageLabelBtn'}
        nextClassName={'pageLabelBtn'}
        renderOnZeroPageCount={null}
        forcePage={Number(page) - 1}
      />
    </S.PaginationContainer>
  );
}

export default Pagination;
