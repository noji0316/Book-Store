import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFillter';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Pagination';
import BooksviewSwitcher from '../components/books/BooksviewSwitcher';

function Books() {
    return (
        <>
        <Title size="large">도서 검색 결과</Title>
        <BooksStyle>
            <BooksFilter />
            <BooksviewSwitcher/>
            <BooksList />
            <BooksEmpty />
            <Pagination />
        </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div``;

export default Books;