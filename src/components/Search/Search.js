import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from './Hit'

const searchClient = algoliasearch('ZPBUD4MZU8', '3b1f3afb40ea9208dadd0891343620b3');

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="CONTENT">
    <SearchBox />
    <Hits hitComponent={Hit}/>
  </InstantSearch>
);
export default Search;