import {Link} from "react-router";

interface FileUploaderProps {
    onFileSelect?: (file: (File | null)) => void
}

const Navbar = ({onFileSelect}: FileUploaderProps) => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar