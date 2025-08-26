export const FooterSection = () => {
    return (
        <footer className="relative py-12 px-4 border-t border-white/10 z-10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                EA
                            </div>
                            <div className="text-xl font-bold text-white">EA Digitals</div>
                        </div>
                        <p className="text-gray-400 max-w-md mb-4">
                            Your trusted partner for comprehensive digital solutions. From web development to hardware services, we&apos;ve got you covered.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Website Development</li>
                            <li>Data Annotation</li>
                            <li>Excel and Google Sheets Templates</li>
                            <li>Software Solutions</li>
                            <li>Hardware Services</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>ea.digitals0508@gmail.com</li>
                            <li>(+63) 9275687502</li>
                            <li>Available 24/7</li>
                            <li>Free Consultation</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
                    <div className="text-gray-500 text-sm">
                        © 2025 EA Digitals. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {['Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}