import React, { useState } from 'react';
import {
    Menu,
    Edit2,
    Trash2,
    Plus,
    Check,
    X as Cancel
} from 'lucide-react';

const Promotions = () => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [promotions, setPromotions] = useState([]);
    const [newPromotion, setNewPromotion] = useState(null);

    const handleDragStart = (e, index) => {
        setDraggedItem(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnter = (e, index) => {
        e.preventDefault();
        if (draggedItem === null || draggedItem === index) return;

        const newPromotions = [...promotions];
        const draggedPromotion = newPromotions[draggedItem];
        
        newPromotions.splice(draggedItem, 1);
        newPromotions.splice(index, 0, draggedPromotion);

        const updatedPromotions = newPromotions.map((promo, idx) => ({
            ...promo,
            id: idx + 1
        }));

        setPromotions(updatedPromotions);
        setDraggedItem(index);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    const handleImageUpload = (file, id = null) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (id) {
                    setPromotions(promotions.map(promo =>
                        promo.id === id ? { ...promo, image: reader.result } : promo
                    ));
                } else {
                    setNewPromotion(prev => ({
                        ...prev,
                        image: reader.result
                    }));
                }
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleAddPromotion = () => {
        const newId = promotions.length + 1;
        setNewPromotion({
            id: newId,
            image: '',
            text: '',
            isEditing: true
        });
    };

    const handleConfirmAdd = () => {
        if (newPromotion) {
            setPromotions([...promotions, { ...newPromotion, isEditing: false }]);
            setNewPromotion(null);
        }
    };

    const handleCancelAdd = () => {
        setNewPromotion(null);
    };

    const handleEdit = (id) => {
        setPromotions(promotions.map(promo =>
            promo.id === id ? { ...promo, isEditing: true } : promo
        ));
    };

    const handleConfirmEdit = (id) => {
        setPromotions(promotions.map(promo =>
            promo.id === id ? { ...promo, isEditing: false } : promo
        ));
    };

    const handleCancelEdit = (id) => {
        setPromotions(promotions.map(promo =>
            promo.id === id ? { ...promo, isEditing: false } : promo
        ));
    };

    const handleRemove = (id) => {
        setPromotions(promotions.filter(promo => promo.id !== id));
    };

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">รายการโปรโมชั่น</h2>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ลำดับ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">รูป</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ข้อความ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {promotions.map((promotion, index) => (
                            <tr 
                                key={promotion.id}
                                draggable={!promotion.isEditing}
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnter={(e) => handleDragEnter(e, index)}
                                onDragEnd={handleDragEnd}
                                onDragOver={(e) => e.preventDefault()}
                                className={`${!promotion.isEditing ? 'cursor-move' : ''} ${draggedItem === index ? 'opacity-50' : ''}`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {!promotion.isEditing && (
                                            <Menu size={16} className="cursor-move" />
                                        )}
                                        <span className="ml-3">{promotion.id}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {promotion.isEditing ? (
                                        <div className="space-y-2">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="w-full"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        handleImageUpload(file, promotion.id);
                                                    }
                                                }}
                                            />
                                            {promotion.image && (
                                                <img
                                                    src={promotion.image}
                                                    alt="preview"
                                                    className="h-52 w-96 object-cover rounded"
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        <img
                                            src={promotion.image}
                                            alt="promotion"
                                            className="h-52 w-96 object-cover rounded"
                                        />
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {promotion.isEditing ? (
                                        <input
                                            type="text"
                                            className="w-full p-2 border rounded"
                                            value={promotion.text}
                                            onChange={(e) => {
                                                const newText = e.target.value;
                                                setPromotions(promotions.map(p =>
                                                    p.id === promotion.id ? { ...p, text: newText } : p
                                                ));
                                            }}
                                        />
                                    ) : (
                                        promotion.text
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {promotion.isEditing ? (
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleConfirmEdit(promotion.id)}
                                                className="p-2 text-green-600 hover:text-green-800"
                                            >
                                                <Check size={20} />
                                            </button>
                                            <button
                                                onClick={() => handleCancelEdit(promotion.id)}
                                                className="p-2 text-red-600 hover:text-red-800"
                                            >
                                                <Cancel size={20} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(promotion.id)}
                                                className="p-2 text-blue-600 hover:text-blue-800"
                                            >
                                                <Edit2 size={20} />
                                            </button>
                                            <button
                                                onClick={() => handleRemove(promotion.id)}
                                                className="p-2 text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {newPromotion && (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">{newPromotion.id}</td>
                                <td className="px-6 py-4">
                                    <div className="space-y-2">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    handleImageUpload(file);
                                                }
                                            }}
                                        />
                                        {newPromotion.image && (
                                            <img
                                                src={newPromotion.image}
                                                alt="preview"
                                                className="h-52 w-96 object-cover rounded"
                                            />
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="w-full p-2 border rounded"
                                        value={newPromotion.text}
                                        onChange={(e) => setNewPromotion({
                                            ...newPromotion,
                                            text: e.target.value
                                        })}
                                        placeholder="ใส่ข้อความโปรโมชั่น"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={handleConfirmAdd}
                                            className="p-2 text-green-600 hover:text-green-800"
                                        >
                                            <Check size={20} />
                                        </button>
                                        <button
                                            onClick={handleCancelAdd}
                                            className="p-2 text-red-600 hover:text-red-800"
                                        >
                                            <Cancel size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            {!newPromotion && (
                <div className="p-4 border-t">
                    <button
                        onClick={handleAddPromotion}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus size={20} />
                        <span>เพิ่มโปรโมชั่น</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Promotions;