export default function Home() {
    return (
        <div
            className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div
                className="bg-gray-900 p-2 pt-6 pb-6 rounded-lg shadow-lg text-center text-primary w-96">
                <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                />
                <h1 className="mt-4 text-xl font-bold text-primary">João Victor Santos</h1>
                <p className="text-secondary-text">Rio Grande do Sul, Brasil</p>
                <p className="m-2">Front-End Developer and a dreamer.</p>
                <div className="mt-4 p-2 space-y-2 font-regular">
                    <a href="https://github.com/Jao-Viquitor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-btnPrimary hover:bg-hoverPrimary text-primary py-2 px-4 rounded text-center">
                        GitHub
                    </a>
                    <a href="https://www.frontendmentor.io/profile/Jao-Viquitor"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full bg-btnPrimary hover:bg-hoverPrimary text-primary py-2 px-4 rounded text-center">
                        Frontend Mentor
                    </a>
                    <a href="https://dev.to/viquitor"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full bg-btnPrimary hover:bg-hoverPrimary text-primary py-2 px-4 rounded text-center">
                        dev.to
                    </a>
                    <a href="https://www.linkedin.com/in/viquitor/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full bg-btnPrimary hover:bg-hoverPrimary text-primary py-2 px-4 rounded text-center">
                        LinkedIn
                    </a>
                    <a href="https://x.com/SirMultiverse"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full bg-btnPrimary hover:bg-hoverPrimary text-primary py-2 px-4 rounded text-center">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/jaoviquitor/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full bg-btnPrimary hover:bg-hoverPrimary text-primary py-2 px-4 rounded text-center">
                        Instagram
                    </a>
                </div>
                <p className="font-thin text-sm pt-6">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    "Hello! my name is Viquitor... What do you mean you've never heard of me?"</p>
            </div>
        </div>


    );
}
