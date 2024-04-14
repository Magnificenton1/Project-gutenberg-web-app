import React, { useEffect } from 'react'
import './BookFilters.css'

export const BookFilters = ({selectedLang, setSelectedLang, page, setPage, setTitleValue, setTopicValue, setAuthorValue, filterURL, count}) => { //let lang = ["en", "de", "fr", "es", "it", "nl", "pt", "fi"]; żebym nie zapomniał jakie są języki

    const handleFilterButtonClick = (selectedCategory) => { // CLICKING ON BUTTONS ADDS OR SUBTRACTS ARGUMENTS IN AN ARRAY
        if (selectedLang.includes(selectedCategory)) {
          let lang = selectedLang.filter((el) => el !== selectedCategory);
          setSelectedLang(lang);
        } else {
          setSelectedLang([...selectedLang, selectedCategory]);
        }
    };
    
    
    let PageNumber = Math.ceil(parseFloat(count)/32.0); // zabezpieczenie przed wpisywaniem liczby strony w przypadku braku wyników
    if(PageNumber == 0){
        PageNumber = 1;
    }

    useEffect(() => { // SETS PAGE TO 1 AT THE START AND FILTERS USING SECOND USEEFFECT
        setPage("1");
    }, []);


    useEffect(() => { // zabezpieczenie przed wpisaniem liczby większej od ilości stron
        if(page > PageNumber){
            setPage(PageNumber);
        };
        if(!(page=='') && !(page>PageNumber)){ // TO MAKE TYPING-IN PAGE LESS FRUSTRATING
            filterURL();
        };
    }, [page]);

    const handleButtonPageChange = (operation, isPrevious) => {
        if(page == 1 && isPrevious == true){ // IF PAGE==1 CAN'T USE PREVIOUS BUTTON
            return;
        }
        if(count < 33 && isPrevious == false){ // IF THERE ARE NO MORE PAGES CAN'T USE NEXT BUTTON
            return;
        }
        let x = operation + "";
        setPage(x);
    }
    const handleSearchButtonClick = () => { // SETS PAGE TO 1 AFTER SEARCHING
        if(page == "1"){
            filterURL();
        }else{
            setPage("1");
        }
    }

  return (
    <div className='all-in-box'>
        <div className='search-bars-box'>
            <div className='search-bar-wrapper'>
                <input placeholder='Type in title...' className='search-bar-input' onChange={(e) => setTitleValue(e.target.value)}></input>
            </div>
            <div className='search-bar-wrapper' >
                <input placeholder='Type in topic...' className='search-bar-input' onChange={(e) => setTopicValue(e.target.value)}></input>
            </div>
            <div className='search-bar-wrapper radius'>
                <input placeholder='Type in author...' className='search-bar-input' onChange={(e) => setAuthorValue(e.target.value)}></input>
            </div>
        </div>
        <div className='search-button-box radius'>
            <div className='button-box'>
            <button onClick={() => handleSearchButtonClick()} className='search-button'>
                Search
            </button>
            </div>
            <div className='page-container'>
                <button onClick={() => handleButtonPageChange((parseInt(page) - 1), true)} className={`${page == "1" ? "disabled" : ""} page-buttons`}>Previous</button> 
                <input type="number" min="1" placeholder='page' value={page} className='page-input' onChange={(e) => setPage(e.target.value)}></input> 
                <button onClick={() => handleButtonPageChange((parseInt(page) + 1), false)} className={`${count < 33 ? "disabled" : ""} page-buttons`}>Next</button>
            </div>
        </div>

        <div className='lang-box radius'>
            <div className='lang-container'>
                <button onClick={() => handleFilterButtonClick("en")} className={`${selectedLang?.includes("en") ? "active" : ""} lang-button`}>English</button>
                <button onClick={() => handleFilterButtonClick("fi")} className={`${selectedLang?.includes("fi") ? "active" : ""} lang-button`}>Finnish</button>
            </div>
            <div className='lang-container'>
                <button onClick={() => handleFilterButtonClick("de")} className={`${selectedLang?.includes("de") ? "active" : ""} lang-button`}>German</button>
                <button onClick={() => handleFilterButtonClick("fr")} className={`${selectedLang?.includes("fr") ? "active" : ""} lang-button`}>French</button>
            </div>
            <div className='lang-container'>
                <button onClick={() => handleFilterButtonClick("es")} className={`${selectedLang?.includes("es") ? "active" : ""} lang-button`}>Spanish</button>
                <button onClick={() => handleFilterButtonClick("it")} className={`${selectedLang?.includes("it") ? "active" : ""} lang-button`}>Italian</button>
            </div>
            <div className='lang-container'>
                <button onClick={() => handleFilterButtonClick("nl")} className={`${selectedLang?.includes("nl") ? "active" : ""} lang-button`}>Dutch</button>
                <button onClick={() => handleFilterButtonClick("pt")} className={`${selectedLang?.includes("pt") ? "active" : ""} lang-button`}>Portuguese</button>
            </div>
        </div>
    </div>
  )
}
