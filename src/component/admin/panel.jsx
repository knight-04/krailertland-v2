import React from 'react';
import { TagIcon, Users, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onLogout, activeTab, onTabChange }) => {
    return (
        <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 w-64`}>
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Admin Panel</h2>
                <button
                    onClick={onClose}
                    className="lg:hidden"
                >
                    <X size={24} />
                </button>
            </div>

            <nav className="p-4 space-y-2">
                <button
                    onClick={() => onTabChange('promotions')}
                    className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 w-full ${
                        activeTab === 'promotions' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                    }`}
                >
                    <TagIcon size={20} />
                    <span>โปรโมชั่น</span>
                </button>
                
                <button
                    onClick={() => onTabChange('registration')}
                    className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 w-full ${
                        activeTab === 'registration' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                    }`}
                >
                    <Users size={20} />
                    <span>ลงทะเบียน</span>
                </button>
            </nav>

            <div className="absolute bottom-0 w-full p-4 border-t">
                <button
                    onClick={onLogout}
                    className="flex items-center space-x-3 text-gray-600 hover:text-red-600 w-full p-3 rounded-lg hover:bg-gray-100"
                >
                    <LogOut size={20} />
                    <span>ออกจากระบบ</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;