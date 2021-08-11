import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from './Hit'

const appId = process.env.ALGOLIA_APP_ID;
const searchKey = process.env.ALGOLIA_SEARCH_ONLY_API_KEY;
const searchClient = algoliasearch(appId, searchKey);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={process.env.ALGOLIA_INDEX_NAME}>
    <SearchBox />
    <Hits hitComponent={Hit}/>
  </InstantSearch>
);
export default Search;