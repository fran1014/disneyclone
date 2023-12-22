type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  return <div>Welcome to the search page: {term} </div>;
}

export default SearchPage;
