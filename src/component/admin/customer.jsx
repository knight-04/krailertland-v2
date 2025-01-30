import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const RegistrationTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const parseDateString = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null;
    
    try {
      const matches = dateStr.match(/Date\((\d+),(\d+),(\d+),(\d+),(\d+),(\d+)\)/);
      if (!matches) return null;
      
      const [, year, month, day, hours, minutes, seconds] = matches;
      const date = new Date(
        parseInt(year),
        parseInt(month),
        parseInt(day),
        parseInt(hours),
        parseInt(minutes),
        parseInt(seconds)
      );
      
      return date;
    } catch (err) {
      console.error('Error parsing date:', err);
      return null;
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    
    const date = parseDateString(dateStr);
    if (!date) return '-';
    
    return date.toLocaleString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://docs.google.com/spreadsheets/d/15XcD285g-_wJkzvMnBHoj77fbnYeuHi-rCPzdJdMAjk/gviz/tq?tqx=out:json'
      );
      const text = await response.text();
      const jsonData = JSON.parse(text.substring(47).slice(0, -2));
      
      // Transform data into the format we need
      const headers = jsonData.table.cols.map(col => col.label).slice(0, 5);
      const rows = jsonData.table.rows.map(row => {
        return row.c.slice(0, 5).map(cell => cell ? cell.v : '-');
      });
      
      setData({ headers, rows });
      setLoading(false);
      setIsRefreshing(false);
    } catch (err) {
      setError('ไม่สามารถโหลดข้อมูลได้');
      setLoading(false);
      setIsRefreshing(false);
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setError(null);
    fetchData();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex justify-start items-center">
        <h2 className="text-lg font-semibold">ข้อมูลลงทะเบียน</h2>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 disabled:opacity-50"
        >
          <RefreshCw 
            size={16} 
            className={`${isRefreshing ? 'animate-spin' : ''}`}
          />
          รีเฟรช
        </button>
      </div>
      
      {error ? (
        <div className="text-center text-red-600 p-4">
          <p>{error}</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {data.headers.map((header, index) => (
                  <th 
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.rows.map((row, rowIndex) => (
                <tr 
                  key={rowIndex}
                  className="hover:bg-gray-50"
                >
                  {row.map((cell, cellIndex) => (
                    <td 
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {cellIndex === 0 ? formatDate(cell) : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegistrationTable;