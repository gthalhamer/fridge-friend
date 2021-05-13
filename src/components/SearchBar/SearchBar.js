import React, {useEffect, useState} from 'react';
import {SearchContainer, SearchBg, SearchContent, SearchH1, SearchWrapper, Form, Input, SearchIcon} from './SearchBarElements';

const SearchBar = ({setRecipes}) => {

    const apiKey = '5a8a889d5117f74390a49994e9f908e8';
    const appId = 'afd93a1d';

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query !== '') {
            getRecipes();
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&to=20`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <SearchContainer id='home'>
            <SearchBg />
            <SearchContent>
                <SearchH1>What's in your fridge?</SearchH1>
                <SearchWrapper>
                    <Form aria-label="form" onSubmit={getSearch}>
                        <Input placeholder="Ingredients..." type='text' value={search} onChange={updateSearch}></Input>
                    <SearchIcon />
                    </Form>
                </SearchWrapper>
            </SearchContent>
        </SearchContainer>
    )
}

export default SearchBar
