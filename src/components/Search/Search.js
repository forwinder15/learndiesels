import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from './Hit'


const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ONLY_API_KEY);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="CONTENT">
    <SearchBox />
    <Hits hitComponent={Hit}/>
  </InstantSearch>
);
export default Search;