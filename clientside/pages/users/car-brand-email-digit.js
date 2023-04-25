import { useState } from 'react';
import Link from 'next/link';

export default function UsersTable() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 40;
    const totalPages = Math.ceil(users.length / usersPerPage);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/api/data/users/car-brand-bmw-mercedes-or-audi-and-email-does-not-include-digit');
    const data = await res.json();
    setUsers(data);
  };

  if (!users.length) {
    fetchUsers();
    return (  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const currentUsers = users.slice(startIndex, endIndex);

    return currentUsers.map((user,index) => (
        <tr key={user.id}>
        <td className="border px-4 py-2">{index + 1}</td>
        <td className="border px-4 py-2">{user.first_name}</td>
        <td className="border px-4 py-2">{user.last_name}</td>
        <td className="border px-4 py-2">{user.gender}</td>
        <td className="border px-4 py-2">{user.email}</td>
        <td className="border px-4 py-2">{user.car}</td>
        <td className="border px-4 py-2">{user.income}</td>
        <td className="border px-4 py-2">{user.City}</td>
        <td className="border px-4 py-2">{user.quote}</td>
        <td className="border px-4 py-2">{user.phone_price}</td>
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
    <div className="container mx-10 ">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Car</th>
            <th className="px-4 py-2">Income</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">quote</th>
            <th className="px-4 py-2">phone_price</th>
          </tr>
        </thead>
        <tbody>
         {renderTableData()}
        </tbody>
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

)}
