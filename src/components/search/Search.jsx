import sprite from '../../images/sprite.svg';
import { SearchQueryStyled } from './SearchQueryStyled';

const Search = ({ search, setSearch }) => {
  return (
    <SearchQueryStyled>
      <input
        className="SearchQuery"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Enter Student Name, Parent or ID here"
      />
      <svg className="SearchIcon" width="16" height="16">
        <use href={sprite + '#icon-search'}></use>
      </svg>
    </SearchQueryStyled>
  );
};

export default Search;
