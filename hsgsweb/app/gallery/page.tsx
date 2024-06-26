'use client'

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
declare const window: any;

const SpeakingPage = () => {
    const [prompt, setPrompt] = useState('');
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [rating, setRating] = useState('');
    const [feedback, setFeedback] = useState('');

    const getRandomPrompt = () => {
        fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer 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`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "openai/gpt-3.5-turbo",
                "messages": [
                    { "role": "user", "content": "Give me a about 7 words speaking prompt for IELTS without bold, highlighted text or special start character" },
                ],
            })
        })
        .then(response => response.json())
        .then(data => {
            const messageContent = data.choices[0].message.content;
            setPrompt(messageContent);
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred while fetching the prompt.');
        });
    };

    const rateTranscript = (transcript: string, prompt: string) => {
        fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer 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`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "openai/gpt-3.5-turbo",
                "messages": [
                    { "role": "user", "content": `Rate the following transcript based on the IELTS Speaking band. Prompt: "${prompt}". Transcript: "${transcript}"` },
                ],
            })
        })
        .then(response => response.json())
        .then(data => {
            const messageContent = data.choices[0].message.content;
            setRating(messageContent);
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred while rating the transcript.');
        });
    };

    const getFeedback = (transcript: string, prompt: string) => {
        fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer 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`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "openai/gpt-3.5-turbo",
                "messages": [
                    { "role": "user", "content": `Give feedback for improvement based on the IELTS Speaking band. Prompt: "${prompt}". Transcript: "${transcript}"` },
                ],
            })
        })
        .then(response => response.json())
        .then(data => {
            const messageContent = data.choices[0].message.content;
            setFeedback(messageContent);
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred while getting feedback.');
        });
    };

    const startSpeechRecognition = () => {
        setIsLoading(true);
        setError('');

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setError('Speech recognition is not supported in this browser.');
            setIsLoading(false);
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const result = event.results[0][0].transcript;
            setTranscript(result);
            setIsLoading(false);
            rateTranscript(result, prompt); // Rate the transcript after recognition
            getFeedback(result, prompt); // Get feedback after recognition
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.error('Speech recognition error:', event.error);
            setError('An error occurred during speech recognition');
            setIsLoading(false);
        };

        recognition.onend = () => {
            setIsLoading(false);
        };

        recognition.start();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
            <Header />
            <div className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">IELTS Speaking Practice</h1>
                <div className="w-full max-w-3xl mx-auto bg-white p-6 md:p-12 rounded-3xl shadow-2xl text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
                        onClick={getRandomPrompt}
                    >
                        Get a Speaking Prompt
                    </button>
                    {prompt && (
                        <div className="mb-6">
                            <p className="text-lg">{prompt}</p>
                        </div>
                    )}
                    <div className="flex flex-col items-center">
                        <p className="mb-4">Status: {isLoading ? 'Recording...' : 'Idle'}</p>
                        <button
                            className={`bg-${isLoading ? 'gray' : 'green'}-500 hover:bg-${isLoading ? 'gray' : 'green'}-700 text-white font-bold py-2 px-4 rounded mb-4`}
                            onClick={startSpeechRecognition}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Recording...' : 'Start Recording'}
                        </button>
                        {isLoading && (
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
                                onClick={() => setIsLoading(false)}
                            >
                                Stop Recording
                            </button>
                        )}
                        {transcript && (
                            <div className="mt-4 bg-gray-100 p-4 rounded shadow-inner">
                                <h2 className="text-lg font-bold mb-2">Transcript</h2>
                                <p className="text-left whitespace-pre-wrap leading-relaxed">{transcript}</p>
                            </div>
                        )}
                        {rating && (
                            <div className="mt-4 bg-yellow-100 p-4 rounded shadow-inner">
                                <h2 className="text-lg font-bold mb-2">IELTS Speaking Band Rating</h2>
                                <p className="text-left whitespace-pre-wrap leading-relaxed">{rating}</p>
                            </div>
                        )}
                        {feedback && (
                            <div className="mt-4 bg-green-100 p-4 rounded shadow-inner">
                                <h2 className="text-lg font-bold mb-2">Feedback for Improvement</h2>
                                <p className="text-left whitespace-pre-wrap leading-relaxed">{feedback}</p>
                            </div>
                        )}
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SpeakingPage;