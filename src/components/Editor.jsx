import React,{useState} from 'react'
import axios from 'axios';

const Editor = ({user}) => {
    const [content, setContent] = useState('');

    const handleSaveToDrive = async () => {
      try {
        await axios.post('http://localhost:5000/drive/upload', { content, userId: user.id }, { withCredentials: true });
        alert('Saved to Google Drive!');
      } catch (error) {
        console.error('Error saving to Google Drive:', error);
      }
    };
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-10">
    <h2 className="text-2xl font-semibold mb-4">Write Your Letter</h2>
    <textarea
      className="w-full h-64 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Start writing..."
    />
    <button onClick={handleSaveToDrive} className="mt-4 bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition">
      Save to Google Drive
    </button>
  </div>
  )
}

export default Editor
