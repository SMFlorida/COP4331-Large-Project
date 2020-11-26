import React from 'react';
import 'typeface-roboto';

const SearchResult =() => {

  document.body.style.height = "100vh";

  const openFavorites = event => {
    {/*Function to produce object inside Results div depending on if the user is logged in or not*/}
  }

  return(
    <div style={{margin: "0 auto", height: "100vh"}}>
        <div style={{width: "100%", height: "100px", backgroundColor: "#FA730B"}}>
          <div className="row" style={{width: "100%"}}>
            <div style={{width: "25%", height: "100px", color: "white", paddingTop: "5px", fontSize: "60px", fontWeight: "bold"}}>
              Seppi
            </div>
            <div style ={{width: "50%", height: "100px",paddingTop: "25px", textAlign: "center"}}>
              <form>
                <input id="resultSearch" type="text" placeholder="Search by recipe, ingredient, dish..." />
                <span className="searchImage" style={{borderRadius: "1px", width: "4%", backgroundSize: "cover", height: "50px",color: "white", position: "absolute", backgroundColor: "orange", padding: '2px'}}>
                  <i className="fa fa-search" style={{paddingTop: "8px", fontSize: "30px"}}></i>
                </span>
              </form>
            </div>
            <div style={{width: "25%", height: "100px",paddingTop: "5px", textAlign: "center"}}>
              <button id="FavPageButton" onClick={() => alert("Hello")}>
                <div id = "FavImage"></div>
                Favorites
              </button>
              <button id="AccountSettings">
                <div id = "AccountImage"></div>
                Account
              </button>
              <button id="List">
                <div id="ListImage"></div>
                Lists
              </button>
            </div>
          </div>
        </div>
        <br/>
        <div className="row" style={{width: "100%"}}>
          <div id="FilterArea">
            <br/>
            Filter By<br/>
            <div id="FilterDropDowns">
              Filters go here
            </div>
          </div>
          {/*Idea is to have contents in Results hidden and not computed till a Search is made, also hide when Favorite Button Clicked*/}
          <div id="Results">
            <div>
              <div className="row" id="FiltersChosen">
                <button>Example Object here</button>
              </div>
              <div id="NumberOfResults">
                Example Object here
              </div>
            <br/>
            </div>
            Recipe Objects here
          </div>
        </div>
    </div>
  );
};

export default SearchResult;