import React, { useState } from 'react';
import { Search, User, AlertCircle, Clock, BookOpen } from 'lucide-react';
import { Student } from '../types';

interface SearchSectionProps {
  students: Student[];
  onResult: (student: Student | null) => void;
  isDarkMode?: boolean;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ students, onResult, isDarkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    // منع البحث - المسابقة لم تبدأ بعد
    onResult(null);
    return;
    
    // الكود القديم للبحث (معطل حالياً)
    /*
    if (!searchTerm.trim()) {
      onResult(null);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const found = students.find(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toString() === searchTerm.trim()
    );
    
    onResult(found || null);
    setIsLoading(false);
    */
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slideInDown">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Search className="w-12 h-12 text-blue-600 animate-bounce-slow" />
              <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-gray-100' : 'gradient-text-animated'}`}>
                البحث عن النتائج
              </h2>
            </div>
            <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              ابحث عن نتيجتك باستخدام الاسم أو رقم الطالب
            </p>
          </div>

          {/* Search Section */}
          <div className={`p-8 rounded-3xl shadow-2xl transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-700 to-gray-600 border-2 border-gray-600/50' 
              : 'bg-gradient-to-r from-white to-blue-50 border-2 border-blue-200'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className={`flex rounded-2xl overflow-hidden border-2 focus-within:border-blue-500 transition-all duration-300 shadow-lg ${
                  isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'
                }`}>
                  <div className={`px-6 py-4 flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <User className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="البحث متوقف حالياً - ترقبوا النتائج قريباً..."
                    className={`flex-1 px-6 py-4 text-right focus:outline-none text-lg transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-100 placeholder-gray-400' 
                        : 'bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    dir="rtl"
                    disabled={true}
                  />
                </div>
              </div>
              
              <button
                onClick={handleSearch}
                disabled={true}
                className="px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 font-bold text-lg bg-gray-400 text-gray-200 cursor-not-allowed"
              >
                <Clock className="w-6 h-6" />
                ترقبوا النتائج
              </button>
            </div>
            
            {/* رسالة توضيحية */}
            <div className={`mt-6 p-6 rounded-2xl border-2 text-center transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-600/50' 
                : 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-300'
            }`}>
              <div className="flex justify-center items-center gap-3 mb-4">
                <AlertCircle className={`w-8 h-8 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} animate-pulse`} />
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-800'}`}>
                  البحث عن النتائج متوقف حالياً
                </h3>
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                ستكون النتائج متاحة فور انتهاء جميع الاختبارات والتصحيح
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};