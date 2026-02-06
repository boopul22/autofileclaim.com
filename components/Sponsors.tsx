import React from 'react';
import { Sponsor } from '../types';

const sponsors: Sponsor[] = [
    {
        name: "Smith & Associates Law Group",
        office: "123 Peachtree St NE, Atlanta, GA 30303",
        jurisdictions: ["GA", "PA", "AZ"]
    },
    {
        name: "West Coast Injury Lawyers, LLP",
        office: "456 Wilshire Blvd, Los Angeles, CA 90010",
        jurisdictions: ["CA", "TX"]
    },
    {
        name: "Liberty Legal Partners",
        office: "789 Congress Ave, Austin, TX 78701",
        jurisdictions: ["TX", "CO", "MO"]
    }
];

const Sponsors: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">OUR MARKETING PARTNERS & SPONSORS</h1>

                    <div className="mb-8 p-6 bg-slate-50 rounded-lg border-l-4 border-blue-600 text-sm text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            Auto File Claim is a legal advertising service that connects consumers with independent attorneys. Auto File Claim is not a law firm, does not provide legal advice, and does not endorse or recommend any attorney. No attorney-client relationship is formed by using this website or its services. Past results do not guarantee future outcomes. These attorneys participate in the Auto File Claim advertising program and have paid for promotional placement on this site. Selection of an attorney is solely at the consumer’s discretion.
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">PARTICIPATING LEGAL SPONSORS</h2>
                    <p className="mb-6 text-slate-600">
                        The following attorneys and law firms are current participants in our joint advertising program. You have the right to request an attorney by name or choose an attorney not affiliated with this program.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        {sponsors.map((sponsor, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition bg-slate-50">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{sponsor.name}</h3>
                                <p className="text-sm text-slate-600 mb-1">
                                    <span className="font-semibold">Principal Office:</span> {sponsor.office}
                                </p>
                                <p className="text-sm text-slate-600">
                                    <span className="font-semibold">Jurisdictions:</span> Licensed to practice in {sponsor.jurisdictions.map(j => j).join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-sm text-slate-500 italic border-t pt-4">
                        Auto File Claim does not determine which attorney will handle a specific case. You have the right to choose any attorney, including those not affiliated with this program.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sponsors;