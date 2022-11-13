import styled from 'styled-components';

export const SearchForm = styled.form`
  //   position: relative;
  //   width: 300px;
  //   margin: 0 auto;
  display: flex;
`;

export const SearchInput = styled.input`
  position: relative;
  display: block;
  width: 500px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  appearance: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
export const SearchButton = styled.button`
  position: relative;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
`;
