/** @format */

import { useAppSelector } from '../redux/store';

export function SearchBar() {
  const { items } = useAppSelector((state: any) => state.search);
  console.log(items);
  return (
    <>
      <div className='search_container'>
        <input type='text' className='search_field' />
        <span className='seach_hint'>Type something to search...</span>
      </div>
    </>
  );
}
