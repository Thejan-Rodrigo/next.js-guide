export default function ProfileLayout({ children }) {
    return (
        <div>
            <div>
                <h1 className="raw">
                    Profile Header
                </h1>
            </div>
            {children}
            <div>
                <h1 className="raw">
                    Profile footer
                </h1>
            </div>
        </div>
    );
}