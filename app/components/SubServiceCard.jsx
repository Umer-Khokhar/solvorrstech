import React from 'react';

export default function NotchCards() {
    const cards = [
        {
            id: 1,
            icon: '🎯',
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600',
            title: 'Title Goes Here',
            description: 'Tailored to meet individual needs perfectly balanced',
        },
        {
            id: 2,
            icon: '😊',
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'Title Goes Here',
            description: 'Tailored to meet individual needs perfectly balanced',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Notch using clip-path */}
                        <div
                            className={`absolute top-0 left-6 w-10 h-10 ${card.iconBg} rounded-full flex items-center justify-center text-xl -translate-y-1/2`}
                            style={{
                                clipPath: 'circle(50% at 50% 50%)',
                            }}
                        >
                            <span className={card.iconColor}>{card.icon}</span>
                        </div>

                        {/* Card content with top padding to accommodate the notch */}
                        <div className="pt-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {card.description}
                            </p>
                            <button className="text-sm font-medium text-gray-900 flex items-center gap-2 hover:gap-3 transition-all duration-200">
                                Read more
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Alternative: Notch cut from card itself */}
                        <div
                            className="absolute top-0 left-6 w-12 h-6 bg-gray-50"
                            style={{
                                clipPath: 'ellipse(50% 100% at 50% 0%)',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}