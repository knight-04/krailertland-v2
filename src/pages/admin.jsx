import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../component/admin/panel';
import Promotions from '../component/admin/promotion';
import RegistrationTable from '../component/admin/customer';

const AdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // ใช้ localStorage เพื่อเก็บ state ของ tab
    const [activeTab, setActiveTab] = useState(() => {
        const savedTab = localStorage.getItem('adminActiveTab');
        return savedTab || 'promotions';
    });

    // บันทึก state ลง localStorage เมื่อมีการเปลี่ยน tab
    useEffect(() => {
        localStorage.setItem('adminActiveTab', activeTab);
    }, [activeTab]);

    // แสดง log เพื่อ debug
    useEffect(() => {
        console.log('Current active tab:', activeTab);
    }, [activeTab]);

    const handleTabChange = (tab) => {
        console.log('Changing to tab:', tab);
        setActiveTab(tab);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar 
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
                <header className="bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between p-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className={`lg:hidden ${isSidebarOpen ? 'hidden' : ''}`}
                        >
                            <Menu size={24} />
                        </button>

                        <div className="flex items-center space-x-4 ml-auto">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                    A
                                </div>
                                <span className="font-medium">Admin User</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-4">
                    <div className={activeTab === 'promotions' ? 'block' : 'hidden'}>
                        <Promotions />
                    </div>
                    <div className={activeTab === 'registration' ? 'block' : 'hidden'}>
                        <RegistrationTable />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPage;