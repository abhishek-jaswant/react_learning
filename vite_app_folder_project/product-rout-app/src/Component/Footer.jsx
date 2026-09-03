import "../App.css"
export const Footer = () => {

    return (
        <footer className="p-4 bg-gray-100">
            <p className="text-center text-gray-700">
                &copy; {new Date().getFullYear()} Abhishek Ahirwar
            </p>
        </footer>
    )
}