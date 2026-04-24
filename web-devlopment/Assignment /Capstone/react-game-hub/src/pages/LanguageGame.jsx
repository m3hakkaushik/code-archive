import { useState, useEffect } from 'react';

// Simulated API Call
const fetchVocabulary = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, eng: "Hello", target: { it: "Ciao", jp: "Konnichiwa", de: "Hallo" } },
        { id: 2, eng: "Thank you", target: { it: "Grazie", jp: "Arigatou", de: "Danke" } },
        { id: 3, eng: "Water", target: { it: "Acqua", jp: "Mizu", de: "Wasser" } },
      ]);
    }, 800);
  });
};

export default function LanguageGame() {
  const [lang, setLang] = useState('it'); // 'it', 'jp', 'de'
  const [vocab, setVocab] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // CRUD States
  const [newWord, setNewWord] = useState({ eng: '', trans: '' });
  const [editId, setEditId] = useState(null);

  // READ (Initial API Integration)
  useEffect(() => {
    fetchVocabulary().then((data) => {
      setVocab(data);
      setLoading(false);
    });
  }, []);

  // CREATE or UPDATE Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newWord.eng || !newWord.trans) return;

    if (editId) {
      // UPDATE Logic
      setVocab(vocab.map(word => 
        word.id === editId 
          ? { ...word, eng: newWord.eng, target: { ...word.target, [lang]: newWord.trans } } 
          : word
      ));
      setEditId(null);
    } else {
      // CREATE Logic
      const newEntry = {
        id: Date.now(),
        eng: newWord.eng,
        target: { [lang]: newWord.trans }
      };
      setVocab([...vocab, newEntry]);
    }
    setNewWord({ eng: '', trans: '' });
  };

  // EDIT Trigger
  const handleEdit = (item) => {
    setEditId(item.id);
    setNewWord({ eng: item.eng, trans: item.target[lang] || '' });
  };

  // DELETE Logic
  const handleDelete = (id) => {
    setVocab(vocab.filter(word => word.id !== id));
    if(editId === id) { // Reset form if deleting the item being edited
      setEditId(null);
      setNewWord({ eng: '', trans: '' });
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="text-xl font-medium dark:text-white">Fetching Vocabulary API...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 transition-all duration-300">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Language Master
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium italic">Master vocabulary through interaction</p>
      </header>
      
      {/* Language Selector Tabs */}
      <div className="flex justify-center p-1 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8 max-w-md mx-auto">
        {['it', 'jp', 'de'].map((l) => (
          <button 
            key={l}
            onClick={() => {setLang(l); setEditId(null); setNewWord({eng:'', trans:''});}} 
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              lang === l 
              ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {l === 'it' ? '🇮🇹 Italian' : l === 'jp' ? '🇯🇵 Japanese' : '🇩🇪 German'}
          </button>
        ))}
      </div>

      {/* FORM (Combined Create & Update) */}
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl mb-10 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">English</label>
          <input 
            type="text" placeholder="e.g. Apple" className="w-full border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-900 p-3 rounded-xl focus:border-blue-500 outline-none transition-all dark:text-white"
            value={newWord.eng} onChange={(e) => setNewWord({...newWord, eng: e.target.value})}
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Translation ({lang.toUpperCase()})</label>
          <input 
            type="text" placeholder="Translation" className="w-full border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-900 p-3 rounded-xl focus:border-blue-500 outline-none transition-all dark:text-white"
            value={newWord.trans} onChange={(e) => setNewWord({...newWord, trans: e.target.value})}
          />
        </div>
        <div className="flex items-end">
          <button type="submit" className={`w-full md:w-auto px-8 py-3 rounded-xl font-bold text-white shadow-lg transform active:scale-95 transition-all ${editId ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}>
            {editId ? 'Update Word' : 'Add Word'}
          </button>
        </div>
      </form>

      {/* READ / ACTION List */}
      <div className="grid grid-cols-1 gap-4">
        {vocab.map((item) => (
          <div key={item.id} className="group flex justify-between items-center p-5 bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="space-y-1">
              <span className="text-xs font-black text-gray-400 uppercase tracking-tighter">English</span>
              <p className="text-xl font-bold dark:text-white">{item.eng}</p>
            </div>
            
            <div className="text-center">
               <span className="text-xs font-black text-blue-400 uppercase tracking-tighter">{lang}</span>
               <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.target[lang] || "???"}</p>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => handleEdit(item)} 
                className="p-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors"
                title="Edit word"
              >
                ✏️
              </button>
              <button 
                onClick={() => handleDelete(item.id)} 
                className="p-2 bg-red-50 dark:bg-red-900/30 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                title="Delete word"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
        {vocab.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No words found. Add some above!</p>
        )}
      </div>
    </div>
  );
}