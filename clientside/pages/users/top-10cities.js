 import { useState } from 'react'
import Link from 'next/link'


const UsersTableTop = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const usersPerPage = 40;
    const totalPages = Math.ceil(users.length / usersPerPage);
    if (!users.length) {
        fetchUsers();
        return (  <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>);
      }
  
    const handleClick = (page) => {
      setCurrentPage(page);
      setLoading(true);
    };
  
    const renderTableData = () => {
      const startIndex = (currentPage - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const currentUsers = users.slice(startIndex, endIndex);
  
      return currentUsers.map((user) => (
        <tr key={user.city}>
             <td className="border px-4 py-2 ">{user.city}</td>
              <td className="border px-4 py-2 ">{user.userCount}</td>
              <td className="border px-4 py-2 ">{user.avgIncome}</td>
        </tr>
      ));
    };
  
    const renderPageNumbers = () => {
      const pageNumbers = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`mx-1 px-3 py-2 rounded ${
              currentPage === i ? "bg-gray-700 text-white" : "bg-white text-gray-700"
            }`}
          >
            {i}
          </button>
        );
      }
  
      return pageNumbers;
    };
  
    return (
  
          <div className="container mx-auto px-4">
            <table className="table-auto">
              <thead>
              <tr>
                <th className="px-4 py-2">City</th>
                <th className="px-4 py-2">Number of Users</th>
                <th className="px-4 py-2">Average Income</th>
              </tr>
              </thead>
              <tbody>{renderTableData()}</tbody>
            </table>
            <div className="flex justify-center my-4">{renderPageNumbers()}</div>
            <div className="flex justify-center my-4">
              <Link href="/" legacyBehavior>
                <a className="bg-gray-700 text-white px-4 py-2 rounded">
                  Back to Home 
                </a>
              </Link>
            </div>
          </div>
          
    
    );
  };



export const getServerSideProps = async () => {
  const res = await fetch(
    'http://localhost:5000/api/data/top-10-cities-with-highest-number-of-users-and-average-income'
  )
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  }
}

export default UsersTableTop
 



