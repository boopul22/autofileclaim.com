import React from 'react';
import { Link } from 'react-router-dom';

const WaHealthPolicy: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">Washington Consumer Health Data Policy</h1>
                    <p className="text-sm text-slate-500 mb-8">Effective Date: January 26, 2026</p>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <section>
                            <p>
                                This policy applies specifically to Washington residents and describes how Auto File Claim (“we,” “us,” or “our”) collects, uses, and shares “Consumer Health Data” as defined by the Washington My Health My Data Act (MHMDA).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Categories of Health Data Collected</h2>
                            <p className="mb-2">To facilitate your inquiry and connect you with a Marketing Partner, we collect the following categories of Consumer Health Data:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li><span className="font-semibold">Injury & Condition Information:</span> Details regarding physical injuries, medical conditions, or symptoms resulting from a motor vehicle accident provided via our web forms or telephone lines.</li>
                                <li><span className="font-semibold">Health-Related Inferences:</span> Inferences regarding your health status, physical condition, or medical needs drawn from the description of your accident and subsequent inquiries.</li>
                                <li><span className="font-semibold">Technical Identifiers:</span> IP addresses or unique device IDs that may be linked to your health-related search or inquiry on our Site.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Sources of Collection</h2>
                            <p className="mb-2">We collect Consumer Health Data directly from you when you:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Complete our online claim evaluation forms.</li>
                                <li>Speak with our intake specialists via our recorded telephone lines.</li>
                                <li>Interact with our Site (via automated tracking technologies like cookies or pixels).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">3. Purpose of Collection and Use</h2>
                            <p className="mb-2">We collect and use this data strictly for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li><span className="font-semibold">Marketing Connections:</span> To identify and connect you with independent third-party law firms, intake teams, or legal professionals (“Marketing Partners”).</li>
                                <li><span className="font-semibold">Administrative Services:</span> To verify the validity of a claim inquiry and ensure you are matched with a Partner capable of handling your specific injury type.</li>
                                <li><span className="font-semibold">Compliance:</span> To maintain a record of consent as required by state and federal law.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Sharing of Health Data</h2>
                            <p className="mb-2">We share the categories of data listed above with our Third-Party Marketing Partners and necessary service providers (such as cloud storage or communication platforms).</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li><span className="font-semibold">No Sale of Health Data:</span> We do not sell Consumer Health Data to data brokers. We receive administrative and marketing fees from our Partners for the technology services used to facilitate these connections.</li>
                                <li><span className="font-semibold">Affiliates:</span> A list of the categories of third parties with whom we share data can be found on our <Link to="/sponsors" className="text-blue-600 underline">Sponsors/Partners Page</Link>.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">5. Your Rights and How to Exercise Them</h2>
                            <p className="mb-2">Washington residents have the following specific rights:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li><span className="font-semibold">Right to Access:</span> Confirm if we are processing your health data and obtain a list of third parties with whom we have shared it.</li>
                                <li><span className="font-semibold">Right to Delete:</span> Request the deletion of your health data. We will also notify any third parties with whom we shared your data to honor this request.</li>
                                <li><span className="font-semibold">Right to Withdraw Consent:</span> Revoke your consent for the future processing of your health data.</li>
                            </ul>
                            <p className="mt-4">
                                <span className="font-semibold">How to Exercise Your Rights:</span> Please submit your request to Info@autofileclaim.com with the subject line “Washington Privacy Request.”
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">6. Appeals Process</h2>
                            <p className="mb-2">If we deny your request to exercise a right under the MHMDA, you have the right to appeal our decision within 30 days.</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>To appeal, please email info@auto-file-claim.com with the subject line “Privacy Appeal.”</li>
                                <li>We will respond to your appeal within 45 days. If your appeal is denied, you may contact the Washington State Attorney General at <a href="https://www.atg.wa.gov" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.atg.wa.gov</a>.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaHealthPolicy;