// pages/photos.tsx

'use client'

import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockPhotos } from '../utils/mockPhotos';
import { UploadSimple } from 'phosphor-react';
import { List } from 'phosphor-react';

// Define the filter options outside of the component to avoid re-declaration on re-renders
const roomTypes = ['Bedroom', 'Living Room', 'Kitchen', 'Bathroom', 'Dining Room', 'Office'];
const styles = ['Standard', 'Scandinavian', 'Coastal', 'Modern', 'Vintage', 'Rustic', 'Art Deco'];
const colorSchemes = ['Bright', 'Monochrome', 'Pastel', 'Earth Tone', 'Vibrant'];

const originalOptions = ['Aggregate Original', 'Show Cluttered', 'Show Decluttered', 'Show Staged'];

const sortOptions = ['Date', 'File Size', 'Rating'];
const groupOptions = ['Property', 'Room Type', 'Style'];

const Photos: NextPage = () => {
    // State for various filters (simplified for demonstration)
    const [filter, setFilter] = useState({
        roomType: '',
        style: '',
        colorScheme: '', 
        dateFrom: Date,
        dateTo: Date,
    });
        // Add a state for sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const applyFilters = () => {
    // Logic to apply filters to the photo list
    // This should filter the `mockPhotos` based on the filter state
    };
    // Call `applyFilters` whenever the filter state changes
    // useEffect(() => {
    //   applyFilters();
    // }, [filter]);

    // State to manage which image is being viewed in the modal
    const [viewingImage, setViewingImage] = useState<string>('');

    // State to manage the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const [sortCriteria, setSortCriteria] = useState('');
    const [groupCriteria, setGroupCriteria] = useState('');

    // Function to open the modal with the clicked image
    const openModal = (imageUrl: string) => {
        setViewingImage(imageUrl);
        setIsModalOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setViewingImage('');
    };

    return (
        <div className="flex flex-col">
            <Head>
                <title>Virtual Staging AI - My Photos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="flex-grow bg-white flex px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        
                <div className="container bg-white mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        {/* Upload Button */}
                        <div>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-800 to-purple-800 text-white font-semibold text-lg leading-snug uppercase rounded-full shadow-lg hover:from-green-700 hover:to-purple-700 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50 active:from-green-800 active:to-purple-800 transition duration-150 ease-in-out"
                            >
                                <UploadSimple size={24} className="mr-2" />

        Upload Photo
                            </button>
                        </div>     
                        <h1 className="text-3xl font-bold text-center md:text-left">My Photos</h1>

                        {/* Sort and Group Filters */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
                            <div>
                                <label htmlFor="sort" className="sr-only">Aggregate by</label>
                                <select
                                    id="sort"
                                    className="form-select block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={sortCriteria}
                                    onChange={(e) => {
                                        setSortCriteria(e.target.value);
                                        // Trigger sort functionality here if needed
                                    }}
                                >
                                    <option value="">Aggregate by</option>
                                    {originalOptions.map((option) => (
                                        <option key={option} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="sort" className="sr-only">Sort by</label>
                                <select
                                    id="sort"
                                    className="form-select block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={sortCriteria}
                                    onChange={(e) => {
                                        setSortCriteria(e.target.value);
                                        // Trigger sort functionality here if needed
                                    }}
                                >
                                    <option value="">Sort by</option>
                                    {sortOptions.map((option) => (
                                        <option key={option} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="group" className="sr-only">Group by</label>
                                <select
                                    id="group"
                                    className="form-select block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={groupCriteria}
                                    onChange={(e) => {
                                        setGroupCriteria(e.target.value);
                                        // Trigger group functionality here if needed
                                    }}
                                >
                                    <option value="">Group by</option>
                                    {groupOptions.map((option) => (
                                        <option key={option} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mockPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className="overflow-hidden rounded-lg shadow-lg transition cursor-pointer duration-300 ease-in-out transform hover:scale-102 hover:shadow-md hover:border hover:border-blue-600"
                                onClick={() => openModal(photo.url)}
                            >
                                <Image
                                    src={photo.url}
                                    alt={`Photo from ${photo.property}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold">{photo.property}</h2>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                            onClick={closeModal}
                        >
                            <div className="bg-white p-4 rounded-lg">
                                <Image src={viewingImage} alt="Enlarged photo" width={800} height={600} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Toggle Button for Mobile Sidebar */}
                <button
                    className="md:hidden p-2 bg-blue-600 text-white rounded-full shadow-lg fixed z-30 top-36 right-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-200"
                    onClick={toggleSidebar}
                >
                    <List size={32} />
                </button>

                {/* Sidebar for filters */}
                <aside className={`transform top-4 left-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-slate-100 p-4 border-r rounded-lg border-gray-100 space-y-4 fixed h-full overflow-auto z-20 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex md:flex-col transition-transform duration-300 ease-in-out`}>
                    <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                    <div className="space-y-2">

                        {/* Room Type Filter */}
                        <div className="">
                            <label htmlFor="roomType" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Room Type</label>
                            <select
                                id="roomType"
                                name="roomType"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={filter.roomType}
                                onChange={(e) => setFilter({ ...filter, roomType: e.target.value })}
                            >
                                <option value="">Select a room type</option>
                                {roomTypes.map((type) => (
                                    <option key={type} value={type.toLowerCase()}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Style Filter */}
                        <div className="">
                            <label htmlFor="style" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Furniture Style</label>
                            <select
                                id="style"
                                name="style"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={filter.style}
                                onChange={(e) => setFilter({ ...filter, style: e.target.value })}
                            >
                                <option value="">Select a style</option>
                                {styles.map((style) => (
                                    <option key={style} value={style.toLowerCase()}>{style}</option>
                                ))}
                            </select>
                        </div>

                        {/* Color Scheme Filter */}
                        <div className="">
                            <label htmlFor="colorScheme" className="block text-sm font-medium text-gray-900">Color Scheme</label>
                            <select
                                id="colorScheme"
                                name="colorScheme"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={filter.colorScheme}
                                onChange={(e) => setFilter({ ...filter, colorScheme: e.target.value })}
                            >
                                <option value="">Select a color scheme</option>
                                {colorSchemes.map((scheme) => (
                                    <option key={scheme} value={scheme.toLowerCase()}>{scheme}</option>
                                ))}
                            </select>
                        </div>



                        {/* Date Range Filter */}
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full px-2">                                <div className="flex-1">
                                <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700">Date From</label>
                                <input
                                    type="date"
                                    id="dateFrom"
                                    className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={filter.dateFrom}
                                    onChange={(e) => setFilter({ ...filter, dateFrom: e.target.value })}
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700">Date To</label>
                                <input
                                    type="date"
                                    id="dateTo"
                                    className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={filter.dateTo}
                                    onChange={(e) => setFilter({ ...filter, dateTo: e.target.value })}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="dimension" className="block text-sm font-medium text-gray-900">Dimension</label>
                            <select
                                id="dimension"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={filter.dimension}
                                onChange={(e) => setFilter({ ...filter, dimension: e.target.value })}
                            >
                                <option value="">Select Dimension</option>
                                <option value="2d">2D</option>
                                <option value="3d">3D</option>
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="folderSearch" className="block text-sm font-medium text-gray-900">Folder Search</label>
                            <input
                                type="text"
                                id="folderSearch"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="Search by folder..."
                                value={filter.description}
                                onChange={(e) => setFilter({ ...filter, description: e.target.value })}
                            />
                        </div>

                        <div className="">
                            <label htmlFor="tagSearch" className="block text-sm font-medium text-gray-900">Tag Search</label>
                            <input
                                type="text"
                                id="tagSearch"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="Search by tags..."
                                value={filter.tags}
                                onChange={(e) => setFilter({ ...filter, tags: e.target.value })}
                            />
                        </div>


                        <div className="">
                            <label htmlFor="clientFeedback" className="block text-sm font-medium text-gray-900">Feedback</label>
                            <select
                                id="clientFeedback"
                                className="block w-full p-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={filter.clientFeedback}
                                onChange={(e) => setFilter({ ...filter, clientFeedback: e.target.value })}
                            >
                                <option value="">All Photos</option>
                                <option value="withFeedback">With Feedback</option>
                                <option value="withoutFeedback">Without Feedback</option>
                                <option value="0">0 🌟</option>
                                <option value="1">1 🌟</option>
                                <option value="2">2 🌟</option>
                                <option value="3">3 🌟</option>

                            </select>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                                type="button"
                                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 border border-blue-500 transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                onClick={applyFilters}
                            >
        Apply
                            </button>
                            <button
                                type="button"
                                className="flex-grow bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 border border-gray-300 transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                            >
        Clear
                            </button>
                        </div>
                    </div>
                </aside>

            </div>

            <Footer />
        </div>
    );
};

export default Photos;
