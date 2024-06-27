import '../css/Dashboard.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const APIURL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    setLoading(true);
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setTotalPages(Math.ceil(data.length / 5));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const preDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = userData.slice(startIndex, endIndex);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('loggedin');
    navigate('/Loginpage');
  }

  return (
    <div className="containerss">
      <p id="paras">Hi there, welcome to Dashboard.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {itemsToDisplay && itemsToDisplay.length > 0
            ? itemsToDisplay.map((item) => {
                return (
                  <h3 key={item.id}>
                    {item.id} {item.title}
                  </h3>
                );
              })
            : ''}
          <button onClick={handlePrevClick} disabled={preDisabled}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <button
                onClick={() => handlePageChange(i + 1)}
                key={i}
                disabled={i + 1 === currentPage}
              >
                {i + 1}
              </button>
            );
          })}
          <button onClick={handleNextClick} disabled={nextDisabled}>
            Next
          </button>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
