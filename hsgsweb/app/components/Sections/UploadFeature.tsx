import React, { useState } from 'react';
import { ImageSquare, ArrowCircleUp } from 'phosphor-react';
import { Camera, CaretDown, CaretUp } from 'phosphor-react';
import Image from 'next/image';

const GalleryGrid = () => {
    const [imagePairs, setImagePairs] = useState(Array.from({ length: 4 }, (_, i) => ({ id: i + 1, view: 'before' })));

    const toggleView = (id, nextView) => {
        setImagePairs(currentPairs => 
            currentPairs.map(pair => 
                pair.id === id ? { ...pair, view: nextView } : pair
            )
        );
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            {imagePairs.map((pair) => (
                <div key={pair.id} className="group relative w-full">                                
                    <Image
                        src={`/gallery/${pair.view}/${pair.id}`}
                        alt={`${pair.view} staging ${pair.id}`}
                        width={500}
                        height={300}
                        layout="responsive"
                        className="rounded-lg border border-gray-300 transition duration-300 ease-in-out transform group-hover:scale-[1.02] hover:border-red-500"
                    />
                    <div className="absolute top-0 left-0 p-4">
                        <button 
                            className={`mr-2 p-2 rounded ${pair.view === 'before' ? 'bg-gray-600 text-white' : 'bg-white'}`}
                            onClick={() => toggleView(pair.id, 'before')}
                        >
                        Before
                        </button>
                        <button 
                            className={`p-2 rounded ${pair.view === 'after' ? 'bg-gray-600 text-white' : 'bg-white'}`}
                            onClick={() => toggleView(pair.id, 'after')}
                        >
                        After
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ImageUpload: React.FC = () => {

    const [roomType, setRoomType] = useState('Living Room');
    const [designStyle, setDesignStyle] = useState('Standard');
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setSelectedImage(event.target?.result);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };  

    const handleImageGeneration = (e: React.ChangeEvent<HTMLInputElement>) => {

    };
    

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50 to-red-100 px-4 py-10">
            <div className="w-full max-w-7xl mx-auto">
                <div className="bg-white p-6 md:p-12 rounded-3xl shadow-2xl flex md:flex-row flex-col gap-10">
                    <GalleryGrid />
                    <div className="flex flex-col items-center justify-center space-y-4 min-w-[300px]">
                        {/* Step 1: Upload Image */}

                        <div className="text-xl">Step 1: Upload Image</div>
                        
                        {selectedImage ? (
                            <div className="flex flex-col items-center">
                                <Image
                                    src={String(selectedImage)}
                                    alt="Uploaded Image"
                                    width={300}
                                    height={300}
                                    className="rounded-md mb-1"
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300"
                                >
               Remove Image
                                </button>
                            </div>
                        ) : (
                            <label className="flex flex-col items-center p-6 border-2 border-dashed border-gray-400 rounded-md cursor-pointer hover:border-red-500 hover:bg-red-50 transition duration-300">
                                <ImageSquare size={48} color="#8b5cf6" weight="duotone" />
                                <div className="text-gray-800 mt-2">
            Drop an image, tap, take a photo, or CTRL-V
                                </div>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                        )}
                        {/* Step 2: Customize */}
                        <div className="text-xl">Step 2: Customize</div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Room Type
                                <select
                                    className="p-1 block w-full rounded-lg border-2 border-gray-300 shadow-md transition duration-300 ease-in-out focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 hover:border-red-400"
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option value="Living Room">Living Room</option>
                                    <option value="Bedroom">Bedroom</option>
                                    <option value="Kitchen">Kitchen</option>
                                    <option value="Bathroom">Bathroom</option>
                                </select>
                            </label>
                        </div>

                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Design Style
                                <select
                                    className="p-1  block w-full rounded-lg border-2 border-gray-300 shadow-md transition duration-300 ease-in-out focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 hover:border-red-400"
                                    value={designStyle}
                                    onChange={(e) => setDesignStyle(e.target.value)}
                                >
                                    <option value="Standard">Standard</option>
                                    <option value="Modern">Modern</option>
                                    <option value="Traditional">Traditional</option>
                                    <option value="Minimalist">Minimalist</option>
                                </select>
                            </label>
                        </div>
                        <button onClick={handleImageGeneration} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Generate New Design
                        </button>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default ImageUpload;
