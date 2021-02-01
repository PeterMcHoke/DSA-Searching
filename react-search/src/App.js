import './App.css';
import { useState } from 'react'

function App() {
  const [formValue, setFormValue] = useState('');
  const [search, setSearch] = useState('Linear');
  const [result, setResult] = useState(0)
  
  const uglyData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
  const niceData = [...uglyData].sort((a,b) => a-b)
  //Linear search 
  const linearSearch = (list, val) => {
    console.log('We have to look through', list)
    for (let i=0; i < list.length; i++) {
      if (list[i]=== val)
        return i
    }
    return -1;
  }

  //Binary serarch 
  const binarySearch = (list, val, start, end, counter = 0) => {
    start = (start === undefined ? 0 : start)
    end = (end === undefined ? list.length : end)
    console.log('binarySearch round', counter, list.slice(start, end+1))
    const index = Math.floor((start + end ) / 2)
    const item = list[index]

    if (item === val)
      return counter
    else if (item < val) {
      return binarySearch(list, val, index + 1, end, counter+1)
    }
    else if (item > val) {
      return binarySearch(list, val, start, index - 1, counter+1)
    }
    return -1
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === 'Linear')
      setResult(linearSearch(uglyData, parseInt(formValue)))
    if (search === 'Binary')
      setResult(binarySearch(niceData, parseInt(formValue)))
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Search </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='value'> What element are you looking for? </label> <br />
            <input name='num' type='text' onChange={e => setFormValue(e.currentTarget.value)} value={formValue} />
            <br/>
            <ul>
              <li style={{listStyleType: "none"}}>
                <input type="radio" id="linear" name="drone" onChange={() => setSearch('Linear')} checked={search==='Linear'} />
                <label htmlFor="Linear">Linear</label>
              </li>
              <li style={{ listStyleType: "none" }}>
                <input type="radio" id="Binary" name="drone" onChange={() => setSearch('Binary')} checked={search==='Binary'} />
                <label htmlFor="Binary">Binary</label>
              </li>
            </ul>
            <button type='submit' value='Submit'>Search</button>
          </form>
          {result && 
              ((result === -1) ?
               <p> We couldn't find your element in our list</p>
                :
              <p> It took {result} iterations to find your element.</p>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
