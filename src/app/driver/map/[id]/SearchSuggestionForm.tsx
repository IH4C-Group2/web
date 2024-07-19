import { useState, ChangeEvent, useEffect } from 'react';
import { getAutocompleteSuggestions } from './MapboxHelper';

interface Suggestion {
  place_name: string;
  coordinates: [number, number];
  placeholder: string;
}
export default function SearchSuggestionForm({
  onSelection,
  value,
  placeholder,
}: {
  onSelection: (suggestion: Suggestion) => void;
  value?: string;
  placeholder?: string;
}) {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  // フォームの入力内容が変更された時に実行する関数
  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const newSuggestions = await getAutocompleteSuggestions(e.target.value);
    setSuggestions(newSuggestions);
  };

  // 地名候補がクリックされた時に実行する関数
  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.place_name);
    setSuggestions([]);
    onSelection(suggestion);
  };

  useEffect(() => {
    if (value === undefined) return;
    setQuery(value);
  }, [value]);

  return (
    <div className='relative flex items-center text-gray-700'>
      <input
        type='text'
        placeholder={placeholder ?? '地名を入力してください'}
        value={query}
        className='text-sm border-2 border-gray-300 rounded-md p-1'
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className='absolute left-0 top-6 mt-2 z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg'>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className='text-sm p-2 hover:bg-gray-200 cursor-pointer'
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
